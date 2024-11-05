import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";
import { useLanguage } from "@/provider/LanguageProvider";

type TProps = {
    name: string;
    label?: string;
    sx?: SxProps;
};

export default function BNPFileUpload({ name, label, sx }: TProps) {
    const { control } = useFormContext();
    const { language } = useLanguage()

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
                    {label || (language === 'ENG' ? 'Upload File' : 'ফাইল আপলোড করুন')}
                    <Input
                        type="file"
                        onChange={(e) => {
                            const files = Array.from((e.target as HTMLInputElement).files || []);
                            onChange(files);
                        }}
                        inputProps={{ multiple: true }}
                        style={{ display: 'none' }}
                    />
                </Button>
            )}
        />
    );
}
