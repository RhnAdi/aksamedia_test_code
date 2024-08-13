/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: "/aksamedia_test_code",
    assetPrefix: "/aksamedia_test_code/",
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    output: "export",
};

export default nextConfig;
