import {
  MessageSquare,
  User,
  CalendarDays,
  LogOut,
  Sparkles,
  Plus,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useChat } from "../../hooks/useChat";

const Sidebar = () => {
  const { logout } = useAuth();

  const { clearMessages } =
    useChat();

  const navigate =
    useNavigate();

  const handleNewChat = () => {
    clearMessages();
    navigate("/chat");
  };

  return (
    <aside
      className="
      glass
      flex
      w-72
      flex-col
      border-r
      border-white/10
      p-5
      text-white
      "
    >
      {/* Logo */}

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-indigo-600
            "
          >
            <Sparkles size={20} />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Hoblix AI
            </h1>

            <p className="text-xs text-slate-400">
              Coworking Assistant
            </p>
          </div>
        </div>
      </div>

      {/* New Chat */}

      <button
        onClick={handleNewChat}
        className="
        mb-6
        flex
        items-center
        gap-3
        rounded-xl
        bg-indigo-600
        px-4
        py-3
        font-medium
        text-white
        transition-all
        duration-300
        hover:bg-indigo-500
        hover:shadow-lg
        "
      >
        <Plus size={18} />
        New Chat
      </button>

      <div className="mb-4 border-t border-white/10" />

      {/* Navigation */}

      <nav className="flex flex-1 flex-col gap-2">
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `
            flex items-center gap-3
            rounded-xl px-4 py-3
            transition-all duration-300
            ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "hover:bg-white/10 text-slate-300"
            }
          `
          }
        >
          <MessageSquare size={18} />
          Chat
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `
            flex items-center gap-3
            rounded-xl px-4 py-3
            transition-all duration-300
            ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "hover:bg-white/10 text-slate-300"
            }
          `
          }
        >
          <User size={18} />
          Profile
        </NavLink>

        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `
            flex items-center gap-3
            rounded-xl px-4 py-3
            transition-all duration-300
            ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "hover:bg-white/10 text-slate-300"
            }
          `
          }
        >
          <CalendarDays size={18} />
          Bookings
        </NavLink>
      </nav>

      {/* Logout */}

      <button
        onClick={logout}
        className="
        mt-auto
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        px-4
        py-3
        text-slate-300
        transition-all
        duration-300
        hover:bg-red-500/20
        hover:text-red-300
        "
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;