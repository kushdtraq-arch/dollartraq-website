
import Main from '@/components/layout/Main';

import ManufacturePage from '@/sections/ManufacturePage';

export default function Page() {
    return (
        <>
            <Main
                page="manufacture"
                active_page="manufacture"
            >
                <ManufacturePage/>
            </Main>
        </>
    );
}
