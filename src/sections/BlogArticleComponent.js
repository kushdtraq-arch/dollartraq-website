'use client'

import React, { Component } from 'react';

import Link from 'next/link';

import NextImage from 'next/image';

import dynamic from 'next/dynamic'

import { Calendar, Clock } from 'lucide-react';

const AnimateViewAppear = dynamic(
    () => import('@/components/animation/AnimateViewAppear'),
    { ssr: false }
)

import RenderHtml from '@/components/common/RenderHtml';

import TextLetterReveal from '@/components/animation/TextLetterReveal';

// import BlogCard from '../blocks/BlogCard';

// import Api from '@/api/Api';

class BlogArticleComponent extends Component { 

    constructor(props) {
        super();
        this.state = {

            categories: [
                {title: 'Artificial Intelligence', icon: 'blog-ai.webp'},
                {title: 'Custom CRM/ERP', icon: 'blog-custom-crm.webp'},
                {title: 'Custom Website Development', icon: 'blog-custom-website.webp'},
                {title: 'Digital Marketing', icon: 'blog-digital-marketing.webp'},
                {title: 'E-Commerce Solutions', icon: 'blog-e-commerce.webp'},
                {title: 'General Topics', icon: 'blog-general-topic.webp'},
                {title: 'Mobile Apps Development', icon: 'blog-mobile-app.webp'},
                {title: 'Security and Performance', icon: 'blog-performance.webp'}
            ],

            related_blogs: []
        }

        this.parentRef = new React.createRef();
    }

    componentDidMount = () => {

        // this.relatedArticles()
    }

    render () {

        return (

            <div>

                <div className='container mx-auto pt-9 mt-9 mb-9 pb-9'>
                    <div className='max-w-[70%] md:max-w-[70%] mx-auto'>

                        <div className='flex flex-col mb-2'>

                            <div className='flex items-center mt-5'>
                                <Calendar className='text-gray-500' />
                                <span className='text-xs md:text-md text-gray-700 ml-2'>{this.props.article.posted_on_formatted}</span>
                            </div>

                           <TextLetterReveal
                                auto={true}
                                className="text-4xl xl:text-5xl md:text-7xl text-gray-600 font-bold mt-9"
                                speed={2}
                                text={this.props.article.title}
                            />
                        </div>
                        <div className='mt-9 flex flex-col' ref={this.parentRef}>
                            
                            <AnimateViewAppear delay={100}>
                                <div>
                                    <div className='flex mt-3 mb-5'>
                                        <div className='flex'>
                                            <p className='text-sm xl:text-lg md:text-xl font-bold text-gray-700 break-words'>{this.props.article.short_description}</p>
                                        </div>
                                    </div>

                                    <div className='mt-9'>
                                        <NextImage src={this.props.article.image_url} layout="intrinsic" width={1000} height={800} quality={100} alt={this.props.article.title} unoptimized />
                                    </div>

                                    <div className='content-wrapper mt-9 pt-9'>

                                        <RenderHtml
                                            html={this.props.article.content}
                                        />

                                        {/* <RenderHtml
                                            tag="p"
                                            html={this.firstLetterCaps(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, '7xl', 12)}
                                        />*/}
                                    </div>
                                </div>
                            </AnimateViewAppear>
                        </div>
                    </div>
                </div>

                {/* <div className='container mx-auto mt-9 pt-9 mb-9 pb-9'>
                    <div className='grid grid-cols-12 md:gap-9'>

                        <div className='col-span-12 border-t border-gray-200 pt-9'>

                            <div className='flex mt-3 mb-9'>
                                <div className='h-1.5 w-6 md:w-12 bg-blue-500 shrink-0 mt-3'></div>
                                <div className='flex ml-3'>
                                    <h4 className='font-bold text-xl md:text-2xl text-blue-600'>Popular Articles</h4>
                                </div>
                            </div>

                            <div className='grid grid-cols-12 md:gap-9 md:gap-y-9'>

                                {this.state.related_blogs.map((_blog, index) => {

                                    return (

                                        <div key={`blog_${index}`} className='col-span-12 md:col-span-4'>

                                            <BlogCard
                                                blog={_blog}
                                            />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }

    firstLetterCaps = (text, size, width) => {

        return '';
        size = size || '3xl'
        width = width || '6'

        return text.charAt(0).replace(text.charAt(0), `<span class="text-${size} uppercase float-left w-${width} text-blue-500">${text.charAt(0)}</span>`) + text.slice(1);
    }

    relatedArticles = () => {

        var that = this;
        this.setState({loading: true})

        var formData = new FormData();
        formData.append('slug', this.props.slug);
        formData.append('per_page', 6);

        Api.post('handle/blogs/articles/related', formData, function(data){

            that.setState({loading: false})

            if(data.status){
            
                that.setState({
                    related_blogs: data.records
                });
            }else{

                // LayoutHelper.addErrorMessage(that, data.message);
            }
        });
    }
}

export default BlogArticleComponent;