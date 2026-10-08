// STEM 10 - DATA REPOSITORY (Toán - Lý - Hóa Lớp 10 GDPT 2018)

const CHAPTERS_DATA = [
  // ================= TOÁN 10 =================
  {
    id: "toan-c1",
    subject: "toan",
    subjectName: "Toán 10",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800",
    chapterNumber: "Chương 1",
    chapterTitle: "Mệnh đề & Tập hợp",
    summary: "Nền tảng tư duy logic, mệnh đề phủ định, kéo theo, các phép toán giao, hợp, hiệu trên tập số thực $\\mathbb{R}$.",
    keyFormulas: [
      { name: "Phủ định $\\forall, \\exists$", formula: "$$\\overline{\\forall x \\in X, P(x)} \\iff \\exists x \\in X, \\overline{P(x)}$$" },
      { name: "Số tập con", formula: "$$\\text{Số tập con của tập } n \\text{ phần tử} = 2^n$$" },
      { name: "Phép toán tập hợp", formula: "$$A \\cap B, \\quad A \\cup B, \\quad A \\setminus B, \\quad C_E A$$" }
    ],
    theoryHtml: `
      <div class="space-y-3.5 text-xs text-slate-300 leading-relaxed">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
          <h4 class="font-bold text-blue-400 text-sm">1. Mệnh đề logic & Phủ định</h4>
          <p>• <strong>Mệnh đề:</strong> Khẳng định chỉ có thể đúng hoặc sai, không thể vừa đúng vừa sai.</p>
          <p>• <strong>Mệnh đề phủ định ($\\overline{P}$):</strong> $\\overline{P}$ đúng khi $P$ sai, và ngược lại.</p>
          <p>• <strong>Mệnh đề kéo theo ($P \\Rightarrow Q$):</strong> Chỉ sai khi $P$ đúng mà $Q$ sai ($P$ là điều kiện đủ, $Q$ là điều kiện cần).</p>
        </div>
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
          <h4 class="font-bold text-blue-400 text-sm">2. Các phép toán trên tập hợp</h4>
          <p>• <strong>Giao ($A \\cap B$):</strong> $x \\in A$ và $x \\in B$.</p>
          <p>• <strong>Hợp ($A \\cup B$):</strong> $x \\in A$ hoặc $x \\in B$.</p>
          <p>• <strong>Hiệu ($A \\setminus B$):</strong> $x \\in A$ và $x \\notin B$.</p>
          <p>• <strong>Phần bù ($C_{\\mathbb{R}} A$):</strong> $\\mathbb{R} \\setminus A$.</p>
        </div>
        <div class="p-3 bg-amber-950/40 rounded-xl border border-amber-600/30 text-amber-200">
          ⚠️ <strong>Lưu ý:</strong> Phủ định của dấu "$>$" là "$\\le$" (không phải "$<$").
        </div>
      </div>
    `,
    methodsHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <h5 class="font-bold text-indigo-400 mb-1">Dạng 1: Phép toán trên trục số</h5>
          <p>Quy tắc 4 bước: Vẽ trục số $\\to$ Biểu diễn khoảng/đoạn $\\to$ Gạch bỏ phần không thuộc định nghĩa $\\to$ Đọc kết quả các khoảng còn lại.</p>
        </div>
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <h5 class="font-bold text-indigo-400 mb-1">Dạng 2: Bài toán chứa tham số $m$</h5>
          <p>Điều kiện $A \\subset B$ hoặc $A \\cap B = \\emptyset$: Thiết lập bất phương trình giữa các đầu mút của khoảng đoạn.</p>
        </div>
      </div>
    `,
    essaysHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
          <p class="font-bold text-white">Bài 1: Cho $A = [-3; 2]$ và $B = (0; 5)$. Tìm $A \\cap B, A \\cup B, A \\setminus B$.</p>
          <div class="p-2 bg-slate-900 rounded-lg text-slate-200">
            • $A \\cap B = (0; 2]$<br/>
            • $A \\cup B = [-3; 5)$<br/>
            • $A \\setminus B = [-3; 0]$
          </div>
        </div>
      </div>
    `,
    quizzes: [
      {
        id: "toan1_q1",
        level: "NB",
        type: "single",
        question: "Trong các khẳng định sau, câu nào là một mệnh đề?",
        options: ["Số 17 là số nguyên tố.", "Hôm nay trời đẹp quá!", "x + 2 > 5.", "Bạn đã làm bài tập chưa?"],
        answer: 0,
        explanation: "Số 17 là số nguyên tố là khẳng định có tính đúng/sai rõ ràng nên là mệnh đề."
      },
      {
        id: "toan1_q2",
        level: "TH",
        type: "single",
        question: "Cho tập hợp $A = [-2; 3)$ và $B = [1; 5]$. Khi đó $A \\cap B$ bằng:",
        options: ["$[-2; 5]$", "$[1; 3)$", "$(1; 3)$", "$[-2; 1)$"],
        answer: 1,
        explanation: "Phần tử chung của cả 2 tập hợp là $[1; 3)$."
      },
      {
        id: "toan1_q3",
        level: "VD",
        type: "single",
        question: "Số tập con có đúng 2 phần tử của tập hợp có 5 phần tử là:",
        options: ["10", "20", "25", "32"],
        answer: 0,
        explanation: "$C_5^2 = \\frac{5 \\times 4}{2} = 10$."
      }
    ],
    keywords: ["toan", "menh de", "tap hop", "giao", "hop", "hieu", "phan bu", "truc so"]
  },

  {
    id: "toan-c2",
    subject: "toan",
    subjectName: "Toán 10",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800",
    chapterNumber: "Chương 2",
    chapterTitle: "Bất phương trình & Hệ BPT bậc nhất hai ẩn",
    summary: "Biểu diễn miền nghiệm trên mặt phẳng $Oxy$, bài toán quy hoạch tuyến tính và tối ưu hóa thực tế.",
    keyFormulas: [
      { name: "Dạng tổng quát", formula: "$$ax + by + c \\le 0 \\quad (a^2 + b^2 \\ne 0)$$" },
      { name: "Định lý tối ưu đa giác", formula: "$$F(x, y) = ax + by \\text{ đạt GTLN/GTNN tại các đỉnh}$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <h4 class="font-bold text-blue-400 text-sm">1. Quy trình biểu diễn miền nghiệm $Oxy$</h4>
          <p>1. Vẽ đường thẳng bờ $\\Delta: ax + by + c = 0$ (nét liền nếu $\\ge, \\le$; nét đứt nếu $>, <$).</p>
          <p>2. Chọn điểm thử $M_0(x_0; y_0) \\notin \\Delta$ (ưu tiên $O(0;0)$).</p>
          <p>3. Tính giá trị và kết luận nửa mặt phẳng nghiệm.</p>
        </div>
      </div>
    `,
    methodsHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <p>• Xác định tọa độ các đỉnh của miền đa giác nghiệm $\\to$ Tính giá trị hàm mục tiêu $F(x, y)$ tại từng đỉnh $\\to$ So sánh tìm Max/Min.</p>
      </div>
    `,
    essaysHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <p>Bài toán xưởng sản xuất: Tìm kế hoạch sản xuất để lợi nhuận $F(x, y) = 40x + 30y$ đạt cực đại $\\to F_{\\max} = 2000$ triệu đồng tại $(20; 40)$.</p>
      </div>
    `,
    quizzes: [
      {
        id: "toan2_q1",
        level: "NB",
        type: "single",
        question: "Bất phương trình nào sau đây là BPT bậc nhất hai ẩn?",
        options: ["$2x^2 + y \\le 0$", "$2x - 3y + 1 > 0$", "$xy + 1 \\ge 0$", "$x + y + z < 4$"],
        answer: 1,
        explanation: "$2x - 3y + 1 > 0$ chỉ chứa bậc 1 của 2 ẩn $x, y$."
      },
      {
        id: "toan2_q2",
        level: "TH",
        type: "single",
        question: "Điểm nào sau đây thuộc miền nghiệm của BPT $x - 2y + 4 \\ge 0$?",
        options: ["$(0; 3)$", "$(0; 0)$", "$(1; 4)$", "$(-5; 0)$"],
        answer: 1,
        explanation: "Thay $(0; 0)$: $0 - 0 + 4 = 4 \\ge 0$ (đúng)."
      }
    ],
    keywords: ["toan", "bat phuong trinh", "he bpt", "bac nhat hai an", "mien nghiem", "quy hoach tuyen tinh"]
  },

  {
    id: "toan-c3",
    subject: "toan",
    subjectName: "Toán 10",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800",
    chapterNumber: "Chương 3",
    chapterTitle: "Hàm số bậc hai & Dấu tam thức bậc hai",
    summary: "Khảo sát Parabol, quy tắc xét dấu tam thức bậc hai 'Trong trái - Ngoài cùng', giải phương trình vô tỉ.",
    keyFormulas: [
      { name: "Tọa độ đỉnh Parabol", formula: "$$I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right), \\quad x = -\\frac{b}{2a}$$" },
      { name: "Dấu tam thức bậc hai", formula: "$$f(x) = ax^2 + bx + c, \\quad \\Delta = b^2 - 4ac$$" },
      { name: "Điều kiện luôn dương", formula: "$$f(x) > 0, \\forall x \\in \\mathbb{R} \\iff a > 0 \\text{ và } \\Delta < 0$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <h4 class="font-bold text-blue-400 text-sm">Định lý về dấu tam thức bậc hai</h4>
          <p>• $\\Delta < 0$: $f(x)$ luôn cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$.</p>
          <p>• $\\Delta = 0$: $f(x)$ cùng dấu với $a$ với mọi $x \\ne -\\frac{b}{2a}$.</p>
          <p>• $\\Delta > 0$: 2 nghiệm phân biệt: <strong>Trong khoảng trái dấu $a$, Ngoài khoảng cùng dấu $a$</strong>.</p>
        </div>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Giải BPT bậc 2: Tìm nghiệm $\\to$ Lập bảng xét dấu $\\to$ Kết luận.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Bài toán vòm cổng Parabol: Chiều cao tối đa của xe tải chở hàng rộng $4\\text{ m}$ đi qua cổng cao $8\\text{ m}$ rộng $8\\text{ m}$ là $6\\text{ m}$.</p>`,
    quizzes: [
      {
        id: "toan3_q1",
        level: "NB",
        type: "single",
        question: "Hoành độ đỉnh của parabol $y = x^2 - 4x + 3$ là:",
        options: ["$x = 2$", "$x = -2$", "$x = 4$", "$x = 1$"],
        answer: 0,
        explanation: "$x_I = -\\frac{b}{2a} = -\\frac{-4}{2} = 2$."
      },
      {
        id: "toan3_q2",
        level: "TH",
        type: "single",
        question: "Tập nghiệm của BPT $x^2 - 3x - 4 \\le 0$ là:",
        options: ["$[-1; 4]$", "$(-1; 4)$", "$(-\\infty; -1] \\cup [4; +\\infty)$", "$[-4; 1]$"],
        answer: 0,
        explanation: "Phương trình có 2 nghiệm $-1$ và $4$, $a = 1 > 0$ nên lấy nghiệm trong đoạn $[-1; 4]$."
      }
    ],
    keywords: ["toan", "ham so bac hai", "parabol", "tam thuc bac hai", "delta", "xet dau", "phuong trinh can"]
  },

  {
    id: "toan-c4",
    subject: "toan",
    subjectName: "Toán 10",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800",
    chapterNumber: "Chương 4",
    chapterTitle: "Hệ thức lượng trong tam giác",
    summary: "Định lý Sin, Định lý Cosin, bộ 5 công thức tính diện tích tam giác và bài toán giải tam giác thực tế.",
    keyFormulas: [
      { name: "Định lý Cosin", formula: "$$a^2 = b^2 + c^2 - 2bc \\cos A$$" },
      { name: "Định lý Sin", formula: "$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$" },
      { name: "Diện tích tam giác", formula: "$$S = \\frac{1}{2}ab\\sin C = \\frac{abc}{4R} = pr = \\sqrt{p(p-a)(p-b)(p-c)}$$" }
    ],
    theoryHtml: `<div class="space-y-2 text-xs text-slate-300"><p>• Góc bù nhau: $\\sin(180^\\circ - \\alpha) = \\sin \\alpha, \\cos(180^\\circ - \\alpha) = -\\cos \\alpha$.</p><p>• Đường trung tuyến: $m_a^2 = \\frac{2(b^2+c^2)-a^2}{4}$.</p></div>`,
    methodsHtml: `<p class="text-xs text-slate-300">• Biết 2 cạnh & góc xen giữa $\\to$ Dùng Cosin tìm cạnh 3. Biết 1 cạnh & 2 góc $\\to$ Dùng Sin.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Bài toán đo chiều cao tháp không thể tới chân: Tính góc ngoài tam giác $\\to$ Định lý Sin $\\to h = 32.8\\text{ m}$.</p>`,
    quizzes: [
      {
        id: "toan4_q1",
        level: "NB",
        type: "single",
        question: "Cho góc $\\alpha \\in (90^\\circ; 180^\\circ)$. Khẳng định nào sau đây đúng?",
        options: ["$\\cos \\alpha > 0$", "$\\tan \\alpha < 0$", "$\\sin \\alpha < 0$", "$\\cot \\alpha > 0$"],
        answer: 1,
        explanation: "Với góc tù $\\alpha$, $\\sin \\alpha > 0$ và $\\cos \\alpha < 0 \\implies \\tan \\alpha < 0$."
      },
      {
        id: "toan4_q2",
        level: "TH",
        type: "single",
        question: "Cho tam giác $ABC$ có $a = 8, \\widehat{A} = 30^\\circ$. Bán kính đường tròn ngoại tiếp $R$ bằng:",
        options: ["$4$", "$8$", "$16$", "$8\\sqrt{3}$"],
        answer: 1,
        explanation: "$2R = \\frac{a}{\\sin A} = \\frac{8}{\\sin 30^\\circ} = 16 \\implies R = 8$."
      }
    ],
    keywords: ["toan", "he thuc luong", "tam giac", "dinh ly sin", "dinh ly cosin", "heron", "dien tich", "ban kinh R r"]
  },

  {
    id: "toan-c5",
    subject: "toan",
    subjectName: "Toán 10",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800",
    chapterNumber: "Chương 5",
    chapterTitle: "Vectơ & Các phép toán Vectơ",
    summary: "Tổng hiệu vectơ, quy tắc 3 điểm, hình bình hành, tích vô hướng, tọa độ vectơ trong mặt phẳng Oxy.",
    keyFormulas: [
      { name: "Quy tắc 3 điểm & HBH", formula: "$$\\vec{AB} + \\vec{BC} = \\vec{AC}, \\quad \\vec{AB} + \\vec{AD} = \\vec{AC}$$" },
      { name: "Tích vô hướng", formula: "$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\vec{a}, \\vec{b}) = x_1 x_2 + y_1 y_2$$" },
      { name: "Điều kiện vuông góc", formula: "$$\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0 \\iff x_1 x_2 + y_1 y_2 = 0$$" }
    ],
    theoryHtml: `<div class="space-y-2 text-xs text-slate-300"><p>• Trung điểm: $\\vec{MA} + \\vec{MB} = 2\\vec{MI}$. Trọng tâm: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$.</p><p>• Khoảng cách: $AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$.</p></div>`,
    methodsHtml: `<p class="text-xs text-slate-300">• Chứng minh 3 điểm thẳng hàng: $\\vec{AB} = k\\vec{AC}$.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Ứng dụng Vật lý: Tính độ lớn hợp lực $F = 100\\sqrt{37}\\text{ N}$ và công của lực kéo $A = 30.414\\text{ kJ}$.</p>`,
    quizzes: [
      {
        id: "toan5_q1",
        level: "NB",
        type: "single",
        question: "Cho hình bình hành $ABCD$. Đẳng thức vectơ nào sau đây đúng?",
        options: ["$\\vec{AB} + \\vec{AC} = \\vec{AD}$", "$\\vec{AB} + \\vec{AD} = \\vec{AC}$", "$\\vec{AB} - \\vec{AD} = \\vec{AC}$", "$\\vec{BA} + \\vec{BC} = \\vec{DB}$"],
        answer: 1,
        explanation: "Theo quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$."
      },
      {
        id: "toan5_q2",
        level: "TH",
        type: "single",
        question: "Trong mặt phẳng $Oxy$, cho $\\vec{a} = (1; 2)$ và $\\vec{b} = (4; -2)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
        options: ["$8$", "$0$", "$-2$", "$4$"],
        answer: 1,
        explanation: "$\\vec{a} \\cdot \\vec{b} = 1(4) + 2(-2) = 0$ (hai vectơ vuông góc)."
      }
    ],
    keywords: ["toan", "vecto", "tich vo huong", "toa do oxy", "quy tac hinh binh hanh", "hop luc"]
  },

  // ================= VẬT LÝ 10 =================
  {
    id: "ly-c1",
    subject: "ly",
    subjectName: "Vật lý 10",
    badgeColor: "bg-amber-950 text-amber-300 border-amber-800",
    chapterNumber: "Chương 1",
    chapterTitle: "Mô tả chuyển động (Động học)",
    summary: "Sai số phép đo, quãng đường và độ dịch chuyển, bộ 3 công thức chuyển động biến đổi đều, rơi tự do, đồ thị $v-t$.",
    keyFormulas: [
      { name: "Phương trình vận tốc", formula: "$$v = v_0 + at$$" },
      { name: "Độ dịch chuyển", formula: "$$d = v_0 t + \\frac{1}{2}at^2$$" },
      { name: "Hệ thức độc lập thời gian", formula: "$$v^2 - v_0^2 = 2ad$$" },
      { name: "Rơi tự do ($v_0 = 0$)", formula: "$$v = gt, \\quad h = \\frac{1}{2}gt^2, \\quad v = \\sqrt{2gh}, \\quad t = \\sqrt{\\frac{2h}{g}}$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <h4 class="font-bold text-amber-400 text-sm">Quãng đường vs Độ dịch chuyển</h4>
          <p>• <strong>Quãng đường ($s$):</strong> Vô hướng, luôn dương ($s \\ge 0$).</p>
          <p>• <strong>Độ dịch chuyển ($\\vec{d}$):</strong> Vectơ nối điểm đầu đến điểm cuối, có thể âm, dương hoặc bằng 0.</p>
          <p>• Chuyển động thẳng không đổi chiều thì $d = s$.</p>
        </div>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Nhanh dần đều: $a \\cdot v > 0$. Chậm dần đều: $a \\cdot v < 0$.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Bài toán rơi tự do: Quãng đường trong 2 giây cuối là $60\\text{ m} \\implies t = 4\\text{ s}, h = 80\\text{ m}, v = 40\\text{ m/s}$.</p>`,
    quizzes: [
      {
        id: "ly1_q1",
        level: "NB",
        type: "single",
        question: "Đơn vị của gia tốc trong hệ SI là:",
        options: ["$\\text{m/s}$", "$\\text{m/s}^2$", "$\\text{km/h}$", "$\\text{m} \\cdot \\text{s}$"],
        answer: 1,
        explanation: "Gia tốc có đơn vị là mét trên giây bình phương ($\\text{m/s}^2$)."
      },
      {
        id: "ly1_q2",
        level: "TH",
        type: "single",
        question: "Thả rơi tự do một vật từ độ cao $45\\text{ m}$. Lấy $g = 10\\text{ m/s}^2$. Thời gian rơi chạm đất là:",
        options: ["$3\\text{ s}$", "$4.5\\text{ s}$", "$9\\text{ s}$", "$2\\text{ s}$"],
        answer: 0,
        explanation: "$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 45}{10}} = 3\\text{ s}$."
      }
    ],
    keywords: ["ly", "vat ly", "chuyen dong", "bien doi deu", "roi tu do", "gia toc", "do dich chuyen", "van toc", "toc do"]
  },

  {
    id: "ly-c2",
    subject: "ly",
    subjectName: "Vật lý 10",
    badgeColor: "bg-amber-950 text-amber-300 border-amber-800",
    chapterNumber: "Chương 2",
    chapterTitle: "Động lực học (Ba định luật Newton & Các lực cơ học)",
    summary: "3 Định luật Newton, trọng lực, lực ma sát trượt, lực đàn hồi (Định luật Hooke), lực căng dây, lực đẩy Archimedes.",
    keyFormulas: [
      { name: "Định luật II Newton", formula: "$$\\vec{F}_{hl} = m\\vec{a} \\iff \\vec{a} = \\frac{\\vec{F}}{m}$$" },
      { name: "Lực ma sát trượt", formula: "$$F_{mst} = \\mu_t \\cdot N$$" },
      { name: "Định luật Hooke", formula: "$$F_{dh} = k \\cdot |\\Delta l| = k \\cdot |l - l_0|$$" },
      { name: "Lực đẩy Archimedes", formula: "$$F_A = \\rho \\cdot g \\cdot V$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <h4 class="font-bold text-amber-400 text-sm">Ba Định luật Newton cốt lõi</h4>
          <p>• <strong>ĐL I (Quán tính):</strong> Hợp lực bằng 0 $\\to$ Đang đứng yên tiếp tục đứng yên, đang chuyển động tiếp tục chuyển động thẳng đều.</p>
          <p>• <strong>ĐL II:</strong> $\\vec{F} = m\\vec{a}$.</p>
          <p>• <strong>ĐL III (Tương tác):</strong> $\\vec{F}_{BA} = -\\vec{F}_{AB}$ (cùng độ lớn, ngược chiều, đặt vào 2 vật khác nhau nên không triệt tiêu).</p>
        </div>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Phương pháp động lực học: Chọn vật $\\to$ Phân tích lực $\\to$ Chiếu lên trục $Ox, Oy \\to a = \\frac{F_x - F_{ms}}{m}$.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Bài toán mặt phẳng nghiêng góc $30^\\circ$: $a = g(\\sin 30^\\circ - \\mu\\cos 30^\\circ) = 4.134\\text{ m/s}^2$.</p>`,
    quizzes: [
      {
        id: "ly2_q1",
        level: "NB",
        type: "single",
        question: "Đại lượng nào đặc trưng cho mức quán tính của một vật?",
        options: ["Vận tốc", "Khối lượng", "Lực tác dụng", "Gia tốc"],
        answer: 1,
        explanation: "Khối lượng là đại lượng đặc trưng cho mức quán tính của vật."
      },
      {
        id: "ly2_q2",
        level: "TH",
        type: "single",
        question: "Treo vật có khối lượng $m = 200\\text{ g}$ vào lò xo có độ cứng $k = 50\\text{ N/m}$. Lấy $g = 10\\text{ m/s}^2$. Độ dãn của lò xo ở vị trí cân bằng là:",
        options: ["$4\\text{ cm}$", "$2\\text{ cm}$", "$0.4\\text{ cm}$", "$40\\text{ cm}$"],
        answer: 0,
        explanation: "$\\Delta l = \\frac{mg}{k} = \\frac{0.2 \\times 10}{50} = 0.04\\text{ m} = 4\\text{ cm}$."
      }
    ],
    keywords: ["ly", "dong luc hoc", "newton", "quan tinh", "ma sat", "dan hoi", "hooke", "archimedes", "ap luc"]
  },

  // ================= HÓA HỌC 10 =================
  {
    id: "hoa-c1",
    subject: "hoa",
    subjectName: "Hóa học 10",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-800",
    chapterNumber: "Chương 1",
    chapterTitle: "Cấu tạo nguyên tử",
    summary: "Hạt nhân ($p, n$), vỏ electron ($e$), đồng vị, nguyên tử khối trung bình, orbital nguyên tử (AO) và quy tắc viết cấu hình electron.",
    keyFormulas: [
      { name: "Số khối", formula: "$$A = Z + N, \\quad m_{\\text{nguyên tử}} \\approx A\\text{ (amu)}$$" },
      { name: "Nguyên tử khối trung bình", formula: "$$\\overline{A} = \\frac{A_1 x_1 + A_2 x_2 + \\dots}{100}$$" },
      { name: "Thứ tự mức năng lượng", formula: "$$1s \\; 2s \\; 2p \\; 3s \\; 3p \\; 4s \\; 3d \\; 4p \\dots$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <h4 class="font-bold text-emerald-400 text-sm">Cấu hình electron đặc biệt</h4>
          <p>• <strong>Chromium ($Z = 24$):</strong> $[\\text{Ar}] 3d^5 4s^1$ (bán bão hòa phân lớp $d$).</p>
          <p>• <strong>Copper ($Z = 29$):</strong> $[\\text{Ar}] 3d^{10} 4s^1$ (bão hòa phân lớp $d$).</p>
          <p>• Lớp ngoài cùng $1, 2, 3e$: Kim loại; $5, 6, 7e$: Phi kim; $8e$: Khí hiếm.</p>
        </div>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Tìm hạt: Tổng hạt $S = 2Z + N$. Giới hạn bền $1 \\le \\frac{N}{Z} \\le 1.5$.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Tính $\%$ khối lượng đồng vị $^{35}\\text{Cl}$ trong muối $\\text{KClO}_3$ là $21.65\\%$.</p>`,
    quizzes: [
      {
        id: "hoa1_q1",
        level: "NB",
        type: "single",
        question: "Hạt mang điện tích âm trong nguyên tử là:",
        options: ["Proton", "Neutron", "Electron", "Hạt nhân"],
        answer: 2,
        explanation: "Electron mang điện tích âm $-1e$."
      },
      {
        id: "hoa1_q2",
        level: "TH",
        type: "single",
        question: "Cấu hình electron của nguyên tử Sulfur ($Z = 16$) là:",
        options: ["$1s^2 2s^2 2p^6 3s^2 3p^4$", "$1s^2 2s^2 2p^6 3s^2 3p^6$", "$1s^2 2s^2 2p^6 3s^1 3p^5$", "$1s^2 2s^2 2p^4 3s^2 3p^6$"],
        answer: 0,
        explanation: "Tổng $16e \\implies 1s^2 2s^2 2p^6 3s^2 3p^4$."
      }
    ],
    keywords: ["hoa", "nguyen tu", "proton", "neutron", "electron", "dong vi", "orbital", "cau hinh e", "kim loai", "phi kim"]
  },

  {
    id: "hoa-c2",
    subject: "hoa",
    subjectName: "Hóa học 10",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-800",
    chapterNumber: "Chương 2",
    chapterTitle: "Bảng tuần hoàn & Định luật tuần hoàn",
    summary: "Cấu tạo BTH (ô, chu kỳ, nhóm A, B), quy luật biến đổi tuần hoàn (bán kính, độ âm điện, tính kim loại/phi kim, acid/base).",
    keyFormulas: [
      { name: "Vị trí trong BTH", formula: "$$\\text{Ô} = Z, \\quad \\text{Chu kỳ} = \\text{Số lớp } e, \\quad \\text{Nhóm A} = e \\text{ hóa trị}$$" },
      { name: "Hóa trị với O và H", formula: "$$\\text{Hóa trị cao nhất với O} + \\text{Hóa trị với H} = 8$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <h4 class="font-bold text-emerald-400 text-sm">Quy luật biến đổi tuần hoàn</h4>
          <p>• <strong>Trong Chu kỳ (Trái $\\to$ Phải):</strong> Bán kính giảm, Độ âm điện tăng, Tính kim loại giảm, Tính phi kim tăng, Tính acid tăng.</p>
          <p>• <strong>Trong Nhóm A (Trên $\\to$ Dưới):</strong> Bán kính tăng, Độ âm điện giảm, Tính kim loại tăng, Tính phi kim giảm, Tính base tăng.</p>
        </div>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• So sánh bán kính ion cùng số electron: $Z$ càng lớn thì bán kính càng nhỏ ($r(\\text{Al}^{3+}) < r(\\text{Mg}^{2+}) < r(\\text{Na}^+) < r(\\text{F}^-) < r(\\text{O}^{2-})$).</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Phi kim $R$ có hợp chất khí $\\text{H}_2\\text{S}$, oxide cao nhất $\\text{SO}_3$, acid sulfuric $\\text{H}_2\\text{SO}_4$.</p>`,
    quizzes: [
      {
        id: "hoa2_q1",
        level: "NB",
        type: "single",
        question: "Số thứ tự chu kỳ trong Bảng tuần hoàn bằng:",
        options: ["Số electron hóa trị", "Số lớp electron", "Số electron lớp ngoài cùng", "Số proton"],
        answer: 1,
        explanation: "Số thứ tự của chu kỳ luôn bằng số lớp electron trong nguyên tử."
      },
      {
        id: "hoa2_q2",
        level: "TH",
        type: "single",
        question: "Dãy nguyên tố nào sau đây được sắp xếp theo chiều tăng dần tính kim loại?",
        options: ["$\\text{Na}, \\text{Mg}, \\text{Al}, \\text{K}$", "$\\text{Al}, \\text{Mg}, \\text{Na}, \\text{K}$", "$\\text{K}, \\text{Na}, \\text{Mg}, \\text{Al}$", "$\\text{Al}, \\text{Na}, \\text{Mg}, \\text{K}$"],
        answer: 1,
        explanation: "Trong chu kỳ 3: $\\text{Al} < \\text{Mg} < \\text{Na}$. Nhóm IA: $\\text{Na} < \\text{K} \\implies \\text{Al} < \\text{Mg} < \\text{Na} < \\text{K}$."
      }
    ],
    keywords: ["hoa", "bang tuan hoan", "chu ky", "nhom a", "nhom b", "ban kinh nguyen tu", "do am dien", "tinh kim loai", "tinh phi kim"]
  }
];
