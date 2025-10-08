import React from 'react';
import { Button, MasterCard } from '@/components';
import { getMasterWord } from '@/utils/getWordForm';
import { useMasterList } from '@/components';
import styles from './index.module.scss';

const MasterList: React.FC = () => {
    const {
        filteredMasters,
        visibleMasters,
        hasClickedShowMore,
        currentPage,
        totalPages,
        handleShowMore,
        handlePageChange,
    } = useMasterList();

    return (
        <>
            <div className={styles.wrappCards}>
                {visibleMasters.map((master) => (
                    <MasterCard
                        key={master.id}
                        name={master.name}
                        specialty={master.specialty}
                        address={master.address}
                        rating={master.rating}
                        reviewsCount={master.reviewsCount}
                    />
                ))}
            </div>

            {!hasClickedShowMore && (
                <div className={styles.mastersMoreWrap}>
                    <Button classNames={{ buttonClass: 'mastersMoreBtn' }} onClick={handleShowMore}>
                        Показать еще мастеров по вашим параметрам
                    </Button>
                </div>
            )}

            {hasClickedShowMore && (
                <div className={styles.paginationWrap}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            classNames={{
                                buttonClass: `${currentPage === page ? 'activePageBtn' : 'pageBtn'}`,
                            }}
                        >
                            {page}
                        </Button>
                    ))}
                </div>
            )}

            {hasClickedShowMore && currentPage < totalPages && (
                <div className={styles.showMoreWrap}>
                    <Button
                        onClick={() => handlePageChange(currentPage + 1)}
                        classNames={{ buttonClass: 'showMoreMasters' }}
                    >
                        Показать ещё {filteredMasters.length - currentPage * 12}{' '}
                        {getMasterWord(filteredMasters.length - currentPage * 12)}
                    </Button>
                </div>
            )}
        </>
    );
};

export { MasterList };
