export const metadata = {
  title: "HIPAA Notice of Privacy Practices | Choice Insurance Agency",
  description: "Choice Insurance Agency's HIPAA Notice of Privacy Practices explaining how we protect your health information and your rights under HIPAA.",
  alternates: {
    canonical: "https://insureyourchoices.com/hipaa-notice"
  }
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText, Phone, Mail } from "lucide-react";

export default function HIPAANoticePage() {
  return (
    <div className="py-16 md:py-24 bg-brand-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-brand-deep-forest-green" />
            <h1 className="text-3xl md:text-4xl font-bold text-brand-deep-forest-green font-poppins">
              HIPAA Notice of Privacy Practices
            </h1>
          </div>
          <p className="text-lg text-brand-black/80 max-w-3xl mx-auto">
            This notice describes how medical information about you may be used and disclosed 
            and how you can get access to this information.
          </p>
          <div className="bg-brand-warm-beige-coral/20 p-4 rounded-lg mt-6 max-w-2xl mx-auto">
            <p className="text-brand-deep-forest-green font-semibold">
              PLEASE REVIEW IT CAREFULLY
            </p>
            <p className="text-sm text-brand-black/80 mt-2">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <Lock className="h-5 w-5" />
                Our Commitment to Your Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-brand-black/80">
                Choice Insurance Agency is committed to protecting the privacy of your health information. 
                We are required by law to maintain the privacy of your protected health information (PHI) 
                and to provide you with this notice of our legal duties and privacy practices.
              </p>
              <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                  What is Protected Health Information (PHI)?
                </h4>
                <p className="text-sm text-brand-black/80">
                  PHI is information about you, including demographic information, that may identify you 
                  and relates to your past, present, or future physical or mental health condition and 
                  related health care services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <FileText className="h-5 w-5" />
                How We May Use and Disclose Your PHI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-brand-deep-forest-green mb-3">
                  Uses and Disclosures for Treatment, Payment, and Health Care Operations
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                    <h5 className="font-medium text-brand-deep-forest-green mb-2">Treatment</h5>
                    <p className="text-sm text-brand-black/80">
                      We may use your PHI to coordinate your insurance coverage and ensure 
                      you receive appropriate healthcare benefits.
                    </p>
                  </div>
                  
                  <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                    <h5 className="font-medium text-brand-deep-forest-green mb-2">Payment</h5>
                    <p className="text-sm text-brand-black/80">
                      We may use your PHI to determine coverage, process claims, and 
                      coordinate benefits with insurance carriers.
                    </p>
                  </div>
                  
                  <div className="bg-brand-deep-forest-green/10 p-4 rounded-lg">
                    <h5 className="font-medium text-brand-deep-forest-green mb-2">Operations</h5>
                    <p className="text-sm text-brand-black/80">
                      We may use your PHI for quality assurance, compliance activities, 
                      and business operations related to your insurance services.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-brand-deep-forest-green mb-3">
                  Other Uses and Disclosures
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-deep-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-brand-deep-forest-green">As Required by Law:</strong>
                      <span className="text-brand-black/80"> We will disclose your PHI when required to do so by federal, state, or local law.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-deep-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-brand-deep-forest-green">Public Health Activities:</strong>
                      <span className="text-brand-black/80"> We may disclose your PHI for public health activities and purposes.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-deep-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-brand-deep-forest-green">Health Oversight Activities:</strong>
                      <span className="text-brand-black/80"> We may disclose your PHI to health oversight agencies for oversight activities.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <Shield className="h-5 w-5" />
                Your Rights Regarding Your PHI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-brand-black/80 mb-4">
                You have the following rights regarding your protected health information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Inspect and Copy
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to inspect and copy your PHI that we maintain in our records.
                    </p>
                  </div>
                  
                  <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Amend
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request that we amend your PHI if you believe it is incorrect or incomplete.
                    </p>
                  </div>
                  
                  <div className="bg-brand-deep-forest-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to an Accounting
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request an accounting of disclosures of your PHI.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Request Restrictions
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request restrictions on how we use or disclose your PHI.
                    </p>
                  </div>
                  
                  <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Confidential Communications
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request that we communicate with you about your PHI in a certain way or at a certain location.
                    </p>
                  </div>
                  
                  <div className="bg-brand-deep-forest-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to a Paper Copy
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to obtain a paper copy of this notice from us upon request.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <Phone className="h-5 w-5" />
                Contact Information & Complaints
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-brand-teal-blue/10 p-6 rounded-lg">
                <h4 className="font-semibold text-brand-deep-forest-green mb-4">
                  Privacy Officer Contact Information
                </h4>
                <div className="space-y-2">
                  <p className="text-brand-black/80">
                    <strong>Choice Insurance Agency - Privacy Officer</strong>
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-deep-forest-green" />
                    <span className="text-brand-black/80">privacy@insureyourchoices.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-deep-forest-green" />
                    <span className="text-brand-black/80">Available through our main contact number</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                  Filing a Complaint
                </h4>
                <p className="text-brand-black/80 mb-3">
                  If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the Department of Health and Human Services.
                </p>
                <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                  <p className="text-sm text-brand-black/80">
                    <strong>Important:</strong> You will not be penalized or retaliated against for filing a complaint.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="text-brand-deep-forest-green">
                Changes to This Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-black/80">
                We reserve the right to change this notice and to make the revised or changed notice 
                effective for medical information we already have about you as well as any information 
                we receive in the future. We will post a copy of the current notice on our website and 
                make copies available upon request.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}export const metadata = {
  title: "HIPAA Notice of Privacy Practices | Choice Insurance Agency",
  description: "Choice Insurance Agency's HIPAA Notice of Privacy Practices explaining how we protect your health information and your rights under HIPAA.",
  alternates: {
    canonical: "https://insureyourchoices.com/hipaa-notice"
  }
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText, Phone, Mail } from "lucide-react";

export default function HIPAANoticePage() {
  return (
    <div className="py-16 md:py-24 bg-brand-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-brand-deep-forest-green" />
            <h1 className="text-3xl md:text-4xl font-bold text-brand-deep-forest-green font-poppins">
              HIPAA Notice of Privacy Practices
            </h1>
          </div>
          <p className="text-lg text-brand-black/80 max-w-3xl mx-auto">
            This notice describes how medical information about you may be used and disclosed 
            and how you can get access to this information.
          </p>
          <div className="bg-brand-warm-beige-coral/20 p-4 rounded-lg mt-6 max-w-2xl mx-auto">
            <p className="text-brand-deep-forest-green font-semibold">
              PLEASE REVIEW IT CAREFULLY
            </p>
            <p className="text-sm text-brand-black/80 mt-2">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <Lock className="h-5 w-5" />
                Our Commitment to Your Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-brand-black/80">
                Choice Insurance Agency is committed to protecting the privacy of your health information. 
                We are required by law to maintain the privacy of your protected health information (PHI) 
                and to provide you with this notice of our legal duties and privacy practices.
              </p>
              <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                  What is Protected Health Information (PHI)?
                </h4>
                <p className="text-sm text-brand-black/80">
                  PHI is information about you, including demographic information, that may identify you 
                  and relates to your past, present, or future physical or mental health condition and 
                  related health care services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <FileText className="h-5 w-5" />
                How We May Use and Disclose Your PHI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-brand-deep-forest-green mb-3">
                  Uses and Disclosures for Treatment, Payment, and Health Care Operations
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                    <h5 className="font-medium text-brand-deep-forest-green mb-2">Treatment</h5>
                    <p className="text-sm text-brand-black/80">
                      We may use your PHI to coordinate your insurance coverage and ensure 
                      you receive appropriate healthcare benefits.
                    </p>
                  </div>
                  
                  <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                    <h5 className="font-medium text-brand-deep-forest-green mb-2">Payment</h5>
                    <p className="text-sm text-brand-black/80">
                      We may use your PHI to determine coverage, process claims, and 
                      coordinate benefits with insurance carriers.
                    </p>
                  </div>
                  
                  <div className="bg-brand-deep-forest-green/10 p-4 rounded-lg">
                    <h5 className="font-medium text-brand-deep-forest-green mb-2">Operations</h5>
                    <p className="text-sm text-brand-black/80">
                      We may use your PHI for quality assurance, compliance activities, 
                      and business operations related to your insurance services.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-brand-deep-forest-green mb-3">
                  Other Uses and Disclosures
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-deep-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-brand-deep-forest-green">As Required by Law:</strong>
                      <span className="text-brand-black/80"> We will disclose your PHI when required to do so by federal, state, or local law.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-deep-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-brand-deep-forest-green">Public Health Activities:</strong>
                      <span className="text-brand-black/80"> We may disclose your PHI for public health activities and purposes.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-deep-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-brand-deep-forest-green">Health Oversight Activities:</strong>
                      <span className="text-brand-black/80"> We may disclose your PHI to health oversight agencies for oversight activities.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <Shield className="h-5 w-5" />
                Your Rights Regarding Your PHI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-brand-black/80 mb-4">
                You have the following rights regarding your protected health information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Inspect and Copy
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to inspect and copy your PHI that we maintain in our records.
                    </p>
                  </div>
                  
                  <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Amend
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request that we amend your PHI if you believe it is incorrect or incomplete.
                    </p>
                  </div>
                  
                  <div className="bg-brand-deep-forest-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to an Accounting
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request an accounting of disclosures of your PHI.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-brand-teal-blue/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Request Restrictions
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request restrictions on how we use or disclose your PHI.
                    </p>
                  </div>
                  
                  <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to Confidential Communications
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to request that we communicate with you about your PHI in a certain way or at a certain location.
                    </p>
                  </div>
                  
                  <div className="bg-brand-deep-forest-green/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                      Right to a Paper Copy
                    </h4>
                    <p className="text-sm text-brand-black/80">
                      You have the right to obtain a paper copy of this notice from us upon request.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-brand-deep-forest-green">
                <Phone className="h-5 w-5" />
                Contact Information & Complaints
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-brand-teal-blue/10 p-6 rounded-lg">
                <h4 className="font-semibold text-brand-deep-forest-green mb-4">
                  Privacy Officer Contact Information
                </h4>
                <div className="space-y-2">
                  <p className="text-brand-black/80">
                    <strong>Choice Insurance Agency - Privacy Officer</strong>
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-deep-forest-green" />
                    <span className="text-brand-black/80">privacy@insureyourchoices.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-deep-forest-green" />
                    <span className="text-brand-black/80">Available through our main contact number</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-brand-deep-forest-green mb-2">
                  Filing a Complaint
                </h4>
                <p className="text-brand-black/80 mb-3">
                  If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the Department of Health and Human Services.
                </p>
                <div className="bg-brand-warm-beige-coral/10 p-4 rounded-lg">
                  <p className="text-sm text-brand-black/80">
                    <strong>Important:</strong> You will not be penalized or retaliated against for filing a complaint.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-deep-forest-green/20">
            <CardHeader>
              <CardTitle className="text-brand-deep-forest-green">
                Changes to This Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-black/80">
                We reserve the right to change this notice and to make the revised or changed notice 
                effective for medical information we already have about you as well as any information 
                we receive in the future. We will post a copy of the current notice on our website and 
                make copies available upon request.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}