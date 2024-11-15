"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LobbyChat() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    }
  }
  return (
    <>
      <h1 className="text-center">Lobby Chat</h1>
      <div className="container my-auto">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Ingrese nombre de usuario" required />
              </div>
              <button className="btn btn-primary w-100">Enviar</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
