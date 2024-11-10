import Image from "next/image";
import PIC from '../../public/next.svg'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:flex-row md:justify-between lg:px-20">
        
        <div className="text-center bg-slate-100 md:text-left mb-6 md:mb-0 md:w-1/2 lg:mr-10">
          <h1 className="text-3xl font-bold mb-2 md:text-4xl lg:text-5xl">
            Welcome to my Portfolio
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl">
            Explore my work and projects.
          </p>
          <Link href="/about">
            <div>
              <button className="px-8 py-3 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm md:text-base lg:text-lg">
                Explore
              </button>
            </div>
          </Link>
        </div>

      
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
          <Image src={PIC} alt="my-image" width={400} height={400} className="rounded-full bg-slate-200" />
        </div>
      </div>
    </>
  );
}
