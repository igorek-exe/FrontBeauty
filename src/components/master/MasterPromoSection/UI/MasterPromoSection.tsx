import { Picture } from '@/components';
import React from 'react';
import { MasterClientIntro } from '@/components/master/MasterClientIntro';
import { masterIntroContent } from '@/components/master/MasterClientIntro/model/masterClientIntroContent.tsx';

const MasterPromoSection = () => {
    return (
        <section className="wrapperSection">
            <Picture src={'/images/masterPromo.png'} alt={'мастер'} />
            <MasterClientIntro {...masterIntroContent} />
        </section>
    );
};

export { MasterPromoSection };
