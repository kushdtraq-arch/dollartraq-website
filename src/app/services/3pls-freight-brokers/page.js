
import Main from '@/components/layout/Main';

import  PLPage from '@/sections/PLPage';

export default function Page() {
    return (
        <>
            <Main
                page="PLpage"
                active_page="PLpage"
            >
                <PLPage />
            </Main>
        </>
    );
}