const getImagesFromFolder = async <T>(folderName: string) => {
  try {
    const response = await fetch(`/api/getImages?folderName=${folderName}`);
    if (response.ok) {
      const data = (await response.json()) as { imagePaths: T };
      return data.imagePaths;
    } else {
      console.error("Failed to fetch image paths");
      return [] as T;
    }
  } catch (error) {
    console.error("An error occurred while fetching image paths:", error);
    return [] as T;
  }
};

export default getImagesFromFolder;
