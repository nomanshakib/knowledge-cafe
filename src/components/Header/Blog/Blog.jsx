import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
    id
  } = blog;
  return (
    <div className="mb-10 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="mb-8 mt-4">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-800 font-bold underline"
      >
        Mark As Read
      </button>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
