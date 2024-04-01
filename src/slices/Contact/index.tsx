import Bounded from "@/components/Bounded";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded>
      <div className="grid gap-4 justify-between px-4 sm:px-20 py-2 sm:grid-cols-2">
        {/* Heading */}
        <div className="mb-4">
          <Heading as="h2" size="sm">
            {slice.primary.heading}
          </Heading>
          <p className="bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text font-bold uppercase text-transparent text-2xl mt-4">
            {slice.primary.description}
          </p>
        </div>
        {/* Form */}
        <div className="flex justify-center">
          <Form />
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
