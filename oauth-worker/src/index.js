/*
  OAuth proxy para Decap CMS — Cloudflare Worker.

  Decap (el panel /admin) necesita un intermediario que complete el flujo de
  OAuth con GitHub: el navegador de Laura no puede hablar directo con GitHub
  porque el "client secret" no debe quedar expuesto en el frontend. Este Worker
  guarda el secret y hace el intercambio del lado del servidor.

  Flujo:
    1. /auth          → redirige a GitHub para que Laura autorice.
    2. /callback      → GitHub vuelve con un "code"; el Worker lo cambia por un
                        token y se lo pasa a la ventana del panel (postMessage).

  Variables/secretos que usa (se configuran en Cloudflare, ver README):
    - GITHUB_CLIENT_ID      (variable)
    - GITHUB_CLIENT_SECRET  (secreto)

  Basado en el patrón estándar de OAuth para Decap/Netlify CMS.
*/

const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN = 'https://github.com/login/oauth/access_token';

function randomState() {
  const a = new Uint8Array(16);
  crypto.getRandomValues(a);
  return [...a].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Página que devuelve el token a la ventana del CMS vía postMessage.
function renderCallback(status, payload) {
  const body = JSON.stringify({ ...payload });
  return `<!doctype html><html><body><script>
    (function () {
      function send(message) {
        // El '*' es seguro acá: el contenido es el token y la ventana es la del CMS.
        window.opener && window.opener.postMessage(
          'authorization:github:${status}:' + message,
          '*'
        );
      }
      window.addEventListener('message', function () { send('${body.replace(/'/g, "\\'")}'); }, { once: true });
      window.opener && window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Paso 1: iniciar OAuth → redirigir a GitHub.
    if (url.pathname === '/auth') {
      const redirectUri = `${url.origin}/callback`;
      const state = randomState();
      const gh = new URL(GITHUB_AUTHORIZE);
      gh.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      gh.searchParams.set('redirect_uri', redirectUri);
      gh.searchParams.set('scope', 'repo');
      gh.searchParams.set('state', state);
      return Response.redirect(gh.toString(), 302);
    }

    // Paso 2: callback de GitHub → intercambiar code por token.
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Falta el parámetro "code".', { status: 400 });
      }

      const tokenRes = await fetch(GITHUB_TOKEN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await tokenRes.json();

      if (data.error || !data.access_token) {
        return new Response(renderCallback('error', { message: data.error || 'sin token' }), {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }

      return new Response(
        renderCallback('success', { token: data.access_token, provider: 'github' }),
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      );
    }

    return new Response('OAuth proxy para Decap CMS. Endpoints: /auth, /callback', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  },
};
