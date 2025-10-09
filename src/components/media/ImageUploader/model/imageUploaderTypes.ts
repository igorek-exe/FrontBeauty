import React from 'react';

export interface ImageUploaderProps {
    preview: string | null;
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onTriggerUpload: (e: React.MouseEvent) => void;
    onRemoveImage: (e: React.MouseEvent) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
