import LegalPageLayout, { LegalSection } from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Editorial Ethics — Prime Success Media",
  description: "The journalistic standards and editorial independence Prime Success Media holds itself to.",
};

export default function EditorialEthicsPage() {
  return (
    <LegalPageLayout
      number="LEGAL"
      eyebrow="THE STANDARD BEHIND THE STORY"
      title="EDITORIAL ETHICS"
      subtitle="The journalistic standards, independence, and accountability Prime Success Media holds itself to."
      lastUpdated="18 August 2026"
    >
      <LegalSection title="1. Registration &amp; Accountability">
        <p>
          Prime Success Media is an officially registered fortnightly publication under the Press Registrar
          General of India, Registration No. <strong className="text-ivory">DELENG/2023/90580</strong>. As a
          registered publication, we are accountable to the standards of conduct expected of the Indian press.
        </p>
      </LegalSection>

      <LegalSection title="2. Editorial Independence">
        <p>
          Editorial decisions — including who is profiled, interviewed, or featured on a cover story — are made
          independently by our editorial desk based on newsworthiness and merit. Advertising, sponsorship, or gala
          participation does not influence editorial coverage decisions.
        </p>
      </LegalSection>

      <LegalSection title="3. Advertising Disclosure">
        <p>
          Sponsored content, paid partnerships, and advertorials are clearly labelled as such and are visually and
          editorially distinct from independently reported journalism.
        </p>
      </LegalSection>

      <LegalSection title="4. Accuracy &amp; Sourcing">
        <p>
          We strive for factual accuracy in every story we publish. Where we report on public data, statistics,
          or third-party news, we credit the original source. Interviews and direct quotes are recorded or
          documented for accuracy.
        </p>
      </LegalSection>

      <LegalSection title="5. Corrections Policy">
        <p>
          If you believe a factual error appears in one of our published stories, please write to{" "}
          <a href="mailto:press@primesuccess.media" className="text-royal-gold hover:underline">press@primesuccess.media</a>{" "}
          with details. Verified corrections will be issued promptly and transparently.
        </p>
      </LegalSection>

      <LegalSection title="6. Award &amp; Nomination Integrity">
        <p>
          The Prime Success Excellence Awards are adjudicated by an independent jury against defined merit
          criteria. Financial participation in a gala or event does not guarantee, influence, or purchase an
          award outcome.
        </p>
      </LegalSection>

      <LegalSection title="7. Non-Partisanship">
        <p>
          Prime Success Media does not endorse any political party or candidate. Coverage of government policy,
          governance, and public institutions is reported on its merits, independent of political affiliation.
        </p>
      </LegalSection>

      <LegalSection title="8. Reader Feedback">
        <p>
          We welcome scrutiny of our reporting. Reach our editorial desk any time at{" "}
          <a href="mailto:press@primesuccess.media" className="text-royal-gold hover:underline">press@primesuccess.media</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
