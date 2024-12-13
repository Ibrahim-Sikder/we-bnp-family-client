const url = `https://api.cloudinary.com/v1_1/do2cbxkkj/auto/upload`;

const uploadFile = async (file:any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "bnp-family");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
 
      throw new Error(errorData.error?.message || "Upload failed");
    }

    const responseData = await response.json();

    return responseData;
  } catch (err) {
  
    throw err;
  }
};

export default uploadFile;
