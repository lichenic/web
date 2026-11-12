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
            class="border-2 rounded-md border-primary p-4 bg-surface hover:bg-surface-hover hover:cursor-pointer"
        >
            {children}
        </button>
    )
}