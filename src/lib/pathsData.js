// Demo paths — each node includes a `links` array for clickable resources
export const DEMO_PATHS = [
  {
    id: 'path_data',
    title: 'Data Integrity & Analytics Engineer',
    description: 'Build expertise in data quality, ETL pipelines, and analytics engineering',
    color: '#3B82F6',
    icon: 'trending-up',
    is_active: true,
    sort_order: 0,
    phases: [
      {
        id: 'p1_phase1',
        title: 'Fondasi Hard Skill & Soft Skill (Hari 1–30)',
        duration_label: '1-30 days',
        sort_order: 0,
        nodes: [
          {
            id: 'n1', label: 'Hard Skill: Advanced SQL & Analytics Engineering',
            detail: 'Kuasai Window Functions, CTE, Subquery, dan optimasi query untuk analisis data skala besar.',
            type: 'skill', status: 'todo', sort_order: 0,
            links: [
              { title: 'Mode Analytics SQL Tutorial', url: 'https://mode.com/sql-tutorial', tag: 'GRATIS' },
              { title: 'SQLZoo Interactive Exercises', url: 'https://sqlzoo.net/wiki/SQL_Tutorial', tag: 'GRATIS' },
              { title: 'LeetCode SQL 50 Problems', url: 'https://leetcode.com/studyplan/top-sql-50/', tag: 'GRATIS' },
              { title: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'n2', label: 'Hard Skill: Python & Pandas untuk Data Pipeline',
            detail: 'Bangun pipeline ekstraksi dan transformasi data terstruktur menggunakan Python dan library Pandas.',
            type: 'skill', status: 'todo', sort_order: 1,
            links: [
              { title: 'Kaggle Learn Python', url: 'https://www.kaggle.com/learn/python', tag: 'GRATIS' },
              { title: 'Kaggle Learn Pandas', url: 'https://www.kaggle.com/learn/pandas', tag: 'GRATIS' },
              { title: 'DataTalksClub Data Engineering Zoomcamp', url: 'https://github.com/DataTalksClub/data-engineering-zoomcamp', tag: 'GRATIS' },
              { title: 'Python for Everybody (Coursera)', url: 'https://www.coursera.org/specializations/python', tag: 'Financial Aid' },
            ],
          },
          {
            id: 'n3', label: 'Soft Skill: Critical Thinking & Anomaly Detection',
            detail: 'Latih insting investigasi data abnormal. Pahami bias data, edge cases, dan pola anomali.',
            type: 'action', status: 'todo', sort_order: 2,
            links: [
              { title: 'Thinking, Fast and Slow — Summary', url: 'https://fs.blog/thinking-fast-and-slow/', tag: 'GRATIS' },
              { title: 'Google Data Analytics Certificate', url: 'https://www.coursera.org/professional-certificates/google-data-analytics', tag: 'Financial Aid' },
            ],
          },
          {
            id: 'n4', label: 'Project: Anomaly Detection Pipeline',
            detail: 'Buat script Python otomatis untuk mendeteksi data corrupt/outlier di dataset publik Kaggle. Dokumentasikan di GitHub.',
            type: 'project', status: 'todo', sort_order: 3,
            links: [
              { title: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets', tag: 'GRATIS' },
              { title: 'GitHub Student Developer Pack', url: 'https://education.github.com/pack', tag: 'GRATIS' },
            ],
          },
        ],
      },
      {
        id: 'p1_phase2',
        title: 'Observabilitas Data Tingkat Lanjut (Hari 30–90)',
        duration_label: '30-90 days',
        sort_order: 1,
        nodes: [
          {
            id: 'n5', label: 'Hard Skill: dbt (Data Build Tool) Fundamentals',
            detail: 'Pelajari modular data modeling, materialization (views, tables, incremental), dan automated data testing.',
            type: 'skill', status: 'todo', sort_order: 0,
            links: [
              { title: 'dbt Fundamentals Course (Sertifikat Gratis)', url: 'https://courses.getdbt.com/courses/fundamentals', tag: 'GRATIS' },
              { title: 'dbt Documentation', url: 'https://docs.getdbt.com/', tag: 'GRATIS' },
              { title: 'dbt YouTube Channel', url: 'https://www.youtube.com/@dabornomentio', tag: 'GRATIS' },
            ],
          },
          {
            id: 'n6', label: 'Hard Skill: Data Quality dengan Great Expectations',
            detail: 'Kuasai tool data observability standar industri. Terapkan 10+ expectation rules pada pipeline Anda.',
            type: 'skill', status: 'todo', sort_order: 1,
            links: [
              { title: 'Great Expectations Official Docs', url: 'https://docs.greatexpectations.io/', tag: 'GRATIS' },
              { title: 'GE Getting Started Tutorial', url: 'https://docs.greatexpectations.io/docs/tutorials/quickstart/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'n7', label: 'Soft Skill: Technical Writing & Data Contracts',
            detail: 'Pahami cara merumuskan data contract antara software engineer dan data consumer untuk mencegah pipeline pecah.',
            type: 'action', status: 'todo', sort_order: 2,
            links: [
              { title: 'Google Technical Writing Course', url: 'https://developers.google.com/tech-writing', tag: 'GRATIS' },
              { title: 'PayPal Data Contract Guide', url: 'https://medium.com/paypal-tech/the-next-big-data-quality-leap-d7ed62e1975', tag: 'GRATIS' },
            ],
          },
          {
            id: 'n8', label: 'Sertifikasi: Google Data Analytics Professional',
            detail: 'Dapatkan sertifikat profesional global dari Google untuk memperkuat CV Anda di bidang data analytics.',
            type: 'cert', status: 'todo', sort_order: 3,
            links: [
              { title: 'Google Data Analytics (Coursera)', url: 'https://www.coursera.org/professional-certificates/google-data-analytics', tag: 'Financial Aid' },
              { title: 'IBM Data Engineering (Coursera)', url: 'https://www.coursera.org/professional-certificates/ibm-data-engineer', tag: 'Financial Aid' },
              { title: 'Cara Apply Financial Aid Coursera', url: 'https://www.coursera.support/s/article/209819033-Apply-for-Financial-Aid-or-a-Scholarship', tag: 'GRATIS' },
            ],
          },
        ],
      },
      {
        id: 'p1_phase3',
        title: 'Sistem End-to-End & Portofolio (Hari 90–180)',
        duration_label: '90-180 days',
        sort_order: 2,
        nodes: [
          {
            id: 'n9', label: 'Project: Enterprise Data Quality Platform',
            detail: 'Bangun arsitektur end-to-end: Ingest data → dbt transform → Great Expectations validate → Metabase visualization.',
            type: 'project', status: 'todo', sort_order: 0,
            links: [
              { title: 'Metabase (Open Source BI)', url: 'https://www.metabase.com/', tag: 'GRATIS' },
              { title: 'Render — Free Hosting', url: 'https://render.com/', tag: 'GRATIS' },
              { title: 'Railway — Free Hosting', url: 'https://railway.app/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'n10', label: 'Milestone: Data Quality Audit Portfolio',
            detail: 'Tulis studi kasus lengkap mengenai bagaimana pipeline Anda menghentikan bad data masuk ke dashboard produksi.',
            type: 'milestone', status: 'todo', sort_order: 1,
            links: [
              { title: 'Panduan Menulis Case Study Portofolio', url: 'https://www.freecodecamp.org/news/how-to-write-a-good-case-study/', tag: 'GRATIS' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'path_ai',
    title: 'AI Quality & Red Team Analyst',
    description: 'Specialize in AI safety, LLM evaluation, and adversarial testing',
    color: '#8B5CF6',
    icon: 'sparkles',
    is_active: true,
    sort_order: 1,
    phases: [
      {
        id: 'p2_phase1',
        title: 'Evaluasi LLM & Adversarial Prompting (Hari 1–30)',
        duration_label: '1-30 days',
        sort_order: 0,
        nodes: [
          {
            id: 'm1', label: 'Hard Skill: Metrik Evaluasi LLM & NLP',
            detail: 'Pahami ROUGE, BLEU, BERTScore, dan semantic similarity untuk mengukur kualitas teks AI.',
            type: 'skill', status: 'todo', sort_order: 0,
            links: [
              { title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course', tag: 'GRATIS' },
              { title: 'DeepLearning.AI Short Courses', url: 'https://www.deeplearning.ai/short-courses/', tag: 'GRATIS' },
              { title: 'Evaluating LLMs (Hugging Face)', url: 'https://huggingface.co/docs/evaluate/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'm2', label: 'Hard Skill: Jailbreaking & Adversarial Prompting',
            detail: 'Pelajari taksonomi prompt injection, PII leakage, dan prompt leaking untuk menguji keamanan model AI.',
            type: 'skill', status: 'todo', sort_order: 1,
            links: [
              { title: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', tag: 'GRATIS' },
              { title: 'HackAPrompt Challenge', url: 'https://www.aicrowd.com/challenges/hackaprompt-2023', tag: 'GRATIS' },
              { title: 'Learn Prompting — Prompt Hacking', url: 'https://learnprompting.org/docs/prompt_hacking/introduction', tag: 'GRATIS' },
            ],
          },
          {
            id: 'm3', label: 'Sertifikasi: Generative AI with LLMs (DeepLearning.AI)',
            detail: 'Pelajari arsitektur transformer, finetuning, RLHF, dan evaluasi LLM dari Andrew Ng dan tim AWS.',
            type: 'cert', status: 'todo', sort_order: 2,
            links: [
              { title: 'Generative AI with LLMs (Coursera)', url: 'https://www.coursera.org/learn/generative-ai-with-llms', tag: 'Financial Aid' },
              { title: 'AI for Everyone — Andrew Ng (Coursera)', url: 'https://www.coursera.org/learn/ai-for-everyone', tag: 'Financial Aid' },
              { title: 'Cara Apply Financial Aid Coursera', url: 'https://www.coursera.support/s/article/209819033-Apply-for-Financial-Aid-or-a-Scholarship', tag: 'GRATIS' },
            ],
          },
        ],
      },
      {
        id: 'p2_phase2',
        title: 'Otomatisasi LLMops & Evaluasi RAG (Hari 30–90)',
        duration_label: '30-90 days',
        sort_order: 1,
        nodes: [
          {
            id: 'm4', label: 'Hard Skill: Evaluasi RAG dengan Ragas Framework',
            detail: 'Uji akurasi sistem Retrieval-Augmented Generation menggunakan metrik faithfulness, answer relevance, dan context recall.',
            type: 'skill', status: 'todo', sort_order: 0,
            links: [
              { title: 'Ragas Documentation', url: 'https://docs.ragas.io/', tag: 'GRATIS' },
              { title: 'LangChain RAG Tutorial', url: 'https://python.langchain.com/docs/tutorials/rag/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'm5', label: 'Hard Skill: Tracing & Monitoring dengan LangSmith',
            detail: 'Lacak rantai pemanggilan LLM, deteksi latensi tinggi, dan kumpulkan dataset untuk evaluasi ulang.',
            type: 'skill', status: 'todo', sort_order: 1,
            links: [
              { title: 'LangSmith Documentation', url: 'https://docs.smith.langchain.com/', tag: 'GRATIS' },
              { title: 'LangChain Academy', url: 'https://academy.langchain.com/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'm6', label: 'Soft Skill: Technical Vulnerability Reporting',
            detail: 'Tulis laporan celah keamanan AI yang jelas, terstruktur, dan memiliki mitigasi konkret.',
            type: 'action', status: 'todo', sort_order: 2,
            links: [
              { title: 'HackerOne Hacktivity (Bug Bounty Writeups)', url: 'https://hackerone.com/hacktivity', tag: 'GRATIS' },
              { title: 'Anthropic Responsible Scaling Policy', url: 'https://www.anthropic.com/news/anthropics-responsible-scaling-policy', tag: 'GRATIS' },
            ],
          },
          {
            id: 'm7', label: 'Project: AI Chatbot Adversarial Vulnerability Report',
            detail: 'Lakukan red teaming sistematis pada model AI publik, catat celah keamanan, dan tulis laporan audit PDF profesional.',
            type: 'project', status: 'todo', sort_order: 3,
            links: [
              { title: 'Google AI Studio (Gemini API Free)', url: 'https://aistudio.google.com/', tag: 'GRATIS' },
              { title: 'OpenAI Playground', url: 'https://platform.openai.com/playground', tag: 'GRATIS' },
            ],
          },
        ],
      },
      {
        id: 'p2_phase3',
        title: 'Automated Security Harness (Hari 90–180)',
        duration_label: '90-180 days',
        sort_order: 2,
        nodes: [
          {
            id: 'm8', label: 'Project: LLM Vulnerability Scanner Framework',
            detail: 'Buat Python CLI tool yang menguji model AI dengan ratusan muatan prompt injection secara otomatis.',
            type: 'project', status: 'todo', sort_order: 0,
            links: [
              { title: 'Garak — LLM Vulnerability Scanner', url: 'https://github.com/leondz/garak', tag: 'GRATIS' },
              { title: 'PyRIT by Microsoft', url: 'https://github.com/Azure/PyRIT', tag: 'GRATIS' },
            ],
          },
          {
            id: 'm9', label: 'Milestone: Verified Adversarial Prompt Submitter',
            detail: 'Dapatkan pengakuan di komunitas AI Safety dengan memublikasikan taksonomi celah keamanan baru.',
            type: 'milestone', status: 'todo', sort_order: 1,
            links: [
              { title: 'AI Village Community', url: 'https://aivillage.org/', tag: 'GRATIS' },
              { title: 'ARENA ML Safety Program', url: 'https://www.arena.education/', tag: 'GRATIS' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'path_blockchain',
    title: 'Blockchain Protocol Risk Auditor',
    description: 'Become a smart contract security auditor for remote global opportunities',
    color: '#10B981',
    icon: 'shield',
    is_active: true,
    sort_order: 2,
    phases: [
      {
        id: 'p3_phase1',
        title: 'Smart Contract Vulnerabilities (Hari 1–30)',
        duration_label: '1-30 days',
        sort_order: 0,
        nodes: [
          {
            id: 'b1', label: 'Hard Skill: Kerentanan Solidity Tingkat Dasar',
            detail: 'Kuasai mekanisme Reentrancy, Access Control, Integer Under/Overflow, dan Flash Loan attacks.',
            type: 'skill', status: 'todo', sort_order: 0,
            links: [
              { title: 'Ethernaut by OpenZeppelin', url: 'https://ethernaut.openzeppelin.com/', tag: 'GRATIS' },
              { title: 'Solidity by Example', url: 'https://solidity-by-example.org/', tag: 'GRATIS' },
              { title: 'CryptoZombies — Learn Solidity', url: 'https://cryptozombies.io/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'b2', label: 'Hard Skill: EVM & Foundry/Hardhat',
            detail: 'Pahami cara kerja gas optimization, memori EVM, dan penulisan unit test audit.',
            type: 'skill', status: 'todo', sort_order: 1,
            links: [
              { title: 'Foundry Book', url: 'https://book.getfoundry.sh/', tag: 'GRATIS' },
              { title: 'EVM Codes — Interactive Reference', url: 'https://www.evm.codes/', tag: 'GRATIS' },
              { title: 'Hardhat Documentation', url: 'https://hardhat.org/docs', tag: 'GRATIS' },
              { title: 'Patrick Collins Foundry Course (YouTube)', url: 'https://www.youtube.com/watch?v=umepbfKp5rI', tag: 'GRATIS' },
            ],
          },
          {
            id: 'b3', label: 'Sertifikasi: Smart Contracts (University at Buffalo)',
            detail: 'Pelajari struktur blockchain, penulisan smart contract Solidity secara formal, dan dasar audit.',
            type: 'cert', status: 'todo', sort_order: 2,
            links: [
              { title: 'Blockchain Specialization (Coursera)', url: 'https://www.coursera.org/specializations/blockchain', tag: 'Financial Aid' },
              { title: 'Cara Apply Financial Aid Coursera', url: 'https://www.coursera.support/s/article/209819033-Apply-for-Financial-Aid-or-a-Scholarship', tag: 'GRATIS' },
            ],
          },
        ],
      },
      {
        id: 'p3_phase2',
        title: 'Static Analysis & Advanced Testing (Hari 30–90)',
        duration_label: '30-90 days',
        sort_order: 1,
        nodes: [
          {
            id: 'b4', label: 'Hard Skill: Static Analysis Tools (Slither & Mythril)',
            detail: 'Gunakan Slither untuk deteksi cepat bug Solidity, dan Mythril untuk symbolic execution audit.',
            type: 'skill', status: 'todo', sort_order: 0,
            links: [
              { title: 'Slither by Trail of Bits', url: 'https://github.com/crytic/slither', tag: 'GRATIS' },
              { title: 'Mythril Security Scanner', url: 'https://github.com/Consensys/mythril', tag: 'GRATIS' },
              { title: 'Trail of Bits Security Guides', url: 'https://github.com/crytic/building-secure-contracts', tag: 'GRATIS' },
            ],
          },
          {
            id: 'b5', label: 'Hard Skill: Fuzzing & Invariant Testing (Echidna)',
            detail: 'Buat tes fuzzer untuk menguji properti Smart Contract dengan ratusan ribu input acak.',
            type: 'skill', status: 'todo', sort_order: 1,
            links: [
              { title: 'Echidna — Smart Contract Fuzzer', url: 'https://github.com/crytic/echidna', tag: 'GRATIS' },
              { title: 'Secureum Bootcamp', url: 'https://secureum.xyz/', tag: 'GRATIS' },
            ],
          },
          {
            id: 'b6', label: 'Soft Skill: Menulis Temuan Audit yang Kredibel',
            detail: 'Pahami penulisan severity level (High/Medium/Low) dan menyusun laporan audit profesional.',
            type: 'action', status: 'todo', sort_order: 2,
            links: [
              { title: 'OpenZeppelin Audit Reports', url: 'https://blog.openzeppelin.com/security-audits', tag: 'GRATIS' },
              { title: 'Sherlock Audit Reports', url: 'https://audits.sherlock.xyz/contests', tag: 'GRATIS' },
            ],
          },
          {
            id: 'b7', label: 'Project: DeFi Vulnerability Exploiter Portfolio',
            detail: 'Selesaikan seluruh tantangan di Damn Vulnerable DeFi dan tulis write-up teknis eksploitasinya.',
            type: 'project', status: 'todo', sort_order: 3,
            links: [
              { title: 'Damn Vulnerable DeFi', url: 'https://www.damnvulnerabledefi.xyz/', tag: 'GRATIS' },
              { title: 'Capture The Ether', url: 'https://capturetheether.com/', tag: 'GRATIS' },
            ],
          },
        ],
      },
      {
        id: 'p3_phase3',
        title: 'Live Audit & Global Recognition (Hari 90–180)',
        duration_label: '90-180 days',
        sort_order: 2,
        nodes: [
          {
            id: 'b8', label: 'Project: Submit Temuan di Code4rena / Sherlock',
            detail: 'Ikuti kompetisi audit langsung. Cari bug riil pada protokol DeFi dan raih reward pertama Anda.',
            type: 'project', status: 'todo', sort_order: 0,
            links: [
              { title: 'Code4rena — Audit Contests', url: 'https://code4rena.com/', tag: 'GRATIS + Hadiah' },
              { title: 'Sherlock — Audit Contests', url: 'https://www.sherlock.xyz/', tag: 'GRATIS + Hadiah' },
              { title: 'Immunefi — Bug Bounties', url: 'https://immunefi.com/', tag: 'GRATIS + Hadiah' },
            ],
          },
          {
            id: 'b9', label: 'Milestone: Certified Smart Contract Security Auditor',
            detail: 'Lulus ujian RACE Secureum dengan skor ≥80% untuk memvalidasi kredibilitas global Anda.',
            type: 'milestone', status: 'todo', sort_order: 1,
            links: [
              { title: 'Secureum RACE Exams', url: 'https://secureum.xyz/', tag: 'GRATIS' },
              { title: 'Spearbit Community', url: 'https://spearbit.com/', tag: 'GRATIS' },
            ],
          },
        ],
      },
    ],
  },
];
