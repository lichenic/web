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
      <br />
      <Button size="sm" disabled>
        Hello, world!
      </Button>
      <Button size="md">
        Hello, world!
      </Button>
      <Button size="lg">
        Hello, world!
      </Button>
    </div>
  );
});
