"use client";
import { useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../../assets/images/logo/logo.jpg";
import Container from "../Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLanguage } from "@/provider/LanguageProvider";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleMobileMenu = () => {
    setOpen((open) => !open)
  }

  const btnStyle = {
    color: 'black',
    background: 'white',
    padding: '0px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    width: '40px',
    minWidth: '56px',
    height: '33px',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(to right, #dc2626, #16a34a)',
      color: 'white'
    }
  }

  return (
    <div className="sticky top-0 w-full bg-white shadow-md py-3 md:p-7 z-[999999]">
      <Container>
        <div className="lg:flex justify-between items-center">
          <Box component={Link} href="/">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="logo"
                className="rounded-full w-10 md:w-14"
                width={50}
                height={50}
              />
              <Typography component="span" fontWeight={600} color="black">
                <Box component="span" color="primary.main" fontWeight="bold">
                  <b className="md:font-bold  md:text-[20px]">{language === 'ENG' ? 'WE' : 'আমরা'}</b><b className="md:font-bold md:text-[20px]"> {language === 'ENG' ? 'BNP FAMILY' : 'বিএনপি পরিবার'} </b>
                </Box>{" "}
                <Box fontWeight="bold" color="secondary.main">

                </Box>
              </Typography>
            </div>
          </Box>
          <div>
            {open ? (
              <div onClick={handleClose} className="bar1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div
                onClick={handleOpen}
                className={`bar2 ${open ? "" : "activeBar"}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <ul
              className={`flex justify-between  font-medium lg:text-lg text-sm navItems ${open ? "" : "activeMenu"
                }`}
            >
              <li className="lg:border-none border-b lg:py-0 py-2">
                <Link onClick={toggleMobileMenu} href="/">{language === 'ENG' ? 'Home' : 'প্রচ্ছদ'}</Link>
              </li>
              <li className="dropdownMenuWrap">
                <Link href="#">
                  {language === 'ENG' ? 'Our Activities' : ' আমাদের কার্যক্রম'}
                  <KeyboardArrowDownIcon />
                </Link>
                <ul className="dropdownMenu submenu">
                  <li>
                    <Link onClick={toggleMobileMenu} href="/activity">
                      <span >  {language === 'ENG' ? ' Recent Activities' : 'সাম্প্রতিক কার্যক্রম'}  </span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleMobileMenu} href="/press">
                      <span> {language === 'ENG' ? ' Programs and Notices ' : 'প্রোগ্রাম ও নোটিশ'}
                      </span></Link>
                  </li>
                </ul>
              </li>
              <li className="lg:border-none border-b lg:py-0 py-2">
                <Link onClick={toggleMobileMenu} href="/about"> {language === 'ENG' ? 'About Us' : ' আমাদের সম্পর্কে'} </Link>
              </li>
              <li className="dropdownMenuWrap">
                <Link href="/about">
                  {language === 'ENG' ? "Oppressive Rule of Dictator Hasina" : 'স্বৈরাচার হাসিনার দুঃশাসন'} <KeyboardArrowDownIcon />
                </Link>
                <ul className="dropdownMenu">
                  <li>
                    <Link onClick={toggleMobileMenu} href="/disappearances">
                      <span> {language === 'ENG' ? 'Disappeared List' : 'গুমের তালিকা'}  </span></Link>
                  </li>
                  <li className=" murterDropDown">
                    <Link onClick={toggleMobileMenu} href="/murdered">
                      <span> {language === 'ENG' ? 'Martyrs List' : 'শহীদদের তালিকা '}   </span> </Link>
                    <ul className=" submenu3">
                      <li>
                        <Link onClick={toggleMobileMenu} href="/murdered">

                          {language === 'ENG' ? '(2009 - 2024)' : '(২০০৯ - ২০২৪) '}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={toggleMobileMenu} href="/murdered"><span> {language === 'ENG' ? 'August Mass Uprising' : 'আগস্ট গণ-অভ্যুত্থান'}  </span></Link>
                      </li>
                    </ul>
                  </li>


                  <li>
                    <Link onClick={toggleMobileMenu} href="/torture"><span>


                      {language === 'ENG' ? 'Awami League Torture' : ' আওয়ামী লীগের নির্যাতন '}
                    </span></Link>
                  </li>
                  <li>
                    <Link onClick={toggleMobileMenu} href="/prison"><span>
                      {language === 'ENG' ? 'Prison Torture' : 'কারাগারে নির্যাতন'}

                    </span></Link>
                  </li>
                </ul>
              </li>




              <li className="dropdownMenuWrap">
                <Link href="#">
                  {language === 'ENG' ? 'Reports' : 'রিপোর্ট'}
                  <KeyboardArrowDownIcon />
                </Link>
                <ul className="dropdownMenu submenu2">
                  <li>
                    <Link onClick={toggleMobileMenu} href="/international-report">

                      {language === 'ENG' ? 'International Organizations' : 'আন্তর্জাতিক সংস্থা'}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleMobileMenu} href="/media-info"><span>

                      {language === 'ENG' ? 'Media Published Information' : 'মিডিয়ায় প্রকাশিত তথ্য'}
                    </span></Link>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
          <div className="hidden xl:block space-x-3">
            <button
              onClick={() => setLanguage("ENG")}
              className={`bg-gradient-to-r from-red-600 to-green-600 px-3 py-1 rounded text-white ${language === "ENG" ? "opacity-100" : "opacity-60"
                }`}
            >
              ENG
            </button>
            {/* <Button
              onClick={() => setLanguage("BNG")}
              sx={{ backgroundColor: language === "BNG" ? "rgba(255,255,255,0.9)" : "transparent" }}
            >
              বাংলা
            </Button> */}
            <Button onClick={() => setLanguage("BNG")} sx={btnStyle}>
              বাংলা
            </Button>





            {/* <button className="bg-gradient-to-r from-red-600 to-green-600 px-3 py-3 rounded text-white">
              সহযোগিতা
            </button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
