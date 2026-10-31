export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue?: string;
  year?: string;
  doi?: string;
  url?: string;
  featured?: boolean;
  topics: string[];
  note?: { en: string; ar: string };
};

export const topicLabels: Record<string, { en: string; ar: string }> = {
  steami: { en: "STEMI / PCI", ar: "احتشاء حاد / قسطرة" },
  imaging: { en: "Imaging", ar: "تصوير" },
  congenital: { en: "Congenital / ACHD", ar: "خلقي / بالغين" },
  guidelines: { en: "Consensus", ar: "إجماع" },
  rheumatology: { en: "Cardio-rheumatology", ar: "قلب وروماتيزم" },
  pediatric: { en: "Pediatric", ar: "أطفال" },
};

export const publications: Publication[] = [
  {
    id: "cin-ppci",
    title:
      "Incidence, Predictors and Outcomes of Contrast Induced Nephropathy in Patients with ST Elevation Myocardial Infarction Undergoing Primary Percutaneous Coronary Intervention",
    authors: "M. Khalfallah, A. Allaithy, D. A. Maria",
    venue: "Global Heart 16 (1)",
    year: "2021",
    doi: "10.5334/gh.1071",
    url: "https://doi.org/10.5334/gh.1071",
    featured: true,
    topics: ["steami"],
  },
  {
    id: "stress-hyperglycemia",
    title:
      "Impact of Stress Hyperglycemia on No-Reflow Phenomenon in Patients with ST Elevation Myocardial Infarction Undergoing Primary Percutaneous Coronary Intervention",
    authors: "M. Khalfallah, D. A. Maria, A. Allaithy",
    venue: "Global Heart 17 (1)",
    year: "2022",
    doi: "10.5334/gh.1111",
    url: "https://doi.org/10.5334/gh.1111",
    featured: true,
    topics: ["steami"],
  },
  {
    id: "ischemia-time",
    title:
      "Impact of the Total Ischemia Time on No-Reflow Phenomenon in Patients with ST Elevation Myocardial Infarction Undergoing Primary Percutaneous Coronary Intervention",
    authors: "M. Khalfallah, A. Allaithy, D. A. Maria",
    venue: "Anatolian Journal of Cardiology 26 (5), 382",
    year: "2022",
    doi: "10.5152/anatoljcardiol.2021.846",
    url: "https://doi.org/10.5152/anatoljcardiol.2021.846",
    featured: true,
    topics: ["steami"],
  },
  {
    id: "unawareness",
    title:
      "Impact of Patient Unawareness and Socioeconomic Factors on Patient Presentation to Primary Percutaneous Coronary Intervention",
    authors: "M. Khalfallah, A. Allaithy, D. A. Maria",
    venue: "Arquivos Brasileiros de Cardiologia 119, 25–34",
    year: "2022",
    doi: "10.36660/abc.20210521",
    url: "https://doi.org/10.36660/abc.20210521",
    topics: ["steami"],
  },
  {
    id: "kawasaki",
    title:
      "Egyptian Evidence-Based Consensus on Clinical Practice Recommendations for the Management of Kawasaki Disease",
    authors:
      "Y. El Miedany, S. Salah, H. M. Lotfy, M. H. Abu-Zaid, S. S. Mohamed, S. E. Maher, and colleagues (including D. A. Maria)",
    venue: "Egyptian Rheumatology and Rehabilitation 50 (1), 21",
    year: "2023",
    doi: "10.1186/s43166-023-00180-2",
    url: "https://doi.org/10.1186/s43166-023-00180-2",
    topics: ["guidelines", "pediatric"],
  },
  {
    id: "il34",
    title:
      "Serum Interleukin-34 in Psoriatic Arthritis Patients and Its Correlation with Disease Activity and Subclinical Atherosclerosis",
    authors: "S. A. Tabra, M. H. Abu-Zaid, R. M. Elsharaby, D. Maria, S. ElMiedany",
    venue: "Egyptian Rheumatology and Rehabilitation 50 (1), 18",
    year: "2023",
    doi: "10.1186/s43166-023-00183-z",
    url: "https://doi.org/10.1186/s43166-023-00183-z",
    topics: ["rheumatology"],
  },
  {
    id: "la-remodelling",
    title:
      "Left Atrium Remodelling as a Prognostic Value after Primary Percutaneous Coronary Intervention in Patients with ST Elevation Acute Myocardial Infarction",
    authors: "D. A. Mostafa, A. M. Elsaed",
    venue: "European Heart Journal Supplements 22 (A), A3–A4",
    topics: ["steami", "imaging"],
    note: {
      en: "Listed on the CV with this venue and page range. No independently verified DOI is attached here.",
      ar: "مدرجة في السيرة بهذه الدورية ونطاق الصفحات. لم يُرفق معرف DOI مستقل التحقق هنا.",
    },
  },
  {
    id: "balloon-tricuspid",
    title:
      "Balloon-Expandable Valve Implantation in a Systemic Tricuspid Valve With Annular Calcification Using 3D CT Overlay",
    authors:
      "A. F. d’Aiello, F. De Marco, P. Ferrero, G. Pasqualin, U. Di Dedda, A. Giamberti, Dina Mostafa Maria, M. Chessa",
    venue: "JACC: Cardiovascular Interventions 15 (22), e233–e235",
    year: "2022",
    doi: "10.1016/j.jcin.2022.08.055",
    url: "https://doi.org/10.1016/j.jcin.2022.08.055",
    featured: true,
    topics: ["congenital", "imaging"],
  },
];

export function citationText(p: Publication) {
  const parts = [p.authors, p.title];
  if (p.venue) parts.push(p.venue);
  if (p.year) parts.push(p.year);
  if (p.doi) parts.push(`doi:${p.doi}`);
  return parts.join(". ") + ".";
}
