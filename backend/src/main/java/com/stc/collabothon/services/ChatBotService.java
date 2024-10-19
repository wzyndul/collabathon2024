package com.stc.collabothon.services;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import com.google.cloud.vertexai.api.Content;
import com.google.cloud.vertexai.api.Part;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class ChatBotService {

    private final String projectId = "collabothon2024-439013";
    private final String location = "europe-west3";
    private final String modelName = "gemini-1.5-pro";
    private ChatSession chatSession;

    public void startChatSession(String context) {
        try (VertexAI vertexAI = new VertexAI(projectId, location)) {
            GenerativeModel model = new GenerativeModel(modelName, vertexAI);
            chatSession = model.startChat();

            Content initialContext = Content.newBuilder()
                    .setRole("user")
                    .addParts(Part.newBuilder().setText(context).build())
                    .build();
            chatSession.setHistory(List.of(initialContext));
        }
    }

    public String sendMessage(String message) throws IOException {
        Content userMessage = Content.newBuilder()
                .setRole("user")
                .addParts(Part.newBuilder().setText(message).build())
                .build();

        GenerateContentResponse response = chatSession.sendMessage(userMessage);


        return ResponseHandler.getText(response);
    }

}