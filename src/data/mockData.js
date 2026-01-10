// Mock data for SOEGIS Study Abroad App

export const universities = [
  {
    id: 1,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    ranking: 21,
    logo: "🇨🇦",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    description: "One of Canada's top research universities with a global reputation for excellence.",
    tuitionRange: "$45,000 - $58,000",
    acceptanceRate: "43%",
    programs: [
      { id: 101, name: "Computer Science", level: "Bachelor", duration: "4 years", tuition: 58000, intake: "Fall 2026" },
      { id: 102, name: "Business Administration", level: "Master", duration: "2 years", tuition: 52000, intake: "Fall 2026" },
    ]
  },
  {
    id: 2,
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    ranking: 14,
    logo: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    description: "Australia's leading university with world-class research facilities.",
    tuitionRange: "$35,000 - $48,000",
    acceptanceRate: "70%",
    programs: [
      { id: 201, name: "Data Science", level: "Master", duration: "2 years", tuition: 45000, intake: "February 2026" },
      { id: 202, name: "Engineering", level: "Bachelor", duration: "4 years", tuition: 42000, intake: "February 2026" },
    ]
  },
  {
    id: 3,
    name: "University of Manchester",
    country: "United Kingdom",
    city: "Manchester",
    ranking: 27,
    logo: "🇬🇧",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    description: "Historic Russell Group university with strong industry connections.",
    tuitionRange: "$25,000 - $38,000",
    acceptanceRate: "56%",
    programs: [
      { id: 301, name: "MBA", level: "Master", duration: "1 year", tuition: 38000, intake: "September 2026" },
      { id: 302, name: "Medicine", level: "Bachelor", duration: "5 years", tuition: 35000, intake: "September 2026" },
    ]
  },
  {
    id: 4,
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    ranking: 50,
    logo: "🇩🇪",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800",
    description: "Leading technical university in Europe with excellent engineering programs.",
    tuitionRange: "Free - $5,000",
    acceptanceRate: "32%",
    programs: [
      { id: 401, name: "Mechanical Engineering", level: "Master", duration: "2 years", tuition: 0, intake: "Winter 2026" },
      { id: 402, name: "Computer Science", level: "Bachelor", duration: "3 years", tuition: 0, intake: "Winter 2026" },
    ]
  },
  {
    id: 5,
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    ranking: 8,
    logo: "🇸🇬",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    description: "Asia's top university with cutting-edge research and innovation.",
    tuitionRange: "$28,000 - $42,000",
    acceptanceRate: "24%",
    programs: [
      { id: 501, name: "Artificial Intelligence", level: "Master", duration: "1.5 years", tuition: 42000, intake: "August 2026" },
      { id: 502, name: "Finance", level: "Bachelor", duration: "4 years", tuition: 35000, intake: "August 2026" },
    ]
  },
  {
    id: 6,
    name: "University of British Columbia",
    country: "Canada",
    city: "Vancouver",
    ranking: 34,
    logo: "🇨🇦",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
    description: "Beautiful campus with strong environmental and sustainability programs.",
    tuitionRange: "$42,000 - $55,000",
    acceptanceRate: "52%",
    programs: [
      { id: 601, name: "Environmental Science", level: "Bachelor", duration: "4 years", tuition: 45000, intake: "September 2026" },
      { id: 602, name: "MBA", level: "Master", duration: "2 years", tuition: 55000, intake: "September 2026" },
    ]
  }
];

export const scholarships = [
  {
    id: 1,
    name: "SOEGIS Merit Scholarship",
    amount: "$5,000 - $15,000",
    eligibility: "GPA above 3.5",
    deadline: "March 15, 2026",
    type: "Merit-based"
  },
  {
    id: 2,
    name: "Commonwealth Scholarship",
    amount: "Full Tuition",
    eligibility: "Students from Commonwealth countries",
    deadline: "December 1, 2025",
    type: "Need-based"
  },
  {
    id: 3,
    name: "Destination Australia",
    amount: "$15,000/year",
    eligibility: "International students to regional Australia",
    deadline: "Rolling",
    type: "Regional"
  }
];

export const countries = [
  { name: "USA", flag: "🇺🇸", avgCost: "$35,000 - $70,000/year" },
  { name: "Canada", flag: "🇨🇦", avgCost: "$25,000 - $50,000/year" },
  { name: "UK", flag: "🇬🇧", avgCost: "$22,000 - $45,000/year" },
  { name: "Australia", flag: "🇦🇺", avgCost: "$28,000 - $48,000/year" },
  { name: "Germany", flag: "🇩🇪", avgCost: "$0 - $20,000/year" },
  { name: "Singapore", flag: "🇸🇬", avgCost: "$25,000 - $42,000/year" },
  { name: "Ireland", flag: "🇮🇪", avgCost: "$12,000 - $30,000/year" },
  { name: "New Zealand", flag: "🇳🇿", avgCost: "$22,000 - $35,000/year" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    university: "University of Toronto",
    program: "Computer Science",
    image: "👩‍🎓",
    text: "SOEGIS made my dream of studying in Canada a reality. The counselors were supportive every step of the way!",
    rating: 5
  },
  {
    id: 2,
    name: "Raj Patel",
    university: "University of Melbourne",
    program: "Data Science",
    image: "👨‍🎓",
    text: "The application process was seamless. I got accepted to my top choice university with SOEGIS guidance.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Ahmed",
    university: "University of Manchester",
    program: "MBA",
    image: "👩‍💼",
    text: "Best decision to work with SOEGIS. They helped me secure a scholarship worth $10,000!",
    rating: 5
  }
];

export const applicationStatuses = [
  "Draft",
  "Submitted",
  "Under Review",
  "Documents Required",
  "Interview Scheduled",
  "Offer Received",
  "Accepted",
  "Rejected"
];

export const documentTypes = [
  "Academic Transcripts",
  "Test Scores (IELTS/TOEFL)",
  "Passport",
  "Statement of Purpose",
  "Letters of Recommendation",
  "Financial Documents",
  "Work Experience Letters",
  "CV/Resume"
];

export const livingCosts = {
  "USA": { housing: 1200, food: 400, transport: 100, misc: 300 },
  "Canada": { housing: 900, food: 350, transport: 80, misc: 250 },
  "UK": { housing: 800, food: 300, transport: 90, misc: 200 },
  "Australia": { housing: 1100, food: 400, transport: 100, misc: 280 },
  "Germany": { housing: 600, food: 250, transport: 70, misc: 150 },
  "Singapore": { housing: 1000, food: 350, transport: 80, misc: 220 },
};
