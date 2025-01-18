import Link from "next/link";
import { FiHash, FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Header */}
      <div className="w-1/5 p-8 border-r bg-white border-slate-200">
        <Link href="/"><h1 className="font-semibold italic text-2xl">burning🔥</h1></Link>
        <div className="my-8 space-y-4">
          <Link href="/trending" className="flex items-center px-4 py-2 rounded-full duration-200 hover:bg-slate-200"><FiHash className="mr-2" /><p>Trending</p></Link>
          <Link href="/trending" className="flex items-center px-4 py-2 rounded-full duration-200 hover:bg-slate-200"><FiSearch className="mr-2" /><p>Search</p></Link>
          <Link href="/trending" className="flex items-center px-4 py-2 rounded-full duration-200 hover:bg-slate-200"><FiHash className="mr-2" /><p></p></Link>
          <Link href="/trending" className="flex items-center px-4 py-2 rounded-full duration-200 hover:bg-slate-200"><FiHash className="mr-2" /><p>Trending</p></Link>
        </div>
      </div>

      {/* Main */}
      <div className="w-4/5 p-8">
        <h1 className="font-semibold italic text-2xl">#Trending</h1>
      </div>
    </div>
  )
}