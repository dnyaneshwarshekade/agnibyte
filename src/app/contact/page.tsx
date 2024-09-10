import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agnibyte - Contact Page",
  description: "Agnibyte Tech Contact page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Contact us if you need any IT service"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
