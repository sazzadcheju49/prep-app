/**
 * ============================================================================
 * PREP APP — MODULAR & COMPACT QUESTION BANK (source.js)
 * ============================================================================
 * 
 * QUICK CHEAT-SHEET:
 * 
 * 1. TO ADD ONE QUESTION TO AN EXISTING SET:
 *    Copy this block:
        ,
        {
          q: "Write your question text here?",
          o: ["Option A text", "Option B text", "Option C text", "Option D text"],
          a: "A",
          e: "Write the explanation here."
        }
 * 
 * 2. TO ADD A WHOLE NEW EXAM / SUBJECT / YEAR SET:
 *    Copy this block:
        ,
        {
          exam: "Name of Exam (e.g. 46th BCS Preliminary)",
          year: 2024,
          category: "government", // "government" | "bank" | "iba_mba" | "private"
          subject: "English",
          source: "verified_pyq", // "verified_pyq" | "practice"
          questions: [
            {
              q: "First question text?",
              o: ["Option A", "Option B", "Option C", "Option D"],
              a: "A",
              e: "Explanation text."
            }
          ]
        }
 * ============================================================================
 */

(function () {
  "use strict";

  var QUESTION_SETS = [

    // ########################################################################
    // TRACK 1: GOVERNMENT RECRUITMENT (BCS, PSC, Primary Teacher, etc.)
    // ########################################################################

    // --- [GOVERNMENT] 45th BCS Preliminary (2023) — English ---
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
          e: "The adjective 'devoid' takes the preposition 'of', meaning entirely lacking."
        }
        /* >>> PASTE MORE QUESTIONS FOR 45th BCS (ENGLISH 2023) ABOVE THIS LINE <<< */
      ]
    },

    // --- [GOVERNMENT] 44th BCS Preliminary (2022) — Bangla ---
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
        /* >>> PASTE MORE QUESTIONS FOR 44th BCS (BANGLA 2022) ABOVE THIS LINE <<< */
      ]
    },

    // --- [GOVERNMENT] 43rd BCS Preliminary (2021) — General Knowledge ---
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
        /* >>> PASTE MORE QUESTIONS FOR 43rd BCS (GK 2021) ABOVE THIS LINE <<< */
      ]
    }

    /* ========================================================================
       >>> PASTE ANY BRAND NEW GOVERNMENT EXAM SETS ABOVE THIS LINE <<<
       ======================================================================== */



    // ########################################################################
    // TRACK 2: BANK RECRUITMENT (Bangladesh Bank, Combined Banks, Sonali, etc.)
    // ########################################################################
    ,

    // --- [BANK] Bangladesh Bank AD (2022) — Mathematics ---
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
          e: "Let CP=100 => SP=120. With 20% discount: 0.8*MP = 120 => MP=150. Markup = 50%."
        }
        /* >>> PASTE MORE QUESTIONS FOR BANGLADESH BANK AD (MATH 2022) ABOVE THIS LINE <<< */
      ]
    },

    // --- [BANK] Combined 8 Banks Officer (2023) — English ---
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
          e: "'Candid' means truthful, frank, and straightforward."
        }
        /* >>> PASTE MORE QUESTIONS FOR COMBINED 8 BANKS (ENGLISH 2023) ABOVE THIS LINE <<< */
      ]
    }

    /* ========================================================================
       >>> PASTE ANY BRAND NEW BANK EXAM SETS ABOVE THIS LINE <<<
       ======================================================================== */



    // ########################################################################
    // TRACK 3: DU IBA MBA ADMISSION (English, Math, Analytical)
    // ########################################################################
    ,

    // --- [IBA MBA] DU IBA MBA Admission Test (2023) — Analytical ---
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
        /* >>> PASTE MORE QUESTIONS FOR DU IBA MBA (ANALYTICAL 2023) ABOVE THIS LINE <<< */
      ]
    }

    /* ========================================================================
       >>> PASTE ANY BRAND NEW DU IBA MBA EXAM SETS ABOVE THIS LINE <<<
       ======================================================================== */



    // ########################################################################
    // TRACK 4: PRIVATE SECTOR & OTHER EXAMS (Telecom, MNC, NGOs, IT)
    // ########################################################################
    ,

    // --- [PRIVATE] Sample Practice Set ---
    {
      exam: "General Model Test",
      year: 2024,
      category: "private",
      subject: "General Knowledge",
      source: "practice",
      questions: [
        {
          q: "Which protocol provides encrypted communication over the internet?",
          o: ["HTTP", "HTTPS", "FTP", "SMTP"],
          a: "B",
          e: "HTTPS (Hypertext Transfer Protocol Secure) encrypts communication using TLS/SSL."
        }
        /* >>> PASTE MORE QUESTIONS FOR THIS PRIVATE EXAM SET ABOVE THIS LINE <<< */
      ]
    }

    /* ========================================================================
       >>> PASTE ANY BRAND NEW PRIVATE / OTHER EXAM SETS ABOVE THIS LINE <<<
       ======================================================================== */

  ]; // <--- STOP! DO NOT PASTE ANYTHING BELOW THIS BRACKET! All questions must stay inside QUESTION_SETS = [ ... ];



  // ==========================================================================
  // FAST AUTO-EXPANDER (Converts compact sets into full schema for index.html)
  // ==========================================================================
  var compiledBank = [];

  QUESTION_SETS.forEach(function (set) {
    if (!set || !Array.isArray(set.questions)) return;

    var examSlug = (set.exam || "exam").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var yearSlug = String(set.year || "gen");
    var subSlug = (set.subject || "gen").substring(0, 3).toLowerCase();

    set.questions.forEach(function (item, qIdx) {
      if (!item || !item.q) return;

      var qId = item.id || (examSlug + "-" + yearSlug + "-" + subSlug + "-" + (qIdx + 1));

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

  window.QUESTION_BANK = Object.freeze(compiledBank);
})();
