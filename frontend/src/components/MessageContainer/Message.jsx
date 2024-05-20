import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime'
import useConversation from '../../zustand/useConversation'

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const formMe = message.senderId === authUser._id
  const formatTime = extractTime(message.createdAt)
  const chatClassName = formMe ? 'chat-end' : 'chat-start'
  const profilePic = formMe
    ? authUser.profilePic
    : selectedConversation.profilePic
  const bubbleBgColor = formMe ? 'bg-orange-600' : ''
  const shakeClass = message.shouldshake ? 'shake' : ''

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className="chat-footer text-xs flex gap-1 items-center text-gray-200">
        {formatTime}
      </div>
    </div>
  )
}

export default Message
