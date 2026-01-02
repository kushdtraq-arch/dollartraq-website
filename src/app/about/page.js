
import Main from '@/components/layout/Main';
import AboutPage from '@/sections/AboutPage';

export default function Page() {
    return (
        <>
            <Main
                page="about_us"
                active_page="about"
            >
                <AboutPage/>
            </Main>
        </>
    );
}
