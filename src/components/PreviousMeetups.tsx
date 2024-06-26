import axios from "axios";
import { useEffect, useState } from "react";
import { Photo, PhotoReponse } from "../types/app";
import Marquee from "react-fast-marquee";

export const PreviousMeetup = () => {
  const [previousEventImageUrls, setPreviousEventImageUrls] = useState<any[]>(
    []
  );

  useEffect(() => {
    axios
      .get<PhotoReponse>("https://cms.dltx.io/api/photos?populate=*")
      .then(({ data }) => {
        const previousEventEntry: Photo = data.data.filter(
          dataEntry => dataEntry.attributes.title === "previous-events"
        )[0];
        if (!previousEventEntry) return;

        const previousEventEntryMedia =
          previousEventEntry.attributes?.media?.data;
        if (!previousEventEntryMedia) return;

        setPreviousEventImageUrls(
          previousEventEntryMedia
            // Show newest pictures first 
            .sort((a, b) => new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime())
            .map(mediaEntry => mediaEntry.attributes.url)
        );
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-full mt-24 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        PAST EVENTS
      </h2>

      {/* Carousel of past event images */}
      {previousEventImageUrls.length > 0 && (
        <div className="flex flex-col text-center mt-4 mb-4">
          <Marquee speed={82}>
            {previousEventImageUrls.map(imageUrl => (
              <img
                src={imageUrl}
                alt="past event image"
                className="md:h-[20rem] object-cover rounded-xl m-2 h-[8rem]"
              />
            ))}
          </Marquee>
        </div>
      )}

      <div className="flex flex-col text-center">
        <p className="md:text-4xl text-xl font-hand">
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
    </section>
  );
};
