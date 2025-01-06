
import * as React from 'react';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import '../../prison/prison.css'
import { Search } from '@mui/icons-material';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { TPrison } from '@/types/prison';
import { btnStyle, loadBtnStyle } from '@/utils/customStyle';
import { formatDate } from '@/utils/formatedate';
import EastIcon from "@mui/icons-material/East";
type LanguageProps = {
    language: string,
    prisonData: TPrison[]
}
export default function PrisonPage({ language, prisonData }: LanguageProps) {

    const buttonStyle = {
        width: { xs: '120px', sm: '150px', md: '150px', lg: '170px' },
        height: { xs: '30px', sm: '35px', md: '40px', lg: '45px' },
        fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' },
        borderRadius: '30px',
        background: '#2B8444',
        color: '#fff',
        textTransform: 'none',
        '&:hover': {
            background: '#256d37',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const prisonFilterData = prisonData?.filter((item: any) => item.category === 'কারাগারে নির্যাতন')
    const sortedPrisonData = prisonFilterData?.sort(
        (a: TPrison, b: TPrison) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
        },
    );

    const [visibleCount, setVisibleCount] = React.useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };


    return (
        <>
            <div className='bannerWrap'>
                <div className="bannerContent">
                    <h3 className='text-xl md:text-4xl font-semibold'> {language === 'ENG' ? 'Prison Torture' : 'কারাগারে নির্যাতন'} </h3>
                </div>
            </div>
            <Container className='my-10'>
                <div className='mb-10 flex gap-2  '>
                    <TextField label=' সার্চ করুন' size='small' />
                    <Button><Search /></Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedPrisonData?.slice(0, visibleCount).map((data: TPrison, index: number) => (
                        <div key={data._id} className="imgGalleryImgWraps ">
                            <div className="murtyreImgWraps">

                                {data?.bng_Images.slice(0, 1)?.map((img) => {

                                    return <Image src={img} alt="hero" width={500}
                                        height={500} key={img} />
                                })}
                            </div>
                            <div className="imgGalleryContent">
                                <h3 className='text-xl mb-2 '>  {language === 'ENG' ? data.english_title : data.bangla_title}</h3>
                                <Button component={Link} href={`/prison/${data._id}`} sx={buttonStyle}> {
                                    language === 'ENG' ? 'Read More' : 'আরও পড়ুন'}</Button>
                            </div>

                            <div className="galleryContent space-y-2 ">
                                <h3 className='text-xl'>

                                    {language === 'ENG' ? data.english_title : data.bangla_title}
                                </h3>
                                <p>
                                    {language === 'ENG' ? data.english_short_description : data.bangla_short_description}
                                </p>
                                <div className="flex justify-between mt-10 w-full items-center ">
                                    <b>
                                        {formatDate(data.date)}
                                    </b>
                                    <Link href={`/prison/${data._id}`}>
                                        <Button sx={btnStyle}>
                                            {language === "ENG" ? "Read More" : "আরও পড়ুন"}{" "}
                                            <EastIcon sx={{ fontSize: { md: '20px', xs: '20px' } }} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < sortedPrisonData?.length && (
                    <div className="flex items-center justify-center mt-5">
                        <Button
                            onClick={loadMore}
                            variant="contained"
                            sx={loadBtnStyle}
                        >
                            {language === 'ENG' ? 'Load More' : 'আরো লোড'} <ArrowRightAltIcon />
                        </Button>
                    </div>
                )}
            </Container>


        </>
    );
}
