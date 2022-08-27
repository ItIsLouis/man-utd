import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="fixed flex w-full h-16 items-center bg-[#DA291C]">
            <figure className="relative h-full w-20 hover:bg-white">
            <Image className="top-5 left-5" src="/logo.png" objectFit="contain" width={54} height={54} />
            </figure>
            <button className="h-full px-5 text-white font-semibold hover:bg-white hover:text-[#DA291C] duration-500">News</button>
        </nav>
    )
}

export default Navbar;