import React, { useState } from "react";
import Chat from "./Chat";
import messageParser from "textProcessor/messageParser";

function ChatDisplay({ visible }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            botGen: true,
            content: "Hola soy el bot de Hueney Ruca, como puedo ayudarlo?",
        },
    ]);
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        const response = messageParser(input);
        setMessages([
            ...messages,
            { botGen: false, content: input },
            { botGen: true, content: response },
        ]);
        setInput("");
    };
    const handleKey = (e) => {
        if (e.key === "Enter") {
            const response = messageParser(input);
            setMessages([
                ...messages,
                { botGen: false, content: input },
                { botGen: true, content: response },
            ]);
            setInput("");
        }
    };

    return (
        <div
            className={`bg-red-500 w-72 h-96 absolute -top-96 -right-0 px-4 pt-4 ${
                visible ? "block" : "hidden"
            }`}
        >
            <Chat messages={messages} />
            <div>
                <input
                    type="text"
                    className="mt-3"
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKey}
                />
                <button className="bg-green-500 " onClick={handleClick}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatDisplay;
