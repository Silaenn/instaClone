const getCloudinaryConfig = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary config missing. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET."
    );
  }

  return { cloudName, uploadPreset };
};

export const uploadImageToCloudinary = async ({ file, folder }) => {
  const { cloudName, uploadPreset } = getCloudinaryConfig();
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  if (folder) formData.append("folder", folder);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result?.error?.message || "Cloudinary upload failed.");
  }

  return {
    url: result.secure_url,
    deleteToken: result.delete_token || null,
    publicId: result.public_id || null,
  };
};

export const deleteImageFromCloudinary = async (deleteToken) => {
  if (!deleteToken) return;
  const { cloudName } = getCloudinaryConfig();
  const formData = new FormData();

  formData.append("token", deleteToken);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/delete_by_token`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();
  if (!response.ok || result?.result !== "ok") {
    throw new Error(result?.error?.message || "Cloudinary delete failed.");
  }
};
