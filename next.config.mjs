/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://chat-backend-clase-produccion.vercel.app"
        //API_URL: "http://localhost:8000/api/chat/" // Use this for local development
    }
};

export default nextConfig;
