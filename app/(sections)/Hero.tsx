import Image from "next/image"

export default function Hero() {
  return (
    <div>
      <div className="absolute text-white lg:my-48 lg:px-60">
        <h2 className={`uppercase bg-gray-800 text-center p-1 tracking-widest text-sm font--inconsolata xl:w-1/4`}>Hi! Everyone</h2>
        <div className={`font-extrabold xl:text-7xl py-10`}>
          <h1>Jim Ntare</h1>
          <h2 id="profession">Software Engineer</h2>
        </div>
        <p className="w-3/4 text-lg font-sas">Make designs mainly logos, visual identities, apps & websites, social media and magazines.</p>
        <button className={`my-5 border py-2 px-5 hover:bg-white hover:text-black uppercase font-sas`}>Get in touch</button>
      </div>
      <div>
        <Image alt='hero Image' src='https://res.cloudinary.com/dv3m9cfoz/image/upload/v1667683222/personal-website/dummy_qagbtg.png' width={1800} height={200} />
      </div>
    </div>
  )
}