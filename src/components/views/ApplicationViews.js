import { Outlet, Route, Routes } from "react-router-dom"
import { DataList } from "../DataList/DataList"
import { ProductsList } from "../Products/ProductsList"


export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your one-stop-shop to get all your candy needs</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <DataList /> } />
                <Route path="products" element={ <ProductsList /> } />

         
            </Route>
        </Routes>
    )
}
