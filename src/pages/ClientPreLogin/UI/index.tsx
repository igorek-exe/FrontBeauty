import { AppLayout, Main } from '@/layouts';
import { ClientPromoSection } from '@/components/client';

const ClientPreLogin = () => {
    return (
        <AppLayout>
            <Main>
                <div className="bg-white">
                    <div className="container">
                        <ClientPromoSection />
                    </div>
                </div>
            </Main>
        </AppLayout>
    );
};

export { ClientPreLogin };
