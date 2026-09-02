/* ============================================================
   MAIN.JS — logika interaksi website

   - Navbar
   - Scroll reveal
   - Hero typing effect
   - Render projects
   - Project category slider
   - Project detail modal
   - Project image carousel
   - Project PDF viewer
   - Certificate preview modal
   ============================================================ */


document.addEventListener('DOMContentLoaded', () => {


  /* ============================================================
     YEAR
     ============================================================ */

  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ============================================================
     NAVBAR
     ============================================================ */

  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const burgerBtn = document.getElementById('burgerBtn');
  const allNavLinks = document.querySelectorAll('.nav-link');


  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle(
        'scrolled',
        window.scrollY > 30
      );
    });
  }


  if (burgerBtn && navLinks) {

    burgerBtn.addEventListener('click', () => {

      navLinks.classList.toggle('open');

      burgerBtn.classList.toggle('open');

    });

  }


  allNavLinks.forEach(link => {

    link.addEventListener('click', () => {

      if (navLinks) {
        navLinks.classList.remove('open');
      }

      if (burgerBtn) {
        burgerBtn.classList.remove('open');
      }

    });

  });


  /* ============================================================
     ACTIVE NAV LINK
     ============================================================ */

  const sections =
    document.querySelectorAll('section[id]');


  if (sections.length && allNavLinks.length) {

    const navObserver =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              const id =
                entry.target.getAttribute('id');


              allNavLinks.forEach(link => {

                link.classList.toggle(
                  'active',
                  link.getAttribute('href') === `#${id}`
                );

              });

            }

          });

        },

        {
          rootMargin: '-45% 0px -45% 0px'
        }

      );


    sections.forEach(section => {
      navObserver.observe(section);
    });

  }


  /* ============================================================
     SCROLL REVEAL
     ============================================================ */

  const revealEls =
    document.querySelectorAll('.reveal');


  if (revealEls.length) {

    const revealObserver =
      new IntersectionObserver(

        (entries, observer) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add('in-view');

              observer.unobserve(entry.target);

            }

          });

        },

        {
          threshold: 0.15
        }

      );


    revealEls.forEach(el => {
      revealObserver.observe(el);
    });

  }


  /* ============================================================
     HERO TYPING EFFECT
     ============================================================ */

  const roles = [
    'UI/UX & Frontend Enthusiast',
    'Data Analysis & Data Science Enthusiast'
  ];

  const typedEl =
    document.getElementById('typedRole');


  if (typedEl) {

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeLoop() {

      const current =
        roles[roleIndex];


      if (!deleting) {

        charIndex++;

        typedEl.textContent =
          current.slice(0, charIndex);


        if (charIndex === current.length) {

          deleting = true;

          setTimeout(typeLoop, 1600);

          return;
        }

      } else {

        charIndex--;

        typedEl.textContent =
          current.slice(0, charIndex);


        if (charIndex === 0) {

          deleting = false;

          roleIndex =
            (roleIndex + 1) % roles.length;

        }

      }


      setTimeout(
        typeLoop,
        deleting ? 35 : 65
      );

    }


    typeLoop();

  }


  /* ============================================================
     PROJECTS
     ============================================================ */

  const gridUiux =
    document.getElementById('grid-uiux');

  const gridData =
    document.getElementById('grid-data');


  function projectIconFallback(role) {

    return role === 'uiux'
      ? 'fa-pen-ruler'
      : 'fa-chart-simple';

  }


  function renderProjects(role, gridEl) {

    if (!gridEl) {
      return;
    }


    const list =
      projectsData[role] || [];


    gridEl.innerHTML = '';


    if (list.length === 0) {

      gridEl.innerHTML = `
        <p style="color:var(--ink-soft);">
          Belum ada proyek.
          Tambahkan di js/projects-data.js ya!
        </p>
      `;

      return;
    }


    list.forEach((project, index) => {

      const card =
        document.createElement('article');


      card.className =
        'project-card';


      card.innerHTML = `

        <div class="project-thumb">

          ${
            project.cover

              ? `
                <img
                  src="${project.cover}"
                  alt="${project.title}"
                  loading="lazy"
                  onerror="
                    this.parentElement.innerHTML =
                    '<i class=\\'fa-solid ${projectIconFallback(role)} fallback-icon\\'></i>'
                  "
                >
              `

              : `
                <i
                  class="fa-solid
                  ${projectIconFallback(role)}
                  fallback-icon"
                ></i>
              `
          }

        </div>


        <div class="project-body">

          <h3>
            ${project.title}
          </h3>


          <p class="project-tagline">
            ${project.shortDescription || ''}
          </p>


          <button
            class="project-detail-btn"
            type="button"
            aria-label="Lihat detail ${project.title}"
          >
            Lihat Selengkapnya

            <i
              class="fa-solid fa-arrow-right"
            ></i>
          </button>

        </div>

      `;


      /* --------------------------------------------------------
         Hanya tombol yang membuka modal
         -------------------------------------------------------- */

      const detailButton =
        card.querySelector('.project-detail-btn');


      if (detailButton) {

        detailButton.addEventListener(
          'click',
          (event) => {

            event.stopPropagation();

            openModal(role, index);

          }
        );

      }


      gridEl.appendChild(card);

    });

  }


  renderProjects(
    'uiux',
    gridUiux
  );


  renderProjects(
    'data',
    gridData
  );


  /* ============================================================
     PROJECT CATEGORY TABS + SLIDER
     ============================================================ */

  const roleTabs =
    document.querySelectorAll('.role-tab');

  const roleDots =
    document.querySelectorAll('.role-dot');

  const track =
    document.getElementById('projectsTrack');


  const roleOrder = [
    'uiux',
    'data'
  ];


  let currentRoleIdx = 0;


  function goToRole(idx) {

    currentRoleIdx =
      (idx + roleOrder.length)
      % roleOrder.length;


    const role =
      roleOrder[currentRoleIdx];


    if (track) {

      track.style.transform =
        `translateX(-${currentRoleIdx * 50}%)`;

    }


    roleTabs.forEach(tab => {

      tab.classList.toggle(
        'active',
        tab.dataset.role === role
      );

    });


    roleDots.forEach(dot => {

      dot.classList.toggle(
        'active',
        dot.dataset.role === role
      );

    });

  }


  roleTabs.forEach(tab => {

    tab.addEventListener(
      'click',
      () => {

        const index =
          roleOrder.indexOf(
            tab.dataset.role
          );


        if (index !== -1) {
          goToRole(index);
        }

      }
    );

  });


  roleDots.forEach(dot => {

    dot.addEventListener(
      'click',
      () => {

        const index =
          roleOrder.indexOf(
            dot.dataset.role
          );


        if (index !== -1) {
          goToRole(index);
        }

      }
    );

  });


  const prevRole =
    document.getElementById('prevRole');

  const nextRole =
    document.getElementById('nextRole');


  if (prevRole) {

    prevRole.addEventListener(
      'click',
      () => goToRole(
        currentRoleIdx - 1
      )
    );

  }


  if (nextRole) {

    nextRole.addEventListener(
      'click',
      () => goToRole(
        currentRoleIdx + 1
      )
    );

  }


  /* ============================================================
     PROJECT DETAIL MODAL
     ============================================================ */

  const modalOverlay =
    document.getElementById('modalOverlay');

  const modalMedia =
    document.getElementById('modalMedia');

  const modalCategory =
    document.getElementById('modalCategory');

  const modalTitle =
    document.getElementById('modalTitle');

  const modalDesc =
    document.getElementById('modalDesc');

  const modalClose =
    document.getElementById('modalClose');


  let activeCarouselIndex = 0;

  let activeCarouselImages = [];


  /* ============================================================
   BUILD IMAGE CAROUSEL
   ============================================================ */

  function buildImageCarousel(images) {

    activeCarouselImages =
      Array.isArray(images)
        ? images
        : [];


    activeCarouselIndex = 0;


    if (!modalMedia) {
      return;
    }


    const slidesHtml =
      activeCarouselImages
        .map(
          (src, i) => `
            <div class="carousel-slide">

              <img
                src="${src}"
                alt="Preview proyek ${i + 1}"
                loading="${i === 0 ? 'eager' : 'lazy'}"
              >

            </div>
          `
        )
        .join('');


    const dotsHtml =
      activeCarouselImages
        .map(
          (_, i) => `
            <span
              class="${i === 0 ? 'active' : ''}"
            ></span>
          `
        )
        .join('');


    modalMedia.innerHTML = `

      <div class="carousel">

        <div
          class="carousel-track"
          id="carouselTrack"
        >

          ${slidesHtml}

        </div>


        ${
          activeCarouselImages.length > 1

            ? `

              <button
                class="carousel-btn prev"
                id="carouselPrev"
                type="button"
                aria-label="Gambar sebelumnya"
              >
                <i
                  class="fa-solid fa-chevron-left"
                ></i>
              </button>


              <button
                class="carousel-btn next"
                id="carouselNext"
                type="button"
                aria-label="Gambar berikutnya"
              >
                <i
                  class="fa-solid fa-chevron-right"
                ></i>
              </button>


              <div
                class="carousel-dots"
                id="carouselDots"
              >
                ${dotsHtml}
              </div>

            `

            : ''
        }

      </div>

    `;


    if (activeCarouselImages.length > 1) {

      const carouselPrev =
        document.getElementById(
          'carouselPrev'
        );

      const carouselNext =
        document.getElementById(
          'carouselNext'
        );


      if (carouselPrev) {

        carouselPrev.addEventListener(
          'click',
          () => moveCarousel(-1)
        );

      }


      if (carouselNext) {

        carouselNext.addEventListener(
          'click',
          () => moveCarousel(1)
        );

      }

    }

  }


  /* ============================================================
     MOVE IMAGE CAROUSEL
     ============================================================ */

  function moveCarousel(dir) {

    const total =
      activeCarouselImages.length;


    if (total <= 1) {
      return;
    }


    activeCarouselIndex =
      (
        activeCarouselIndex +
        dir +
        total
      ) % total;


    const trackEl =
      document.getElementById(
        'carouselTrack'
      );


    if (trackEl) {

      trackEl.style.transform =
        `translateX(-${activeCarouselIndex * 100}%)`;

    }


    document
      .querySelectorAll(
        '#carouselDots span'
      )
      .forEach((dot, i) => {

        dot.classList.toggle(
          'active',
          i === activeCarouselIndex
        );

      });

  }


  /* ============================================================
     BUILD PDF VIEWER
     ============================================================ */

  function buildPdfViewer(pdfPath) {

    activeCarouselImages = [];
    activeCarouselIndex = 0;


    if (!modalMedia) {
      return;
    }


    modalMedia.innerHTML = `

      <iframe
        class="pdf-frame"
        src="${pdfPath}"
        title="Dokumen PDF proyek"
      ></iframe>

    `;

  }


  /* ============================================================
     OPEN PROJECT MODAL
     ============================================================ */

  function openModal(role, index) {

    const project =
      projectsData?.[role]?.[index];


    if (!project || !modalOverlay) {
      return;
    }


    /* ----------------------------------------------------------
       CATEGORY
       ---------------------------------------------------------- */

    if (modalCategory) {

      modalCategory.textContent =
        role === 'uiux'
          ? 'UI/UX & Frontend'
          : 'Data Analysis & Data Science';

    }


    /* ----------------------------------------------------------
       TITLE + DESCRIPTION
       ---------------------------------------------------------- */

    if (modalTitle) {
      modalTitle.textContent =
        project.title || '';
    }


    if (modalDesc) {
      modalDesc.textContent =
        project.description || '';
    }


    /* ----------------------------------------------------------
       MEDIA
       ---------------------------------------------------------- */

    if (
      project.media &&
      project.media.type === 'pdf' &&
      project.media.pdf
    ) {

      buildPdfViewer(
        project.media.pdf
      );

    }

    else if (
      project.media &&
      project.media.type === 'images' &&
      Array.isArray(project.media.images) &&
      project.media.images.length
    ) {

      buildImageCarousel(
        project.media.images
      );

    }

    else {

      activeCarouselImages = [];
      activeCarouselIndex = 0;


      if (modalMedia) {

        modalMedia.innerHTML = `

          <p
            style="
              padding:40px;
              color:var(--ink-soft);
            "
          >
            Belum ada media untuk proyek ini.
          </p>

        `;

      }

    }


    /* ----------------------------------------------------------
       OPEN MODAL
       ---------------------------------------------------------- */

    modalOverlay.classList.add('open');

    modalOverlay.setAttribute(
      'aria-hidden',
      'false'
    );


    document.body.style.overflow =
      'hidden';

  }


  /* ============================================================
     CLOSE PROJECT MODAL
     ============================================================ */

  function closeModal() {

    if (!modalOverlay) {
      return;
    }


    modalOverlay.classList.remove(
      'open'
    );


    modalOverlay.setAttribute(
      'aria-hidden',
      'true'
    );


    document.body.style.overflow =
      '';


    activeCarouselImages = [];

    activeCarouselIndex = 0;

  }


  if (modalClose) {

    modalClose.addEventListener(
      'click',
      closeModal
    );

  }


  if (modalOverlay) {

    modalOverlay.addEventListener(
      'click',
      (event) => {

        if (
          event.target ===
          modalOverlay
        ) {

          closeModal();

        }

      }
    );

  }


  /* ============================================================
     PROJECT MODAL KEYBOARD
     ============================================================ */

  document.addEventListener(
    'keydown',
    (event) => {

      if (
        !modalOverlay ||
        !modalOverlay.classList.contains('open')
      ) {

        return;

      }


      if (event.key === 'Escape') {

        closeModal();

      }


      if (
        event.key === 'ArrowRight' &&
        activeCarouselImages.length > 1
      ) {

        moveCarousel(1);

      }


      if (
        event.key === 'ArrowLeft' &&
        activeCarouselImages.length > 1
      ) {

        moveCarousel(-1);

      }

    }
  );


  /* ============================================================
     CERTIFICATE PREVIEW MODAL
     
     - 1 gambar:
       hanya preview

     - 2 gambar atau lebih:
       bisa Next / Previous
     ============================================================ */

  const certificateModal =
    document.getElementById(
      'certificateModal'
    );


  const certificatePreview =
    document.getElementById(
      'certificatePreview'
    );


  const certificateTitle =
    document.getElementById(
      'certificateTitle'
    );


  const certificateCounter =
    document.getElementById(
      'certificateCounter'
    );


  const certificateModalClose =
    document.getElementById(
      'certificateModalClose'
    );


  const certificatePrev =
    document.getElementById(
      'certificatePrev'
    );


  const certificateNext =
    document.getElementById(
      'certificateNext'
    );


  let activeCertificateIndex = 0;

  let activeCertificateImages = [];


  /* ============================================================
     UPDATE CERTIFICATE PREVIEW
     ============================================================ */

  function updateCertificatePreview() {

    if (
      !certificatePreview ||
      !activeCertificateImages.length
    ) {

      return;

    }


    certificatePreview.src =
      activeCertificateImages[
        activeCertificateIndex
      ];


    certificatePreview.alt =
      certificateTitle?.textContent ||
      'Certificate Preview';


    if (
      activeCertificateImages.length > 1
    ) {

      if (certificateCounter) {

        certificateCounter.textContent =
          `${activeCertificateIndex + 1} / ${activeCertificateImages.length}`;

      }

    } else {

      if (certificateCounter) {

        certificateCounter.textContent =
          '';

      }

    }


    const hasMultipleImages =
      activeCertificateImages.length > 1;


    if (certificatePrev) {

      certificatePrev.style.display =
        hasMultipleImages
          ? 'flex'
          : 'none';

    }


    if (certificateNext) {

      certificateNext.style.display =
        hasMultipleImages
          ? 'flex'
          : 'none';

    }

  }


  /* ============================================================
     OPEN CERTIFICATE
     ============================================================ */

  function openCertificate(
    images,
    title
  ) {

    if (!certificateModal) {
      return;
    }


    activeCertificateImages =
      Array.isArray(images)
        ? images
        : [];


    activeCertificateIndex = 0;


    if (certificateTitle) {

      certificateTitle.textContent =
        title || 'Certificate';

    }


    updateCertificatePreview();


    certificateModal.classList.add(
      'show'
    );


    document.body.classList.add(
      'modal-open'
    );

  }


  /* ============================================================
     CLOSE CERTIFICATE
     ============================================================ */

  function closeCertificate() {

    if (!certificateModal) {
      return;
    }


    certificateModal.classList.remove(
      'show'
    );


    document.body.classList.remove(
      'modal-open'
    );


    if (certificatePreview) {

      certificatePreview.src = '';

    }


    activeCertificateImages = [];

    activeCertificateIndex = 0;

  }


  /* ============================================================
     NEXT CERTIFICATE
     ============================================================ */

  function nextCertificate() {

    if (
      activeCertificateImages.length <= 1
    ) {

      return;

    }


    activeCertificateIndex =
      (
        activeCertificateIndex + 1
      ) % activeCertificateImages.length;


    updateCertificatePreview();

  }


  /* ============================================================
     PREVIOUS CERTIFICATE
     ============================================================ */

  function previousCertificate() {

    if (
      activeCertificateImages.length <= 1
    ) {

      return;

    }


    activeCertificateIndex =
      (
        activeCertificateIndex - 1 +
        activeCertificateImages.length
      ) % activeCertificateImages.length;


    updateCertificatePreview();

  }


  /* ============================================================
     CERTIFICATE CARD CLICK
     ============================================================ */

  document
    .querySelectorAll(
      '.certificate-image-wrap'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          try {

            const images =
              JSON.parse(
                button.dataset.certImages
              );


            const title =
              button.dataset.certTitle ||
              'Certificate';


            openCertificate(
              images,
              title
            );

          }

          catch (error) {

            console.error(
              'Certificate image data tidak valid:',
              error
            );

          }

        }
      );

    });


  /* ============================================================
     CERTIFICATE CLOSE
     ============================================================ */

  if (certificateModalClose) {

    certificateModalClose.addEventListener(
      'click',
      closeCertificate
    );

  }


  /* ============================================================
     CERTIFICATE PREVIOUS
     ============================================================ */

  if (certificatePrev) {

    certificatePrev.addEventListener(
      'click',
      previousCertificate
    );

  }


  /* ============================================================
     CERTIFICATE NEXT
     ============================================================ */

  if (certificateNext) {

    certificateNext.addEventListener(
      'click',
      nextCertificate
    );

  }


  /* ============================================================
     CLICK OUTSIDE CERTIFICATE MODAL
     ============================================================ */

  if (certificateModal) {

    certificateModal.addEventListener(
      'click',
      event => {

        if (
          event.target ===
          certificateModal
        ) {

          closeCertificate();

        }

      }
    );

  }


  /* ============================================================
     CERTIFICATE KEYBOARD
     ============================================================ */

  document.addEventListener(
    'keydown',
    event => {

      if (
        !certificateModal ||
        !certificateModal.classList.contains('show')
      ) {

        return;

      }


      if (event.key === 'Escape') {

        closeCertificate();

      }


      if (event.key === 'ArrowLeft') {

        previousCertificate();

      }


      if (event.key === 'ArrowRight') {

        nextCertificate();

      }

    }
  );


});