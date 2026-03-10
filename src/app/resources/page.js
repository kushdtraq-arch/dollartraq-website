
import Main from '@/components/layout/Main';
import BlogPage from '@/sections/BlogPage'; 

import Api from '@/api/Api';

export default async function Page(){

    const data = await getData();

    return (
        <>
            <Main
                page="resources"
                active_page="resources"
            >
                <BlogPage
                    articles={data.records}
                />
            </Main>
        </>
    );
}

async function getData(){

    try {

        const res = await fetch(`${Api.api_url}cms/blog/articles`, {
            method: 'POST',
            body: JSON.stringify({}),
            next: { revalidate: 60 },
            headers: {
                'X-API-KEY': Api.api_key,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if(!res.ok){

            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        return res.json();

    }catch (error){

        console.error(error);
        return { records: [] };
    }
}