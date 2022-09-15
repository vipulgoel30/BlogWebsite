import Logo from "../Logo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import Menu from "./Menu/Menu";
import "./NavBar.css";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {
  return (
    <div className="flex flex-col gap-8 ">
      <div className=" flex justify-between items-center mx-12 relative pt-6">
        <SocialMedia />
        <div className=" absolute left-1/2 -translate-x-1/2">
          <Logo dimensions={0.8} />
        </div>
        <SearchBar />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}
export default NavBar;
