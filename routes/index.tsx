import Button from "#basic/Button.tsx";
import { define } from "../utils.ts";

export default define.page(function Home(ctx) {
  return (
    <div class="gap-4 p-8">
      <Button shape="pill">
        Hello, world!
      </Button>
      <Button shape="square">
        Hello, world!
      </Button>
      <Button>
        Hello, world!
      </Button>
    </div>
  );
});
