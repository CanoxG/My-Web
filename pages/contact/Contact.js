import React, { useCallback, useState } from "react";
import Container from "../../components/container/Container";
import { Input } from "../../components/Input/Input";
import Separator from "../../components/separator/Separator";
import SendBtn from "../../components/button/SendBtn";
import H2 from '/components/head_line/H2'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );

  const handleEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const handleMessage = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [message]
  );

  // We capture the Input State and dumps it out
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Then Create a Data Model whit State
    const data = {
      name,
      email,
      message,
    };
    console.log("TRIGGER");

    // We need to Post it to our API folder with Fetch Request
    try {
      const response = await fetch(
        `/api/contact`,
        {
          method: "POST",
          headers: {
            Accept: "application/json, paragraph/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // End of Fetch Call Response We clear the States of Inputs
      console.log({ response });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <Container>
      <div id={"contact"} className="px-4 pt-20">
        <div className="flex justify-center">
          <H2>
            CONTACT US
          </H2>
        </div>
        <Separator />
        <div className="flex justify-center">
          <p className="lg:w-2/3 text-center text-sm sm:text-lg leading-6 sm:leading-relaxed font-light text-gray-500 text-base">
            {'Don\'t  hesitate to get in touch with us'}
            <br />
            We would love to discuss on your project
          </p>
        </div>
        <Input
          onNameChange={handleName}
          onMessageChange={handleMessage}
          onEmailChange={handleEmail}
          email={email}
          fullName={name}
          msg={message}
        />
      </div>
      <SendBtn onSubmitted={handleSubmit} />
    </Container>
  );
}
