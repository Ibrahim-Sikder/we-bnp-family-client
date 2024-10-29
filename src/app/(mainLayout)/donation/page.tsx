'use client';
import { useState } from 'react';
import { Box, Button, Grid, Typography, Stepper, Step, StepLabel, Checkbox } from '@mui/material';
import axios from 'axios';
import { toast } from 'sonner';
import CommonBanner from '../report/_component/Banner';
import { isValidPhoneNumber } from 'libphonenumber-js';
import BNPInput from '@/components/Forms/Input';
import BNPForm from '@/components/Forms/Form';
import Container from '@/components/shared/Container';
import { FieldValues } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import bkash from '../../../../src/assets/images/payment/bkas.png'
import nagad from '../../../../src/assets/images/payment/nagad.png'
import rocket from '../../../../src/assets/images/payment/rocket.png'
import visa from '../../../../src/assets/images/payment/visa.png'
import bannerImage from "../../../../src/assets/images/banner/top-banner.jpeg";

import 'react-international-phone/style.css';
import Image from 'next/image';
import './Donation.css'
import { useRouter } from 'next/navigation';
const steps = ['Give Your Information', 'Donate Now ',];


const DonationPage = () => {
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const router = useRouter()
  const handleVerifyPhone = () => {
    if (isValidPhoneNumber(phone, 'BD')) {
      setIsPhoneValid(true);
      toast.success('Phone number is valid');
    } else {
      setIsPhoneValid(false);
      toast.error('Invalid phone number');
    }
  };

  const handleSubmit = async (data: FieldValues) => {
    if (!isPhoneValid) {
      toast.error('Please verify your phone number');
      return;
    }
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/donation`, { ...data, phone });
      if (res.status === 200 || res.status === 201) {
        toast.success('Donation pay successfully!');
        router.push('/')
      }
    } catch (err) {
      toast.error('Something went wrong!!!');
      console.error(err);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const buttonStyle = {
    width: '45px',
    height: '50px',
    fontSize: '12px',
    padding: '0px',
    backgroundImage: 'linear-gradient(to right, #DC2626, #16A34A)',
    color: 'white',
    borderRadius: '5px',
    textTransform: 'none',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #B91C1C, #15803D)',
    }
  }

  return (
    <>
      <div className="relative h-80 md:h-96 lg:h-[700px] bg-gray-800 overflow-hidden">
        <Image
          src={bannerImage}
          alt="Blog Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
        <div className="absolute z-50 inset-0 flex flex-col justify-center items-center shadow p-5">
          <Container>
            <Box width="650px" margin="40px auto" bgcolor='white' padding='30px 20px' borderRadius='5px' >
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <BNPForm onSubmit={async (values) => {

                if (isLastStep) {
                  await handleSubmit(values);
                } else {
                  handleNext();
                }
              }}>
                {activeStep === 0 && (
                  <>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <BNPInput name="name" label="Name" size="medium" fullWidth />
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <PhoneInput
                            defaultCountry="bd"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            name='phone' />
                          <Button
                            sx={buttonStyle}
                            variant="contained"
                            onClick={handleVerifyPhone}
                          >
                            Verify
                          </Button>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <BNPInput name="email" label="Email" size="medium" fullWidth />
                      </Grid>
                      <Grid item xs={12}>
                        <BNPInput name="amount" label="Amount" size="medium" fullWidth />
                      </Grid>

                    </Grid>
                    <Box marginTop="10px">
                      <div className="flex items-center">
                        <Checkbox defaultChecked />
                        <Typography>
                          I certify that above provided information is correct.
                        </Typography>
                      </div>
                      <div className="flex items-center">
                        <Checkbox defaultChecked />
                        <Typography>
                          I do hereby declare that the contributions are from my personal fund and also I agree to all policy of BNP.
                        </Typography>
                      </div>
                      {/* <Button
                    sx={{ width: '150px', borderRadius: '5px', height: '50px', marginTop: '10px' }}
                    type="submit"
                  >
                    সাবমিট করুন
                  </Button> */}
                    </Box>
                  </>
                )}
                {activeStep === 1 && (
                  <Box marginTop='50px'>
                    <Typography marginBottom='20px' variant='h6'>Select Payment Method </Typography>
                    <Box marginTop='20px' display='flex' justifyContent='space-between' alignItems='center'>
                      <div className='paymentWrap'>
                        <Image src={bkash} alt='payment' width={300} height={300} />
                      </div>
                      <div className='paymentWrap'>
                        <Image src={nagad} alt='payment' width={300} height={300} />
                      </div>
                    </Box>
                    <Box marginTop='20px' display='flex' justifyContent='space-between' alignItems='center'>
                      <div className='paymentWrap'>
                        <Image src={rocket} alt='payment' width={300} height={300} />
                      </div>
                      <div className='paymentWrap'>
                        <Image src={visa} alt='payment' width={300} height={300} />
                      </div>
                    </Box>
                  </Box>
                )}

                <Box display="flex" justifyContent="space-between" mt={3}>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>

                  <Button type="submit">
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </Box>

              </BNPForm>
            </Box>
          </Container>

        </div>
      </div>

    </>
  );
};

export default DonationPage;
