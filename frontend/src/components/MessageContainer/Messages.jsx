import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../Skeleton/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import { CiLock } from "react-icons/ci";

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
			<p className="text-gray-800 bg-[#ffe4c4] border border-[#ffe4c4] rounded-md flex mx-10 my-4 p-1 items-center justify-center text-[16px]">
				<span><CiLock className="mt-1 mr-1" /></span> Send a message to start the conversation
			</p>
			// <p className='text-center'>Send a message to start the conversation</p>
		)}
		</div>
	);
};
export default Messages;