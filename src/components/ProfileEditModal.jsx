"use client";

import "@/styles/ProfileEditModal.css";
import { updatedProfilePicture } from "@/utils/api-chat";
import { useState } from "react";

export default function ProfileEditModal({ username, onClose, onProfileUpdated }) {
    const [profilePicture, setProfilePicture] = useState(null);
    const handleFileChange = async (e) => { 
        setProfilePicture(e.target.files[0]);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("profile_picture", profilePicture);
        const response = await updatedProfilePicture(formData, username);
        if (response.status===200) {
            onProfileUpdated();
            onClose();
        } else {
            console.log("Error al actualizar perfil")
        }
    }
    return (
        <>
            <div className="modal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-title">
                            <h2>Editar perfil</h2>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="profile_picture">Foto de perfil</label>
                                <input type="file" name="profile_picture" onChange={handleFileChange} accept="image/*" required />
                                <button type="submit">Enviar</button>&nbsp;&nbsp;
                                <button onClick={onClose}>Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
