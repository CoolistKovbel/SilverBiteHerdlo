import Image from "next/image";
import Link from "next/link";
import MintCollection from "./component/mint-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      {/* main header */}

      <header className="w-full flex items-center justify-between">
        <h1 className="text-3xl bg-[#000] p-3">Etyvo</h1>

        <nav className="items-center flex gap-4  w-[80%]">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
          <Link href="/dog">---</Link>
        </nav>
      </header>

      <div>
        <h2>New MontyBreath Collection Out</h2>
        <p>Get the latest collection from the ETYVO set</p>
      </div>

      {/* Mint */}
      <MintCollection />
    </main>
  );
}
