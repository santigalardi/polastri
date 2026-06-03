# OAuth para el panel /admin (Decap CMS)

Este Worker permite que **Laura inicie sesión en `/admin` con GitHub**. Es una
configuración de **una sola vez**. Ejecutás vos los pasos (yo no toco tus
credenciales). Tiempo estimado: ~15 minutos.

Al final, el flujo queda así:
`Laura entra a /admin → "Iniciar sesión con GitHub" → autoriza → escribe y publica`.

---

## Resumen de lo que vamos a hacer

1. Crear una **OAuth App** en GitHub (te da un Client ID y un Client Secret).
2. Desplegar este **Worker** en tu Cloudflare (guarda el secret, hace el login).
3. Apuntar la OAuth App al Worker y el Worker a GitHub.
4. Conectar el `config.yml` del CMS al Worker.
5. Dar acceso de escritura al repo a la cuenta de GitHub de Laura.

---

## Paso 1 — Crear la OAuth App en GitHub

1. Entrá a: https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**
2. Completá:
   - **Application name:** `Polastri CMS`
   - **Homepage URL:** `https://estudiopolastri.com`
   - **Authorization callback URL:** `https://polastri-cms-oauth.<tu-subdominio>.workers.dev/callback`
     > El `<tu-subdominio>` lo vas a saber después del Paso 2 (es tu subdominio de
     > workers.dev). Si querés, poné algo provisorio y lo editás al terminar el Paso 2.
3. **Register application.**
4. Guardá el **Client ID** y generá un **Client Secret** (botón "Generate a new
   client secret"). Copialos: los usás en el Paso 2.

---

## Paso 2 — Desplegar el Worker en Cloudflare

Desde esta carpeta (`oauth-worker/`):

```bash
cd oauth-worker
npm install                  # instala wrangler localmente
npx wrangler login           # abre el navegador para que autorices tu cuenta CF
```

Cargá el Client ID y el Secret del Paso 1:

```bash
# Client ID (no es secreto, pero lo guardamos como var):
npx wrangler secret put GITHUB_CLIENT_ID
# (pegá el Client ID cuando lo pida)

# Client Secret (secreto):
npx wrangler secret put GITHUB_CLIENT_SECRET
# (pegá el Client Secret cuando lo pida)
```

Desplegá:

```bash
npx wrangler deploy
```

Wrangler te imprime la URL pública del Worker, algo como:
`https://polastri-cms-oauth.TU-SUBDOMINIO.workers.dev`

> 📌 Copiá esa URL. Es el `base_url` que usa el CMS y la base del callback.

**Volvé al Paso 1** y asegurate de que el **Authorization callback URL** de la
OAuth App sea exactamente:
`https://polastri-cms-oauth.TU-SUBDOMINIO.workers.dev/callback`

---

## Paso 3 — Conectar el CMS al Worker

En `public/admin/config.yml` (del sitio, no de esta carpeta):

1. **Descomentá** la línea `base_url` y poné la URL del Worker (sin `/callback`):
   ```yaml
   backend:
     name: github
     repo: santigalardi/polastri
     branch: main
     base_url: https://polastri-cms-oauth.TU-SUBDOMINIO.workers.dev
   ```
2. **Comentá** la línea `local_backend: true` (es solo para pruebas locales).

Avisame y te lo dejo aplicado en el config — o lo editás vos.

---

## Paso 4 — Dar acceso a Laura

Para que Laura pueda publicar, su cuenta de GitHub necesita permiso de
**escritura (Write)** sobre el repo `santigalardi/polastri`:

1. Repo → **Settings** → **Collaborators** → **Add people**
2. Agregá el usuario de GitHub de Laura con rol **Write**.
3. Laura acepta la invitación que le llega por email.

> Si Laura no tiene cuenta de GitHub, que cree una gratis en https://github.com/signup
> (solo necesita email; no precisa saber nada técnico para usar el panel).

---

## Listo ✅

Después del deploy a producción, Laura entra a
`https://estudiopolastri.com/admin/`, hace clic en **"Iniciar sesión con GitHub"**,
autoriza una vez, y ya puede escribir y publicar. Cada publicación dispara un
deploy automático del sitio.

---

### Notas

- **Costo:** Workers tiene un plan gratuito amplio; este uso (un login ocasional)
  está muy por debajo del límite. Sin costo.
- **Seguridad:** el Client Secret vive solo en Cloudflare (como secreto), nunca
  en el repo ni en el navegador.
- **Mantenimiento:** prácticamente nulo. Solo habría que tocarlo si cambia el
  dominio del sitio o se rota el secret.
