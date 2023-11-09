"use client";

import {
  useContext,
  createContext,
  ReactNode,
  FC,
  useRef,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
}

interface SmoothScrollInt {
  scrollToSection: (section: string) => void;
}

const SmoothScrollContext = createContext({} as SmoothScrollInt);

export const SmoothScrollProvider: FC<Props> = ({ children }) => {
  const locoScroll = useRef<any>(null!);
  const scrollToSection = (section: string) => {
    const target = document.querySelector(`#${section}`);

    locoScroll.current.scrollTo(target);

    const lsUpdate = () => {
      if (locoScroll.current) {
        locoScroll.current.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
  };
  useEffect(() => {
    if (locoScroll.current) return;

    import("locomotive-scroll").then((locomotiveModule) => {
      const scrollEl = document.querySelector(
        ".main-content-wrapper"
      )! as HTMLDivElement;

      locoScroll.current = new locomotiveModule.default({
        el: scrollEl,
        smooth: true,
        multiplier: 0.75,

        smartphone: {
          smooth: true,
          // getDirection: true,
        },
        // tablet: {
        //   smooth: true,
        //   // inertia: 0.8,
        //   // getDirection: true,
        // },
      });

      locoScroll.current.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value: any) {
          if (locoScroll.current) {
            return arguments.length
              ? locoScroll.current.scrollTo(value, {
                  duration: 0,
                  disableLerp: true,
                })
              : //@ts-ignore
                locoScroll.current.scroll.instance.scroll.y;
          }
          return null;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollEl.style.transform ? "transform" : "fixed",
      });

      const lsUpdate = () => {
        if (locoScroll.current) {
          locoScroll.current.update();
        }
      };

      ScrollTrigger.defaults({ scroller: scrollEl });

      ScrollTrigger.addEventListener("refresh", lsUpdate);
      ScrollTrigger.refresh();

      return () => {
        locoScroll.current.destroy();
        locoScroll.current = null;
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
      };
    });
  }, [locoScroll.current]);

  return (
    <SmoothScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScrollContext = () => useContext(SmoothScrollContext);
