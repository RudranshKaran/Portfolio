import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'rag-pipeline-system',
    title: 'RAG Pipeline System with Vector Embeddings',
    summary: 'Production-grade RAG system processing 10K+ documents with vector search, achieving 92% retrieval accuracy',
    description: 'A scalable Retrieval-Augmented Generation (RAG) pipeline that combines LLM capabilities with custom document processing, vector embeddings, and intelligent retrieval mechanisms.',
    problem: 'Traditional chatbots lack context and accuracy when answering domain-specific questions. Without access to proprietary documentation and the ability to ground responses in real data, LLMs hallucinate and provide unreliable answers. The challenge was building a system that could process large document sets, create meaningful embeddings, and retrieve relevant context with high precision.',
    architecture: 'The system uses a three-tier architecture: (1) Document Processing Layer - handles PDF/text ingestion, chunking with semantic overlap, and metadata extraction. (2) Embedding & Storage Layer - generates embeddings using OpenAI text-embedding-3-small, stores vectors in Pinecone with HNSW indexing. (3) Retrieval & Generation Layer - implements hybrid search (semantic + keyword), reranking with cross-encoders, and context-aware prompt engineering with GPT-4.',
    backendDesign: 'Built with FastAPI for async request handling and high throughput. Implemented token bucket rate limiting for OpenAI API calls, connection pooling for Pinecone, and Redis caching for frequently accessed embeddings. Background workers process document uploads via Celery with RabbitMQ as the message broker. Structured logging with correlation IDs for distributed tracing.',
    llmIntegration: 'Uses LangChain for orchestration with custom retrieval chains. Implemented semantic chunking with RecursiveCharacterTextSplitter (chunk_size=1000, overlap=200). System prompt engineering includes role definition, context formatting, and response constraints. Added self-consistency prompting and chain-of-thought for complex queries. Fallback mechanisms handle API failures gracefully.',
    databaseStructure: 'PostgreSQL stores document metadata, processing status, and user query logs. Pinecone hosts 1536-dimensional vector embeddings with namespace-based isolation for multi-tenant support. Redis caches embedding results (TTL 24h) and stores rate limit counters. Document-chunk relationships maintained with composite indexes for fast lookups.',
    tradeoffs: 'Chose Pinecone over self-hosted Qdrant for managed infrastructure despite higher costs ($0.07/1M queries vs self-hosted). Semantic chunking increases storage by 15% but improves retrieval precision by 23%. Async processing adds complexity but prevents blocking on large document uploads. Reranking adds 200ms latency but reduces irrelevant results by 40%.',
    improvements: 'Add query expansion with synonyms and paraphrasing. Implement user feedback loops to fine-tune retrieval weights. Add support for multi-modal documents (images, tables). Build evaluation pipeline with RAGAS metrics. Implement streaming responses for better UX. Add cost monitoring and optimization for embedding generation.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI GPT-4', 'Pinecone', 'PostgreSQL', 'Redis', 'Celery', 'RabbitMQ', 'Docker'],
    category: 'GenAI',
    featured: true,
    image: '/images/project-rag.jpg',
    githubUrl: 'https://github.com/yourusername/rag-pipeline',
    liveUrl: 'https://rag-demo.yoursite.com',
    startDate: '2025-09',
    endDate: '2025-12',
  },
  {
    id: '2',
    slug: 'ai-agent-orchestration',
    title: 'Multi-Agent Orchestration Platform',
    summary: 'Autonomous AI agent system coordinating specialized LLM agents for complex workflow automation',
    description: 'An orchestration platform that coordinates multiple specialized AI agents to handle complex, multi-step tasks autonomously with tool use, decision-making, and error recovery.',
    problem: 'Single LLM agents struggle with complex tasks requiring multiple specialized capabilities (research, coding, analysis, execution). Monolithic prompts become unwieldy and unreliable. Need a system where specialized agents collaborate, delegate tasks, and recover from failures while maintaining conversation context and task history.',
    architecture: 'Event-driven architecture with Agent Registry, Task Queue, and Coordination Engine. Each agent is a stateless microservice with defined capabilities and input/output schemas. Central coordinator uses LangGraph for state management and agent routing. Message passing via Redis Streams ensures ordering. Agent supervisor (GPT-4) plans task decomposition and delegates to specialists.',
    backendDesign: 'Built with FastAPI and async/await for concurrent agent execution. WebSocket connections provide real-time task updates to clients. Implemented Circuit Breaker pattern for agent failures with exponential backoff. Task state persisted in PostgreSQL with event sourcing. Distributed tracing with OpenTelemetry tracks agent interactions across services.',
    llmIntegration: 'Five specialized agents: (1) Researcher - web search and summarization, (2) Coder - generation and debugging, (3) Analyst - data analysis and visualization, (4) Executor - API calls and tool use, (5) Reviewer - quality checks and validation. Each uses function calling with strict schemas. Supervisor coordinates with dynamic planning and reflection loops.',
    databaseStructure: 'PostgreSQL stores task definitions, execution history, and agent interactions with JSONB columns for flexible schemas. Redis caches agent outputs and maintains conversation memory. Task queue implemented with Redis Sorted Sets for priority handling. Agent registry uses Redis for service discovery with TTL-based health checks.',
    tradeoffs: 'Microservices add operational complexity but enable independent agent scaling and deployment. Event sourcing increases storage but provides complete audit trails and replay capability. Synchronous coordination reduces throughput but ensures task consistency. Added 300ms overhead per agent handoff but gained modularity.',
    improvements: 'Add agent fine-tuning on task-specific datasets. Implement human-in-the-loop for critical decisions. Add cost optimization by routing simple tasks to smaller models. Build agent marketplace for community-contributed specialists. Implement multi-modal agents (vision, audio). Add automatic agent performance benchmarking.',
    techStack: ['Python', 'FastAPI', 'LangGraph', 'OpenAI', 'PostgreSQL', 'Redis Streams', 'WebSockets', 'Docker', 'Kubernetes'],
    category: 'GenAI',
    featured: false,
    image: '/images/project-agents.jpg',
    githubUrl: 'https://github.com/yourusername/ai-agents',
    startDate: '2025-06',
    endDate: '2025-10',
  },
  {
    id: '3',
    slug: 'scalable-fastapi-backend',
    title: 'Scalable FastAPI Backend with Redis Caching',
    summary: 'High-performance REST API handling 50K+ req/min with intelligent caching and async processing',
    description: 'A production-ready backend system built with FastAPI, featuring multi-layer caching, async processing, rate limiting, and comprehensive monitoring for high-traffic applications.',
    problem: 'Legacy synchronous Flask backend couldn\'t handle traffic spikes (5K+ concurrent users), causing timeouts and degraded UX. Database queries were taking 500ms+ on average. No caching strategy led to redundant computations. Needed a complete rewrite focused on async processing, intelligent caching, and horizontal scalability.',
    architecture: 'Three-layer architecture: (1) API Gateway - reverse proxy with NGINX, rate limiting, SSL termination. (2) Application Layer - FastAPI with async handlers, connection pooling, background tasks. (3) Data Layer - PostgreSQL with read replicas, Redis for caching and sessions. Deployed across 6 containers orchestrated with Docker Compose, ready for K8s migration.',
    backendDesign: 'Fully async with asyncio and asyncpg for non-blocking database I/O. Dependency injection for database sessions and Redis clients ensures proper resource management. Implemented tiered caching: L1 (in-memory LRU, 60s TTL), L2 (Redis, 5min TTL), L3 (DB with read replicas). Background tasks handle email notifications, report generation, and data aggregation.',
    llmIntegration: 'Not applicable - pure backend system.',
    databaseStructure: 'PostgreSQL 15 with partitioned tables for time-series data (monthly partitions). Composite B-tree indexes on frequently queried columns. Read replicas handle analytics queries, master for writes. Redis Cluster (6 nodes) provides high availability caching with automatic failover. Key patterns use prefixes for namespace isolation.',
    tradeoffs: 'Async code is harder to debug but handles 10x more concurrent requests. Redis adds infrastructure cost but reduces DB load by 85%. Read replicas introduce replication lag (avg 50ms) but distribute query load. Denormalized cache entries increase memory but eliminate joins. Added complexity pays off at scale.',
    improvements: 'Add GraphQL layer with DataLoader for flexible queries and automatic batching. Implement CDC (Change Data Capture) for real-time cache invalidation. Add distributed tracing with Jaeger. Build automatic API documentation with examples. Add request/response compression. Implement blue-green deployments with zero downtime.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis Cluster', 'asyncpg', 'SQLAlchemy', 'Pydantic', 'NGINX', 'Docker', 'Prometheus', 'Grafana'],
    category: 'Backend',
    featured: false,
    image: '/images/project-backend.jpg',
    githubUrl: 'https://github.com/yourusername/fastapi-backend',
    startDate: '2025-03',
    endDate: '2025-08',
  },
];

export const getFeaturedProject = (): Project => {
  return projects.find((p) => p.featured) || projects[0];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
