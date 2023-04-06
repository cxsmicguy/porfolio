import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur-lg fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <center>
      <div className='container px-4 md:px-16 max-w-screen-xs'>
        <div className="flex flex-wrap items-center justify-between p-4">
          <a href="/" className="flex items-center">
              <Image width={100} height={100} src="/bitmap.png" className="h-8 w-8 mr-3" alt="Flowbite Logo"/>
          </a>
          <a href="https://github.com/cxsmicguy" className="flex items-center text-black rounded-xl p-2 font-bold">GitHub</a>
        </div>
      </div>
      </center>
    </nav>
  );
}

