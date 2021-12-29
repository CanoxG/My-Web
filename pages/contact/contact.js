import React from "react";
import Section from "../../components/section/Section";
import { Input } from "../../components/Input/Input";
import Textarea from "../../components/textarea/Textarea";
import Separator from "../../components/separator/Separator";

export default function Contact() {
  return (
    <Section>
      <div id={"contact"} className="px-6 pt-20 ">
        <div className="flex justify-center">
          <h1 className="sm:text-3xl text-xl font-sans max-auto font-black title-font mb-4">
            CONTACT US
          </h1>
        </div>
        <Separator />
        <div className="flex justify-center">
          <p
            className="lg:w-2/3 text-center text-sm sm:text-lg leading-6 sm:leading-relaxed
          font-light text-gray-500 text-base"
          >
            Don't hesitate to get in touch with us
            <br />
            We would love to discuss on your project
          </p>
        </div>
        <Input />
        <Textarea />
        <div className="flex justify-center">Button</div>
      </div>
    </Section>
  );
}
