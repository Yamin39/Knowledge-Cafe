import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleCountTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  console.log(blogs);

  return (
    <div className="md:w-[60%]">
      {blogs.map((blog) => (
        <Blog key={blog.id} handleBookmark={handleBookmark} handleCountTime={handleCountTime} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleCountTime: PropTypes.func.isRequired,
};
