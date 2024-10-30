import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TProps = {
    name: string;
    label?: string;
    sx?: SxProps;
};

export default function BNPFileUpload({ name, label, sx }: TProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    sx={{ ...sx }}
                >
                    {label || "Upload File"}
                    <Input
                        type="file"
                        onChange={(e) => {
                            const files = Array.from((e.target as HTMLInputElement).files || []);
                            onChange(files); // Update form control with the files array
                        }}
                        inputProps={{ multiple: true }}
                        style={{ display: 'none' }} // Hide the input
                    />
                </Button>
            )}
        />
    );
}
