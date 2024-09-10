import Pricing from '@/components/Pricing';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agnibyte - Pricing page",
  description: "Agnibyte Tech pricing page",
  // other metadata
};
const PricingPage = () => {
  return (
    <div>
      <Pricing />
    </div>
  );
};

export default PricingPage;
