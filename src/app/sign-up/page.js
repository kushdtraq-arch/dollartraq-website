
import Main from '@/components/layout/Main';
import SignUpPage from '@/sections/SignUpPage';

export default function Page() {
    return (
        <>
            <Main
                page="sign_up"
                active_page="sign_up"
            >
                <SignUpPage />
            </Main>
        </>
    );
}