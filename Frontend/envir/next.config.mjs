/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)', // Apply these headers to all routes
          headers: [
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin',
            },
            {
              key: 'Cross-Origin-Embedder-Policy',
              value: 'require-corp',
            },
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Adjust this to your frontend domain for more security
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  