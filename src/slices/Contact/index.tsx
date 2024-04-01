"use client";

import React, { useRef, useEffect } from "react";
import Bounded from "@/components/Bounded";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import gsap from "gsap";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current && formRef.current) {
      gsap.fromTo(
        [headingRef.current, formRef.current],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2.5,
          stagger: 0.3,
          ease: "power3.out",
        },
      );
    }
  }, []);

  return (
    <Bounded>
      <div className="grid justify-between gap-4 px-4 py-2 sm:grid-cols-2 sm:px-20">
        {/* Heading */}
        <div className="mb-4" ref={headingRef}>
          <div>
            <Heading as="h2" size="sm">
              {slice.primary.heading}
            </Heading>
            <p className="mb-4 mt-4 bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase text-transparent">
              {slice.primary.description}
            </p>
          </div>
          <div className="flex max-w-[450px] flex-col items-center rounded-2xl border-2 border-slate-800 bg-slate-900 bg-opacity-45 py-6 backdrop-blur-md md:mt-10 md:py-4">
            <h2 className="mb-4 max-w-fit text-center">
              Meus canais de contato:
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex max-w-fit flex-row items-center gap-4">
                <FiMail />
                <a href={`mailto:${slice.primary.email}`}>
                  {slice.primary.email}
                </a>
              </div>
              <div className="flex max-w-fit flex-row items-center gap-4">
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/hwgohenrique/"
                  target="blank"
                >
                  in/hwgohenrique/
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex justify-center" ref={formRef}>
          <Form />
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
