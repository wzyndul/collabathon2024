/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Box, Paper, Typography, IconButton, InputBase, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";

export const Chatbot = () => {
	// mock
	const [messages, setMessages] = useState([
		{ text: "Hello! How can I assist you today?", isUser: false },
		{ text: "I need help with my order.", isUser: true },
		{ text: "Sure, could you please provide your order number?", isUser: false },
		{ text: "It's 12345.", isUser: true },
		{ text: "Thank you! Let me check the status for you.", isUser: false },
	]);
	const [inputValue, setInputValue] = useState("");

    // basic for now
	const handleSendMessage = () => {
		if (inputValue.trim() !== "") {
			setMessages([...messages, { text: inputValue, isUser: true }]);
			setInputValue("");
		}
	};

	return (
		<WidgetContainer width={"30rem"} height={"37rem"} bgColor="#fbfbfe">
			<Box sx={{ backgroundColor: "#3f51b5", color: "#fff", p: 2 }}>
				<Typography variant="h6">Chatbot</Typography>
			</Box>
			<Box
				sx={{
					flex: 1,
					p: 2,
					overflowY: "auto",
					height: "27rem",
					backgroundColor: "#f5f5f5",
					borderBottom: "1px solid #ddd",
				}}
			>
				{messages.map((message, index) => (
					<Box
						key={index}
						sx={{
							display: "flex",
							justifyContent: message.isUser ? "flex-end" : "flex-start",
							mb: 1,
						}}
					>
						<Paper
							elevation={2}
							sx={{
								p: 1,
								backgroundColor: message.isUser ? "#3f51b5" : "#e0e0e0",
								color: message.isUser ? "#fff" : "#000",
								maxWidth: "75%",
							}}
						>
							{message.text}
						</Paper>
					</Box>
				))}
			</Box>

			{/* Input Area */}
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					p: 1,
					backgroundColor: "#fbfbfe",
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Type a message..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton color="primary" sx={{ p: "10px" }} onClick={handleSendMessage} aria-label="send">
					<SendIcon />
				</IconButton>
			</Box>
		</WidgetContainer>
	);
};
