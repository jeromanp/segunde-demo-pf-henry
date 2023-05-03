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
            className={`bg-brand-light-green  h-96 absolute -top-96 -right-0 rounded-lg overflow-hidden ${
                visible ? "block" : "hidden"
            }`}
        >
            <p className="p-1 text-brand-cream">Hueney Ruca</p>
            <Chat messages={messages} />
            <div className="w-full h-8 flex flex-nowrap">
                <input
                    type="text"
                    className="text-xs w-full h-full"
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKey}
                />
                <button className="bg-green-500" onClick={handleClick}>
                &rarr;
                </button>
            </div>
        </div>
    );
}

export default ChatDisplay;
