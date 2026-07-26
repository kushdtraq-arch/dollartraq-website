import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface BlogPost {

    id: string;
    title: string;

    date: string;
    imageSrc: string;
    imageAlt?: string;

    href?: string;
}

export interface BlogSectionProps {
    title?: string;
    description?: string;

    posts: BlogPost[];
    className?: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const content = (
        <>
            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
                <Image
                    src={post.imageSrc}
                    alt={post.imageAlt ?? post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <div className="flex items-center gap-[8px] mt-[20px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#9CA3AF]" />
                <span className="text-[13.5px] text-[#6B7280]">{post.date}</span>
            </div>

            <h3 className="text-[19px] font-medium text-[#111827] leading-[1.35] mt-[10px]">
                {post.title}
            </h3>
        </>
    );

    const className = "group block";

    if (post.href) {
        return (
            <Link href={post.href} className={className}>
                {content}
            </Link>
        );
    }

    return <div className={className}>{content}</div>;
};

export const BlogSection: React.FC<BlogSectionProps> = ({
    title = "Insights Driving a Sustainable Future",
    description = "Explore ideas, innovations, and strategies shaping the future of energy, sustainability, and smarter environmental systems worldwide.",
    posts,
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#FAF9F5] pt-[50px] pb-[100px] px-[24px] ${className}`}>
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] mb-[56px]">
                    <h2 className="text-[36px] md:text-[42px] font-normal tracking-tight text-[#111827] leading-[1.2] max-w-[540px]">
                        {title}
                    </h2>

                    <p className="text-[14.5px] text-[#6B7280] leading-[1.6] max-w-[380px] text-left">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[32px] gap-y-[48px]">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;