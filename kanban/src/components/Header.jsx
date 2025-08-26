import { Link, useLocation } from "react-router-dom"
import { Cart } from "./Cart"
import { ThemeToggle } from "./ThemeToggle"

export const Header = () => {
  const location = useLocation()

  return (
    <header className="w-full shadow">
      <div className="flex items-center justify-between p-4 m-auto md:w-[80%]">
        <h1 className="text-2xl font-bold">🛍️ Shop</h1>
        <div className="flex items-center gap-3">
          <nav>
            <ul className="flex items-center gap-3 h-[40px] rounded-full bg-gray-200 text-black p-2 border border-gray-400 font-bold">
              <li className="flex items-center">
                <Link
                  to="/catalogo"
                  className={location.pathname === "/catalogo" ? "bg-blue-600 text-white rounded-full px-2 py-1" : ""}
                >
                  Catálogo
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/kanban"
                  className={location.pathname === "/kanban" ? "bg-blue-600 text-white rounded-full px-2 py-1" : ""}
                >
                  Kanban
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
          <Cart />
        </div>
      </div>
    </header>
  )
}
