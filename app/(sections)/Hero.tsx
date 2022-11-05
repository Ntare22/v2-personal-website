import Image from "next/image"
// import { Inconsolata } from '@next/font/google'

// const inconsolata = Inconsolata();

export default function Hero() {
  return (
    <div>
      <div className="absolute my-48 px-60 text-white">
        <div>
          <h2 className={`uppercase bg-gray-800 w-1/4 text-center p-1 tracking-widest text-sm font--inconsolata`}>Hi! Everyone</h2>
          <div className={`font-extrabold text-7xl py-10`}>
            <h1>Jim Ntare</h1>
            <h2>Software Engineer</h2>
          </div>
          <p className="w-3/4 text-lg font-sas">Make designs mainly logos, visual identities, apps & websites, social media and magazines.</p>
          <button className={`my-5 border py-2 px-5 hover:bg-white hover:text-black uppercase font-sas`}>Get in touch</button>
        </div>
      </div>
      <div>
        <Image alt='hero Image' src='https://res.cloudinary.com/dv3m9cfoz/image/upload/v1667683222/personal-website/dummy_qagbtg.png' width={1800} height={200} />
      </div>
    </div>
  )
}