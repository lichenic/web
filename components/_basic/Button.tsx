import { ComponentChildren, TargetedMouseEvent} from "preact";

interface ButtonProps {
    children: ComponentChildren;
    disabled?: boolean;
    onClick?: (e:TargetedMouseEvent<HTMLButtonElement>) => void;
    type?: "button"|"submit"|"reset";
    shape?: "fit"|"square"|"pill";
}

// TODO:
// Prebuilt button types, button dimensions, sizes, etc

function makeClasses({children,disabled,onClick,type,shape}: ButtonProps) {
    // TODO: Dynamically make classes based on disabled etc.
    let styles = "border-2 p-3 transition-all duration-200 "

    if (disabled) {
        styles += "bg-disabled-gray border-border/50 hover:cursor-not-allowed text-text/50 "
    } else {
        styles += "bg-surface border-border hover:bg-surface-hover hover:border-border-hover hover:cursor-pointer "
    }

    switch (shape) {
        case "pill": {
            styles += "rounded-full "
            break;
        }
        case "square": {
            styles += "aspect-square "
            break;
        }
    }
    
    return styles
}

export default function Button({
    children,
    disabled = false,
    onClick,
    type = "button",
    shape = "fit"
}: ButtonProps) {
    return (
        <button
            disabled={disabled} onClick={onClick} type={type}
            class={makeClasses({children,disabled,onClick,type,shape})}
        >
            {children}
        </button>
    )
}