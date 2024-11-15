"use client";

import { createMessage } from "@/utils/api_chat";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MessageForm({ onMessageSent }) {
    const [content, setContent] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const username = localStorage.getItem("chatUsername");
        if (!username) router.push("/");
        if (content.trim()) {
            try {
                await createMessage(username, content);
                setContent("");
                onMessageSent();
            } catch (error) {
                console.log("Error enviando mensaje", error);
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        name=""
                        id=""
                        placeholder="Escribe un mensaje"
                    ></textarea>
                </div>
                <div className="my-2">
                    <button className="btn btn-primary w-100">Enviar</button>
                </div>
            </form>
        </>
    );
}
