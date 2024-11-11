import Image from "next/image";
import logo from "./logodepp.jpg";
import depp from "./depp.png";
export default function Home() {
  return (
    <section className="flex flex-col items-center   px-20  pb-36 md:pb-10 text-xl bg-black text-center white max-md:px-5 max-md:pt-4">
     <div className="md:flex md:flex-col md:justify-start md:w-full "><div className="flex flex-col justify-center"><Image className="ml-4"  src={logo} alt="Skinny" width={140} height={140}/><Image  src={depp} alt="Skinny" width={185} height={170}/></div>
        </div>  <article className="flex flex-col items-center  bg-black  text-white pt-64">
       
        <section className="self-stretch mt-1.5 tracking-widest leading-7 bg-black max-md:max-w-full p-6  ">
          <p className="tracking-widest whitespace-pre  before:absolute before:inset-0 before:animate-typewriter before:bg-black">+----------------------------------+</p>
       
          <p className="whitespace-pre pt-4 before:absolute before:inset-0 before:animate-typewriter before:bg-black">|   $$$ deppterminal TOKEN $$$    |</p>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|   ======================    |</p>
          <p className="whitespace-pre pt-2   before:absolute before:inset-0 before:animate-typewriter before:bg-blacke">|                                                   |</p>
          <a href="" className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|         LAUNCH DATE: [TBA]          |</a>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|                                                   |</p>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|      Decentralized Truth Engine     |</p>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|                                                   |</p>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|       Eco-Friendly Blockchains      |</p>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|                                                   |</p>
          <a href="https://deppterminal.xyz" className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|       www.deppterminal.xyz          |</a>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|                                                   |</p>
          <p className="whitespace-pre pt-2  before:absolute before:inset-0 before:animate-typewriter before:bg-black">|  DISCLAIMER: Invest responsibly |</p>
          <p className="tracking-widest whitespace-pre   before:absolute before:inset-0 before:animate-typewriter before:bg-black pt-4">+----------------------------------+</p>

        </section>
        
        <nav className="flex gap-3.5 items-center mt-80 max-w-full text-base w-[248px] max-md:mt-10">
          <a href="https://x.com/deppterminal" className="grow self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
            twitter
          </a>
          <span aria-hidden="true" className="self-stretch">|</span>
          <a href="#chart" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
            chart
          </a>
          <span aria-hidden="true" className="self-stretch">|</span>
          <a href="#backrooms" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
            depprooms
          </a>
        </nav>
      </article>
    </section>
  );
}

/*
<section className="flex flex-col items-center px-20 pt-72 pb-36 md:pb-10 text-xl bg-black text-center white max-md:px-5 max-md:pt-24">
<article className="flex flex-col items-center max-w-full w-[447px] text-white">

  

  
  <section className="self-stretch mt-1.5 tracking-widest leading-7 max-md:max-w-full ">
  <p className="tracking-widest whitespace-pre">+----------------------------------+</p>
 
    <p className="whitespace-pre pt-4">|   $$$ deppterminal TOKEN $$$    |</p>
    <p className="whitespace-pre pt-2">|   ======================    |</p>
    <p className="whitespace-pre pt-2">|                                                   |</p>
    <a href="" className="whitespace-pre pt-2">|        LAUNCH DATE: [NOW]          |</a>
    <p className="whitespace-pre pt-2">|                                                   |</p>
    <p className="whitespace-pre pt-2">|      Decentralized Truth Engine     |</p>
    <p className="whitespace-pre pt-2">|                                                   |</p>
    <p className="whitespace-pre pt-2">|       Eco-Friendly Blockchains      |</p>
    <p className="whitespace-pre pt-2">|                                                   |</p>
    <a href="https://deppterminal.xyz" className="whitespace-pre pt-2">|       www.deppterminal.xyz          |</a>
    <p className="whitespace-pre pt-2">|                                                   |</p>
    <p className="whitespace-pre pt-2">|  DISCLAIMER: Invest responsibly |</p>
    <p className="tracking-widest whitespace-pre pt-4">+----------------------------------+</p>
  </section>
  
  <nav className="flex gap-3.5 items-center mt-80 max-w-full text-base w-[248px] max-md:mt-10">
    <a href="https://x.com/snappfinancer" className="grow self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
      twitter
    </a>
    <span aria-hidden="true" className="self-stretch">|</span>
    <a href="#chart" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
      chart
    </a>
    <span aria-hidden="true" className="self-stretch">|</span>
    <a href="#backrooms" className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2">
      depprooms
    </a>
  </nav>
</article>
</section>*/