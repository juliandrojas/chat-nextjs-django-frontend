export default function MessageList({ messages }) {
  return (
    <>{
        messages?.map((message) => (
            <div key={message.id}>
              <div className="card">
                <div className="card-body">
                  <span><b>{message.author.name}: </b>{message.content}</span>
                </div>
              </div>
            </div>
        ))
      }
    </>
  )
}
