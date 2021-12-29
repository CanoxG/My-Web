import React from "react";
import Text from "../text/Text";
import Separator from "../separator/Separator";

export default function About() {
  return (
    <div className="text-center text-sm sm:text-lg">
      <h1
        id={"about"}
        className="font-sans font-black text-xl sm:text-3xl pt-14"
      >
        WE ARE LORIEN AGENCY
      </h1>
      <Separator />
      <Text>
        <strong className="text-black font-black">Lorien</strong> is a web
        solutions company which helps clients to integrate custom responsive web
        applications and mobile applications into their businesses. We bring
        digital transformation to big companies, medium-sized agencies, and
        smaller startups. With an ever developing online world, it’s important
        for your business to stand out in the online industry - this is where
        Lorien Agency comes in.
      </Text>
    </div>
  );
}
