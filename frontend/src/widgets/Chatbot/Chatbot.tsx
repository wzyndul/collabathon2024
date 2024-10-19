/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
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

export const Chatbot = () => {
	const [isChatActive, setIsChatActive] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (!isChatActive) {
		const fetchData = async () => {
		  try {
			await axios.post(`http://localhost:8080/api/v1/chatbot/start-chat`, {ids: [1, 2, 3]});
			setIsChatActive(true);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
		fetchData();
	};
	  }, [isChatActive]);

	
	const [messages, setMessages] = useState([
		{ text: "Hello! How can I assist you today?", isUser: false },
		{ text: "I need help with my order.", isUser: true },
		{ text: "Sure, could you please provide your order number?", isUser: false },
		{ text: "It's 12345.", isUser: true },
		{ text: "Thank you! Let me check the status for you.", isUser: false },
	]);

	const handleSendMessage = useCallback(async () => {
		if (inputValue.trim() !== "") {
		  try {
			setLoading(true);
	  
			const response = await axios.post(`http://localhost:8080/api/v1/chatbot/send-message`, { message: inputValue });
	  
			setMessages(prevMessages => [...prevMessages, { text: inputValue, isUser: true }]);
	  
			setMessages(prevMessages => [...prevMessages, { text: response.data, isUser: false }]);
	  
			setInputValue("");
		  } catch (error) {
			console.error('Error sending message:', error);
		  } finally {
			setLoading(false);
		  }
		}
	  }, [inputValue, setMessages, setInputValue]);
		
	return (
		<WidgetContainer width={"30rem"} height={"40rem"} bgColor="#fbfbfe">
			<Box css={chatbotHeaderStyle}>
				<Typography variant="h5" css={{ fontWeight: "bold" }}>
					Chatbot
				</Typography>
			</Box>
			<Box css={chatWindowStyle}>
				{messages.map((message, index) => (
					<Box key={index} css={dialogLineContainerStyle(message.isUser)}>
						<Paper elevation={0} css={dialogBubbleStyle(message.isUser)}>
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
					disabled={!isChatActive || isLoading}
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton disabled={!isChatActive || isLoading} css={iconButtonStyle} onClick={handleSendMessage} aria-label="send">
					<SendIcon />
				</IconButton>
			</Box>
		</WidgetContainer>
	);
};
