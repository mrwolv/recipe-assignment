import { Link, useParams } from "react-router-dom";
import { useRecepie } from "../hooks/useRecepie";
import { useAuthContext } from "../context/AuthProvider";

const Header = () => {
  const params = useParams();

  const { onSignout } = useRecepie();
  const { isAuthenticated } = useAuthContext();

  console.log(isAuthenticated)

  const links = [
    {
      id: 1,
      label: "Home",
      link: "/home",
    },
    {
      id: 2,
      label: "About",
      link: "/about",
    },
    {
      id: 3,
      label: "Contact",
      link: "/contact",
    },
    // {
    //   id: 4,
    //   label: "Recepie",
    //   link: `recepie/${params.id}`,
    // },
  ];

  return (
    <header className="bg-yellow-300 h-20 shadow-xl px-5 py-2 ">
      <nav className="flex items-center justify-between">
        <div className="h-16 w-16  ">
          <Link to={"/home"}>
            <img
              src="/logo.jpg"
              alt="logo image"
              className="rounded-full hover:scale-105 hover:cursor-pointer"
            />
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-14 text-[1.2rem]   ">
          {links.map((link) => (
            <Link key={link.id} to={link.link}>
              <li className="hover:cursor-pointer">{link.label}</li>
            </Link>
          ))}
        </ul>
        <div className="text-[1.2rem]">
          {isAuthenticated ? (
            <Link onClick={() => onSignout()} >
              <p className="hover:cursor-pointer">Logout</p>
            </Link>
          ) : (
            <Link to={"/login"}>
              <p className="hover:cursor-pointer">Login</p>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
