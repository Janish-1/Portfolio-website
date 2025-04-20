/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  // Global Data
  const projects = [
    {
      title: "Bitcoin Watcher",
      type: "App",
      description: "Lightweight Crypto Price Tracker",
      image: "assets/img/portfolio/app-1.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-web",
    },
    {
      title: "HTML Cloner",
      type: "Product",
      description: "Full Webpage Snapshot Extension",
      image: "assets/img/portfolio/product-1.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-extension",
    },
    {
      title: "Fake News Detection",
      type: "Branding",
      description: "NLP-Based Classification App",
      image: "assets/img/portfolio/branding-1.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-mlai",
    },
    {
      title: "Django API Framework",
      type: "App",
      description: "Token-Based REST Server",
      image: "assets/img/portfolio/app-2.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-api",
    },
    {
      title: "Travel Expense Calculator",
      type: "App",
      description: "Voice-Powered Budgeting Tool",
      image: "assets/img/portfolio/app-3.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-web",
    },
    {
      title: "Node.js Game Framework",
      type: "Product",
      description: "Backend API for Multiplayer Games",
      image: "assets/img/portfolio/product-2.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-api",
    },
    {
      title: "Freecom",
      type: "Product",
      description: "NLP-Based Product Guidance & Discount Code Redemption",
      image: "assets/img/portfolio/product-3.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-mlai",
    },
    {
      title: "News Scraping Jupyter Notebook",
      type: "Books",
      description: "Scraping Indian Express News",
      image: "assets/img/portfolio/books-1.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-scrape",
    },
    {
      title: "WIP Linux Distro",
      type: "Branding",
      description: "Lightweight Custom Distro for Developers",
      image: "assets/img/portfolio/branding-2.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-linux",
    },
    {
      title: "Kaggle Competition Entries",
      type: "Books",
      description: "Exploring Machine Learning Algorithms",
      image: "assets/img/portfolio/books-2.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-mlai",
    },
    {
      title: "VSCode Extension Packs",
      type: "Product",
      description: "Developer Productivity Tools",
      image: "assets/img/portfolio/books-2.jpg",
      detailsLink: "portfolio-details.html",
      filterClass: "filter-extension",
    },
  ];

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    // Populate the portfolio items
    const portfolioContainer = document.querySelector(".isotope-container");
    populatePortfolio(projects, portfolioContainer);

        
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    


    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
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
  
      container.appendChild(projectElement);
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
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
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);
})();