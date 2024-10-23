'use client'
import * as React from 'react';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import '../../../components/ui/HomePage/PhotoGallery/PhotoGallery.css'
import { Search } from '@mui/icons-material';
import { TDisappearance } from '@/types/disappearance';
import './Murder.css'
export default function Cases() {
  const [disappearanceData, setDisappearanceData] = React.useState<TDisappearance[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [value, setValue] = React.useState("1");

  React.useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/disappearance?limit=10000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setDisappearanceData(data.data?.disappearances || []);

      } catch (err) {
        setError('Failed to fetch disappearance data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  if (loading) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">Loading...</h1>;
  }

  if (error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        {error}
      </h1>
    );
  }

  if (!disappearanceData || disappearanceData.length === 0) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        Oops! disappearance data not found!
      </h1>
    );
  }


  const murtyreFilterData = disappearanceData.filter((item) => item.category === 'শহীদদের তালিকা')


  return (
    <>
      <div className='bannerWrap'>
        <div className="bannerContent">
          <h3 className='text-3xl md:text-4xl font-semibold '>গুম তালিকা </h3>
        </div>
      </div>
      <Container className='my-10'>
        <div className='mb-10 flex gap-2  '>
          <TextField label=' সার্চ করুন' size='small' />
          <Button><Search /></Button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {murtyreFilterData?.map((data: TDisappearance) => (
            <div key={data._id} className="disappeareCard">
              <div className="flex gap-x-5 items-end justify-between flex-col md:flex-row ">
                <div className="disappeareImgWrap ">


                  {data?.bng_Images.slice(0, 1)?.map((img) => {

                    return <Image src={img} alt="hero" width={500}
                      height={500} key={img} />
                  })}
                </div>
                <div className="disappeareContent text-left items-end  justify-end ">
                  <div className="flex text-left gap-x-8 items-center">
                    <div className="flex items-center justify-between w-[60px]">
                      <div className="flex flex-col  gap-y-2 text-sm ">
                        <b>নাম </b>
                      </div>
                      <div className="flex flex-col ">
                        <b> : </b>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <small> {data.name_bangla}</small>
                    </div>
                  </div>
                  <div className="flex text-left gap-x-8 items-center ">
                    <div className="flex justify-between w-[60px]">
                      <div className=" text-sm ">
                        <b>পদবী </b>
                      </div>
                      <div>
                        <b>:</b>
                      </div>
                    </div>
                    <div>
                      <small className="text-justify">
                        {data.designation_bangla}{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex text-left gap-x-10 ">
                    <div className="flex text-left items-center justify-between  w-[60px]">
                      <div className=" text-sm ">
                        <b>ঠিকানা</b>
                      </div>
                      <div>
                        <b>:</b>
                      </div>
                    </div>
                    <div className="text-left ">
                      <small className="text-left">
                        {data.address_bangla}{" "}
                      </small>
                    </div>
                  </div>
                  {/* <div className="flex gap-x-10 ">
                                <div className="flex items-center justify-between w-[60px]">
                                  
                                  <div className="flex flex-col  gap-y-2 text-sm ">
                                    <b>নাম  </b>
                                    <b>পদবী </b>
                                    <b> ঠিকানা  </b>

                                  </div>
                                  <div className="flex flex-col ">
                                    <b>  : </b>
                                    <b> : </b>
                                    <b>   : </b>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-y-2 ">

                                  <small> {data.name}</small>
                                  <small> {data.designation} </small>
                                  <small>{data.address} </small>

                                </div>

                              </div> */}
                  <span className="mt-3 block text-sm ">
                    {" "}
                    <b>সংক্ষিপ্ত বিবরণী:</b>
                    {data.bangla_short_description}
                    {/*                               
                              <Link href="/disappearances/1">
                                <button className="mt-3 bg-gradient-to-r from-red-600 to-green-600 text-white py-0 text-[10px] px-2  rounded inline-block font-semibold uppercase">
                                  আরও পড়ুন
                                </button>
                              </Link>  */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-5 ">
          <Button>Load more </Button>
        </div>
      </Container>
    </>
  );
}
