import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ChatContext =
  createContext();

export function ChatProvider({
  children,
}) {

  const [currentVideo, setCurrentVideo] =
    useState(null);

  const [chatHistory, setChatHistory] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "chatHistory"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  useEffect(() => {

    localStorage.setItem(
      "chatHistory",
      JSON.stringify(chatHistory)
    );

  }, [chatHistory]);

  return (
    <ChatContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,

        chatHistory,
        setChatHistory,

        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  return useContext(ChatContext);
}