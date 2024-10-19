package com.stc.collabothon.controllers;

import com.stc.collabothon.services.ChatBotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/v1//chatbot")
public class ChatBotController {

    @Autowired
    private ChatBotService chatBotService;

    @PostMapping("/start-chat")
    public void startChat(@RequestBody Map<String, String> request) {
        String context = request.get("context");

        chatBotService.startChatSession(context);
    }

    @PostMapping("/send-message")
    public Map<String, String> sendMessage(@RequestBody Map<String, String> request) throws IOException {
        String message = request.get("message");
        String response = chatBotService.sendMessage(message);
        return Map.of("response", response);
    }
}