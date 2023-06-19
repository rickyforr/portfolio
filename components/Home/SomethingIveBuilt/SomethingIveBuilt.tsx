import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://omakasea.dev"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/omakasea_site.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/omakasea_site.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-100 md:h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://omakasea.dev"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Omakasea NFT Generator
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I led the Frontend development for omakasea.dev a generative
                  nft art generator and smart contract deployer. Through
                  omakasea users can upload image layers to create generative
                  nft collections, create and customize mint pages and execute
                  smart contract functions using our intuitive ui.{" "}
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Token</span>
                <span className="pr-4 z-10">Smart contract</span>
                <span className="pr-4 z-10">Blockchain</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">NFTs</span>
              </ul>
            </div>
          </div>
        </div>
        {/* // ?  Project  2*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://ethgobblers.com"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"/img/eth_gobblers_site.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/eth_gobblers_site.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-100 md:h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://ethgobblers.com"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    ETH Gobblers
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  This project is an example of gamified blockchain patronage. A
                  GOOEY is your own living, breathing, dynamic creature NFT that
                  lives in a super cute Tamagotchi-style web 3 application.
                  GOOEYs need your love and support to thrive, divide into more
                  GOOEYs and drop gifts along the way. Each GOOEY has it's own
                  base traits, disposition, taxonomy and age. GOOEYs can also be
                  equipped with new unique add-ons, claimable to those who keep
                  their GOOEYs healthy and happy.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">NodeJS</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Alchemy SDK</span>
              </ul>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"https://mglth.tv"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/img/megalith_tv_site.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/megalith_tv_site.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://mglth.tv"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Megalith TV
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Megalith TV is an accretive streaming video platform. Allowing
                  token holders to upload content to a 2 week long repeating
                  video stream. The duration of content users are able to upload
                  was determined by the amount of ethereum sent to the contract
                  in order to mint the NFT. Token holders have broadcasting
                  rights to the Megalith stream and can upload content of their
                  choosing which is shown at a defined time slot within the 2
                  week streaming period.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next JS</span>
                <span className="pr-4 z-10">Token Gating</span>
                <span className="pr-4 z-10">Streaming Video</span>
                <span className="pr-4 z-10">Web3</span>
              </ul>
            </div>
          </div>
        </div>

        {/* // ? Project 4 */}
        {/* <div
                    data-aos="fade-up"
                    className="relative md:grid md:grid-cols-12 w-full md:h-96"
                >
                    <div
                        className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
                    >
                        <div className="relative rounded w-full h-full col-span-7 ">
                            <a
                                href="https://www.haircut.ma"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <div
                                    // onClick={}
                                    className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </a>

                            <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                                <span className="text-AAsecondary text-xl">
                                    In initiation...
                                </span>
                            </div>

                            <Img
                                src={"/haircut.png"}
                                alt={"Project Screen shot"}
                                className={`w-full rounded h-full `}
                            />
                        </div>
                    </div>

                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        <div className="absolute w-full h-full bg-opacity-70 z-0">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img
                                    src={"/haircut.png"}
                                    alt={"Project Screen shot"}
                                    className={`w-full h-full `}
                                />
                            </div>
                        </div>
                        <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
                            <div className="w-full"></div>
                            <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">
                                In initiation...
                            </span>
                        </div>
                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
                        >
                            <div className="flex flex-col space-y-1 md:items-end z-10">
                                <span className="text-AAsecondary text-base">
                                    Recent Project
                                </span>
                                <a
                                    href="https://www.haircut.ma"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                        Haircut Appointment
                                    </span>
                                </a>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                                    It&apos; a barber shop{" "}
                                    <span className="text-AAsecondary">
                                        appointment scheduling
                                    </span>{" "}
                                    & management software it provides{" "}
                                    <span className="text-AAsecondary">
                                        online scheduling
                                    </span>
                                    , appointment reminders,{" "}
                                    <span className="text-AAsecondary">
                                        payments
                                    </span>
                                    , marketing, and much more! Currently in the{" "}
                                    <span className="text-AAsecondary">
                                        Initiation phase
                                    </span>
                                    .
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
                            >
                                <span className="pr-4 z-10">Appointment</span>
                                <span className="pr-4 z-10">Management</span>
                                <span className="pr-4 z-10">Scheduling</span>
                                <span className="pr-4 z-10">Booking</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                                <GithubIcon link="https://github.com/hktitof/haircut" />
                                <a
                                    href="https://www.haircut.ma"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <ExternalLink url={""} router={router} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}

        {/* // ?  Project 5 */}
        {/* <div
                    data-aos="fade-up"
                    className="relative md:grid md:grid-cols-12 w-full md:h-96  "
                >
                    <div
                        className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
                    >
                        <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                            <a
                                href="https://github.com/hktitof/CallCenter"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <div
                                    className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                                ></div>
                            </a>

                            <Img
                                src={"/CallCenter.png"}
                                alt={"Project Screen shot"}
                                className={`w-full rounded h-full `}
                            />
                        </div>
                    </div>

                    <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                        <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                            <div className="relative w-full h-full">
                                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                                <Img
                                    src={"/CallCenter.png"}
                                    alt={"Project Screen shot"}
                                    className={`w-full h-full`}
                                />
                            </div>
                        </div>

                        <div
                            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
                        >
                            <div className="flex flex-col space-y-1  z-10">
                                <span className="text-AAsecondary text-base">
                                    Recent Project
                                </span>
                                <a
                                    href="https://github.com/hktitof/CallCenter"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                        Call Center Management System
                                    </span>
                                </a>
                            </div>
                            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                                <p className="text-gray-300 md:text-gray-400 text-left ">
                                    A{" "}
                                    <span className="text-AAsecondary">
                                        JavaFX call center management system
                                    </span>{" "}
                                    project it is used for receiving or
                                    transmitting a large volume of enquiries
                                    between the agent and the customer,it
                                    handles the communication between agents &
                                    clients it can be used for the both side
                                    client & agent side to handle the messages
                                    and issues.
                                </p>
                            </div>
                            <ul
                                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
                            >
                                <span className="pr-4 z-10">JavaFX</span>
                                <span className="pr-4 z-10">
                                    Java Concurrency
                                </span>
                                <span className="pr-4 z-10">
                                    MultiThreading
                                </span>
                                <span className="pr-4 z-10">MySQL</span>
                            </ul>
                            <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                                <GithubIcon link="https://github.com/hktitof/CallCenter" />
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
