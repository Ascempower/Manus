"";
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Choice Insurance Hub',
  description: 'Read the Terms of Service for using the Choice Insurance Hub website and services.',
};

export default function TermsOfServicePage() {
  const lastUpdated = "May 13, 2025"; // Update this date as needed

  return (
    <div className="container mx-auto py-12 px-4 prose prose-lg max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Terms of Service</h1>
      <p className="text-center text-gray-600 mb-8">Last Updated: {lastUpdated}</p>

      <p>
        Welcome to Choice Insurance Hub! These Terms of Service ("Terms", "Terms of Service") govern your use of our website https://www.insureyourchoices.com (the "Service") operated by Choice Insurance Hub ("us", "we", or "our").
      </p>
      <p>
        Please read these Terms of Service carefully before using our Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
      </p>
      <p>
        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Use of Our Service</h2>
      <p>
        Choice Insurance Hub provides information about insurance products and services. The information provided on this Service is for general informational purposes only and does not constitute professional financial or insurance advice. You should consult with a qualified professional before making any decisions based on the information provided on this Service.
      </p>
      <p>
        You agree not to use the Service:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>In any way that violates any applicable national or international law or regulation.</li>
        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
        <li>To impersonate or attempt to impersonate Choice Insurance Hub, a Choice Insurance Hub employee, another user, or any other person or entity.</li>
        <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm or offend Choice Insurance Hub or users of the Service or expose them to liability.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Intellectual Property</h2>
      <p>
        The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Choice Insurance Hub and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Choice Insurance Hub.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Links to Other Web Sites</h2>
      <p>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by Choice Insurance Hub. Choice Insurance Hub has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Choice Insurance Hub shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>
      <p>
        We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Disclaimer of Warranties; Limitation of Liability</h2>
      <p>
        The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Choice Insurance Hub makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein. You expressly agree that your use of these services, their content, and any services or items obtained from us is at your sole risk.
      </p>
      <p>
        Neither Choice Insurance Hub nor any person associated with Choice Insurance Hub makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the services. Without limiting the foregoing, neither Choice Insurance Hub nor anyone associated with Choice Insurance Hub represents or warrants that the services, their content, or any services or items obtained through the services will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that the services or the server that makes it available are free of viruses or other harmful components or that the services or any services or items obtained through the services will otherwise meet your needs or expectations.
      </p>
      <p>
        Choice Insurance Hub hereby disclaims all warranties of any kind, whether express or implied, statutory, or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for particular purpose.
      </p>
      <p>
        In no event will Choice Insurance Hub, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the State of Illinois, United States, without regard to its conflict of law provisions.
      </p>
      <p>
        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Changes to Terms of Service</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>
      <p>
        By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>By email: <a href="mailto:info@choiceinsurancehub.com" className="text-blue-600 hover:underline">info@choiceinsurancehub.com</a></li>
        <li>By phone number: (877) 414-2319</li>
        <li>Through our <Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link></li>
      </ul>
    </div>
  );
}
