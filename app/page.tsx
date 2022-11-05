import { AboutMe, Footer, Hero, Nav, News, Quote, Work } from "./(sections)"


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutMe />
      <Work />
      <Quote />
      <News />
      <Footer />
    </div>
  )
}
