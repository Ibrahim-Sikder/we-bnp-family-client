"use client";
import React from "react";
import dynamic from "next/dynamic";
import Container from "@/components/shared/Container";

import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=Aw_9EwgOwog",
    title:
      "মির্জা আলমগীর এর বক্তব্য | বেগম খালেদা জিয়ার মুক্তির দাবীতে বিএনপি’র সমাবেশ",
    date: "29 June 2024",
  },
];
const sideVideos = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=Aw_9EwgOwog",
    title:
      "মির্জা আলমগীর এর বক্তব্য | বেগম খালেদা জিয়ার মুক্তির দাবীতে বিএনপি’র সমাবেশ",
    date: "29 June 2024",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=Aw_9EwgOwog",
    title:
      "মির্জা আলমগীর এর বক্তব্য | বেগম খালেদা জিয়ার মুক্তির দাবীতে বিএনপি’র সমাবেশ",
    date: "29 June 2024",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=Aw_9EwgOwog",
    title:
      "মির্জা আলমগীর এর বক্তব্য | বেগম খালেদা জিয়ার মুক্তির দাবীতে বিএনপি’র সমাবেশ",
    date: "29 June 2024",
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=Aw_9EwgOwog",
    title:
      "মির্জা আলমগীর এর বক্তব্য | বেগম খালেদা জিয়ার মুক্তির দাবীতে বিএনপি’র সমাবেশ",
    date: "29 June 2024",
  },
];
const Page = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Container>
        <div className="w-full flex gap-4 my-10">
          <div className="w-3/4">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col gap-5">
                <Link href={`/video/${video.id}`}>
                  <div className="videoWrapper">
                    <ReactPlayer
                      className="react-player"
                      url={video.url}
                      width="100%"
                      height="500px"
                      controls={true}
                    />
                    <div className="videoContent mt-4">
                      <h4 className="">{video.title}</h4>
                      <h5>{video.date}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-[40%] space-y-3 ">
            {sideVideos.map((video, index) => (
              <div key={index} className=" rounded-e-xl shadow-lg ">
                <Link href={`/video/${video.id}`}>
                  <div className="videoWrapper flex gap-4">
                    <ReactPlayer
                      className="react-player"
                      url={video.url}
                      width="auto"
                      height="130px"
                      controls={true}
                    />
                    <div className="videoContent mt-4">
                      <h5 className="">{video.title}</h5>
                      <h5 className="text-sm">{video.date}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
