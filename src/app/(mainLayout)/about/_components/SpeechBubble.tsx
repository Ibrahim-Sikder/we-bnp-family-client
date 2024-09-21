// import * as React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import Image from "next/image";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

// function Conversation({ text, isLeft }) {
//   return (
//     <div className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-4`}>
//       <div
//         className={`relative max-w-xs px-4 py-2 text-white rounded-lg ${
//           isLeft ? "bg-blue-600" : "bg-green-600"
//         } ${isLeft ? "rounded-tl-none" : "rounded-tr-none"}`}
//       >
//         {text}
//         <div
//           className={`absolute top-0 w-0 h-0 border-t-8 border-t-transparent ${
//             isLeft
//               ? "left-0 border-r-8 border-r-blue-600 border-l-0"
//               : "right-0 border-l-8 border-l-green-600 border-r-0"
//           }`}
//         ></div>
//       </div>
//     </div>
//   );
// }

// const SpeechBubble = () => {
//   return (
//     <>
//       <Timeline position="alternate">
//         <TimelineItem>
//           <TimelineOppositeContent color="text.secondary">
//             Founded - 2005
//           </TimelineOppositeContent>
//           <TimelineSeparator sx={{ height: "220px" }}>
//             <TimelineDot variant="outlined" color="secondary" />
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent>
//             <div className="relative bg-gradient-to-r from-green-500 to-red-500 hover:from-green-700 hover:to-red-700 text-white px-5 py-5 rounded-2xl -mt-[37px] md:-mt-[63px] lg:-mt-[90px] xl:-mt-[90px] h-[100px] md:h-[150px] lg:h-[200px] xl:h-[200px] w-[250px] md:w-[250px] lg:w-[400px] xl:w-[400px] transition-colors duration-300">
//               <h4>Hello world! </h4>
//               <h1>Inception </h1>
//               <p>
//                 Our humble beginnings started with a vision to address pressing
//                 social issues through community partnerships.{" "}
//               </p>
//               <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-green-500"></div>
//             </div>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent color="text.secondary">
//             Growth - 2010
//           </TimelineOppositeContent>
//           <TimelineSeparator sx={{ height: "200px" }}>
//             <TimelineDot variant="outlined" color="primary" />
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent className="flex justify-end">
//             <div className="relative bg-gradient-to-r from-green-500 to-red-500 hover:from-green-700 hover:to-red-700 text-white px-5 py-5 rounded-2xl -mt-[37px] md:-mt-[63px] lg:-mt-[90px] xl:-mt-[90px] h-[100px] md:h-[150px] lg:h-[200px] xl:h-[200px] w-[250px] md:w-[250px] lg:w-[400px] xl:w-[400px] transition-colors duration-300">
//               <h1>Growing support </h1>
//               <h4> Expansion </h4>
//               <p>
//                 With growing support, we expanded our reach, launching impactful
//                 programs and initiatives to empower more lives.
//               </p>
//               <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-red-500"></div>
//             </div>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent color="text.secondary">
//             Transformation - 2015
//           </TimelineOppositeContent>



//           <TimelineSeparator sx={{ height: "220px" }}>
//             <TimelineDot variant="outlined" color="secondary" />
//             <TimelineConnector />
//           </TimelineSeparator>


          
//           <TimelineContent>
//             <div className="relative right-[-10px] lg:left-[-10px] bg-gradient-to-r from-green-500 to-red-500 hover:from-green-700 hover:to-red-700 text-white px-5 py-5 rounded-2xl -mt-[37px] md:-mt-[63px] lg:-mt-[90px] xl:-mt-[90px] h-[100px] md:h-[150px] lg:h-[200px] xl:h-[200px] w-[250px] md:w-[250px] lg:w-[400px] xl:w-[400px] transition-colors duration-300">
//               <h1>Sustainability </h1>
//               <h4>Innovation </h4>
//               <p>
//                 Embracing innovation, we leveraged technology and sustainable
//                 practices to enhance program effectiveness.
//               </p>
//               <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-green-500"></div>
//             </div>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent color="text.secondary">
//             Influence - Present
//           </TimelineOppositeContent>
//           <TimelineSeparator sx={{ height: "220px" }}>
//             <TimelineDot variant="outlined" color="primary" />
//           </TimelineSeparator>
//           <TimelineContent className="flex justify-end">
//             <div className="relative border shadow-lg bg-gradient-to-r from-green-500 to-red-500 hover:from-green-700 hover:to-red-700 text-white px-5 py-5 rounded-2xl -mt-[37px] md:-mt-[63px] lg:-mt-[90px] xl:-mt-[90px] h-[100px] md:h-[150px] lg:h-[200px] xl:h-[200px] w-[250px] md:w-[250px] lg:w-[400px] xl:w-[400px] transition-colors duration-300">
//               <h1>Lasting change </h1>
//               <h4>Global Impact </h4>
//               <p>
//                 Today, we proudly stand as a global force for positive change,
//                 collaborating with partners worldwide to create meaningful
//                 impact.
//               </p>
//               <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-red-500"></div>
//             </div>
//           </TimelineContent>
//         </TimelineItem>
//       </Timeline>
//     </>
//   );
// };

// export default SpeechBubble;
