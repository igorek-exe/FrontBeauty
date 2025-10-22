import { AppLayout, Main } from '@/layouts';
import { MasterBenefits, MasterPromoSection } from '@/components';

const MasterPreLogin = () => {
    return (
        <AppLayout>
            <Main>
                <div className="bg-white">
                    <div className="container">
                        <MasterPromoSection />
                        <MasterBenefits />
                    </div>
                </div>
            </Main>
        </AppLayout>
    );
};

export { MasterPreLogin };
