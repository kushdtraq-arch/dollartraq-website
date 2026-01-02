
import Main from '@/components/layout/Main';
import PharmaPage from '@/sections/PharmaPage'; 

export default function Page() {
    return (
        <>
            <Main
                page="pharma"
                active_page="pharma"
            >
                <PharmaPage/>
            </Main>
        </>
    );
}
