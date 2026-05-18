import { Send } from "lucide-react";

export default function ChatInput({
  input,
  setInput,
  handleSend,
}) {

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="border-t border-white/10 p-5 bg-[#081028]">

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Ask something about the video..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="flex-1 bg-[#020817] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 rounded-2xl flex items-center justify-center hover:opacity-90 transition-all"
        >
          <Send size={20} />
        </button>

      </div>

    </div>
  );
}