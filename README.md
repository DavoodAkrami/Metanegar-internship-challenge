# E-commerce Template

A mobile-first, Persian right-to-left storefront built for the Metanegar code challenge. The interface follows the Tapsi design system, with shared color and typography tokens, Vazirmatn, and Solar Icons.

## What it includes

- A responsive product listing with grid and list views, text search, category and price filters, an in stock filter, and pagination.
- Product detail pages with an image gallery, color and size choices, descriptions, specifications, comments, and quantity controls.
- A shopping cart with quantity changes, item removal, and a live order summary. Cart contents persist in the browser's `localStorage`.

The catalog contains 100 sample products across 10 categories in `src/data/products.ts`. Product images are loaded from an external host, so displaying them requires access to that host. This is a frontend demonstration: there is no backend, account system, payment integration, or active checkout. The checkout action explains this in the interface.

## Run locally

Requires Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To make and serve a production build:

```bash
npm run build
npm run start
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Browse, search, filter, and paginate products |
| `/products/[slug]` | View a product and manage its cart quantity |
| `/cart` | Review items, update quantities, and see totals |

## Project structure

| Path | Responsibility |
| --- | --- |
| `src/app` | Pages, root layout, and global design tokens |
| `src/components` | Reusable storefront and form components |
| `src/data/products.ts` | Static product catalog |
| `src/lib/cart.ts` | Browser cart storage and quantity operations |

The app uses Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Its self-hosted Vazirmatn font is in `src/app/fonts`; see the accompanying `OFL.txt` for the font license. The primary UI colors and type scale are defined in `src/app/globals.css`.

## Checks

```bash
npm run lint
npm run build
```
