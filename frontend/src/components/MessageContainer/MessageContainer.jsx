import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { getRandomEmoji } from "../../utils/emojis";

const MessageContainer = () => {
	const {selectedConversation, setSelectedConversation} = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null)
	}, [setSelectedConversation])

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? 
			( <NoChatSelected /> ) :
			(
			<>
				{/* Header */}
				<div className='bg-green-700 px-4 py-2 mb-2 flex gap-2 online'>
					<img
						src={selectedConversation.profilePic}
						alt='user avatar'
						className="w-10 rounded-full"
					/>
					<span className='font-bold mt-2 text-white text-[17px]'>{selectedConversation.fullName}</span>
				</div>

				<Messages />
				<MessageInput />
			</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 <span className="text-green-800 capitalize">{authUser.fullName}</span> {getRandomEmoji()}</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};