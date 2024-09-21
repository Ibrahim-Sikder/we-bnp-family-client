import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// Images
import img1 from "../../../../../src/assets/images/donation/donation1.jpg";
import img2 from "../../../../../src/assets/images/donation/donation2.jpg";
import img3 from "../../../../../src/assets/images/donation/donation3.jpg";
import img4 from "../../../../../src/assets/images/donation/donation4.jpg";
import img5 from "../../../../../src/assets/images/donation/donation5.jpg";
import img6 from "../../../../../src/assets/images/donation/donation6.jpg";

const Progress = () => {
  const donation = [
    {
      id: 1,
      img: img1,
      title: "Help Candidate’s Campaign",
      goal: 1000,
      raised: 500,
    },
    {
      id: 2,
      img: img2,
      title: "Can you Help Fight Poverty",
      goal: 1000,
      raised: 150,
    },
    {
      id: 3,
      img: img3,
      title: "Urgent Help of Volunteering",
      goal: 50000,
      raised: 20510,
    },
    {
      id: 4,
      img: img4,
      title: "$1M Donations for Medical Aid",
      goal: 1000,
      raised: 800,
    },
    {
      id: 5,
      img: img5,
      title: "Study gift for make good life",
      goal: 5000,
      raised: 3000,
    },
    {
      id: 6,
      img: img6,
      title: "Help Children Find Their Smiles",
      goal: 1000,
      raised: 0,
    },
  ];

  const { id } = useParams();
  const donate = donation.find((data) => data.id === Number(id));
  if (!donate) {
    return <div>Post not found</div>;
  }
  const progress = (donate.raised / donate.goal) * 100;
  return (
    <div className="w-full">
      <Image src={donate.img} alt="" className="w-full object-cover rounded" />
      <h3 className="mt-4 font-bold text-4xl">{donate.title}</h3>
      <div className="relative pt-1 mt-2">
        <div className="flex mb-2 items-center justify-between">
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-green-500">
              {progress.toFixed(2)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
              progress >= 50
                ? "bg-green-600 rounded-full"
                : "bg-red-600 rounded-full"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex gap-5">
          <p className="font-medium">
            Goal : <span className="text-red-600">${donate.goal}</span>
          </p>
          <p className="font-medium">Of</p>
          <p className="font-medium">
            Raised : <span className="text-red-600">${donate.raised}</span>
          </p>
        </div>
      </div>
      <div className="rounded mt-5">
        <TextField
          variant="outlined"
          placeholder="Amount"
          fullWidth
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "red",
              },
              "&:hover fieldset": {
                borderColor: "red",
              },
            },
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-xl">
          $10
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-xl">
          $25
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-xl">
          $50
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-xl">
          $100
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-xl">
          $250
        </button>
        <button className="bg-gradient-to-r from-red-600 to-green-600 py-5 rounded text-white font-medium text-xl">
          Custom Amount
        </button>
      </div>
      <div className="mt-10">
        <h3>Select Payment Method</h3>
        <hr className="mt-3 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Offline Donation"
              control={<Radio />}
              label="Offline Donation"
            />
            <FormControlLabel
              value="PayPal"
              control={<Radio />}
              label="PayPal"
            />
          </RadioGroup>
        </FormControl>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Address1" variant="outlined" />
          <TextField id="outlined-basic" label="Address2" variant="outlined" />
          <TextField id="outlined-basic" label="City" variant="outlined" />
          <TextField id="outlined-basic" label="State" variant="outlined" />
          <TextField id="outlined-basic" label="Zip" variant="outlined" />
        </div>
        <div className="mt-7">
          <button className="bg-gradient-to-r from-red-600 to-green-600 px-10 py-4 rounded text-white font-medium text-xl">
            Donate Now
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="bg-white shadow-md p-10 rounded">
          <h3 className="mb-3">Summary</h3>
          <hr className="w-20 mt-3 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
          <p className="text-justify">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident sunt in culpa qui officia deserunt mollit
            anim id est laborum sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="bg-white shadow-md p-10 rounded mt-10">
          <h3 className="mb-3">Challenges</h3>
          <hr className="w-20 mt-3 h-1 bg-gradient-to-r from-red-600 to-green-600 border-0 rounded-full mb-5" />
          <p className="text-justify">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident sunt in culpa qui officia deserunt mollit
            anim id est laborum sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
