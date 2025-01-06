import { useLanguage } from "@/provider/LanguageProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Subscribe = () => {
  const { language } = useLanguage();
  const placeholder =
    language === "ENG" ? "Enter your email" : "আপনার ইমেইল লিখুন";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/subscribe`,
        data
      );
      toast.success("Subscribe successfully!", {
        id: "success-toast",
        duration: 1000,
      });

      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-red-600 p-5 md:p-10 text-center rounded-md shadow-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <div className="w-full md:w-2/3">
          <input
            type="email"
            placeholder={placeholder}
            className="w-full p-3 rounded-md border-none text-black focus:ring-2 focus:ring-white"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-white text-sm mt-2">
              {errors.email.message as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full md:w-auto bg-white text-red-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          {language === "ENG" ? "Subscribe" : "সাবস্ক্রাইব"}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
