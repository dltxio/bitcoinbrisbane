import React from "react";
import { Date } from "../assets";
import { Images } from "./Images";

export const NextMeetup: React.FC = () => (
  <section className="w-full mt-12 px-6">
    <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
      NEXT MEETUP
    </h2>
    <div className="w-full px-6 lg:px-12 mt-10 lg:mt-24 font-hand lg:flex">
      <div className="flex items-center justify-center w-full gap-x-4 lg:gap-x-10 lg:max-w-[50%]">
        <div className="mt-4 text-2xl font-hand lg:flex pr-4"><p className="relative left-[3.8vw] z-50">May</p>
        <img
          src={Date}
          alt="May 22nd"
          className="w-[6vh] lg:w-[14vh] small-shadow z-40"
        />
        </div>
        <div className="lg:flex lg:flex-col">
          <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
            BITCOIN PIZZA DAY
          </h3>
          <div className="hidden lg:flex flex-col gap-y-4">
            <p className="mt-4 text-2xl">
              On May 22, 2010, now known as Bitcoin Pizza Day, Laszlo Hanyecz
              agreed to pay 10,000 Bitcoins for two delivered Papa John's pizzas!
            </p>
            <span className="block text-4xl">
              5:30pm AEST | Boroughs Of New York |{" "}
              <a
                className="underline underline-offset-4"
                href="https://www.meetup.com/bitcoinbrisbane/events/292717813/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSVP
              </a>
            </span>
          </div>
          <div className="hidden lg:flex flex-col gap-y-4">
            <p className="mt-4 text-4xl">
              Checkout our other events @
              <a
                className="underline underline-offset-4"
                href="https://www.meetup.com/bitcoinbrisbane/"
                target="_blank"
                rel="noopener noreferrer"
              >
                meetup.com/bitcoinbrisbane
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 leading-[1.2rem] lg:hidden">
        Looking to connect with fellow enthusiasts of cryptocurrency,
        non-fungible tokens (NFT&apos;s), and BTC ordinals? Then join us for a
        meetup that explores the intersection of these exciting new
        technologies!
      </p>
      <div className="flex lg:hidden w-full items-center justify-end">
        <span className="block text-lg">
          6pm AEST | The Precinct |{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.meetup.com/bitcoinbrisbane/events/291902672/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </span>
      </div>
      <div className="hidden lg:block max-w-[50%]">
        <Images />
      </div>
    </div>
  </section>
);
