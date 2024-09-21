import Container from "@/components/shared/Container";
import React from "react";
import Banner from "./_components/Banner";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const page = () => {
  return (
    <div>
      <Banner title="Contact Us " text=''/>
      <Container className="bg-gray-100 py-10 ">
        <div className="lg:flex md:flex py-12 items-center md:gap-5">
          <div className="bg-green-600 lg:w-[400px] w-full h-full lg:h-[400px] lg:relative lg:z-10 lg:left-32 text-white p-10 rounded flex flex-col justify-center gap-10">
            <div className="flex items-center gap-5">
              <div className="bg-red-600 p-5 rounded-full">
                <LocationOn className="text-white" style={{ fontSize: 40 }} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Our Location</h4>
                <p className="mt-1">456, London Street</p>
                <p className="mt-1">New York, 33454</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-red-600 p-5 rounded-full">
                <Phone className="text-white" style={{ fontSize: 40 }} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone Number</h4>
                <p className="mt-1">+1 888-654-4329</p>
                <p>+1 888-543-8765</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-red-600 p-5 rounded-full">
                <Email className="text-white" style={{ fontSize: 40 }} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email Address</h4>
                <p className="mt-1">contact@example.com</p>
                <p>admin@example.com</p>
              </div>
            </div>
          </div>

          <div className="p-10 rounded shadow-md w-full h-full lg:w-[600px] bg-white lg:mt-0 mt-5 lg:pl-40">
            <form>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <TextField label="Your name" variant="outlined" fullWidth />
                </div>
                <div>
                  <TextField label="Your Email" variant="outlined" fullWidth />
                </div>
                <div>
                  <TextField
                    label="Contact Number"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Subject type</InputLabel>
                    <Select label="Subject type">
                      <MenuItem value="Inquiry">Inquiry</MenuItem>
                      <MenuItem value="Support">Support</MenuItem>
                      <MenuItem value="Feedback">Feedback</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    label="Your message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    className="col-span-2"
                  />
                </div>
                <div>
                  <Button
                    variant="contained"
                    disableElevation
                    color="error"
                    size="large"
                    fullWidth
                    className="col-span-2 mt-5"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
