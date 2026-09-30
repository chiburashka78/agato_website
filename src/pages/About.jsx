/**
 * About.jsx
 *
 * About page for the Agato website.
 *
 * Purpose:
 * --------
 * Explains:
 * - What Agato Security Solutions is building.
 * - Who the platform is designed to support.
 * - Agato's mission and operating philosophy.
 * - The principles used when evaluating external exposure.
 *
 * Page structure:
 * ---------------
 * 1. About hero
 * 2. Mission
 * 3. Operating principles
 * 4. Call to action
 *
 * Reusable components:
 * --------------------
 * <SectionHeader>
 *     Provides consistent headings for major page sections.
 *
 * <FeatureCard>
 *     Displays each Agato operating principle.
 *
 * <CTA>
 *     Provides the shared "Request a Snapshot" call to action.
 */

import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import CTA from "../components/CTA";


export default function About() {
    return (
        <>

            {/* =========================================================
                ABOUT HERO
                Introduces Agato and the problem the company is solving.
               ========================================================= */}
            <section className="page-hero">

                <div className="container narrow">

                    <span className="eyebrow">
                        About Agato
                    </span>

                    <h1>
                        A force multiplier for teams responsible
                        for everything.
                    </h1>

                    <p className="hero-copy">
                        Agato Security Solutions is building practical
                        external cybersecurity intelligence for
                        organizations that need serious visibility without
                        enterprise-sized security teams.
                    </p>

                </div>

            </section>


            {/* =========================================================
                MISSION
                Explains who Agato serves and how outside-in security
                intelligence helps extend lean IT and security teams.
               ========================================================= */}
            <section className="section">

                <div className="container split">

                    {/* Mission heading */}
                    <div className="section-intro">

                        <span className="eyebrow">
                            Our mission
                        </span>

                        <h2>
                            Make outside-in security useful,
                            understandable, and actionable.
                        </h2>

                    </div>


                    {/* Mission description */}
                    <div className="stack">

                        <p>
                            Small and mid-sized organizations often rely
                            on lean IT teams responsible for infrastructure,
                            security, vendors, compliance, and continuity
                            at the same time.
                        </p>

                        <p>
                            Agato is designed to extend those teams. We look
                            at the organization from the public internet,
                            identify exposure and ownership signals, validate
                            what matters, and translate the results into work
                            that can actually be completed.
                        </p>

                        <p>
                            The goal is simple: reduce external attack surface
                            before exposed risk becomes an incident.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                OPERATING PRINCIPLES
                Describes the principles Agato uses when analyzing and
                communicating external security findings.
               ========================================================= */}
            <section className="section section-alt">

                <div className="container">

                    <SectionHeader
                        eyebrow="Principles"
                        title="Built around signal, evidence, and restraint."
                    />


                    <div className="three-grid">

                        <FeatureCard
                            number="01"
                            title="Signal over noise"
                        >
                            Prioritize findings that have a defensible
                            connection to the customer and meaningful
                            security relevance.
                        </FeatureCard>


                        <FeatureCard
                            number="02"
                            title="Evidence over assumptions"
                        >
                            Use DNS, certificates, hosting, service data,
                            and other public signals to support attribution
                            and risk decisions.
                        </FeatureCard>


                        <FeatureCard
                            number="03"
                            title="Action over dashboards"
                        >
                            A finding is most useful when the customer
                            understands what happened, why it matters,
                            and what to do next.
                        </FeatureCard>

                    </div>

                </div>

            </section>


            {/* Shared site call-to-action */}
            <CTA />

        </>
    );
}