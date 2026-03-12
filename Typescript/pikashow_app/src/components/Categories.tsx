import { NavLink } from "react-router-dom"

interface BtnLink {
  id: number
  text: string
  to: string
}

const Categories = () => {

  const categoriesBtn: BtnLink[] = [
    { id: 1, text: "All", to: "/" },
    { id: 2, text: "Active", to: "active" },
    { id: 3, text: "Completed", to: "completed" }
  ]

  return (
    <div className="mt-5">
      <div className="flex justify-between border-b border-gray-100">
        {categoriesBtn.map((btn) => (
          <NavLink
            key={btn.id}
            to={btn.to}
            className={({ isActive }) =>
              `p-1 text-lg font-medium ${
                isActive
                  ? "border-primary-color border-b-2"
                  : "text-gray-400"
              }`
            }
          >
            {btn.text}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Categories