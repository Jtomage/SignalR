import { useEffect, useState } from 'react';
import * as signalR from "@microsoft/signalr"
import type { messageModel } from '../../models/messageModel';


export const useChatHook = () => {
    const [messages, setMessages] = useState<messageModel[]>([])
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null)

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7284/chatHub",
                {
                    skipNegotiation: true,
                    transport: signalR.HttpTransportType.WebSockets
                }
            )
            .configureLogging(signalR.LogLevel.Information)
            .build();
            
        newConnection.on("messageReceived", (username: string, msg: string ) => {
            const newMsg: messageModel = {
                userName: username,
                message: msg
            };

            setMessages(prev => {
                if (prev.length > 50)
                    prev.shift()
                return [...prev, newMsg]
            })
        });

        newConnection.start().then(() => {
            setConnection(newConnection);
        })
        .catch((err) => console.error("SignalR Error: ", err))

        return () => {
            newConnection.off("messageReceived")
            newConnection.stop();
        }
    }, [])
   

    const sendMsg = (userName: string, message: string) => {
        try {
            if (connection )
                connection.invoke("newMessage", userName, message);
        }
        catch (err) {
            console.error("Invocation failed", err)
        }
    }

    return { messages, sendMsg }
}