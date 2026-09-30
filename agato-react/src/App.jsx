/**
 * App.jsx
 *
 * Root application component for the Agato website.
 *
 * Purpose:
 * --------
 * Defines the application's client-side routes and places all routed
 * pages inside the shared site layout.
 *
 * Route structure:
 * ----------------
 * /           -> Home
 * /services   -> Services
 * /about      -> About
 * /signup     -> Signup
 * *           -> NotFound
 *
 * Layout:
 * -------
 * All routes are rendered inside <Layout>, which provides the shared:
 *
 * - Navigation bar
 * - Main content area
 * - Footer
 *
 * React Router handles navigation between these routes without requiring
 * a full browser page reload.
 */

import {
    Routes,
    Route
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

export default function App() {
    return (
        <Layout>

            <Routes>

                {/* Homepage */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Services page */}
                <Route
                    path="/services"
                    element={<Services />}
                />

                {/* About page */}
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/signup"
                    element={<Signup />}
                />

                {/* Fallback for any undefined route */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </Layout>
    );
}