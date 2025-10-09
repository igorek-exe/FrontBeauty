import React from 'react';
import { Dropdown, IconSprite, Button, SvgIcon } from '@/components';
import { useSearchForm } from '../model/useSearchForm';
import { streets, specialties } from '@/data/masters';
import tagClose from '@/assets/icons/colored/tagClose.svg?react';
import styles from './index.module.scss';

const SearchForm: React.FC = () => {
    const {
        district,
        specialty,
        showClearButton,
        handleSearch,
        handleRemoveDistrict,
        handleRemoveSpecialty,
        handleClearAllFilters,
        setDistrictValue,
        setSpecialtyValue,
    } = useSearchForm();

    return (
        <form onSubmit={handleSearch}>
            <div className={styles.searchForm}>
                <Dropdown
                    buttonLabel="Выбрать район"
                    items={streets}
                    selectedLabel={district}
                    onItemClick={setDistrictValue}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName="GrayArrowDown"
                    iconClassName="searchFormIcon"
                />

                <Dropdown
                    buttonLabel="Выбрать услугу"
                    items={specialties}
                    selectedLabel={specialty}
                    onItemClick={setSpecialtyValue}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName="GrayArrowDown"
                    iconClassName="searchFormIcon"
                />

                <Dropdown
                    buttonLabel="Какой-то фильтр"
                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName="GrayArrowDown"
                    iconClassName="searchFormIcon"
                />

                <Dropdown
                    buttonLabel="Выбрать дату"
                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                    classNames={{
                        wrapper: 'searchWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName="GrayArrowDown"
                    iconClassName="searchFormIcon"
                />

                <Dropdown
                    buttonLabel="Цена"
                    items={['Пункт 1', 'Пункт 2', 'Пункт 3']}
                    classNames={{
                        wrapper: 'lastItemWrap',
                        button: 'searchPanelBtn',
                    }}
                    iconName="GrayArrowDown"
                    iconClassName="searchFormIcon"
                />

                <Button type="submit" classNames={{ buttonClass: 'searchBtn' }}>
                    <span>Найти</span>
                    <IconSprite name="Magnifier" classNames={{ iconClass: 'magnifier' }} />
                </Button>
            </div>

            <div className={styles.selectedFilters}>
                {district && (
                    <Button type="button" classNames={{ buttonClass: 'filterTag' }} onClick={handleRemoveDistrict}>
                        {district}
                        <SvgIcon Icon={tagClose} className="tagClose" />
                    </Button>
                )}

                {specialty && (
                    <Button type="button" classNames={{ buttonClass: 'filterTag' }} onClick={handleRemoveSpecialty}>
                        {specialty}
                        <SvgIcon Icon={tagClose} className="tagClose" />
                    </Button>
                )}

                {showClearButton && (
                    <Button
                        type="button"
                        classNames={{ buttonClass: 'clearFiltersBtn' }}
                        onClick={handleClearAllFilters}
                    >
                        Очистить фильтр
                    </Button>
                )}
            </div>
        </form>
    );
};

export { SearchForm };
