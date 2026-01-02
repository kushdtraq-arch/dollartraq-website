
import Main from '@/components/layout/Main';
import CaseStudiesPage from '@/sections/CaseStudiesPage';



export default function Page() {
    return (
        <>
            <Main
                page="case-studies"
                active_page="case-studies"
            >
                <CaseStudiesPage/>
            </Main>
        </>
    );
}
