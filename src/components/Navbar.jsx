import logo from "../assets/food.webp";
const Navbar = () => {
	return (
		<div className="py-2">
			<nav className="relative px-4 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
				<a className="text-3xl font-bold leading-none" href="#">
					<img className="w-12 h-16" src={logo} alt="" />
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#4F46E5"
						className="w-8 h-8"
					>
						<path
							fillRule="evenodd"
							d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
							clipRule="evenodd"
						/>
						<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
					</svg> */}
				</a>
				<div className="lg:hidden">
					<button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
						<svg
							className="block h-4 w-4 fill-current"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 lg:gap-10">
					<li>
						<a
							className="text-2xl text-gray-500 hover:text-gray-600 dark:text-gray-300"
							href="#"
						>
							Home
						</a>
					</li>

					<li>
						<a className="text-2xl text-indigo-600 font-bold" href="#">
							About Us
						</a>
					</li>

					<li>
						<a
							className="text-2xl text-gray-500 hover:text-gray-600 dark:text-gray-300"
							href="#"
						>
							Services
						</a>
					</li>

					<li>
						<a
							className="text-2xl text-gray-500 hover:text-gray-600 dark:text-gray-300"
							href="#"
						>
							Pricing
						</a>
					</li>

					<li>
						<a
							className="text-2xl text-gray-500 hover:text-gray-600 dark:text-gray-300"
							href="#"
						>
							Contact
						</a>
					</li>
				</ul>
				<div className="space-x-2 hidden lg:block">
					<button className="rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-indigo-500 ">
						Login
					</button>
					<button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
						SignUp
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
