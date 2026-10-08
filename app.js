// STEM 10 Pocket - Complete Application Logic (Pure JavaScript)

let currentSubject = 'all';
let currentView = 'home';
let activeModalChapter = null;
let currentModalTab = 'theory';

// Exam State
let examQuestions = [];
let examUserAnswers = [];
let examSubmitted = false;
let examSize = 20;
let examSubjectFilter = 'all';
let examCode = 'STEM10';
let allExamSolutionsShown = false;

document.addEventListener('DOMContentLoaded', () => {
  renderCurrentView();
  lucide.createIcons();

  // Live search handler
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }

    if (currentView === 'home') {
      filterMainCards(query, currentSubject);
    }
  });
});

function clearSearchInput() {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = '';
  document.getElementById('clearSearch').classList.add('hidden');
  if (currentView === 'home') {
    filterMainCards('', currentSubject);
  }
}

// Chuyển Môn học
function setSubject(subj) {
  currentSubject = subj;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.className = "tab-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-400 border border-slate-800/80 hover:text-slate-200 transition whitespace-nowrap";
  });

  const activeBtn = document.getElementById(`tab-${subj}`);
  if (activeBtn) {
    activeBtn.className = "tab-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-sm transition whitespace-nowrap";
  }

  if (currentView === 'home') {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    filterMainCards(query, subj);
  } else if (currentView === 'formulas') {
    renderFormulasView();
  } else if (currentView === 'exam') {
    examSubjectFilter = subj;
    generateNewExam();
  }
}

// Chuyển View chính (Home / Formulas / Exam)
function switchView(viewName) {
  currentView = viewName;

  document.querySelectorAll('.bnav-btn').forEach(btn => {
    btn.className = "bnav-btn flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200 transition";
  });

  const activeBtn = document.getElementById(`bnav-${viewName}`);
  if (activeBtn) {
    activeBtn.className = "bnav-btn flex flex-col items-center gap-1 text-indigo-400 font-bold transition";
  }

  renderCurrentView();
}

function renderCurrentView() {
  const searchInput = document.getElementById('searchInput');
  if (currentView === 'home') {
    filterMainCards(searchInput.value.toLowerCase().trim(), currentSubject);
  } else if (currentView === 'formulas') {
    renderFormulasView();
  } else if (currentView === 'exam') {
    renderExamView();
  }
}

// =========================================================================
// ==================== VIEW 1: DANH SÁCH CHƯƠNG HỌC =======================
// =========================================================================
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
        <span class="text-[11px] text-indigo-400 flex items-center gap-1 font-semibold">
          Chi tiết <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>

      <h3 class="font-bold text-slate-100 text-sm leading-snug">${item.chapterTitle}</h3>
      <p class="text-xs text-slate-400 leading-relaxed line-clamp-2">${item.summary}</p>

      <div class="p-2 bg-slate-950/80 rounded-xl text-xs text-indigo-200 border border-slate-800/70 overflow-x-auto no-scrollbar">
        ${item.keyFormulas[0]?.formula || ''}
      </div>

      <div class="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
        <span class="flex items-center gap-1"><i data-lucide="book" class="w-3 h-3 text-blue-400"></i> Lý thuyết</span>
        <span class="flex items-center gap-1"><i data-lucide="zap" class="w-3 h-3 text-amber-400"></i> Dạng bài</span>
        <span class="flex items-center gap-1 font-semibold text-purple-300"><i data-lucide="award" class="w-3 h-3 text-purple-400"></i> ${item.quizzes.length} câu trắc nghiệm</span>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
  renderMath(container);
}

// =========================================================================
// =================== VIEW 2: SỔ TAY CÔNG THỨC BỎ TÚI =====================
// =========================================================================
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

// =========================================================================
// ================== VIEW 3: HỆ THỐNG LUYỆN ĐỀ TRẮC NGHIỆM =================
// =========================================================================
function generateExamCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function renderExamView() {
  if (examQuestions.length === 0) {
    generateNewExam();
    return;
  }

  const container = document.getElementById('mainContainer');
  const total = examQuestions.length;
  const answered = examUserAnswers.filter(a => a !== null).length;
  const progressPercent = Math.round((answered / total) * 100);

  container.innerHTML = `
    <div class="space-y-4">
      
      <!-- Exam Banner & Code -->
      <div class="p-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 border border-indigo-800/50 rounded-2xl space-y-2.5 shadow-xl relative overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="p-1.5 bg-indigo-600 text-white rounded-lg text-xs">
              <i data-lucide="award" class="w-4 h-4"></i>
            </span>
            <h2 class="text-sm font-bold text-white">Đề Thi Trắc Nghiệm Ngẫu Nhiên</h2>
          </div>
          <span class="text-xs px-2.5 py-1 bg-white/10 text-indigo-200 border border-white/20 rounded-full font-mono font-bold tracking-wider">
            Mã đề: ${examCode}
          </span>
        </div>

        <!-- Size & Action Bar -->
        <div class="flex items-center justify-between pt-1 gap-2">
          <div class="flex gap-1.5 text-xs">
            <button onclick="setExamSize(10)" class="px-2.5 py-1 rounded-lg ${examSize === 10 ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}">10 câu</button>
            <button onclick="setExamSize(20)" class="px-2.5 py-1 rounded-lg ${examSize === 20 ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}">20 câu</button>
            <button onclick="setExamSize(50)" class="px-2.5 py-1 rounded-lg ${examSize === 50 ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}">Tất cả</button>
          </div>
          <button onclick="generateNewExam()" class="text-xs px-3 py-1 bg-slate-800 hover:bg-slate-700 text-indigo-300 rounded-lg flex items-center gap-1 font-semibold transition">
            <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i>
            <span>Đổi đề</span>
          </button>
        </div>
      </div>

      <!-- Live Stats Bar -->
      <div class="grid grid-cols-4 gap-2 bg-slate-900/90 p-3 rounded-2xl border border-slate-800 text-center text-xs">
        <div>
          <div class="text-[10px] text-slate-400 uppercase font-semibold">Tổng câu</div>
          <div class="text-base font-bold text-white" id="statTotal">${total}</div>
        </div>
        <div>
          <div class="text-[10px] text-slate-400 uppercase font-semibold">Đã làm</div>
          <div class="text-base font-bold text-indigo-400" id="statAnswered">${answered}</div>
        </div>
        <div>
          <div class="text-[10px] text-slate-400 uppercase font-semibold">Đúng</div>
          <div class="text-base font-bold text-emerald-400" id="statCorrect">0</div>
        </div>
        <div>
          <div class="text-[10px] text-slate-400 uppercase font-semibold">Sai</div>
          <div class="text-base font-bold text-rose-400" id="statWrong">0</div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
        <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" style="width: ${progressPercent}%;" id="examProgressBar"></div>
      </div>

      <!-- Toggle All Solutions Button -->
      <div class="flex justify-between items-center px-1">
        <span class="text-[11px] text-slate-400 font-medium">Bấm vào câu hỏi để chọn đáp án:</span>
        <button onclick="toggleAllExamSolutions()" class="text-[11px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-600/30 transition">
          <i data-lucide="lightbulb" class="w-3 h-3"></i>
          <span id="toggleAllBtnText">Xem tất cả lời giải</span>
        </button>
      </div>

      <!-- Question List -->
      <div class="space-y-4" id="examQuestionList">
        ${examQuestions.map((item, idx) => {
          const userChoice = examUserAnswers[idx];
          const labels = ['A', 'B', 'C', 'D'];
          return `
            <div class="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3" id="exam-q-${idx}">
              <div class="flex items-start gap-2.5">
                <span class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ${idx + 1}
                </span>
                <div class="flex-1">
                  <div class="text-xs text-slate-200 leading-relaxed font-medium">
                    ${item.q}
                  </div>
                  <div class="flex gap-1.5 mt-1.5">
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 font-semibold">${item.subjectName}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400">${item.topic}</span>
                  </div>
                </div>
              </div>

              <!-- Options -->
              <div class="space-y-1.5 pt-1">
                ${item.options.map((opt, optIdx) => `
                  <div onclick="selectExamOption(${idx}, ${optIdx})" 
                       id="exam-opt-${idx}-${optIdx}"
                       class="quiz-option p-2.5 rounded-xl border border-slate-800/90 bg-slate-950/70 text-xs text-slate-300 flex items-center gap-2.5">
                    <input type="radio" name="exam_q_${idx}" id="exam_radio_${idx}_${optIdx}" class="accent-indigo-500 pointer-events-none" ${userChoice === optIdx ? 'checked' : ''} />
                    <label class="pointer-events-none flex-1 leading-snug">
                      <strong class="text-slate-400 mr-1">${labels[optIdx]}.</strong> ${opt}
                    </label>
                  </div>
                `).join('')}
              </div>

              <!-- Toggle Solution Button -->
              <button class="solution-toggle" onclick="toggleSingleSolution(${idx})" id="sol-btn-${idx}">
                💡 Xem lời giải
              </button>

              <!-- Solution Explanation Box (Hidden by default) -->
              <div class="explanation" id="exp-${idx}">
                <div class="font-bold text-amber-400 mb-1 flex items-center gap-1">
                  <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i>
                  <span>Đáp án đúng: ${labels[item.answer]}</span>
                </div>
                <div class="text-slate-300">${item.explanation}</div>
              </div>

            </div>
          `;
        }).join('')}
      </div>

      <!-- Action Bottom Bar -->
      <div class="sticky bottom-16 z-20 bg-slate-950/95 backdrop-blur-md p-3 rounded-2xl border border-slate-800 flex gap-2 shadow-2xl">
        <button onclick="generateNewExam()" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1">
          <i data-lucide="shuffle" class="w-3.5 h-3.5"></i>
          <span>Đổi đề khác</span>
        </button>
        <button onclick="submitExam()" class="flex-1 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white rounded-xl text-xs font-bold shadow-lg transition">
          📊 Nộp bài & Chấm điểm
        </button>
      </div>

    </div>
  `;

  lucide.createIcons();
  renderMath(container);
}

function setExamSize(size) {
  examSize = size;
  generateNewExam();
}

function generateNewExam() {
  examSubmitted = false;
  allExamSolutionsShown = false;
  examCode = generateExamCode();

  // Aggregate all quizzes based on filter
  let pool = [];
  CHAPTERS_DATA.forEach(chap => {
    if (examSubjectFilter === 'all' || chap.subject === examSubjectFilter) {
      chap.quizzes.forEach(q => {
        pool.push({
          ...q,
          subjectName: chap.subjectName,
          chapterTitle: chap.chapterTitle
        });
      });
    }
  });

  // Shuffle and slice
  pool.sort(() => Math.random() - 0.5);
  examQuestions = pool.slice(0, Math.min(examSize, pool.length));
  examUserAnswers = new Array(examQuestions.length).fill(null);

  renderExamView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectExamOption(qIdx, optIdx) {
  if (examSubmitted) return;

  examUserAnswers[qIdx] = optIdx;

  // Update UI selection
  const options = document.querySelectorAll(`[id^="exam-opt-${qIdx}-"]`);
  options.forEach((opt, i) => {
    const radio = opt.querySelector('input');
    if (i === optIdx) {
      opt.className = "quiz-option selected p-2.5 rounded-xl border border-indigo-500 bg-indigo-950/40 text-xs text-indigo-100 flex items-center gap-2.5 font-medium";
      if (radio) radio.checked = true;
    } else {
      opt.className = "quiz-option p-2.5 rounded-xl border border-slate-800/90 bg-slate-950/70 text-xs text-slate-300 flex items-center gap-2.5";
      if (radio) radio.checked = false;
    }
  });

  // Update live progress
  const answered = examUserAnswers.filter(a => a !== null).length;
  const total = examQuestions.length;
  document.getElementById('statAnswered').innerText = answered;
  document.getElementById('examProgressBar').style.width = `${Math.round((answered / total) * 100)}%`;
}

function toggleSingleSolution(qIdx) {
  const expDiv = document.getElementById(`exp-${qIdx}`);
  const btn = document.getElementById(`sol-btn-${qIdx}`);
  if (!expDiv || !btn) return;

  expDiv.classList.toggle('show');
  if (expDiv.classList.contains('show')) {
    btn.innerHTML = '🔼 Ẩn lời giải';
    btn.classList.add('active');
  } else {
    btn.innerHTML = '💡 Xem lời giải';
    btn.classList.remove('active');
  }
}

function toggleAllExamSolutions() {
  allExamSolutionsShown = !allExamSolutionsShown;
  examQuestions.forEach((_, idx) => {
    const expDiv = document.getElementById(`exp-${idx}`);
    const btn = document.getElementById(`sol-btn-${idx}`);
    if (expDiv && btn) {
      if (allExamSolutionsShown) {
        expDiv.classList.add('show');
        btn.innerHTML = '🔼 Ẩn lời giải';
        btn.classList.add('active');
      } else {
        expDiv.classList.remove('show');
        btn.innerHTML = '💡 Xem lời giải';
        btn.classList.remove('active');
      }
    }
  });

  const toggleBtn = document.getElementById('toggleAllBtnText');
  if (toggleBtn) {
    toggleBtn.innerText = allExamSolutionsShown ? 'Ẩn tất cả lời giải' : 'Xem tất cả lời giải';
  }
}

function submitExam() {
  if (examSubmitted) return;

  const unanswered = examUserAnswers.filter(a => a === null).length;
  if (unanswered > 0) {
    if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài?`)) {
      return;
    }
  }

  examSubmitted = true;
  let correct = 0;
  let wrong = 0;

  examQuestions.forEach((item, idx) => {
    const userChoice = examUserAnswers[idx];
    const isCorrect = userChoice === item.answer;

    if (isCorrect) {
      correct++;
    } else {
      wrong++;
    }

    // Update options style
    const options = document.querySelectorAll(`[id^="exam-opt-${idx}-"]`);
    options.forEach((opt, optIdx) => {
      opt.classList.add('disabled');
      if (optIdx === item.answer) {
        opt.className = "quiz-option correct p-2.5 rounded-xl border bg-emerald-950/40 border-emerald-500 text-xs text-emerald-200 flex items-center gap-2.5 font-semibold";
      } else if (optIdx === userChoice && !isCorrect) {
        opt.className = "quiz-option wrong p-2.5 rounded-xl border bg-rose-950/40 border-rose-500 text-xs text-rose-200 flex items-center gap-2.5";
      }
    });

    // Automatically expand explanation for incorrect answers
    if (!isCorrect) {
      const expDiv = document.getElementById(`exp-${idx}`);
      const btn = document.getElementById(`sol-btn-${idx}`);
      if (expDiv && btn) {
        expDiv.classList.add('show');
        btn.innerHTML = '🔼 Ẩn lời giải';
        btn.classList.add('active');
      }
    }
  });

  document.getElementById('statCorrect').innerText = correct;
  document.getElementById('statWrong').innerText = wrong;

  // Show Result Modal
  showResultModal(correct, wrong, examQuestions.length);
}

function showResultModal(correct, wrong, total) {
  const percent = Math.round((correct / total) * 100);
  document.getElementById('resultScore').innerText = `${correct}/${total} (${(correct / total * 10).toFixed(1)} đ)`;
  document.getElementById('finalCorrect').innerText = correct;
  document.getElementById('finalWrong').innerText = wrong;
  document.getElementById('finalPercent').innerText = `${percent}%`;

  let emoji = '🎉';
  let msg = 'Rất tốt! Bạn nắm kiến thức khá vững!';
  if (percent === 100) {
    emoji = '🏆';
    msg = 'Xuất sắc tuyệt đối! Điểm 10 hoàn hảo!';
  } else if (percent >= 80) {
    emoji = '🎉';
    msg = 'Giỏi lắm! Bạn hiểu bài rất chắc chắn!';
  } else if (percent >= 50) {
    emoji = '😊';
    msg = 'Khá ổn! Hãy xem lại các câu sai để ghi nhớ nhé!';
  } else {
    emoji = '💪';
    msg = 'Cố gắng lên! Hãy đọc lại phần lý thuyết và làm lại đề mới.';
  }

  document.getElementById('resultEmoji').innerText = emoji;
  document.getElementById('resultMessage').innerText = msg;
  document.getElementById('resultModal').classList.remove('hidden');
}

function closeResultModal() {
  document.getElementById('resultModal').classList.add('hidden');
}

// =========================================================================
// ==================== MODAL XEM CHI TIẾT BÀI HỌC =========================
// =========================================================================
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
    modalBody.innerHTML = `
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-sm font-bold text-white flex items-center gap-1.5">
            <i data-lucide="award" class="w-4 h-4 text-purple-400"></i> Trắc Nghiệm Tự Luyện (${activeModalChapter.quizzes.length} câu)
          </h3>
        </div>
        <div class="space-y-4">
          ${activeModalChapter.quizzes.map((q, idx) => `
            <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3" id="qcard-${q.id}">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-indigo-400">Câu ${idx + 1}</span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-semibold">${q.level || 'TH'}</span>
              </div>
              <p class="text-xs text-slate-200 leading-relaxed">${q.q}</p>
              <div class="space-y-1.5">
                ${q.options.map((opt, optIdx) => `
                  <button onclick="selectModalQuizOption('${q.id}', ${optIdx}, ${q.answer})" 
                          id="opt-${q.id}-${optIdx}"
                          class="quiz-option w-full text-left p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-xs text-slate-300 hover:border-slate-700 transition flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">${String.fromCharCode(65 + optIdx)}</span>
                    <span>${opt}</span>
                  </button>
                `).join('')}
              </div>
              <div id="expl-${q.id}" class="hidden p-3 bg-indigo-950/40 border border-indigo-800/40 rounded-xl text-xs text-indigo-200 space-y-1">
                <span class="font-bold text-indigo-300">💡 Lời giải chi tiết:</span>
                <p>${q.explanation}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  lucide.createIcons();
  renderMath(modalBody);
}

function selectModalQuizOption(quizId, selectedIdx, correctIdx) {
  const options = document.querySelectorAll(`[id^="opt-${quizId}-"]`);
  options.forEach((opt, idx) => {
    opt.onclick = null;
    if (idx === correctIdx) {
      opt.className = "quiz-option correct w-full text-left p-2.5 rounded-xl border bg-emerald-950/40 border-emerald-600 text-xs text-emerald-200 flex items-center gap-2 font-semibold";
    } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
      opt.className = "quiz-option wrong w-full text-left p-2.5 rounded-xl border bg-rose-950/40 border-rose-600 text-xs text-rose-200 flex items-center gap-2";
    }
  });

  const expl = document.getElementById(`expl-${quizId}`);
  if (expl) expl.classList.remove('hidden');

  renderMath(document.getElementById(`qcard-${quizId}`));
}

// =========================================================================
// ========================== UTILITY: RENDER KATEX ========================
// =========================================================================
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
