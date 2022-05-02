import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import AdminHomePage from "../pages/AdminHomePage"
import ListTripsPage from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage"
import styled from "styled-components"

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`

export const Router = () => {
    return (
        <AppContainer>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin/trips/list" element={<AdminHomePage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage />} />
                    <Route path="/admin/trips/:id" element={<CreateTripPage />} />
                    <Route path="/trips/list" element={<ListTripsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/trips/create" element={<TripDetailsPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    )
}