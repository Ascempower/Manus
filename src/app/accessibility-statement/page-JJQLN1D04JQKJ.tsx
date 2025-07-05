"";
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Choice Insurance Agency',
  description: 'Choice Insurance Agency is committed to ensuring digital accessibility for people with disabilities. Read our Accessibility Statement.',
};

export default function AccessibilityStatementPage() {
  const lastUpdated = "May 13, 2025"; // Update this date as needed

  return (
    <div className="container mx-auto py-12 px-4 prose prose-lg max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Accessibility Statement</h1>
      <p className="text-center text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

      <p>
        Choice Insurance Agency is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Our Commitment</h2>
      <p>
        We believe that everyone has the right to access information and services online, regardless of ability. We strive to make our website, https://www.insureyourchoices.com, as accessible as possible to the widest possible audience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Measures to Support Accessibility</h2>
      <p>
        Choice Insurance Agency takes the following measures to ensure accessibility of our website:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Continuous Improvement:</strong> We incorporate accessibility into our website development and content creation processes.</li>
        <li><strong>Standards Compliance:</strong> We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as our standard.</li>
        <li><strong>Design Considerations:</strong> We consider accessible design principles, including color contrast, keyboard navigation, and text alternatives for non-text content.</li>
        <li><strong>Testing:</strong> We periodically test our website for accessibility issues using a combination of automated tools and manual checks.</li>
        <li><strong>Feedback Mechanism:</strong> We provide ways for users to provide feedback on the accessibility of our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Conformance Status</h2>
      <p>
        The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Choice Insurance Agency is partially conformant with WCAG 2.1 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
      </p>
      <p>
        While we strive to adhere to the accepted guidelines and standards for accessibility and usability, it is not always possible to do so in all areas of the website. We are continually seeking out solutions that will bring all areas of the site up to the same level of overall web accessibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Technical Specifications</h2>
      <p>
        Accessibility of Choice Insurance Agency relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p>
        These technologies are relied upon for conformance with the accessibility standards used.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Limitations and Alternatives</h2>
      <p>
        Despite our best efforts to ensure accessibility of Choice Insurance Agency, there may be some limitations. Please contact us if you observe an issue.
      </p>
      <p>
        Known limitations for Choice Insurance Agency:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Third-Party Content:</strong> Some embedded content from third-party providers (e.g., Calendly for booking) may not fully conform to our accessibility standards. We encourage these providers to improve their accessibility.</li>
        <li><strong>Complex Interactions:</strong> Some complex interactive elements may present challenges for certain assistive technologies. We are working to improve these areas.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Feedback and Contact Information</h2>
      <p>
        We welcome your feedback on the accessibility of Choice Insurance Agency. Please let us know if you encounter accessibility barriers on our website:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Phone: (877) 204-9648</li>
        <li>E-mail: <a href="mailto:info@choiceinsurancehub.com" className="text-blue-600 hover:underline">info@choiceinsurancehub.com</a></li>
        <li>Contact Form: <Link href="/contact" className="text-blue-600 hover:underline">Visit our Contact Page</Link></li>
      </ul>
      <p>
        We try to respond to feedback within 5 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Enforcement Procedure</h2>
      <p>
        If you are unsatisfied with our response to your accessibility concern, you can escalate your complaint to the relevant national authorities. However, we encourage you to contact us first so we can try to address your concerns directly.
      </p>
    </div>
  );
}
