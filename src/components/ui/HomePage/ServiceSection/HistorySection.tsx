/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./history.css";
import Container from "@/components/shared/Container";
import hero from "../../../../assets/images/profile/profile.jpeg";
import heros2 from "../../../../assets/images/profile/profile2.jpeg";
import hero3 from "../../../../assets/images/profile/profile3.jpeg";
import hero2 from '../../../../assets/images/founder/founder.jpeg';
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import { East } from "@mui/icons-material";
import Link from "next/link";

type TLeader = {
  _id: string,
  name: string,
  qoute: string,
  images: string[]
}
const HistorySection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/leader`, {
    cache: 'no-store'
  });
  const leadersData = await res.json();
 

  return (
    <div className="historyWrap">
      <Container>
        <div className="historyContent">
          <div className="grid grid-cols-1  xl:grid-cols-3 xl:-mt-16 z-10 gap-5 ">
            {
              leadersData?.data?.leaders?.map((leader: TLeader) => (
                <div key={leader._id}>
                  <div>
                    <div className="heroImgWrap relative">
                      {leader?.images?.map((img) => {
                   
                        return <Image src={img} alt="hero" width={300} height={300} key={img} />
                      })}

                      {/* <div className="absolute arrowBtn ">
                  <div>
                    <Link href="">
                      <button>
                        <East sx={{ fontSize: "30px" }} />
                      </button>
                    </Link>
                  </div>
                </div> */}
                    </div>
                    <div className="mt-5 block xl:hidden">
                      <div className="historyContents text-white                                                 ">
                        <div className="flex gap-5">
                          <div>
                            <FaQuoteRight size={30} />
                          </div>
                          <div>
                            <h4 className="leading-8 ">
                              {leader.qoute}
                            </h4>
                            <div className="flex items-center">
                              <div className="dahsed"></div>
                              <p className="ml-2">{leader.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }


          </div>


          <div className=" text-[#fff] mt-14 flex   items-center  justify-between ">
            {
              leadersData?.data?.leaders.map((leader: TLeader, index:number) => (
                <div key={index}>
                  <div className="historyContents hidden xl:block                                                ">
                    <div className="flex gap-5">
                      <div>
                        <FaQuoteRight size={30} />
                      </div>
                      <div>
                        <h4 className="leading-8 ">
                          {
                            leader.qoute
                          }
                        </h4>
                        <div className="flex items-center">
                          <div className="dahsed"></div>
                          <p className="ml-2">{leader.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashed hidden xl:block "></div>
                </div>
              ))
            }

          </div>
        </div>
      </Container>
    </div>
  );
};

export default HistorySection;


export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/leader`);
  const leadersData = await res.json();

  return {
    props: {
      leadersData,
    },
  };
};