'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Container from '@/components/shared/Container';
import '../../../../components/ui/HomePage/PhotoGallery/PhotoGallery.css';
import { Search } from '@mui/icons-material';
import { TDisappearance } from '@/types/disappearance';
import { sortByDate } from '@/utils/sort';

type LanguageProps = {
  language: string,
  disappearanceData: TDisappearance[]
}

export default function DisappearanceCard({ language, disappearanceData }: LanguageProps) {
  const [visibleCount, setVisibleCount] = React.useState(5);

  const sortedDisappearanceData = sortByDate(disappearanceData, 'date');
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  return (
    <>
      <div className='bannerWrap'>
        <div className="bannerContent">
          <h3 className='text-3xl md:text-4xl font-semibold '>
            {language === 'ENG' ? 'Disappeared List' : 'গুম তালিকা'}
          </h3>
        </div>
      </div>
      <Container className='my-10'>
        <div className='mb-10 flex gap-2'>
          <TextField label={language === 'ENG' ? 'Search here' : 'সার্চ করুন'} size='small' />
          <Button><Search /></Button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {sortedDisappearanceData.slice(0, visibleCount).map((data: TDisappearance) => (
            <div key={data._id} className="disappeareCard">
              <div className="flex gap-x-5 items-stretch justify-between flex-col md:flex-row min-h-[300px]">
                <div className="disappeareImgWrap">
                  {language === 'ENG'
                    ? data.bng_Images?.slice(0, 1).map((img) => (
                      <Image src={img || "/placeholder.svg"} alt="hero" width={500} height={500} key={img} />
                    ))
                    : data.eng_iamges?.slice(0, 1).map((img) => (
                      <Image src={img || "/placeholder.svg"} alt="hero" width={500} height={500} key={img} />
                    ))
                  }
                </div>
                <div className="disappeareContent text-left flex-1 min-w-0 flex flex-col justify-end">
                  <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-2">
                    <div className="font-semibold text-sm whitespace-nowrap">
                      {language === 'ENG' ? 'Name' : 'নাম'}
                    </div>
                    <div className="text-sm truncate flex ">
                      <small className="mr-2 block">:</small> {language === "ENG" ? data.name_english : data.name_bangla}
                    </div>

                    <div className="font-semibold text-sm whitespace-nowrap">
                      {language === 'ENG' ? 'Designation' : 'পদবী'}
                    </div>
                    <div className="text-sm break-words flex ">
                      <small className="mr-2 block">:</small> {language === 'ENG' ? data.designation_english : data.designation_bangla}
                    </div>

                    <div className="font-semibold text-sm whitespace-nowrap">
                      {language === 'ENG' ? 'Address' : 'ঠিকানা'}
                    </div>
                    <div className="text-sm break-words flex ">
                      <small className="mr-2 block">:</small> {language === "ENG" ? data.address_english : data.address_bangla}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="font-semibold text-sm">
                      {language === "ENG" ? 'Short Description' : 'সংক্ষিপ্ত বিবরণী'}:
                    </span>
                    <p className="text-sm mt-1 break-words">
                      {language === "ENG" ? data.english_short_description : data.bangla_short_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < sortedDisappearanceData.length && (
          <div className="flex items-center justify-center mt-5">
            <Button onClick={handleLoadMore}>
              {language === 'ENG' ? 'Load More' : 'আরো লোড'}
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}
