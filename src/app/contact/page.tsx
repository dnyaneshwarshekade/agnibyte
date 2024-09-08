import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agnibyte - Emporing your Buisness Journey ",
  description: "Agnibyte Tech Contact page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Contact us if you need any prouct support"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
