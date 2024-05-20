import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../Skeleton/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
		}, 0)
	}, [messages])
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages.length > 0 && messages.map((message) => (
				<div key={message._id} ref={lastMessageRef}>
					<Message message={message} />
				</div>
			))
			}

		{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
		{!loading && messages.length === 0 && (
			<div className="flex items-center justify-center h-screen">
			<div className="text-center">
				<p className="text-gray-700 bg-[#ffe4c4]">Send a message to start the conversation</p>
			</div>
		</div>
			// <p className='text-center'>Send a message to start the conversation</p>
		)}
		</div>
	);
};
export default Messages;