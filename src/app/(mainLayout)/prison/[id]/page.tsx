/* eslint-disable react/no-unescaped-entities */

import Container from "@/components/shared/Container";
import "../../murdered/Murder.css";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import { Typography} from "@mui/material";
import { KeyboardArrowRight} from "@mui/icons-material";
import Link from "next/link";
interface PageProps {
  params: {
    id: string;
  };
}

const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-2xl font-bold mb-2 ">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    }


    else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};



const page = async ({ params }: PageProps) => {
  const { id } = params


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison/${id}`, {
    cache: 'no-store'
  });
  const prisonData = await res.json();
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <>
      <div className="bannerWrap">
        <div className="bannerContent">
          <h3 className="text-xl  md:text-4xl font-semibold ">কারাগারে নির্যাতন</h3>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 my-20">
          <div className="xl:col-span-9">
            <div className="murderRightSide">
              <div className="imgWrap">


                {prisonData?.data?.bng_Images.slice(0, 1)?.map((img:any) => {

                  return <Image src={img} alt="hero" className="w-full object-contain " width={500}
                    height={500} key={img} />
                })}
              </div>
              <div className="my-10">
                <h2>
                  {prisonData?.data?.bangla_title}
                </h2>
                <div className="space-y-5 mt-5 ">

                  {renderContent(prisonData?.data?.bangla_description)}


                </div>
                <div className="flex gap-10">
                  <div className="flex flex-col mt-5 ">
                    <b> প্রকাশিত পত্রিকার নাম  </b>
                    <b>সংবাদ প্রকাশের তারিখ </b>
                    <b> পত্রিকার প্রকাশিত লিংক</b>
                  </div>
                  <div className="flex flex-col mt-5 ">
                    <span>: {prisonData?.data?.name_published_newspaper}</span>
                    <span>: {formatDate(prisonData?.data?.news_release_date)}  </span>
                    <span>:
                      <Link href={`${prisonData?.data?.Link_published_newspaper}`} passHref>

                        <button className=" bg-gradient-to-r from-red-600 to-green-600 text-white py-1 text-[10px] px-3  rounded inline-block font-semibold uppercase">
                          লিংক দেখুন
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>




            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="murderLeftSide">
              <div className="space-y-3">
                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    গুমের তালিকা
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    শহীদদের তালিকা
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>

                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    কারা নির্যাতন
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>


                <div className="leftCard">
                  <Typography variant="h6" className="leftCard-text">
                    আওয়ামী লীগের নির্যাতন
                  </Typography>
                  <KeyboardArrowRight className="leftCard-icon" />
                </div>
              </div>
            </div>
            {/* <div className="space-y-3 mt-10">
                            <div className="card">
                                <SupportAgent sx={{ fontSize: '70px' }} />
                                <div>
                                    <h3>Manifesto</h3>
                                    <p>Join the campaign</p>

                                </div>
                                <KeyboardArrowRight sx={{ fontSize: '30px' }} />
                            </div>
                            <div className="card">
                                <SupportAgent sx={{ fontSize: '70px' }} />
                                <div>
                                    <h3>Contribute </h3>
                                    <p>Become a volunteer </p>

                                </div>
                                <KeyboardArrowRight sx={{ fontSize: '30px' }} />
                            </div>
                            <div className="card">
                                <SupportAgent sx={{ fontSize: '70px' }} />
                                <div>
                                    <h3>Register to vote </h3>
                                    <p>Join the campaign </p>

                                </div>
                                <KeyboardArrowRight sx={{ fontSize: '30px' }} />
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="partyChiepCard bg-[#2B8444] text-white p-10 rounded-md w-[300px] text-cetner mx-auto flex flex-col justify-center items-center ">
                                <Image src={chief} alt='chief' className='w-[150px] rounded-full h-[150px] object-fill ' />
                                <div className="mt-5">
                                    <h3>Party Chiief Contact</h3>
                                    <div className="my-3">
                                        <p>Call: (+1) 555 234-8765
                                        </p>
                                        <p>Mail: bnp@gmail.com</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="socialIcon  ">
                                            <Facebook sx={{ color: 'black' }} />
                                        </div>
                                        <div className="socialIcon  ">
                                            <Instagram sx={{ color: 'black' }} />
                                        </div>
                                        <div className="socialIcon  ">
                                            <YouTube sx={{ color: 'black' }} />
                                        </div>
                                        <div className="socialIcon  ">
                                            <X sx={{ color: 'black' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
