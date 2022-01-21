import Layout from "../components/layout/Layout";
import Container from "../components/container/Container";
import Card from "../components/cards/Card";
import About from "../components/context/About";
import Wrapper from "../components/wrapper/Wrapper";
import Separator from "../components/separator/Separator";
import Process from "../components/context/Process";
import Contact from "./contact/Contact";
import H2 from "/components/head_line/H2";

export default function Home() {
  return (
    <Layout>
      <div className=" md:px-0 px-6">
        <Container>
          <About />
        </Container>
        <Container>
          {/* <-- Services --> */}
          <div id="services" className="flex justify-center">
            <H2 className="font-sans font-black text-xl ">SERVICES</H2>
          </div>
          <Separator />
          <Wrapper>
            <Card
              text="Build or scale your web  application. Our Front-end developers and
            UX/UI designers deliver within short time frames, to guarantee a fast go to
            market strategy."
              title="Web Development"
              src={"svg/next-js.svg"}
              alt={'Web Development'}
            />
            <Card
              text=" Advantage of the rapidly growing segment of mobile application development.
              Mobile apps can help increase engagement and foster customer loyalty
              and brand recognition."
              title="Mobile Development"
              src={"svg/react-native.svg"}
              alt={'Mobile Development'}
            />
            <Card
              text="It’s not just about building the site for us. We are all about building strong,
              long-lasting relationships to make sure you get all the backup you need.
              We’ll do things like update all plugins and software to make sure your site is
              always operating at it’s best along."
              title="Maintenance"
              src={"images/maintenance.png"}
              alt={'Maintenance'}
            />
          </Wrapper>
        </Container>
        <Container>
          {/* <-- Services --> */}
          <Wrapper>
            <Card
              text="With the improvement of internet, large part of website traffic
              became mobile-generated. This affected the web design industry,
              pushing it towards minimalistic, lightened and simplistic style.
              In particular, the Mobile First approach emerged, which implies
              creating website design with mobile-oriented layout first,
              and then adapting it to higher screen dimensions."
              title="Web Design"
              alt={'Web Design'}
              src={"svg/css-3.svg"}
            />
            <Card
              text=" Put simply ‘Hosting’ is a service that makes your website
              viewable on the World Wide Web. Without it, your website cannot be
              accessed by the people you want to attract."
              title="Hosting"
              alt={'Hosting'}
              src={"images/network.png"}
            />
            <Card
              text="Search Engine Optimization. In simple terms, it means the process
              of improving your site to increase its visibility when people search for products
              or services related to your business in Google. The better visibility your pages
              have in search results "
              title="Seo Optimization"
              alt={'Seo Optimization'}
              src={"images/seo.png"}
            />
          </Wrapper>
        </Container>
        <Container>
          {/* <-- Services --> */}
          <Wrapper>
            <Card
              text="The tech of the back end is a combination of servers, applications,
              and databases. Responsibilities of backend programmers could involve writing APIs,
              writing code to interact with a database,
              creating libraries, working on business processes and data architecture,
              and much more. It often depends on the specific role and company."
              title="Database"
              alt={'Database'}
              src={"svg/mongodb.svg"}
            />
            <div className="sm:col-start-3">
              <Card
                title="Google Analytics"
                text="We can integrate your web application with Google to track your websites performance."
                src={"svg/google-analytics.svg"}
                alt={'Google Analytics'}
              />
            </div>
          </Wrapper>
        </Container>
        <Container>
          {/* <-- Techs --> */}
          <div className="flex justify-center">
            <H2>TECHNOLOGIES WE WORK WITH</H2>
          </div>
          <Separator />
          <div
            className="items-baseline grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8
          gap-16 pt-4"
          >
            <Card text="HTML" src={"svg/html.svg"} alt={"Html"} />
            <Card
              text="Tailwind"
              src={"svg/tailwindcss.svg"}
              alt={"Tailwind"}
            />
            <Card text="React Js" src={"svg/react.svg"} alt={"react Js"} />
            <Card
              text="Javascript"
              src={"svg/javascript.svg"}
              alt={"Javascript"}
            />
            <Card
              text="React Native"
              src={"svg/react-native.svg"}
              alt={"React Native"}
            />
            <Card text="MongoDb" src={"svg/mongodb.svg"} alt={"MongoDb"} />
            <Card text="Next Js" src={"svg/next-js.svg"} alt={"Next Js"} />
            <Card text="Css" src={"svg/css-3.svg"} alt={"Css"} />
          </div>
        </Container>
      </div>
      <Process>
        <Card title={"Coffee Meeting"} src={"svg/coffee.svg"} alt={"coffee"} />
        <Card title={"Research"} src={"svg/search.svg"} alt={"search"} />
        <Card title={"Design"} src={"svg/design.svg"} alt={"design"} />
        <Card title={"Development"} src={"svg/dev.svg"} alt={"dev"} />
        <Card title={"Delivery"} src={"svg/delivery.svg"} alt={"delivery"} />
        <Card
          title={"Maintenance"}
          src={"svg/maintenance.svg"}
          alt={"maintenance"}
        />
      </Process>
      <Contact />
    </Layout>
  );
}
