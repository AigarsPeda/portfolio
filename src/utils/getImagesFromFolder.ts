const getImagesFromFolder = async (folderName: string) => {
  try {
    const response = await fetch(`/api/getImages?folderName=${folderName}`);
    if (response.ok) {
      const data = await response.json();
      return data.imagePaths;
    } else {
      console.error("Failed to fetch image paths");
      return [];
    }
  } catch (error) {
    console.error("An error occurred while fetching image paths:", error);
    return [];
  }
};

export default getImagesFromFolder;
