import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Sections/Hero";
import FeaturePost from "./Sections/FeaturePost";
import AllPosts from "./Sections/AllPosts";
import Footer from "../../components/Footer";

function Blog() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturePost />
      <AllPosts />
      <Footer />
    </div>
  );
}

export default Blog;
