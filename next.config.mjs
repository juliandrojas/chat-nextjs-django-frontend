/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://chat-backend-clase-produccion.vercel.app/api/chat/"
        //API_URL: "http://127.0.0.1:8000/api/chat/" // Use this for local development
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                //hostname: "127.0.0.1",
                hostname: "chat-backend-clase-produccion.VERCEL",
                pathname: "/media/profile_pictures/**"
            }
        ]
    }
};

export default nextConfig;
