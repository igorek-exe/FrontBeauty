import React from 'react';
import { Button, Dropdown, SvgIcon } from '@/components';
import type { MastersToolbarProps } from '@/components';
import PlusIcon from '@/assets/icons/PlusIcon.svg?react';
import styles from './index.module.scss';

const MastersToolbar: React.FC<MastersToolbarProps> = ({ onSortSelect }) => {
    const handleSelect = (label: string) => {
        if (onSortSelect) {
            onSortSelect(label);
        } else {
            alert(`Вы выбрали: ${label}`);
        }
    };

    return (
        <div className={styles.wrapToolbar}>
            <div className={styles.wrapBtnsToolbar}>
                <Button classNames={{ buttonClass: 'listBtn' }}>
                    <span>Списком</span>
                </Button>
                <Button classNames={{ buttonClass: 'mapBtn' }}>
                    <span>На карте</span>
                </Button>
            </div>

            <Dropdown
                buttonLabel="Сортировать по"
                items={['По рейтингу', 'По отзывам', 'По новизне']}
                icon={<SvgIcon Icon={PlusIcon} className="toolbarIcon" />}
                classNames={{
                    button: 'sortBtn',
                    wrapper: 'toolbarWrapper',
                }}
                onItemClick={handleSelect}
            />
        </div>
    );
};

export { MastersToolbar };
