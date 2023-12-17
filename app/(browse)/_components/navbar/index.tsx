import { Logo } from "./logo";
import Search from "./search";
import Actions from "./actions";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-2 flex justify-between items-center shadow-sm">
           <Logo />
           <Search/>
           <Actions/>
        </nav>
      );
}
 
export default Navbar;