
import Main from '@/components/layout/Main';

import FreightForwardingPage  from '@/sections/FreightForwardingPage'

export default function Page() {
    return (
        <>
            <Main
                page="freight-forwarding"
                active_page="freight-forwarding"
            >
                <FreightForwardingPage/>
            </Main>
        </>
    );
}
