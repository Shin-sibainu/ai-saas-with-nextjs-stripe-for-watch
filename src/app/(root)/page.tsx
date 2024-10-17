//https://www.youtube.com/watch?v=Ahwoks_dawU&t=14564s

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Home</p>

      {/* handshake error?  */}
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
