# Portfolio
This is a portfolio of my work. It is a work in progress.

Use npm with the committed `package-lock.json`. Node.js 20.19+, 22.13+, or 24+ is required by the current tooling.

```sh
npm ci
npm run dev
```

Before deploying, run `npm run lint`, `npm run typecheck`, and `npm run build`.

TypeScript 7.0.2 runs `npm run typecheck` and is required to pass before every production build. The script generates Next.js route types first, so checks also work in a fresh checkout. It explicitly selects the `@typescript/native` compiler so npm's compatibility-package binary links cannot select TypeScript 6 by accident. The `typescript` alias supplies Microsoft's TypeScript 6 compatibility API for ESLint and Next.js internals, following [Microsoft's side-by-side migration guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-60).

The latest Next.js ESLint configuration supports ESLint 10, though npm reports older peer ranges in some bundled plugins. See [Next.js's compatibility note](https://nextjs.org/docs/app/api-reference/config/eslint#setup-eslint).

`npm audit` currently reports six high-severity entries caused by one unpatched `braces` advisory in the sitemap and lint tooling dependency chains. There is no patched upstream version yet. See [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Avoid `npm audit fix --force`, which proposes downgrading the framework's lint configuration and sitemap package.
