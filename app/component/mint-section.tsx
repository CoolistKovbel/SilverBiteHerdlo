"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MintCollection = () => {
  return (
    <section>

    <header className="w-full flex items-center gap-4">
      <div className="p-4 bg-[#222] w-full">
        <h2 className="text-2xl ">MontyFlame Collection</h2>
        <p className="text-lg">
          With over 222 availble to mint get your self you very own erc-721
          token of a Monty the dog. You will be able to use this token on
          your own or in our app where it is accepted. There will be a vault
          where you can deposit and earn rewards for have purchased and
          supported the project. If you would like to know more about the
          our check out <Link href="/">here</Link>
        </p>
      </div>

      {/* Carosal */}
      <div className="w-[50%] p-5 bg-[#222]">
        <div className="w-[300px] h-[300px] relative">
          <Image src="/ff.png" alt="phantom biskot" fill />
        </div>
      </div>
    </header>

    <form className="w-full p-4 flex flex-col justify-between gap-4">
      <input type="number" placeholder="enter amount you want to mint" />
      <button className="bg-[#222] p-4 font-bold text-xl">mint</button>
    </form>

  </section>
  )
}

export default MintCollection