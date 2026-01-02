
import Main from '@/components/layout/Main';

import PlBrokeragePage from '@/sections/PlBrokeragePage'

export default function Page() {
    return (
        <>
            <Main
                page="3pl-brokerage"
                active_page="3pl-brokerage"
            >
                <PlBrokeragePage/>
            </Main>
        </>
    );
}
