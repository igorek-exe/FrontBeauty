import React from 'react';
import { ImageUploader } from './UI/ImageUploader';
import { useImageUploader } from './model/useImageUploader';

const ImageUploaderContainer: React.FC = () => {
    const {
        preview,
        isHovered,
        inputRef,
        setIsHovered,
        handleImageUpload,
        handleRemoveImage,
        triggerUpload,
    } = useImageUploader();

    return (
        <ImageUploader
            preview={preview}
            isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTriggerUpload={triggerUpload}
            onRemoveImage={handleRemoveImage}
            inputRef={inputRef}
            onImageUpload={handleImageUpload}
        />
    );
};

export { ImageUploaderContainer };
