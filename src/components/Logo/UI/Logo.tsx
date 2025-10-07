import React from 'react';
import { SvgIcon } from '@/components';
import type { LogoProps } from '@/components';

export const Logo: React.FC<LogoProps> = ({ icon }) => {
    return <SvgIcon Icon={icon} />;
};
