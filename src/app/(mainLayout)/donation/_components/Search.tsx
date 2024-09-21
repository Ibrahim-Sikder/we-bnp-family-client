import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Search = () => {
  return (
    <div>
      <div className="bg-red-600 p-5 rounded">
        <TextField
          variant="outlined"
          placeholder="Search"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              boxShadow: "none",
            },
          }}
        />
      </div>
      <div className="flex justify-center mt-10 bg-white shadow-md rounded py-10">
        <ul className="space-y-1">
          <li className="bg-red-600 p-5 rounded text-xl text-white font-bold cursor-pointer">
            Help Candidate’s Campaign
            <NavigateNextIcon />{" "}
          </li>
          <li className="hover:bg-red-600 p-5 rounded text-xl hover:text-white font-bold cursor-pointer">
            Can you Help Fight Poverty <NavigateNextIcon />
          </li>
          <li className="hover:bg-red-600 p-5 rounded text-xl hover:text-white font-bold cursor-pointer">
            Urgent Help of Volunteering <NavigateNextIcon />
          </li>
          <li className="hover:bg-red-600 p-5 rounded text-xl hover:text-white font-bold cursor-pointer">
            $1M Donations for Medical Aid <NavigateNextIcon />
          </li>
          <li className="hover:bg-red-600 p-5 rounded text-xl hover:text-white font-bold cursor-pointer">
            Study gift for make good life <NavigateNextIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
