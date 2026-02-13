import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'internify-ai-internship-outreach',
    title: 'Internify: AI-Powered Internship Outreach Platform',
    summary: 'Full-stack AI platform that generates personalized internship cold emails using resume context and real-time job data.',
    description: 'Internify is a full-stack web application designed to streamline the internship application process by combining real-time internship discovery with AI-driven personalized email generation. Users can upload their resume, browse relevant opportunities, and generate tailored cold emails within a single unified workflow.',
    problem: 'Applying to internships is often repetitive and inefficient. Students spend significant time searching across platforms and manually drafting cold emails that are either too generic or too time-consuming to personalize effectively. While most platforms help users discover internships, they rarely assist in crafting structured and personalized outreach. The challenge was building a system that reduces application friction while maintaining meaningful personalization at scale.',
    architecture: 'Internify follows a modular full-stack architecture. The frontend is built with Next.js and TypeScript, providing interfaces for resume uploads, internship browsing, email generation, and application tracking. The backend, developed using FastAPI, handles resume processing, AI-based email generation, authentication, and external API communication. Real-time internship data is fetched via SerpAPI, while Supabase manages authentication, PostgreSQL database storage, and file handling. AI logic is decoupled from core business logic to maintain extensibility and clean separation of concerns.',
    backendDesign: 'The backend is implemented using FastAPI with asynchronous endpoints for efficient request handling. JWT-based authentication is managed through Supabase to ensure secure user sessions. LLM integration is abstracted into a dedicated service layer to isolate prompt engineering from route logic. Resume uploads are processed through a structured parsing pipeline, and storage is abstracted to prevent tight coupling between file handling and application logic. The system prioritizes modularity, clarity, and maintainability.',
    llmIntegration: 'Internify integrates an LLM (via Groq or Gemini APIs) to generate personalized cold emails using structured inputs derived from parsed resume data and selected internship details. The prompt design injects resume context and role-specific information while maintaining consistent formatting and tone. Instead of relying on static templates, the system dynamically generates outreach content tailored to each opportunity. The LLM layer is provider-agnostic, allowing flexibility for future expansion or model switching.',
    databaseStructure: 'Supabase (PostgreSQL) stores user accounts, authentication metadata, parsed resume data, and generated email history. Relational mappings ensure each user’s resume and outreach entries remain linked. Internship listings may be cached to reduce redundant API calls. Resume files are stored separately in Supabase storage buckets to decouple structured relational data from file storage. The schema is designed for simplicity, integrity, and efficient querying.',
    tradeoffs: 'SerpAPI was chosen over direct scraping for stability and compliance, accepting API dependency in exchange for reliability. LLM-generated emails were preferred over fixed templates to improve personalization, though this introduces variability and slight latency. Supabase was selected as a managed backend solution to accelerate development, trading infrastructure-level control for faster iteration. Prompt-based personalization was used instead of fine-tuning to enable rapid experimentation and model flexibility.',
    improvements: 'Future improvements include adding a feedback loop to refine email quality, implementing recruiter response tracking analytics, introducing multi-provider LLM fallback mechanisms, improving resume parsing accuracy through structured extraction pipelines, and adding caching strategies to optimize internship API usage. Additional user-level personalization controls, such as tone selection and outreach intensity, could further enhance the user experience.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Python', 'FastAPI', 'Supabase (PostgreSQL, Auth, Storage)', 'Groq / Gemini (LLM API)', 'SerpAPI'],
    category: 'GenAI',
    featured: true,
    image: '/images/project-internify.jpg',
    githubUrl: 'https://github.com/RudranshKaran/internify',
    liveUrl: 'https://internify-rudransh.vercel.app',
    startDate: '2025-10',
    endDate: '2026-01',
  }
,
  {
    id: '2',
    slug: 'gitinsights-repository-analyzer',
    title: 'GitInsights: AI-Powered GitHub Repository Analyzer',
    summary: 'AI-driven tool that analyzes GitHub repositories and generates structured reports on project readiness, clarity, and overall quality.',
    description: 'GitInsights is a web-based tool that evaluates GitHub repositories and generates structured feedback reports to help developers understand how their projects appear to recruiters and collaborators. It analyzes repository structure, documentation quality, clarity, and overall presentation using AI-assisted evaluation.',
    problem: 'Many developers build solid projects but struggle to understand how their repositories are perceived externally. Recruiters often evaluate codebases quickly, focusing on documentation clarity, structure, and professionalism. There is no simple way for developers to objectively assess whether their repository feels “ready” to share. The challenge was building a system that can programmatically analyze repository metadata and content, then generate meaningful, structured feedback using AI.',
    architecture: 'GitInsights follows a client-server architecture. The frontend provides a simple interface where users submit a GitHub repository URL. The backend fetches repository metadata using the GitHub API, processes key elements such as README content, folder structure, and commit patterns, and constructs structured inputs for AI-based evaluation. The AI layer then generates a detailed report assessing clarity, structure, and perceived readiness. The system separates repository analysis logic from report generation logic to maintain modularity.',
    backendDesign: 'The backend is built using FastAPI with asynchronous request handling to manage GitHub API calls efficiently. Repository data fetching is isolated within a dedicated service layer to prevent tight coupling with evaluation logic. Structured preprocessing ensures that only relevant repository information is passed to the LLM, reducing token usage and improving response quality. Error handling is implemented for invalid repositories, rate limits, and incomplete data scenarios. The design prioritizes clean API boundaries and maintainability.',
    llmIntegration: 'GitInsights integrates an LLM to generate structured evaluation reports based on processed repository data. Instead of raw prompting, the system constructs organized inputs including README summaries, repository structure indicators, and metadata signals. The prompt enforces consistent report formatting, including strengths, weaknesses, and improvement suggestions. The LLM layer is designed to remain flexible, allowing experimentation with different models without major architectural changes.',
    databaseStructure: 'GitInsights operates primarily as a stateless analysis tool. Temporary repository data is processed in-memory during evaluation, while optional report history can be stored for user sessions if enabled. If persistence is required, a relational database structure can store repository URLs, generated reports, timestamps, and user associations. The schema is kept lightweight to maintain system simplicity.',
    tradeoffs: 'Using AI for repository evaluation improves qualitative assessment but introduces response latency and variability. GitHub API reliance ensures reliable metadata access but is subject to rate limits. Structured preprocessing reduces token usage and improves consistency, though it requires additional logic before AI invocation. The system prioritizes clarity and actionable feedback over deep static code analysis, trading exhaustive inspection for faster, high-level evaluation.',
    improvements: 'Future improvements include adding deeper static code analysis, incorporating metrics such as test coverage or commit consistency scoring, implementing report comparison over time, introducing recruiter-mode summaries, and adding caching mechanisms for repeated repository evaluations. Multi-model fallback logic could improve reliability and performance.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'GitHub API', 'LLM API (Groq / Gemini / OpenAI)', 'Vercel', 'Render'],
    category: 'GenAI',
    featured: true,
    image: '/images/project-gitinsights.jpg',
    githubUrl: 'https://github.com/RudranshKaran/GitInsights',
    liveUrl: 'https://gitinsights-rudransh.vercel.app',
    startDate: '2026-01',
    endDate: '2026-02',
  }
,
  {
    id: '3',
    slug: 'binance-futures-trading-bot',
    title: 'Binance Futures Testnet Trading Bot',
    summary: 'Automated trading bot built on Binance Futures Testnet with strategy logic, risk management, and API-driven order execution.',
    description: 'An automated trading bot developed for Binance Futures Testnet that executes trades based on predefined strategy conditions, integrates risk management mechanisms, and handles real-time market data through Binance APIs. The project focuses on systematic trade execution, API reliability, and controlled testing in a simulated trading environment.',
    problem: 'Manual trading is time-sensitive and emotionally driven, often leading to inconsistent execution and risk exposure. Building an automated trading system requires reliable API integration, real-time market data handling, order management, and basic risk control mechanisms. The challenge was designing a bot that could systematically execute trades on Binance Futures Testnet while maintaining clean architecture and safe experimentation without real capital exposure.',
    architecture: 'The trading bot follows a modular architecture separating market data ingestion, strategy evaluation, order execution, and risk management. Market data is fetched from Binance Futures API endpoints, processed in real time, and passed into a strategy engine that evaluates entry and exit conditions. The execution layer handles order placement, position monitoring, and response validation. The system runs in a controlled loop, ensuring continuous evaluation of trading signals while maintaining API communication reliability.',
    backendDesign: 'The system is implemented in Python with structured separation between API handling, trading logic, and configuration management. Binance API credentials are securely managed via environment variables. The order execution module includes validation checks for position sizing and leverage parameters. Logging mechanisms track trade entries, exits, and API responses for debugging and evaluation. The design prioritizes clarity and deterministic behavior over high-frequency optimization.',
    llmIntegration: 'This project does not rely on LLM integration. Instead, it focuses on rule-based trading strategy implementation and deterministic signal evaluation. Strategy logic is defined programmatically using technical indicators and conditional rules. This decision ensures predictable behavior and easier debugging compared to AI-driven trading logic.',
    databaseStructure: 'The bot operates primarily as a real-time execution system and does not require a persistent database for core functionality. Trade logs and execution history can be stored locally or extended to a relational database if long-term analytics are required. The system design allows future integration with a database for performance tracking, trade analytics, and strategy comparison.',
    tradeoffs: 'Using Binance Futures Testnet enables safe experimentation but does not perfectly replicate live market latency and liquidity conditions. A rule-based strategy ensures predictability and easier debugging but lacks adaptability compared to machine learning-based approaches. Running the bot in a loop-based architecture simplifies implementation but may not scale for high-frequency or distributed trading strategies. The system prioritizes learning, reliability, and safe testing over production-level trading optimization.',
    improvements: 'Future improvements include implementing more advanced risk management techniques such as dynamic stop-loss adjustments, adding performance analytics dashboards, integrating persistent storage for trade history, introducing backtesting capabilities, and supporting multiple strategy modules. The architecture can also be extended to support live trading environments with enhanced monitoring and alerting systems.',
    techStack: ['Python', 'Binance Futures API', 'REST API', 'Technical Indicators', 'Environment Variables (.env)', 'Logging'],
    category: 'Backend',
    featured: false,
    image: '/images/project-trading-bot.jpg',
    githubUrl: 'https://github.com/RudranshKaran/Trading-Bot-on-Binance-Futures-Testnet',
    liveUrl: '',
    startDate: '2025-02',
    endDate: '',
  },
  {
    id: '4',
    slug: 'the-players-paradigm-game-system',
    title: "The Player's Paradigm – Interactive Game System",
    summary: 'Interactive game system built with structured logic, state management, and player-driven progression mechanics.',
    description: "The Player's Paradigm is an interactive game system designed around structured gameplay logic, player state management, and dynamic progression mechanics. The project focuses on designing a rule-based game environment where user decisions directly influence outcomes, emphasizing modular code structure and maintainable game flow control.",
    problem: 'Designing interactive systems requires careful handling of state transitions, rule enforcement, and player progression. Without proper structure, game logic becomes tightly coupled and difficult to extend. The challenge was to design a system where player decisions, scoring logic, and progression rules remain modular, predictable, and easy to maintain while still delivering an engaging interactive experience.',
    architecture: 'The project follows a modular architecture separating core game logic, state management, and user interaction handling. A central game engine manages player state, score tracking, and rule evaluation. Input handling is abstracted from core logic to maintain separation of concerns. The progression system updates dynamically based on predefined rules, ensuring deterministic outcomes while allowing flexibility for future expansion.',
    backendDesign: 'The system is implemented using structured programming principles with clear separation between configuration, rule definitions, and execution flow. State transitions are handled explicitly to avoid hidden side effects. Logging or console feedback mechanisms provide visibility into game progression and player decisions. The design emphasizes readability, deterministic behavior, and ease of debugging over graphical complexity.',
    llmIntegration: 'This project does not integrate LLMs. It focuses on deterministic rule-based logic and interactive system design. All game outcomes are driven by predefined conditions and structured state evaluation, ensuring predictable and testable behavior.',
    databaseStructure: 'The current implementation operates without a persistent database, maintaining game state in memory during execution. If extended, a database could store player profiles, progression history, leaderboard data, and performance metrics. The architecture allows such integration without major refactoring due to its modular design.',
    tradeoffs: 'Keeping the system rule-based ensures predictability and simplicity but limits adaptive gameplay complexity. Avoiding persistent storage simplifies implementation but removes long-term state tracking. The focus on structured logic over graphical interfaces prioritizes backend design principles over UI sophistication.',
    improvements: 'Future improvements include adding persistent player profiles, implementing a leaderboard system, introducing configurable difficulty levels, expanding rule complexity, and integrating a frontend interface for improved user interaction. Additional modularization could support multiplayer or turn-based extensions.',
    techStack: ['Python', 'Structured Programming', 'State Management Logic'],
    category: 'Backend',
    featured: false,
    image: '/images/project-players-paradigm.jpg',
    githubUrl: 'https://github.com/RudranshKaran/The-Player-s-Paradigm',
    liveUrl: '',
    startDate: '2024-11',
    endDate: '2024-12',
  }

];

export const getFeaturedProject = (): Project => {
  return projects.find((p) => p.featured) || projects[0];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
