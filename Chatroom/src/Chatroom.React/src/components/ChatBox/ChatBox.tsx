import { List, ListItem, Text, makeResetStyles, shorthands, tokens } from "@fluentui/react-components"
import type { FC } from "react"
import { type messageModel } from "../../models/messageModel"

export interface ChatBoxProps {
    messages: messageModel[]
}

const useChatBoxStyles = makeResetStyles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "75vh",
    width: "100%",
    ...shorthands.margin("10px")
})

const useTextStyle = makeResetStyles({
    color: tokens.colorNeutralForeground1,
});

export const ChatBox: FC<ChatBoxProps> = ({messages}) => {
    const chatBoxStyle = useChatBoxStyles();
    const textStyle = useTextStyle();

    return (
        <div className={chatBoxStyle} >
            <List >
                {messages.map((item, index) => (
                    <ListItem key={`${index}-${item}`}>
                        <Text 
                            style={{color: tokens.colorNeutralForeground2, fontWeight: tokens.fontWeightBold}} 
                        >
                            {item.userName}
                        </Text>
                        :&nbsp;
                        <Text className={textStyle}>{item.message}</Text>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}