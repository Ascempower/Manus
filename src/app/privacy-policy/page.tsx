"";
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Choice Insurance Agency',
  description: 'Read the Privacy Policy for Choice Insurance Agency to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 13, 2025"; // Update this date as needed

  return (
    <div className="container mx-auto py-12 px-4 prose prose-lg max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Privacy Policy</h1>
      <p className="text-center text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

      <p>
        Choice Insurance Agency ("us", "we", or "our") operates the https://www.insureyourchoices.com website (hereinafter referred to as the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Information Collection and Use</h2>
      <p>
        We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Personal Data:</strong> While using our Service, especially when requesting quotes or consultations, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address (State, Province, ZIP/Postal code, City), Date of Birth, Health information (only as necessary for insurance quoting and applications), and other information relevant to insurance needs.
        </li>
        <li>
          <strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
        </li>
        <li>
          <strong>Tracking & Cookies Data:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Use of Data</h2>
      <p>
        Choice Insurance Agency uses the collected data for various purposes:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>To provide and maintain our Service</li>
        <li>To provide insurance quotes and facilitate insurance applications as requested by you</li>
        <li>To notify you about changes to our Service or your policies</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Disclosure of Data</h2>
      <p>
        Choice Insurance Agency may disclose your Personal Data in the good faith belief that such action is necessary to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Comply with a legal obligation (e.g., if required by law or in response to valid requests by public authorities).</li>
        <li>Protect and defend the rights or property of Choice Insurance Agency.</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
        <li>Protect the personal safety of users of the Service or the public.</li>
        <li>Protect against legal liability.</li>
        <li>Facilitate insurance applications with insurance carriers, with your explicit consent. We will only share information necessary for the application process.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Security of Data</h2>
      <p>
        The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Your Data Protection Rights</h2>
      <p>
        Depending on your location, you may have certain data protection rights. Choice Insurance Agency aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Service Providers</h2>
      <p>
        We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Links to Other Sites</h2>
      <p>
        Our Service may contain links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Children's Privacy</h2>
      <p>
        Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>By email: <a href="mailto:a.campbell@insureyourchoices.com" className="text-blue-600 hover:underline">a.campbell@insureyourchoices.com</a></li>
        <li>By phone number: (877) 204-9648</li>
        <li>Through our <Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link></li>
      </ul>
    </div>
  );
}

