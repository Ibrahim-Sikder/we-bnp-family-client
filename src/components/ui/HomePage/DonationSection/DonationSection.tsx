/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import './DonationSection.css';
import BNPForm from '@/components/Forms/Form';
import BNPInput from '@/components/Forms/Input';
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import donate3 from '../../../../assets/images/donation/donation2.jpeg'
import Container from '@/components/shared/Container';
const DonationSection = () => {
    const handleSubmit = (data: any) => {
 
    };
    const inputStyles = {
        input: {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
        },
    };
    const buttonStyle = {
        width: { xs: "100px", md: "100%", sm: "140px", },
        height: { md: "40px", xs: "30px", },
        fontSize: { md: "14px", xs: "9px", xl: "16px" },
        borderRadius: "30px",
        background: "#fff",
        color: '#111'
    };
    return (
        <div className='sectionMargin'>
            <div className="donationWrap relative">
                <div className="experienceWraps donation">
                    <div className='experienceContent'>
                        <h2 className='md:leading-10 w-full text-center'>কারাগারে নির্যাতনের শিকার ব্যক্তিদের কষ্টের কথা বলে শেষ করা যায় না। এই নির্যাতন শুধু শারীরিক নয়, মানসিকভাবেও তারা তীব্র যন্ত্রণার সম্মুখীন হন।</h2>
                    </div>
                </div>
                <Container >
                    <div className="donationLeftSide ">
                        <div className="flex flex-col xl:flex-row justify-between">
                            <Image
                                src={donate3}
                                alt="Second Image"
                                layout=""
                                objectFit="cover"
                                className='rounded-md mx-auto '

                            />
                            <div className="lg:p-8 mt-5 lg:mt-0 md:w-[600px]">
                                <div>
                                    <h2 className='mb-5'>সহযোগিতায় করুন</h2>
                                    <BNPForm onSubmit={handleSubmit}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={12} lg={12}>
                                                <BNPInput name='name' label='নাম' size='medium' fullWidth sx={inputStyles} />
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={12}>
                                                <BNPInput name='phone' label='মোবাইল' size='medium' fullWidth sx={inputStyles} />
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={12}>
                                                <BNPInput name='email' label='ইমেইল' size='medium' fullWidth sx={inputStyles} />
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={12}>
                                                <BNPInput name='amount' label='ঠিকানা' size='medium' fullWidth sx={inputStyles} />
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={12}>
                                                <div className="bnpBtnStyle">
                                                    <Button sx={buttonStyle}><span>সাবমিট করুন</span></Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </BNPForm>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    );
};

export default DonationSection;
