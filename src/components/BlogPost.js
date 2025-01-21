import React from "react";

function BlogPost({ image, text1, text2, text3 }) {
  return (
    <div>
      <div className="mb-[3rem] text-center md:text-start bg-white rounded-lg shadow">
        <img src={image} alt="postImg" className="w-full h-auto rounded-md" />
        <h2 className="my-[1rem] font-bold text-[1.2rem]">{text1}</h2>
        <p className="mb-[1rem]">{text2}</p>
        <p className="font-semibold">{text3}</p>
      </div>
    </div>
  );
}

export default BlogPost;
