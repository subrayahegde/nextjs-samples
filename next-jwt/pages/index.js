import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      Home
      <br />
      <ol>
        <li>
          <Link href={"/jwt-home"}>JWT Home</Link>
        </li>
        <li>
          <Link href={"/jwt-safehouse"}>JWT Safe house</Link>
        </li>
      </ol>
    </div>
  );
}
