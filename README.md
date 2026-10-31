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

To update the download, run `scripts/Publish-Portable.ps1` in the BetterScreenShot repository and copy `artifacts/BetterScreenShot-Portable-win-x64/BetterScreenShot.exe` into `public/downloads/betterscreenshot/`. Use the self-contained build, not the framework-dependent variant. Update the size in both project translations and refresh `THIRD-PARTY-NOTICES.txt` and `OCR-LICENSE.txt` from the app's `THIRD-PARTY-NOTICES.md` and `assets/ocr/LICENSE`. The current executable was built from the local source on 2026-10-31, is 89,340,687 bytes, and has SHA256 `96DAA6AFEB1D73C2BB116D2D2A5B6C32568D7E8699C986F2FCE5017C7206B321`.

The BetterScreenShot images come from its README screenshots and are stored as WebP files in `public/asset/betterscreenshot/`. The preview notification was rendered from the app's documentation fixture without the captured mouse pointer. `LaptopFrame` presents the app windows over a desktop, with the notification at the bottom-right and a separate cursor. Run `node scripts/build-project-previews.cjs` after replacing the editor image to refresh its responsive previews.

TypeScript 7.0.2 runs `npm run typecheck` and is required to pass before every production build. The script generates Next.js route types first, so checks also work in a fresh checkout. It explicitly selects the `@typescript/native` compiler so npm's compatibility-package binary links cannot select TypeScript 6 by accident. The `typescript` alias supplies Microsoft's TypeScript 6 compatibility API for ESLint and Next.js internals, following [Microsoft's side-by-side migration guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-60).

The latest Next.js ESLint configuration supports ESLint 10, though npm reports older peer ranges in some bundled plugins. See [Next.js's compatibility note](https://nextjs.org/docs/app/api-reference/config/eslint#setup-eslint).

`npm audit` currently reports six high-severity entries caused by one unpatched `braces` advisory in the sitemap and lint tooling dependency chains. There is no patched upstream version yet. See [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Avoid `npm audit fix --force`, which proposes downgrading the framework's lint configuration and sitemap package.
