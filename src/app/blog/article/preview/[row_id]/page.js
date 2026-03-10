
import { redirect } from 'next/navigation';

import Main from "@/components/layout/Main";

import BlogArticleComponent from "@/sections/BlogArticleComponent";

import Api from "@/api/Api";

export default async function BlogArticlePreviewPage({ params }){

    const resolvedParams = await params;
    const row_id = resolvedParams.row_id;

    const res = await fetch(`${Api.api_url}cms/blogs/articles/preview`, {
        method: 'POST',
        body: JSON.stringify({ row_id: row_id }),
        next: { revalidate: 0 },
        headers: {
            'X-API-KEY': Api.api_key,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();

    if(data.status === false){
            
        redirect('/');
    }

    return (
  
        <Main
            page="blog"
            full_width={true}
            hide_header={true}
        >

            {(data && data.hasOwnProperty('data') && data.data != false) &&
            
                <BlogArticleComponent
                    slug={data.data.slug}
                    article={data.data}
                />
            }
        </Main>
    );
}