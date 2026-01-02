
import Main from '@/components/layout/Main';

import FeaturePage from '@/sections/FeaturePage';

export default function Page() {
    return (
        <>
            <Main
                page="features"
                active_page="features"
            >
                <FeaturePage />
            </Main>
        </>
    );
}