'use client'

import React from 'react';
import './information.css'
import Container from '@/components/shared/Container';
import BNPForm from '@/components/Forms/Form';
import { Button, Grid } from '@mui/material';
import BNPInput from '@/components/Forms/Input';
import '../../../components/ui/HomePage/DonationSection/DonationSection.css'
import Iframe from "react-iframe";
import BNPTextArea from '@/components/Forms/TextArea';
import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaRegEnvelope,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { AccessTime, LocalPhone } from '@mui/icons-material';
import BNPFileUpload from '@/components/Forms/FileUpload';
import { toast } from 'sonner';
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/provider/LanguageProvider';
import { useSectionData } from '@/hooks/useSectionData';
import { FieldValues } from 'react-hook-form';

const informationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(1, 'Phone is required').regex(/^\d+$/, 'Phone must be numeric'),
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    address: z.string().min(1, 'Address is required'),
    video_url: z.string().url('Invalid URL format').optional(),
    message: z.string().min(1, 'Message is required').optional(),
    images: z.union([
        z.array(z.string().url()), 
        z.string() 
    ]).transform(value => {
        if (Array.isArray(value)) {
            return value;
        } else {
            return value.split(',').map(url => url.trim());  
        }
    })
});



const Information = () => {
    const { language } = useLanguage()
    const { sectionData } = useSectionData()
    const router = useRouter()
    const handleSubmit = async (data: FieldValues) => {

        const imageUrl = Array.isArray(data.images) ? data.images[0] : data.images;
        const submitData = {
            ...data,
            images: imageUrl,

        }
  
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/information`, submitData);
         

            if (res.status === 200 || res.status === 201) {
                toast.success('Your document submitted successfully!');
                router.push('/');
            }
        } catch (err) {
            toast.error('Something went wrong!');
            console.error(err);
        }
    };





    return (
        <>
            <div className="bannerWrap">

                {
                    sectionData.map((data) => (
                        <div key={data._id} className="bannerContent">
                            <h3 className="text-4xl font-semibold ">{language === 'ENG' ? data.information_title_english : data.information_title_bangla} </h3>
                        </div>
                    ))
                }

            </div>
            <Container >
                {
                    sectionData.map((data) => (
                        <div key={data._id}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sectionMargin  ">
                                <div className="infoCard">
                                    <div className="mailIconWrap">
                                        <FaRegEnvelope className='infoIcon' />
                                    </div>
                                    <div>
                                        <h4> {language === 'ENG' ? 'Email' : 'ইমেইল'}</h4>
                                        <p className='text-sm md:text-[15px]'>webnpfamily@gmail.com</p>
                                    </div>
                                </div>
                                <div className="infoCard">
                                    <div className="mailIconWraps">
                                        <FaMapMarkerAlt className='infoIcon' />

                                    </div>
                                    <div>
                                        <h4>{language === 'ENG' ? 'Address' : 'ঠিকানা'}</h4>
                                        <p className='text-sm md:text-[15px]'> {language === 'ENG' ? data.footer_address_english : data.footer_address_bangla} </p>
                                    </div>
                                </div>
                                <div className="infoCard px-10 ">
                                    <div className="mailIconWrap">
                                        <LocalPhone className='infoIcon' />

                                    </div>
                                    <div>
                                        <h4>{language === 'ENG' ? 'Phone Number' : 'ফোন নাম্বার'} </h4>
                                        <p className='text-sm md:text-[15px]'>{language === 'ENG' ? data.footer_phone_english : data.footer_phone_bangla}
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="infoWraps grid grid-cols-1 md:grid-cols-2 gap-14 sectionMargin  ">
                                <BNPForm onSubmit={handleSubmit} resolver={zodResolver(informationSchema)}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <BNPInput name='name' label={language === 'ENG' ? 'Name' : 'নাম'} size='medium' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <BNPInput name='phone' label={language === 'ENG' ? 'Mobile' : 'মোবাইল'} size='medium' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <BNPInput name='email' label={language === 'ENG' ? 'Email' : 'ইমেইল'} size='medium' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <BNPInput name='address' label={language === 'ENG' ? 'Address' : 'ঠিকানা'} size='medium' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <BNPInput name='video_url' label={language === 'ENG' ? 'Video Link' : 'ভিডিও লিংক'} size='medium' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            <BNPFileUpload
                                                name="images"
                                                label="Upload Docs" />
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <BNPTextArea placeholder={language === 'ENG' ? 'Give details' : 'বিস্তারিত তথ্য দিন'} sx={{ color: 'black', padding: '10px', height: '300px', border: '1px solid #111', borderRadius: '3px' }} name='message' />
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <Button type='submit' sx={{ width: '150px', borderRadius: '5px', height: '50px' }}>{language === 'ENG' ? 'Submit' : 'সাবমিট করুন'}  </Button>
                                        </Grid>
                                    </Grid>
                                </BNPForm>
                                <div className='mt-3'>
                                    <h2 className='mb-5'>{language === 'ENG' ? 'Send Information' : 'তথ্য পাঠান'}</h2>
                                    <p className='leading-8 text-xl'>{language === 'ENG' ? data.information_description_english : data.information_description_bangla}  </p>
                                    <div className="flex space-x-5 mt-8">
                                        <div className="socialIconWrap">
                                            <a
                                                href="https://www.facebook.com/webnpfamily"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaFacebookF size={25} className="text-[#fff]" />
                                            </a>
                                        </div>

                                        <div className="socialIconWrap">
                                            <a
                                                href="https://www.instagram.com/bnpbd/?hl=en"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaInstagram size={25} className="text-[#fff]" />
                                            </a>
                                        </div>

                                        <div className="socialIconWrap">
                                            <a
                                                href="https://x.com/bdbnp78?fbclid=IwAR3Q283HzoOBATGXAycGh8x4QAmnDZfNWBBTRE5cI8DuAw4d6f0Jjixdq-g"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaTwitter size={25} className="text-[#fff]" />
                                            </a>
                                        </div>
                                        <div className="socialIconWrap">
                                            <a
                                                href="https://www.youtube.com/@webnpfamily"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaYoutube size={25} className="text-[#fff]" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </Container>
            <div className="sectionMargin mb-[80px]">
                <section className="flex flex-row items-center justify-center w-full mx-auto">
                    <Iframe
                        className="lg:h-[500px] h-[300px]"
                        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7304.62792422247!2d90.413494!3d23.736181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9a3930cfa6d%3A0xe7f05ff2e7b40ce5!2sBangladesh%20Nationalist%20Party-BNP!5e0!3m2!1sen!2sbd!4v1720861949439!5m2!1sen!2sbd"
                        width="100%"
                        styles={{ border: 0 }}
                        loading="lazy"
                        position="relative"
                    ></Iframe>
                </section>
            </div>
        </>
    );
};

export default Information;

