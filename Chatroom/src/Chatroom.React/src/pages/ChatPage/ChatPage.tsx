import { useState, type ChangeEvent, type FC } from "react";
import { ChatBox, SendMessageBar } from "../../components";
import { Input, makeResetStyles, type InputOnChangeData } from "@fluentui/react-components";
import { useChatHook } from "./ChatHook";


const useResetStyles = makeResetStyles({
    display: "flex",
    flexDirection: "column",
    width: "100%"
})

export const ChatPage: FC = () => {
    const [username, setUsername] = useState<string>("test user")

    const {messages, sendMsg} = useChatHook();

    const handleOnSubmit = (message: string) => {
        sendMsg(username, message);
    }

    const handleOnUserName = (_ev: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        setUsername(data.value)
    }

    //styles
    const resetStyles = useResetStyles();

    return (
        <div className={resetStyles}>
            <div>
                <Input value={username} onChange={handleOnUserName}/>
            </div>
            <ChatBox messages={messages} />
            <SendMessageBar onSubmit={handleOnSubmit} />
        </div>
    )
}