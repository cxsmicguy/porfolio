import Image from 'next/image'
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

export default function PortfolioComp(props) {
  return (
    <div className="hover:scale-105 duration-300 ease-in-out bg-white bg-opacity-70 backdrop-blur-lg p-10 rounded-2xl md:bg-transparent md:px-0 text-gray-500 container text-left mb-5 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <Image src={props.img} className='"object-cover w-full rounded-3xl border border-4 border-white shadow-xl hover:border-0 hover:shadow-2xl hover:rounded-2xl hover:scale-110 duration-300 ease-in-out'height={500} width={600} alt='yt-clone'/>
      </div>
      <div>
        <h2 className='text-xl font-bold text-black'>{props.name}</h2><br />
        <p>{props.description}</p><br />
        <div>
          <span className='bg-white px-3 py-2 rounded-xl mr-2 text-semibold'>{props.lang1}</span>
          <span className='bg-white px-3 py-2 rounded-xl mr-2 text-semibold'>{props.lang2}</span>
        </div><br />
        <div>
        {props.codeI == "code" && <a className='inline-block mr-2 bg-black text-white p-2 rounded-lg' href={props.code}>Github <SiGithub className='inline-block'/></a>}          <a className='inline-block mr-2 bg-yellow-900 text-white p-2 rounded-lg' href={props.demo}>Demo <BiLinkExternal className='inline-block'/></a>
        </div>
      </div>
    </div>
  );
}

export function PortfolioComp2(props) {
  return (
    <div className="hover:scale-105 duration-300 ease-in-out bg-white bg-opacity-70 backdrop-blur-lg p-10 rounded-2xl md:px-0 md:bg-transparent text-gray-500 container text-left mb-14 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 className='text-xl font-bold text-black'>{props.name}</h2><br />
        <p>{props.description}</p><br />
        <div>
          <span className='bg-white px-3 py-2 rounded-xl mr-2 text-semibold'>{props.lang1}</span>
          <span className='bg-white px-3 py-2 rounded-xl mr-2 text-semibold'>{props.lang2}</span>
        </div><br />
        <div>
          {props.codeI == "code" && <a className='inline-block mr-2 bg-black text-white p-2 rounded-lg' href={props.code}>Github <SiGithub className='inline-block'/></a>}
          <a className='inline-block mr-2 bg-yellow-900 text-white p-2 rounded-lg' href={props.demo}>Demo <BiLinkExternal className='inline-block'/></a>
        </div>
      </div>
      <div>
        <Image src={props.img} className='"object-cover w-full rounded-3xl border border-4 border-white shadow-xl hover:border-0 hover:shadow-2xl hover:rounded-2xl hover:scale-110 duration-300 ease-in-out'height={500} width={600} alt='yt-clone'/>
      </div>
    </div>
  );
}