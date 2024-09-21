import React from "react";
import Image from "next/image";

// Images
import blog1 from "../../../../../src/assets/images/donation/blog (1).jpg";
import blog2 from "../../../../../src/assets/images/donation/blog (2).jpg";
import blog3 from "../../../../../src/assets/images/donation/blog (3).jpg";
import blog4 from "../../../../../src/assets/images/donation/blog (4).jpg";
import blog5 from "../../../../../src/assets/images/donation/blog (5).jpg";
import blog6 from "../../../../../src/assets/images/donation/blog (6).jpg";

const Blog = () => {
  const images = [
    {
      id: 1,
      blog: blog1,
    },
    {
      id: 2,
      blog: blog2,
    },
    {
      id: 3,
      blog: blog3,
    },
    {
      id: 4,
      blog: blog4,
    },
    {
      id: 5,
      blog: blog5,
    },
    {
      id: 6,
      blog: blog6,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-3 bg-white shadow p-5 mt-10 rounded">
      {images.map((img) => (
        <div key={img.id}>
          <div>
            <Image
              src={img.blog}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
