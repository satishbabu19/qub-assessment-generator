// courses.js
const COURSES = [
  // ---- HAPP ----
  { school: "happ", track: "intl", name: "Anthropology MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "Conflict Transformation and Social Justice MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "Geopolitics MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "History MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "International Political Economy MSC", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "International Public Policy MSC", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "International Relations MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "Philosophy MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "Politics MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "Public History MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "happ", track: "intl", name: "Violence, Terrorism and Security MA", ao: "Danielle", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },

  // ---- Law ----
  { school: "law", track: "intl", name: "Criminology and Criminal Justice LLM", ao: "Joe", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "law", track: "intl", name: "Intellectual Property Law LLM", ao: "Joe", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "law", track: "intl", name: "International Commercial and Business Law LLM", ao: "Elaine", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "law", track: "intl", name: "International Human Rights Law LLM", ao: "Joe", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "law", track: "intl", name: "Law and Technology LLM", ao: "Joe", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },
  { school: "law", track: "intl", name: "Law LLM", ao: "Joe", ielts: "6.0 (5.5)", deposit: "No", deadline: "" },

  // ---- NBE ----
  { school: "nbe", track: "intl", name: "Construction and Project Management with Industrial Internship MSC", ao: "Hannah", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "31st August" },
  { school: "nbe", track: "intl", name: "Construction and Project Management MSC", ao: "Hannah", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "31st August" },
  { school: "nbe", track: "gift", name: "Construction and Project Management MSC [GIFT City]", ao: "Hannah", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "15th September" },

  // ---- QBS ----
  { school: "qbs", track: "intl", name: "Accounting, Finance and Analytics MSC", ao: "Elaine", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Actuarial Science MSC", ao: "Radhika", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "AI in Business MSC", ao: "Michael", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Business Analytics MSC", ao: "Bernie, Radhika, Julie", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Digital Business MSC", ao: "Michael", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Digital Marketing and Analytics MSC", ao: "Grace", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Finance and Trading MSC", ao: "David", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Finance MSCFIN", ao: "Siobán", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Financial Analytics MSC", ao: "David", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Financial Risk Management MSC", ao: "David", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Human Resource Management MSC", ao: "Grace", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "International Business MSC", ao: "Gráinne", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Management MSC", ao: "Fiona", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Marketing MSC", ao: "Bernie, Radhika, Julie", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Master of Business Administration (with Internship) MBA", ao: "Grace", ielts: "6.5 (6.0)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Master of Business Administration MBA", ao: "Grace", ielts: "6.5 (6.0)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Supply Chain and Analytics MSC", ao: "David", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "intl", name: "Technology Management MSC", ao: "Siobán", ielts: "6.0 (5.5)", deposit: "No", deadline: "31st August" },
  { school: "qbs", track: "gift", name: "Business Analytics MSC [GIFT City]", ao: "Bernie, Radhika, Julie", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "15th September" },
  { school: "qbs", track: "gift", name: "Finance MSCFIN [GIFT City]", ao: "Siobán", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "15th September" },
  { school: "qbs", track: "gift", name: "Financial Analytics MSC [GIFT City]", ao: "David", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "15th September" },
  { school: "qbs", track: "gift", name: "AI in Business MSC [GIFT City]", ao: "Michael", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "15th September" },

  // ---- EEECS ----
  { school: "eeecs", track: "intl", name: "Artificial Intelligence MSC", ao: "Joe", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "31st August" },
  { school: "eeecs", track: "gift", name: "Artificial Intelligence MSC [GIFT City]", ao: "Joe", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "15th September" },

  // ---- PHARMACY ----
  { school: "pharmacy", track: "intl", name: "Industrial Pharmaceutics MSC", ao: "Grace", ielts: "6.0 (5.5)", deposit: "Yes", deadline: "31st August" }
];