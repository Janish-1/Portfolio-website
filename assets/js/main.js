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
            techStack: ["JavaScript", "WebExtension APIs"],
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
            techStack: ["Python", "Scikit-learn", "BERT", "Pandas", "NLTK"],
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
            techStack: ["Django REST Framework", "Python", "SQLite", "Postman"],
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
            techStack: ["Node.js", "Express", "MongoDB"],
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
            techStack: ["Python", "Django", "spaCy", "NLTK"],
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
            techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
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
            title: "Clip Keeper",
            type: "Desktop Application",
            client: "Personal",
            project_link: "#",
            description: "Local-first desktop video downloader for 16+ platforms with a Pro paid tier — license validation in Rust, feature enforcement in Python, UI gates in React.",
            image: "",
            placeholderColor: "#0d1b2a",
            id: "clip-keeper",
            techStack: ["Tauri", "Rust", "React", "Python", "yt-dlp"],
            detailsLink: "pages/portfolio-details.html?id=clip-keeper",
            filterClass: "filter-desktop",
            detail_title: "Clip Keeper – Local-First Desktop Video Downloader",
            detail_description: `
          <p>
            A local-first desktop video downloader built with Tauri and React on the frontend, backed by Python subprocess management for media extraction. The app supports 16+ streaming platforms — including YouTube, TikTok, Twitter/X, Instagram, Vimeo, JioSaavn, Bandcamp, Mixcloud, and more — through a modular download pipeline that abstracts platform-specific URL parsing, format selection, and media extraction behind a unified interface. The project is architected as three distinct layers communicating across strict trust boundaries: a React + TypeScript frontend handles user interaction and feature gating, a Rust backend manages license validation and OS-level process spawning, and Python scripts perform the actual media extraction and file writing.
          </p>
          <p>
            The monetization model is designed around a one-time $19 Pro license distributed through Lemon Squeezy, chosen specifically for its built-in license key validation API and automatic payment handling. The Pro tier unlocks unlimited concurrent downloads, all 16+ platforms (versus the free tier's top 5), an unlimited saved library with playlist sync, a bookmark scanner for detecting downloadable content on any bookmarked page, cookie authentication for private or member-only content, size estimation before download, and an unlimited download history. Free users are limited to one concurrent download, three saved playlists, the top five platforms, and the last ten download history entries.
          </p>
          <ul>
            <li><strong>Three-Layer Trust Architecture:</strong> The React frontend never handles license state directly — it queries Rust via <code>invoke(&#60;check_license&#62;)</code> through Tauri's IPC bridge, receives a boolean, and conditionally renders upgrade prompts. Rust holds the only in-memory view of license validity and optionally rechallenges Lemon Squeezy once per day. Python receives a <code>--premium</code> flag as a local command-line argument — enforcing platform allowlists, concurrency limits, and feature access at the extraction layer, independent of any UI decision.</li>
            <li><strong>Offline-First License Model:</strong> On first activation, the Rust backend posts the license key to Lemon Squeezy's <code>/v1/licenses/activate</code> endpoint, then writes the response — including key, email, activation timestamp, and validity — to <code>~/.clip-keeper/license.json</code>. All subsequent validation reads from this local cache, meaning the app functions fully without internet after the initial purchase. A daily background revalidation against the API catches revoked or expired keys without disrupting normal operation.</li>
            <li><strong>Download Pipeline:</strong> When a user submits a URL, the React frontend validates the platform, checks concurrency limits, and sends the request to Rust. Rust loads the license state, applies the <code>--premium</code> flag based on validity, and spawns a Python subprocess with the URL, quality preferences, and license tier as arguments. Python uses yt-dlp under the hood, wrapped with custom platform-specific handlers that parse available formats, handle geo-restrictions through cookie injection, extract metadata, and write files to a configurable download directory. Output streams back to Rust via stdout/stderr JSON messages for real-time progress in the React UI.</li>
            <li><strong>Bookmark Scanner (Pro):</strong> Iterates through the browser's exported bookmarks, visits each page URL headlessly using a lightweight HTTP client with cookie authentication, scrapes for embedded media players, and surfaces downloadable content directly in the app's interface. This bridges the gap between casual browsing and media collection without requiring users to manually copy URLs.</li>
            <li><strong>Saved Library & Playlist Sync (Pro):</strong> Users can save named playlists to a local SQLite database. Each playlist polls its source URLs at configurable intervals to detect new uploads, then surfaces additions as notification badges. The free tier locks this to three playlists; Pro removes the cap entirely. Playlist entries store thumbnail, title, duration, and download status for quick scanning without re-fetching metadata.</li>
            <li><strong>Cookie Authentication (Pro):</strong> For platforms like YouTube, Twitter, and Bandcamp where user accounts unlock private content, age-restricted material, or higher-quality streams, Pro users can export browser cookies as a JSON artifact and point Clip Keeper at it. The Python extraction layer injects the cookie file into yt-dlp's session, enabling authenticated requests without credential storage in the app itself.</li>
            <li><strong>Self-Contained Runtime:</strong> Beyond initial license activation, Clip Keeper requires no server infrastructure, no account creation, and no persistent background services. The Tauri bundle is a single executable — on Windows, a portable ~80 MB binary; on macOS, a standard app bundle. Updates are delivered through the OS's native package manager or direct binary replacement.</li>
          </ul>
          <p>
            <strong>Key Engineering Decision:</strong> Validation runs exclusively in Rust, never exposed to the JS frontend. Enforcement runs in Python, adjacent to the actual download logic. The frontend handles only presentation. This means even a determined user who patches the React code to remove upgrade prompts cannot bypass platform limits or access private content — those gates exist in compiled Rust and Python code on disk. The local <code>~/.clip-keeper/</code> directory is the only persistent state, making the app fully uninstallable by deletion.
          </p>
          <p>
            <strong>Tech Stack:</strong> Tauri v2 · Rust · React · TypeScript · Python · yt-dlp · Browser Cookie Formats · Lemon Squeezy License API<br>
            <strong>Status:</strong> In Development — Backend architecture finalized, extraction layer in active development
          </p>
        `,
        },
        {
            title: "File Foundry",
            type: "Web Application / SaaS",
            client: "Personal",
            project_link: "#",
            description: "All-in-one file conversion and processing platform with 23+ tools, auth, job queue, and Stripe payments — ready to launch as a monetizable SaaS.",
            image: "",
            placeholderColor: "#1a1a2e",
            id: "file-foundry",
            techStack: ["React", "Tailwind CSS", "Express", "Node.js", "MongoDB", "Redis", "Bull", "FFmpeg", "LibreOffice", "Sharp", "Stripe", "AWS S3"],
            detailsLink: "pages/portfolio-details.html?id=file-foundry",
            filterClass: "filter-webapp",
            detail_title: "File Foundry – All-in-One File Conversion Platform",
            detail_description: `
          <p>
            A cloud-native file conversion and processing platform built as a full-stack SaaS application. The frontend is a React 18 application styled with Tailwind CSS, featuring a custom dark theme, per-tool SEO metadata, Open Graph tags, a responsive mobile navigation system, and a multi-step file upload experience with real-time progress indicators and drag-and-drop support. The backend runs on Express 5 with a layered middleware stack: Multer handles multipart uploads with plan-based file size limits and MIME whitelist enforcement, Mongoose manages MongoDB persistence with TTL indexes for automatic file expiration, Bull orchestrates async conversion jobs over Redis (with a transparent in-process fallback when Redis is unavailable), and a comprehensive error handling middleware enforces consistent JSON error responses across all endpoints.
          </p>
          <p>
            The platform currently ships with 23 conversion tools organized into six categories — PDF operations, image processing, video manipulation, audio conversion, archive handling, and web rendering. PDF tools include format conversion (PDF&#8594;DOCX via pdf-parse, DOCX&#8594;PDF via LibreOffice headless), compression using pdf-lib, and bulk merge/split operations. Image processing covers resize, format conversion (JPG&#8594;PNG&#8594;WebP using Sharp), and SVG rendering. Video and audio tools leverage FFmpeg through fluent-ffmpeg for compression, trimming, and audio extraction. Archive tools handle ZIP compression and extraction via archiver and unzipper. Web rendering tools use Puppeteer for HTML&#8594;PDF and URL&#8594;PDF conversion. Every tool follows a consistent API contract: upload returns a job ID, poll <code>/api/files/status/:jobId</code> for progress, then download at <code>/api/files/download/:jobId</code>.
          </p>
          <ul>
            <li><strong>Authentication & Authorization:</strong> Email/password accounts using bcrypt hashing and JWT tokens with 30-day expiry. Guest mode allows three free conversions per IP per day with a 10 MB file size cap. Protected routes enforce <code>isAuthenticated</code> middleware and plan-level access control. Password reset flow and email verification are structured but not yet wired to a mailer provider.</li>
            <li><strong>Job Queue Architecture:</strong> Bull queues process conversion jobs asynchronously to prevent blocking the event loop. Each job carries metadata — user plan, source format, target format, file size, creation timestamp — and progresses through states: pending, processing, completed, and failed. A Redis-backed queue is configured when <code>REDIS_URL</code> is present; otherwise the system transparently falls back to an in-process queue for development and lightweight deployments. Rate limiting via express-rate-limit sits at 100 requests per 15 minutes per IP globally, with plan-specific overrides.</li>
            <li><strong>Cloud Storage Pipeline:</strong> Converted files are first written to local disk, then optionally uploaded to AWS S3 or Cloudflare R2 based on configuration. A <code>STORAGE_PROVIDER</code> environment variable selects the backend, and missing credentials silently fall back to local disk. Files are served through a streaming download endpoint that redirects to presigned S3 URLs when cloud storage is active, or pipes local files through Express directly. A MongoDB TTL index on job documents triggers automatic cleanup one hour after creation, with an additional cron job every 15 minutes as a belt-and-braces cleanup strategy.</li>
            <li><strong>Monetization & Stripe Integration:</strong> Three subscription tiers — Free ($0, 3 conversions/day, 10 MB), Pro ($9/month or $79/year, unlimited conversions, 500 MB cap, 24-hour file retention), and Enterprise ($49/month or $399/year, 2 GB cap, 10,000 API calls/month, batch conversion, team seats up to five users). A Stripe checkout session is created at <code>POST /api/webhooks/stripe</code>, which listens for <code>checkout.session.completed</code> events and updates the User document's <code>plan</code> field. The Webhook handler validates the Stripe signature using the raw request body and the live webhook secret before processing. Frontend pricing cards link directly to Stripe Checkout with plan-specific price IDs passed as environment variables.</li>
            <li><strong>Dashboard & User Experience:</strong> Authenticated users access a personal dashboard showing conversion history (last 30 jobs with thumbnails, timestamps, and file sizes), a daily usage meter comparing conversions used against plan limits, a plan badge with an upgrade CTA for free-tier users, and an API key management panel (Enterprise-only) for generating, listing, and revoking programmatic access keys. The dashboard is built as a single React component with client-side polling for real-time job status updates.</li>
            <li><strong>Enterprise API Layer:</strong> Planned for Phase 3, the REST API will expose all 23+ tools programmatically with API key authentication middleware, per-plan rate limiting, and batch endpoint support. Designed to serve agencies and white-label partners who need conversion capabilities embedded in their own products. The existing file upload pipeline already supports the necessary input formats — the API layer adds key-based auth, usage metering per key, and higher result size limits.</li>
            <li><strong>SEO & Marketing Infrastructure:</strong> Every tool page has a unique <code>&#60;title&#62;</code> and <code>&#60;meta description&#62;</code> injected via react-helmet-async at build time. Open Graph tags ensure rich previews when shared. A <code>sitemap.xml</code> lists all 24+ tool URLs for search engine indexing. The React router generates clean, descriptive paths for each conversion tool — improving both user experience and SEO.</li>
          </ul>
          <p>
            <strong>Architectural Decisions:</strong> The backend deliberately avoids a monolithic conversion handler in favor of per-tool middleware chains registered at route level — each tool declares its input MIME types, output format, processing library, and estimated duration, letting the middleware enforce constraints before a single byte is processed. The job queue decouples file ingestion from CPU-intensive conversion (especially LibreOffice and FFmpeg) so the Express process stays responsive under load. CDN delivery is planned for Phase 3 through Cloudflare R2's built-in edge caching once cloud storage is confirmed in production.
          </p>
          <p>
            <strong>Current State & Launch Roadmap:</strong> Code is complete for all 23 tools, authentication, dashboard, queue, storage, and payment wiring. The remaining blockers before launch are: configuring live Stripe keys (currently in test mode setup), provisioning Redis (or confirming the in-process fallback is sufficient for initial load), installing FFmpeg and LibreOffice on the production server, deploying the Express backend to Railway or Render, deploying the React frontend to Vercel with a <code>filefoundry.app</code> domain, configuring MongoDB Atlas for production, enabling Sentry error monitoring, and updating CORS to allow the production frontend origin.
          </p>
          <p>
            <strong>Tech Stack:</strong> React 18 · TypeScript · Tailwind CSS · react-helmet-async · Express 5 · Node.js · Mongoose · MongoDB · Redis · Bull · Multer · FFmpeg (fluent-ffmpeg) · LibreOffice · Sharp · Puppeteer · pdf-lib · Stripe Webhooks · AWS S3 / Cloudflare R2<br>
            <strong>Status:</strong> Code Complete — Pre-Launch (pending Stripe keys, server provisioning, and deployment configuration)
          </p>
        `,
        },
    ];

    const professionalProjects = [
        {
            title: "POS & CRM System",
            type: "Enterprise Software",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Multi-terminal point-of-sale and CRM for a food chain — real-time inventory, multi-branch sync, peak-hour concurrency.",
            image: "",
            id: "pos-crm",
            techStack: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
            detail_title: "POS & CRM System – Food Chain Operations Platform",
            detail_description: `
              <p>A comprehensive point-of-sale and customer relationship management system for a multi-branch food chain. Handles concurrent order processing, inventory management, and daily financial reporting across all terminals.</p>
              <ul>
                <li><strong>Order Management:</strong> Streamlined POS interface for dine-in, takeout, and catering orders with split payment support</li>
                <li><strong>Inventory Tracking:</strong> Real-time inventory updates with low-stock alerts and automated reordering suggestions</li>
                <li><strong>Daily Reporting:</strong> Comprehensive sales reports, profit margin analysis, and staff performance metrics</li>
                <li><strong>Staff Management:</strong> Role-based access for managers, cashiers, and kitchen staff with shift scheduling</li>
                <li><strong>Catering Module:</strong> Bulk catering order handling with advance booking and custom menu options</li>
                <li><strong>Multi-Branch Sync:</strong> Centralized database for chain-wide inventory and sales visibility across all locations</li>
              </ul>
              <p><strong>Key Challenge:</strong> Handling peak-hour concurrency while maintaining data integrity across multiple POS terminals simultaneously.</p>
              <p><strong>Tech Stack:</strong> Laravel · MySQL · jQuery · Bootstrap<br>
              <strong>Company:</strong> Fovty Solutions — <em>NDA Protected</em><br>
              <strong>Parent Company:</strong> Quandi</p>
              <p class="text-danger fw-semibold">⚠ This service is currently offline — the parent company (Quandi) has shut down operations.</p>
            `,
        },
        {
            title: "Law Firm Management System",
            type: "Enterprise Software",
            client: "Fovty Solutions",
            project_link: "https://www.vakilbench.com/",
            description: "End-to-end legal practice management — case lifecycle, encrypted document storage, client portal, and billing.",
            image: "",
            id: "law-firm",
            techStack: ["Laravel", "MySQL", "REST API", "Bootstrap"],
            detail_title: "Law Firm Management System – Legal Practice Platform",
            detail_description: `
              <p>A comprehensive legal practice management system designed to streamline case management, document handling, and client communications for a legal services firm.</p>
              <ul>
                <li><strong>Case Management:</strong> Complete case lifecycle tracking from initial consultation to closure with milestone reminders</li>
                <li><strong>Document Storage:</strong> Secure document management with version control, client-specific folders, and encrypted storage</li>
                <li><strong>Client Portal:</strong> Secure channel for clients to view case status, download documents, and message their attorneys</li>
                <li><strong>Role-Based Access:</strong> Granular permissions for partners, associates, paralegals, and administrative staff</li>
                <li><strong>Calendar Integration:</strong> Court dates, client meetings, and filing deadlines with automatic reminders</li>
                <li><strong>Billing Module:</strong> Time tracking, invoice generation, and payment processing for legal services</li>
                <li><strong>Full-Text Search:</strong> Fast search across all cases and documents for quick information retrieval</li>
              </ul>
              <p><strong>Key Challenge:</strong> Implementing strict data privacy compliance while maintaining ease of access for authorized personnel.</p>
              <p><strong>Tech Stack:</strong> Laravel · MySQL · REST API · Bootstrap<br>
              <strong>Company:</strong> Fovty Solutions — <em>NDA Protected</em></p>
            `,
        },
        {
            title: "Shipment Tracking CRM",
            type: "Logistics Software",
            client: "Fission Tech",
            project_link: "#",
            description: "Unified multi-carrier tracking with WebSocket updates, automated invoicing, and a self-service customer portal.",
            image: "",
            id: "shipment-tracking",
            techStack: ["Laravel", "WebSockets", "External APIs", "MySQL"],
            detail_title: "Shipment Tracking CRM – Logistics Management Platform",
            detail_description: `
              <p>A comprehensive shipment tracking and logistics management system providing real-time parcel tracking integrated with multiple logistics provider APIs.</p>
              <ul>
                <li><strong>Multi-Carrier Integration:</strong> Unified tracking across major logistics providers with standardized status updates</li>
                <li><strong>Real-Time Updates:</strong> WebSocket-powered live tracking status without page refresh</li>
                <li><strong>Automated Invoicing:</strong> Dynamic invoice generation based on weight, distance, and service type with PDF export</li>
                <li><strong>Analytics Dashboard:</strong> Delivery performance metrics, delay analysis, and customer satisfaction tracking</li>
                <li><strong>Automated Notifications:</strong> Email and SMS alerts for shipment status changes at key milestones</li>
                <li><strong>API Gateway:</strong> RESTful API for third-party integrations and e-commerce platform connections</li>
                <li><strong>Client Portal:</strong> Self-service tracking page for end customers with full shipment history</li>
              </ul>
              <p><strong>Key Challenge:</strong> Normalizing inconsistent tracking data formats from multiple carrier APIs into a unified system.</p>
              <p><strong>Tech Stack:</strong> Laravel · WebSockets · External Carrier APIs · MySQL<br>
              <strong>Company:</strong> <a href="https://www.linkedin.com/company/fission-tech/" target="_blank" rel="noopener noreferrer">Fission Tech</a> — <em>NDA Protected</em></p>
            `,
        },
        {
            title: "Leads & CRM Automation",
            type: "CRM / Automation",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Extended Prefex CRM with smart lead assignment, SLA-based escalation, and field operations coordination.",
            image: "",
            id: "leads-crm",
            techStack: ["Laravel", "PHP", "AJAX", "MySQL"],
            detail_title: "Leads & CRM Automation – Intelligent Lead Management System",
            detail_description: `
              <p>An enhanced version of the Prefex CRM with intelligent automation for lead management, follow-up workflows, and field operations coordination.</p>
              <ul>
                <li><strong>Smart Lead Assignment:</strong> Automated lead distribution based on territory, agent performance, and availability</li>
                <li><strong>Follow-Up Automation:</strong> Configurable reminder schedules with email and in-app notifications for missed follow-ups</li>
                <li><strong>Site Operations Manager:</strong> Field staff scheduling with route optimization and visit verification</li>
                <li><strong>Role-Based Permissions:</strong> Customizable access levels for managers, agents, and field staff</li>
                <li><strong>Conversion Analytics:</strong> Lead-to-cash pipeline tracking with conversion rate insights</li>
                <li><strong>Escalation Engine:</strong> Automatic escalation of stale leads and overdue tasks to managers</li>
                <li><strong>Mobile Optimization:</strong> Responsive interface for field agents to update leads on-the-go</li>
              </ul>
              <p><strong>Key Challenge:</strong> Building a flexible automation engine that handles complex business rules while remaining user-configurable.</p>
              <p><strong>Tech Stack:</strong> Laravel · PHP · AJAX · MySQL<br>
              <strong>Company:</strong> Fovty Solutions — <em>NDA Protected</em></p>
              <p class="text-danger fw-semibold">⚠ This service is currently offline — no live link available.</p>
            `,
        },
        {
            title: "Business Idea Marketplace",
            type: "Marketplace Platform",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Two-sided marketplace with Stripe escrow, NDA-gated document release, and in-platform offer negotiation.",
            image: "",
            id: "idea-marketplace",
            techStack: ["Node.js", "React", "MongoDB", "Stripe API"],
            detail_title: "Business Idea Marketplace – Two-Sided Idea Trading Platform",
            detail_description: `
              <p>A two-sided marketplace where entrepreneurs can list, browse, and purchase startup concepts and business ideas — with escrow payments and IP protection built in.</p>
              <ul>
                <li><strong>Seller Dashboard:</strong> Complete workspace for creating, managing, and updating idea listings</li>
                <li><strong>Browse & Search:</strong> Advanced filtering by industry, investment range, and business type</li>
                <li><strong>Secure Payments:</strong> Full Stripe integration with checkout, subscriptions, and escrow support</li>
                <li><strong>Idea Submissions:</strong> Structured submission forms with business model canvas and market analysis</li>
                <li><strong>Admin Moderation:</strong> Content review workflow to ensure quality and prevent IP infringement</li>
                <li><strong>Negotiation System:</strong> In-platform messaging and offer management for buyer-seller discussions</li>
                <li><strong>IP Protection:</strong> Document watermarking and NDA-gated secure file sharing</li>
              </ul>
              <p><strong>Key Challenge:</strong> Building trust between buyers and sellers while protecting intellectual property throughout the transaction lifecycle.</p>
              <p><strong>Tech Stack:</strong> Node.js · React · MongoDB · Stripe API<br>
              <strong>Company:</strong> Fovty Solutions — <em>NDA Protected</em></p>
              <p class="text-danger fw-semibold">⚠ This service is currently offline — no live link available.</p>
            `,
        },
        {
            title: "AI Career Platform",
            type: "AI / SaaS",
            client: "Fovty Solutions",
            project_link: "https://www.careerignitor.ai/",
            description: "ATS resume builder, LinkedIn optimizer, AI headshots, LLM cover letters, and a Kanban job tracker.",
            image: "",
            id: "ai-career",
            techStack: ["Node.js", "React", "OpenAI API", "Python", "MongoDB"],
            detail_title: "AI Career Platform – All-in-One Job Search Tool",
            detail_description: `
              <p>An all-in-one AI-powered career development platform that helps job seekers create professional resumes, optimize their LinkedIn presence, and track applications.</p>
              <ul>
                <li><strong>AI Resume Builder:</strong> Dynamic resume generation with multiple templates, keyword optimization, and ATS-friendly formatting</li>
                <li><strong>LinkedIn Optimizer:</strong> AI analysis of profiles with suggestions for headline, summary, and experience sections</li>
                <li><strong>Headshot Generation:</strong> AI-enhanced professional headshot creation from casual photos</li>
                <li><strong>Application Tracker:</strong> Kanban-style pipeline for managing job applications with interview reminders</li>
                <li><strong>Cover Letter Generator:</strong> Custom cover letters tailored to each job description using LLM technology</li>
                <li><strong>Interview Prep:</strong> AI-generated practice questions based on target role and company</li>
                <li><strong>Analytics Dashboard:</strong> Application metrics, response rates, and career progress tracking</li>
              </ul>
              <p><strong>Key Challenge:</strong> Integrating multiple AI services while maintaining fast response times and ensuring output quality.</p>
              <p><strong>Tech Stack:</strong> Node.js · React · OpenAI API · Python · MongoDB<br>
              <strong>Company:</strong> Fovty Solutions — <em>NDA Protected</em></p>
            `,
        },
        {
            title: "LinkedIn Automation Extension",
            type: "Browser Extension",
            client: "Fovty Solutions",
            project_link: "#",
            description: "Chrome extension for recruiters — profile scraping, connection campaigns, timezone-aware scheduling, ATS export.",
            image: "",
            id: "linkedin-automation",
            techStack: ["JavaScript", "Chrome API", "Puppeteer", "Python"],
            detail_title: "LinkedIn Automation Extension – Recruiter Outreach Tool",
            detail_description: `
              <p>A Chrome extension for recruiters to efficiently extract professional profile data and automate connection and outreach workflows on LinkedIn.</p>
              <ul>
                <li><strong>Profile Extraction:</strong> One-click scraping of candidate profiles including work history, skills, and contact info</li>
                <li><strong>Data Export:</strong> Export collected data to CSV, JSON, or directly to ATS integrations</li>
                <li><strong>Auto-Connect:</strong> Personalized connection requests with template customization and follow-up sequences</li>
                <li><strong>Outreach Automation:</strong> Automated messaging campaigns with personalization tokens</li>
                <li><strong>Schedule Outreach:</strong> Time-optimized message delivery based on recipient timezone</li>
                <li><strong>Engagement Tracking:</strong> Monitor connection acceptance rates and message response rates</li>
                <li><strong>Safety Features:</strong> Rate limiting, random delays, and session rotation to prevent account restrictions</li>
              </ul>
              <p><strong>Key Challenge:</strong> Building reliable automation that respects platform limits while providing meaningful recruiter productivity gains.</p>
              <p><strong>Tech Stack:</strong> JavaScript · Chrome Extension API · Puppeteer · Python<br>
              <strong>Company:</strong> Fovty Solutions — <em>NDA Protected</em></p>
              <p class="text-danger fw-semibold">⚠ This service is currently offline — no live link available.</p>
            `,
        },
        {
            title: "Recommendation System",
            type: "Machine Learning",
            client: "Allsoft Solutions",
            project_link: "#",
            description: "Collaborative filtering engine (user-based + item-based CF) with Flask API, hyperparameter tuning, and an A/B testing framework.",
            image: "",
            id: "recommendation-system",
            techStack: ["Python", "Flask", "Scikit-learn", "Pandas"],
            detail_title: "Recommendation System – Collaborative Filtering Engine",
            detail_description: `
              <p>A collaborative filtering-based recommendation engine developed during my internship, designed to analyze user behavior and provide personalized product suggestions at scale.</p>
              <ul>
                <li><strong>ML Algorithm:</strong> User-based and item-based collaborative filtering for personalized recommendations</li>
                <li><strong>Data Pipeline:</strong> End-to-end preprocessing including cleaning, transformation, and feature engineering</li>
                <li><strong>Model Optimization:</strong> Hyperparameter tuning and cross-validation to improve recommendation accuracy</li>
                <li><strong>REST API:</strong> Flask-based API endpoints for real-time recommendation retrieval</li>
                <li><strong>Performance Metrics:</strong> Evaluation using precision, recall, and F1-score for model validation</li>
                <li><strong>Scalable Storage:</strong> Efficient data structures for handling large user-item interaction matrices</li>
                <li><strong>A/B Testing Framework:</strong> Setup for testing recommendation quality with live user feedback loops</li>
              </ul>
              <p><strong>Key Challenge:</strong> Building a recommendation engine that scales to thousands of users while maintaining real-time response times.</p>
              <p><strong>Tech Stack:</strong> Python · Flask · Scikit-learn · Pandas<br>
              <strong>Company:</strong> Allsoft Solutions (Internship) — <em>NDA Protected</em></p>
            `,
        },
    ];

    // Portfolio Details
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    if (projectId) {
        const project = [...projects, ...professionalProjects].find((item) => item.id === projectId);

        if (project) {
            // Image — hide swiper if no image
            const swiperSection = document.querySelector(".portfolio-details-slider");
            if (project.image) {
                document.querySelector(".swiper-slide img").src = '../' + project.image;
            } else {
                swiperSection.style.display = "none";
            }

            // Tech stack badges
            const techBadges = (project.techStack || [])
                .map(t => `<span class="badge badge-tech me-1 mb-1">${t}</span>`)
                .join('');

            // Live link — show only if it's a real URL
            const liveLink = project.project_link && project.project_link !== '#'
                ? `<a href="${project.project_link}" target="_blank" class="btn btn-primary btn-sm mt-3">
                     <i class="bi bi-box-arrow-up-right me-1"></i> View Live
                   </a>`
                : `<span class="badge bg-secondary mt-3 d-inline-block">No live demo</span>`;

            // Info sidebar
            document.querySelector(".portfolio-info ul").innerHTML = `
                <li><strong>Category</strong>: ${project.type}</li>
                <li><strong>Client</strong>: ${project.client}</li>
                <li class="mt-2"><strong>Tech Stack</strong><br><div class="mt-1">${techBadges}</div></li>
                <li class="mt-2">${liveLink}</li>
            `;

            // Title + description
            document.querySelector(".portfolio-description h2").textContent = project.detail_title;
            document.querySelector(".portfolio-description div").innerHTML = project.detail_description;
        } else {
            document.querySelector(".portfolio-description h2").textContent = "Project not found";
            document.querySelector(".portfolio-description div").textContent =
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
                "col-lg-6",
                "col-md-6",
                "portfolio-item",
                "isotope-item",
                project.filterClass
            );

            const techBadges = (project.techStack || [])
                .map(t => `<span class="badge badge-tech me-1">${t}</span>`)
                .join('');

            projectElement.innerHTML = `
        <div class="proj-card d-flex flex-column gap-2 p-3 border rounded h-100 bg-white">
          <div class="flex-grow-1">
            <h6 class="fw-semibold mb-1">${project.title}</h6>
            <p class="text-muted small mb-2">${project.description}</p>
            <div class="d-flex flex-wrap gap-1 mb-2">${techBadges}</div>
          </div>
          <div>
            <a href="${project.detailsLink}" class="proj-card-btn btn btn-sm btn-outline-secondary w-100">View Details</a>
          </div>
        </div>
      `;

            container.appendChild(projectElement);
        });
    }

    function getProjectIcon(projectId) {
        const icons = {
            'clip-keeper': '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
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
