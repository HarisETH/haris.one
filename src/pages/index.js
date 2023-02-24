import Head from "next/head";
import Image from "next/image";
import { Cormorant } from "@next/font/google";
const cormorant = Cormorant({ subsets: ["latin"], variable: '--cormorant-font' });
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Current from "@/components/Current";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";


//h-screen overflow-hidden
export default function Home() {
  const[visib, setVisib] = useState('');
  useEffect(() => {
    
      setTimeout(function () {
        setVisib('')
        
        
      }, 2000);

    
  }, []);

  return (
    <>
      <Head>
        <title>Haris Kumar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        
      </Head>

      <main className={`min-h-screen w-full antialiased font-inter`}>
        {/* <Loading /> */}

        <section className={inter.className}>
          <Hero  />

          <Socials  />

          <Current  />

          <Footer  />
        </section>
      </main>
    </>
  );
}
