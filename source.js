/**
 * ============================================================================
 * PREP APP — MODULAR QUESTION BANK (source.js)
 * ============================================================================
 * 
 * TO ADD A NEW QUESTION EVERY DAY:
 * 1. Copy the blank template below.
 * 2. Fill in your question details.
 * 3. Paste it inside its corresponding track array:
 *    - GOVERNMENT_QUESTIONS       (for BCS, PSC, Primary Teacher, etc.)
 *    - BANK_QUESTIONS             (for Bangladesh Bank, Combined Banks, etc.)
 *    - IBA_MBA_QUESTIONS          (for DU IBA MBA, BUP MBA, etc.)
 *    - PRIVATE_OTHER_QUESTIONS    (for Telecom, MNC, NGO, IT, etc.)
 * 
 * ----------------------------------------------------------------------------
 * BLANK TEMPLATE (Copy & Paste this):
 * ----------------------------------------------------------------------------
    {
      id: "UNIQUE-ID-HERE",            // e.g. "GOV-BCS-ENG-2024-001"
      examCategory: "government",      // "government" | "bank" | "iba_mba" | "private"
      examName: "46th BCS Preliminary",// Exact job/exam name
      year: 2024,                      // Exam year (number or string)
      subject: "English",              // Subject name (English, Bangla, Math, etc.)
      topic: "Grammar",                // Specific topic
      subtopic: "Prepositions",        // Specific subtopic
      difficulty: "medium",            // "easy" | "medium" | "hard"
      sourceType: "verified_pyq",      // "verified_pyq" | "unverified_historical" | "practice"
      sourceReference: "Official 46th BCS Exam Paper",
      language: "en",                  // "en" | "bn"
      questionType: "mcq",
      question: "Type question text here...",
      options: [
        { id: "A", text: "First option" },
        { id: "B", text: "Second option" },
        { id: "C", text: "Third option" },
        { id: "D", text: "Fourth option" }
      ],
      correctAnswer: "A",              // Must match one option ID
      explanation: "Detailed explanation of why this answer is correct...",
      optionExplanations: {
        A: "Why option A is correct.",
        B: "Why option B is incorrect.",
        C: "Why option C is incorrect.",
        D: "Why option D is incorrect."
      },
      solutionSteps: [],               // Optional: Array of calculation steps for Math
      marksCorrect: 1,
      marksIncorrect: 0.5,
      tags: ["bcs", "english"]
    },
 * ============================================================================
 */

(function () {
  "use strict";

  // ==========================================================================
  // TRACK 1: GOVERNMENT RECRUITMENT (BCS, PSC, Primary, Non-Cadre, Judicial)
  // ==========================================================================
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
      subtopic: "Modern Drama",
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
    },
    {
      id: "GOV-BCS-GK-2021-001",
      examCategory: "government",
      examName: "43rd BCS Preliminary",
      year: 2021,
      subject: "General Knowledge",
      topic: "Bangladesh Affairs",
      subtopic: "Constitutional History",
      difficulty: "medium",
      sourceType: "verified_pyq",
      sourceReference: "43rd BCS Preliminary Official Question Paper",
      language: "bn",
      questionType: "mcq",
      question: "বাংলাদেশের সংবিধানের অভিভাবক কে?",
      options: [
        { id: "A", text: "সংসদ" },
        { id: "B", text: "রাষ্ট্রপতি" },
        { id: "C", text: "সুপ্রিম কোর্ট" },
        { id: "D", text: "প্রধান নির্বাচন কমিশনার" }
      ],
      correctAnswer: "C",
      explanation: "গণপ্রজাতন্ত্রী বাংলাদেশের সংবিধানের অভিভাবক ও ব্যাখ্যাকারক হলো সুপ্রিম কোর্ট।",
      optionExplanations: {
        A: "ভুল। সংসদ আইন প্রণয়নকারী সংস্থা।",
        B: "ভুল। রাষ্ট্রপতি রাষ্ট্রের সাংবিধানিক প্রধান।",
        C: "সঠিক উত্তর। সংবিধানের অভিভাবক সুপ্রিম কোর্ট।",
        D: "ভুল।"
      },
      solutionSteps: [],
      marksCorrect: 1,
      marksIncorrect: 0.5,
      tags: ["bcs", "gk", "constitution"]
    }
    // Paste additional Government Job questions here
  ];

  // ==========================================================================
  // TRACK 2: BANK RECRUITMENT (Bangladesh Bank, Combined Banks, Sonali, etc.)
  // ==========================================================================
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
    },
    {
      id: "BANK-COMB-ENG-2023-001",
      examCategory: "bank",
      examName: "Combined 8 Banks Officer",
      year: 2023,
      subject: "English",
      topic: "Vocabulary",
      subtopic: "Synonyms",
      difficulty: "medium",
      sourceType: "verified_pyq",
      sourceReference: "Combined 8 Banks Officer Exam 2023",
      language: "en",
      questionType: "mcq",
      question: "What is the synonym of 'CANDID'?",
      options: [
        { id: "A", text: "Secretive" },
        { id: "B", text: "Frank" },
        { id: "C", text: "Dishonest" },
        { id: "D", text: "Arrogant" }
      ],
      correctAnswer: "B",
      explanation: "'Candid' means truthful and straightforward; frank.",
      optionExplanations: {
        A: "Incorrect. Antonym.",
        B: "Correct. 'Frank' means honest and direct.",
        C: "Incorrect. Antonym.",
        D: "Incorrect."
      },
      solutionSteps: [],
      marksCorrect: 1,
      marksIncorrect: 0.25,
      tags: ["bank", "english", "synonym"]
    }
    // Paste additional Bank Recruitment questions here
  ];

  // ==========================================================================
  // TRACK 3: DU IBA MBA ADMISSION (English, Math, Analytical)
  // ==========================================================================
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
      explanation: "The conclusion holds only if bus fares do not also rise to keep the metro comparatively cheaper.",
      optionExplanations: {
        A: "Correct. If bus fares rise equally, metro will remain relatively cheaper.",
        B: "Incorrect. The premise explicitly focuses on price sensitivity.",
        C: "Incorrect. Irrelevant to comparative transit choices.",
        D: "Incorrect. Operational cost does not affect rider pricing assumptions directly."
      },
      solutionSteps: [],
      marksCorrect: 1,
      marksIncorrect: 0.25,
      tags: ["iba", "analytical", "critical-reasoning"]
    }
    // Paste additional IBA MBA questions here
  ];

  // ==========================================================================
  // TRACK 4: PRIVATE SECTOR & OTHER RECRUITMENTS
  // ==========================================================================
  var PRIVATE_OTHER_QUESTIONS = [
    // Paste Private Company, IT, NGO, or specialized exam questions here
  ];

  // ==========================================================================
  // COMPILED QUESTION BANK & INTEGRITY VALIDATOR
  // ==========================================================================
  var ALL_ENTRIES = [].concat(
    GOVERNMENT_QUESTIONS,
    BANK_QUESTIONS,
    IBA_MBA_QUESTIONS,
    PRIVATE_OTHER_QUESTIONS
  );

  var seenIds = Object.create(null);
  var verifiedBank = [];

  ALL_ENTRIES.forEach(function (q, index) {
    if (!q || typeof q !== "object") {
      console.warn("Invalid record format at index " + index);
      return;
    }

    if (!q.id || typeof q.id !== "string") {
      console.warn("Question at index " + index + " is missing a unique string ID.");
      return;
    }

    if (seenIds[q.id]) {
      console.warn("Duplicate question ID '" + q.id + "' detected. Skipping duplicate entry.");
      return;
    }

    if (!q.question || !Array.isArray(q.options) || q.options.length < 2) {
      console.warn("Question '" + q.id + "' is missing question text or has less than 2 options.");
      return;
    }

    var validAnswerExists = q.options.some(function (opt) {
      return opt && opt.id === q.correctAnswer;
    });

    if (!validAnswerExists) {
      console.warn("Question '" + q.id + "' has an invalid correctAnswer '" + q.correctAnswer + "'.");
      return;
    }

    seenIds[q.id] = true;
    verifiedBank.push(q);
  });

  // Expose globally for index.html
  window.QUESTION_BANK = Object.freeze(verifiedBank);

})();
