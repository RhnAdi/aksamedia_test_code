/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        loader: "aksamedia_test_code",
        path: "",
    },
    assetPrefix: "./",
    basePath: "/aksamedia_test_code",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
