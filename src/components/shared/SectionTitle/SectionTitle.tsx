import React from "react";
import { Divider } from "@mui/material";

type TProps = {
  title: string,
  subtitle: string
}
const SectionTitle = ({ title, subtitle }: TProps) => {
  return (
    <div className="w-full md:w-[800px] mx-auto text-center">
      <h2>{title}</h2>
      <Divider
        sx={{
          width: "150px",
          margin: 'auto',
          height: "5px",
          marginTop: '15px',
          background: "linear-gradient(to right, #2B8444, #CB2D2E)",
        }}
      />
      <p className="mt-5 md:w-[500px] mx-auto ">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
