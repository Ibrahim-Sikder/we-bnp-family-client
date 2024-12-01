'use client'

import { Share } from '@mui/icons-material';
import { useState } from 'react';
import ShareModal from './ShareModal';



const ShareLink = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    const urlToShare = "https://facebook.com";
    const title = "Facebook!";

    return (
        <>
            <div className=" flex-col md:flex-row gap-5 lg:gap-0 flex ">
                <div className="flex items-center space-x-3">

                    <div className="flex gap-5 mt-5">
                        <span onClick={handleOpen} className='cursor-pointer'><Share /> <b>Share</b></span>
                    </div>
                </div>
            </div>

            {
                open && <ShareModal close={handleClose} />
            }
        </>
    );
};

export default ShareLink;
