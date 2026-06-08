/**
 * Template Name: iPortfolio
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
    "use strict";

    // Global Data
    const projects = [
        {
            title: "HTML Cloner",
            type: "Browser Extension",
            client: "Personal",
            project_link: "https://addons.mozilla.org/en-US/firefox/addon/html-cloner/",
            description: "Published Firefox extension that snapshots any webpage — HTML, CSS, fonts, and images — into a single portable file.",
            image: "assets/img/screenshots/browser-extension.png",
            id: "html-cloner",
            detailsLink: "pages/portfolio-details.html?id=html-cloner",
            filterClass: "filter-extension",
            detail_title: "HTML Cloner – Full Webpage Snapshot Extension",
            detail_description: `
      <p>
        A cross-browser extension that captures any webpage as a complete, self-contained HTML file — preserving layout, styles, images, and fonts exactly as they appear in the browser. <strong>Published on the Firefox Add-ons Store.</strong>
      </p>
      <ul>
        <li><strong>One-Click Capture:</strong> Instantly clones the active tab with all assets bundled inline — no configuration required</li>
        <li><strong>Complete Asset Preservation:</strong> Inlines external stylesheets, images, fonts, and scripts to produce a fully portable, offline-ready file</li>
        <li><strong>Cross-Browser Support:</strong> Live on Firefox; Chrome support in progress pending store account setup</li>
        <li><strong>Zero Dependencies:</strong> Built entirely in plain JavaScript using native WebExtension APIs — no build step, no frameworks</li>
        <li><strong>Developer Utility:</strong> Used for offline page archiving, UI snapshot comparisons, and inspecting third-party page structure without network access</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> JavaScript · Browser Extension APIs (WebExtensions)<br>
        <strong>Status:</strong> Live — Published on Firefox Add-ons Store
      </p>
    `,
        },
        {
            title: "Fake News Detection",
            type: "ML Research",
            client: "Personal",
            project_link: "#",
            description: "NLP classification pipeline using Logistic Regression and BERT to identify misinformation in news articles — with full preprocessing, feature extraction, and model evaluation.",
            image: "assets/img/screenshots/Jupyter.png",
            id: "fake-news",
            detailsLink: "pages/portfolio-details.html?id=fake-news",
            filterClass: "filter-mlai",
            detail_title: "Fake News Detection – NLP Classification System",
            detail_description: `
      <p>
        A machine learning research project that classifies news articles as real or fake using a full Natural Language Processing pipeline — from raw text cleaning through model training and evaluation. Experiments span classical ML to transformer-based approaches.
      </p>
      <ul>
        <li><strong>Dual-Model Approach:</strong> Primary model is Logistic Regression with TF-IDF features; secondary experiments used BERT for contextual embeddings — with a clear accuracy comparison between the two</li>
        <li><strong>Full Preprocessing Pipeline:</strong> Tokenization, stopword removal, lemmatization, and n-gram feature extraction applied consistently across train and test splits</li>
        <li><strong>Dataset:</strong> Trained and validated on the Kaggle Fake News dataset (~1,000 labeled articles) with stratified splits to prevent class imbalance bias</li>
        <li><strong>Evaluation:</strong> Model quality measured with precision, recall, F1-score, and confusion matrix analysis across multiple classifier configurations</li>
        <li><strong>Reproducible Notebook:</strong> Clearly structured Jupyter notebook with separated stages: EDA → preprocessing → training → evaluation → conclusions</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Python · Scikit-learn · HuggingFace Transformers (BERT) · Pandas · NLTK<br>
        <strong>Status:</strong> Complete – Research Prototype
      </p>
    `,
        },
        {
            title: "Django API Framework",
            type: "API / Backend",
            client: "Personal",
            project_link: "#",
            description: "Production-ready Django REST starter with token auth, rate limiting, full CRUD endpoints, and a Postman collection — designed to eliminate boilerplate on new API projects.",
            image: "assets/img/screenshots/api.jpeg",
            id: "django-api",
            detailsLink: "pages/portfolio-details.html?id=django-api",
            filterClass: "filter-api",
            detail_title: "Django API Framework – Reusable Token-Authenticated REST Server",
            detail_description: `
      <p>
        A clean, reusable Django REST Framework base that compresses hours of boilerplate into a ready-to-fork repository. Covers authentication, CRUD, throttling, and API documentation out of the box — fork it, rename the app, and start building your domain logic immediately.
      </p>
      <ul>
        <li><strong>Token Authentication:</strong> DRF token-based auth with login, logout, and register endpoints — secure by default without over-engineering RBAC for projects that don't need it</li>
        <li><strong>Full CRUD:</strong> Standardised create, read, update, and delete endpoints backed by a documented Postman collection for immediate testing and client handoff</li>
        <li><strong>Rate Limiting & Throttling:</strong> Per-user and anonymous request throttles pre-configured for both development and production environments</li>
        <li><strong>Modular Structure:</strong> App layout designed for clean extension — add a new resource by dropping in a model, serializer, and viewset, nothing else</li>
        <li><strong>Microservice Compatible:</strong> Runs cleanly as an isolated service behind a reverse proxy or as the core backend in a larger architecture</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Django REST Framework · Python · SQLite / PostgreSQL · Postman<br>
        <strong>Status:</strong> Complete – Ready for reuse
      </p>
    `,
        },
        {
            title: "Node.js Game Framework",
            type: "API / Backend",
            client: "Personal",
            project_link: "#",
            description: "API-first backend for turn-based multiplayer games — handles match sessions, player management, score submission, and prize distribution, decoupled from any frontend.",
            image: "assets/img/screenshots/api.jpeg",
            id: "game-framework",
            detailsLink: "pages/portfolio-details.html?id=game-framework",
            filterClass: "filter-api",
            detail_title: "Node.js Game Framework – Multiplayer Turn-Based Game Backend",
            detail_description: `
      <p>
        A backend-only framework for the server-side logic of turn-based and board games. Built API-first so it integrates with any client — web, mobile, or native — without coupling game logic to a specific frontend implementation.
      </p>
      <ul>
        <li><strong>Match Lifecycle State Machine:</strong> Full session management — create, join, take turn, end, archive — with server-side validation at every state transition to prevent illegal moves</li>
        <li><strong>Score & Prize Distribution:</strong> Configurable scoring rules and automated reward calculations triggered at match completion</li>
        <li><strong>Player Management:</strong> User registration, session tracking, match history, and leaderboard endpoints per player</li>
        <li><strong>Clean REST API:</strong> Documented endpoints for all game actions — swap in any frontend or integrate with third-party platforms without touching game logic</li>
        <li><strong>Decoupled Architecture:</strong> No UI layer — the framework is the engine, making it adaptable across game genres with minimal modification</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Node.js · Express · MongoDB<br>
        <strong>Status:</strong> Complete – Ready for integration
      </p>
    `,
        },
        {
            title: "Freecom",
            type: "Web Application",
            client: "Personal",
            project_link: "#",
            description: "NLP-driven product discovery app that scores review sentiment with spaCy and NLTK to surface genuinely top-rated recommendations — not just highest-rated by count.",
            image: "assets/img/screenshots/freecom.png",
            id: "freecom",
            detailsLink: "pages/portfolio-details.html?id=freecom",
            filterClass: "filter-mlai",
            detail_title: "Freecom – NLP-Powered Product Recommendation Engine",
            detail_description: `
      <p>
        Freecom processes user preferences and real product reviews through an NLP pipeline to surface the highest-quality recommendations — cutting through inflated star ratings with sentiment-based scoring.
      </p>
      <ul>
        <li><strong>Sentiment Analysis:</strong> Scores product reviews using spaCy and NLTK to distinguish genuine satisfaction from generic positive language — products ranked by sentiment quality, not raw rating count</li>
        <li><strong>Preference Matching:</strong> Maps user input to product categories and filters results by NLP-derived quality signals rather than simple keyword search</li>
        <li><strong>Discount Aggregation:</strong> Surfaces external deal links relevant to recommended products so users can act on recommendations immediately</li>
        <li><strong>Django Backend:</strong> Clean MVC structure with NLP processing components decoupled from the web layer — sentiment scoring runs as a separate service</li>
        <li><strong>Minimal UI:</strong> Focused interface designed to get from preference input to recommendation in as few steps as possible</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Python · Django · spaCy · NLTK · Web Scraping<br>
        <strong>Status:</strong> Complete
      </p>
    `,
        },
        {
            title: "Google Advanced Data Analytics Capstone",
            type: "Data Analytics",
            client: "Google Certification",
            project_link: "#",
            description: "End-to-end analytics capstone for the Google Advanced Data Analytics certificate — EDA, statistical hypothesis testing, and stakeholder-ready data storytelling on a real-world dataset.",
            image: "assets/img/screenshots/Jupyter.png",
            id: "google-capstone",
            detailsLink: "pages/portfolio-details.html?id=google-capstone",
            filterClass: "filter-mlai",
            detail_title: "Google Advanced Data Analytics Capstone",
            detail_description: `
          <p>
            The culminating project for the <strong>Google Advanced Data Analytics</strong> professional certificate. Covers a complete analytics workflow on a real-world business dataset — from raw data through cleaned, analyzed, and presentation-ready insights delivered as a business narrative.
          </p>
          <ul>
            <li><strong>Exploratory Data Analysis:</strong> Systematic profiling of distributions, outliers, correlations, and missing-data patterns before any modeling — building understanding of the data before drawing conclusions</li>
            <li><strong>Statistical Hypothesis Testing:</strong> Formulated and tested business-relevant hypotheses using appropriate statistical tests with explicit significance thresholds and power considerations</li>
            <li><strong>Stakeholder Visualization:</strong> Built a narrative visualization layer using Matplotlib and Seaborn — charts designed for business decision-makers, not just notebook output</li>
            <li><strong>Reproducible Workflow:</strong> Structured notebook with clearly separated stages: ingestion → cleaning → EDA → hypothesis testing → conclusions</li>
            <li><strong>Business Framing:</strong> Findings framed as actionable recommendations with supporting evidence — not just model accuracy numbers</li>
          </ul>
          <p>
            <strong>Tech Stack:</strong> Python · Pandas · Matplotlib · Seaborn · Jupyter Notebook<br>
            <strong>Status:</strong> Complete – Submitted for Google Certification
          </p>
        `,
        },
        {
            title: "POS & CRM System",
            type: "Professional",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Multi-terminal POS and CRM for a food chain — order management, real-time inventory, daily reporting, and multi-branch data sync engineered for peak-hour concurrency.",
            image: "",
            placeholderColor: "#E1F5EE",
            id: "pos-crm",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
            detail_title: "POS & CRM System – Fovty Solutions",
            detail_description: `
          <p>
            A full-featured point-of-sale and CRM built for a food chain with multiple physical branches. Manages the complete order lifecycle — placement through kitchen dispatch to payment — while keeping inventory and reporting synchronized across all terminals in real time.
          </p>
          <ul>
            <li><strong>Order Management:</strong> POS interface supporting dine-in, takeout, and catering with split payment, voids, and partial refunds — designed for cashier speed under pressure</li>
            <li><strong>Real-Time Inventory:</strong> Stock levels decrement on every order; low-stock alerts and automated reorder suggestions prevent service gaps during peak hours</li>
            <li><strong>Multi-Branch Sync:</strong> Centralized MySQL schema with branch-aware queries — chain-wide sales and inventory visibility from a single admin panel</li>
            <li><strong>Role-Based Access:</strong> Distinct interfaces for managers, cashiers, and kitchen staff — each role sees only what it needs, reducing errors and unauthorized actions</li>
            <li><strong>Catering Module:</strong> Advance booking workflow for bulk catering orders with custom menu configurations and deposit tracking separate from walk-in orders</li>
            <li><strong>Daily Reporting:</strong> Automated end-of-day reports covering gross sales, item-level margins, voids, and staff performance — exportable for accountant review</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Maintaining data integrity across simultaneous POS terminals during peak service — solved with optimistic locking and transaction-scoped inventory updates.
          </p>
          <p>
            <strong>Tech Stack:</strong> Laravel · MySQL · jQuery · Bootstrap &nbsp;|&nbsp; <strong>Client:</strong> Fovty Solutions &nbsp;|&nbsp; <em>Private – NDA Protected</em>
          </p>
        `,
        },
        {
            title: "Law Firm Management System",
            type: "Professional",
            client: "Fovty Solutions",
            project_link: "#",
            description: "End-to-end legal practice management — case lifecycle tracking, encrypted document storage, client portal, billing, and compliance-grade access controls for a legal services firm.",
            image: "",
            placeholderColor: "#E6F1FB",
            id: "law-firm",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["Laravel", "MySQL", "REST API", "Bootstrap"],
            detail_title: "Law Firm Management System – Fovty Solutions",
            detail_description: `
          <p>
            A comprehensive practice management system built for a legal services firm — replacing spreadsheets and email threads with a single access-controlled platform that covers intake through billing and archival.
          </p>
          <ul>
            <li><strong>Case Lifecycle Tracking:</strong> Full timeline from intake through active representation to closure — milestone reminders, status flags, and complete audit history on every matter</li>
            <li><strong>Secure Document Management:</strong> Client-partitioned storage with version control and encrypted uploads; attorneys and clients see only their authorized files</li>
            <li><strong>Client Portal:</strong> Password-protected interface for clients to view case progress, download documents, and message assigned attorneys — reducing inbound support calls</li>
            <li><strong>Granular Role Permissions:</strong> Distinct access levels for partners, associates, paralegals, and admin — configurable per case and per client matter</li>
            <li><strong>Integrated Billing:</strong> Time-entry logging, invoice generation, and payment tracking with breakdowns by attorney and activity type</li>
            <li><strong>Calendar & Deadline Engine:</strong> Court dates, client appointments, and statutory deadlines synced to attorney calendars with configurable advance reminders</li>
            <li><strong>Full-Text Search:</strong> Cross-case and cross-document search covering all text content — critical for due diligence and finding relevant precedent quickly</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Strict data isolation between client matters while supporting firm-wide search and reporting — solved through row-level security policies and role-scoped query layers.
          </p>
          <p>
            <strong>Tech Stack:</strong> Laravel · MySQL · REST API · Bootstrap &nbsp;|&nbsp; <strong>Client:</strong> Fovty Solutions &nbsp;|&nbsp; <em>Private – NDA Protected</em>
          </p>
        `,
        },
        {
            title: "Shipment Tracking CRM",
            type: "Professional",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Logistics CRM unifying multiple carrier APIs into one real-time tracking interface — WebSocket live updates, automated invoicing, SMS/email alerts, and a self-service customer portal.",
            image: "",
            placeholderColor: "#FAEEDA",
            id: "shipment-tracking",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["Laravel", "External APIs", "WebSockets", "MySQL"],
            detail_title: "Shipment Tracking CRM – Fovty Solutions",
            detail_description: `
          <p>
            A logistics management platform that consolidates tracking data from multiple carrier APIs into a single normalized interface — eliminating the manual overhead of cross-checking courier dashboards and automating the invoicing and notification workflow around every shipment.
          </p>
          <ul>
            <li><strong>Multi-Carrier API Integration:</strong> Consumes tracking feeds from multiple logistics providers; a normalization layer translates inconsistent status schemas into a unified internal model without losing carrier-specific detail</li>
            <li><strong>Real-Time WebSocket Updates:</strong> Live shipment status pushed to the browser — no polling, no page refresh, no stale data</li>
            <li><strong>Automated Invoice Generation:</strong> Invoices generated dynamically based on weight, dimensions, distance tier, and service type — exported as print-ready PDFs</li>
            <li><strong>Customer Self-Service Portal:</strong> Public-facing tracking page where end customers enter a shipment ID to view their full delivery timeline and history</li>
            <li><strong>Notification Engine:</strong> Configurable email and SMS alerts at key milestones — dispatch, in-transit, out-for-delivery, and delivered</li>
            <li><strong>Analytics Dashboard:</strong> Delivery KPIs including on-time rate, average transit time, delay reasons, and carrier-level performance comparisons</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Each carrier returns events in a different format with different status codes and timestamp conventions — the normalization pipeline maps all of them to a consistent internal schema.
          </p>
          <p>
            <strong>Tech Stack:</strong> Laravel · External APIs · WebSockets · AJAX · MySQL &nbsp;|&nbsp; <strong>Client:</strong> Fovty Solutions &nbsp;|&nbsp; <em>Private – NDA Protected</em>
          </p>
        `,
        },
        {
            title: "Leads & CRM Automation",
            type: "Professional",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Extended Prefex CRM with a configurable automation engine — smart lead assignment, follow-up scheduling, field operations coordination, and escalation workflows.",
            image: "",
            placeholderColor: "#EEEDFE",
            id: "leads-crm",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["Laravel", "PHP", "AJAX", "MySQL"],
            detail_title: "Leads & CRM Automation – Fovty Solutions",
            detail_description: `
          <p>
            An extensive customization of the Prefex CRM platform that adds an intelligent automation layer on top of the core lead management system — built for a field-operations-heavy business where manual follow-up tracking was creating measurable revenue leakage.
          </p>
          <ul>
            <li><strong>Smart Lead Assignment:</strong> Automated distribution engine routes inbound leads based on territory, agent workload, and recent conversion performance — no manual dispatcher needed</li>
            <li><strong>Follow-Up Automation:</strong> Rule-driven reminder system with escalating notifications for overdue follow-ups; automatic escalation to managers past a configurable SLA window</li>
            <li><strong>Field Operations Module:</strong> Site visit scheduling with route optimization, GPS check-in verification, and structured post-visit reporting for field agents</li>
            <li><strong>Configurable Business Rules:</strong> Non-technical admins configure assignment rules, SLA thresholds, and escalation chains through a UI — no code changes needed for business process updates</li>
            <li><strong>Pipeline Analytics:</strong> Lead-to-close funnel metrics by agent, territory, and lead source — surfaces exactly where conversions are dropping</li>
            <li><strong>Mobile-Optimized Interface:</strong> Responsive layout for field agents updating lead status from a phone between site visits</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Building an automation rule engine flexible enough to encode real business logic without requiring a developer for every policy change.
          </p>
          <p>
            <strong>Tech Stack:</strong> Laravel · PHP · AJAX · MySQL &nbsp;|&nbsp; <strong>Client:</strong> Fovty Solutions &nbsp;|&nbsp; <em>Private – NDA Protected</em>
          </p>
        `,
        },
        {
            title: "Business Idea Marketplace",
            type: "Professional",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Two-sided marketplace for buying and selling startup concepts — Stripe escrow, NDA-gated document release, admin moderation, and an in-platform offer negotiation system.",
            image: "",
            placeholderColor: "#E1F5EE",
            id: "idea-marketplace",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["Node.js", "React", "MongoDB", "Stripe API"],
            detail_title: "Business Idea Marketplace – Fovty Solutions",
            detail_description: `
          <p>
            A two-sided marketplace where entrepreneurs list validated startup concepts and investors or aspiring founders browse, negotiate, and acquire them. The core engineering challenge was building enough trust infrastructure — escrow payments, IP protection, identity gating — for strangers to transact confidently on abstract ideas.
          </p>
          <ul>
            <li><strong>Seller Dashboard:</strong> Full listing workspace — structured submissions with business model canvas, market sizing, competitive analysis, and financial projections</li>
            <li><strong>Discovery & Search:</strong> Filtered browse by industry vertical, capital requirement, business model type, and seller credibility score</li>
            <li><strong>Stripe Escrow Payments:</strong> Funds held in escrow at checkout; released to seller only after buyer confirms receipt of all promised assets — with a built-in dispute window</li>
            <li><strong>NDA-Gated Documents:</strong> Detailed plans and financials locked behind a countersigned NDA flow; watermarked PDFs prevent unauthorized redistribution after signing</li>
            <li><strong>Negotiation System:</strong> Structured offer/counter-offer messaging with offer history, expiry timers, and deal status tracking separate from general chat</li>
            <li><strong>Admin Moderation Queue:</strong> Content review workflow to vet listings for completeness and flag potential IP issues before they go live</li>
            <li><strong>Platform Analytics:</strong> Admin dashboard tracking GMV, active listing inventory, average time-to-close, and buyer/seller engagement metrics</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Designing a transaction flow that protects both buyer (getting what was promised) and seller (not giving away IP before payment) — solved through phased escrow logic and staged document release.
          </p>
          <p>
            <strong>Tech Stack:</strong> Node.js · React · MongoDB · Stripe API &nbsp;|&nbsp; <strong>Client:</strong> Fovty Solutions &nbsp;|&nbsp; <em>Private – NDA Protected</em>
          </p>
        `,
        },
        {
            title: "AI Career Platform",
            type: "Professional",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Full-stack AI career product — ATS-optimized resume generation, LinkedIn profile analysis, AI headshot enhancement, LLM-written cover letters, and a Kanban job application tracker.",
            image: "",
            placeholderColor: "#EEEDFE",
            id: "ai-career",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["Node.js", "React", "OpenAI API", "MongoDB", "Python"],
            detail_title: "AI Career Platform – Fovty Solutions",
            detail_description: `
          <p>
            A full-stack AI product consolidating every tool a modern job seeker needs into one platform. Integrates multiple AI providers — LLMs, image models, and Python inference — to deliver personalized, high-quality career content rather than generic templates.
          </p>
          <ul>
            <li><strong>ATS Resume Builder:</strong> Generates keyword-optimized resumes tailored to a target job description — formatted to pass applicant tracking systems with selectable visual templates</li>
            <li><strong>LinkedIn Optimizer:</strong> Analyzes the user's profile against industry benchmarks and delivers specific rewrites for headline, about section, and experience bullets</li>
            <li><strong>AI Headshot Enhancement:</strong> Transforms casual photos into professional-grade headshots using image generation models — no photoshoot required</li>
            <li><strong>Cover Letter Engine:</strong> Produces bespoke cover letters from a job description, company context, and user background — structured LLM prompting ensures relevance over generic output</li>
            <li><strong>Application Tracker:</strong> Kanban pipeline managing open applications through stages — applied → phone screen → interview → offer — with reminders at each stage</li>
            <li><strong>Interview Prep:</strong> Role-specific and company-specific practice questions with suggested answer frameworks generated on demand</li>
            <li><strong>Job Alert Engine:</strong> Personalized notifications for new postings matching skill set, seniority, and location preferences</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Orchestrating multiple AI services under a single user request while maintaining sub-3-second response times and consistent output quality across models.
          </p>
          <p>
            <strong>Tech Stack:</strong> Node.js · React · OpenAI API · MongoDB · Python &nbsp;|&nbsp; <strong>Client:</strong> Fovty Solutions &nbsp;|&nbsp; <em>Private – NDA Protected</em>
          </p>
        `,
        },
        {
            title: "LinkedIn Automation Extension",
            type: "Professional",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Chrome extension for recruiters — profile scraping, personalized connection campaigns, timezone-aware outreach scheduling, ATS export, and rate-limiting to protect the account.",
            image: "",
            placeholderColor: "#EEEDFE",
            id: "linkedin-automation",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["JavaScript", "Puppeteer", "Python", "Chrome API"],
            detail_title: "LinkedIn Automation Extension – Fovty Solutions",
            detail_description: `
          <p>
            A Chrome extension that gives recruiters programmatic control over their LinkedIn outreach — from candidate discovery and data extraction through personalized connection campaigns and response tracking. Account safety is a first-class concern throughout.
          </p>
          <ul>
            <li><strong>Profile Extraction:</strong> One-click scraping of candidate profiles — work history, skills, education, and contact details — without leaving the current page</li>
            <li><strong>Bulk Data Export:</strong> Export collected candidates to CSV, JSON, or push directly to an ATS integration endpoint for pipeline import</li>
            <li><strong>Personalized Campaigns:</strong> Template-based connection requests with per-recipient variable substitution (name, company, role) and configurable multi-step follow-up sequences</li>
            <li><strong>Timezone-Aware Scheduling:</strong> Outreach messages queued and delivered during the recipient's local business hours — measurably improves response rates</li>
            <li><strong>Engagement Analytics:</strong> Tracks connection acceptance rates and reply rates per campaign and per template variant</li>
            <li><strong>Account Safety Layer:</strong> Configurable daily action limits, randomized delays between actions, and session rotation to stay within LinkedIn's behavioral thresholds</li>
            <li><strong>Local-First Data:</strong> All candidate data stored locally by default; optional encrypted cloud sync for team sharing</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Building automation that is fast and reliable enough to be useful while staying within LinkedIn's detection thresholds — required careful study of rate limits and session fingerprinting behavior.
          </p>
          <p>
            <strong>Tech Stack:</strong> JavaScript · Chrome Extension APIs · Puppeteer · Python &nbsp;|&nbsp; <strong>Client:</strong> Fovty Solutions &nbsp;|&nbsp; <em>Private – NDA Protected</em>
          </p>
        `,
        },
        {
            title: "Recommendation System",
            type: "Professional",
            client: "Allsoft Solutions",
            project_link: "#",
            description: "Production-grade collaborative filtering engine with a Flask REST API — user-based and item-based CF, hyperparameter tuning, offline evaluation, and an A/B testing framework.",
            image: "",
            placeholderColor: "#EAF3DE",
            id: "recommendation-system",
            detailsLink: "#",
            filterClass: "filter-professional",
            techStack: ["Python", "Flask", "Scikit-learn", "Pandas"],
            detail_title: "Recommendation System – Allsoft Solutions",
            detail_description: `
          <p>
            A production-grade recommendation engine developed during my internship at Allsoft Solutions. Implements both user-based and item-based collaborative filtering, exposed through a REST API — designed to handle thousands of concurrent users at real-time latency.
          </p>
          <ul>
            <li><strong>Dual CF Algorithms:</strong> Both user-based (find similar users, recommend their items) and item-based (find similar items to what the user liked) CF — configurable weighting between the two for tuning relevance vs. serendipity</li>
            <li><strong>End-to-End Data Pipeline:</strong> Raw interaction data → cleaning → normalization → sparse matrix construction → model training — fully reproducible and re-runnable on refreshed data</li>
            <li><strong>Hyperparameter Tuning:</strong> Grid search over similarity metrics (cosine, Pearson, Jaccard) and neighborhood sizes using cross-validation to maximize precision@k</li>
            <li><strong>Flask REST API:</strong> <code>/recommend</code> endpoint returns a ranked item list for a given user ID — configurable result count, latency-optimized with precomputed similarity caches</li>
            <li><strong>Offline Evaluation:</strong> Model quality measured with precision, recall, F1-score, and NDCG across multiple test folds before any live deployment</li>
            <li><strong>A/B Testing Framework:</strong> Traffic-splitting infrastructure to run model variants in parallel and compare recommendation quality on live user interactions</li>
            <li><strong>Scalable Storage:</strong> Sparse matrix representations keep memory footprint manageable as user and item counts grow into the thousands</li>
          </ul>
          <p>
            <strong>Key Engineering Challenge:</strong> Keeping recommendation latency under 200ms for large user-item matrices — solved through precomputed similarity caches refreshed on a background schedule rather than computed on-request.
          </p>
          <p>
            <strong>Tech Stack:</strong> Python · Flask · Scikit-learn · Pandas · NumPy &nbsp;|&nbsp; <strong>Client:</strong> Allsoft Solutions (Internship) &nbsp;|&nbsp; <em>Private</em>
          </p>
        `,
        },
    ];

    // Portfolio Details
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    if (projectId) {
        // Find the matching project
        const project = projects.find((item) => item.id === projectId);

        if (project) {
            // Set image
            document.querySelector(".swiper-slide img").src = '../' + project.image;

            // Set project info
            const infoList = document.querySelector(".portfolio-info ul");
            infoList.innerHTML = `
        <li><strong>Category</strong>: ${project.type}</li>
        <li><strong>Client</strong>: ${project.client}</li>
        <li><strong>Project URL</strong>: <a href="${project.project_link}" target="_blank">${project.project_link}</a></li>
      `;

            // Set title and description
            document.querySelector(".portfolio-description h2").textContent =
                project.detail_title;
            document.querySelector(".portfolio-description p").innerHTML =
                project.detail_description;
        } else {
            // If no match is found
            document.querySelector(".portfolio-description h2").textContent =
                "Project not found";
            document.querySelector(".portfolio-description p").textContent =
                "We couldn't find any project matching the ID in the URL.";
        }
    }

    /**
     * Header toggle
     */
    const headerToggleBtn = document.querySelector(".header-toggle");

    function headerToggle() {
        document.querySelector("#header").classList.toggle("header-show");
        headerToggleBtn.classList.toggle("bi-list");
        headerToggleBtn.classList.toggle("bi-x");
    }
    headerToggleBtn.addEventListener("click", headerToggle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.addEventListener("click", () => {
            if (document.querySelector(".header-show")) {
                headerToggle();
            }
        });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document
        .querySelectorAll(".navmenu .toggle-dropdown")
        .forEach((navmenu) => {
            navmenu.addEventListener("click", function (e) {
                e.preventDefault();
                this.parentNode.classList.toggle("active");
                this.parentNode.nextElementSibling.classList.toggle(
                    "dropdown-active"
                );
                e.stopImmediatePropagation();
            });
        });

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector(".scroll-top");

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100
                ? scrollTop.classList.add("active")
                : scrollTop.classList.remove("active");
        }
    }
    scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }
    window.addEventListener("load", aosInit);

    /**
     * Init typed.js
     */
    const selectTyped = document.querySelector(".typed");
    if (selectTyped) {
        let typed_strings = selectTyped.getAttribute("data-typed-items");
        typed_strings = typed_strings.split(",");
        new Typed(".typed", {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        });
    }

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = document.querySelectorAll(".skills-animation");
    skillsAnimation.forEach((item) => {
        new Waypoint({
            element: item,
            offset: "80%",
            handler: function (direction) {
                let progress = item.querySelectorAll(".progress .progress-bar");
                progress.forEach((el) => {
                    el.style.width = el.getAttribute("aria-valuenow") + "%";
                });
            },
        });
    });

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: ".glightbox",
    });

    /**
     * Init isotope layout and filters
     */
    document
        .querySelectorAll(".isotope-layout")
        .forEach(function (isotopeItem) {
            // Populate the portfolio items
            const portfolioContainer =
                document.querySelector(".isotope-container");
            populatePortfolio(projects, portfolioContainer);

            let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
            let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
            let sort =
                isotopeItem.getAttribute("data-sort") ?? "original-order";

            let initIsotope;
            imagesLoaded(
                isotopeItem.querySelector(".isotope-container"),
                function () {
                    initIsotope = new Isotope(
                        isotopeItem.querySelector(".isotope-container"),
                        {
                            itemSelector: ".isotope-item",
                            layoutMode: layout,
                            filter: filter,
                            sortBy: sort,
                        }
                    );
                }
            );

            isotopeItem
                .querySelectorAll(".isotope-filters li")
                .forEach(function (filters) {
                    filters.addEventListener(
                        "click",
                        function () {
                            isotopeItem
                                .querySelector(
                                    ".isotope-filters .filter-active"
                                )
                                .classList.remove("filter-active");
                            this.classList.add("filter-active");
                            initIsotope.arrange({
                                filter: this.getAttribute("data-filter"),
                            });
                            if (typeof aosInit === "function") {
                                aosInit();
                            }
                        },
                        false
                    );
                });
        });

    function populatePortfolio(projects, container) {
        projects.forEach((project) => {
            const projectElement = document.createElement("div");
            projectElement.classList.add(
                "col-lg-4",
                "col-md-6",
                "portfolio-item",
                "isotope-item",
                project.filterClass
            );

            // Check if this is a professional project with placeholder
            if (project.placeholderColor) {
                // Get SVG icon based on project type
                let svgIcon = getProjectIcon(project.id);
                let badgeHtml = project.badge ? `<span class="badge ${project.badgeClass}">${project.badge}</span>` : '';
                let techStackHtml = project.techStack ? project.techStack.join(' · ') : '';
                
                projectElement.innerHTML = `
        <div class="portfolio-content h-100">
          <div class="portfolio-placeholder" style="background: ${project.placeholderColor}; height: 200px; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
            ${svgIcon}
          </div>
          <div class="portfolio-info">
            <h4>${project.title}</h4>
            <p>${techStackHtml}</p>
            ${badgeHtml}
            <a href="#" title="More Details" data-bs-toggle="modal" data-bs-target="#project-${project.id}" class="details-link">
              <i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
      `;
            } else {
                projectElement.innerHTML = `
        <div class="portfolio-content h-100">
          <img src="${project.image}" class="img-fluid" alt="${project.title}" />
          <div class="portfolio-info">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <a href="${project.image}" title="${project.title}" data-gallery="portfolio-gallery-${project.type.toLowerCase()}" class="glightbox preview-link">
              <i class="bi bi-zoom-in"></i>
            </a>
            <a href="${project.detailsLink}" title="More Details" class="details-link">
              <i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
      `;
            }

            container.appendChild(projectElement);
        });
    }

    // Function to get SVG icon based on project
    function getProjectIcon(projectId) {
        const icons = {
            'pos-crm': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
            'law-firm': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1565C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
            'shipment-tracking': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F57C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
            'leads-crm': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7B1FA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
            'idea-marketplace': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>',
            'ai-career': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7B1FA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10"></path><path d="M12 12l8-8"></path><circle cx="12" cy="12" r="3"></circle></svg>',
            'linkedin-automation': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7B1FA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
            'recommendation-system': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#558B2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>'
        };
        return icons[projectId] || '<i class="bi bi-folder" style="font-size: 2rem;"></i>';
    }

    /**
     * Init swiper sliders
     */
    function initSwiper() {
        document
            .querySelectorAll(".init-swiper")
            .forEach(function (swiperElement) {
                let config = JSON.parse(
                    swiperElement
                        .querySelector(".swiper-config")
                        .innerHTML.trim()
                );

                if (swiperElement.classList.contains("swiper-tab")) {
                    initSwiperWithCustomPagination(swiperElement, config);
                } else {
                    new Swiper(swiperElement, config);
                }
            });
    }

    window.addEventListener("load", initSwiper);

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener("load", function (e) {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) {
                setTimeout(() => {
                    let section = document.querySelector(window.location.hash);
                    let scrollMarginTop =
                        getComputedStyle(section).scrollMarginTop;
                    window.scrollTo({
                        top: section.offsetTop - parseInt(scrollMarginTop),
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    });

    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll(".navmenu a");

    function navmenuScrollspy() {
        navmenulinks.forEach((navmenulink) => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (
                position >= section.offsetTop &&
                position <= section.offsetTop + section.offsetHeight
            ) {
                document
                    .querySelectorAll(".navmenu a.active")
                    .forEach((link) => link.classList.remove("active"));
                navmenulink.classList.add("active");
            } else {
                navmenulink.classList.remove("active");
            }
        });
    }
    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);
})();

(function () {
    // Set your professional start date (YYYY, MM - 1, DD)
    const startDate = new Date(2023, 10, 1); // Nov 1, 2023
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    let experienceText = "";

    if (years > 0) {
        experienceText += years + " year" + (years > 1 ? "s" : "");
    }

    if (months > 0) {
        experienceText += (years > 0 ? " " : "") +
            months + " month" + (months > 1 ? "s" : "");
    }

    if (!experienceText) {
        experienceText = "less than a month";
    }

    document.getElementById("experience-duration").textContent = experienceText;
})();
