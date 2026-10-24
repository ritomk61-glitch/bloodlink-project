import React, { useState } from "react";

const ChatBot = () => {

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi! I'm BloodLink Assistant. How can I help you?",
    },
  ]);

  const getBotReply = (message) => {

    const text = message.toLowerCase();

    if (
      text.includes("find blood") ||
      text.includes("find") ||
      text.includes("blood")
    ) {
      return "You can use the Find Blood page to search for available blood groups and nearby donors.";
    }

    if (text.includes("donor") || text.includes("donate")) {
      return "You can register as a donor from the Become Donor page and manage your availability.";
    }

    if (
      text.includes("who") &&
      text.includes("create") ||
      text.includes("developed")
    ) {
      return "BloodLink was developed by Ritom and his team to connect blood donors, patients, hospitals, and blood banks through one platform";
    }

    if (text.includes("tell me") || text.includes("this website")) {
      return "BloodLink connects blood donors, patients, hospitals, and blood banks in one smart platform. Find the right blood at the right time and help save lives when every second matters";
    }

    if (text.includes("who") &&
      text.includes("priya") ) {
      return "Priya is my owner's special person,buddy❤️😌";
    }

    if (text.includes("request") || text.includes("emergency")) {
      return "You can submit an emergency blood request from the Request Blood page.";
    }

    if (text.includes("bank") || text.includes("blood bank")) {
      return "You can visit the Blood Banks page to view available blood bank information.";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "Hello! How can I help you with BloodLink?";
    }

    if (text.includes("thank")) {
      return "You're welcome! Stay safe.";
    }

    return "I can help you with finding blood, requesting blood, becoming a donor, and blood bank information.";
  };

  const sendMessage = () => {

    if (!input.trim()) return;

    const userText = input.trim();

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: userText,
    };

    const botMessage = {
      id: Date.now() + 1,
      type: "bot",
      text: getBotReply(userText),
    };

    setMessages((oldMessages) => [
      ...oldMessages,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  const handleKeyDown = (event) => {

    if (event.key === "Enter") {
      sendMessage();
    }

  };

  return (
    <>

      {/* CHAT WINDOW */}

      {open && (

        <div
          className="fixed bottom-24 right-3 sm:right-5 z-50 w-[calc(100%-24px)] max-w-sm sm:w-96 overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-2xl"
        >

          {/* HEADER */}

          <div className="flex items-center justify-between bg-[#c5163f] px-4 sm:px-5 py-4 text-white">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                >

                  <path
                    d="M20 11.5C20 15.64 16.42 19 12 19C10.87 19 9.79 18.78 8.82 18.38L4 20L5.55 15.83C4.58 14.62 4 13.11 4 11.5C4 7.36 7.58 4 12 4C16.42 4 20 7.36 20 11.5Z"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                </svg>

              </div>

              <div>

                <p className="text-sm font-bold">
                  BloodLink Assistant
                </p>

                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-white/80">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                  Online

                </div>

              </div>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-2xl font-light hover:bg-white/10"
            >
              ×
            </button>

          </div>


          {/* MESSAGES */}

          <div className="h-72 sm:h-80 space-y-3 overflow-y-auto p-3 sm:p-4">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`flex ${message.type === "user"
                    ? "justify-end"
                    : "justify-start"
                  }`}
              >

                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-3 text-sm leading-5 warp-break-words ${message.type === "user"
                      ? "rounded-br-none bg-[#c5163f] text-white"
                      : "rounded-bl-none border border-stone-200 bg-white text-stone-700"
                    }`}
                >
                  {message.text}
                </div>

              </div>

            ))}

          </div>


          {/* INPUT */}

          <div className="border-t border-stone-200 bg-stone-50 p-2 sm:p-3">

            <div className="flex items-center gap-2 rounded-full border border-stone-300 bg-white p-1">

              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-w-0 flex-1 bg-transparent px-2 sm:px-3 py-2 text-sm outline-none placeholder:text-stone-400"
              />

              <button
                onClick={sendMessage}
                className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#c5163f] text-white transition hover:bg-[#ae1037]"
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >

                  <path
                    d="M21 3L10 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M21 3L14 21L10 14L3 10L21 3Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                </svg>

              </button>

            </div>

          </div>

        </div>

      )}


      {/* FLOATING CHAT BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-3 sm:bottom-6 sm:right-5 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#c5163f] text-white shadow-lg ring-8 ring-[#c5163f]/10 transition duration-200 hover:scale-105"
      >

        {open ? (

          <span className="text-3xl font-light">
            ×
          </span>

        ) : (

          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >

            <circle
              cx="12"
              cy="12"
              r="7.5"
              stroke="white"
              strokeWidth="1.7"
            />

            <circle
              cx="12"
              cy="12"
              r="2.5"
              stroke="white"
              strokeWidth="1.7"
            />

            <path
              d="M12 2V4"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M12 20V22"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M2 12H4"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M20 12H22"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

          </svg>

        )}

      </button>

    </>
  );
};

export default ChatBot;