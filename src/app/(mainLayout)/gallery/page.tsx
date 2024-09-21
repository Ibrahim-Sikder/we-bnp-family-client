// "use client";
// import React from "react";
// import Banner from "./_components/Banner";
// import Container from "@/components/shared/Container";
// import ModalImage from "react-modal-image";
// import image1 from "../../../assets/images/gallery/gallery10.jpeg";
// import image2 from "../../../assets/images/gallery/gallery11.jpeg";
// import image3 from "../../../assets/images/gallery/gallery12.jpeg";
// import image4 from "../../../assets/images/gallery/gallery13.jpeg";
// import image5 from "../../../assets/images/gallery/gallery14.jpeg";
// import image6 from "../../../assets/images/gallery/gallery15.jpeg";
// import image7 from "../../../assets/images/gallery/gallery16.png";

// const galleryItems = [
//   {
//     id: 1,
//     src: image1,
//     href: "https://i.ibb.co/ZHzrnmZ/gallery10.jpg",
//     alt: "tours1",
//   },
//   {
//     id: 2,
//     src: image2,
//     href: "https://i.ibb.co/dQSTPP6/gallery11.jpg",
//     alt: "tours2",
//   },
//   {
//     id: 3,
//     src: image3,
//     href: "https://i.ibb.co/37zc78w/gallery12.jpg",
//     alt: "tours3",
//   },
//   {
//     id: 4,
//     src: image4,
//     href: "https://i.ibb.co/ry2y5wx/gallery13.jpg",
//     alt: "tours4",
//   },
//   {
//     id: 5,
//     src: image5,
//     href: "https://i.ibb.co/Wc41M07/gallery14.jpg",
//     alt: "tours5",
//   },
//   {
//     id: 6,
//     src: image6,
//     href: "https://i.ibb.co/2y77c71/gallery15.jpg",
//     alt: "tours6",
//   },
//   {
//     id: 7,
//     src: image7,
//     href: "https://i.ibb.co/k8XsGC4/gallery16.png",
//     alt: "tours7",
//   },
// ];


// const Page = () => {
//   return (
//     <>
//       <Banner />
//       <div className="App my-10">
//         <Container>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//             {galleryItems.map((item) => (
//               <div key={item.id} className="cursor-pointer">
//                 <ModalImage
//                   small={item.href} 
//                   large={item.href} 
//                   alt={item.alt}
//                   hideDownload={false} 
//                   hideZoom={false} 
//                   showRotate
//                   className="w-full h-auto rounded-lg" 
//                 />
//               </div>
//             ))}
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Page;
import React from 'react';

const page = () => {
  return (
    <div>
      <h3>gallery</h3>
    </div>
  );
};

export default page;