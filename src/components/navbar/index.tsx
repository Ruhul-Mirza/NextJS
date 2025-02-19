import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex gap-10 mx-5 my-2.5 max-w-screen justify-center bg-gray-200 p-3 rounded-sm">
            <Link href="/about" className="text-md font-medium hover:underline">
                About
            </Link>
            <Link href="/contact" className="text-md font-medium hover:underline">
                Contact
            </Link>
            <Link href="/service" className="text-md font-medium hover:underline">
                Service
            </Link>
        </div>
    )
}