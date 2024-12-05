import DonationModal from '@/components/DonationModal/DonationModal';
import { useLanguage } from '@/provider/LanguageProvider';
import React, { useState } from 'react';

const DonationButton = () => {
    const [open, setOpen] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);


    const buttonStyle = { width: '120px', height: '30px', borderRadius: '10px', color: 'white', background: '#216740', padding: '0px', }

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const { language } = useLanguage()
    return (
        <>
            <button onClick={handleModalOpen} className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-4 rounded inline-block font-semibold mt-5">
                {language === 'ENG' ? 'Donate' : 'সহযোগিতা'}
            </button>

            {

                modalOpen && (
                    <DonationModal onClose={handleModalClose} />
                )
            }
        </>
    );
};

export default DonationButton;