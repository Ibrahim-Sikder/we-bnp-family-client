// "use client";
// import { useState, useEffect } from "react";
// import "./Header.css";
// import Link from "next/link";
// import Image from "next/image";
// import { Box, Typography } from "@mui/material";
// import Container from "../Container";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { useLanguage } from "@/provider/LanguageProvider";
// import { useHeaderData } from "@/hooks/useHeaderData";

// const Header = () => {
//   const { language, setLanguage } = useLanguage();
//   const { headerData, loading, error } = useHeaderData();
//   const [open, setOpen] = useState(true);
//   const [mobileMenu, setMobileMenu] = useState(false); // Mobile menu toggle state
//   const [activeDropdown, setActiveDropdown] = useState(null); // State to manage dropdown visibility

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const toggleMobileMenu = () => setMobileMenu((prev) => !prev);
//   const toggleDropdown = (index) => {
//     if (activeDropdown === index) {
//       setActiveDropdown(null); // Close dropdown if already open
//     } else {
//       setActiveDropdown(index); // Open the selected dropdown
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error loading data</p>;
//   }


//   return (
//     <div className="sticky top-0 w-full bg-white shadow-md py-3 md:p-7 z-[999999]">
//       <Container>
//         <div className="flex justify-between items-center">
//           <Box component={Link} href="/">
//             <div className="flex items-center gap-2 md:gap-3">
//               <Image
//                 src={headerData?.logo || "/default-logo.png"}
//                 alt="logo"
//                 className="rounded-full w-8 md:w-14"
//                 width={50}
//                 height={50}
//               />
//               <Typography component="span" fontWeight={600} color="black">
//                 <Box component="span" color="" fontWeight="bold">
//                   <b className="md:font-bold text-[12px] md:text-[20px]">
//                     {language === 'ENG' ? 'WE' : 'আমরা'}
//                   </b>
//                   <b className="md:font-bold text-[12px] md:text-[20px]">
//                     {language === 'ENG' ? 'BNP FAMILY' : 'বিএনপি পরিবার'}
//                   </b>
//                 </Box>
//               </Typography>
//             </div>
//           </Box>

//           <div>
//             {open ? (
//               <div onClick={handleClose} className="bar1">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             ) : (
//               <div onClick={handleOpen} className={`bar2 ${open ? "" : "activeBar"}`}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             )}

//             <ul className={`flex justify-between font-medium lg:text-lg text-sm navItems ${open ? "" : "activeMenu"}`}>
//               {headerData?.map((menuItem, index) => {

//                 return (
//                   <li key={menuItem._id} className="dropdownMenuWrap">
//                     {
//                       menuItem?.menu?.map((item) => (
//                         <>
//                           <Link
//                             href={item.url || '#'}
//                             onClick={() => toggleDropdown(index)}
//                           >
//                             {item.label}
//                             {
//                               !item.url && (
//                                 <KeyboardArrowDownIcon />
//                               )
//                             }
//                           </Link>
//                         </>
//                       ))
//                     }
//                     {activeDropdown === index && (
//                       <ul className="dropdownMenu submenu">
//                         {menuItem?.menu?.map((menuItem) => {

//                           return (
//                             <>

//                               {
//                                 menuItem?.submenu.map((sub) => {

//                                   return (
//                                     <li key={sub._id}>
//                                       <Link onClick={toggleMobileMenu} href={sub.url}>
//                                         {sub.label}
//                                       </Link>
//                                     </li>
//                                   )
//                                 })
//                               }

//                             </>
//                           )
//                         })}
//                       </ul>

//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           <div className="xl:block space-x-1 md:space-x-3 mr-8 md:mr-5 xl:mr-0">
//             <button
//               onClick={() => setLanguage("ENG")}
//               className={`bg-gradient-to-r from-red-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 md:py-1 rounded text-white ${language === "ENG" ? "opacity-100" : "opacity-60"}`}
//             >
//               ENG
//             </button>
//             <button
//               onClick={() => setLanguage("BNG")}
//               className={`bg-gradient-to-r from-red-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 rounded text-white ${language === "BNG" ? "opacity-100" : "opacity-60"}`}
//             >
//               বাংলা
//             </button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Header;
