import { useState } from "react";

const WhatsAppBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // International format without '+' or spaces (e.g., 254712345678)
  const phoneNumber = "254114128103";

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setMessage("");
    setIsOpen(false);
  };

  return (
    // Increased right offset (right-10 on mobile, right-16 on larger screens)
    <div className="fixed bottom-8 right-10 md:right-16 z-50 flex flex-col items-end">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-3 w-72 overflow-hidden rounded-xl bg-white shadow-2xl border border-gray-200 transition-all duration-200">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
              <h4 className="text-sm font-semibold">
                Chat with us on WhatsApp
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white text-base transition-colors"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Form / Body */}
          <form
            onSubmit={handleSendMessage}
            className="flex flex-col gap-2.5 p-3 bg-white"
          >
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
              // Explicit text color, background, and placeholder styling for visibility
              className="w-full resize-none rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[#25D366] py-2 text-sm font-bold text-white transition-colors hover:bg-[#1ebc57] active:scale-[0.98]"
            >
              Start Chat
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current">
          <path d="M16 2a13 13 0 0 0-11 20L3 29l7-2a13 13 0 1 0 6-25zm0 24a11 11 0 0 1-5.5-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A11 11 0 1 1 16 26zm6-8c-.3-.2-1.9-1-2.2-1.1s-.5-.2-.7.2-.8 1.1-1 1.3-.4.2-.7 0a9 9 0 0 1-2.6-1.6 10 10 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.7l.5-.6.3-.5a.4.4 0 0 0 0-.4c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.8 6.4 6.4 0 0 0 1.3 3.4A14.6 14.6 0 0 0 15 21a8.4 8.4 0 0 0 2.8.5h.7a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppBubble;
