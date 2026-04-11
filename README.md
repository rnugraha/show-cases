# Show Cases

A portfolio project showcasing various React UI patterns and frontend techniques, built with modern tooling and component libraries.

Live demo: https://show-cases.vercel.app/

## Showcases

| Route | Description |
|---|---|
| `/` | Registration form with validation |
| `/confirm` | Confirmation page with shared state |
| `/data-table` | Sortable, filterable, paginated data table |
| `/dashboard` | Weather dashboard with charts |
| `/infinite-scroll` | Infinite scroll image gallery |
| `/model-viewer` | Interactive 3D model viewer |

## Tech Stack

**Core**
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Parcel](https://parceljs.org/) — zero-config bundler
- [React Router 7](https://reactrouter.com/) — client-side routing
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling

**UI Components**
- [shadcn/ui](https://ui.shadcn.com/) — composable component system built on Radix UI
- [Radix UI](https://www.radix-ui.com/) — accessible, unstyled primitives
- [Lucide React](https://lucide.dev/) — icon library
- [class-variance-authority](https://cva.style/) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) — variant-based component styling

**Forms & Validation**
- [React Hook Form](https://react-hook-form.com/) — performant form management
- [Zod](https://zod.dev/) — schema-based validation

**Data & Tables**
- [TanStack Table v8](https://tanstack.com/table) — headless table with sorting, filtering, and pagination

**Charts & Visualization**
- [Recharts](https://recharts.org/) — composable chart library

**3D Rendering**
- [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) — 3D scene rendering in React

**Tooling**
- [Biome](https://biomejs.dev/) — fast linter and formatter

## Getting Started

```sh
git clone https://github.com/your-username/show-cases.git
cd show-cases
npm install
npm start
```

Open `http://localhost:1234` in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start dev server at `localhost:1234` |
| `npm run build` | Production build |
| `npm run lint` | Lint and format check (Biome) |
| `npm run check` | TypeScript type check |

## License

MIT — see [LICENSE](LICENSE) for details.
