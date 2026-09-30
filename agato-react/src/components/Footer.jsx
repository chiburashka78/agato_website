/**
 * Footer.jsx
 *
 * Global footer component for the Agato website.
 *
 * Purpose:
 * --------
 * Displays the Agato brand, a short description of the company,
 * navigation links, and the primary contact email address.
 *
 * This component is intended to be rendered by Layout.jsx so that
 * the same footer appears consistently across every page.
 *
 * Navigation:
 * - Internal website navigation uses React Router's <Link> component.
 * - External actions, such as email, use standard HTML <a> elements.
 */

import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="site-footer">

            <div className="container footer-inner">

                {/* Company identity and description */}
                <div className="footer-brand">

                    <div className="brand">

                        <span
                            className="brand-mark"
                            aria-hidden="true"
                        >
                            A
                        </span>

                        <span>
                            Agato
                        </span>

                    </div>

                    <p className="footer-description">
                        External exposure intelligence for lean security
                        and IT teams.
                    </p>

                </div>


                {/* Footer navigation */}
                <nav
                    className="footer-links"
                    aria-label="Footer navigation"
                >
                    <Link to="/services">
                        Services
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <a href="mailto:contact@agato.ai">
                        contact@agato.ai
                    </a>
                </nav>

            </div>

        </footer>
    );
}