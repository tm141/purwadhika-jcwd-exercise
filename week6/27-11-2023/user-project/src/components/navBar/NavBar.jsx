import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="p-5 bg-[#008081] justify-center">
            <div className="list-none flex justify-center text-xl text-white">
                <Link to="/" className="px-5 hover:text-[#b6b6b6]">Users</Link>
                <Link to="/create" className="px-5 hover:text-[#b6b6b6]">Create</Link>
            </div>
        </div>
    )
}