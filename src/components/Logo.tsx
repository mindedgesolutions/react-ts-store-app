import { Armchair } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={`/`}
      className="hidden lg:flex justify-center items-center bg-primary rounded-lg p-1 text-muted"
    >
      <Armchair className="w-8 h-8" />
    </Link>
  );
};
export default Logo;
