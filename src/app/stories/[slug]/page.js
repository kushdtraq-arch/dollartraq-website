
import { redirect } from 'next/navigation';

import Main from '@/components/layout/Main';

import BlogArticleComponent from '@/sections/BlogArticleComponent';

import Api from '@/api/Api';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const res = await fetch(`${Api.api_url}cms/blogs/articles/load`, {
        method: 'POST',
        body: JSON.stringify({ slug }),
        headers: {
            'X-API-KEY': Api.api_key,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();

    if (data.status === false) return { title: 'Not Found' };

    return {
        title: data.data.meta_title,
        description: data.data.meta_description,
        keywords: data.data.meta_keywords,
    };
}

export default async function BlogArticlePage({ params }){

    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const res = await fetch(`${Api.api_url}cms/blogs/articles/load`, {
        method: 'POST',
        body: JSON.stringify({slug: slug}),
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
            page="blog_article"
            full_width={true}
            hide_header={true}
            active_page="resources"
        >

            <BlogArticleComponent
                slug={slug}
                article={data.data}
            />
        </Main>
    );
}