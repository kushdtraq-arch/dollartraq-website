
import Main from '@/components/layout/Main';

import NewsAndUpdates from '@/sections/NewsAndUpdates';

export default function Page() {
    return (
        <>
            <Main
                page="news-updates"
                active_page="news-updates"
            >
                <NewsAndUpdates/>
            </Main>
        </>
    );
}
