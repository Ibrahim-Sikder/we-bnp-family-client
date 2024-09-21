import React from 'react';
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneVolume,
    FaTwitter,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactInfo = () => {
    return (
        <div>
            <h5 className="mb-10">
            আমাদের তথ্য পাঠানোর মাধ্যম আপনাকে সহজে এবং নিরাপদে গুরুত্বপূর্ণ তথ্য প্রেরণ ও গ্রহণ করতে সহায়তা করে, যা আমাদের সেবার মান উন্নত করতে এবং আপনাকে সর্বোত্তম অভিজ্ঞতা প্রদান করতে সাহায্য করে।
            </h5>
            <div className=" space-y-16">
                <div className="flex gap-5">
                    <div className="contactIconWrap">
                        <HiOutlineLocationMarker className="headerIcon mr-2" />
                    </div>
                    <div>
                        <h3 className="block text-3xl font">
                            Our head office address:
                        </h3>
                        <span>House-08, Road-07, Block-C, Banasree, Dhaka-1219</span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="contactIconWrap">
                        <FaEnvelope className="headerIcon mr-2" />
                    </div>
                    <div>
                        <h3 className="block text-3xl font">
                            Mail us for information
                        </h3>
                        <span>muissaltd@gmail.com</span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="contactIconWrap">
                        <FaPhoneVolume className="headerIcon -rotate-45 mr-2" />
                    </div>
                    <div>
                        <h3 className="block text-3xl font">Call for help:</h3>
                        <span>01403-852850</span>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h5 className="mb-10">
                    আমাদের সামাজিক যোগাযোগ মাধ্যমগুলোতে অনুসরণ করুন এবং আমাদের
                    সর্বশেষ খবর এবং আপডেটগুলি পান:
                </h5>
                <div className="flex space-x-5">
                    <div className="socialIconWrap">
                        <a
                            href="https://www.facebook.com/profile.php?id=61558510933789"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF size={35} className="text-[#2B8444]" />
                        </a>
                    </div>

                    <a
                        href="https://www.instagram.com/muissaltd?igsh=Nnp4M2d1M2pvMGtr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={35} className="text-[#2B8444]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/muissa-business-consulting-ltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={35} className="text-[#2B8444]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;