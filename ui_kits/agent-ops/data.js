// ────────────────────────────────────────────────────────────────────────
//  Agent Ops — mock data
//  No backend; everything is deterministic and hand-tuned to match the
//  reference render of the orchestration board.
// ────────────────────────────────────────────────────────────────────────

window.OnyxData = {
  agents: [
    { id: 'strategist', name: 'Strategist', role: 'Planner Agent', confidence: 0.72, active: true },
    { id: 'researcher', name: 'Researcher', role: 'Search Agent',  confidence: 0.61, active: true },
    { id: 'analyst',    name: 'Analyst',    role: 'Data Agent',    confidence: 0.68, active: true },
    { id: 'writer',     name: 'Writer',     role: 'Content Agent', confidence: 0.55, active: true },
    { id: 'codex',      name: 'Codex',      role: 'Code Agent',    confidence: 0.71, active: true },
    { id: 'reviewer',   name: 'Reviewer',   role: 'QA Agent',      confidence: 0.49, active: false },
    { id: 'synthesizer',name: 'Synthesizer',role: 'Summary Agent', confidence: 0.57, active: false },
    { id: 'guardian',   name: 'Guardian',   role: 'Policy Agent',  confidence: 0.33, active: false, alert: true },
  ],

  health: [
    { k: 'CPU',           v: '42%',   pct: 42 },
    { k: 'MEMORY',        v: '61%',   pct: 61 },
    { k: 'MODEL LATENCY (P50)', v: '812ms', pct: 30 },
    { k: 'ERROR RATE (1H)', v: '0.21%', pct: 5 },
    { k: 'UPTIME',        v: '17d 03h 22m', pct: null },
  ],

  metrics: {
    activeRuns: 24,
    completed: 89,
    breaches: 1,
    tokens: '2.4M',
    cost: '$38.72',
  },

  stages: [
    {
      id: 'intake', label: 'Intake', count: 5, color: 'accent',
      cards: [
        { id: 'INT-2026-0241', title: 'Market analysis: Q2 AI startup funding trends', ago: '5m ago',
          kv: [['Source', 'Web Intake'], ['Priority', { tag: 'High', tone: 'danger' }]] },
        { id: 'INT-2026-0242', title: 'Competitive scan: Vector DB landscape',         ago: '8m ago',
          kv: [['Source', 'Web Intake'], ['Priority', { tag: 'Medium', tone: 'warn' }]] },
        { id: 'INT-2026-0243', title: 'Draft blog: RAG vs Fine-tuning',                ago: '11m ago',
          kv: [['Source', 'API / Webhook'], ['Priority', { tag: 'Medium', tone: 'warn' }]] },
      ],
      more: 2,
    },
    {
      id: 'plan', label: 'Plan', count: 4, color: 'accent',
      cards: [
        { id: 'PLN-2026-0187', title: 'Market analysis plan',  ago: '3m ago',
          kv: [['Agent', 'Strategist'], ['Model', 'GPT-4.1'], ['Confidence', { bar: 92 }]] },
        { id: 'PLN-2026-0188', title: 'Vector DB scan plan',   ago: '6m ago',
          kv: [['Agent', 'Strategist'], ['Model', 'GPT-4.1'], ['Confidence', { bar: 88 }]] },
        { id: 'PLN-2026-0189', title: 'Blog draft plan',       ago: '9m ago',
          kv: [['Agent', 'Strategist'], ['Model', 'GPT-4.1'], ['Confidence', { bar: 90 }]] },
      ],
      more: 1,
    },
    {
      id: 'execute', label: 'Execute', count: 7, color: 'accent',
      cards: [
        { id: 'EXE-2026-0311', title: 'Search funding data',  ago: '1m ago', selected: true,
          kv: [['Agent', 'Researcher'], ['Model', 'GPT-4o']],
          metrics: [['Tokens', '24.1K'], ['Cost', '$0.18'], ['Latency', '1.2s']], conf: 65 },
        { id: 'EXE-2026-0312', title: 'Analyze trends',        ago: '2m ago',
          kv: [['Agent', 'Analyst'], ['Model', 'Claude-3.5']],
          metrics: [['Tokens', '31.7K'], ['Cost', '$0.22'], ['Latency', '2.1s']], conf: 40 },
        { id: 'EXE-2026-0313', title: 'Draft report',          ago: '4m ago',
          kv: [['Agent', 'Writer'],   ['Model', 'GPT-4o']],
          metrics: [['Tokens', '18.9K'], ['Cost', '$0.14'], ['Latency', '1.6s']], conf: 20 },
      ],
      more: 4,
    },
    {
      id: 'review', label: 'Review', count: 3, color: 'accent',
      cards: [
        { id: 'REV-2026-0091', title: 'Review analysis',   ago: '2m ago',
          kv: [['Agent', 'Reviewer'], ['Model', 'GPT-4.1'], ['Confidence', { bar: 93 }]] },
        { id: 'REV-2026-0092', title: 'Validate sources',  ago: '3m ago',
          kv: [['Agent', 'Guardian'], ['Model', 'Claude-3.5'], ['Confidence', { bar: 91 }]] },
        { id: 'REV-2026-0093', title: 'Check compliance',  ago: '5m ago',
          kv: [['Agent', 'Guardian'], ['Model', 'GPT-4.1'], ['Confidence', { bar: 96 }]] },
      ],
    },
    {
      id: 'blocked', label: 'Blocked', count: 2, color: 'warn',
      cards: [
        { id: 'BLK-2026-0021', title: 'Need API access for Crunchbase', ago: '12m ago', breach: true,
          kv: [['Agent', 'Researcher'], ['Waiting on', 'Human'], ['Dep', 'EXE-2026-0311']],
          footer: { tag: 'Human approval', tone: 'warn' } },
        { id: 'BLK-2026-0022', title: 'Budget threshold approval',      ago: '18m ago', breach: true,
          kv: [['Agent', 'Guardian'], ['Waiting on', 'Human'], ['Dep', 'EXE-2026-0312']],
          footer: { tag: 'Human approval', tone: 'warn' } },
      ],
    },
    {
      id: 'complete', label: 'Complete', count: 6, color: 'ok',
      cards: [
        { id: 'CMP-2026-0771', title: 'Market analysis report', ago: '10m ago', complete: true,
          kv: [['Output', '/reports/0771.pdf'], ['Tokens', '102.1K'], ['Cost', '$0.74']] },
        { id: 'CMP-2026-0772', title: 'Vector DB comparison',   ago: '15m ago', complete: true,
          kv: [['Output', '/reports/0772.md'],  ['Tokens', '88.3K'],  ['Cost', '$0.61']] },
        { id: 'CMP-2026-0773', title: 'RAG vs Fine-tuning blog', ago: '22m ago', complete: true,
          kv: [['Output', '/content/0773.md'],  ['Tokens', '61.2K'],  ['Cost', '$0.42']] },
      ],
      more: 3,
    },
  ],

  logs: [
    { t: '14:32:10', m: 'Searching Crunchbase…',     tone: 'active' },
    { t: '14:32:12', m: 'Retrieved 120 results',     tone: 'normal' },
    { t: '14:32:14', m: 'Filtering by date range…',  tone: 'normal' },
    { t: '14:32:16', m: 'Aggregating funding data…', tone: 'normal' },
  ],

  inspector: {
    runId: 'EXE-2026-0311',
    title: 'Search funding data',
    state: 'EXECUTING',
    agent: 'Researcher',
    model: 'GPT-4o',
    started: '14:31:02',
    elapsed: '00:01:16',
    confidence: 87,
    shortTerm: '24.1K tokens',
    longTerm: '128.7K tokens',
    tools: [
      { k: 'Web Search',    on: true  },
      { k: 'Crunchbase API', on: false },
      { k: 'PDF Parser',    on: false },
    ],
    nextAction: 'Aggregate & analyze results',
    est: '45s', cost: '$0.09', tokens: '12.4K',
    humanGate: true,
  },

  telemetry: [
    { id: 'RSC-9A', rate: '2.1k t/s' },
    { id: 'ANL-7B', rate: '1.8k t/s' },
    { id: 'WR-3C',  rate: '2.4k t/s' },
    { id: 'RV-1D',  rate: '1.2k t/s' },
    { id: 'GD-2E',  rate: '0.9k t/s' },
  ],

  meta: {
    runStatus: 'ACTIVE',
    systemTime: '2026-05-26 14:32:18 UTC',
    queueDepth: 12,
  },
};
