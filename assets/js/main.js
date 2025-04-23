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
            title: "Bitcoin Watcher",
            type: "Website",
            client: "Myself",
            project_link: "#",
            description: "Lightweight Crypto Price Tracker",
            image: "/assets/img/screenshots/bitcoin-watcher.png",
            id: "bitcoin-watcher",
            detailsLink: "pages/portfolio-details.html?id=bitcoin-watcher",
            filterClass: "filter-web",
            detail_title: "Bitcoin Watcher – Lightweight Crypto Price Tracker",
            detail_description: `
      <p>
        A minimalist cryptocurrency price tracking web app designed for users who want to quickly view live Bitcoin prices without the complexity of bulky crypto platforms. 
        No sign-up or personal data required for access, making it ideal for simple market tracking.
      </p>
      <ul>
        <li>🔑 <strong>Guest & Login Access:</strong> Provides flexibility for both casual users (guest) and registered users</li>
        <li>💸 <strong>Live BTC Price Updates:</strong> Pulls live Bitcoin prices via external APIs for accurate, up-to-date information</li>
        <li>🛠️ <strong>No Data Storage:</strong> Ensures lightweight usage by not storing any data for guest users</li>
        <li>📊 <strong>Future Features:</strong> Roadmap includes graphical price tracking and wallet linking for crypto purchasing</li>
        <li>📉 <strong>Perfect for Market Watchers:</strong> Ideal for users who just want to monitor live prices without managing portfolios</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Django · SQLite3 · HTML/CSS/JS (Frontend)<br>
        <strong>Project Status:</strong> In Development
      </p>
    `,
        },
        {
            title: "HTML Cloner",
            type: "Extension",
            client: "Myself",
            project_link: "#",
            description: "Full Webpage Snapshot Extension",
            image: "/assets/img/screenshots/browser-extension.png",
            id: "html-cloner",
            detailsLink: "pages/portfolio-details.html?id=html-cloner",
            filterClass: "filter-extension",
            detail_title: "HTML Cloner – Full Webpage Snapshot Extension",
            detail_description: `
      <p>
        A cross-compatible browser extension that enables developers and designers to clone any webpage instantly, capturing the full HTML structure along with all associated assets like images, styles, and fonts.
      </p>
      <ul>
        <li>🌐 <strong>Cross-Browser Support:</strong> Fully functional on <strong>Firefox</strong>, with plans for <strong>Chrome</strong> support (publishing pending store account)</li>
        <li>💾 <strong>Local Download:</strong> Saves the entire webpage as a downloadable HTML file, including layout, content, and assets</li>
        <li>🔌 <strong>Comprehensive Capture:</strong> Clones everything—content, images, stylesheets, and more—preserving the page as it appears</li>
        <li>⚡ <strong>Optimized Performance:</strong> Built with plain <strong>JavaScript</strong> for fast execution and simplicity</li>
        <li>💻 <strong>Perfect for Developers:</strong> Great for developers, UI/UX enthusiasts, or anyone needing to preserve or inspect page components quickly</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Plain JavaScript · Browser Extension APIs<br>
        <strong>Project Status:</strong> Available now on the <a href="https://addons.mozilla.org/en-US/firefox/addon/your-extension">Firefox Add-ons Store</a>
      </p>
    `,
        },
        {
            title: "Fake News Detection",
            type: "Jupyter Notebook",
            client: "Myself",
            project_link: "#",
            description: "NLP-Based Classification App",
            image: "/assets/img/screenshots/Jupyter.png",
            id: "fake-news",
            detailsLink: "pages/portfolio-details.html?id=fake-news",
            filterClass: "filter-mlai",
            detail_title: "Fake News Detection – NLP-Based Classification App",
            detail_description: `
      <p>
        A machine learning-based research project designed to detect fake news articles using <strong>Natural Language Processing (NLP)</strong>. 
        The app processes preloaded headlines to predict their credibility, making it a great tool for academic research into fake news patterns.
      </p>
      <ul>
        <li>🧠 <strong>Machine Learning Model:</strong> Custom-trained <code>Logistic Regression</code> model, with additional experimentation using <strong>BERT</strong></li>
        <li>📊 <strong>Dataset:</strong> Trained on the <strong>Kaggle Fake News dataset</strong> with ~1,000 labeled entries for classification</li>
        <li>🔧 <strong>Text Preprocessing Pipeline:</strong> Includes tokenization, stopword removal, lemmatization, and n-gram analysis for feature extraction</li>
        <li>⚡ <strong>Rapid Predictions:</strong> Fast, reliable predictions through a local-only <code>Jupyter Notebook</code> interface</li>
        <li>📚 <strong>Ideal for Research:</strong> Perfect for exploring and experimenting with fake news detection techniques in NLP</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Jupyter Notebook · Scikit-learn · Transformers (BERT) · Pandas · NLP<br>
        <strong>Project Status:</strong> Complete – Research Prototype
      </p>
    `,
        },
        {
            title: "Django API Framework",
            type: "API",
            client: "Myself",
            project_link: "#",
            description: "Token-Based REST Server",
            image: "/assets/img/screenshots/api.jpeg",
            id: "django-api",
            detailsLink: "pages/portfolio-details.html?id=django-api",
            filterClass: "filter-api",
            detail_title: "Django API Framework – Token-Based REST Server",
            detail_description: `
      <p>
        A reusable backend API built with <strong>Django REST Framework</strong>, designed to accelerate the setup of token-authenticated RESTful applications. 
        Ideal for developers looking for a secure and clean foundation to build scalable, performant APIs with minimal setup.
      </p>
      <ul>
        <li>🔄 <strong>Full CRUD Endpoints:</strong> Includes all necessary endpoints for basic database operations, covered in a structured <code>Postman</code> collection</li>
        <li>🔐 <strong>Token-Based Authentication:</strong> Implements simple token auth (no complex roles or RBAC for ease of use)</li>
        <li>🚦 <strong>Rate Limiting & Throttling:</strong> Basic protection and performance tuning for production environments</li>
        <li>⚙️ <strong>Modular Design:</strong> Lightweight and easily adaptable to any project needing a Django API backend</li>
        <li>🔌 <strong>Microservice Ready:</strong> Functions well as a local base API server for microservice-style architectures</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Django REST Framework · Python · Postman<br>
        <strong>Project Status:</strong> Complete – Ready for reuse
      </p>
    `,
        },
        {
            title: "Travel Expense Calculator",
            type: "Website",
            client: "Myself",
            project_link: "#",
            description: "Voice-Powered Budgeting Tool",
            image: "/assets/img/screenshots/travelling_expense.png",
            id: "travel-expense",
            detailsLink: "pages/portfolio-details.html?id=travel-expense",
            filterClass: "filter-web",
            detail_title:
                "Travel Expense Calculator – Voice-Powered Budgeting Tool",
            detail_description: `
      <p>
        A lightweight web application designed to estimate travel costs in Indian Rupees (INR), making use of voice input for a quick and user-friendly experience. 
        Ideal for on-the-go planning, this prototype helps users get cost estimates without typing.
      </p>
      <ul>
        <li>🎤 <strong>Voice Input:</strong> Captures destination and distance through speech recognition for a hands-free experience</li>
        <li>🧮 <strong>Cost Estimation:</strong> Uses a fixed-rate model to calculate trip costs in INR</li>
        <li>⚙️ <strong>Built With:</strong> Django and SQLite3 for simple and efficient backend handling</li>
        <li>🚧 <strong>Prototype Status:</strong> No map integration or data persistence yet, but serves as a solid foundation for expansion</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Django · SQLite3 · HTML/CSS · JavaScript<br>
        <strong>Project Status:</strong> Prototype – Functional with voice input
      </p>
    `,
        },
        {
            title: "Node.js Game Framework",
            type: "API",
            client: "Myself",
            project_link: "#",
            description: "Backend API for Multiplayer Games",
            image: "/assets/img/screenshots/api.jpeg",
            id: "game-framework",
            detailsLink: "pages/portfolio-details.html?id=game-framework",
            filterClass: "filter-api",
            detail_title:
                "Node.js Game Framework – Backend API for Multiplayer Games",
            detail_description: `
      <p>
        A backend framework built to power turn-based games and board game mechanics, handling everything from score tracking to player management. 
        Designed with an API-first approach, it enables seamless integration with any frontend or game engine.
      </p>
      <ul>
        <li>🎯 <strong>Game Logic:</strong> Manages game rounds, score submissions, prize distributions, and match statuses</li>
        <li>👥 <strong>Multiplayer Support:</strong> Supports user management and real-time player interactions via RESTful APIs</li>
        <li>♟️ <strong>Use Cases:</strong> Perfect for board games, casual multiplayer games, and online tournaments</li>
        <li>🔌 <strong>Decoupled Design:</strong> Backend-only framework that can plug into any custom frontend or third-party system</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Node.js · Express · MongoDB (optional)<br>
        <strong>Project Status:</strong> Complete – Ready for use
      </p>
    `,
        },
        {
            title: "Freecom",
            type: "Website",
            client: "Myself",
            project_link: "#",
            description:
                "NLP-Based Product Guidance & Discount Code Redemption",
            image: "/assets/img/screenshots/freecom.png",
            id: "freecom",
            detailsLink: "pages/portfolio-details.html?id=freecom",
            filterClass: "filter-mlai",
            detail_title:
                "Freecom – NLP-Based Product Guidance & Discount Code Redemption",
            detail_description: `
      <p>
        <strong>Freecom</strong> is an innovative web application that helps users discover top-reviewed products and access discount codes effortlessly. 
        Powered by Natural Language Processing (NLP), the platform analyzes product reviews to provide personalized, high-quality recommendations.
      </p>
      <ul>
        <li>🧠 <strong>NLP-Based Guidance:</strong> Uses user preferences and review sentiment to recommend the best-rated products</li>
        <li>💸 <strong>Discount Code Integration:</strong> Scrapes and displays external discount links related to the recommended products</li>
        <li>🖥️ <strong>User Interface:</strong> Clean and simple frontend designed for a smooth user experience</li>
        <li>🚧 <strong>Note:</strong> While product recommendations are fully functional, the discount code feature is still early-stage and currently provides only external links</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Python · NLP (spaCy, NLTK) · Web Scraping · Django<br>
        <strong>Project Status:</strong> Complete – No further development planned
      </p>
    `,
        },
        {
            title: "News Scraping Jupyter Notebook",
            type: "Jupyter Notebook",
            client: "Myself",
            project_link: "#",
            description: "Scraping Indian Express News",
            image: "/assets/img/screenshots/Jupyter.png",
            id: "news-scraper",
            detailsLink: "pages/portfolio-details.html?id=news-scraper",
            filterClass: "filter-scrape",
            detail_title:
                "News Scraping Jupyter Notebook – Scraping Indian Express News",
            detail_description: `
      <p>
        A research-focused project that scrapes the latest news articles from <strong>Indian Express</strong>, using <code>BeautifulSoup</code> for HTML parsing and <code>Pandas</code> for data handling. 
        It's designed to gather structured news data for further analysis, reporting, or natural language processing (NLP) research.
      </p>
      <ul>
        <li>📰 Scrapes news from all sections — headlines, full articles, timestamps, and metadata</li>
        <li>📊 Stores data in structured formats (e.g., CSV) using <code>Pandas</code> for easy access and analysis</li>
        <li>⚙️ Currently a manual process, with plans to automate daily updates in future versions</li>
        <li>🔍 Useful for research in trend analysis, media coverage studies, or NLP training datasets</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Python · BeautifulSoup · Pandas<br>
        <strong>Project Status:</strong> Working – Manual Scraping
      </p>
    `,
        },
        {
            title: "WIP Linux Distro",
            type: "Linux",
            client: "Myself",
            project_link: "#",
            description: "Lightweight Custom Distro for Developers",
            image: "/assets/img/screenshots/Linux.jpg",
            id: "linux-distro",
            detailsLink: "pages/portfolio-details.html?id=linux-distro",
            filterClass: "filter-linux",
            detail_title:
                "WIP Linux Distro – Lightweight Custom Distro for Developers & Enthusiasts",
            detail_description: `
      <p>
        A personal passion project focused on building a lightweight, developer-oriented Linux distribution with a custom command-line interface and package management system. 
        While still in its early stages, the vision is to create a resource-efficient, powerful environment tailored for developers, open-source enthusiasts, and future mass adoption.
      </p>
      <ul>
        <li>🔧 Custom CLI tools designed for streamlined developer workflows</li>
        <li>📦 Built-in package manager with compatibility for <code>Yum</code> and <code>Pacman</code> to provide broad software access</li>
        <li>🪟 Exploring cross-platform support with potential for running Windows applications</li>
        <li>🚀 Long-term goal to evolve into a full-fledged, installable distro used by a global developer community</li>
        <li>💡 Currently code-only, with plans to add bootable images and installer support in future phases</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Custom Bash Scripts · CLI Tools · Package Manager (Yum, Pacman Compatible)<br>
        <strong>Project Status:</strong> Early Development – Future Goal to Scale
      </p>
    `,
        },
        {
            title: "Kaggle Competition Entries",
            type: "Jupyter Notebook",
            client: "Myself",
            project_link: "#",
            description: "Exploring Machine Learning Algorithms",
            image: "/assets/img/screenshots/Jupyter.png",
            id: "kaggle",
            detailsLink: "pages/portfolio-details.html?id=kaggle",
            filterClass: "filter-mlai",
            detail_title:
                "Kaggle Competitions – Basic ML Algorithms for Real Datasets",
            detail_description: `
      <p>
        A collection of Jupyter notebooks showcasing hands-on machine learning experiments using Kaggle datasets. 
        The aim is to build practical ML skills by applying popular algorithms to real-world problems like classification, regression, and data exploration.
      </p>
      <ul>
        <li>📊 Explored datasets including Titanic survival prediction, housing prices, and sentiment classification</li>
        <li>🧠 Implemented algorithms such as <code>SVM</code>, <code>Decision Trees</code>, <code>Random Forest</code>, and <code>Naive Bayes</code></li>
        <li>🔍 Focused on interpretability, model evaluation using confusion matrices and accuracy scores</li>
        <li>🧼 Prioritized readable code, clear visualizations, and beginner-friendly explanations</li>
      </ul>
      <p>
        <strong>Tech Stack:</strong> Python · Jupyter · Scikit-Learn · Pandas · Matplotlib<br>
        <strong>Project Status:</strong> Active – More notebooks being added
      </p>
    `,
        },
        {
            title: "VSCode Extension Packs",
            type: "Extension",
            client: "Myself",
            project_link: "#",
            description: "Developer Productivity Tools",
            image: "/assets/img/screenshots/vscode.jpg",
            id: "vscode-extensions",
            detailsLink: "pages/portfolio-details.html?id=vscode-extensions",
            filterClass: "filter-extension",
            detail_title:
                "VS Code Extension Packs – Power Tools for Developers",
            detail_description: `
      <p>
        A curated collection of Visual Studio Code extension packs, each tailored to boost productivity and streamline development workflows across various specializations.
      </p>
      <ul>
        <li>🧠 <strong>ML Dev Pack</strong>: Includes <code>Jupyter</code>, <code>Python</code>, <code>PyLance</code>, and SciKit support extensions</li>
        <li>🌐 <strong>Full Stack Pack</strong>: Bundles tools for <code>React</code>, <code>Tailwind CSS</code>, <code>Node.js</code>, <code>ESLint</code>, and <code>Prettier</code></li>
        <li>🏁 <strong>CP/DSA Pack</strong>: Focused on competitive programming with <code>C/C++</code> extensions, input/output snippets, and debugging helpers</li>
      </ul>
      <p>
        Shared via GitHub and, where available, published on the Visual Studio Code Marketplace.
      </p>
      <p>
        <strong>Tech Stack:</strong> JSON (VS Code settings) · Marketplace Publishing<br>
        <strong>Project Status:</strong> Ready to use – Community Feedback Welcome
      </p>
    `,
        },
        {
            title: "📈 Capstone: Google Advanced Data Analytics Project",
            type: "Jupyter Notebook",
            client: "Myself",
            project_link: "#",
            description:
                "Capstone project that explores, analyzes, and visualizes a large dataset using Python.",
            image: "/assets/img/screenshots/Jupyter.png",
            id: "google-capstone",
            detailsLink: "pages/portfolio-details.html?id=google-capstone",
            filterClass: "filter-mlai",
            detail_title: "Capstone: Google Advanced Data Analytics Project",
            detail_description: `
          <p>
            This capstone project was completed as part of the <strong>Google Advanced Data Analytics</strong> certification. 
            It covered end-to-end data handling — from data cleaning to hypothesis testing and data visualization.
          </p>
          <ul>
            <li>Utilized a real-world dataset to derive insights for business decision-making</li>
            <li>Cleaned and transformed data using <code>Pandas</code></li>
            <li>Visualized key metrics and patterns using <code>Matplotlib</code> and <code>Seaborn</code></li>
            <li>Performed exploratory data analysis (EDA) and statistical hypothesis testing</li>
            <li>Focused on reproducible workflows and presentation-ready data storytelling</li>
          </ul>
          <p>
            <strong>Tech Stack:</strong> Python · Pandas · Matplotlib · Seaborn · Jupyter Notebook<br>
            <strong>Project Status:</strong> Complete – Submitted for Certification
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
            document.querySelector(".swiper-slide img").src = project.image;

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

            projectElement.innerHTML = `
        <div class="portfolio-content h-100">
          <img src="${project.image}" class="img-fluid" alt="${
                project.title
            }" />
          <div class="portfolio-info">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <a href="${project.image}" title="${
                project.title
            }" data-gallery="portfolio-gallery-${project.type.toLowerCase()}" class="glightbox preview-link">
              <i class="bi bi-zoom-in"></i>
            </a>
            <a href="${
                project.detailsLink
            }" title="More Details" class="details-link">
              <i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
      `;

            container.appendChild(projectElement);
        });
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
