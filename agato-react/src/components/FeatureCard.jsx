/**
 * FeatureCard.jsx
 *
 * Reusable card component for displaying an Agato feature,
 * capability, service, or workflow step.
 *
 * Purpose:
 * --------
 * This component provides a consistent card layout throughout
 * the Agato website.
 *
 * Each card can contain:
 * - An optional number or identifier.
 * - A required title.
 * - Descriptive content passed through React's `children` prop.
 *
 * Example:
 *
 * <FeatureCard
 *     number="01"
 *     title="External Asset Discovery"
 * >
 *     Identify internet-facing infrastructure associated with
 *     your organization.
 * </FeatureCard>
 *
 * The `number` prop is optional. If it is not provided,
 * the number element will not be rendered.
 */

export default function FeatureCard({
    number,
    title,
    children
}) {
    return (
        <article className="card">

            {/* Optional card number / identifier */}
            {number && (
                <span className="card-number">
                    {number}
                </span>
            )}

            {/* Feature title */}
            <h3 className="card-title">
                {title}
            </h3>

            {/* Feature description */}
            <p className="card-description">
                {children}
            </p>

        </article>
    );
}