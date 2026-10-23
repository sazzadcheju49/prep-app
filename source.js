/**
 * PREP APP — COMPACT QUESTION BANK (source.js)
 * 
 * TEMPLATE TO ADD A SET:
 * {
 *   exam: "46th BCS Preliminary",
 *   year: 2024,
 *   category: "government", // "government" | "bank" | "iba_mba" | "private"
 *   subject: "English",
 *   source: "verified_pyq", // "verified_pyq" | "practice" | "unverified_historical"
 *   questions: [
 *     {
 *       q: "Question text here?",
 *       o: ["Option A", "Option B", "Option C", "Option D"],
 *       a: "A",
 *       e: "Detailed explanation here."
 *     }
 *   ]
 * }
 */

(function () {
  "use strict";

  var QUESTION_SETS = [
    // ------------------------------------------------------------------------
    // SET 1: 45th BCS Preliminary — English
    // ------------------------------------------------------------------------
    {
      exam: "45th BCS Preliminary",
      year: 2023,
      category: "government",
      subject: "English",
      source: "verified_pyq",
      questions: [
        {
          q: "He is devoid _____ common sense.",
          o: ["of", "from", "in", "with"],
          a: "A",
          e: "The adjective 'devoid' takes the preposition 'of', meaning lacking."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // SET 2: 44th BCS Preliminary — Bangla
    // ------------------------------------------------------------------------
    {
      exam: "44th BCS Preliminary",
      year: 2022,
      category: "government",
      subject: "Bangla",
      source: "verified_pyq",
      questions: [
        {
          q: "‘কোনটি রবীন্দ্রনাথ ঠাকুরের রচিত নাটক?’",
          o: ["রক্তকরবী", "কবর", "নীলদর্পণ", "সিরাজউদ্দৌলা"],
          a: "A",
          e: "‘রক্তকরবী’ রবীন্দ্রনাথ ঠাকুরের রচিত বিখ্যাত সাংকেতিক নাটক (১৯২৬)।"
        }
      ]
    },

    // ------------------------------------------------------------------------
    // SET 3: 43rd BCS Preliminary — General Knowledge
    // ------------------------------------------------------------------------
    {
      exam: "43rd BCS Preliminary",
      year: 2021,
      category: "government",
      subject: "General Knowledge",
      source: "verified_pyq",
      questions: [
        {
          q: "বাংলাদেশের সংবিধানের অভিভাবক কে?",
          o: ["সংসদ", "রাষ্ট্রপতি", "সুপ্রিম কোর্ট", "প্রধান নির্বাচন কমিশনার"],
          a: "C",
          e: "গণপ্রজাতন্ত্রী বাংলাদেশের সংবিধানের অভিভাবক ও ব্যাখ্যাকারক সুপ্রিম কোর্ট।"
        }
      ]
    },

    // ------------------------------------------------------------------------
    // SET 4: Bangladesh Bank AD — Mathematics
    // ------------------------------------------------------------------------
    {
      exam: "Bangladesh Bank AD",
      year: 2022,
      category: "bank",
      subject: "Mathematics",
      source: "verified_pyq",
      questions: [
        {
          q: "If a product is sold at a 20% discount, the merchant still makes a 20% profit. What was the markup percentage above cost price?",
          o: ["40%", "44%", "50%", "60%"],
          a: "C",
          e: "Let CP=100 => SP=120. With 20% discount, 0.8*MP = 120 => MP=150. Markup = 50%."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // SET 5: Combined 8 Banks Officer — English
    // ------------------------------------------------------------------------
    {
      exam: "Combined 8 Banks Officer",
      year: 2023,
      category: "bank",
      subject: "English",
      source: "verified_pyq",
      questions: [
        {
          q: "What is the synonym of 'CANDID'?",
          o: ["Secretive", "Frank", "Dishonest", "Arrogant"],
          a: "B",
          e: "'Candid' means truthful, frank and straightforward."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // SET 6: DU IBA MBA Admission — Analytical
    // ------------------------------------------------------------------------
    {
      exam: "DU IBA MBA Admission Test",
      year: 2023,
      category: "iba_mba",
      subject: "Analytical",
      source: "practice",
      questions: [
        {
          q: "Editorial: Commuters will shift to metro only if fares remain cheaper than bus. Metro plans a 15% fare hike. Therefore, ridership will drop. Which assumption underlies this argument?",
          o: [
            "Bus fares will not increase proportionally next month.",
            "Metro riders care only about speed and comfort.",
            "Bus ridership in the city has peaked.",
            "Metro operational costs have declined."
          ],
          a: "A",
          e: "If bus fares rise equally, the relative price advantage of metro stays intact."
        }
      ]
    }
  ];

  // ==========================================================================
  // FAST AUTO-EXPANDER (Compiles compact sets into the full app schema)
  // ==========================================================================
  var compiledBank = [];

  QUESTION_SETS.forEach(function (set, setIdx) {
    var examSlug = (set.exam || "exam").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var yearSlug = String(set.year || "gen");
    var subSlug = (set.subject || "gen").substring(0, 3).toLowerCase();

    (set.questions || []).forEach(function (item, qIdx) {
      // Auto-generate stable unique ID if not explicitly provided
      var qId = item.id || (examSlug + "-" + yearSlug + "-" + subSlug + "-" + (qIdx + 1));

      // Expand simple array ["A", "B", "C", "D"] into [{id: "A", text: "..."}, ...]
      var formattedOptions = (item.o || []).map(function (optText, optIdx) {
        return {
          id: String.fromCharCode(65 + optIdx),
          text: optText
        };
      });

      compiledBank.push({
        id: qId,
        examCategory: set.category || "government",
        examName: set.exam || "General Exam",
        year: set.year || "General",
        subject: set.subject || "General",
        topic: item.topic || set.subject || "General",
        sourceType: set.source || "verified_pyq",
        question: item.q,
        options: formattedOptions,
        correctAnswer: item.a,
        explanation: item.e || "No explanation provided."
      });
    });
  });

  // Expose to index.html with zero breaking changes
  window.QUESTION_BANK = Object.freeze(compiledBank);
})();
