import { Send } from "lucide-react";

export default function ChatInput({ input, setInput, handleSend }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="p-5 bg-transparent border-t border-white/5 mt-auto">
      <div className="flex gap-4 max-w-4xl mx-auto bg-[#0f172a]/80 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-lg shadow-black/20">
        <input
          type="text"
          placeholder="Ask something about the video..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent px-6 py-3 outline-none text-white placeholder:text-gray-500"
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 group"
        >
          <Send size={18} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}