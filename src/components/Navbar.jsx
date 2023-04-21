import logo from "../assets/logo.webp";

const Navbar = () => {
	return (
		<div className="pb-10 pt-2">
			<nav className="relative px-8 py-0 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
				<a
					className="text-3xl font-bold leading-none flex items-center space-x-4"
					href="#"
				>
					<span>
						<img className="w-24 h-24" src={logo} alt="" />
					</span>
					<span className="text-gray-300 dark:text-gray-300 text-xl">
						CUISINE CURATOR
					</span>
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
							className="text-2xl text-rose-400 hover:text-rose-600 font-bold"
							href="#"
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="text-2xl text-gray-300 hover:text-gray-500 dark:text-gray-300"
							href="#"
						>
							Ingredients
						</a>
					</li>
					<li>
						<a
							className="text-2xl text-gray-300 hover:text-gray-500 dark:text-gray-300"
							href="#"
						>
							Meals
						</a>
					</li>
				</ul>
				<ul className="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
					<li>
						<div className="relative border-[1.5px] border-rose-500 rounded-lg p-1">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 text-gray-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</span>
							<input
								type="text"
								className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 "
								placeholder="Search for a Meal..."
							/>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
