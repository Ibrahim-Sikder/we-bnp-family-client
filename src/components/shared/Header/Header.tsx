"use client";
import { useEffect, useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
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
  // useEffect(() => {
  //   const checkZoom = () => {
  //     const zoomLevel = Math.round(window.devicePixelRatio * 100);
  //     const menu = document.querySelector('.navItems') as HTMLElement | null;

  //     if (menu) {
  //       if (zoomLevel >= 175) {
  //         menu.style.display = 'none';
  //       } else {
  //         menu.style.display = 'flex';
  //       }
  //     }
  //   };


  //   checkZoom();

  //   window.addEventListener('resize', checkZoom);

  //   return () => {
  //     window.removeEventListener('resize', checkZoom);
  //   };
  // }, []);


  return (
    <div className="sticky top-0 w-full bg-white shadow-md py-3 md:p-4 z-[999999]">
      <Container>
        <div className="flex justify-between items-center">
          <Box component={Link} href="/">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={logo}
                alt="logo"
                className="rounded-full w-8 md:w-14"
                width={50}
                height={50}
              />
              <Typography component="span" fontWeight={600} color="black">
                <Box component="span" color="primary.main" fontWeight="bold">
                  <b className="md:font-bold text-[12px] md:text-[20px]">{language === 'ENG' ? 'WE' : 'আমরা'}</b><b className="md:font-bold text-[12px] md:text-[20px]"> {language === 'ENG' ? 'BNP FAMILY' : 'বিএনপি পরিবার'} </b>
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

            <>

              <ul
                className={`flex justify-between  font-medium lg:text-lg text-sm navItems ${open ? "" : "activeMenu"
                  }`}
              >
                <li className="block xl:hidden">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Image
                      src={logo}
                      alt="logo"
                      className="rounded-full w-8 xl:w-14"
                      width={50}
                      height={50}
                    />
                    <Typography component="span" fontWeight={600} color="white">
                      <Box component="span" color='' fontWeight="bold">
                        <b className="md:font-bold text-[12px] xl:text-[20px] text-white ">{language === 'ENG' ? 'WE' : 'আমরা'}</b><b className="md:font-bold text-white  text-[12px] xl:text-[20px]"> {language === 'ENG' ? 'BNP FAMILY' : 'বিএনপি পরিবার'} </b>
                      </Box>

                    </Typography>
                  </div>
                </li>
                <li className="lg:border-none border-b lg:py-0">
                  <Link onClick={toggleMobileMenu} href="/">{language === 'ENG' ? 'Home' : 'প্রচ্ছদ'}</Link>
                </li>
                <li className="dropdownMenuWrap">
                  <small className="">
                    {language === 'ENG' ? 'Our Activities' : ' আমাদের কার্যক্রম'}
                    <KeyboardArrowDownIcon />
                  </small>
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
                  <small className="">  {language === 'ENG' ? "Oppressive Rule of Dictator Hasina" : 'স্বৈরাচার হাসিনার দুঃশাসন'} <KeyboardArrowDownIcon /></small>
                  <ul className="dropdownMenu">
                    <li>
                      <Link onClick={toggleMobileMenu} href="/disappearances">
                        <span> {language === 'ENG' ? 'Disappeared List' : 'গুমের তালিকা'}  </span></Link>
                    </li>
                    <li className=" murterDropDown">
                      <Link href='#' onClick={(e) => e.preventDefault()} title="">
                        <span> {language === 'ENG' ? 'Martyrs List' : 'শহীদদের তালিকা '} </span>
                      </Link>


                      <ul className=" submenu3">
                        <li>
                          <Link onClick={toggleMobileMenu} href="/murdered">

                            {language === 'ENG' ? '(2009 - 2024)' : '(২০০৯ - ২০২৪) '}
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleMobileMenu} href="/august-mass-uprising"><span> {language === 'ENG' ? 'August Mass Uprising' : 'আগস্ট গণ-অভ্যুত্থান'}  </span></Link>
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
                  <small className="">
                    {language === 'ENG' ? 'Reports' : 'রিপোর্ট'}
                    <KeyboardArrowDownIcon />
                  </small>
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
            </>
          </div>
          <div className=" xl:block space-x-1 md:space-x-3 mr-8 md:mr-5 xl:mr-0 ">
            <button
              onClick={() => setLanguage("ENG")}
              className={`bg-gradient-to-r from-red-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white ${language === "ENG" ? "opacity-100" : "opacity-60"
                }`}
            >
              ENG
            </button>
            <button
              onClick={() => setLanguage("BNG")}
              className={`bg-gradient-to-r from-red-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3 rounded text-white ${language === "BNG" ? "opacity-100" : "opacity-60"
                }`}
            >
              বাংলা
            </button>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
