/**
 * Signup.jsx
 *
 * Customer onboarding page for Agato.
 *
 * Purpose:
 * --------
 * Collects the information Agato needs to establish a new customer
 * account before sending the customer to an external payment provider.
 *
 * IMPORTANT:
 * ---------
 * Payment card information should NOT be collected directly by this
 * component.
 *
 * The eventual workflow should be:
 *
 * Signup form
 *      ↓
 * Agato backend
 *      ↓
 * Create customer/onboarding record
 *      ↓
 * Create hosted payment checkout session
 *      ↓
 * Redirect customer to payment provider
 */

import { useState } from "react";


const COMPANY_SIZES = [
    "1–10",
    "11–50",
    "51–100",
    "101–500",
    "500+"
];


const INDUSTRIES = [
    "Accounting & Financial Services",
    "Healthcare",
    "Legal",
    "Managed Service Provider (MSP)",
    "Professional Services",
    "Technology",
    "Manufacturing",
    "Retail & E-commerce",
    "Real Estate",
    "Nonprofit",
    "Other"
];


export default function Signup() {

    /**
     * Main form state.
     *
     * All customer-entered information is stored here until
     * the form is submitted.
     */
    const [formData, setFormData] = useState({
        customerName: "",
        companyName: "",

        customerContactEmail: "",
        customerContactPhone: "",

        sameAsCustomerContact: false,

        itContactName: "",
        itContactEmail: "",
        itContactPhone: "",

        companySize: "",
        industry: "",

        termsAccepted: false
    });


    /**
     * Generic input handler.
     *
     * Updates the corresponding property in formData based
     * on the input's "name" attribute.
     */
    function handleChange(event) {
        const {
            name,
            value,
            type,
            checked
        } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: type === "checkbox" ? checked : value
        }));
    }


    /**
     * Controls whether the IT point of contact is the same
     * person as the customer point of contact.
     */
    function handleSameContact(event) {
        const checked = event.target.checked;

        setFormData((current) => ({
            ...current,

            sameAsCustomerContact: checked,

            itContactName: checked
                ? current.customerName
                : "",

            itContactEmail: checked
                ? current.customerContactEmail
                : "",

            itContactPhone: checked
                ? current.customerContactPhone
                : ""
        }));
    }


    /**
     * Handles onboarding submission.
     *
     * For now, this prevents the browser from performing a normal
     * HTML form submission.
     *
     * Later this function should POST the onboarding information
     * to the Agato backend.
     *
     * The backend will then create a hosted payment session and
     * return a checkout URL.
     */
    async function handleSubmit(event) {
        event.preventDefault();

        console.log("Agato signup:", formData);

        // TODO:
        //
        // const response = await fetch("/api/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // });
        //
        // const result = await response.json();
        //
        // window.location.href = result.checkoutUrl;
    }


    return (
        <>

            {/* =====================================================
                SIGNUP HERO
               ===================================================== */}
            <section className="page-hero signup-hero">

                <div className="container narrow">

                    <span className="eyebrow">
                        Get Started
                    </span>

                    <h1>
                        Set up your Agato account.
                    </h1>

                    <p className="hero-copy">
                        Tell us about your organization and who we
                        should work with. You'll review payment
                        securely after completing the form.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CUSTOMER ONBOARDING FORM
               ===================================================== */}
            <section className="section">

                <div className="container signup-container">

                    <form
                        className="signup-form"
                        onSubmit={handleSubmit}
                    >

                        {/* =========================================
                            CUSTOMER
                           ========================================= */}
                        <fieldset className="form-section">

                            <legend>
                                Customer
                            </legend>


                            <div className="form-grid">

                                <label className="form-field">
                                    <span>Customer Name</span>

                                    <input
                                        type="text"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        required
                                    />
                                </label>


                                <label className="form-field">
                                    <span>Company</span>

                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        autoComplete="organization"
                                        required
                                    />
                                </label>

                            </div>

                        </fieldset>


                        {/* =========================================
                            CUSTOMER POINT OF CONTACT
                           ========================================= */}
                        <fieldset className="form-section">

                            <legend>
                                Customer Point of Contact
                            </legend>


                            <div className="form-grid">

                                <label className="form-field">
                                    <span>Email</span>

                                    <input
                                        type="email"
                                        name="customerContactEmail"
                                        value={formData.customerContactEmail}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />
                                </label>


                                <label className="form-field">
                                    <span>Phone</span>

                                    <input
                                        type="tel"
                                        name="customerContactPhone"
                                        value={formData.customerContactPhone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </label>

                            </div>

                        </fieldset>


                        {/* =========================================
                            IT POINT OF CONTACT
                           ========================================= */}
                        <fieldset className="form-section">

                            <legend>
                                Company IT Point of Contact
                            </legend>


                            <label className="checkbox-field">

                                <input
                                    type="checkbox"
                                    checked={
                                        formData.sameAsCustomerContact
                                    }
                                    onChange={handleSameContact}
                                />

                                <span>
                                    Same as customer point of contact
                                </span>

                            </label>


                            {!formData.sameAsCustomerContact && (

                                <div className="form-grid">

                                    <label className="form-field">
                                        <span>Name</span>

                                        <input
                                            type="text"
                                            name="itContactName"
                                            value={formData.itContactName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>


                                    <label className="form-field">
                                        <span>Email</span>

                                        <input
                                            type="email"
                                            name="itContactEmail"
                                            value={formData.itContactEmail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>


                                    <label className="form-field">
                                        <span>Phone</span>

                                        <input
                                            type="tel"
                                            name="itContactPhone"
                                            value={formData.itContactPhone}
                                            onChange={handleChange}
                                        />
                                    </label>

                                </div>

                            )}

                        </fieldset>


                        {/* =========================================
                            COMPANY SIZE
                           ========================================= */}
                        <fieldset className="form-section">

                            <legend>
                                Company Size
                            </legend>

                            <p className="form-help">
                                Number of employees
                            </p>


                            <div className="size-options">

                                {COMPANY_SIZES.map((size) => (

                                    <label
                                        className="size-option"
                                        key={size}
                                    >

                                        <input
                                            type="radio"
                                            name="companySize"
                                            value={size}
                                            checked={
                                                formData.companySize === size
                                            }
                                            onChange={handleChange}
                                            required
                                        />

                                        <span>
                                            {size}
                                        </span>

                                    </label>

                                ))}

                            </div>

                        </fieldset>


                        {/* =========================================
                            INDUSTRY
                           ========================================= */}
                        <fieldset className="form-section">

                            <legend>
                                Industry
                            </legend>


                            <label className="form-field">

                                <span>
                                    Company Industry
                                </span>

                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select an industry
                                    </option>

                                    {INDUSTRIES.map((industry) => (

                                        <option
                                            key={industry}
                                            value={industry}
                                        >
                                            {industry}
                                        </option>

                                    ))}

                                </select>

                            </label>

                        </fieldset>


                        {/* =========================================
                            PAYMENT
                           ========================================= */}
                        <fieldset className="form-section payment-section">

                            <legend>
                                Payment
                            </legend>

                            <p>
                                Payment will be completed securely
                                through our payment provider after
                                your organization information is
                                submitted.
                            </p>

                            <div className="payment-status">
                                Secure hosted checkout
                            </div>

                        </fieldset>


                        {/* =========================================
                            AGREEMENT
                           ========================================= */}
                        <div className="form-submit">

                            <label className="checkbox-field">

                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    required
                                />

                                <span>
                                    I confirm that I am authorized to
                                    provide this information on behalf
                                    of the organization.
                                </span>

                            </label>


                            <button
                                className="button button-primary"
                                type="submit"
                            >
                                Continue to Payment
                                <span aria-hidden="true">→</span>
                            </button>

                        </div>

                    </form>

                </div>

            </section>

        </>
    );
}