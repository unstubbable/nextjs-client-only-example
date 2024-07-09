import { ClientOnly } from "./client-only";
import { UserAgent } from "./user-agent";

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <ClientOnly>
        <UserAgent />
      </ClientOnly>
    </main>
  );
}
