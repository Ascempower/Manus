""
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Choice Insurance Agency',
  description: 'Find answers to common questions about insurance, our services, and how Choice Insurance Agency can help you.',
};

const faqData = [
  {
    category: "General Insurance Questions",
    questions: [
      {
        question: "What is an independent insurance agency?",
        answer: "An independent insurance agency, like Choice Insurance Agency, represents multiple insurance companies rather than just one. This allows us to offer you a wider variety of coverage options and price points, ensuring you find the plan that best suits your needs and budget."
      },
      {
        question: "Why should I use an insurance agent instead of buying directly?",
        answer: "An insurance agent provides personalized advice, helps you understand complex policy details, and can advocate on your behalf with the insurance company. We do the comparison shopping for you, saving you time and potentially money, all at no extra cost to you as our commission is paid by the insurance carriers."
      },
      {
        question: "How often should I review my insurance policies?",
        answer: "It’s a good idea to review your insurance policies annually or whenever you experience a major life event, such as getting married, buying a home, having a child, or starting a new job. This ensures your coverage continues to meet your evolving needs."
      }
    ]
  },
  {
    category: "Medicare Questions",
    questions: [
      {
        question: "What is the difference between Original Medicare and Medicare Advantage?",
        answer: "Original Medicare (Part A and Part B) is a fee-for-service health plan managed by the federal government. Medicare Advantage (Part C) plans are offered by private insurance companies approved by Medicare and provide Part A and Part B coverage, often including additional benefits like prescription drugs, dental, and vision. Medicare Advantage plans typically have network restrictions."
      },
      {
        question: "What is a Medicare Supplement (Medigap) plan?",
        answer: "Medigap plans help pay for some of the out-of-pocket costs that Original Medicare doesn’t cover, like deductibles, copayments, and coinsurance. They are sold by private insurance companies and are standardized, meaning benefits are the same for a lettered plan regardless of the insurer."
      },
      {
        question: "When can I enroll in Medicare?",
        answer: "Your Initial Enrollment Period (IEP) for Medicare typically starts 3 months before your 65th birthday, includes the month you turn 65, and ends 3 months after your 65th birthday. There are also Special Enrollment Periods (SEPs) under certain circumstances and an annual General Enrollment Period."
      }
    ]
  },
  {
    category: "Life Insurance Questions",
    questions: [
      {
        question: "How much life insurance do I need?",
        answer: "The amount of life insurance you need depends on your individual circumstances, including your income, debts (like a mortgage), family size, and financial goals (like funding college education). A common rule of thumb is 7-10 times your annual income, but we can help you calculate a more precise amount."
      },
      {
        question: "What is the difference between term life and whole life insurance?",
        answer: "Term life insurance provides coverage for a specific period (e.g., 10, 20, or 30 years) and is generally more affordable. Whole life insurance provides lifelong coverage and includes a cash value component that grows over time. Whole life premiums are typically higher but remain level."
      }
    ]
  },
  {
    category: "Working With Us",
    questions: [
      {
        question: "What states do you serve?",
        answer: "Choice Insurance Agency services residents of Illinois and the following states: Alabama, Georgia, Ohio, Kentucky, Mississippi, South Carolina, and Texas."
      },
      {
        question: "Is there a cost for your consultation services?",
        answer: "No, our consultations are free. We are compensated by the insurance companies we partner with if you decide to purchase a plan through us. There is no extra cost or obligation for you."
      },
      {
        question: "How do I get started?",
        answer: "Getting started is easy! You can call us, email us, or book a free consultation through our website. We look forward to helping you find the right insurance solutions."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="py-12 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins">Frequently Asked Questions</h1>
          <p className="text-lg text-brand-black/80 mt-4 max-w-3xl mx-auto">
            Have questions about insurance or our services? We’ve compiled answers to some of the most common inquiries we receive. If you don’t find your answer here, please don’t hesitate to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            {faqData.map((categoryItem) => (
              <div key={categoryItem.category} className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-deep-forest-green font-poppins mb-6">{categoryItem.category}</h2>
                {categoryItem.questions.map((faq, index) => (
                  <AccordionItem 
                    value={`${categoryItem.category.replace(/\s+/g, '-')}-${index}`} 
                    key={index} 
                    className="border-b border-brand-teal-blue/50 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-semibold text-brand-deep-forest-green hover:text-brand-teal-blue font-poppins">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4 text-brand-black/80 leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Still Have Questions?</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-2xl mx-auto">
            Our knowledgeable agents are ready to provide the answers and guidance you need. Contact us today for personalized assistance.
          </p>
          <Button size="lg" asChild className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

