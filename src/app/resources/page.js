
import Main from '@/components/layout/Main';
import BlogPage from '@/sections/BlogPage'; 

export default function Page() {
    return (
        <>
            <Main
                page="resources"
                active_page="resources"
            >
                <BlogPage/>
            </Main>
        </>
    );
}
