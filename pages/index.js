import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../components/section/Section";
import Card from "../components/cards/Card";
import About from "../components/post/About";
import Wrapper from "../components/wrapper/Wrapper";
import Separator from "../components/separator/Separator";
import Process from "../components/post/Process";

export default function Home() {
  return (
    <Layout>
      <div className=" md:px-0 px-6">
        <Section>
          <About />
        </Section>
        <Section>
          {/* <-- Services --> */}
          <Wrapper>
            <Card
              text="Build or scale your web  application. Our Front-end developers and
            UX/UI designers deliver within short time frames, to guarantee a fast go to
            market strategy."
              title="Web Development"
              src={"next-js.svg"}
            />
            <Card
              text=" Advantage of the rapidly growing segment of mobile application development.
              Mobile apps can help increase engagement and foster customer loyalty
              and brand recognition."
              title="Mobile Development"
              src={"react-native.svg"}
            />
            <Card
              text="It’s not just about building the site for us. We are all about building strong,
              long-lasting relationships to make sure you get all the backup you need.
              We’ll do things like update all plugins and software to make sure your site is
              always operating at it’s best along."
              title="Maintenance"
              src={"maintenance.png"}
            />
          </Wrapper>
        </Section>
        <Section>
          {/* <-- Services --> */}
          <Wrapper>
            <Card
              text="With the improvement of internet, large part of website traffic
              became mobile-generated. This affected the web design industry, pushing it towards minimalistic,
              lightened and simplistic style. In particular, the Mobile First approach emerged, which implies 
              creating website design with mobile-oriented layout first,
              and then adapting it to higher screen dimensions."
              title="Web Design"
              src={"css-3.svg"}
            />
            <Card
              text=" Put simply ‘Hosting’ is a service that makes your website viewable on the World Wide Web.
              Without it, your website cannot be accessed by the people you want to attract."
              title="Hosting"
              src={"network.png"}
            />
            <Card
              text="Search Engine Optimization. In simple terms, it means the process
              of improving your site to increase its visibility when people search for products
              or services related to your business in Google. The better visibility your pages
              have in search results "
              title="Seo Optimization"
              src={"seo.png"}
            />
          </Wrapper>
        </Section>
        <Section>
          {/* <-- Services --> */}
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
            <div className='span-2'>
              <Card
                text="The tech of the back end is a combination of servers, applications, and databases.
                      Responsibilities of backend programmers could involve writing APIs,
                      writing code to interact with a database,
                      creating libraries, working on business processes and data architecture,
                      and much more.
                      It often depends on the specific role and company."
                title="Database"
                src={"mongodb.svg"}
              />
            </div>
            <Card
              title="Google Analytics"
              text="We can integrate your web application with Google to track your websites performance."
              src={"google-analytics.svg"}
            />
          </div>
        </Section>
        <Section>
          {/* <-- Techs --> */}
          <h2 className="text-2xl text-center font-black">
            Technologies We Work With
          </h2>
          <Separator />
          <div className="items-baseline grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-7 pt-4">
            <Card text="HTML" src={"html.svg"} />
            <Card text="Tailwind" src={"tailwindcss.svg"} />
            <Card text="React Js" src={"react.svg"} />
            <Card text="Javascript" src={"javascript.svg"} />
            <Card text="React Native" src={"react-native.svg"} />
            <Card text="MongoDb" src={"mongodb.svg"} />
            <Card text="Nextjs" src={"next-js.svg"} />
            <Card text="Css" src={"css-3.svg"} />
          </div>
        </Section>
      </div>
      <Process />
    </Layout>
  );
}
