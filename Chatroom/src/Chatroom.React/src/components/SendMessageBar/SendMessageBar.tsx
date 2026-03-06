import { Label, Input, Button, shorthands, makeStyles } from "@fluentui/react-components";
import { useRef, type FC, useId } from "react";

export interface SendMessageBarProps {
    onSubmit: (message: string) => void;
}

const useStyles = makeStyles({
  inputWrapper: {
    display: 'flex',
    ...shorthands.gap('8px'),  // Space between Label and Input
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  label: {
    whiteSpace: 'nowrap'
  },
  input: {
    flexGrow: 1,
    minWidth: "150px"
  }
});

export const SendMessageBar: FC<SendMessageBarProps> = ({onSubmit}) => {
    //keep it uncontrolled
    const inputRef = useRef<HTMLInputElement>(null);

    const styles = useStyles();
    const inputId = useId()

    const handleOnClick = () => {
        if (inputRef.current) {
            const inputVal = inputRef.current.value;
            if (inputVal.trim() !== ""){
                onSubmit(inputVal);
                inputRef.current.value = ""
            }
        }

    }

    const onKeyDown = (ev: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (ev.key === 'Enter') {
        ev.preventDefault(); // Prevent default form submission if applicable
        handleOnClick()
    }
    };

    return (
        <div className={styles.inputWrapper}>
            <Label className={styles.label} htmlFor={inputId}>
                Message: 
            </Label>
            <Input 
                id={inputId} type="text" className={styles.input}
                ref={inputRef} onKeyDown={onKeyDown} />
            <Button onClick={handleOnClick} >Send</Button>
        </div>
    )
}