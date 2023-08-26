
import { NotificationIcon } from "./icons/NotificationIcon";

const NavComp = () => {
  return (
    <nav className="w-full shadow-header px-6 flex justify-between items-center h-fit py-4 ">
      <h1 className="font-kanit text-xl font-semibold text-primary ">TEST</h1>
      <div className="hidden lg:flex items-center gap-3 mr-8 ">
        <div className="flex items-center gap-4 mr-5 ">
          {navList.map((item, i) => (
            <button
              className={` hover:text-primary text-lg ${
                item.toLowerCase() === "wallet" ? "text-primary underline underline-offset-2  " : "text-myGrey "
              } `}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="text-myGrey">
          <NotificationIcon alert={false} />
        </button>
      </div>
    </nav>
  );
};
export default NavComp;

const navList = ["Home", "Wallet", "Contact"];
