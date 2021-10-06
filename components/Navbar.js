import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <nav>
        <Image src="/volks.png" width={80} height={55} />

        <h1>VolksVibes</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
          {user === null ? (
            <li onClick={login} className="btn">
              Login/Signup
            </li>
          ) : (
            <li onClick={logout} className="btn">
              Log out
            </li>
          )}
        </ul>
      </nav>
      <div className="banner">
        <Image src="/volks banner.png" width="auto" height="auto" />
      </div>
    </div>
  );
}
