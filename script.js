// ===== TYPEWRITER =====
const phrases = [
  'Mechanical Engineer ⚙️',
  'Full Stack Developer 🌐',
  'Flask + SQLite Builder 🗄️',
  'DSA Problem Solver 🧮',
  '60 Days of Code 🔥',
  'NIT Rourkela 2025–2029 🎓'
];

let pIdx = 0, cIdx = 0, deleting = false;
const typeEl = document.getElementById('typeText');

function typeWriter() {
  const current = phrases[pIdx];
  typeEl.textContent = deleting
    ? current.slice(0, cIdx--)
    : current.slice(0, cIdx++);

  if (!deleting && cIdx > current.length) {
    deleting = true;
    setTimeout(typeWriter, 2000);
    return;
  }
  if (deleting && cIdx < 0) {
    deleting = false;
    pIdx = (pIdx + 1) % phrases.length;
    setTimeout(typeWriter, 400);
    return;
  }
  setTimeout(typeWriter, deleting ? 50 : 90);
}

typeWriter();

// ===== TERMINAL ANIMATION =====
const termLines = [
  { text: '$ git status', cls: 't-cmd' },
  { text: 'On branch main · 60 commits', cls: 't-out' },
  { text: '$ ls GIT-MISSION/', cls: 't-cmd' },
  { text: 'day-01 day-02 ... day-60', cls: 't-out' },
  { text: '$ python3 app.py', cls: 't-cmd' },
  { text: '🚀 Server running at :5000', cls: 't-out' },
  { text: '# Phase 2 Complete!', cls: 't-comment' },
  { text: '$ git push origin main', cls: 't-cmd' },
  { text: '✅ 60 projects shipped!', cls: 't-out' }
];

let lineIdx = 0;
const termBody = document.getElementById('terminalBody');

function addTermLine() {
  if (lineIdx >= termLines.length) {
    setTimeout(() => {
      termBody.innerHTML = '';
      lineIdx = 0;
      addTermLine();
    }, 3000);
    return;
  }
  const div = document.createElement('div');
  div.className = `t-line ${termLines[lineIdx].cls}`;
  div.textContent = termLines[lineIdx].text;
  termBody.appendChild(div);
  termBody.scrollTop = termBody.scrollHeight;
  lineIdx++;
  setTimeout(addTermLine, 600);
}

addTermLine();

// ===== PROJECTS =====
const projects = [
  { day:1, name:"Hello World", desc:"Hello World in Python, JS and C++.", tags:["python","js","cpp"], cat:"python", repo:"day-01-hello-world" },
  { day:2, name:"CLI Calculator", desc:"Command-line calculator with arithmetic ops.", tags:["python"], cat:"python", repo:"day-02-calculator" },
  { day:3, name:"Number Guessing Game", desc:"Guess a number in 7 attempts.", tags:["python"], cat:"python", repo:"day-03-number-guessing-game" },
  { day:4, name:"To-Do List App", desc:"Terminal todo with JSON persistence.", tags:["python"], cat:"python", repo:"day-04-todo-list" },
  { day:5, name:"Rock Paper Scissors", desc:"Play vs computer with score tracking.", tags:["python"], cat:"python", repo:"day-05-rock-paper-scissors" },
  { day:6, name:"HTML Portfolio", desc:"Personal portfolio in pure HTML/CSS.", tags:["html","css"], cat:"web", repo:"day-06-html-portfolio" },
  { day:7, name:"CSS Landing Page", desc:"Styled product landing page.", tags:["html","css"], cat:"web", repo:"day-07-css-landing-page" },
  { day:8, name:"Responsive Navbar", desc:"Hamburger menu for mobile screens.", tags:["html","css","js"], cat:"web", repo:"day-08-responsive-navbar" },
  { day:9, name:"Quiz App", desc:"10-question JS quiz with score tracking.", tags:["js"], cat:"web", repo:"day-09-quiz-app" },
  { day:10, name:"Weather App", desc:"Weather app with 5-day forecast.", tags:["js"], cat:"web", repo:"day-10-weather-app" },
  { day:11, name:"Unit Converter", desc:"Length, weight, temp and speed converter.", tags:["js"], cat:"web", repo:"day-11-unit-converter" },
  { day:12, name:"Markdown Notes", desc:"Notes app with markdown rendering.", tags:["js"], cat:"web", repo:"day-12-markdown-notes" },
  { day:13, name:"Pomodoro Timer", desc:"SVG ring timer with session tracking.", tags:["js"], cat:"web", repo:"day-13-pomodoro-timer" },
  { day:14, name:"BMI Calculator", desc:"BMI with health tips and scale bar.", tags:["js"], cat:"web", repo:"day-14-bmi-calculator" },
  { day:15, name:"Quote Generator", desc:"Random quotes with favorites.", tags:["js"], cat:"web", repo:"day-15-random-quote-generator" },
  { day:16, name:"Countdown Timer", desc:"Count down to any future date.", tags:["js"], cat:"web", repo:"day-16-countdown-timer" },
  { day:17, name:"Dice Roller", desc:"Roll D4 to D20 with history.", tags:["js"], cat:"web", repo:"day-17-dice-roller" },
  { day:18, name:"Password Checker", desc:"Live strength meter with generator.", tags:["js"], cat:"web", repo:"day-18-password-checker" },
  { day:19, name:"Expense Tracker", desc:"Track income and expenses by category.", tags:["js"], cat:"web", repo:"day-19-expense-tracker" },
  { day:20, name:"GitHub Profile Generator", desc:"Generate profile README instantly.", tags:["js"], cat:"tool", repo:"day-20-github-profile-generator" },
  { day:21, name:"Sorting Visualizer", desc:"Animate 4 sorting algorithms.", tags:["js","dsa"], cat:"dsa", repo:"day-21-sorting-visualizer" },
  { day:22, name:"Binary Search Visualizer", desc:"Step by step search animation.", tags:["js","dsa"], cat:"dsa", repo:"day-22-binary-search-visualizer" },
  { day:23, name:"Stack & Queue Visualizer", desc:"Animate push, pop, enqueue, dequeue.", tags:["js","dsa"], cat:"dsa", repo:"day-23-stack-queue-visualizer" },
  { day:24, name:"Linked List Visualizer", desc:"Insert, delete and search nodes.", tags:["js","dsa"], cat:"dsa", repo:"day-24-linked-list-visualizer" },
  { day:25, name:"LeetCode Easy × 10", desc:"10 Easy problems with explanations.", tags:["python","dsa"], cat:"dsa", repo:"day-25-leetcode-easy" },
  { day:26, name:"File Organizer", desc:"Auto-sort files by type with dry run.", tags:["python"], cat:"python", repo:"day-26-file-organizer" },
  { day:27, name:"Web Scraper", desc:"Scrape quotes to CSV and JSON.", tags:["python"], cat:"python", repo:"day-27-web-scraper" },
  { day:28, name:"Public API Explorer", desc:"NASA, crypto, jokes and more.", tags:["js","api"], cat:"api", repo:"day-28-api-explorer" },
  { day:29, name:"Currency Converter", desc:"Live rates for 30+ currencies.", tags:["js","api"], cat:"api", repo:"day-29-currency-converter" },
  { day:30, name:"Portfolio V2", desc:"Phase 1 complete portfolio.", tags:["html","css","js"], cat:"web", repo:"day-30-portfolio-v2" },
  { day:31, name:"News Fetcher", desc:"Live headlines from GNews API.", tags:["js","api"], cat:"api", repo:"day-31-news-fetcher" },
  { day:32, name:"Chatbot", desc:"Rule-based chatbot with 50+ intents.", tags:["js"], cat:"web", repo:"day-32-chatbot" },
  { day:33, name:"CSV Analyzer", desc:"Auto stats and charts from any CSV.", tags:["python"], cat:"python", repo:"day-33-csv-analyzer" },
  { day:34, name:"Password Manager", desc:"AES encrypted CLI password manager.", tags:["python"], cat:"python", repo:"day-34-password-manager" },
  { day:35, name:"Regex Validator", desc:"Live regex with 20 common patterns.", tags:["js"], cat:"web", repo:"day-35-regex-validator" },
  { day:36, name:"Flask Todo App", desc:"Full stack REST API todo with SQLite.", tags:["flask","python"], cat:"flask", repo:"day-36-flask-todo-app" },
  { day:37, name:"Budget Tracker", desc:"Full stack budget app with charts.", tags:["flask","python"], cat:"flask", repo:"day-37-budget-tracker" },
  { day:38, name:"Expense Splitter", desc:"Split bills with settlement calc.", tags:["js"], cat:"web", repo:"day-38-expense-splitter" },
  { day:39, name:"Markdown Blog", desc:"Static blog with tag filtering.", tags:["js"], cat:"web", repo:"day-39-markdown-blog" },
  { day:40, name:"Grade Tracker", desc:"NIT CGPA calculator with charts.", tags:["js"], cat:"web", repo:"day-40-grade-tracker" },
  { day:41, name:"Attendance System", desc:"CLI attendance tracker with CSV export.", tags:["python"], cat:"python", repo:"day-41-attendance-system" },
  { day:42, name:"Mechanical Calculator", desc:"Stress, torque, beam, thermal calcs.", tags:["js"], cat:"tool", repo:"day-42-mech-calculator" },
  { day:43, name:"Resume Website", desc:"Professional resume with print support.", tags:["html","css","js"], cat:"web", repo:"day-43-resume-website" },
  { day:44, name:"GitHub Automation", desc:"Automate GitHub tasks via API.", tags:["python","api"], cat:"api", repo:"day-44-github-automation" },
  { day:45, name:"Open Source Practice", desc:"First PR workflow guide.", tags:["git"], cat:"tool", repo:"day-45-open-source-practice" },
  { day:46, name:"Engineering Toolkit", desc:"Capstone: upgraded mech calculator.", tags:["js"], cat:"tool", repo:"day-46-engineering-toolkit" },
  { day:47, name:"Pomodoro + Todo", desc:"Integrated productivity app.", tags:["js"], cat:"web", repo:"day-47-pomodoro-todo" },
  { day:48, name:"Typing Speed Test", desc:"WPM and accuracy with personal best.", tags:["js"], cat:"web", repo:"day-48-typing-speed-test" },
  { day:49, name:"Flashcard App", desc:"Study decks with flip animation.", tags:["js"], cat:"web", repo:"day-49-flashcard-app" },
  { day:50, name:"GitHub Profile README", desc:"Profile README milestone day.", tags:["markdown"], cat:"tool", repo:"day-50-profile-readme" },
  { day:51, name:"Habit Tracker", desc:"Streaks and GitHub-style heatmap.", tags:["js"], cat:"web", repo:"day-51-habit-tracker" },
  { day:52, name:"Color Palette Generator", desc:"Generate palettes with lock + export.", tags:["js"], cat:"web", repo:"day-52-color-palette" },
  { day:53, name:"URL Shortener", desc:"Full stack URL shortener with QR codes.", tags:["flask","python"], cat:"flask", repo:"day-53-url-shortener" },
  { day:54, name:"Real Time Chat App", desc:"Flask + SocketIO multi-room chat.", tags:["flask","python"], cat:"flask", repo:"day-54-chat-app" },
  { day:55, name:"Data Dashboard", desc:"Chart.js dashboard with 3 datasets.", tags:["js"], cat:"web", repo:"day-55-data-dashboard" },
  { day:56, name:"LeetCode Medium × 10", desc:"10 Medium problems with patterns.", tags:["python","dsa"], cat:"dsa", repo:"day-56-leetcode-medium" },
  { day:57, name:"Markdown to PDF", desc:"CLI converter with themes.", tags:["python"], cat:"python", repo:"day-57-md-to-pdf" },
  { day:58, name:"Image Filter App", desc:"Canvas API filters with download.", tags:["js"], cat:"web", repo:"day-58-image-filter-app" },
  { day:59, name:"Finance Calculator", desc:"SIP, EMI, Tax and Retirement calcs.", tags:["js"], cat:"web", repo:"day-59-finance-calculator" },
  { day:60, name:"Portfolio V3", desc:"Phase 2 complete portfolio.", tags:["html","css","js"], cat:"web", repo:"day-60-portfolio-v3" }
];

let currentFilter = 'all';

function filterProjects(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const filtered = currentFilter === 'all'
    ? projects
    : projects.filter(p => p.cat === currentFilter);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="project-day">Day ${String(p.day).padStart(2,'0')}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <a href="https://github.com/kishalayasarangi/${p.repo}"
         target="_blank" class="project-link">View on GitHub →</a>
    </div>`).join('');
}

// Navbar
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 50 ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.95)';
});

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('open');
  });
});

window.onload = () => renderProjects();