/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://chat-backend-clase-produccion.vercel.app/api/chat/"
        // API_URL: "http://localhost:8000/api/chat/" // Use this for local development
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "chat-backend-clase-produccion.vercel.app",
                pathname: "/media/profile_pictures/**"
            }
        ]
    }
};

export default nextConfig;
