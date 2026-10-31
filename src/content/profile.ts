export const profile = {
  shortName: { en: "Dr. Dina Abdelsalam", ar: "أ.د. دينا ماريا" },
  fullName: {
    en: "Dr. Dina Abdelsalam",
    ar: "الأستاذة الدكتورة دينا عبد السلام مصطفى ماريا",
  },
  credentials: { en: "MD", ar: "دكتوراه في الطب" },
  academicTitle: {
    en: "Consultant and Professor of Cardiovascular Medicine",
    ar: "استشاري وأستاذ طب القلب والأوعية الدموية",
  },
  affiliation: {
    en: "Faculty of Medicine, Tanta University Hospitals",
    ar: "كلية الطب — مستشفيات جامعة طنطا",
  },
  university: { en: "Tanta University", ar: "جامعة طنطا" },
  universityUrl: "https://www.tanta.edu.eg/",
  emails: ["dina.mareia@med.tanta.edu.eg", "dr_dina_mostafa@yahoo.com"],
  phones: [
    { display: "+20 100 110 7327", href: "tel:+201001107327", raw: "00201001107327" },
    { display: "+20 121 174 6310", href: "tel:+201211746310", raw: "00201211746310" },
  ],
  linkedin: "https://www.linkedin.com/in/dina-abdelsalam-99a546188/",
  portraitSrc: "/images/portrait-hero.jpg",
  cvPdf: "/cv/original-cv.pdf",
} as const;

export const references = [
  {
    name: { en: "Professor Dr. Mai Salama, MD", ar: "الأستاذة الدكتورة مي سلامة" },
    role: {
      en: "Professor of Cardiovascular Medicine, Faculty of Medicine, Tanta University",
      ar: "أستاذ طب القلب والأوعية الدموية، كلية الطب، جامعة طنطا",
    },
    phone: { display: "+20 122 288 4826", href: "tel:+201222884826" },
  },
  {
    name: { en: "Professor Dr. Raghda Elsheikh, MD", ar: "الأستاذة الدكتورة رغدة الشيخ" },
    role: {
      en: "Head of Cardiology Department and Professor of Cardiology, Faculty of Medicine, Tanta University",
      ar: "رئيس قسم القلب وأستاذ القلب، كلية الطب، جامعة طنطا",
    },
    phone: { display: "+20 100 130 7271", href: "tel:+201001307271" },
  },
] as const;
