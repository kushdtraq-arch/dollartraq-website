
import Main from '@/components/layout/Main';

import WorkPage from '@/sections/WorkPage';

export default function Page() {
    return (
        <>
            <Main
                page="work"
                active_page="work"
            >
                <WorkPage/>
            </Main>
        </>
    );
}
