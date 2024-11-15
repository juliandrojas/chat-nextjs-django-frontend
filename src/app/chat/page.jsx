"use client";

import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import { useEffect, useState } from "react";
import { getMessages } from "../../utils/api_chat.js";

export default function ChatPage() {

    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");

    async function fetchMessages() {
        try {
            const response = await getMessages();
            setMessages(response);
        } catch (error) {
            console.log("Error obteniendo mensajes", error)
        }
    }
    
    useEffect(() => {
      setUsername(localStorage.getItem("chatUsername"));
      fetchMessages();
      const interval = setInterval(fetchMessages, 1000);
      return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <h1 className="text-center">Chat de {username}</h1>
            <div className="container">
                <MessageList messages={messages}/>
                <div className="mt-3">
                    <MessageForm onMessageSent={fetchMessages}/>
                </div>
            </div>
            
        </>
    )    
};
