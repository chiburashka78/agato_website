/**
 * SectionHeader.jsx
 *
 * Reusable heading component for major sections of the Agato website.
 *
 * Purpose:
 * --------
 * Provides a consistent structure for section introductions.
 *
 * A section header can contain:
 * - An eyebrow: small contextual text displayed above the heading.
 * - A title: the primary heading for the section.
 * - Optional supporting copy beneath the title.
 *
 * Example:
 *
 * <SectionHeader
 *     eyebrow="External intelligence"
 *     title="Know what attackers can see."
 *     copy="Agato identifies exposed infrastructure and turns
 *           external observations into actionable security context."
 * />
 *
 * The `copy` prop is optional. If no copy is provided, the paragraph
 * element will not be rendered.
 */

export default function SectionHeader({
    eyebrow,
    title,
    copy
}) {
    return (
        <div className="section-head">

            {/* Small contextual label above the section title */}
            <span className="eyebrow">
                {eyebrow}
            </span>

            {/* Primary section heading */}
            <h2 className="section-title">
                {title}
            </h2>

            {/* Optional supporting description */}
            {copy && (
                <p className="section-copy">
                    {copy}
                </p>
            )}

        </div>
    );
}