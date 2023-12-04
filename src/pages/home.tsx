import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";



export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);


	return (
		<div>
			{isLoading ? (
				< Loader />
			) : (<div>
				<Navbar />

				<div>
					<Sidebar />
				</div>
			</div>

			)
			}
		</div >
	);
}