"use client";
import {useSession } from "next-auth/react";
import Image from "next/image";
import Nav from "@/app/_NavBar/Nav";
import React, {useState} from "react";

export default function Home() {
  const { data:session } = useSession();
  const [brand,setBrand] = useState(true);
  console.log(brand)
  return (
      <main className="flex min-h-screen flex-col justify-center">
          <Nav/>
          <Image
              src={`/images/cars/${brand ? 'mercedes-benz.svg':'mercedes-amg.svg' }`}
              alt={'merco'}
              width={1200}
              height={700}
              className={'absolute right-0 '}
          />
          <Image
              src={`/icons/${brand ? 'merco.svg' : 'amg.svg'}`}
              alt={'merco'}
              width={150}
              height={50}
              className={'border border-black absolute bottom-20 left-[900px]'}
              onClick={()=>setBrand(!brand)}
          />
      </main>
  );
}