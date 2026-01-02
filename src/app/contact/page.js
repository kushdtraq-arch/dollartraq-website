
import Main from '@/components/layout/Main';
import ContactPage from '@/sections/ContactPage';

export default function Page() {
    return (
        <>
            <Main
                page="features"
                active_page="features"
            >
                <ContactPage />
            </Main>
        </>
    );
}