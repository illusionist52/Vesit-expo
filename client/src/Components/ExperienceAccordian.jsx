import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col gap-y-5">
      <Accordion
        open={open === 1}
        // icon={<Icon id={1} open={open} />}
        className="rounded-xl border border-slate-500"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="bg-slate-800 md:py-2 md:px-3 h-32 rounded-xl"
        >
          <div>
            <h1  className="-mt-10 font-bold text-3xl">What is Material Tailwind?</h1>
            <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora autem ipsam, dolorum qui voluptates.</p>
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-slate-700 md:py-2 md:px-3 rounded-b-xl">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

     
    </div>
  );
}
