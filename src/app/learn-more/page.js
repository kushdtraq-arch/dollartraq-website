
import Main from '@/components/layout/Main';

import ServicePage from '@/sections/ServicePage'

export default function Page() {
    return (
        <>
            <Main
                page="learn-more"
                active_page="learn-more"
            >
                <ServicePage/>
            </Main>
        </>
    );
}
