/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['https://kzmqe3pag4k6pplqcg2t.lite.vusercontent.net'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  export default nextConfig;
  