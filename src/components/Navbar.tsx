import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="fixed flex w-full h-16 items-center bg-[#DA291C]">
            <div className=" p-5 hover:bg-white">
                <figure className="relative h-full w-16">
                    <Image className="top-5 left-5" src="/logo.png" objectFit="contain" width={54} height={54} />
                </figure>
            </div>
            <button className="h-full px-5 text-white font-semibold hover:bg-white hover:text-[#DA291C] duration-500">NEWS</button>
            <button className="h-full px-5 text-white font-semibold hover:bg-white hover:text-[#DA291C] duration-500">CLUB</button>
            <button className="h-full px-5 text-white font-semibold hover:bg-white hover:text-[#DA291C] duration-500">SHOP</button>
            <button className="h-full px-5 text-white font-semibold hover:bg-white hover:text-[#DA291C] duration-500">TICKETS</button>
            <button className="h-full px-5 text-white font-semibold hover:bg-white hover:text-[#DA291C] duration-500">RANK LIST</button>
        </nav>
    )
}

export default Navbar;