'use strict';

const Constants = {
    URL: {
        root: process.env.NEXT_PUBLIC_ROOT,
        api_url: process.env.NEXT_PUBLIC_API_URL,
        server_url: process.env.NEXT_PUBLIC_SERVER_URL,
    },
    API_KEY: process.env.NEXT_PUBLIC_API_KEY
}

module.exports = Constants;
