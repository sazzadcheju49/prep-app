/**
 * ============================================================================
 * PREP APP — MODULAR QUESTION BANK ARCHITECTURE (source.js)
 * ============================================================================
 * 
 * TAXONOMY & CLASSIFICATION GUIDE:
 * 1. examCategory:
 *    - "government" : BCS, PSC, Primary, Non-Cadre, Judicial, etc.
 *    - "bank"       : Bangladesh Bank, Combined 8/10 Banks, Private Banks.
 *    - "iba_mba"    : DU IBA MBA, JU IBA, BUP MBA.
 *    - "private"    : Telecom, MNCs, NGOs, Private Enterprises.
 * 
 * 2. sourceType (Strict authenticity tags):
 *    - "verified_pyq"          : Verified authentic historical examination question.
 *    - "unverified_historical" : Claimed historical question awaiting paper confirmation.
 *    - "practice"              : Newly authored practice/model question.
 * 
 * 3. Question Schema Template:
 *    {
 *      id: "UNIQUE-STABLE-ID",        // e.g. "BANK-BB-MATH-2024-001"
 *      examCategory: "bank",
 *      examName: "Bangladesh Bank AD",
 *      year: 2024,
 *      subject: "Mathematics",
 *      topic: "Percentage & Profit",
 *      subtopic: "Markup & Discount",
 *      difficulty: "medium",          // "easy" | "medium" | "hard"
 *      sourceType: "verified_pyq",    // "verified_pyq" | "unverified_historical" | "practice"
 *      sourceReference: "BB AD Exam 2024 (Official Paper)",
 *      language: "en",                // "en" | "bn"
 *      questionType: "mcq",
 *      question: "Question text goes here...",
 *      options: [
 *        { id: "A", text: "First option" },
 *        { id: "B", text: "Second option" },
 *        { id: "C", text: "Third option" },
 *        { id: "D", text: "Fourth option" }
 *      ],
 *      correctAnswer: "B",
 *      explanation: "Detailed reason why B is correct...",
 *      optionExplanations: {
 *        A: "Why A is incorrect.",
 *        B: "Why B is correct.",
 *        C: "Why C is incorrect.",
 *        D: "Why D is incorrect."
 *      },
 *      solutionSteps: [               // Optional: For Math & Analytical calculations
 *        "Step 1: Write formula",
 *        "Step 2: Solve"
 *      ],
 *      marksCorrect: 1,
 *      marksIncorrect: 0.25,
 *      tags: ["bank", "math", "percentage"]
 *    }
 * ============================================================================
 */

(function () {
  "use strict";

  // --------------------------------------------------------------------------
  // TRACK 1: GOVERNMENT RECRUITMENT (BCS, PSC, Primary, Judicial, Non-Cadre)
  // --------------------------------------------------------------------------
  var GOVERNMENT_QUESTIONS = [
    {
      id: "GOV-BCS-ENG-2023-001",
      examCategory: "government",
      examName: "45th BCS Preliminary",
      year: 2023,
      subject: "English",
      topic: "Grammar",
      subtopic: "Appropriate Prepositions",
      difficulty: "medium",
      sourceType: "verified_pyq",
      sourceReference: "45th BCS Preliminary Official Question Paper",
      language: "en",
      questionType: "mcq",
      question: "He is devoid _____ common sense.",
      options: [
        { id: "A", text: "of" },
        { id: "B", text: "from" },
        { id: "C", text: "in" },
        { id: "D", text: "with" }
      ],
      correctAnswer: "A",
      explanation: "The adjective 'devoid' takes the preposition 'of', meaning entirely lacking or empty.",
      optionExplanations: {
        A: "Correct. 'Devoid of' is an appropriate preposition.",
        B: "Incorrect. 'Devoid from' is non-standard.",
        C: "Incorrect. 'Devoid in' is ungrammatical.",
        D: "Incorrect. 'Devoid with' is ungrammatical."
      },
      solutionSteps: [],
      marksCorrect: 1,
      marksIncorrect: 0.5,
      tags: ["bcs", "english", "preposition"]
    },
    {
      id: "GOV-BCS-BNG-2022-001",
      examCategory: "government",
      examName: "44th BCS Preliminary",
      year: 2022,
      subject: "Bangla",
      topic: "Literature",
      subtopic: "Rabindra Literature",
      difficulty: "medium",
      sourceType: "verified_pyq",
      sourceReference: "44th BCS Preliminary Official Question Paper",
      language: "bn",
      questionType: "mcq",
      question: "‘কোনটি রবীন্দ্রনাথ ঠাকুরের রচিত নাটক?’",
      options: [
        { id: "A", text: "রক্তকরবী" },
        { id: "B", text: "কবর" },
        { id: "C", text: "নীলদর্পণ" },
        { id: "D", text: "সিরাজউদ্দৌলা" }
      ],
      correctAnswer: "A",
      explanation: "‘রক্তকরবী’ রবীন্দ্রনাথ ঠাকুরের রচিত একটি বিখ্যাত সাংকেতিক নাটক (১৯২৬)। ‘কবর’ নাটকটি মুনীর চৌধুরীর, ‘নীলদর্পণ’ দীনবন্ধু মিত্রের এবং ‘সিরাজউদ্দৌলা’ সিকান্দার আবু জাফরের নাটক।",
      optionExplanations: {
        A: "সঠিক উত্তর। এটি রবীন্দ্রনাথের নাটক।",
        B: "ভুল। 'কবর' মুনীর চৌধুরীর নাটক।",
        C: "ভুল। 'নীলদর্পণ' দীনবন্ধু মিত্রের নাটক।",
        D: "ভুল। এটি সিকান্দার আবু জাফরের নাটক।"
      },
      solutionSteps: [],
      marksCorrect: 1,
      marksIncorrect: 0.5,
      tags: ["bcs", "bangla", "literature"]
    }
    // Paste additional Government Job questions here
  ];

  // --------------------------------------------------------------------------
  // TRACK 2: BANK RECRUITMENT (Bangladesh Bank, Combined, Sonali, Agrani)
  // --------------------------------------------------------------------------
  var BANK_QUESTIONS = [
    {
      id: "BANK-BB-MATH-2022-001",
      examCategory: "bank",
      examName: "Bangladesh Bank AD",
      year: 2022,
      subject: "Mathematics",
      topic: "Arithmetic",
      subtopic: "Percentage & Markup",
      difficulty: "hard",
      sourceType: "verified_pyq",
      sourceReference: "Bangladesh Bank Assistant Director Recruitment 2022",
      language: "en",
      questionType: "mcq",
      question: "If a product is sold at a 20% discount, the merchant still makes a 20% profit. What was the markup percentage above cost price?",
      options: [
        { id: "A", text: "40%" },
        { id: "B", text: "44%" },
        { id: "C", text: "50%" },
        { id: "D", text: "60%" }
      ],
      correctAnswer: "C",
      explanation: "Let Cost Price = 100. Selling Price with 20% profit = 120. Since SP is 80% of Marked Price (MP): 0.80 * MP = 120 => MP = 150. Markup = 150 - 100 = 50%.",
      optionExplanations: {
        A: "Incorrect. 40% markup would yield 12% profit after a 20% discount.",
        B: "Incorrect. Common arithmetic error.",
        C: "Correct. (120 / 0.8) = 150, which is 50% above the base cost 100.",
        D: "Incorrect."
      },
      solutionSteps: [
        "Let Cost Price (CP) = 100",
        "Selling Price (SP) = CP * 1.20 = 120",
        "Since Discount is 20%: SP = Marked Price (MP) * (1 - 0.20) = 0.80 * MP",
        "0.80 * MP = 120  =>  MP = 120 / 0.80 = 150",
        "Markup % = ((150 - 100) / 100) * 100 = 50%"
      ],
      marksCorrect: 1,
      marksIncorrect: 0.25,
      tags: ["bb", "math", "percentage"]
    }
    // Paste additional Bank Recruitment questions here
  ];

  // --------------------------------------------------------------------------
  // TRACK 3: DU IBA MBA ADMISSION (English, Math, Analytical)
  // --------------------------------------------------------------------------
  var IBA_MBA_QUESTIONS = [
    {
      id: "IBA-MBA-ANA-2023-001",
      examCategory: "iba_mba",
      examName: "DU IBA MBA Admission Test",
      year: 2023,
      subject: "Analytical",
      topic: "Critical Reasoning",
      subtopic: "Assumption Identification",
      difficulty: "hard",
      sourceType: "practice",
      sourceReference: "DU IBA MBA Pattern Practice Series",
      language: "en",
      questionType: "mcq",
      question: "Editorial: City commuters will shift to the metro rail only if fares remain cheaper than bus transit. The metro authority plans to raise fares by 15% next month. Therefore, commuter traffic on metro rail will drop. Which assumption underlies this argument?",
      options: [
        { id: "A", text: "Bus fares will not increase proportionally next month." },
        { id: "B", text: "Metro riders care only about speed and comfort." },
        { id: "C", text: "Bus ridership in the city has peaked." },
        { id: "D", text: "Metro operational costs have declined." }
      ],
      correctAnswer: "A",
      explanation: "The argument assumes the fare difference will narrow. If bus fares also increase by 15% or more, the relative economic advantage remains unchanged.",
      optionExplanations: {
        A: "Correct. If bus fares rise equally, metro will remain relatively cheaper.",
        B: "Incorrect. The premise explicitly focuses on price sensitivity.",
        C: "Incorrect. Irrelevant to comparative transit choice.",
        D: "Incorrect. Cost of operation does not dictate rider behavior directly."
      },
      solutionSteps: [],
      marksCorrect: 1,
      marksIncorrect: 0.25,
      tags: ["iba", "analytical", "critical-reasoning"]
    }
    // Paste additional IBA MBA questions here
  ];

  // --------------------------------------------------------------------------
  // TRACK 4: PRIVATE SECTOR & OTHER RECRUITMENTS
  // --------------------------------------------------------------------------
  var PRIVATE_AND_OTHER_QUESTIONS = [
    // Paste Private Company, IT, NGO, or specialized questions here
  ];

  // --------------------------------------------------------------------------
  // COMPILED QUESTION BANK & INTEGRITY VALIDATOR
  // --------------------------------------------------------------------------
  var ALL_QUESTIONS = [].concat(
    GOVERNMENT_QUESTIONS,
    BANK_QUESTIONS,
    IBA_MBA_QUESTIONS,
    PRIVATE_AND_OTHER_QUESTIONS
  );

  // Runtime Schema & ID Uniqueness Validator
  var seenIds = Object.create(null);
  var validQuestions = [];

  ALL_QUESTIONS.forEach(function (q, index) {
    if (!q || typeof q !== "object") {
      console.warn("Invalid question record at index " + index);
      return;
    }

    if (!q.id || typeof q.id !== "string") {
      console.warn("Missing unique ID for question at index " + index);
      return;
    }

    if (seenIds[q.id]) {
      console.warn("Duplicate question ID detected: '" + q.id + "'. Skipping duplicate.");
      return;
    }

    if (!q.question || !Array.isArray(q.options) || q.options.length < 2) {
      console.warn("Question '" + q.id + "' is missing text or has insufficient options.");
      return;
    }

    var hasValidAnswer = q.options.some(function (opt) {
      return opt && opt.id === q.correctAnswer;
    });

    if (!hasValidAnswer) {
      console.warn("Question '" + q.id + "' has an invalid correctAnswer '" + q.correctAnswer + "'.");
      return;
    }

    seenIds[q.id] = true;
    validQuestions.push(q);
  });

  // Expose global registry for index.html
  window.QUESTION_BANK = Object.freeze(validQuestions);

})();
