
import Main from '@/components/layout/Main';

import VideosAndWebinarsPage from '@/sections/VideosAndWebinarsPage';

export default function Page() {
    return (
        <>
            <Main
                page="videos-webinars"
                active_page="videos-webinars"
            >
               <VideosAndWebinarsPage/>
            </Main>
        </>
    );
}
