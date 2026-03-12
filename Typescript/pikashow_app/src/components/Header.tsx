import { HiOutlineClipboardList } from "react-icons/hi"

const Header = () => {
    return (
        <div className="b500:px-3 mt-7 text-center">
            <h2 className="text-xl b500:text-2xl sm:text-3xl md:text-4xl font-bold flex gap-3 justify-center">
                <span className="text-primary-color">
                    <HiOutlineClipboardList />
                </span>
                TODO REACT + TYPESCRIPT
                <span className="text-primary-color">
                    <HiOutlineClipboardList />
                </span>
            </h2>
        </div>
    )
}

export default Header