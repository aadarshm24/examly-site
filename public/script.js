// script.js
lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. DRIVE LINKS DATA (UNCHANGED) ---
  const driveLinks = {
    math: {
      name: "Mathematics 3",
      pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=sharing",
      notes:
        "https://drive.google.com/drive/folders/13uoRmuYTI6NYsWhUlLH53r1tUIUgdHMc?usp=sharing",
      qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=sharing",
    },
    python: {
      name: "Python",
      pyq: "https://drive.google.com/drive/folders/1GlS0z2jVrOfK524nX6HJbGoV_6G-K-Zk?usp=sharing",
      notes:
        "https://drive.google.com/drive/folders/1x3iuJ38-mpuhFcWEigX87UG1JEmQgB0Q?usp=sharing",
      qb: "https://drive.google.com/drive/folders/1VQ1_z1Ha3yWQqSCUH65ecp6tH4qjnL_Z?usp=sharing",
    },
    dsa: {
      name: "DSA",
      pyq: "https://drive.google.com/drive/folders/16lr3toOXdETNYz8gwpJ-xWhrgGVUXoZB?usp=sharing",
      notes:
        "https://drive.google.com/drive/folders/1OKNK73TYW_aJdQAnIadNiskoB10VG-eK?usp=sharing",
      qb: "https://drive.google.com/drive/folders/1gdzY-ir3Huq9mGs-wcjFM-a1PIutkO_C?usp=sharing",
    },
    deld: {
      name: "DELD",
      pyq: "https://drive.google.com/drive/folders/1H30nlb4Mw1Wiy_bNlNb-inzZRrLwvf_p?usp=sharing",
      notes:
        "https://drive.google.com/drive/folders/1fDGEeYrrb67nl9cN_opZrESUpOKa-U9Z?usp=sharing",
      qb: "https://drive.google.com/drive/folders/1y8f8PWhwHdxAzy1H9Izdl4i_7khjyEjR?usp=sharing",
    },
    os: {
      name: "Operating System",
      pyq: "https://drive.google.com/drive/folders/1nt8wL-ZDKdWrj0W6IvqzMgldTB6mPyFD?usp=sharing",
      notes:
        "https://drive.google.com/drive/folders/1I3RL7v7xCusNXWdGUyqXyWdrOseeVgyj?usp=sharing",
      qb: "https://drive.google.com/drive/folders/19E4png-x1vVap1KQvr2J1FzJR85CV_be?usp=sharing",
    },
  };

  gsap.registerPlugin(ScrollTrigger);

  // --- 2. PROFESSIONAL ENTRANCE ANIMATIONS ---

  // Hero Stagger
  if (document.querySelector(".hero-element")) {
    gsap.from(".hero-element", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    });
  }

  // Section Headers with line reveal
  const titles = gsap.utils.toArray(".section-title");
  titles.forEach((title) => {
    ScrollTrigger.create({
      trigger: title,
      start: "top 80%",
      onEnter: () => title.classList.add("visible"),
    });
  });

  // Cards Stagger (Upward Float)
  gsap.utils.toArray("section").forEach((section) => {
    const cards = section.querySelectorAll(".glass-card");
    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
      });
    }
  });

  // --- 3. HIGH-FIDELITY 3D TILT EFFECT ---
  const tiltCards = document.querySelectorAll(".glass-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on center
      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;

      // Limit rotation to 15 degrees
      const xRot = yPct * -10;
      const yRot = xPct * 10;

      gsap.to(card, {
        rotationX: xRot,
        rotationY: yRot,
        transformPerspective: 1000,
        duration: 0.1,
        ease: "power1.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });

  // --- 4. MODAL LOGIC (UNCHANGED BUT STYLED) ---
  const modal = document.getElementById("viewer-modal");
  if (modal) {
    const modalContent = document.getElementById("modal-content");
    const modalTitle = document.getElementById("modal-title");
    const modalLinks = document.getElementById("modal-links");
    const closeModalBtn = document.getElementById("close-modal");
    const subjectCards = document.querySelectorAll(
      ".subject-card[data-subject]"
    );

    const openModal = (subjectKey) => {
      const subjectData = driveLinks[subjectKey];
      if (!subjectData) return;

      modalTitle.textContent = subjectData.name;
      modalLinks.innerHTML = `
                <a href="${subjectData.notes}" target="_blank" class="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-red-600 hover:bg-[#222] transition-all group">
                    <div class="flex items-center gap-4">
                        <div class="p-2 bg-red-900/20 rounded-lg text-red-500"><i data-lucide="notebook-pen"></i></div>
                        <span class="font-semibold text-white">Notes</span>
                    </div>
                    <i data-lucide="external-link" class="text-gray-600 group-hover:text-white transition-colors"></i>
                </a>
                <a href="${subjectData.pyq}" target="_blank" class="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-red-600 hover:bg-[#222] transition-all group">
                    <div class="flex items-center gap-4">
                        <div class="p-2 bg-red-900/20 rounded-lg text-red-500"><i data-lucide="history"></i></div>
                        <span class="font-semibold text-white">PYQs</span>
                    </div>
                    <i data-lucide="external-link" class="text-gray-600 group-hover:text-white transition-colors"></i>
                </a>
                <a href="${subjectData.qb}" target="_blank" class="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-red-600 hover:bg-[#222] transition-all group">
                    <div class="flex items-center gap-4">
                        <div class="p-2 bg-red-900/20 rounded-lg text-red-500"><i data-lucide="file-question"></i></div>
                        <span class="font-semibold text-white">Q-Bank</span>
                    </div>
                    <i data-lucide="external-link" class="text-gray-600 group-hover:text-white transition-colors"></i>
                </a>
            `;
      lucide.createIcons();

      modal.classList.remove("hidden");
      gsap.to(modal, { autoAlpha: 1, duration: 0.2 });
      gsap.fromTo(
        modalContent,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" }
      );
    };

    const closeModal = () => {
      gsap.to(modalContent, { scale: 0.9, opacity: 0, duration: 0.2 });
      gsap.to(modal, {
        autoAlpha: 0,
        duration: 0.2,
        onComplete: () => modal.classList.add("hidden"),
      });
    };

    subjectCards.forEach((card) =>
      card.addEventListener("click", () => openModal(card.dataset.subject))
    );
    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
