
import Main from '@/components/layout/Main';
import FAQsPage from '@/sections/FAQsPage';


export default function Page() {
    return (
        <>
            <Main
                page="faqs"
                active_page="faqs"
            >
               <FAQsPage/> 
            </Main>
        </>
    );
}
