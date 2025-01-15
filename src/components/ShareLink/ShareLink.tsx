'use client'

import { Share } from '@mui/icons-material';
import { useState } from 'react';
import ShareModal from './ShareModal';

type ShareProps = {
    shareUrl: string, title: string; hashtag: string,
}
const ShareLink = ({ shareUrl, title, hashtag }: ShareProps) => {
    const [open, setOpen] = useState(false);
    // const fullShareUrl = `${process.env.NEXT_PUBLIC_BASE_LOCAL_URL}${shareUrl}`;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="flex-col md:flex-row gap-5 lg:gap-0 flex">
                <div className="flex items-center space-x-3">
                    <div className="flex gap-5 mt-5">
                        <span onClick={handleOpen} className='cursor-pointer'><Share /> <b>Share</b></span>
                    </div>
                </div>
            </div>

            {open && <ShareModal title={title} shareUrl={shareUrl} hashtag={hashtag} close={handleClose} />}
        </>
    );
};

export default ShareLink;

