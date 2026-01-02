import Main from '@/components/layout/Main';

import CareersPage from '@/sections/CareersPage';

export default function Page() {
    return (
        <>
            <Main
                page="careers"
                active_page="careers"
            >
                <CareersPage/>
            </Main>
        </>
    );
}