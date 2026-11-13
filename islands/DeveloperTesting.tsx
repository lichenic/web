import TextInput from "@/components/_basic/TextInput.tsx"
import { useSignal } from "@preact/signals"

export default function DeveloperTesting() {
    const sig = useSignal(false)

    return (
        <div class="gap-4 p-8">
            <TextInput placeholder="hi" max={200} size={200}/>
        </div>
    );
}