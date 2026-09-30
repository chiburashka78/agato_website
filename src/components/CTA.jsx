/**
 * CTA.jsx
 *
 * Reusable Call-To-Action section for the Agato website.
 *
 * Purpose:
 * --------
 * Encourages prospective customers to begin the Agato onboarding
 * process.
 *
 * Rather than opening the visitor's email client, the CTA routes
 * directly to the Agato signup page:
 *
 *     CTA
 *      ↓
 *   /signup
 *      ↓
 *   Customer information
 *      ↓
 *   Organization information
 *      ↓
 *   IT point of contact
 *      ↓
 *   Hosted payment checkout
 *
 * Navigation:
 * -----------
 * Because "/signup" is an internal application route, this component
 * uses React Router's <Link> component rather than a normal <a> tag.
 *
 * This allows navigation without requiring a full browser page reload.
 *
 * Future improvements:
 * --------------------
 * - Track CTA conversion events.
 * - Allow CTA messaging to be customized through props.
 * - Support different onboarding plans or service tiers.
 * - Preserve referral/campaign information through signup.
 */

import { Link } from "react-router-dom";


export default function CTA() {
    return (
        <section
            className="cta-section"
            id="get-started"
        >
            <div className="container cta">

                {/* ================================================
                    CTA CONTENT
                    Introduces the Agato onboarding process.
                   ================================================ */}
                <div className="cta-content">

                    <span className="eyebrow">
                        Get started
                    </span>

                    <h2>
                        See your organization from the outside.
                    </h2>

                    <p>
                        Start with a focused external exposure snapshot.
                        Tell us about your organization, identify your
                        technical point of contact, and we'll begin
                        building your outside-in security view.
                    </p>

                </div>


                {/* ================================================
                    PRIMARY CTA
                    Routes visitors into the customer signup flow.
                   ================================================ */}
                <Link
                    className="button button-primary"
                    to="/signup"
                >
                    Get Started

                    <span aria-hidden="true">
                        →
                    </span>
                </Link>

            </div>
        </section>
    );
}