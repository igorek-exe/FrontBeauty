import React from 'react';
import { SvgIcon } from '@/components';
import type { LogoProps } from '@/components/UI/Logo/index.model.ts';

export const Logo: React.FC<LogoProps> = ({ icon }) => {
    return <SvgIcon Icon={icon} />;
};
