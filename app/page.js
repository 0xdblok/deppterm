import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center px-20 pt-72 pb-36 md:pb-10 text-xl bg-black text-center white max-md:px-5 max-md:pt-24">
      <article className="flex flex-col items-center max-w-full w-[447px] text-white">

        
 
        
        <section className="self-stretch mt-1.5 tracking-widest leading-7 max-md:max-w-full">
        <p className="tracking-widest whitespace-pre">+----------------------------------+</p>
       
          <p className="whitespace-pre pt-4">| $$$$ deppterminal TOKEN $$$$  |</p>
          <p className="whitespace-pre pt-2">| ========================  |</p>
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
    </section>
  );
}