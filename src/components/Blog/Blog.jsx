import PropTypes from "prop-types";
import { useState } from "react";

const Blog = ({ blog, handleBookmark }) => {
  const { cover, title, hashtags, reading_time, author, author_img, posted_date } = blog;

  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  const fillColor = toggle ? "#11111159" : "none";

  return (
    <div className="pb-10 border-b border-[#1111111A] mb-10">
      <img className="rounded-lg w-full" src={cover} alt={title} />
      <div className="mt-8 flex justify-between items-center">
        <div className="flex justify-center items-center gap-6">
          <img className="w-14" src={author_img} alt={author} />
          <div>
            <h3 className="font-bold text-xl sm:text-2xl text-dark-full">{author}</h3>
            <p className="text-dark-60 font-semibold">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-dark-60">
          <p>{reading_time} min read</p>
          <button
            onClick={() => {
              handleToggle();
              handleBookmark(title);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h1 className="text-dark-full font-bold text-4xl leading-[150%] my-4">{title}</h1>
      <div className="flex gap-4 text-dark-60 font-medium text-xl mb-5">
        {hashtags.map((hashtag, i) => (
          <a href="" key={i}>
            <span>#{hashtag}</span>
          </a>
        ))}
      </div>
      <button className="text-[#6047EC] font-semibold text-xl underline hover:opacity-85 active:scale-95 transition-all">Mark as read</button>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
};
