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
    experimental: {
        turbopackFileSystemCacheForDev: false,
    },
    images: {
        remotePatterns: [
            {hostname: 'localhost'},
            {protocol: 'http', hostname: 'localhost', port: '8000', pathname: '/**'},
            {protocol: 'http', hostname: '127.0.0.1', port: '8000', pathname: '/**'},
            {protocol: 'https', hostname: 'apis.dollartraq.com', port: '', pathname: '/**'}
        ],
    }
    // env: {
    //     NEXT_PUBLIC_API_URL: NEXT_PUBLIC_API_URL,
    // },
};

export default nextConfig;