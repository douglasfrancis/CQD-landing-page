import React from 'react'

export default function Accessibility() {
  return (
    <main style={{padding: '3rem'}}>
        <h2>Accessibility Statement for <span className="basic-information website-name">Care Quality Digital</span></h2>
        <p>
            This is an accessibility statement from <span className="basic-information organization-name">Care Quality Digital Ltd</span>.
        </p>
        <h3>Conformance status</h3>
        <p>
            The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            <span className="basic-information website-name">Care Quality Digital</span>
            is
            <span className="basic-information conformance-status" data-printfilter="lowercase">non conformant</span>
            with
            <span className="basic-information conformance-standard"><span data-negate="">WCAG 2.1 level AA</span>.</span>
            <span>
            <span className="basic-information conformance-status">Non conformant</span>
            means that
            <span className="basic-information conformance-meaning">the content does not conform the accessibility standard</span>.
        </span>
        </p>
        <h3>Feedback</h3>
        <p>
            We welcome your feedback on the accessibility of
            <span className="basic-information website-name">Care Quality Digital</span>.
            Please let us know if you encounter accessibility barriers on
            <span className="basic-information website-name">Care Quality Digital</span>:
        </p>
        <ul className="basic-information feedback h-card">
            <li>
            E-mail:
            <a className="email u-email" href="mailto:support@cqd.org.uksupport@cqd.org.uk">support@cqd.org.uk</a>
        </li>
            <li>
            Visitor Address:
            <span className="visitor-address p-extended-address">Millennium House, Centenary Place</span>
        </li>
            <li>
            Postal Address:
            <span className="postal-address p-adr">CW12 1EZ</span>
        </li>
        </ul>
        <h3>Date</h3>
        <p>
            This statement was created on
            <span className="basic-information statement-created-date">10 October 2022</span>
            using the <a href="https://www.w3.org/WAI/planning/statements/">W3C Accessibility Statement Generator Tool</a>.
        </p>
    </main>
  )
}
