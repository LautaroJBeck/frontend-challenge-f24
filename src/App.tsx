import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from "./components/SignUp/SignUp"
import ShareSchedule from "./components/Share/ShareSchedule"
import MainPage from "./components/Main/MainPage"
import { SelectedProvider } from "./context/SelectedContext"
import { CartProvider } from "./context/CartContext"
import { SearchProvider } from "./context/SearchContext"
import MainChechout from "./components/Checkout/MainChechout"
import PublicationHandler from "./components/Share/PublicationHandler"

function App() {
	return (
		<>
		<SearchProvider>
			<CartProvider>
				<SelectedProvider>
					<BrowserRouter>
						<Routes>
							<Route index element={<MainPage/>}></Route>
							<Route path="/signup" element={<SignUp/>}></Route>
							<Route path="/share" element={<PublicationHandler/>}></Route>
							<Route path="/checkout" element={<MainChechout/>}></Route>
							<Route path="*" element={<h1>404 Not Found</h1>}></Route>
						</Routes>
					</BrowserRouter>
				</SelectedProvider>
			</CartProvider>
		</SearchProvider>


		</>
	)
}

export default App
