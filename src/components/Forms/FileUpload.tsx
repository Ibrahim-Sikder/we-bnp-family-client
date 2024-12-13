/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import uploadFile from "@/helpers/axios/uploadFile";
import { CloudUpload } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TASFileUploadProps {
  name: string;
  label?: string;
  uploadBoxStyles?: React.CSSProperties;
  defaultValues?: string[];
}

const TASFileupload: React.FC<TASFileUploadProps> = ({
  name,
  label = "Upload File",
  uploadBoxStyles = {},
  defaultValues,
}) => {
  const { control, setValue } = useFormContext();
  const [fileUrls, setFileUrls] = useState<string[]>(
    defaultValues ? defaultValues : []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (defaultValues) {
      setFileUrls(defaultValues);
      setValue(name, defaultValues);
    }
  }, [defaultValues, name, setValue]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    const uploadedUrls: string[] = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const uploadPhoto = await uploadFile(files[i]);
        if (uploadPhoto?.secure_url) {
          uploadedUrls.push(uploadPhoto.secure_url);
        } else {
          throw new Error("Invalid file URL format");
        }
      }

      setFileUrls(uploadedUrls);
      setValue(name, uploadedUrls);
    } catch (error: any) {
      setError(error.message || "Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValues ? defaultValues : []}
      render={({ field }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "2px",

          }}
        >
          <Box
            sx={{
              background: "#2B8444",
          
              width: "300px",
              height: "55px",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              marginTop: '18px',
              color: 'white',
              ...uploadBoxStyles,
            }}
            onClick={() => document.getElementById(`${name}-input`)?.click()}
          >
            <input
              id={`${name}-input`}
              type="file"
              accept=".jpeg,.jpg,.png,.pdf,.doc,.docx"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <CloudUpload sx={{ color: "white", fontSize: 30 }} />
            <Typography
              component="p"
              fontSize="12px"
              fontWeight="bold"
              color="white"

            >
              {loading ? "Uploading..." : label}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "flex-start",
              marginTop: "20px",
            }}
          >
            {fileUrls.length > 0 &&
              fileUrls.map((url, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100px",
                    height: "150px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Typography
                      component="p"
                      fontSize="12px"
                      fontWeight="bold"
                      color="#000"
                      sx={{ textAlign: "center", paddingTop: "20%" }}
                    >
                      {`File ${index + 1}`}
                    </Typography>
                  </a>
                </Box>
              ))}
          </Box>
          {error && (
            <Typography
              component="p"
              fontSize="12px"
              fontWeight="bold"
              color="red"
              sx={{ marginTop: 1 }}
            >
              {error}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};

export default TASFileupload;
