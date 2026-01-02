
import Main from '@/components/layout/Main';

import  ServicePage from '@/sections/ServicePage';

export default function Page() {
    return (
        <>
            <Main
                page="service"
                active_page="service"
            >
                <ServicePage />
            </Main>
        </>
    );
}