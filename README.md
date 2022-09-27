# vite-alpinejs-pug-tailwind-eleventy-starter

front-end development environment for static site construction. [Eleventy](https://www.11ty.dev/) と [Vite](https://vitejs.dev/) を中心に構成されています。

## Intro

It is a front-end development environment for static site construction.
Sites with a large number of pages can be developed flexibly and comfortably. It is structured around the static site generators Eleventy and Vite.
Feature Assistance in building HTML files using the static site generator.
Eleventy Adopting Vite and working with Eleventy.
Adopting Pug as the HTML templating engine.
Can be replaced or used with another template engine.
Adopting Tailwind CSS
Adopting TypeScript
Adopted Alpine.js as a JavaScript framework for MPAs (non-SPAs)
Hiring Prettier
Supports publishing in subdirectories
For all modern browsers except Internet Explorer

- [Eleventy](https://www.11ty.dev/)
- [Vite](https://vitejs.dev/)
- HTML [Pug](https://pugjs.org/api/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- MPA（SPA）JavaScript [Alpine.js](https://alpinejs.dev/)
- [Prettier](https://prettier.io/)

## Prerequsities

os & more:

- macOS、Windows、Linux
- Node.js 16

install:

```bash
npm ci
```

run dev:

```bash
npm run dev
```

## Schema

```
.
├── dist/
│   ├── assets/
│   │   ├── images/
│   │   │   └── ogp.png
│   │   ├── main.[hash].css
│   │   └── main.[hash].js
│   ├── favicon.ico
│   └── index.html
├── public/
│   ├── assets/
│   │   └── images/
│   │       └── ogp.png
│   └── favicon.ico
├── src/
│   ├── scripts/
│   │   ├── components/
│   │   │   └── example.ts
│   │   ├── stores/
│   │   │   └── example.ts
│   │   └── main.ts
│   ├── site/
│   │   ├── data/
│   │   │   └── metadata.js
│   │   ├── includes/
│   │   │   ├── layouts/
│   │   │   │   └── base.pug
│   │   │   ├── mixins/
│   │   │   │   └── page-title.pug
│   │   │   └── partials/
│   │   │       └── site-menu.pug
│   │   └── pages/
│   │       ├── index.11tydata.js
│   │       └── index.pug
│   └── styles/
│       └── main.css
├── .eleventy.js
├── config.js
└── package.json
```

### `src`

### `src/site`

[Eleventy](https://www.11ty.dev/) Eleventy

### `src/scripts/components`

[Alpine.js](https://alpinejs.dev/)

### `src/scripts/stores`

[Alpine.js](https://alpinejs.dev/) Store

### `public` assets dit

### `dist` compiled output dir

## Scripts

### `npm run dev`

### `npm run build`

to `dist` directory

### `npm run preview`

http://localhost:4173

### `npm run format`

[Prettier](https://prettier.io/) and GitHub Actions

## config.js

`config.js`

```diff
const config = {
	// root: `/`
	// subdir: `/path/to/subdir/`
-	pathPrefix: "/",
+	pathPrefix: "/my-subdir/",
};
```

[Eleventy](https://www.11ty.dev/) の [Pug](https://pugjs.org/) `f.url()`

```
a(href=f.url('/about/')) About
```

[Vite](https://vitejs.dev/) JavaScript and TypeScript `import.meta.env.BASE_URL`

```javascript
import.meta.env.BASE_URL; // "/my-subdir/"
```

# Thank eleventy

- [eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [eleventy-img](https://www.11ty.dev/docs/plugins/image/):
- [eleventy-fetch](https://www.11ty.dev/docs/plugins/fetch/):
