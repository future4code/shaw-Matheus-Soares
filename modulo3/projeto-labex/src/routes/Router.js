import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import AdminHomePage from "../pages/AdminHomePage"
import ListTripsPage from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage"


export const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="Adm" element={<AdminHomePage/>}/>
                <Route path="AppForm" element={<ApplicationFormPage/>}/>
                <Route path="CreateTrip" element={<CreateTripPage/>}/>
                <Route path="ListTrips" element={<ListTripsPage/>}/>
                <Route path="Login" element={<LoginPage/>}/>
                <Route path="TripDetails" element={<TripDetailsPage/>}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}