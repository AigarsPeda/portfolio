const sharp = require("sharp");
const path = require("node:path");
const fs = require("node:fs/promises");

// Static responsive assets keep previews small without a runtime image service.
/** @type {[string, string][]} */
const assets = [
  ["dentsu", "dentsu/02-work.webp"],
  ["janogago", "janogago/01-home.webp"],
  ["oaksbuild", "oaksbuild/01-home.webp"],
  ["wupzy", "wupzy/a_main.webp"],
  ["canvas", "canvas/canvas_a_main.webp"],
];

/** @type {[string, string][]} */
const phones = [
  ["math-mews-room", "math_mews/01-room.webp"],
  ["math-mews-puzzle", "math_mews/02-puzzle-clean.webp"],
];

async function build() {
  const root = path.join(__dirname, "..", "public", "asset");
  await fs.mkdir(path.join(root, "previews"), { recursive: true });
  for (const [name, source] of assets) {
    for (const width of [640, 960, 1280]) {
      await sharp(path.join(root, source))
        .resize({ width })
        .webp({ quality: 82 })
        .toFile(path.join(root, "previews", `${name}-${width}.webp`));
    }
  }
  for (const [name, source] of phones) {
    await sharp(path.join(root, source))
      .resize({ width: 360 })
      .webp({ quality: 82 })
      .toFile(path.join(root, "previews", `${name}-360.webp`));
  }
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
