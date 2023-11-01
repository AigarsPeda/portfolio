import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const getImages = (req: NextApiRequest, res: NextApiResponse) => {
  const folderName = req.query.folderName as string;

  const folderPath = path.join(process.cwd(), "public", "asset", folderName);

  try {
    const files = fs.readdirSync(folderPath);

    // Filter image files (you can add more extensions if needed)
    const imageFiles = files.filter((file) => {
      const extname = path.extname(file).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extname);
    });

    // Construct the absolute paths to these image files
    const imagePaths = imageFiles.map((file) => `/asset/${folderName}/${file}`);

    // Return the image paths as JSON
    res.status(200).json({ imagePaths });
  } catch (_error) {
    console.error(`Error reading folder ${folderName}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getImages;
