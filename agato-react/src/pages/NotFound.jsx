/**
 * NotFound.jsx
 *
 * Fallback page for routes that do not exist within the Agato website.
 *
 * Purpose:
 * --------
 * Provides a clear 404 message when a visitor navigates to an
 * undefined route.
 *
 * Example:
 *
 * If the application supports:
 *
 * /
 * /services
 * /about
 *
 * but a visitor requests:
 *
 * /something-that-does-not-exist
 *
 * React Router should render this component.
 *
 * The visitor is then given a direct link back to the homepage.
 */

import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <section className="page-hero">

            <div className="container narrow">

                {/* HTTP-style error identifier */}
                <span className="eyebrow">
                    404
                </span>

                {/* Error message */}
                <h1>
                    Nothing exposed here.
                </h1>

                {/* Supporting explanation */}
                <p className="hero-copy">
                    The page you requested does not exist.
                </p>

                {/* Return to the Agato homepage */}
                <Link
                    className="button button-primary"
                    to="/"
                >
                    Return Home
                </Link>

            </div>

        </section>
    );
}