/**
 * Home.jsx
 *
 * Primary landing page for the Agato website.
 *
 * Purpose:
 * --------
 * Introduces Agato's core value proposition and explains:
 *
 * - What Agato does.
 * - What external security capabilities Agato provides.
 * - How the Agato analysis workflow operates.
 * - Why the platform is useful for lean IT and security teams.
 * - How a prospective customer can request an exposure snapshot.
 *
 * Page structure:
 * ---------------
 * 1. Hero
 * 2. Capabilities
 * 3. Analysis process
 * 4. Lean-team value proposition
 * 5. Call to action
 *
 * Data-driven sections:
 * ---------------------
 * The capabilities and process sections are generated from arrays
 * defined below. This prevents repetitive FeatureCard markup and makes
 * it easy to add, remove, or reorder capabilities and workflow steps.
 */

import { Link } from "react-router-dom";

import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import CTA from "../components/CTA";


/**
 * Core Agato capabilities displayed on the homepage.
 *
 * Each array entry contains:
 *
 * [
 *     capability title,
 *     capability description
 * ]
 *
 * The homepage maps these entries into <FeatureCard> components.
 */
const capabilities = [
    [
        "Attack Surface Analysis",
        "Identify exposed domains, IPs, services, DNS records, certificates, vendors, and technologies that shape real-world external risk."
    ],
    [
        "Shadow IT Discovery",
        "Surface forgotten infrastructure, ambiguous ownership, unmanaged assets, and externally reachable systems internal teams may not track."
    ],
    [
        "Threat Context",
        "Enrich findings with OSINT, vulnerability context, and attacker-relevant infrastructure intelligence."
    ],
    [
        "Infrastructure Hardening",
        "Translate public exposure into practical remediation that reduces attack paths and improves baseline posture."
    ],
    [
        "Internet-Facing Validation",
        "Use authorized, disciplined checks to distinguish meaningful findings from generic scanner output."
    ],
    [
        "Public Exposure Monitoring",
        "Review public assets, DNS posture, exposed services, certificate signals, vendor indicators, and security drift."
    ]
];


/**
 * High-level Agato analysis workflow.
 *
 * Each array entry contains:
 *
 * [
 *     step number,
 *     step title,
 *     step description
 * ]
 */
const process = [
    [
        "01",
        "Discover",
        "Map internet-facing infrastructure and ownership signals."
    ],
    [
        "02",
        "Enrich",
        "Correlate OSINT, technical evidence, historical context, and vulnerability intelligence."
    ],
    [
        "03",
        "Validate",
        "Confirm what is exposed, reachable, and worth prioritizing."
    ],
    [
        "04",
        "Report",
        "Deliver concise findings, evidence, and remediation guidance."
    ]
];


export default function Home() {
    return (
        <>

            {/* =========================================================
                HERO
                Introduces Agato's primary value proposition and provides
                the two main visitor actions.
               ========================================================= */}
            <section className="hero">

                <div className="container hero-grid">

                    {/* Hero messaging */}
                    <div className="hero-content">

                        <span className="eyebrow">
                            External Exposure Intelligence
                        </span>

                        <h1>
                            Know what attackers can see.
                        </h1>

                        <p className="hero-copy">
                            Agato gives lean IT and security teams an
                            outside-in view of their organization—discovering
                            public assets, validating meaningful exposure,
                            and turning technical evidence into prioritized
                            remediation.
                        </p>


                        {/* Primary hero actions */}
                        <div className="hero-actions">

                            <a
                                className="button button-primary"
                                href="mailto:contact@agato.ai?subject=Agato%20External%20Exposure%20Snapshot"
                            >
                                Request a Snapshot
                            </a>

                            <Link
                                className="button"
                                to="/services"
                            >
                                Explore Services
                            </Link>

                        </div>


                        {/* Short value indicators */}
                        <div
                            className="trust-row"
                            aria-label="Agato benefits"
                        >
                            <span>
                                Outside-in visibility
                            </span>

                            <span>
                                Evidence-backed findings
                            </span>

                            <span>
                                Actionable remediation
                            </span>
                        </div>

                    </div>


                    {/* =================================================
                        EXTERNAL POSTURE VISUAL
                        Decorative interface illustrating the stages and
                        signals used during external exposure analysis.
                       ================================================= */}
                    <div className="visual-card">

                        <div className="scan-ui">

                            {/* Visual header */}
                            <div className="scan-top">

                                <span>
                                    EXTERNAL POSTURE
                                </span>

                                <span className="live">
                                    <i aria-hidden="true" />
                                    MONITORING
                                </span>

                            </div>


                            {/* Primary visual metric */}
                            <div className="metric">

                                <small>
                                    PUBLIC ASSETS
                                </small>

                                <strong>
                                    Discover → Validate → Prioritize
                                </strong>

                            </div>


                            {/* Observed external signals */}
                            <div className="signal">
                                <span>
                                    DNS &amp; Certificates
                                </span>

                                <b>
                                    Mapped
                                </b>
                            </div>


                            <div className="signal">
                                <span>
                                    Internet-facing services
                                </span>

                                <b>
                                    Observed
                                </b>
                            </div>


                            <div className="signal">
                                <span>
                                    Ownership signals
                                </span>

                                <b>
                                    Correlated
                                </b>
                            </div>


                            <div className="signal">
                                <span>
                                    Remediation
                                </span>

                                <b>
                                    Prioritized
                                </b>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                CAPABILITIES
                Displays the primary external security capabilities
                currently offered by Agato.
               ========================================================= */}
            <section className="section">

                <div className="container">

                    <SectionHeader
                        eyebrow="What Agato does"
                        title="Reduce exposed risk before it becomes an incident."
                        copy="Serious external visibility without enterprise tool sprawl. Agato focuses on the public attack surface and the findings that deserve action."
                    />


                    <div className="card-grid">

                        {capabilities.map(
                            ([title, description], index) => (
                                <FeatureCard
                                    key={title}
                                    number={String(index + 1).padStart(2, "0")}
                                    title={title}
                                >
                                    {description}
                                </FeatureCard>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =========================================================
                PROCESS
                Explains Agato's high-level external exposure analysis
                workflow from discovery through reporting.
               ========================================================= */}
            <section className="section section-alt">

                <div className="container">

                    <SectionHeader
                        eyebrow="How it works"
                        title="From public signal to fix list."
                        copy="A disciplined workflow that combines discovery, context, validation, and reporting."
                    />


                    <div className="process-grid">

                        {process.map(
                            ([number, title, description]) => (
                                <FeatureCard
                                    key={number}
                                    number={number}
                                    title={title}
                                >
                                    {description}
                                </FeatureCard>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =========================================================
                LEAN TEAMS
                Explains the operational value of Agato for organizations
                without large dedicated security teams.
               ========================================================= */}
            <section className="section">

                <div className="container split">

                    {/* Section heading */}
                    <div className="section-intro">

                        <span className="eyebrow">
                            Built for lean teams
                        </span>

                        <h2>
                            Security clarity without unlimited headcount.
                        </h2>

                    </div>


                    {/* Supporting value proposition */}
                    <div className="stack">

                        <p>
                            Find forgotten systems, unclear ownership,
                            open services, and infrastructure security
                            debt before they become easy attack paths.
                        </p>

                        <p>
                            Move from reactive firefighting to proactive
                            external monitoring, hardening, validation,
                            and risk prioritization.
                        </p>

                        <p>
                            Give technical teams and leadership concise
                            findings supported by evidence and practical
                            remediation guidance.
                        </p>

                    </div>

                </div>

            </section>


            {/* Shared site call-to-action */}
            <CTA />

        </>
    );
}