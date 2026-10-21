# Portafolio — Michael Ruiz

Portafolio personal de **Michael Steven Ruiz Palacio**, estudiante de Ingeniería de Sistemas en la Universidad de Antioquia. Presenta perfil, habilidades, proyectos destacados y medios de contacto.

Sitio de una sola página, en español, con tema oscuro.

**Sitio en vivo:** https://my-portfolio-one-gilt-22.vercel.app

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (build y dev server)
- **Tailwind CSS 3** + **shadcn/ui** (Radix) para los componentes
- **Framer Motion** para las animaciones
- **React Router** (la landing y la página 404)

## Primeros pasos

```bash
npm install
npm run dev      # http://localhost:8080
```

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en el puerto 8080 |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build de producción |
| `npm run lint` | ESLint sobre todo el proyecto |

## Estructura

```
public/
  cv-michael-ruiz.pdf     # CV descargable (enlazado desde el Hero)
  og-image.png            # Imagen de previsualización (1200x630)
  favicon.svg / .ico      # Iconos del sitio
  projects/               # Portadas 1400x875 de cada proyecto
src/
  components/portfolio/   # Secciones: Navbar, Hero, About, Skills, Projects, Contact, Footer
  components/ui/          # Componentes shadcn/ui
  pages/Index.tsx         # Composición de la landing
  pages/NotFound.tsx      # 404
  index.css               # Tokens de diseño (tema oscuro) y utilidades
```

## Editar contenido

| Qué quieres cambiar | Archivo |
| --- | --- |
| Nombre, subtítulo, botones y CV | `src/components/portfolio/Hero.tsx` |
| Bio y tarjetas de perfil | `src/components/portfolio/About.tsx` |
| Categorías y tecnologías | `src/components/portfolio/Skills.tsx` |
| Proyectos (título, descripción, tecnologías, links, portada) | `src/components/portfolio/Projects.tsx` |
| Email, GitHub, LinkedIn y ubicación | `src/components/portfolio/Contact.tsx` y `Footer.tsx` |
| Colores y tipografías | `src/index.css` + `tailwind.config.ts` |
| Metadatos, Open Graph y JSON-LD | `index.html` |

Para actualizar el CV, reemplaza `public/cv-michael-ruiz.pdf` manteniendo el nombre, o ajusta el `href` en `Hero.tsx`.

Las portadas de los proyectos viven en `public/projects/`. Si consigues capturas reales de las apps, reemplaza el archivo correspondiente manteniendo el nombre (o cambia la ruta `image` en `Projects.tsx`); el diseño ya usa 1400x875 con `object-cover`.

## Despliegue en Vercel

El proyecto ya incluye `vercel.json` con el **rewrite de SPA** (necesario para que `/cualquier-ruta` no devuelva 404) y cabeceras de caché y seguridad.

**Opción A — desde el dashboard:** importa el repositorio en Vercel. Detecta Vite automáticamente (`npm run build`, salida `dist`).

**Opción B — con la CLI:**

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # producción
```

### URL del sitio en los metadatos

Las etiquetas `canonical`, `og:url`, `og:image` y el JSON-LD usan el marcador `__SITE_URL__`, que se resuelve en tiempo de build en este orden:

1. Variable de entorno `VITE_SITE_URL` (si quieres fijar un dominio propio).
2. `VERCEL_PROJECT_PRODUCTION_URL`, que Vercel inyecta automáticamente en producción.
3. `http://localhost:8080` en local.

Si usas un dominio propio, define `VITE_SITE_URL=https://tudominio.com` en las variables de entorno del proyecto en Vercel y vuelve a desplegar. No hace falta tocar `index.html`.

## Checklist antes de compartir el link

- [ ] El dominio final aparece correctamente en el `<link rel="canonical">` del HTML desplegado.
- [ ] La previsualización se ve bien al pegar el link en LinkedIn/WhatsApp (puedes validarla en [opengraph.xyz](https://www.opengraph.xyz/)).
- [ ] El CV descargable es la versión más reciente.
- [ ] El email de contacto sigue activo.
