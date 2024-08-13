/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    basePath: "/aksamedia_test_code",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
