"use client";
import { updatedProfilePicture } from "@/utils/api-chat";
import { useState } from "react";

export default function ProfileEditModal({ username, onClose, onProfileUpdated }) {
  const [profilePicture, setProfilePicture] = useState();
  const handleFileChange = async (e) => {
    setProfilePicture(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_picture", profilePicture);
    const response = await updatedProfilePicture(formData, username);
    if(response.status === 200) {
      console.log("Foto de perfil actualizada")
        onProfileUpdated();
        onClose();
    } else {
        console.log("Error al actualizar el perfil");
    }
  }

    return (
    <>
        <div>
            <h2>Editar perfil</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="profile_picture">Foto de perfil: </label>
                <input type="file" name="profile_picture" onChange={handleFileChange} accept="image/*" required />
                <button type="submit">Enviar</button>&nbsp;&nbsp;
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    </>
  )
}
