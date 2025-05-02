import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId]);

    console.log("ChatRoom component rendered");

    return <h1>Welcome to the {roomId} room!</h1>;
}

export default function Playground() {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);
    console.log("Playground component rendered");

    return (
        <>
            <label>
                Choose the chat room:{" "}
                <select
                    value={roomId}
                    onChange={(e) => {
                        setRoomId(e.target.value);
                    }}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>toggle</button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
        </>
    );
}
