import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.webp";
const Navbar = () => {
  return (
    <div className="flex justify-between px-24 items-center w-full h-20 font-sans fixed bg-white">
      <div className="flex w-1/10">
        <Image src={logo} alt = "logo" width={50} height={50} className="rounded-xl" />
      </div>
      <div className="flex w-7/10 font-semibold gap-8">
        <Link href="/" className="">
          Emotions
        </Link>
        <Link href="/aboutus" className="">
          Manifesto
        </Link>
        <Link href="/dashboard" className="">
          Self-awareness test
        </Link>
        <Link href="/listing" className="">
          Work with us
        </Link>
      </div>
      <div className="flex w-2/10">
        <button className="flex p-3 border-2 border-black rounded-full text-sm bg-black text-white w-36 justify-center">
          Download app
        </button>
      </div>
    </div>
  );
};

export default Navbar;
