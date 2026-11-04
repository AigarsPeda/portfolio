# Portfolio
This is a portfolio of my work. It is a work in progress.

Use npm with the committed `package-lock.json`. Node.js 20.19+, 22.13+, or 24+ is required by the current tooling.

```sh
npm ci
npm run dev
```

Before deploying, run `npm run lint`, `npm run typecheck`, and `npm run build`.

English pages use the root URLs; Latvian pages use `/lv`. The header language switch uses Next.js client-side navigation and remembers the choice in the `NEXT_LOCALE` preference cookie. Shared interface translations are in `src/i18n/index.ts`, Latvian project copy is in `src/i18n/projects.ts`, and the English project content remains in `src/hardcoded.ts`. Images and project names are shared between languages.

BetterScreenShot is listed between Wupzy and Canvas. Its project page offers a portable Windows x64 executable at `/downloads/betterscreenshot/BetterScreenShot.exe`. The file in `public/downloads/betterscreenshot/` is served directly, so include it when deploying. Opening the project page does not start a download; visitors choose the download link.

To update the BetterScreenShot download and update feed together, set the new `<Version>` in the app project and run `scripts/Publish-PortfolioRelease.ps1 -PortfolioDirectory C:\path\to\portfolio` from the BetterScreenShot repository. Deploy both `public/downloads/betterscreenshot/BetterScreenShot.exe` and `latest.json` in the same site release. Update the version and size in the English and Latvian project copy, and refresh `THIRD-PARTY-NOTICES.txt` and `OCR-LICENSE.txt` when their sources change. The current portable release is version 1.1.0, is 90,008,439 bytes, and has SHA256 `45AF284EAE73CB68868B44D32CAD70320138B203E215C4752EFCF78D1F38A844`.

The BetterScreenShot images are WebP versions of the current light and dark screenshots in its README, stored in `public/asset/betterscreenshot/`. `LaptopFrame` presents the app windows over a desktop, with the notification at the bottom-right and a separate cursor. Run `node scripts/build-project-previews.cjs` after replacing the light editor image to refresh its responsive previews.

TypeScript 7.0.2 runs `npm run typecheck` and is required to pass before every production build. The script generates Next.js route types first, so checks also work in a fresh checkout. It explicitly selects the `@typescript/native` compiler so npm's compatibility-package binary links cannot select TypeScript 6 by accident. The `typescript` alias supplies Microsoft's TypeScript 6 compatibility API for ESLint and Next.js internals, following [Microsoft's side-by-side migration guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-60).

The latest Next.js ESLint configuration supports ESLint 10, though npm reports older peer ranges in some bundled plugins. See [Next.js's compatibility note](https://nextjs.org/docs/app/api-reference/config/eslint#setup-eslint).

`npm audit` currently reports six high-severity entries caused by one unpatched `braces` advisory in the sitemap and lint tooling dependency chains. There is no patched upstream version yet. See [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Avoid `npm audit fix --force`, which proposes downgrading the framework's lint configuration and sitemap package.
