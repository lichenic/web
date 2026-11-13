import { ComponentChildren, TargetedMouseEvent} from "preact";

interface ButtonProps {
    children: ComponentChildren;
    disabled?: boolean;
    onClick?: (e:TargetedMouseEvent<HTMLButtonElement>) => void;
    type?: "button"|"submit"|"reset";
}

// TODO:
// Prebuilt button types, button dimensions, sizes, etc

function makeClasses({children,disabled,onClick,type}: ButtonProps) {
    // TODO: Dynamically make classes based on disabled etc.
    return "border-2 p-3 bg-surface border-border hover:bg-surface-hover hover:border-border-hover hover:cursor-pointer transition-all duration-200"
}

export default function Button({
    children,
    disabled = false,
    onClick,
    type = "button"
}: ButtonProps) {
    return (
        <button
            disabled={disabled} onClick={onClick} type={type}
            class={makeClasses({children,disabled,onClick,type})}
        >
            {children}
        </button>
    )
}