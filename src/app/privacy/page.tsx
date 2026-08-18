import LegalPageLayout, { LegalSection } from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy — Prime Success Media",
  description: "How Prime Success Media collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      number="LEGAL"
      eyebrow="YOUR DATA, OUR RESPONSIBILITY"
      title="PRIVACY POLICY"
      subtitle="How Prime Success Media collects, uses, and safeguards your personal information."
      lastUpdated="18 August 2026"
    >
      <LegalSection title="1. Overview">
        <p>
          Prime Success Media (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates this website and its
          associated digital reader, award nomination, survey, and hiring platforms. This policy explains what
          information we collect from you, why we collect it, and how it is stored and used.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We collect information you voluntarily provide to us, including:</p>
        <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
          <li><strong className="text-ivory">Contact &amp; inquiry details</strong> — name, email, phone number, and message content submitted via our contact form.</li>
          <li><strong className="text-ivory">Newsletter subscriptions</strong> — your email address, used solely to deliver magazine and award updates.</li>
          <li><strong className="text-ivory">Award nominations &amp; survey responses</strong> — details submitted about nominees and your opinions on published surveys.</li>
          <li><strong className="text-ivory">Career applications</strong> — full name, email, phone, location, work experience, notice period, portfolio links, expected compensation, your resume/CV file, and any cover note you write.</li>
        </ul>
        <p>
          We do not knowingly collect information from anyone under the age of 16.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>Information you provide is used only for the purpose you provided it for:</p>
        <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
          <li>Responding to inquiries and press or advertising requests.</li>
          <li>Sending magazine issue and award announcements to newsletter subscribers.</li>
          <li>Evaluating award nominations and processing survey submissions.</li>
          <li>Reviewing career applications and contacting candidates about open roles.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>
      </LegalSection>

      <LegalSection title="4. Data Storage &amp; Retention">
        <p>
          Career application data, including uploaded resumes, is retained only as long as necessary to evaluate
          your application and is accessible only to authorised HR personnel. Contact and newsletter data is
          retained until you request its removal.
        </p>
      </LegalSection>

      <LegalSection title="5. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal data at any time by writing to{" "}
          <a href="mailto:info@primesuccess.media" className="text-royal-gold hover:underline">info@primesuccess.media</a>.
          Newsletter subscribers may unsubscribe at any time using the link included in every email.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies &amp; Analytics">
        <p>
          We may use essential cookies to remember your theme preference and basic site functionality. We do not
          use third-party advertising trackers.
        </p>
      </LegalSection>

      <LegalSection title="7. Changes to This Policy">
        <p>
          We may update this policy from time to time. Material changes will be reflected by updating the
          &quot;Last updated&quot; date above.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact Us">
        <p>
          For any privacy-related questions, write to us at{" "}
          <a href="mailto:info@primesuccess.media" className="text-royal-gold hover:underline">info@primesuccess.media</a>, or by post to our Corporate Office: 4th Floor, Aggarwal Metro Height, 453, Netaji Subhash Place, Pitampura, Delhi 110034.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
