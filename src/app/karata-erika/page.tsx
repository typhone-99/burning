import Link from "next/link";
import { FiArrowLeft, FiHelpCircle, FiInstagram, FiLink } from "react-icons/fi";

export default function Home() {
    return (
        <div>
            <div className="w-1/2 mx-auto py-8">
                <div className="flex">
                    <Link href="/" className="rounded-full text-2xl p-2 hover:bg-slate-200 duration-200"><FiArrowLeft /></Link>
                    <Link href="/help" className="rounded-full text-2xl p-2 hover:bg-slate-200 duration-200 ml-auto"><FiHelpCircle /></Link>
                </div>
                <div className="mt-4 flex">
                    <div className="flex flex-col items-center">
                        <img src="/a/karata-erika.jpg" alt="Karata Erika" className="w-64 rounded-2xl" />
                    </div>
                    <div className="ml-8 flex flex-col">
                        <h1 className="text-4xl font-bold">唐田えりか</h1>
                            <div className="flex flex-wrap items-center mt-4 gap-2">
                                <Link href="/" className="flex items-center px-2 py-0.5 text-sm bg-slate-200 text-slate-600 rounded-md"><FiInstagram /><p className="font-mono ml-2">karata__erika</p></Link>
                                <Link href="/" className="flex items-center px-2 py-0.5 text-sm bg-slate-200 text-slate-600 rounded-md"><FiLink /><p className="font-mono ml-2">/karata__erika</p></Link>
                            </div>
                        <div className="rounded-lg mt-4 bg-white p-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}