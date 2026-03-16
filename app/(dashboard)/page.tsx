import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-end m-3 bg-zinc-50 font-sans dark:bg-black">
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}
