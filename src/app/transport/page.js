
import Main from '@/components/layout/Main';
import TransportPage from '@/sections/TransportPage'; 

export default function Page() {
    return (
        <>
            <Main
                page="transport"
                active_page="transport"
            >
                <TransportPage/>
            </Main>
        </>
    );
}
