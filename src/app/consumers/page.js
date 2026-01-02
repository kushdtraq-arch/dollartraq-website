
import Main from '@/components/layout/Main';
import ConsumerPage from '@/sections/ConsumerPage'; 

export default function Page() {
    return (
        <>
            <Main
                page="consumer"
                active_page="consumer"
            >
                <ConsumerPage/>
            </Main>
        </>
    );
}
