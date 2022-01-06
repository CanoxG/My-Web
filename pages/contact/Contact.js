import React, { useCallback, useState } from "react";
import Section from "../../components/section/Section";
import { Input } from "../../components/Input/Input";
import Separator from "../../components/separator/Separator";
import SendBtn from "../../components/button/SendBtn";

export default function Contact() {
  const [name, setName] = useState("");
  console.log(name);
  const [email, setEmail] = useState("");
  console.log(email);
  const [message, setMessage] = useState("");
  console.log(message);
  const [submit, setSubmit] = useState();

  const handleName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleMessage = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  // We capture the Input State and dumps it out
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    // Then Create a Data Model whit State
    const data = {
      name,
      email,
      message,
    };

    // We need to Post it to our API folder with Fetch Request
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),

      // On the End of Fetch Call Response We clear the States of Inputs
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response Succeeded!");
        setSubmit(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

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
          <p className="lg:w-2/3 text-center text-sm sm:text-lg leading-6 sm:leading-relaxed font-light text-gray-500 text-base">
            Do not hesitate to get in touch with us
            <br />
            We would love to discuss on your project
          </p>
        </div>
        <Input
          onNameChange={handleName}
          onMessageChange={handleMessage}
          onEmailChange={handleEmail}
        />
      </div>
      <SendBtn onSubmitted={handleSubmit}/>
    </Section>
  );
}
