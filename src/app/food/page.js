
import Main from '@/components/layout/Main';
import FoodPage from '@/sections/FoodPage'; 

export default function Page() {
    return (
        <>
            <Main
                page="food"
                active_page="food"
            >
                <FoodPage/>
            </Main>
        </>
    );
}
