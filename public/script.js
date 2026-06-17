// script.js

// --- 1. DATA STRUCTURE ---
const semesterData = {
  sem1: {
    name: "Semester 1",
    schemes: {
      aicte: {
        name: "AICTE Scheme",
        syllabus:
          "https://drive.google.com/drive/folders/1zd4vlwONcH9LVRowDTkfz2HJOeLiXzHy?usp=drive_link",
        subjects: {
          math1: {
            name: "MATHS 1",
            icon: "sigma",
            desc: "Engineering Mathematics I",
            notes:
              "https://drive.google.com/drive/folders/13uoRmuYTI6NYsWhUlLH53r1tUIUgdHMc?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=drive_link",
          },
          chemistry: {
            name: "CHEMISTRY",
            icon: "beaker",
            desc: "Engineering Chemistry & Core Concepts",
            notes:
              "https://drive.google.com/drive/folders/1OKNK73TYW_aJdQAnIadNiskoB10VG-eK?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/16lr3toOXdETNYz8gwpJ-xWhrgGVUXoZB?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1gdzY-ir3Huq9mGs-wcjFM-a1PIutkO_C?usp=drive_link",
          },
          bee: {
            name: "BEE",
            icon: "zap",
            desc: "Basic Electrical Engineering",
            notes:
              "https://drive.google.com/drive/folders/1fDGEeYrrb67nl9cN_opZrESUpOKa-U9Z?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1H30nlb4Mw1Wiy_bNlNb-inzZRrLwvf_p?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1y8f8PWhwHdxAzy1H9Izdl4i_7khjyEjR?usp=drive_link",
          },
          pcs: {
            name: "Professional Communication Skills",
            icon: "message-square",
            desc: "English & Business Communication",
            notes:
              "https://drive.google.com/drive/folders/1I3RL7v7xCusNXWdGUyqXyWdrOseeVgyj?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1nt8wL-ZDKdWrj0W6IvqzMgldTB6mPyFD?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/19E4png-x1vVap1KQvr2J1FzJR85CV_be?usp=drive_link",
          },
          python_ps: {
            name: "Python for Problem Solving & Logic Building",
            icon: "code-2",
            desc: "Programming Essentials & Logic",
            notes:
              "https://drive.google.com/drive/folders/1x3iuJ38-mpuhFcWEigX87UG1JEmQgB0Q?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1GlS0z2jVrOfK524nX6HJbGoV_6G-K-Zk?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1VQ1_z1Ha3yWQqSCUH65ecp6tH4qjnL_Z?usp=drive_link",
          },
        },
      },
      nep: {
        name: "NEP Scheme",
        syllabus:
          "https://drive.google.com/drive/folders/1zd4vlwONcH9LVRowDTkfz2HJOeLiXzHy?usp=drive_link",
        subjects: {
          math1: {
            name: "MATHS 1",
            icon: "sigma",
            desc: "Engineering Mathematics I (NEP)",
            notes:
              "https://drive.google.com/drive/folders/13uoRmuYTI6NYsWhUlLH53r1tUIUgdHMc?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=drive_link",
          },
          chemistry: {
            name: "CHEMISTRY",
            icon: "beaker",
            desc: "Engineering Chemistry & Lab (NEP)",
            notes:
              "https://drive.google.com/drive/folders/1OKNK73TYW_aJdQAnIadNiskoB10VG-eK?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/16lr3toOXdETNYz8gwpJ-xWhrgGVUXoZB?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1gdzY-ir3Huq9mGs-wcjFM-a1PIutkO_C?usp=drive_link",
          },
          bee: {
            name: "BEE",
            icon: "zap",
            desc: "Basic Electrical Engineering (NEP)",
            notes:
              "https://drive.google.com/drive/folders/1fDGEeYrrb67nl9cN_opZrESUpOKa-U9Z?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1H30nlb4Mw1Wiy_bNlNb-inzZRrLwvf_p?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1y8f8PWhwHdxAzy1H9Izdl4i_7khjyEjR?usp=drive_link",
          },
          pcs: {
            name: "Professional Communication Skills",
            icon: "message-square",
            desc: "Communication & Soft Skills (NEP)",
            notes:
              "https://drive.google.com/drive/folders/1I3RL7v7xCusNXWdGUyqXyWdrOseeVgyj?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1nt8wL-ZDKdWrj0W6IvqzMgldTB6mPyFD?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/19E4png-x1vVap1KQvr2J1FzJR85CV_be?usp=drive_link",
          },
          python_ps: {
            name: "Python for Problem Solving & Logic Building",
            icon: "code-2",
            desc: "Python Programming (NEP)",
            notes:
              "https://drive.google.com/drive/folders/1x3iuJ38-mpuhFcWEigX87UG1JEmQgB0Q?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1GlS0z2jVrOfK524nX6HJbGoV_6G-K-Zk?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1VQ1_z1Ha3yWQqSCUH65ecp6tH4qjnL_Z?usp=drive_link",
          },
        },
      },
    },
  },
  sem2: {
    name: "Semester 2",
    schemes: {
      aicte: {
        name: "AICTE Scheme",
        syllabus:
          "https://drive.google.com/drive/folders/1zd4vlwONcH9LVRowDTkfz2HJOeLiXzHy?usp=drive_link",
        subjects: {
          physics: {
            name: "PHYSICS",
            icon: "atom",
            desc: "Engineering Physics & Lab",
            notes:
              "https://drive.google.com/drive/folders/1JwtaPvpFfQjMqrsPkAYGpWoq3G7Qnmtn?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=drive_link",
          },
          maths2: {
            name: "MATHS 2",
            icon: "sigma",
            desc: "Engineering Mathematics II",
            notes:
              "https://drive.google.com/drive/folders/13uoRmuYTI6NYsWhUlLH53r1tUIUgdHMc?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=drive_link",
          },
          c_lang: {
            name: "C-Language",
            icon: "code-2",
            desc: "Problem Solving using C Programming",
            notes:
              "https://drive.google.com/drive/folders/1_wiuohI3z8Wkx4W9iZjbaNvkA3W17zMf?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1GlS0z2jVrOfK524nX6HJbGoV_6G-K-Zk?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1VQ1_z1Ha3yWQqSCUH65ecp6tH4qjnL_Z?usp=drive_link",
          },
          cns: {
            name: "CNS",
            icon: "shield",
            desc: "Cryptography & Network Security",
            notes:
              "https://drive.google.com/drive/folders/1OKNK73TYW_aJdQAnIadNiskoB10VG-eK?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/16lr3toOXdETNYz8gwpJ-xWhrgGVUXoZB?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1gdzY-ir3Huq9mGs-wcjFM-a1PIutkO_C?usp=drive_link",
          },
          cyber: {
            name: "CYBER",
            icon: "terminal",
            desc: "Cyber Security & Information Security",
            notes:
              "https://drive.google.com/drive/folders/1I3RL7v7xCusNXWdGUyqXyWdrOseeVgyj?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1nt8wL-ZDKdWrj0W6IvqzMgldTB6mPyFD?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/19E4png-x1vVap1KQvr2J1FzJR85CV_be?usp=drive_link",
          },
          icc: {
            name: "ICC",
            icon: "globe",
            desc: "Indian Constitution & Culture",
            notes:
              "https://drive.google.com/drive/folders/1fDGEeYrrb67nl9cN_opZrESUpOKa-U9Z?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1H30nlb4Mw1Wiy_bNlNb-inzZRrLwvf_p?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1y8f8PWhwHdxAzy1H9Izdl4i_7khjyEjR?usp=drive_link",
          },
        },
      },
      nep: {
        name: "NEP Scheme",
        syllabus:
          "https://drive.google.com/drive/folders/1zd4vlwONcH9LVRowDTkfz2HJOeLiXzHy?usp=drive_link",
        subjects: {
          physics: {
            name: "PHYSICS",
            icon: "atom",
            desc: "Engineering Physics (NEP Pattern)",
            notes:
              "https://drive.google.com/drive/folders/1JwtaPvpFfQjMqrsPkAYGpWoq3G7Qnmtn?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=drive_link",
          },
          maths2: {
            name: "MATHS 2",
            icon: "sigma",
            desc: "Engineering Mathematics II (NEP)",
            notes:
              "https://drive.google.com/drive/folders/13uoRmuYTI6NYsWhUlLH53r1tUIUgdHMc?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=drive_link",
          },
          c_lang: {
            name: "C-Language",
            icon: "code-2",
            desc: "Problem Solving using C Programming (NEP)",
            notes:
              "https://drive.google.com/drive/u/3/folders/1_wiuohI3z8Wkx4W9iZjbaNvkA3W17zMf",
            pyq: "https://drive.google.com/drive/folders/1GlS0z2jVrOfK524nX6HJbGoV_6G-K-Zk?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1VQ1_z1Ha3yWQqSCUH65ecp6tH4qjnL_Z?usp=drive_link",
          },
          cns: {
            name: "CNS",
            icon: "shield",
            desc: "Cryptography & Network Security (NEP)",
            notes:
              "https://drive.google.com/drive/folders/1OKNK73TYW_aJdQAnIadNiskoB10VG-eK?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/16lr3toOXdETNYz8gwpJ-xWhrgGVUXoZB?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1gdzY-ir3Huq9mGs-wcjFM-a1PIutkO_C?usp=drive_link",
          },
          cyber: {
            name: "CYBER",
            icon: "terminal",
            desc: "Cyber Security & Information Security (NEP)",
            notes:
              "https://drive.google.com/drive/folders/1I3RL7v7xCusNXWdGUyqXyWdrOseeVgyj?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1nt8wL-ZDKdWrj0W6IvqzMgldTB6mPyFD?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/19E4png-x1vVap1KQvr2J1FzJR85CV_be?usp=drive_link",
          },
          icc: {
            name: "ICC",
            icon: "globe",
            desc: "Indian Constitution & Culture (NEP)",
            notes:
              "https://drive.google.com/drive/folders/1fDGEeYrrb67nl9cN_opZrESUpOKa-U9Z?usp=drive_link",
            pyq: "https://drive.google.com/drive/folders/1H30nlb4Mw1Wiy_bNlNb-inzZRrLwvf_p?usp=drive_link",
            qb: "https://drive.google.com/drive/folders/1y8f8PWhwHdxAzy1H9Izdl4i_7khjyEjR?usp=drive_link",
          },
        },
      },
    },
  },
  sem3: {
    name: "Semester 3",
    syllabus: "https://sem3-syllabus-link.com",
    subjects: {
      math3: {
        name: "Mathematics III",
        icon: "sigma",
        desc: "Complex variables & Transforms",
        notes:
          "https://drive.google.com/drive/folders/13uoRmuYTI6NYsWhUlLH53r1tUIUgdHMc?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/1ARe4-lTo2ojfvdmu3kq_8M7heyLOHovh?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1DAuCH6RqCCI3XaWHfDNGHnzYYcwBS3Mo?usp=drive_link",
      },
      dsa: {
        name: "DSA",
        icon: "binary",
        desc: "Algorithms & Logic Building",
        notes:
          "https://drive.google.com/drive/folders/1OKNK73TYW_aJdQAnIadNiskoB10VG-eK?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/16lr3toOXdETNYz8gwpJ-xWhrgGVUXoZB?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1gdzY-ir3Huq9mGs-wcjFM-a1PIutkO_C?usp=drive_link",
      },
      deld: {
        name: "DELD",
        icon: "cpu",
        desc: "Digital Logic & Electronics",
        notes:
          "https://drive.google.com/drive/folders/1fDGEeYrrb67nl9cN_opZrESUpOKa-U9Z?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/1H30nlb4Mw1Wiy_bNlNb-inzZRrLwvf_p?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1y8f8PWhwHdxAzy1H9Izdl4i_7khjyEjR?usp=drive_link",
      },
      python: {
        name: "Python",
        icon: "code-2",
        desc: "Core Programming",
        notes:
          "https://drive.google.com/drive/folders/1x3iuJ38-mpuhFcWEigX87UG1JEmQgB0Q?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/1GlS0z2jVrOfK524nX6HJbGoV_6G-K-Zk?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1VQ1_z1Ha3yWQqSCUH65ecp6tH4qjnL_Z?usp=drive_link",
      },
      os: {
        name: "OS",
        icon: "app-window",
        desc: "Process Management",
        notes:
          "https://drive.google.com/drive/folders/1I3RL7v7xCusNXWdGUyqXyWdrOseeVgyj?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/1nt8wL-ZDKdWrj0W6IvqzMgldTB6mPyFD?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/19E4png-x1vVap1KQvr2J1FzJR85CV_be?usp=drive_link",
      },
    },
  },
  sem4: {
    name: "Semester 4",
    syllabus:
      "https://drive.google.com/drive/folders/1zd4vlwONcH9LVRowDTkfz2HJOeLiXzHy?usp=drive_link",
    subjects: {
      daa: {
        name: "DAA",
        icon: "binary",
        desc: "Design & Analysis of Algorithms",
        notes:
          "https://drive.google.com/drive/folders/1uBbckaHmDOU4LWTBaCB98cSKxBVb9PCm?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/1RHtHvydwTVwxWobMy8I-mPwAqg0BQ5rX?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1V7J309dHlHwfN1yKQ5NXQsqfFuaRNm3c?usp=drive_link",
      },
      dbms: {
        name: "DBMS",
        icon: "database",
        desc: "Database Management Systems",
        notes:
          "https://drive.google.com/drive/folders/1WODzV_03U2S-egm4s1aQwItRnEA2e453?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/12YRY2ph2zbybhaKkgoBhXl2ceUJfNNYZ?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1UrYAM67wtuTxwKzAgjrkHC_86dCzOUf2?usp=drive_link",
      },
      java: {
        name: "OOP (Java)",
        icon: "coffee",
        desc: "Object-Oriented Programming",
        notes:
          "https://drive.google.com/drive/folders/1b_2t9OCcWlLx-L45MCnwo-cSZt2hiKDh?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/1XXt61Gwore_xu_iMRVp3m6Y2QwsJSFwn?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1b_2t9OCcWlLx-L45MCnwo-cSZt2hiKDh?usp=drive_link",
      },
      csa: {
        name: "CSA",
        icon: "server",
        desc: "Computer System Architecture",
        notes: "#",
        pyq: "#",
        qb: "#",
      },
      ds: {
        name: "Discrete Str.",
        icon: "sigma",
        desc: "Discrete Structures",
        notes:
          "https://drive.google.com/drive/folders/1J0V5jgaP_-V-CitFJ_-i-5PN74s9LWkb?usp=drive_link",
        pyq: "https://drive.google.com/drive/folders/188zGHJHO4NII0sEOTg0cV3PF0Ti46rH2?usp=drive_link",
        qb: "https://drive.google.com/drive/folders/1BV1zpsRRCIOttP_hz_foDfWnp82wOuRa?usp=drive_link",
      },
    },
  },
  sem5: { name: "Semester 5", subjects: {} },
  sem6: { name: "Semester 6", subjects: {} },
};

// Quotes
const quotes = [
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It always seems impossible until it is done.",
    author: "Nelson Mandela",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
];

// --- 2. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  initTheme();

  const path = window.location.pathname;
  // Simple check if we are on the semester page
  const isSemesterPage = path.includes("semester");

  if (isSemesterPage) {
    const savedSem = localStorage.getItem("examly_semester");
    if (savedSem) {
      loadSubjects(savedSem);
    } else {
      window.location.href = "index.html";
    }
  } else {
    loadRandomQuote();
  }
});

// --- 3. QUOTE LOGIC ---
function loadRandomQuote() {
  const quoteEl = document.getElementById("random-quote");
  if (!quoteEl) return;

  const idx = Math.floor(Math.random() * quotes.length);
  quoteEl.innerText = `"${quotes[idx].text}"`;
  document.getElementById("quote-author").innerText = `— ${quotes[idx].author}`;
}

// --- 4. THEME LOGIC ---
function initTheme() {
  const themeBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const saved = localStorage.getItem("examly_theme") || "dark";

  html.setAttribute("data-theme", saved);
  updateThemeIcon(saved);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const newTheme = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("examly_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  if (theme === "light") {
    btn.innerHTML = '<i data-lucide="sun" class="w-5 h-5"></i>';
  } else {
    btn.innerHTML = '<i data-lucide="moon" class="w-5 h-5"></i>';
  }
  lucide.createIcons();
}

// --- 5. MODAL LOGIC ---
window.openSemesterModal = () => {
  const modal = document.getElementById("semester-modal");
  if (modal) {
    modal.classList.remove("hidden");
    gsap.to(modal, { opacity: 1, duration: 0.2 });
    gsap.fromTo(
      "#modal-box",
      { scale: 0.95 },
      { scale: 1, duration: 0.3, ease: "back.out(1.5)" },
    );
  }
};

window.closeSemesterModal = () => {
  const modal = document.getElementById("semester-modal");
  if (modal) {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => modal.classList.add("hidden"),
    });
  }
};

window.closeSemesterModalOnOutsideClick = (event) => {
  if (event.target.id === "semester-modal") {
    closeSemesterModal();
  }
};

// --- 6. NAVIGATION LOGIC ---
window.selectSemesterAndRedirect = (sem) => {
  localStorage.setItem("examly_semester", sem);
  window.location.href = "semester.html";
};

// --- 7. LOAD SUBJECTS ---
function loadSubjects(semKey) {
  const data = semesterData[semKey];
  if (!data) return;

  const badgeText = document.getElementById("current-sem-text");
  if (badgeText) badgeText.innerText = data.name;

  const schemeContainer = document.getElementById("scheme-selection");
  if (!schemeContainer) return;

  if (data.schemes) {
    schemeContainer.classList.remove("hidden");
    const currentScheme = localStorage.getItem("examly_scheme") || "aicte";

    schemeContainer.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <button onclick="switchScheme('${semKey}', 'aicte')" class="notes-card p-5 text-center transition-all cursor-pointer ${currentScheme === "aicte" ? "scheme-card-active" : ""}">
          <span class="block text-lg font-bold mb-1 heading-text">AICTE Scheme</span>
          <span class="block text-xs muted-text">Technical Education Curriculum</span>
        </button>
        <button onclick="switchScheme('${semKey}', 'nep')" class="notes-card p-5 text-center transition-all cursor-pointer ${currentScheme === "nep" ? "scheme-card-active" : ""}">
          <span class="block text-lg font-bold mb-1 heading-text">NEP Scheme</span>
          <span class="block text-xs muted-text">National Education Policy</span>
        </button>
      </div>
    `;

    const schemeData = data.schemes[currentScheme];
    renderSyllabusAndSubjects(schemeData);
  } else {
    schemeContainer.classList.add("hidden");
    schemeContainer.innerHTML = "";
    renderSyllabusAndSubjects(data);
  }
}

function renderSyllabusAndSubjects(data, animate = true) {
  const syllabusContainer = document.getElementById("syllabus-box");
  const grid = document.getElementById("subject-grid");
  if (!grid) return;

  // Render Syllabus Box
  if (syllabusContainer) {
    if (data.syllabus) {
      syllabusContainer.innerHTML = `
        <div class="notes-card p-8 flex flex-col justify-between border section-border relative overflow-hidden">
            <div>
                <div class="flex items-start justify-between mb-6">
                    <div class="p-3 bg-page rounded-lg border section-border muted-text">
                        <i data-lucide="book-open" class="w-8 h-8"></i>
                    </div>
                </div>

                <h3 class="text-2xl font-bold mb-2 heading-text">
                    ${data.name ? data.name + " Syllabus" : "Syllabus"}
                </h3>

                <p class="text-sm muted-text mb-6 leading-relaxed">
                    Access the complete official syllabus for this curriculum.
                </p>
            </div>

            <a href="${data.syllabus}"
               target="_blank"
               class="btn-primary px-6 py-3 text-sm flex items-center justify-center gap-2 w-full">
                <i data-lucide="book" class="w-4 h-4"></i>
                View Syllabus
            </a>
        </div>
      `;
    } else {
      syllabusContainer.innerHTML = "";
    }
  }

  // Render Subjects
  grid.innerHTML = "";
  const subjects = data.subjects || {};
  const keys = Object.keys(subjects);

  if (keys.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 muted-text">
          <div class="inline-flex p-4 rounded-full bg-card mb-4 border section-border">
              <i data-lucide="construction" class="w-8 h-8"></i>
          </div>
          <h3 class="text-xl font-bold heading-text">Coming Soon</h3>
          <p class="mt-2">Resources for this semester are being updated.</p>
          <a href="index.html" class="mt-4 inline-block text-sm underline hover:heading-text">Go Back</a>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  keys.forEach((key) => {
    const sub = subjects[key];
    const card = document.createElement("div");
    card.className =
      "notes-card p-8 group relative overflow-hidden flex flex-col justify-between h-full border section-border";

    card.innerHTML = `
      <div>
          <div class="flex items-start justify-between mb-6">
              <div class="p-3 bg-page rounded-lg border section-border muted-text group-hover:heading-text group-hover:border-current transition-colors">
                  <i data-lucide="${sub.icon || "book"}" class="w-8 h-8"></i>
              </div>
          </div>
          <h3 class="text-xl font-bold mb-2 heading-text">${sub.name}</h3>
          <p class="text-sm muted-text mb-6 leading-relaxed">${sub.desc || ""}</p>
      </div>
      
      <div class="grid grid-cols-3 gap-2 mt-auto">
          <a href="${sub.notes || "#"}" target="_blank" class="btn-resource py-2 hover:bg-card transition-all" title="Lecture Notes">
              <i data-lucide="book-open" class="w-3 h-3"></i> Notes
          </a>
          <a href="${sub.pyq || "#"}" target="_blank" class="btn-resource py-2 hover:bg-card transition-all" title="Previous Year Questions">
              <i data-lucide="history" class="w-3 h-3"></i> PYQ
          </a>
          <a href="${sub.qb || "#"}" target="_blank" class="btn-resource py-2 hover:bg-card transition-all" title="Question Bank">
              <i data-lucide="file-question" class="w-3 h-3"></i> QB
          </a>
      </div>
    `;
    grid.appendChild(card);
  });

  lucide.createIcons();

  if (animate) {
    gsap.fromTo(
      ".notes-card",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
    );
  }
}

window.switchScheme = (semKey, schemeKey) => {
  localStorage.setItem("examly_scheme", schemeKey);

  const buttons = document.querySelectorAll("#scheme-selection button");
  buttons.forEach((btn, idx) => {
    const isTarget =
      (idx === 0 && schemeKey === "aicte") ||
      (idx === 1 && schemeKey === "nep");
    if (isTarget) {
      btn.classList.add("scheme-card-active");
    } else {
      btn.classList.remove("scheme-card-active");
    }
  });

  gsap.to(["#syllabus-box", "#subject-grid"], {
    opacity: 0,
    y: 10,
    duration: 0.2,
    onComplete: () => {
      const semData = semesterData[semKey];
      const schemeData = semData.schemes[schemeKey];
      renderSyllabusAndSubjects(schemeData, false);
      gsap.fromTo(
        ["#syllabus-box", "#subject-grid"],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      );
    },
  });
};
