"use client";

import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import ProfileEditModal from "@/components/ProfileEditModal.jsx";
import { useEffect, useState } from "react";
import { getMessages } from "../../utils/api-chat.js";

export default function ChatPage() {

    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");
    const [showProfileModal, setShowProfileModal] = useState(false);

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
                <div className="row">
                    <div className="row">
                        <button className="btn btn-primary" onClick={() => setShowProfileModal(true)}>Editar perfil</button>
                        {
                            showProfileModal && (
                                <ProfileEditModal username={username} onClose={() => setShowProfileModal(false)}
                                onProfileUpdated={fetchMessages}/>
                            )
                        }
                    </div>
                </div>
                <MessageList messages={messages}/>
                <div className="mt-3">
                    <MessageForm onMessageSent={fetchMessages}/>
                </div>
            </div>
            
        </>
    )    
};
