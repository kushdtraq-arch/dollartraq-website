
import Main from '@/components/layout/Main';

import  CarrerPage from '@/sections/CarrierPage';

export default function Page() {
    return (
        <>
            <Main
                page="carrer"
                active_page="carrer"
            >
                <CarrerPage />
            </Main>
        </>
    );
}