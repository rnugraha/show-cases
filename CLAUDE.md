# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at localhost:1234 (runs init + parcel)
npm run build      # Production build (runs init + parcel build)
npm test           # Run Jest tests
npm run lint       # ESLint
npm run check      # TypeScript type checking (tsc --noEmit)
npm run ci         # Build + test + lint + type check
npm run new-component  # Component generator scaffold
```

## Architecture

This is a React 18 + TypeScript SPA bundled with **Parcel** (not Next.js/Vite). It serves as a showcase of UI patterns using **shadcn/ui** (Radix UI primitives + CVA), **Tailwind CSS**, and several specialized libraries.

**Entry point:** `src/index.html` → `src/index.tsx` → `src/App.tsx`

**Routing:** React Router 7 with all routes defined in `App.tsx`. Vercel rewrites all paths to `/` for SPA behavior.

**State:** React Context API only — `RegistreeContext` (defined in `App.tsx`) is the single global context, storing registration form data shared between `RegistrationForm` and `Confirmation` pages.

## Page Structure

Each page lives under `src/pages/<PageName>/` with an `index.ts` barrel export. Current pages:

| Route | Page | Key Libraries |
|---|---|---|
| `/` | RegistrationForm | React Hook Form + Zod |
| `/confirm` | Confirmation | RegistreeContext consumer |
| `/data-table` | DataTable | TanStack Table 8 |
| `/dashboard` | Dashboard | Recharts |
| `/infinite-scroll` | InfiniteScroll | — |
| `/model-viewer` | ModelViewer | Three.js + React Three Fiber |

## Key Patterns

**Forms:** React Hook Form with Zod resolver. Schemas are defined inline in the page file. Custom form field components live in `src/components/ui/form.tsx`.

**Tables:** TanStack Table with sorting, filtering, and pagination. Mock data typed in TypeScript lives alongside the page (e.g., `src/pages/DataTable/students.ts`).

**UI Components:** `src/components/ui/` contains shadcn/ui components. Do not manually edit these — regenerate via `npx shadcn@latest add <component>` if changes are needed.

**Path alias:** `@/*` maps to `src/` (configured in `tsconfig.json`).

**3D Viewer:** `src/components/ObjectViewer.tsx` wraps React Three Fiber + drei. GLTF models and HDR files are served from `/public`.
