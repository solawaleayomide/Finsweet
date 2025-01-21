import React from "react";
import BlogPost from "../../../components/BlogPost";
import { AllPost } from "../../../data/Data8";

function AllPosts() {
  return (
    <div className="px-[10%] md:px-[7%] mt-[3rem] md:mt-[5rem]">
      <h2 className="font-bold text-[2rem] mt-[2.5rem] mb-[3.5rem]">
        All Post
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 w-full">
        {AllPost.map((post, _i) => {
          return (
            <BlogPost
              image={post.image}
              text1={post.text1}
              text2={post.text2}
              text3={post.text3}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllPosts;
