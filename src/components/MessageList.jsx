import Image from "next/image";
export default function MessageList({ messages }) {
  return (
    <>{
        messages?.map((message) => (
            <div key={message.id} style={{ marginTop: 20 + "px", marginBottom: 20 + "px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              <Image
            src={
              message.author.profile_picture != null
                ? `https://chat-backend-clase-produccion.vercel.app/api/chat/${message.author.profile_picture}`
                : "/img/no-image-icon-11.png"
            }
            width={50}
            height={50}
            style={{ borderRadius: "100%", objectFit: "cover" }}
            quality={100}
            priority={true}
            unoptimized
            alt="Foto de perfil"
          />
              <div className="card">
                <div className="card-body">
                  <span style={{ marginLeft: 10 + "px"}}><b>{message.author.name}: </b>{message.content}</span>
                </div>
              </div>
            </div>
        ))
      }
    </>
  )
}
