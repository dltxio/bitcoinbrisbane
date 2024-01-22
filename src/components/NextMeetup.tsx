import axios from "axios";
import { useEffect, useState } from "react";
import { MeetupEvent, MeetupResponse } from "../types/app";
import dayjs from "dayjs";

export const NextMeetup = () => {
  const [event, setEvent] = useState<MeetupEvent>();

  const convertDateAndTime = (
    date: any,
    time: any,
    format: string = "ddd, DD MMM YYYY"
  ) => {
    if (date === undefined || time === undefined) return date;

    const finalDate = dayjs(`${date} ${time}`).format(format);
    return finalDate;
  };

  useEffect(() => {
    axios
      // Add bearer token to get past CORS
      .get<MeetupResponse>("https://cms.dltx.io/api/events?populate=*", {
        headers: {
          Authorization: `Bearer 077fa26ea22e6b25c78279efd6d7d6fca8194fb949ebcbeb0ce3fc4612a13883675a420d78479cc282dc04cf17a2bf5895d8b15fc77dd132c018845d3b20ebb3d2cfc8dc63cbfc25ba1fcfd574bb5178187dd29cf49014fd3a385efc431030b2455106ec2287d8324f125e3ef98da20a97f9e5c28e007a0d9e3a381d3c4e9e6a`
        }
      })
      .then(({ data }) => {
        if (data.data.length === 0) return;
        const meetup: MeetupEvent = data.data[0];
        setEvent(meetup);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-full mt-12 px-6">
      <h2 className="font-black title text-5xl lg:text-9xl w-full text-center text-white">
        NEXT MEETUP
      </h2>
      <div className="w-full mt-10 lg:mt-24 font-hand lg:flex">
        <div className="grid grid-cols-12 flex items-center justify-center w-full">
          <div className="col-start-3 col-span-9 lg:flex lg:flex-col">
            <h3 className="text-3xl lg:text-6xl leading-[1.5rem] relative top-1">
              {event?.attributes?.name}
            </h3>
          </div>
          <div className="col-start-3 col-span-4 lg:flex lg:flex-col">
            <div className="hidden lg:flex flex-col gap-y-4">
              <p className="mt-4 text-2xl">{event?.attributes?.description}</p>
              <span className="block text-4xl text-red-700">
                {convertDateAndTime(
                  event?.attributes?.date,
                  event?.attributes?.time,
                  "h:mm a"
                )}{" "}
                |{" "}
                {convertDateAndTime(
                  event?.attributes?.date,
                  event?.attributes?.time
                )}{" "}
                AEST | {event?.attributes?.venue} |{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://www.meetup.com/bitcoinbrisbane/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP
                </a>
              </span>
            </div>
          </div>
          {/* {event?.attributes?.photo?.data !== "null" || (
                <div className="col-start-8 col-span-3">
                  <img
                    src={`https://cms.dltx.io${event.attributes.photo.data[0].attributes.formats.large.url}`}
                    alt={event.attributes.name}
                    className="rounded-xl"
                  />
                </div>
              )} */}
        </div>
      </div>
      <div className="hidden lg:flex flex-col text-center">
        <p className="mt-48 text-4xl font-hand ">
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
