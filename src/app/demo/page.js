
import Main from '@/components/layout/Main';
import DemoPage from '@/sections/DemoPage';



export default function Page() {
    return (
        <>
            <Main
                page="demo"
                active_page="demo"
            >
               <DemoPage/>
            </Main>
        </>
    );
}
