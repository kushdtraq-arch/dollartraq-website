const isDev = process.env.NODE_ENV === 'development';
/** @type {import('next').NextConfig} */

const nextConfig = {
    
    async rewrites(){

        if(isDev){
        
            return [
                {
                    source: '/api-laravel/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
                },
            ];
        }else{

            return [
                {
                    source: '/api/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
                },
            ];
        }
    
        return [];
    },
    // env: {
    //     NEXT_PUBLIC_API_URL: NEXT_PUBLIC_API_URL,
    // },
};

export default nextConfig;