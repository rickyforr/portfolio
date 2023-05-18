import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import {
  absorbJobDescription,
    freelanceJobDescription,
    omakaseaJobDescription,
    openhouseJobDescription,
    resJobDescription,
    spartanJobDescription,
} from "../../../system/constants";
import JobDescription from "./Descriptions/JobDesription";

export default function WhereIHaveWorked() {
    const barRef = React.useRef<HTMLDivElement>(null);
    // ? INFORMATIONAL control the green position using px,
    // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
    const GetDescription = () => {
        switch (DescriptionJob) {
            case "Omakasea":
                return (
                    <JobDescription
                        tasks={omakaseaJobDescription}
                        company="Omakasea"
                        jobTitle="FullStack Developer"
                        dates="Nov 2021 - Current"
                    />
                );
            case "Openhouse":
                return (
                    <JobDescription
                        tasks={openhouseJobDescription}
                        company="Openhouse"
                        jobTitle="Frontend Developer"
                        dates="Jan 2021 - Nov 2021"
                    />
                );
            case "Resource Energy Solutions":
                return (
                    <JobDescription
                        tasks={resJobDescription}
                        company="Resource Energy Solutions"
                        jobTitle="Frontend Developer"
                        dates="Apr 2020 - Dec 2020"
                    />
                );
            case "Absorb LMS":
                return (
                    <JobDescription
                        tasks={absorbJobDescription}
                        company="Absorb LMS"
                        jobTitle="Junior Developer"
                        dates="Jan 2018 - Mar 2020"
                    />
                );
            case "Spartan Spark":
                return (
                    <JobDescription
                        tasks={spartanJobDescription}
                        company="Spartan Spark"
                        jobTitle="Junior Developer"
                        dates="Aug 2017 - Dec 2017"
                    />
                );
            case "Freelance":
                return (
                    <JobDescription
                        tasks={freelanceJobDescription}
                        company="Freelance"
                        jobTitle="Contract Web Developer"
                        dates="February 2016 - July 2017"
                    />
                );
        }
    };
    const [DescriptionJob, setDescriptionJob] = React.useState("Omakasea");
    return (
        <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
        >
            {/* // ? Title "Where I've Worked" */}
            <section className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <ArrowIcon
                        className={
                            "flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"
                        }
                    />
                    <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
                        {" "}
                        02.
                    </span>
                </div>

                <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
                    Where I&apos;ve Worked
                </span>
                <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
            </section>
            {/* // ? Where I've Worked Content section */}
            <section
                className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
            >
                {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
                <CompaniesBar setDescriptionJob={setDescriptionJob} />
                {/* // ? Description for The job */}
                {GetDescription()}
            </section>
        </div>
    );
}

type CompaniesBarProps = {
  setDescriptionJob: (jobDescription: string) => void;
};

const CompaniesBar = ({ setDescriptionJob }: CompaniesBarProps) => {
    const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
    const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
    const [
        companyNameBackgroundColorGreen,
        setCompanyNameBackgroundColorGreen,
    ] = React.useState<boolean[]>([true, false, false, false, false, , false]);

    const companies = [
        {
            name: "Omakasea",
            barPosition: -8,
            barAvobePosition: 1,
        },
        {
            name: "Openhouse",
            barPosition: 36,
            barAvobePosition: 129,
        },
        {
            name: "Resource Energy Solutions",
            barPosition: 80,
            barAvobePosition: 257,
        },
        {
            name: "Absorb LMS",
            barPosition: 122,
            barAvobePosition: 385,
        },
        {
            name: "Spartan Spark",
            barPosition: 166,
            barAvobePosition: 513,
        },
        {
            name: "Freelance",
            barPosition: 210,
            barAvobePosition: 641,
        },
    ];

    return (
        <div
            id="WhereIhaveWorkedSection"
            className=" flex flex-col md:flex-row  w-screen md:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
        >
            {/* // ? left bar Holder */}
            <div
                className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-64 translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
            >
                {/* // ? animated left bar */}
                <motion.div
                    animate={{ y: barPosition }}
                    // ref={barRef}
                    className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
                ></motion.div>
            </div>
            {/* // ? Companies name as buttons */}
            <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
                <div className="flex flex-row md:flex-col">
                    {companies.map((company, index) => (
                        <CompanyButton
                            currentNameBackgroundColorGreen={
                                companyNameBackgroundColorGreen
                            }
                            onCompanyNameBackgroundColorGreen={(arr) =>
                                setCompanyNameBackgroundColorGreen(arr)
                            }
                            ButtonOrderOfcompanyNameBackgroundColorGreen={index}
                            CompanyName={company.name}
                            BarPosition={company.barPosition}
                            BarAvobePosition={company.barAvobePosition}
                            DescriptionJob={company.name}
                            CompanyNameBackgroundColorGreen={Array.from(
                                Array(companies.length).map((el, i) => {
                                    if (index === i) {
                                        return true;
                                    } else return;
                                })
                            )}
                            onDescriptionJob={setDescriptionJob}
                            onBarAbovePosition={(pos) =>
                                setBarAbovePosition(pos)
                            }
                            onBarPosition={(pos) => setBarPosition(pos)}
                        />
                    ))}
                </div>
                <div className="block md:hidden w-[760px] h-0.5 rounded bg-gray-500">
                    <motion.div
                        animate={{ x: barAbovePosition }}
                        className="w-[128px] h-0.5 rounded bg-AAsecondary"
                    ></motion.div>
                </div>
            </div>
        </div>
    );
};

type CompanyButtonProps = {
    ButtonOrderOfcompanyNameBackgroundColorGreen: number;
    CompanyName: string;
    BarPosition: number;
    BarAvobePosition: number;
    DescriptionJob: string;
    CompanyNameBackgroundColorGreen: any;
    currentNameBackgroundColorGreen: any;
    onBarPosition: (barPosition: number) => void;
    onBarAbovePosition: (barPosition: number) => void;
    onDescriptionJob: (jobDescription: string) => void;
    onCompanyNameBackgroundColorGreen: (selectionArr: any[]) => void;
};

const CompanyButton = ({
    BarAvobePosition,
    CompanyName,
    BarPosition,
    DescriptionJob,
    CompanyNameBackgroundColorGreen,
    currentNameBackgroundColorGreen,
    ButtonOrderOfcompanyNameBackgroundColorGreen,
    onBarPosition,
    onBarAbovePosition,
    onDescriptionJob,
    onCompanyNameBackgroundColorGreen,
}: CompanyButtonProps) => {
    return (
        <button
            onClick={() => {
                onBarPosition(BarPosition);
                onBarAbovePosition(BarAvobePosition);
                onDescriptionJob(DescriptionJob);
                onCompanyNameBackgroundColorGreen(
                    CompanyNameBackgroundColorGreen
                );
            }}
            className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
           hover:bg-ResumeButtonHover rounded  font-mono  
           py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
           ${
               currentNameBackgroundColorGreen[
                   ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                   ? "bg-ResumeButtonHover text-AAsecondary"
                   : "text-gray-500"
           }`}
        >
            {CompanyName}
        </button>
    );
};
