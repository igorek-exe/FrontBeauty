import React from 'react';
import Upload from '@/assets/icons/Upload.svg?react';
import Edit from '@/assets/icons/Edit.svg?react';
import { SvgIcon, Button, Input } from '@/components';
import styles from './index.module.scss';
import { ImageUploaderProps } from '../model/imageUploaderTypes';

export const ImageUploader: React.FC<ImageUploaderProps> = ({
    preview,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    onTriggerUpload,
    onRemoveImage,
    inputRef,
    onImageUpload,
}) => (
    <div
        className={styles.wrapper}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={!preview ? onTriggerUpload : undefined}
    >
        {preview ? (
            <>
                <img src={preview} alt="Preview" className={styles.thumbnail} />
                {isHovered && (
                    <>
                        <Button
                            onClick={onTriggerUpload}
                            type="button"
                            classNames={{ buttonClass: 'iconButton' }}
                        >
                            <SvgIcon Icon={Edit} className="editUpload" />
                        </Button>
                        <Button
                            onClick={onRemoveImage}
                            type="button"
                            classNames={{ buttonClass: 'editButtonUploader' }}
                        >
                            редактировать
                        </Button>
                    </>
                )}
            </>
        ) : (
            <div className={styles.uploadArea}>
                <SvgIcon Icon={Upload} />
                {isHovered && <div className={styles.tooltip}>загрузите файл</div>}
            </div>
        )}
        <Input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            ref={inputRef}
            style={{ display: 'none' }}
        />
    </div>
);
