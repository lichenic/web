import Button from "@/components/_basic/Button.tsx";
import { define } from "../utils.ts";

export default define.page(function Home(ctx) {
  return (
    <div>
      <Button>
        Hello, world!
      </Button>
    </div>
  );
});
