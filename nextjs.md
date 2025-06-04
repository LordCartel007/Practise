Beginner (1–30)
What is Next.js?
A React framework for building server-rendered and statically generated web applications.

How does Next.js differ from React?
React is a UI library; Next.js adds features like SSR, routing, and file-system-based routing.

What is file-based routing?
Pages are created by placing .js/.ts/.jsx/.tsx files inside the pages/ directory.

What is the pages directory?
A special folder where each file becomes a route in the app.

What is a dynamic route in Next.js?
A route defined with square brackets, e.g., [id].js.

What is getStaticProps?
A function for pre-rendering a page at build time using static generation.

What is getServerSideProps?
A function for server-side rendering a page at each request.

What is getStaticPaths?
Used with getStaticProps to define dynamic routes to pre-render at build time.

What is the difference between SSR and SSG?
SSR renders on each request; SSG generates at build time.

What is Link in Next.js?
A component used for client-side navigation.

What is useRouter?
A hook to access the router object inside components.

How do you navigate programmatically?
Using useRouter().push('/route').

What is a custom \_app.js?
A file to override the default App component and persist layout.

What is \_document.js used for?
To customize the HTML document structure (like <html> and <body>).

How do you add global styles in Next.js?
Import a CSS file in \_app.js.

Can you use SCSS with Next.js?
Yes, via the sass package.

What is Image Optimization in Next.js?
The next/image component optimizes images automatically.

What is API routes in Next.js?
Serverless functions in the pages/api/ directory.

How to handle environment variables?
Use .env.local and process.env.VAR_NAME.

What is next.config.js?
Config file to customize Next.js behavior.

How do you deploy a Next.js app?
Vercel, Netlify, or manually via Node/containers.

What is public/ directory for?
Static files like images, robots.txt, etc.

What are middleware in Next.js?
Functions that run before a request is completed (e.g., auth).

What is ISR (Incremental Static Regeneration)?
Allows pages to be updated after deployment without rebuilding the whole site.

How do you enable ISR?
Add revalidate in getStaticProps.

What is a fallback in getStaticPaths?
Handles routes not generated at build time (false, true, or 'blocking').

What is Fast Refresh?
Instant feedback on edits without losing state.

What is next/head used for?
Manage <head> elements like title, meta, etc.

Does Next.js support TypeScript?
Yes, fully supported.

What are the benefits of Next.js?
SEO, performance, routing, SSR/SSG/ISR, image optimization.

🟡 Intermediate (31–70)
Can you mix SSG and SSR in the same app?
Yes, on a per-page basis.

How to add a custom server (e.g., Express)?
Use custom server logic outside next dev and manually handle routes.

How does Next.js handle code splitting?
Automatic, per-page code splitting.

How to do authentication in Next.js?
Use cookies, JWTs, middleware, or packages like next-auth.

How to add redirects in Next.js?
Use next.config.js with the redirects() async function.

What is the middleware.ts file?
A file that allows custom logic before a page is rendered (e.g., auth redirects).

Can you disable SSR?
Yes, by using dynamic imports with { ssr: false }.

What is dynamic import?
import('...') to load a module lazily.

How does Next.js support lazy loading?
Through dynamic imports and the next/image component.

What is the app/ directory in Next.js 13+?
A new routing and layout system replacing pages/ in the App Router.

What are React Server Components?
Components rendered on the server and streamed to the client.

What is the difference between the pages/ and app/ directories?
pages/ uses legacy routing; app/ uses the new App Router with layouts.

What is layout.tsx in the app/ folder?
A persistent layout wrapper for pages.

What is loading.tsx in the app/ folder?
A special file shown while a route is loading.

What is error.tsx in the app/ folder?
A file to handle runtime errors in the route.

How to add metadata in App Router?
Export a metadata object from the page file.

How do API routes differ from regular pages?
API routes export request handlers (not components).

How to share layout across pages?
Use \_app.js (pages/) or layout.tsx (app/).

How to protect a page from unauthenticated users?
Check auth in getServerSideProps, middleware, or inside components.

What is generateStaticParams() in App Router?
Replaces getStaticPaths in the new routing system.

How to preload a page in Next.js?
Use Link — it automatically preloads pages in the background.

How to create a 404 page?
Create pages/404.js.

How to create a custom \_error.js?
Create a file in pages/\_error.js.

What is prefetching?
Next.js preloads linked pages when they appear in the viewport.

Can you use Redux in Next.js?
Yes, with proper configuration in \_app.js.

How to persist layout between pages?
Use a shared layout component in \_app.js or layout.tsx.

What is the recommended state management?
Depends: use useState, Context, Redux, or Zustand.

How to handle forms in Next.js?
Like in React, with optional API routes for server handling.

Does Next.js support WebSockets?
Not natively, but can be integrated with a custom server.

How do you optimize fonts in Next.js?
Use the built-in next/font support.

What is the next/script component?
For loading external scripts with control over timing.

Can Next.js generate a static site?
Yes, with next export.

How to configure a custom 500 error page?
Add pages/500.js.

How to use middleware for authentication?
Add middleware.ts and check auth before rendering.

How is routing handled in App Router?
Through folders and file names (e.g., app/blog/[slug]/page.tsx).

What is the difference between app/page.tsx and app/layout.tsx?
page.tsx renders the content; layout.tsx wraps it.

How to enable CORS in Next.js API routes?
Manually set headers in API route handler.

How does next/image optimize images?
By serving responsive, lazy-loaded, optimized images via the Image Optimization API.

What is basePath in next.config.js?
Sets a base path for your application routes.

How to enable i18n (internationalization)?
Use the i18n config in next.config.js.

🔴 Advanced (71–100)
What is edge rendering?
Server-rendering via edge functions close to users for faster performance.

What are Edge Functions in Next.js?
Lightweight serverless functions deployed globally.

What is a hybrid Next.js app?
An app that uses SSR, SSG, and CSR depending on the page.

How to use SWR with Next.js?
For client-side data fetching with caching and revalidation.

How to optimize Lighthouse score in Next.js?
Use next/image, next/script, lazy loading, and fast server responses.

How to disable telemetry in Next.js?
npx next telemetry disable.

What is fallback true vs 'blocking'?
true shows a fallback; 'blocking' waits for data to load server-side.

How does ISR differ from SSR?
ISR updates pages in the background after deployment; SSR re-renders every time.

What is unstable_cache?
A function for caching server functions (experimental as of Next 13+).

How does streaming work in Next.js?
Content is sent to the browser in chunks via React Server Components.

How to debug performance?
Use Chrome DevTools + Next.js analyzer (@next/bundle-analyzer).

What are layouts in App Router?
Persist across navigation, shared across nested routes.

What is staticParams vs generateStaticParams?
generateStaticParams dynamically provides route data for SSG in App Router.

How to prevent unwanted re-renders in Next.js?
Use React.memo, useMemo, and useCallback.

Can you use GraphQL in Next.js?
Yes, with libraries like Apollo or urql.

How to implement infinite scroll?
With Intersection Observer and client-side fetching (SWR or fetch).

How does image caching work?
Via headers + CDN optimizations by Next.js.

How do you secure API routes?
Validate tokens/cookies, rate limit, and sanitize input.

How to use Web Workers in Next.js?
Via custom scripts and dynamic imports.

What is the default bundler in Next.js?
Turbopack (experimental) or Webpack.

How to handle static assets in App Router?
Still use /public.

What is streaming SSR in React 18 / Next.js?
Partial HTML is sent early for better performance.

What are route groups [group]/page.tsx in App Router?
Allow organizing routes without affecting URL paths.

How does parallel routing work?
Multiple routes rendered at the same level via slots (@modal, etc.).

How to configure headers globally?
Use headers() function in next.config.js.

What is next/font?
Built-in font optimization with local and Google Fonts.

How to preload fonts?
With next/font or manually using <link rel="preload">.

How to persist theme across reloads?
Use localStorage or cookies + React context.

Can you use Next.js with monorepos?
Yes, with tools like Turborepo or Yarn Workspaces.

What's new in Next.js 14+?
Enhanced server components, Turbopack, partial pre-rendering, and improved middleware.
