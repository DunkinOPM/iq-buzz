
import { SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignIn>
        <SignOutButton />
      </SignIn>

      <UserButton />
    </>
  );
}

export default App;
