import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="w-[90%] left-[5%] py-4 flex justify-between items-center fixed">
        <h1 className="text-3xl font-thin text-white">GreatStay</h1>
        <div className="flex justify-around items-center text-white text-sm gap-8">
            <Link to='/' className="hover:outline-2">Home</Link>
            <Link to='/'>Search</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>About us</Link>
            <button className="border-[0.5px] border-gray-200 rounded-[15px] px-4 py-2 hover:bg-white hover:text-black">Sign In</button>
            <button className="bg-white text-black rounded-[15px] px-4 py-2">Register</button>
        </div>
    </nav>
  )
}

export default Navbar