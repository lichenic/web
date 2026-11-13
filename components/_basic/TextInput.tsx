import {InputEventHandler} from "preact";

interface InputProps {
    disabled?: boolean;
    onInput?: InputEventHandler<HTMLInputElement>;
    type?: "text"|"password"|"search"|"url";

    placeholder?: string;
    value?: string;

    shape?: "fit"|"square"|"pill";
    size?: number;

    min?: number;
    max?: number;
}

function makeClasses(disabled: boolean,shape: string) {
    const styles = ["transition-all","duration-200","border-1","p-3"]

    if (disabled) {
        styles.push("bg-disabled-gray","border-border/50","hover:cursor-not-allowed","opacity-80","pointer-events-none")
    } else {
        styles.push("bg-surface","border-border","hover:border-border-hover","hover:cursor-")
    }

    switch (shape) {
        case "pill": {
            styles.push("rounded-full")
            break;
        }
        case "square": {
            styles.push("aspect-square")
            break;
        }
    }
    
    return styles.join(" ")
}

export default function Input({
    disabled = false,
    onInput,
    type = "text",
    placeholder,
    value,
    shape = "fit",
    size = 20,
    min = 0,
    max = 99999
}: InputProps) {
    return (
        <input
            disabled={disabled} onInput={onInput} type={type} value={value} placeholder={placeholder} size={size} minLength={min} maxLength={max}
            class={makeClasses(disabled,shape)}
        />
    )
}