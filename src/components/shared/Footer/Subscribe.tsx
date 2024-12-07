'use client'

import { useLanguage } from "@/provider/LanguageProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Subscribe = () => {
    const { language } = useLanguage();
    const placeholder = language === 'ENG' ? 'Enter your email' : 'আপনার ইমেইল লিখুন';
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/subscribe`, data);
            toast.success('Subscribe successfully!', {
                id: 'success-toast',
                duration: 1000,
            });
            console.log(response);
            reset();
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        }
    };

    return (
        <div className="bg-red-600 md:p-5 text-center rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4 flex justify-center">
                    <input
                        type="email"
                        placeholder={placeholder}
                        className="p-2 md:p-3 rounded-l-md md:w-2/3 focus:outline-none text-black"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />

                    <button
                        type="submit"
                        className="bg-white text-red-600 font-semibold px-4 py-3 rounded-r-md"
                    >
                        {language === 'ENG' ? 'Subscribe' : 'সাবস্ক্রাইব'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Subscribe;
