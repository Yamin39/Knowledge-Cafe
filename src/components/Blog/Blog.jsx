import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return <div>blog</div>;
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
