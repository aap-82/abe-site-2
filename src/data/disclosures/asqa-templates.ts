/**
 * asqa-templates — the verbatim ASQA / RTO disclosure templates.
 *
 * Locked decision #4: the approved disclosure wording lives here as data,
 * NEVER paraphrased at the component level. The structure of each sentence
 * is fixed approved wording; only the bracketed facts (RTO name and code,
 * enrolment partner, ABN, course, permit regulator) are interpolated per
 * page. If a regulator updates the approved wording, it is updated HERE,
 * once, and every page picks it up.
 *
 * Three templates are exported, matching ASQADisclosure's three variants.
 * The fourth disclosure form — the short hero line — is the separate
 * RTOAttributionLine component (ASQA disclosure location 1 of 7).
 *
 * Source of the approved wording: owner-builder-nsw.md, disclosure
 * locations 2, 3, and 4 (transcribed verbatim, 21 May 2026).
 */

export interface DisclosureContext {
  /** Enrolment partner display name, e.g. "ABE Education". */
  enrolPartner: string;
  /** Enrolment partner legal name, e.g. "ABE Education Pty Ltd". */
  enrolPartnerLegal: string;
  /** Enrolment partner ABN, digits and spaces only, e.g. "64 125 455 272". */
  enrolPartnerAbn: string;
  /** RTO display name, e.g. "AlertForce". */
  rto: string;
  /** RTO legal name, e.g. "AlertForce Pty Ltd". */
  rtoLegal: string;
  /** RTO code, number only, e.g. "91826". */
  rtoCode: string;
  /** Full course name, e.g. "NSW Owner Builder Course". */
  courseName: string;
  /** Short course name for the copyright bar, e.g. "NSW Owner Builder". */
  courseShort: string;
  /** National unit codes the course delivers. */
  unitCodes: string[];
  /** Permit name, e.g. "Owner Builder Permits". */
  permitName: string;
  /** Permit regulator, e.g. "Building Commission NSW". */
  permitRegulator: string;
  /** Governing Act, e.g. "Home Building Act 1989". */
  permitAct: string;
  /** Body applications are submitted through, e.g. "Service NSW". */
  permitApplicationBody: string;
  /** Href of the site Terms & Conditions page. */
  termsHref: string;
}

/** ASQA disclosure location 2 — near every CTA. Verbatim approved template. */
export function asqaNearCta(c: DisclosureContext): string {
  return `${c.enrolPartner} recruits and markets training on behalf of ${c.rtoLegal} (RTO ${c.rtoCode}). ${c.rtoLegal} is the Registered Training Organisation responsible for delivering this qualification and issuing certification. All training and assessment is conducted in accordance with the Standards for Registered Training Organisations 2025. ${c.rtoLegal} can be verified on the national register at training.gov.au using RTO Code ${c.rtoCode}.`;
}

/** ASQA disclosure location 3 — per-course footer legal. Verbatim approved template. */
export function asqaFooterLegal(c: DisclosureContext): {
  heading: string;
  paragraphs: string[];
} {
  return {
    heading: 'About this course',
    paragraphs: [
      `This website is operated by ${c.enrolPartner} (ABN ${c.enrolPartnerAbn}) as an authorised third-party enrolment partner. The ${c.courseName} (${c.unitCodes.join(' + ')}) is delivered by ${c.rto}, a nationally recognised Registered Training Organisation (RTO ${c.rtoCode}) accredited by the Australian Skills Quality Authority (ASQA).`,
      `${c.enrolPartner} provides enrolment services, payment processing, and student support. ${c.rto} delivers all training and assessment, issues qualifications, and maintains student records in accordance with the Standards for Registered Training Organisations 2025. ${c.enrolPartner} does not deliver training, conduct assessments, or issue qualifications.`,
      `${c.permitName} are administered by ${c.permitRegulator} under the ${c.permitAct}. Applications are submitted through ${c.permitApplicationBody}. Read our full enrolment terms on the Terms & Conditions page.`,
    ],
  };
}

/** ASQA disclosure location 4 — footer copyright bar. Verbatim 3-line format. */
export function asqaCopyrightBar(c: DisclosureContext): string[] {
  return [
    `Course: ${c.unitCodes.join(' · ')} - ${c.courseShort}`,
    `Training Provider: ${c.rtoLegal} (RTO ${c.rtoCode})`,
    `Enrolment Partner: ${c.enrolPartnerLegal} (ABN ${c.enrolPartnerAbn})`,
  ];
}
