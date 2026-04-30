# Author Website

Sitio web estático sencillo para un autor en español. Incluye una portada editorial, biografía, obras, prensa y un apartado de contacto.

## Archivos

- `index.html` — Estructura principal del sitio.
- `styles.css` — Estilos de diseño y tipografía.
- `script.js` — Comportamiento de desplazamiento suave para enlaces internos.
- `assets/` — Carpeta para imágenes, documentos o recursos adicionales.

## Vista previa local

1. Abre `index.html` en tu navegador.
2. O usa un servidor local simple si prefieres, por ejemplo con Python:

```powershell
cd C:\GIT\author-website
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Publicar con GitHub Pages

1. Crea un repositorio en GitHub.
2. Asegúrate de que la rama principal se llame `main`.
3. Publica la rama `main` en el repositorio.
4. En la configuración de GitHub Pages, selecciona la rama `main` como fuente.

## Comandos de Git

```powershell
git add .
git commit -m "Initial author website"
git branch -M main
git remote add origin https://github.com/USER/REPOSITORY.git
git push -u origin main
```

Reemplaza `USER` y `REPOSITORY` por tus datos reales.
