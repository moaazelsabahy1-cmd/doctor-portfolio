import type { Locale } from "@/lib/i18n";

export type TimelineItem = {
  id: string;
  start: string;
  end: { en: string; ar: string };
  title: { en: string; ar: string };
  place: { en: string; ar: string };
  note?: { en: string; ar: string };
  kind: "employment" | "training" | "education";
};

export const timeline: TimelineItem[] = [
  {
    id: "house-officer",
    start: "2005-03",
    end: { en: "February 2006", ar: "فبراير 2006" },
    title: { en: "House Officer", ar: "طبيب امتياز" },
    place: { en: "Tanta University Hospitals", ar: "مستشفيات جامعة طنطا" },
    kind: "employment",
  },
  {
    id: "resident",
    start: "2006-08",
    end: { en: "August 2009", ar: "أغسطس 2009" },
    title: { en: "Resident of Cardiovascular Medicine", ar: "طبيب مقيم بطب القلب والأوعية الدموية" },
    place: {
      en: "Faculty of Medicine, Tanta University Hospitals",
      ar: "كلية الطب — مستشفيات جامعة طنطا",
    },
    kind: "employment",
  },
  {
    id: "assistant-lecturer",
    start: "2009-09",
    end: { en: "April 2016", ar: "أبريل 2016" },
    title: { en: "Assistant Lecturer of Cardiovascular Medicine", ar: "مدرس مساعد طب القلب والأوعية الدموية" },
    place: {
      en: "Faculty of Medicine, Tanta University Hospitals",
      ar: "كلية الطب — مستشفيات جامعة طنطا",
    },
    kind: "employment",
  },
  {
    id: "lecturer",
    start: "2016-05",
    end: { en: "March 2023", ar: "مارس 2023" },
    title: {
      en: "Consultant and Lecturer of Cardiovascular Medicine",
      ar: "استشاري ومدرس طب القلب والأوعية الدموية",
    },
    place: {
      en: "Faculty of Medicine, Tanta University Hospitals",
      ar: "كلية الطب — مستشفيات جامعة طنطا",
    },
    kind: "employment",
  },
  {
    id: "san-donato",
    start: "2022-03",
    end: { en: "31 August 2022", ar: "31 أغسطس 2022" },
    title: {
      en: "Specialized Cardiovascular Training",
      ar: "تدريب متخصص في طب القلب والأوعية الدموية",
    },
    place: {
      en: "IRCCS Policlinico San Donato, San Donato Milanese, Italy",
      ar: "معهد IRCCS Policlinico San Donato، سان دوناتو ميلانيزي، إيطاليا",
    },
    note: {
      en: "Six-month training (1 March 2022 – 31 August 2022) in the cardiac catheterization laboratory and the adult congenital heart disease unit. This period is documented as training, not employment.",
      ar: "تدريب لمدة ستة أشهر (1 مارس 2022 – 31 أغسطس 2022) في مختبر قسطرة القلب ووحدة أمراض القلب الخلقية لدى البالغين. هذه الفترة موثقة كتدريب وليست تعيينًا وظيفيًا.",
    },
    kind: "training",
  },
  {
    id: "professor",
    start: "2023-03",
    end: { en: "Present", ar: "حتى الآن" },
    title: {
      en: "Consultant and Professor of Cardiovascular Medicine",
      ar: "استشاري وأستاذ طب القلب والأوعية الدموية",
    },
    place: {
      en: "Faculty of Medicine, Tanta University Hospitals",
      ar: "كلية الطب — مستشفيات جامعة طنطا",
    },
    kind: "employment",
  },
];

export const education = [
  {
    id: "mbbs",
    date: { en: "November 2004", ar: "نوفمبر 2004" },
    title: { en: "M.B. B.Ch.", ar: "بكالوريوس الطب والجراحة" },
    detail: {
      en: "Excellent with honor degree, Faculty of Medicine, Tanta University, Egypt.",
      ar: "امتياز مع مرتبة الشرف، كلية الطب، جامعة طنطا، مصر.",
    },
  },
  {
    id: "msc",
    date: { en: "October 2009", ar: "أكتوبر 2009" },
    title: { en: "Master’s degree in Cardiovascular Medicine (M.Sc.)", ar: "ماجستير طب القلب والأوعية الدموية" },
    detail: {
      en: "Very good, Faculty of Medicine, Tanta University, Egypt.",
      ar: "جيد جدًا، كلية الطب، جامعة طنطا، مصر.",
    },
  },
  {
    id: "md",
    date: { en: "April 2016", ar: "أبريل 2016" },
    title: { en: "MD in Cardiovascular Medicine", ar: "دكتوراه طب القلب والأوعية الدموية" },
    detail: {
      en: "Faculty of Medicine. Listed on the CV as PhD / MD (April 2016).",
      ar: "كلية الطب. مذكورة في السيرة كدكتوراه / MD (أبريل 2016).",
    },
  },
];

export function tField(locale: Locale, field: { en: string; ar: string }) {
  return field[locale];
}
