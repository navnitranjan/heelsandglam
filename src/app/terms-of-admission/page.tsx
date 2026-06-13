import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Admission | Heels & Glam Academy',
  description:
    'Review the terms and conditions governing admissions, program participation, payments, and policies at Heels & Glam Academy.',
  openGraph: {
    title: 'Terms of Admission | Heels & Glam Academy',
    description:
      'Review the terms and conditions governing admissions, program participation, and policies at Heels & Glam Academy.',
    url: 'https://heelsandglam.com/terms-of-admission',
    siteName: 'Heels & Glam',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Admission | Heels & Glam Academy',
    description:
      'Review the terms and conditions governing admissions, program participation, and policies at Heels & Glam Academy.',
  },
  alternates: {
    canonical: 'https://heelsandglam.com/terms-of-admission',
  },
};

export default function TermsOfAdmissionPage() {
  const sections = [
    {
      title: '1. Admissions Process',
      content: [
        'Admission to Heels & Glam Academy programs is conducted through a selective application process. Submitting an application does not guarantee admission.',
        'All candidates are required to complete the Candidate Invitation Profile on our website. The admissions team reviews each application individually based on the candidate\'s stated objectives, readiness, and alignment with our program philosophy.',
        'The Academy reserves the right to accept or decline any application at its sole discretion without providing reasons for the decision.',
        'Candidates who are selected will receive a formal confirmation via email and/or WhatsApp, along with details regarding program dates, fees, and preparation guidelines.',
      ],
    },
    {
      title: '2. Application Review',
      content: [
        'All applications undergo a review process that may include:',
        '• Assessment of the candidate\'s self-reported confidence, communication, and presence levels through the Transformation Potential Calculator.',
        '• Evaluation of the candidate\'s stated transformation objectives and their compatibility with our program curriculum.',
        '• A preliminary consultation call or WhatsApp conversation with the admissions team or the founder, Aakanksha Anand.',
        'The Academy aims to respond to all applications within 7 business days. Response times may vary during peak admissions periods.',
      ],
    },
    {
      title: '3. Program Participation',
      content: [
        'Once admitted, participants are expected to:',
        '• Attend all scheduled sessions, workshops, and practical modules as outlined in the program calendar.',
        '• Arrive on time for all in-person and virtual sessions. Late arrivals may not be admitted to certain practical modules.',
        '• Complete all assigned exercises, self-reflection journals, and practice routines between sessions.',
        '• Participate actively and constructively in group activities, peer feedback sessions, and presentations.',
        '• Respect the learning environment and maintain a professional, supportive attitude towards fellow participants and instructors.',
      ],
    },
    {
      title: '4. Code of Conduct',
      content: [
        'All participants in Heels & Glam Academy programs are expected to adhere to the following code of conduct:',
        '• Treat all instructors, staff, and fellow participants with dignity, courtesy, and respect.',
        '• Refrain from discriminatory, harassing, or disruptive behaviour of any kind.',
        '• Maintain confidentiality regarding personal stories, transformations, and sensitive information shared by other participants during sessions.',
        '• Follow all safety guidelines and instructions provided during physical training sessions, runway practice, and posture correction exercises.',
        '• Refrain from recording sessions (audio or video) without explicit written permission from the Academy.',
        'Violation of the Code of Conduct may result in immediate removal from the program without a refund.',
      ],
    },
    {
      title: '5. Payments & Fees',
      content: [
        'Program fees are communicated to accepted candidates during the confirmation stage. All fees are quoted in Indian Rupees (INR) unless stated otherwise.',
        '• Full payment or a non-refundable deposit (as specified) is required to confirm your seat in the program.',
        '• Payment can be made via bank transfer, UPI, or other methods as communicated during the admissions process.',
        '• All prices are inclusive of applicable taxes unless stated otherwise.',
        '• The Academy reserves the right to revise fees for future cohorts. Fees already confirmed for a specific cohort will not be changed.',
        '• Payment plans or installment options may be available for select programs. Eligibility is determined at the discretion of the admissions team.',
      ],
    },
    {
      title: '6. Refund Policy',
      content: [
        'Our refund policy is as follows:',
        '• **Full Refund**: Cancellation requests received more than 14 calendar days before the program start date are eligible for a full refund minus a 10% administrative processing fee.',
        '• **Partial Refund (50%)**: Cancellation requests received between 7 and 14 calendar days before the program start date are eligible for a 50% refund.',
        '• **No Refund**: Cancellation requests received less than 7 calendar days before the program start date, or after the program has commenced, are not eligible for any refund.',
        '• No refunds will be issued for non-attendance or partial attendance of program sessions.',
        'All refund requests must be submitted in writing via email to hello@heelsandglam.com. Approved refunds are processed within 15 business days.',
      ],
    },
    {
      title: '7. Rescheduling Policy',
      content: [
        '• Participants may request to reschedule to a subsequent cohort one time, subject to seat availability. Rescheduling requests must be submitted at least 7 calendar days before the original program start date.',
        '• A rescheduling fee of ₹5,000 may apply, depending on the program and circumstances.',
        '• Second and subsequent rescheduling requests are subject to additional fees and availability, and may not be guaranteed.',
        '• The Academy reserves the right to reschedule or cancel a cohort due to unforeseen circumstances (e.g., venue issues, health emergencies). In such cases, participants will be offered the choice of joining the next available cohort or receiving a full refund.',
      ],
    },
    {
      title: '8. Attendance Expectations',
      content: [
        '• A minimum attendance of 80% of all scheduled sessions is required to be eligible for the program completion certificate.',
        '• Absences must be communicated in advance to the program coordinator via WhatsApp or email.',
        '• Make-up sessions may be offered at the Academy\'s discretion but are not guaranteed.',
        '• Excessive unexcused absences (more than 20% of total sessions) may result in the participant being deemed to have voluntarily withdrawn from the program, with no refund.',
      ],
    },
    {
      title: '9. Certificate Policy',
      content: [
        '• Participants who successfully complete a program (meeting attendance and participation requirements) will receive a Heels & Glam Academy Certificate of Completion.',
        '• Certificates are issued within 14 business days of program completion.',
        '• Certificates are issued in the name provided during the application process. Name changes on certificates will incur a reissuance fee.',
        '• The certificate acknowledges completion of the specified program and does not constitute a professional accreditation, degree, or licence.',
      ],
    },
    {
      title: '10. Intellectual Property',
      content: [
        'All content, materials, methodologies, frameworks (including The Transformation Method™ and The Confidence Code), curriculum documents, presentations, and media created by Heels & Glam Academy are the exclusive intellectual property of Heels & Glam Academy and Aakanksha Anand.',
        '• Participants may not reproduce, distribute, record, or share any program materials without prior written consent.',
        '• Photographs and videos taken during programs by the Academy\'s official photographers may be used for marketing, social media, and promotional purposes. Participants who wish to opt out of media usage must notify the Academy in writing before the program commences.',
        '• Participants retain ownership of any personal work, portfolios, or creative outputs they produce during the program.',
      ],
    },
    {
      title: '11. Limitation of Liability',
      content: [
        'Heels & Glam Academy provides personal development, grooming, confidence coaching, and modelling training services. Our programs are educational in nature and do not constitute medical, psychological, or therapeutic treatment.',
        '• The Academy is not liable for any personal injuries sustained during physical training sessions, provided that reasonable safety precautions have been implemented.',
        '• The Academy does not guarantee specific outcomes, career placements, or professional opportunities as a result of program participation.',
        '• Participants engage in all physical activities (including posture correction, runway practice, and heel walking) at their own risk. Participants with pre-existing medical conditions should consult their physician before enrolling.',
        '• The Academy\'s total liability in any claim shall not exceed the program fee paid by the participant.',
      ],
    },
    {
      title: '12. Governing Law',
      content: [
        'These Terms of Admission shall be governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka, India.',
      ],
    },
    {
      title: '13. Contact Information',
      content: [
        'For any enquiries regarding these Terms of Admission, please contact:',
        '**Heels & Glam Academy**',
        'Founder: Aakanksha Anand',
        'Location: Lavelle Road, Bangalore, Karnataka 560001, India',
        'WhatsApp: +91 9880012345',
        'Email: hello@heelsandglam.com',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-abyss relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <section className="luxury-container pt-16 pb-12 text-center relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-6xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Terms of<br />
          <span className="text-champagne font-serif">Admission</span>
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-6" />
        <p className="text-xs text-alabaster/50 font-sans max-w-lg mx-auto leading-relaxed">
          Effective Date: June 1, 2026 — Last Updated: June 14, 2026
        </p>
      </section>

      {/* Content */}
      <section className="luxury-container max-w-3xl pb-24 relative z-10">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <article key={index} className="border-l border-gold/15 pl-6 md:pl-8">
              <h2 className="text-lg md:text-xl font-serif text-white uppercase tracking-wider mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-xs md:text-sm text-alabaster/60 font-sans leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-alabaster/80 font-medium">$1</strong>')
                    }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
