import LegalPageLayout, { LegalSection } from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Terms of Distinction — Prime Success Media",
  description: "The terms governing use of the Prime Success Media website, magazine, and awards platform.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      number="LEGAL"
      eyebrow="THE AGREEMENT BEHIND THE HONOUR"
      title="TERMS OF DISTINCTION"
      subtitle="The terms governing your use of the Prime Success Media website, digital magazine, and awards platform."
      lastUpdated="18 August 2026"
    >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing this website or using any of its features — including the digital magazine reader, award
          nominations, public surveys, or career applications — you agree to be bound by these Terms of
          Distinction. If you do not agree, please discontinue use of the site.
        </p>
      </LegalSection>

      <LegalSection title="2. Editorial Content &amp; Copyright">
        <p>
          All magazine issues, articles, interviews, photography, and design published by Prime Success Media are
          the intellectual property of Prime Success Media or its licensors. Reproduction, redistribution, or
          syndication of any content — in whole or in part — requires prior written permission. For syndication
          requests, contact{" "}
          <a href="mailto:info@primesuccess.media" className="text-royal-gold hover:underline">info@primesuccess.media</a>.
        </p>
      </LegalSection>

      <LegalSection title="3. Award Nominations">
        <p>
          Submitting a nomination does not guarantee recognition. All nominations are reviewed by the Prime
          Success Media Jury at its sole discretion. We reserve the right to verify, decline, or withdraw a
          nomination or award at any stage if submitted information is found to be false or misleading.
        </p>
      </LegalSection>

      <LegalSection title="4. Surveys &amp; Public Sentiment Polls">
        <p>
          Survey results published on this site reflect the opinions of respondents at the time of collection and
          are presented for editorial and informational purposes only. They should not be relied upon as
          statistically representative research.
        </p>
      </LegalSection>

      <LegalSection title="5. Career Applications">
        <p>
          Submitting a career application does not create any employment relationship or obligation on the part
          of Prime Success Media to interview or hire the applicant. Information submitted is used solely for
          recruitment evaluation as described in our{" "}
          <a href="/privacy" className="text-royal-gold hover:underline">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection title="6. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
          <li>Submit false, defamatory, or misleading information through any form on this site.</li>
          <li>Attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
          <li>Use automated means to scrape or bulk-download magazine content without permission.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Disclaimer">
        <p>
          Content is published in good faith for general informational and editorial purposes. Prime Success
          Media makes no warranties about the completeness or accuracy of third-party news content referenced or
          linked from this site.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing Law">
        <p>
          These terms are governed by the laws of India. Any disputes arising from use of this website shall fall
          under the jurisdiction of the courts in Delhi, India.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>
          Questions about these terms may be sent to{" "}
          <a href="mailto:info@primesuccess.media" className="text-royal-gold hover:underline">info@primesuccess.media</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
