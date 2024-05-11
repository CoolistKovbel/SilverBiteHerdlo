import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section>
      <header className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-bold">About PhantomBisot</h2>

        <div className="w-[300px] h-[300px] relative">
          <Image src="/enjizop.png" alt="puppy with textured fur" fill />
        </div>
      </header>

      <div>
        <h2>What is ETP? </h2>

        <p>
          Eketoro Park is the best decentralized application for you where you
          are able to get your self a collection of images, from our signature
          image to our individual onces. You will be able to use this erc-721
          tokens to earn rewards as well as use where accepted, there may be
          other applications that may accept the nft from our collectoin.
        </p>

       
      </div>
    </section>
  );
};

export default Page;
