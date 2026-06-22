export const stories: Record<string, string> = {
  pnlguard:
    "I watched risk teams chase P&L breaks through spreadsheets long after the market moved. I built the review loop I wished existed — rules first, AI second, humans always in control.",
  chatloom:
    "Every GenAI demo was a single chat box. I wanted to prove multi-tenant RAG, personas, and real channels could share one backend — so I built it on nights and weekends until Telegram and web ran on the same orchestration layer.",
  goforge:
    "Pipelines fail in the gaps between services — retries, queues, workers fighting for the same job. GoForge started as a place to watch orchestration breathe, not as a slide deck.",
  sentryai:
    "After leading Airflow rollouts, I knew the hardest part wasn't the DAG — it was the 2 a.m. log archaeology. SentryAI is the diagnosis console I wanted on call.",
  "transaction-guard":
    "I wrote about idempotency, then kept seeing APIs break under retries in production. Transaction Guard is me putting that essay into middleware — Lua locks, TTL policies, fail-open vs fail-closed, no shortcuts.",
  bloom:
    "Pregnancy apps wanted accounts, feeds, and notifications. I wanted a quiet room on someone's phone — offline, private, theirs. Bloom is that room.",
  veera:
    "Scales lie. Generic plans lie louder. Veera started because I was tired of fitness tools that ignore what your body is actually doing — composition, consistency, adaptation.",
};

export function getStory(storyKey: string): string {
  return stories[storyKey] ?? "";
}
