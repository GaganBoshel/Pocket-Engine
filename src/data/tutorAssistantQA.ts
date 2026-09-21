import { SCIENCE_QA, BaseTutorQA } from './tutorScienceQA';
import { PHYSICS_QA } from './tutorPhysicsQA';
import { CHEMISTRY_QA } from './tutorChemistryQA';
import { HPE_QA } from './tutorHpeQA';
import { SOCIAL_STUDIES_QA } from './tutorSocialStudiesQA';

export type TutorQA = BaseTutorQA;

export const TUTOR_ASSISTANT_QA: TutorQA[] = [
  ...SCIENCE_QA,        // 1 - 100
  ...PHYSICS_QA,        // 101 - 200
  ...CHEMISTRY_QA,      // 201 - 300
  ...HPE_QA,            // 301 - 400
  ...SOCIAL_STUDIES_QA, // 401 - 520
];

export const TUTOR_CATEGORIES = [
  { id: 'all', label: 'All Subjects (520)', count: 520 },
  { id: 'General Science', label: 'General Science', count: 100 },
  { id: 'Physics', label: 'Physics', count: 100 },
  { id: 'Chemistry', label: 'Chemistry', count: 100 },
  { id: 'HPE', label: 'Health & Physical Ed.', count: 100 },
  { id: 'Social Studies', label: 'Social Studies', count: 120 },
];

/**
 * Searches the 520 Q&A dataset for the best match based on question text or keywords
 */
export function findBestTutorQAMatch(query: string): TutorQA | null {
  const qClean = query.trim().toLowerCase();
  if (!qClean || qClean.length < 2) return null;

  // 1. Direct Q number search (e.g. "Q12", "Q101: What is physics?", "q 55", "question 400", "#15")
  const qNumMatch = qClean.match(/^(?:q(?:uestion)?\s*|#\s*)(\d+)/i) || qClean.match(/^(\d{1,3})$/);
  if (qNumMatch) {
    const num = parseInt(qNumMatch[1], 10);
    const found = TUTOR_ASSISTANT_QA.find((item) => item.id === num);
    if (found) return found;
  }

  // 2. Exact or substring match in question
  const exactMatch = TUTOR_ASSISTANT_QA.find(
    (item) =>
      item.q.toLowerCase() === qClean ||
      item.q.toLowerCase().replace(/[?.,!]/g, '') === qClean.replace(/[?.,!]/g, '') ||
      item.q.toLowerCase().includes(qClean) ||
      qClean.includes(item.q.toLowerCase())
  );
  if (exactMatch) return exactMatch;

  // 3. Keyword scoring
  const stopwords = new Set([
    'what', 'how', 'why', 'who', 'the', 'is', 'are', 'you', 'and', 'for', 'with', 'explain',
    'define', 'give', 'name', 'tell', 'about', 'some', 'does', 'state', 'can', 'answer', 'question'
  ]);
  const words = qClean
    .split(/[^a-z0-9_#+.-]+/i)
    .filter((w) => w.length > 2 && !stopwords.has(w));

  if (words.length === 0) return null;

  let bestScore = 0;
  let bestItem: TutorQA | null = null;

  for (const item of TUTOR_ASSISTANT_QA) {
    const qLower = item.q.toLowerCase();
    const aLower = item.a.toLowerCase();
    let score = 0;

    for (const w of words) {
      if (qLower.includes(w)) {
        score += 4;
        // bonus for whole word match
        const regex = new RegExp(`\\b${w}\\b`, 'i');
        if (regex.test(qLower)) score += 2;
      } else if (aLower.includes(w)) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  return bestScore >= 4 ? bestItem : null;
}

/**
 * Unified formatter used by BOTH Personal Tutor and Personal Assistant
 * so that both modes give the exact same structured answer offline and online.
 */
export function formatTutorAssistantResponse(item: TutorQA, isOnline: boolean): string {
  const onlineSection = isOnline
    ? `\n\n**Web & AI Reference:**\n- 🔍 [Search on Google: "${encodeURIComponent(item.q)}"](https://www.google.com/search?q=${encodeURIComponent(item.q)})\n- 🤖 [Explore with Gemini AI](https://gemini.google.com/)\n- 💬 [Ask ChatGPT](https://chatgpt.com/?q=${encodeURIComponent(item.q)})`
    : '';

  return `### Q${item.id}. ${item.q}
**Subject:** ${item.subject} • *Exam-Friendly Revision Guide*

**Answer:**
${item.a}

**Key Revision Points:**
- **Core Concept:** ${item.a}
- **Quick Recall Tip:** Remember this exact definition for exams, viva voce, and rapid revision tests.${onlineSection}`;
}
