import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo user",
  });

  const handleLogout = () => {
    setUser(null);
    navigate(`/`);
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant={"link"} size={"sm"} onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-2 justify-center items-center -mr-4">
            <Button variant={"link"} size={"sm"} asChild>
              <Link to={`/login`}>Sign in / Guest user</Link>
            </Button>
            <Button variant={"link"} size={"sm"} asChild>
              <Link to={`/register`}>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
