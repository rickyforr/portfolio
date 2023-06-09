import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { meta } from "../system/constants";

export default function Home() {
    const context = useContext(AppContext);
    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // remove the interval Cookie timer setter when
        clearInterval(context.sharedState.userdata.timerCookieRef.current);
        if (typeof window !== "undefined") {
            // remove UserDataPuller project EventListeners
            window.removeEventListener(
                "resize",
                context.sharedState.userdata.windowSizeTracker.current
            );
            window.removeEventListener(
                "mousemove",
                context.sharedState.userdata.mousePositionTracker.current,
                false
            );
            // remove Typing project EventListeners
            window.removeEventListener(
                "resize",
                context.sharedState.typing.eventInputLostFocus
            );
            document.removeEventListener(
                "keydown",
                context.sharedState.typing.keyboardEvent
            );
        }
    }, [context, context.sharedState]);

    useEffect(() => {
        Aos.init({ duration: 2000, once: true });
    }, [context.sharedState.finishedLoading]);

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Richard Forrester" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mannupaaji" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} /> */}
            </Head>
            <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
                <Header sectionsRef={homeRef} />
                <MyName />
                <AboutMe ref={aboutRef} />
                <WhereIHaveWorked />
                <SomethingIveBuilt />
                <GetInTouch />
                <Footer
                    githubUrl={"https://github.com/rickyforr/portfolio"}
                    hideSocialsInDesktop={true}
                />
            </div>
        </>
    );
}
