import { ComponentChildren, TargetedMouseEvent} from "preact";

interface ButtonProps {
    children: ComponentChildren;

    disabled?: boolean;
    onClick?: (e:TargetedMouseEvent<HTMLButtonElement>) => void;
    type?: "button"|"submit"|"reset";

    shape?: "fit"|"square"|"pill";
    size?: "sm"|"md"|"lg"
}

// TODO:
// Prebuilt button types, button dimensions, sizes, etc

function makeClasses(disabled: boolean,shape: string,size:string) {
    // TODO: Dynamically make classes based on disabled etc.
    let styles = ["transition-all","duration-200"]

    switch (size) {
        case "sm": {
            styles.push("border-1","p-2");
            break;
        }
        case "md": {
            styles.push("border-1","p-3");
            break;
        }
        case "lg": {
            styles.push("border-2","p-4");
            break;
        }
    }

    if (disabled) {
        styles.push("bg-disabled-gray","border-border/50","hover:cursor-not-allowed","opacity-80","pointer-events-none")
    } else {
        styles.push("bg-surface","border-border","hover:bg-surface-hover","hover:border-border-hover","hover:cursor-pointer")
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

export default function Button({
    children,
    disabled = false,
    onClick,
    type = "button",
    shape = "fit",
    size = "md"
}: ButtonProps) {
    return (
        <button
            disabled={disabled} onClick={onClick} type={type}
            class={makeClasses(disabled,shape,size)}
        >
            {children}
        </button>
    )
}