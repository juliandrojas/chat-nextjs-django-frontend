export default function MessageList({ messages }) {
  return (
    <>{
        messages?.map((message) => (
            <div key={message.id}>
              <span><b>{message.author.name}: </b>{message.content}</span>
            </div>
        ))
      }
    </>
  )
}
