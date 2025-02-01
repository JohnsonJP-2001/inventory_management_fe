import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Views/LoginPage/LoginPage";
import HomePage from "../Views/Home/Home";
import VendorPage from "../Views/Vendor/Vendor";
import ProductPage from "../Views/Product/Product";
import EmployeePage from "../Views/Employee/Employee";

const RouteDetails: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* For Login Page */}
                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                {/* for home page */}
                <Route
                    path="/"
                    element={<HomePage />}
                />

                {/* for vendor page */}
                <Route
                    path="/vendor"
                    element={<VendorPage />}
                />

                {/* for product page */}
                <Route
                    path="/product"
                    element={<ProductPage />}
                />

                {/* for employee page */}
                <Route
                    path="/employee"
                    element={<EmployeePage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteDetails