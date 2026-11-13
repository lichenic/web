import { ComponentChildren, TargetedMouseEvent} from "preact";

interface ButtonProps {
    children: ComponentChildren;
    disabled?: boolean;
    onClick?: (e:TargetedMouseEvent<HTMLButtonElement>) => void;
}

// TODO:
// Prebuilt button types, button dimensions, sizes, etc

export default function Button({
    children,
    disabled = false,
    onClick
}: ButtonProps) {
    return (
        <button
            disabled={disabled} onClick={onClick}
            class="border-2 p-3
                bg-surface border-border
                hover:bg-surface-hover hover:border-border-hover hover:cursor-pointer
                transition-all duration-200
                "
        >
            {children}
        </button>
    )
}