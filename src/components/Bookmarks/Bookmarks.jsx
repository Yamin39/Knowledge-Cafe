import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-[40%] space-y-6">
      <div className="text-center bg-[#6047EC1A] border border-[#6047EC] rounded-lg py-5 px-12 h-fit">
        <h3 className="text-2xl font-bold text-[#6047EC]">
          Spent time on read :
          <br className="md:hidden" /> 177 min
        </h3>
      </div>
      <div className="bg-[#1111110D] rounded-lg p-7">
        <h3 className="text-dark-full text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h3>
        <div>
          {bookmarks.map((bookmark, i) => (
            <h4 key={i} className="text-lg font-semibold text-dark-full p-5 mt-4 bg-white rounded-lg">
              {bookmark}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
