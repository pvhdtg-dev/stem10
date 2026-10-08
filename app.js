// STEM 10 - Application Logic (Pure JavaScript)

let currentSubject = 'all';
let currentView = 'home';
let activeModalChapter = null;
let currentModalTab = 'theory';
let currentRandomQuizQuestions = [];
let userQuizAnswers = {};

document.addEventListener('DOMContentLoaded', () => {
  renderMainCards();
  lucide.createIcons();

  // Search input handler
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
    filterMainCards(query, currentSubject);
  });
});

function clearSearchInput() {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = '';
  document.getElementById('clearSearch').classList.add('hidden');
  filterMainCards('', currentSubject);
}

// Chuyển môn học
function setSubject(subj) {
  currentSubject = subj;

  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.className = "tab-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-400 border border-slate-800/80 hover:text-slate-200 transition whitespace-nowrap";
  });

  const activeBtn = document.getElementById(`tab-${subj}`);
  if (activeBtn) {
    activeBtn.className = "tab-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-sm transition whitespace-nowrap";
  }

  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  if (currentView === 'home') {
    filterMainCards(query, subj);
  } else if (currentView === 'formulas') {
    renderFormulasView();
  }
}

// Chuyển view từ thanh Navigation đáy
function switchView(viewName) {
  currentView = viewName;

  document.querySelectorAll('.bnav-btn').forEach(btn => {
    btn.className = "bnav-btn flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200 transition";
  });

  const activeBtn = document.getElementById(`bnav-${viewName}`);
  if (activeBtn) {
    activeBtn.className = "bnav-btn flex flex-col items-center gap-1 text-indigo-400 font-semibold transition";
  }

  if (viewName === 'home') {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    filterMainCards(query, currentSubject);
  } else if (viewName === 'formulas') {
    renderFormulasView();
  }
}

// Lọc thẻ
function filterMainCards(query, subject) {
  let filtered = CHAPTERS_DATA;

  if (subject !== 'all') {
    filtered = filtered.filter(item => item.subject === subject);
  }

  if (query) {
    filtered = filtered.filter(item => 
      item.chapterTitle.toLowerCase().includes(query) ||
      item.chapterNumber.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.keywords.some(kw => kw.toLowerCase().includes(query))
    );
  }

  renderChapterList(filtered);
}

function renderMainCards() {
  filterMainCards('', currentSubject);
}

// Render danh sách chương học
function renderChapterList(data) {
  const container = document.getElementById('mainContainer');

  if (data.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-slate-500 space-y-2">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto opacity-50"></i>
        <p class="text-xs">Không tìm thấy bài học nào phù hợp</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = data.map(item => `
    <div onclick="openLessonModal('${item.id}')" 
         class="p-4 bg-slate-900/80 border border-slate-800/80 rounded-2xl hover:border-slate-700 active:scale-[0.98] transition cursor-pointer shadow-lg space-y-2.5">
      <div class="flex justify-between items-center">
        <span class="text-[10px] px-2.5 py-0.5 rounded-full font-bold border ${item.badgeColor}">
          ${item.subjectName} • ${item.chapterNumber}
        </span>
        <span class="text-[11px] text-indigo-400 flex items-center gap-1 font-medium">
          Xem chi tiết <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>

      <h3 class="font-bold text-slate-100 text-sm leading-snug">${item.chapterTitle}</h3>
      <p class="text-xs text-slate-400 leading-relaxed line-clamp-2">${item.summary}</p>

      <!-- Key formula preview -->
      <div class="p-2 bg-slate-950/80 rounded-xl text-xs text-indigo-200 border border-slate-800/70 overflow-x-auto no-scrollbar">
        ${item.keyFormulas[0]?.formula || ''}
      </div>

      <!-- Quick indicators -->
      <div class="flex items-center gap-3 text-[11px] text-slate-500 pt-1 border-t border-slate-800/60">
        <span class="flex items-center gap-1"><i data-lucide="book" class="w-3 h-3 text-blue-400"></i> Lý thuyết</span>
        <span class="flex items-center gap-1"><i data-lucide="zap" class="w-3 h-3 text-amber-400"></i> Dạng bài</span>
        <span class="flex items-center gap-1"><i data-lucide="help-circle" class="w-3 h-3 text-purple-400"></i> ${item.quizzes.length} câu trắc nghiệm</span>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
  renderMath(container);
}

// Render View Tra Cứu Công Thức Bỏ Túi
function renderFormulasView() {
  const container = document.getElementById('mainContainer');
  let data = CHAPTERS_DATA;
  if (currentSubject !== 'all') {
    data = data.filter(i => i.subject === currentSubject);
  }

  container.innerHTML = `
    <div class="space-y-4">
      <div class="p-3.5 bg-gradient-to-r from-indigo-950/70 to-purple-950/70 border border-indigo-800/40 rounded-2xl flex items-center gap-3">
        <div class="p-2 bg-indigo-600/30 text-indigo-400 rounded-xl">
          <i data-lucide="sigma" class="w-5 h-5"></i>
        </div>
        <div>
          <h2 class="text-sm font-bold text-white">Sổ Tay Công Thức Bỏ Túi</h2>
          <p class="text-[11px] text-slate-400">Tổng hợp toàn bộ công thức trọng tâm Lớp 10</p>
        </div>
      </div>

      ${data.map(item => `
        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800/80 pb-2">
            <span class="text-xs font-bold text-slate-200">${item.chapterNumber}: ${item.chapterTitle}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${item.badgeColor}">${item.subjectName}</span>
          </div>
          <div class="space-y-2">
            ${item.keyFormulas.map(f => `
              <div class="p-2.5 bg-slate-950 rounded-xl border border-slate-800/60">
                <span class="text-[10px] text-slate-400 block font-medium mb-0.5">${f.name}:</span>
                <div class="text-xs text-indigo-200 overflow-x-auto no-scrollbar">${f.formula}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  lucide.createIcons();
  renderMath(container);
}

// Mở Modal xem chi tiết Bài học
function openLessonModal(chapterId) {
  const chapter = CHAPTERS_DATA.find(c => c.id === chapterId);
  if (!chapter) return;

  activeModalChapter = chapter;
  currentModalTab = 'theory';

  document.getElementById('modalSubjectBadge').innerHTML = `
    <span class="text-[11px] px-3 py-1 rounded-full font-bold border ${chapter.badgeColor}">
      ${chapter.subjectName} • ${chapter.chapterNumber}: ${chapter.chapterTitle}
    </span>
  `;

  switchModalTab('theory');
  document.getElementById('lessonModal').classList.remove('hidden');
}

function closeLessonModal() {
  document.getElementById('lessonModal').classList.add('hidden');
  activeModalChapter = null;
}

// Chuyển tab trong Modal
function switchModalTab(tabName) {
  currentModalTab = tabName;

  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.className = "modal-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-200 whitespace-nowrap transition";
  });

  const activeBtn = document.getElementById(`mtab-${tabName}`);
  if (activeBtn) {
    activeBtn.className = "modal-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white whitespace-nowrap transition";
  }

  const modalBody = document.getElementById('modalBody');
  if (!activeModalChapter) return;

  if (tabName === 'theory') {
    modalBody.innerHTML = `
      <div class="space-y-4">
        <h3 class="text-sm font-bold text-white flex items-center gap-1.5">
          <i data-lucide="book-open" class="w-4 h-4 text-blue-400"></i> Lý Thuyết Tổng Hợp
        </h3>
        ${activeModalChapter.theoryHtml}
      </div>
    `;
  } else if (tabName === 'methods') {
    modalBody.innerHTML = `
      <div class="space-y-4">
        <h3 class="text-sm font-bold text-white flex items-center gap-1.5">
          <i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Các Dạng Bài Tập & Phương Pháp Giải
        </h3>
        ${activeModalChapter.methodsHtml}
      </div>
    `;
  } else if (tabName === 'essays') {
    modalBody.innerHTML = `
      <div class="space-y-4">
        <h3 class="text-sm font-bold text-white flex items-center gap-1.5">
          <i data-lucide="pen-tool" class="w-4 h-4 text-emerald-400"></i> Tuyển Tập Bài Tập Tự Luận
        </h3>
        ${activeModalChapter.essaysHtml}
      </div>
    `;
  } else if (tabName === 'quizzes') {
    renderChapterQuizzes(activeModalChapter.quizzes, modalBody);
  }

  lucide.createIcons();
  renderMath(modalBody);
}

// Render danh sách câu hỏi trắc nghiệm của 1 chương
function renderChapterQuizzes(quizzes, container) {
  if (!quizzes || quizzes.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500 py-6 text-center">Đang cập nhật câu hỏi trắc nghiệm...</p>`;
    return;
  }

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <h3 class="text-sm font-bold text-white flex items-center gap-1.5">
          <i data-lucide="award" class="w-4 h-4 text-purple-400"></i> Trắc Nghiệm Tự Luyện (${quizzes.length} câu)
        </h3>
      </div>
      <div class="space-y-4">
        ${quizzes.map((q, idx) => `
          <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3" id="qcard-${q.id}">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-indigo-400">Câu ${idx + 1}</span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-semibold">${q.level}</span>
            </div>
            <p class="text-xs text-slate-200 leading-relaxed">${q.question}</p>
            <div class="space-y-1.5">
              ${q.options.map((opt, optIdx) => `
                <button onclick="selectOption('${q.id}', ${optIdx}, ${q.answer})" 
                        id="opt-${q.id}-${optIdx}"
                        class="quiz-option w-full text-left p-2.5 rounded-xl border border-slate-800 bg-slate-900/90 text-xs text-slate-300 hover:border-slate-700 transition flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">${String.fromCharCode(65 + optIdx)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
            <div id="expl-${q.id}" class="hidden p-3 bg-indigo-950/40 border border-indigo-800/40 rounded-xl text-xs text-indigo-200 space-y-1">
              <span class="font-bold text-indigo-300">💡 Giải thích chi tiết:</span>
              <p>${q.explanation}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Xử lý chọn đáp án tức thì trong bài học
function selectOption(quizId, selectedIdx, correctIdx) {
  const options = document.querySelectorAll(`[id^="opt-${quizId}-"]`);
  options.forEach((opt, idx) => {
    opt.onclick = null; // Khóa không cho bấm lại
    if (idx === correctIdx) {
      opt.className = "quiz-option correct w-full text-left p-2.5 rounded-xl border bg-emerald-950/40 border-emerald-600 text-xs text-emerald-200 flex items-center gap-2";
    } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
      opt.className = "quiz-option wrong w-full text-left p-2.5 rounded-xl border bg-rose-950/40 border-rose-600 text-xs text-rose-200 flex items-center gap-2";
    }
  });

  const expl = document.getElementById(`expl-${quizId}`);
  if (expl) expl.classList.remove('hidden');

  renderMath(document.getElementById(`qcard-${quizId}`));
}

// ================= RANDOM QUIZ GENERATOR (TRỘN ĐỀ THI) =================
function openRandomQuiz() {
  generateNewQuiz();
  document.getElementById('randomQuizModal').classList.remove('hidden');
}

function closeRandomQuizModal() {
  document.getElementById('randomQuizModal').classList.add('hidden');
}

function generateNewQuiz() {
  userQuizAnswers = {};

  // Thu thập toàn bộ câu hỏi từ các chương
  let allQuizzes = [];
  CHAPTERS_DATA.forEach(chap => {
    if (currentSubject === 'all' || chap.subject === currentSubject) {
      chap.quizzes.forEach(q => {
        allQuizzes.push({ ...q, chapterTitle: chap.chapterTitle, subjectName: chap.subjectName });
      });
    }
  });

  // Trộn ngẫu nhiên (Fisher-Yates shuffle) và lấy tối đa 5 câu
  allQuizzes.sort(() => Math.random() - 0.5);
  currentRandomQuizQuestions = allQuizzes.slice(0, 5);

  document.getElementById('quizMetaCount').innerText = `${currentRandomQuizQuestions.length} câu hỏi ngẫu nhiên (${currentSubject === 'all' ? 'Tổng hợp 3 môn' : currentSubject.toUpperCase()})`;

  const quizBody = document.getElementById('randomQuizBody');
  quizBody.innerHTML = currentRandomQuizQuestions.map((q, idx) => `
    <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3" id="rq-card-${q.id}">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-purple-400">Câu ${idx + 1}</span>
        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-semibold">${q.subjectName} • ${q.level}</span>
      </div>
      <p class="text-xs text-slate-200 leading-relaxed">${q.question}</p>
      <div class="space-y-1.5">
        ${q.options.map((opt, optIdx) => `
          <button onclick="selectRandomQuizOption('${q.id}', ${optIdx})" 
                  id="rq-opt-${q.id}-${optIdx}"
                  class="quiz-option w-full text-left p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-xs text-slate-300 hover:border-slate-700 transition flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">${String.fromCharCode(65 + optIdx)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="rq-expl-${q.id}" class="hidden p-3 bg-indigo-950/40 border border-indigo-800/40 rounded-xl text-xs text-indigo-200 space-y-1">
        <span class="font-bold text-indigo-300">💡 Lời giải chi tiết:</span>
        <p>${q.explanation}</p>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
  renderMath(quizBody);
}

function selectRandomQuizOption(quizId, optIdx) {
  userQuizAnswers[quizId] = optIdx;

  // Cập nhật giao diện chọn
  const options = document.querySelectorAll(`[id^="rq-opt-${quizId}-"]`);
  options.forEach((opt, idx) => {
    if (idx === optIdx) {
      opt.className = "quiz-option selected w-full text-left p-2.5 rounded-xl border border-indigo-500 bg-indigo-950/30 text-xs text-indigo-200 flex items-center gap-2";
    } else {
      opt.className = "quiz-option w-full text-left p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-xs text-slate-400 flex items-center gap-2";
    }
  });
}

function submitQuizAnswers() {
  let score = 0;
  currentRandomQuizQuestions.forEach(q => {
    const userChoice = userQuizAnswers[q.id];
    const isCorrect = userChoice === q.answer;
    if (isCorrect) score++;

    const options = document.querySelectorAll(`[id^="rq-opt-${q.id}-"]`);
    options.forEach((opt, idx) => {
      opt.onclick = null;
      if (idx === q.answer) {
        opt.className = "quiz-option correct w-full text-left p-2.5 rounded-xl border bg-emerald-950/40 border-emerald-600 text-xs text-emerald-200 flex items-center gap-2";
      } else if (idx === userChoice && !isCorrect) {
        opt.className = "quiz-option wrong w-full text-left p-2.5 rounded-xl border bg-rose-950/40 border-rose-600 text-xs text-rose-200 flex items-center gap-2";
      }
    });

    const expl = document.getElementById(`rq-expl-${q.id}`);
    if (expl) expl.classList.remove('hidden');
  });

  const total = currentRandomQuizQuestions.length;
  alert(`🎉 Bạn đạt được ${score}/${total} điểm (${(score / total * 10).toFixed(1)} / 10)!\nHãy cuộn xuống để xem lời giải chi tiết từng câu.`);
}

// Utility render KaTeX an toàn
function renderMath(element) {
  if (window.renderMathInElement && element) {
    renderMathInElement(element, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}
