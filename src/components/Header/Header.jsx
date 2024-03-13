import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between gap-5 items-center pb-7 border-b border-[#11111126">
      <h1 className="text-3xl sm:text-[2.5rem] font-bold text-dark-full">Knowledge Cafe</h1>
      <img className="w-14" src={profile} alt="profile" />
    </header>
  );
};

export default Header;
