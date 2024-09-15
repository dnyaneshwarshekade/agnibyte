import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agnibyte - Blog",
  description: "Read the latest insights and updates from Agnibyte Tech Pvt Ltd",
};

const BlogPage = async () => {


  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore our latest posts and updates on technology and innovation."
      />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Our Blog
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
          Stay updated with the latest news and insights from Agnibyte Tech.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Blog Listings */}
          <div className="flex-1">
            <div className="space-y-6">
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
