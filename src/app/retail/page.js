
import Main from '@/components/layout/Main';
import RetailPage from '@/sections/RetailPage'; 

export default function Page() {
    return (
        <>
            <Main
                page="retail"
                active_page="retail"
            >
                <RetailPage/>
            </Main>
        </>
    );
}
