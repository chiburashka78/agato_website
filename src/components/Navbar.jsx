/**
 * Navbar.jsx
 *
 * Global navigation component for the Agato website.
 *
 * Purpose:
 * --------
 * Provides the primary navigation displayed at the top of every page.
 *
 * The navbar contains:
 * - Agato branding with a link back to the homepage.
 * - Primary navigation links.
 * - A call-to-action for requesting an external exposure snapshot.
 *
 * Navigation:
 * -----------
 * <Link> is used for the Agato logo because it navigates internally
 * without causing a full page reload.
 *
 * <NavLink> is used for primary navigation because React Router can
 * determine whether each link represents the currently active route.
 *
 * The Request Snapshot button currently uses a standard mailto link
 * because it launches the visitor's email client rather than navigating
 * to another React route.
 */

import {
    Link,
    NavLink
} from "react-router-dom";


export default function Navbar() {
    return (
        <header className="site-header">

            <div className="container nav">

                {/* Agato brand / homepage link */}
                <Link
                    className="brand"
                    to="/"
                    aria-label="Agato home"
                >
                    <span
                        className="brand-mark"
                        aria-hidden="true"
                    >
                        A
                    </span>

                    <span>
                        Agato
                    </span>
                </Link>


                {/* Primary website navigation */}
                <nav
                    className="nav-links"
                    aria-label="Main navigation"
                >
                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/services">
                        Services
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>

                    <NavLink to="/signup">
                        Register
                    </NavLink>
                    
                </nav>


                {/* Primary navigation CTA */}
                <a
                    className="button button-primary nav-cta"
                    href="mailto:contact@agato.ai?subject=Agato%20External%20Exposure%20Snapshot"
                >
                    Request Snapshot
                </a>

            </div>

        </header>
    );
}