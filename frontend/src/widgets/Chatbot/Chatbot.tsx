/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Box, Paper, Typography, IconButton, InputBase, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";
import {
	chatbotHeaderStyle,
	chatWindowStyle,
	dialogBubbleStyle,
	dialogLineContainerStyle,
	iconButtonStyle,
	userInputStyle,
} from "./Chatbot.style";
import axios from "axios";
import { useFetchAIResponse } from "../../hooks/useChat";

export const Chatbot = () => {

	const [inputValue, setInputValue] = useState("dzień dobry");

	// const { data, isLoading, isError } = useFetchAIResponse(inputValue);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	  try {
	// 		const response = await axios.post(`http://localhost:8080/api/v1/chatbot/start-chat`);
	// 		// Handle the response as needed
	// 		console.log(response.data);
	// 	  } catch (error) {
	// 		console.error('Error fetching data:', error);
	// 	  }
	// 	};
	  
	// 	fetchData();
	//   }, []);


	// mock
	const [messages, setMessages] = useState([
		{ text: "Hello! How can I assist you today?", isUser: false },
		{ text: "I need help with my order.", isUser: true },
		{ text: "Sure, could you please provide your order number?", isUser: false },
		{ text: "It's 12345.", isUser: true },
		{ text: "Thank you! Let me check the status for you.", isUser: false },
	]);


	// basic for now
	const handleSendMessage = () => {
		if (inputValue.trim() !== "") {
			setMessages([...messages, { text: inputValue, isUser: true }]);
			setInputValue("");
		}
	};

	return (
		<WidgetContainer width={"30rem"} height={"37rem"} bgColor="#fbfbfe">
			<Box css={chatbotHeaderStyle}>
				<Typography variant="h5" css={{ fontWeight: "bold" }}>
					Chatbot
				</Typography>
			</Box>
			<Box css={chatWindowStyle}>
				{messages.map((message, index) => (
					<Box key={index} css={dialogLineContainerStyle(message.isUser)}>
						<Paper elevation={2} css={dialogBubbleStyle(message.isUser)}>
							{message.text}
						</Paper>
					</Box>
				))}
			</Box>
			<Box css={userInputStyle}>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Type a message..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton css={iconButtonStyle} onClick={handleSendMessage} aria-label="send">
					<SendIcon />
				</IconButton>
			</Box>
		</WidgetContainer>
	);
};
