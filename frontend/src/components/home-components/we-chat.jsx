import React, { useEffect, useState } from "react";
import Sd from "../community-components/sb";
import Chats from "./chats";
import { GoogleGenerativeAI } from "@google/generative-ai";

const WeChat = () => {
  const [gemini, setGemini] = useState(false);
  const [prompt, setPrompt] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const response = async () => {
    setLoading(true); // Set loading state to true
    const geminiInstance = new GoogleGenerativeAI(
      import.meta.env.VITE_APP_GEMINI_KEY
    );
    try {
      const userPrompt = prompt;
      const model = geminiInstance.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(userPrompt);
      const response = await result.response;
      const text = await response.text();
      const newMessage = { text, gemini: true };
      setMessages([...messages, newMessage]); // Add Gemini's response to messages
      setLoading(false); // Set loading state to false after response
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading state to false in case of error
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newPrompt = { text: prompt, gemini: false };
      setMessages([...messages, newPrompt]);
      setPrompt([...prompt, newPrompt]);
      response(prompt);
      setPrompt(""); // Clear the input field after sending the message
    }
  };

  return (
    <div className="flex h-full">
      <Sd />
      <div className="h-[calc(100vh-64px)] w-full bg-slate-100 flex overflow-y-auto">
        <div className="flex flex-col h-full w-full justify-end px-2 py-2">
          {!response.length ? (
            <div className="text-gray-500 font-bold text-xl">
              SafeCircle Assitant at your help!! Ask anything to your assistant.
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex h-full w-full overflow-y-auto flex-col-reverse">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 ${
                  message.gemini ? "text-green-500" : "text-blue-500"
                }`}
              >
                {message.text}
              </div>
            ))}
            {loading && <div className="text-gray-500">Loading...</div>}
          </div>
          <input
            onChange={(e) => handlePromptChange(e)}
            onKeyPress={(e) => handleKeyPress(e)}
            type="text"
            value={prompt}
            className="h-12 w-full outline-none focus:outline-none border-2 rounded-md border-black"
            placeholder={
              loading ? "Gemini is typing..." : "Type your message here..."
            }
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default WeChat;
