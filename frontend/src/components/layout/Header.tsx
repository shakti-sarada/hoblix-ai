import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();

  const firstName =
    user?.name?.split(" ")[0] || "User";

  return (
    <header
      className="
      bg-gradient-to-r
      from-slate-950
      via-slate-900
      to-slate-950
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Welcome back
          </p>

          <h2 className="text-lg font-semibold text-white">
            👋 {firstName}
          </h2>
        </div>

        <div
          className="
          flex h-10 w-10 items-center
          justify-center rounded-full
          bg-indigo-600 font-semibold text-white
          "
        >
          {firstName.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
};

export default Header;