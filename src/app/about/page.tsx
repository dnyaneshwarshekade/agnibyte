import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Agnibyte ",
  description: "This is About Page of a AgniByte Tech",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About AgniByte"
        description="AgniByte Tech Pvt Ltd was founded by  friends with a shared passion for technology and diverse backgrounds in computer science and 
        electronics. Their dream was to create a company that offered top-notch IT solutions while remaining accessible and affordable. From their humble beginnings, they built a startup driven by innovation and a 
        commitment to excellence. Today, with over a decade of experience, we continue to uphold the vision and values that started it all."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
