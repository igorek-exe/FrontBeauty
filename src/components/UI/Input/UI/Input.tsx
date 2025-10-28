import React, { forwardRef } from 'react';
import { cn } from '@/utils/UI/cn.ts';
import styles from './index.module.scss';
import type { InputProps } from '@/components/UI/Input/index.model.ts';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, name, value, placeholder, onChange, className = '', ...rest }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(styles, 'input', className)}
                type={type}
                name={name}
                value={type !== 'file' ? value : undefined}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
            />
        );
    }
);

Input.displayName = 'Input';
