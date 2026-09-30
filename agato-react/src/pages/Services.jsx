/**
 * Services.jsx
 *
 * Services page for the Agato website.
 *
 * Purpose:
 * --------
 * Describes Agato's core external security services and explains the
 * methodology used to turn public internet signals into actionable
 * security findings.
 *
 * Page structure:
 * ---------------
 * 1. Services hero
 * 2. Core capabilities
 * 3. Agato methodology
 * 4. Call to action
 *
 * Data-driven sections:
 * ---------------------
 * Core services are stored as structured objects and rendered into
 * reusable <FeatureCard> components.
 *
 * Keeping service content separate from presentation makes the service
 * catalog easier to read, modify, reorder, and eventually move into an
 * API or content management system if necessary.
 */

import FeatureCard from "../components/FeatureCard";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";


/**
 * Core services offered by Agato.
 *
 * Each service contains:
 *
 * {
 *     title:       Name of the service.
 *     description: Short explanation of what the service provides.
 * }
 */
const services = [
    {
        title: "Internet-Facing Asset Discovery",
        description:
            "Map public-facing infrastructure, exposed services, DNS records, certificates, vendors, hosting signals, and externally visible technologies."
    },
    {
        title: "Public Exposure Monitoring",
        description:
            "Review service drift, DNS and email posture, certificate changes, vendor signals, and newly exposed infrastructure."
    },
    {
        title: "Internet-Exposed Infrastructure Validation",
        description:
            "Validate meaningful findings with authorized, disciplined testing limited to approved internet-facing systems."
    },
    {
        title: "Exposure & Ownership Analysis",
        description:
            "Separate customer-owned infrastructure, dedicated hosting, shared services, and third-party platforms to reduce false attribution."
    },
    {
        title: "Threat & Vulnerability Context",
        description:
            "Add attacker-relevant context to exposed technologies and services so teams understand why a finding matters."
    },
    {
        title: "Remediation Reporting",
        description:
            "Turn technical evidence into prioritized fixes for operators and concise risk summaries for leadership."
    }
];


/**
 * High-level methodology used during Agato assessments.
 *
 * Unlike the services array, this list is small and tightly coupled
 * to the page presentation, so the cards are currently written
 * directly in JSX.
 */
const methodology = [
    {
        number: "01",
        title: "Discover",
        description:
            "Identify domains, public assets, services, ownership signals, and exposed technologies."
    },
    {
        number: "02",
        title: "Analyze",
        description:
            "Correlate OSINT, DNS, service data, hosting signals, certificates, and technical indicators."
    },
    {
        number: "03",
        title: "Prioritize",
        description:
            "Focus on exposure, exploitability, business relevance, and urgency—not raw alert volume."
    },
    {
        number: "04",
        title: "Report",
        description:
            "Deliver evidence, executive context, technical detail, and recommended fixes."
    }
];


export default function Services() {
    return (
        <>

            {/* =========================================================
                SERVICES HERO
                Introduces Agato's service offering and establishes the
                focus on actionable external security intelligence.
               ========================================================= */}
            <section className="page-hero">

                <div className="container narrow">

                    <span className="eyebrow">
                        Services
                    </span>

                    <h1>
                        External security intelligence built around action.
                    </h1>

                    <p className="hero-copy">
                        Reconnaissance, validation, monitoring, and reporting
                        focused on what can actually be seen and acted on from
                        the public internet.
                    </p>

                </div>

            </section>


            {/* =========================================================
                CORE CAPABILITIES
                Displays the primary external security services offered
                by Agato.
               ========================================================= */}
            <section className="section">

                <div className="container">

                    <SectionHeader
                        eyebrow="Core capabilities"
                        title="Focused assessments without unnecessary noise."
                        copy="Agato combines external discovery with context and validation so your team can spend time fixing the right things."
                    />


                    <div className="card-grid">

                        {services.map((service, index) => (
                            <FeatureCard
                                key={service.title}
                                number={String(index + 1).padStart(2, "0")}
                                title={service.title}
                            >
                                {service.description}
                            </FeatureCard>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                METHODOLOGY
                Explains the high-level process used to move from
                discovery to actionable remediation guidance.
               ========================================================= */}
            <section className="section section-alt">

                <div className="container">

                    <SectionHeader
                        eyebrow="Method"
                        title="Adversary-minded analysis. Business-ready output."
                    />


                    <div className="process-grid">

                        {methodology.map((step) => (
                            <FeatureCard
                                key={step.number}
                                number={step.number}
                                title={step.title}
                            >
                                {step.description}
                            </FeatureCard>
                        ))}

                    </div>

                </div>

            </section>


            {/* Shared site call-to-action */}
            <CTA />

        </>
    );
}