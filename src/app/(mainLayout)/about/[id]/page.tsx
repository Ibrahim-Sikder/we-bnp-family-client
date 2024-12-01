import Image from "next/image";
import React from "react";
import member1 from "../../../../assets/images/member/team-03-600x700.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import Container from "@/components/shared/Container";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Progress from "../_components/Progress";
import Contact from "../_components/Contact";
import banner from "../../../../assets/images/banner/banner7.jpg";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: <FacebookIcon />,
  },
  {
    href: "https://twitter.com",
    icon: <XIcon />,
  },
  {
    href: "https://instagram.com",
    icon: <InstagramIcon />,
  },
  {
    href: "https://youtube.com",
    icon: <YouTubeIcon />,
  },
];

const AboutDetails  = () => {
  return (
    <>
      <Image
        src={banner}
        className="w-full h-[200px] md:h-[350px] lg:h-[400px] xl:h-[400px]"
        alt="this is cover img"
      />
      <Container>
        <div className="my-10">
          <div className="rounded-lg  overflow-hidden lg:flex gap-4">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative">
              <Image
                src={member1}
                alt="Novalee Spicer"
                className="object-cover w-full h-full lg:rounded-lg"
                width={900}
                height={700}
              />
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 bg-[#021460] p-6 relative lg:rounded-lg">
              {/* Social Icons */}
              <div className="flex flex-row md:flex-row lg:flex-col md:justify-center">
                <div className="absolute lg:left-0 lg:top-1/2 transform lg:-translate-y-1/2 -ml-1 lg:-ml-11 flex flex-row md:flex-row lg:flex-col md:text-center lg:space-y-3 xl:space-y-10 gap-3 ">
                  {socialLinks.map((link, index) => (
                    <div key={index}>
                      <Link
                        href={link.href}
                        className="bg-white hover:bg-red-500 p-3 lg:p-5 rounded-full border shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:m-10 space-y-5 mt-20 lg:mt-32">
                <div>
                  <h2 className="text-white text-4xl font-bold">
                    Novalee Spicer
                  </h2>
                  <p className="text-red-600">President</p>
                </div>
                <p className="text-white mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
                <div className="mt-6">
                  <p className="text-white">
                    <span className="font-bold text-red-500">Phone:</span>{" "}
                    123456789
                  </p>
                  <p className="text-white">
                    <span className="font-bold text-red-500">Email:</span>
                    novalee@example.com
                  </p>
                  <p className="text-white">
                    <span className="font-bold text-red-500">Website:</span>{" "}
                    www.example.com
                  </p>
                  <p className="text-white">
                    <span className="font-bold text-red-500">Fax:</span>{" "}
                    123456789
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* what will i doing? */}
          <div className="space-y-4 mt-10">
            <h1>What will I be Doing?</h1>
            <p className="text-justify">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices
              gravida Risus commodo viverra maecenas accumsan lacus sint
              occaecat cupida vel facilisis.
            </p>
          </div>

          <div className="lg:flex gap-10 my-10 space-y-8">
            <div className="space-y-4">
              <h1>Skills of political</h1>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit pariatur.
              </p>
              <div>
                <Progress />
              </div>
            </div>
            <div className="space-y-4">
              <h1>My Achievements</h1>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit pariatur.
              </p>
              <div className="md:flex lg:flex md:justify-center gap-2 space-y-2 md:space-y-0 lg:space-y-0">
                <div className="[&_h5]:font-bold space-y-4">
                  <h5>
                    {" "}
                    <CheckBoxIcon /> Hands on experience
                  </h5>
                  <h5>
                    <CheckBoxIcon />
                    Perform similar operations
                  </h5>
                  <h5>
                    <CheckBoxIcon />
                    Tents for shelter of rodiar
                  </h5>
                  <h5>
                    <CheckBoxIcon />
                    future maintenance costs
                  </h5>
                </div>
                <div className="[&_h5]:font-bold  space-y-4">
                  <h5>
                    <CheckBoxIcon />
                    Tents for shelter of rodiar
                  </h5>
                  <h5>
                    <CheckBoxIcon />
                    future maintenance costs
                  </h5>
                  <h5>
                    <CheckBoxIcon />
                    Hands on experience
                  </h5>
                  <h5>
                    <CheckBoxIcon />
                    Perform similar operations
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Contact />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutDetails ;



// moriom sami sumon baba abul hasem 2 chele 1 meye
// rashed pita rongu mia, 3 meye, rajmisrtir jogali
// hasnehar pita mitro abdul aziz, bidoba, kichu nasi, 1 chele. 
// abdur razzak, pita: modorv ali mrito, 3chele 2 meye 
