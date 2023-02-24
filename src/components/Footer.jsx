import React from "react";
import * as Icon from 'react-feather';
import Link from 'next/link'
import {Text, Tooltip} from "@nextui-org/react"

const Footer = () => {
  const tooltText = (
    <p className="font-inter font-medium w-max">Building in Progress 😎</p>
  )
  return (
    <>
      <footer className="pt-12 px-8 font-inter text-lg flex flex-col md:px-32 justify-center items-center space-y-10">
        <div className="flex justify-between items-center w-full md:max-w-5xl">
          <div className="contact flex flex-col gap-3">
            <Link href={"/contact"} className="font-bold text-xl flex items-center justify-center   transition-all delay-100 ease-in hover:animate-pulxse group">Contact me <Icon.ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-105 transition-all delay-100 ease-in" ></Icon.ArrowUpRight> </Link>
            <a href="">E-Mail</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
          <div className="contact flex flex-col gap-3 font-bold text-lg items-end">
            <Tooltip auto color={'secondary'}  content={tooltText}>
            <p href="" className="text-gray-400 cursor-pointer">
              Visit Store
            </p>
            </Tooltip>
            <a href="mailto:hariskumar.eth@proton.me?subject=We%20are%20interested%20to%20hire%20you&body=Hey!%20I%2FWe%20have%20got%20a%20project%20idea%20and%20I%2FWe%20guess%20we%20could%20collaborate">Hire me</a>
            <a href="https://github.com/hariseth">My Github</a>
            <a href="https://links.haris.one">All Links</a>
          </div>
        </div>
        <hr className="w-full max-w-5xl" />
      </footer>

      <div className="last-line flex justify-center items-center py-6 px-8 md:px-32">
        <div className="cover w-full md:max-w-5xl flex justify-between items-center">
          <p className="font-bold italic ">haris.one</p>
          <div className="flex gap-3">
            <a href="mailto:hariskumar.eth@proton.me" className="p-2 rounded-full border-gray-200 flex justify-center items-center w-full h-full border-2">
              <Icon.Mail className="h-4 w-4 md:w-7 md:h-7"  />
            </a>
            <a href="https://www.twitter.com/haris_eth" className="p-2 rounded-full border-gray-200 flex justify-center items-center w-full h-full border-2">
              <Icon.Twitter className="h-4 w-4 md:w-7 md:h-7" />
            </a>
            <a href="https://www.instagram.com/hariskumar.eth" className="p-2 rounded-full border-gray-200 flex justify-center items-center w-full h-full border-2">
              <Icon.Instagram className="h-4 w-4 md:w-7 md:h-7" />
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
