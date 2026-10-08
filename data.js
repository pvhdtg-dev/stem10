// STEM 10 - NGÂN HÀNG KIẾN THỨC & CÂU HỎI TRẮC NGHIỆM ĐỒ SỘ (TOÁN - LÝ - HÓA 10)

const CHAPTERS_DATA = [
  // =========================================================================
  // ============================== HÓA HỌC 10 ===============================
  // =========================================================================
  {
    id: "hoa-c1",
    subject: "hoa",
    subjectName: "Hóa học 10",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-800",
    chapterNumber: "Chương 1",
    chapterTitle: "Cấu tạo nguyên tử",
    summary: "Thành phần nguyên tử (p, n, e), đồng vị, nguyên tử khối trung bình, orbital nguyên tử (AO), quy tắc phân bố electron và cấu hình electron.",
    keyFormulas: [
      { name: "Số khối", formula: "$$A = Z + N, \\quad m_{\\text{nguyên tử}} \\approx A\\text{ (amu)}$$" },
      { name: "Nguyên tử khối trung bình", formula: "$$\\overline{A} = \\frac{A_1 x_1 + A_2 x_2 + \\dots + A_k x_k}{100}$$" },
      { name: "Thứ tự mức năng lượng", formula: "$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d\\dots$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300 leading-relaxed">
        <div class="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5">
          <h4 class="font-bold text-emerald-400 text-sm">1. Thành phần nguyên tử</h4>
          <p>• <strong>Hạt nhân:</strong> Gồm proton ($p$, mang điện tích $+1e$, $m_p \\approx 1\\text{ amu}$) và neutron ($n$, không mang điện, $m_n \\approx 1\\text{ amu}$).</p>
          <p>• <strong>Vỏ nguyên tử:</strong> Gồm electron ($e$, mang điện tích $-1e$, $m_e \\approx 0.00055\\text{ amu}$).</p>
          <p>• Nguyên tử trung hòa về điện: $\\text{Số } p = \\text{Số } e = Z$ (Số hiệu nguyên tử).</p>
        </div>
        <div class="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5">
          <h4 class="font-bold text-emerald-400 text-sm">2. Đồng vị & Orbital nguyên tử</h4>
          <p>• <strong>Đồng vị:</strong> Cùng số proton ($Z$), khác số neutron ($N$) $\\implies$ khác số khối $A$.</p>
          <p>• <strong>AO $s$:</strong> Dạng hình cầu. <strong>AO $p$:</strong> Dạng hình số 8 nổi gồm 3 orbital $p_x, p_y, p_z$.</p>
          <p>• Số electron tối đa: lớp thứ $n$ có tối đa $2n^2$ electron ($n \\le 4$). Phân lớp $s^2, p^6, d^{10}, f^{14}$.</p>
        </div>
        <div class="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5">
          <h4 class="font-bold text-emerald-400 text-sm">3. Cấu hình electron đặc biệt</h4>
          <p>• $\\text{Cr} (Z=24)$: $[\\text{Ar}] 3d^5 4s^1$ (bán bão hòa phân lớp $d$).</p>
          <p>• $\\text{Cu} (Z=29)$: $[\\text{Ar}] 3d^{10} 4s^1$ (bão hòa phân lớp $d$).</p>
        </div>
      </div>
    `,
    methodsHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <h5 class="font-bold text-emerald-400 mb-1">Dạng 1: Bài toán tìm hạt cơ bản (p, n, e)</h5>
          <p>Lập hệ phương trình: Tổng hạt $S = 2Z + N$; Hạt mang điện nhiều hơn không mang điện: $2Z - N = \\Delta$. Áp dụng chặn $1 \\le N/Z \\le 1.5$.</p>
        </div>
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <h5 class="font-bold text-emerald-400 mb-1">Dạng 2: Đồng vị & % khối lượng trong hợp chất</h5>
          <p>Tính $\\overline{A} \\to$ Tính phân tử khối hợp chất $\\to \\%m(^{A_1}\\text{X}) = \\frac{a \\cdot A_1 \\cdot x_1\\%}{M_{\\text{hợp chất}}} \\times 100\\%$.</p>
        </div>
      </div>
    `,
    essaysHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
          <p class="font-bold text-white">Bài 1: Hợp chất $M_2X$ có tổng số hạt cơ bản là 140, số hạt mang điện nhiều hơn không mang điện là 44. Số khối của $M$ lớn hơn $X$ là 23. Tìm công thức phân tử của hợp chất.</p>
          <p class="text-slate-400"><strong>Lời giải:</strong> Thiết lập hệ 4 phương trình 4 ẩn $\\implies Z_M = 19 (\\text{K}), Z_X = 8 (\\text{O}) \\implies$ Công thức phân tử là $\\text{K}_2\\text{O}$.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        id: "hoa1_01",
        q: "Hạt cấu tạo nên lớp vỏ của nguyên tử là:",
        options: ["Proton", "Neutron", "Electron", "Proton và neutron"],
        answer: 2,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Lớp vỏ nguyên tử được cấu tạo bởi các electron (e) mang điện tích âm, chuyển động xung quanh hạt nhân."
      },
      {
        id: "hoa1_02",
        q: "Hạt cấu tạo nên hạt nhân của hầu hết các nguyên tử là:",
        options: ["Electron và proton", "Proton và neutron", "Neutron và electron", "Chỉ có proton"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Hạt nhân nguyên tử được cấu tạo từ proton (p) và neutron (n). Riêng hạt nhân $^1_1\\text{H}$ chỉ có 1 proton, không có neutron."
      },
      {
        id: "hoa1_03",
        q: "Trong nguyên tử, các loại hạt mang điện là:",
        options: ["Proton và neutron", "Proton và electron", "Neutron và electron", "Chỉ có electron"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Proton mang điện tích $+1e$, electron mang điện tích $-1e$. Neutron không mang điện."
      },
      {
        id: "hoa1_04",
        q: "Nguyên tử luôn trung hoà về điện vì:",
        options: ["Số proton bằng số neutron", "Số proton bằng số electron", "Số neutron bằng số electron", "Hạt nhân không mang điện"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Trong nguyên tử trung hoà: số proton (điện tích dương) = số electron (điện tích âm) nên tổng điện tích bằng 0."
      },
      {
        id: "hoa1_05",
        q: "Electron được J.J. Thomson phát hiện năm 1897 thông qua thí nghiệm:",
        options: ["Bắn phá hạt nhân vàng bằng tia α", "Tia âm cực (cathode-ray)", "Phân tích quang phổ hydrogen", "Thí nghiệm giọt dầu"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Năm 1897, J.J. Thomson nghiên cứu chùm tia cathode (tia âm cực) và phát hiện ra chùm hạt electron mang điện âm."
      },
      {
        id: "hoa1_06",
        q: "Mô hình hành tinh nguyên tử được đề xuất bởi:",
        options: ["J.J. Thomson", "E. Rutherford", "N. Bohr", "J. Chadwick"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Năm 1911, E. Rutherford qua thí nghiệm bắn phá lá vàng mỏng bằng hạt α đã đề xuất mô hình hành tinh nguyên tử."
      },
      {
        id: "hoa1_07",
        q: "Trong thí nghiệm bắn phá lá vàng của Rutherford, phần lớn các hạt α:",
        options: ["Bị bật ngược trở lại", "Đi lệch hướng nhiều", "Đi thẳng xuyên qua lá vàng", "Bị hấp thụ hoàn toàn"],
        answer: 2,
        level: "TH",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Đa số hạt α đi thẳng xuyên qua lá vàng chứng tỏ nguyên tử có cấu tạo rỗng, hạt nhân có kích thước vô cùng nhỏ so với nguyên tử."
      },
      {
        id: "hoa1_08",
        q: "Neutron được J. Chadwick phát hiện năm:",
        options: ["1897", "1911", "1913", "1932"],
        answer: 3,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Năm 1932, J. Chadwick phát hiện ra hạt neutron khi bắn phá hạt nhân Berili ($^9\\text{Be}$) bằng hạt $\\alpha$."
      },
      {
        id: "hoa1_09",
        q: "Số khối ($A$) của nguyên tử được tính bằng công thức:",
        options: ["$A = Z + N$", "$A = Z - N$", "$A = Z \\times N$", "$A = Z + E$"],
        answer: 0,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Số khối $A = Z$ (tổng số proton) $+ N$ (tổng số neutron)."
      },
      {
        id: "hoa1_10",
        q: "Khối lượng của nguyên tử tập trung chủ yếu ở:",
        options: ["Lớp vỏ electron", "Hạt nhân", "Proton", "Electron"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Thành phần nguyên tử",
        explanation: "Khối lượng nguyên tử tập trung hầu hết ở hạt nhân vì khối lượng electron rất nhỏ ($m_e \\approx \\frac{1}{1836} m_p$)."
      },
      {
        id: "hoa1_11",
        q: "Nguyên tố hoá học là tập hợp các nguyên tử có cùng:",
        options: ["Số khối", "Số neutron", "Số proton (số hiệu nguyên tử Z)", "Khối lượng nguyên tử"],
        answer: 2,
        level: "NB",
        topic: "Bài 2: Nguyên tố hoá học",
        explanation: "Nguyên tố hoá học là tập hợp các nguyên tử có cùng số proton ($Z$) trong hạt nhân."
      },
      {
        id: "hoa1_12",
        q: "Đồng vị là những nguyên tử của cùng một nguyên tố, có cùng số proton nhưng khác nhau về:",
        options: ["Số electron", "Số neutron", "Số hiệu nguyên tử", "Cấu hình electron"],
        answer: 1,
        level: "NB",
        topic: "Bài 2: Nguyên tố hoá học",
        explanation: "Đồng vị có cùng số proton ($Z$) nhưng khác nhau số neutron ($N$), do đó số khối $A$ khác nhau."
      },
      {
        id: "hoa1_13",
        q: "Kí hiệu $^{23}_{11}\\text{Na}$ cho biết:",
        options: ["Số khối là 11, số hiệu là 23", "Số khối là 23, số hiệu nguyên tử là 11", "Có 23 proton và 11 neutron", "Có 11 proton và 23 neutron"],
        answer: 1,
        level: "NB",
        topic: "Bài 2: Nguyên tố hoá học",
        explanation: "Kí hiệu $^{A}_{Z}\\text{X}$: chỉ số trên $A = 23$ là số khối, chỉ số dưới $Z = 11$ là số hiệu nguyên tử."
      },
      {
        id: "hoa1_14",
        q: "Đơn vị khối lượng nguyên tử (amu) được định nghĩa bằng:",
        options: ["Khối lượng nguyên tử hydrogen", "$1/12$ khối lượng nguyên tử carbon-12", "Khối lượng nguyên tử oxygen-16", "Khối lượng 1 proton"],
        answer: 1,
        level: "NB",
        topic: "Bài 2: Nguyên tố hoá học",
        explanation: "$1\\text{ amu} = \\frac{1}{12} m(^{12}\\text{C}) \\approx 1.6605 \\times 10^{-27}\\text{ kg}$."
      },
      {
        id: "hoa1_15",
        q: "Đồng vị phóng xạ $^{14}\\text{C}$ được ứng dụng phổ biến trong khảo cổ học để:",
        options: ["Chữa bệnh ung thư", "Xác định niên đại cổ vật", "Chụp phim X-quang", "Chiếu xạ khử trùng thực phẩm"],
        answer: 1,
        level: "TH",
        topic: "Bài 2: Nguyên tố hoá học",
        explanation: "$^{14}\\text{C}$ có chu kỳ bán rã 5730 năm, được dùng để định tuổi các mẫu vật hữu cơ cổ vật (carbon dating)."
      },
      {
        id: "hoa1_16",
        q: "Mô hình nguyên tử hiện đại mô tả chuyển động của electron như:",
        options: ["Chuyển động trên quỹ đạo tròn xác định", "Chuyển động tạo thành đám mây electron, không theo quỹ đạo xác định", "Đứng yên quanh hạt nhân", "Chuyển động thẳng đều"],
        answer: 1,
        level: "NB",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Theo cơ học lượng tử, electron chuyển động rất nhanh quanh hạt nhân không theo quỹ đạo xác định, tạo thành đám mây electron."
      },
      {
        id: "hoa1_17",
        q: "Orbital nguyên tử (AO) là vùng không gian xung quanh hạt nhân mà tại đó:",
        options: ["Chứa đúng 1 electron", "Xác suất tìm thấy electron là lớn nhất (khoảng 90%)", "Electron chuyển động tròn đều", "Không thể có mặt electron"],
        answer: 1,
        level: "NB",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "AO là khu vực không gian quanh hạt nhân mà xác suất tìm thấy electron ở đó khoảng 90%."
      },
      {
        id: "hoa1_18",
        q: "Các orbital $s$ có dạng hình học là:",
        options: ["Hình số 8 nổi", "Hình cầu", "Hình elip", "Hình hoa mai"],
        answer: 1,
        level: "NB",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Orbital $s$ có dạng hình cầu đối xứng tâm hạt nhân. Orbital $p$ có dạng hình số 8 nổi."
      },
      {
        id: "hoa1_19",
        q: "Phân lớp $p$ có số lượng orbital (AO) là:",
        options: ["1", "3", "5", "7"],
        answer: 1,
        level: "NB",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Phân lớp $p$ có 3 orbital ($p_x, p_y, p_z$), chứa tối đa $2 \\times 3 = 6$ electron."
      },
      {
        id: "hoa1_20",
        q: "Lớp electron thứ 3 ($M$, $n = 3$) chứa tối đa bao nhiêu electron?",
        options: ["8", "18", "32", "2"],
        answer: 1,
        level: "TH",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Số electron tối đa trong lớp $n$ là $2n^2$. Với $n = 3 \\implies 2 \\times 3^2 = 18$ electron (gồm $3s^2, 3p^6, 3d^{10}$)."
      },
      {
        id: "hoa1_21",
        q: "Cấu hình electron của nguyên tử $\\text{Na} (Z = 11)$ là:",
        options: ["$1s^2 2s^2 2p^6 3s^2$", "$1s^2 2s^2 2p^6 3s^1$", "$1s^2 2s^2 2p^5 3s^2$", "$1s^2 2s^2 2p^6 3p^1$"],
        answer: 1,
        level: "TH",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Điền 11 electron theo thứ tự năng lượng: $1s^2 2s^2 2p^6 3s^1$."
      },
      {
        id: "hoa1_22",
        q: "Cấu hình electron của nguyên tử $\\text{Fe} (Z = 26)$ là:",
        options: ["$1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 4s^2$", "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^8$", "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$", "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 4p^6$"],
        answer: 0,
        level: "VD",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Theo mức năng lượng: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$. Viết theo thứ tự lớp: $1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 4s^2$ (hay $[\\text{Ar}] 3d^6 4s^2$)."
      },
      {
        id: "hoa1_23",
        q: "Nguyên tử của nguyên tố nào sau đây có cấu hình electron lớp ngoài cùng dạng $3s^2 3p^5$?",
        options: ["$\\text{Na} (Z=11)$", "$\\text{Mg} (Z=12)$", "$\\text{Cl} (Z=17)$", "$\\text{Ar} (Z=18)$"],
        answer: 2,
        level: "TH",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Cấu hình đầy đủ: $1s^2 2s^2 2p^6 3s^2 3p^5$ có tổng 17e $\\implies Z = 17$ (Chlorine)."
      },
      {
        id: "hoa1_24",
        q: "Cấu hình electron của ion $\\text{Cu}^{2+} (Z = 29)$ là:",
        options: ["$[\\text{Ar}] 3d^9$", "$[\\text{Ar}] 3d^8 4s^1$", "$[\\text{Ar}] 3d^{10} 4s^1$", "$[\\text{Ar}] 3d^7 4s^2$"],
        answer: 0,
        level: "VD",
        topic: "Bài 3: Cấu trúc lớp vỏ electron",
        explanation: "Nguyên tử $\\text{Cu}: [\\text{Ar}] 3d^{10} 4s^1$. Nhường 2e: bớt 1e ở $4s$ và 1e ở $3d \\implies \\text{Cu}^{2+}$ có cấu hình $[\\text{Ar}] 3d^9$."
      },
      {
        id: "hoa1_25",
        q: "Nguyên tử $X$ có tổng số hạt cơ bản là 34, số hạt mang điện nhiều hơn số hạt không mang điện là 10. Số khối của $X$ là:",
        options: ["23", "24", "22", "25"],
        answer: 0,
        level: "VD",
        topic: "Bài 4: Ôn tập chương 1",
        explanation: "Hệ: $2Z + N = 34$ và $2Z - N = 10 \\implies 4Z = 44 \\implies Z = 11, N = 12 \\implies A = 11 + 12 = 23$ (Natri $\\text{Na}$)."
      }
    ],
    keywords: ["hoa", "nguyen tu", "proton", "neutron", "electron", "dong vi", "orbital", "cau hinh e", "kim loai", "phi kim"]
  },

  // =========================================================================
  // ============================== TOÁN HỌC 10 ==============================
  // =========================================================================
  {
    id: "toan-c1",
    subject: "toan",
    subjectName: "Toán 10",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800",
    chapterNumber: "Chương 1",
    chapterTitle: "Mệnh đề & Tập hợp",
    summary: "Mệnh đề logic, phủ định, kéo theo, tương đương, ký hiệu $\\forall, \\exists$, các phép toán giao, hợp, hiệu, phần bù trên tập số thực $\\mathbb{R}$.",
    keyFormulas: [
      { name: "Phủ định $\\forall, \\exists$", formula: "$$\\overline{\\forall x \\in X, P(x)} \\iff \\exists x \\in X, \\overline{P(x)}$$" },
      { name: "Số tập con", formula: "$$\\text{Số tập con của tập } n \\text{ phần tử} = 2^n$$" },
      { name: "Giao & Hợp", formula: "$$x \\in A \\cap B \\iff x \\in A \\text{ và } x \\in B; \\quad x \\in A \\cup B \\iff x \\in A \\text{ hoặc } x \\in B$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300 leading-relaxed">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
          <h4 class="font-bold text-blue-400 text-sm">1. Mệnh đề & Phủ định</h4>
          <p>• <strong>Mệnh đề:</strong> Khẳng định có tính đúng hoặc sai rõ ràng.</p>
          <p>• <strong>Mệnh đề kéo theo ($P \\Rightarrow Q$):</strong> Chỉ sai khi $P$ đúng mà $Q$ sai ($P$ là điều kiện đủ, $Q$ là điều kiện cần).</p>
          <p>• <strong>Quy tắc phủ định:</strong> Phủ định của $>$ là $\\le$; phủ định của $\\forall$ là $\\exists$.</p>
        </div>
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
          <h4 class="font-bold text-blue-400 text-sm">2. Các phép toán tập hợp trên trục số</h4>
          <p>• Giao ($A \\cap B$): Lấy phần chung. Hợp ($A \\cup B$): Lấy tất cả. Hiệu ($A \\setminus B$): Thuộc $A$ nhưng không thuộc $B$.</p>
        </div>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Phép toán khoảng đoạn: Vẽ trục số $\\to$ Biểu diễn tập hợp $\\to$ Gạch bỏ phần không thỏa mãn $\\to$ Đọc nghiệm.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Bài toán thực tế khảo sát: Số học sinh giỏi Toán, Lý, Hóa qua biểu đồ Venn $\\implies |T \\cup L \\cup H| = 38$, số học sinh không giỏi môn nào là $45 - 38 = 7$.</p>`,
    quizzes: [
      {
        id: "toan1_01",
        q: "Trong các câu sau, câu nào là một mệnh đề?",
        options: ["Số 17 là số nguyên tố.", "Hôm nay trời đẹp quá!", "$x + 2 > 5$.", "Bạn có thích học Toán không?"],
        answer: 0,
        level: "NB",
        topic: "Bài 1: Mệnh đề",
        explanation: "'Số 17 là số nguyên tố' là một khẳng định có tính đúng/sai rõ ràng (cụ thể là mệnh đề đúng)."
      },
      {
        id: "toan1_02",
        q: "Mệnh đề phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 + 1 > 0\"$ là:",
        options: ["$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$", "$\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 < 0\"$", "$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 > 0\"$", "$\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$"],
        answer: 0,
        level: "TH",
        topic: "Bài 1: Mệnh đề",
        explanation: "Quy tắc phủ định: $\\forall \\to \\exists$ và đổi dấu $>$ thành $\\le$."
      },
      {
        id: "toan1_03",
        q: "Cho mệnh đề kéo theo $P \\Rightarrow Q$. Khẳng định nào sau đây diễn đạt đúng vai trò của $P$ và $Q$?",
        options: ["$P$ là điều kiện cần để có $Q$", "$Q$ là điều kiện đủ để có $P$", "$P$ là điều kiện đủ để có $Q$", "$Q$ là điều kiện cần và đủ để có $P$"],
        answer: 2,
        level: "NB",
        topic: "Bài 1: Mệnh đề",
        explanation: "Trong mệnh đề $P \\Rightarrow Q$, $P$ là điều kiện đủ để có $Q$, và $Q$ là điều kiện cần để có $P$."
      },
      {
        id: "toan1_04",
        q: "Cho tập hợp $X = \\{x \\in \\mathbb{N} \\mid (x^2 - 4)(2x - 1) = 0\\}$. Số phần tử của tập hợp $X$ là:",
        options: ["1", "2", "3", "0"],
        answer: 0,
        level: "TH",
        topic: "Bài 2: Tập hợp",
        explanation: "Phương trình có nghiệm $x = 2, x = -2, x = 0.5$. Do $x \\in \\mathbb{N}$ nên chỉ nhận $x = 2 \\implies X = \\{2\\}$ có đúng 1 phần tử."
      },
      {
        id: "toan1_05",
        q: "Tập hợp $A = \\{a; b; c\\}$ có tất cả bao nhiêu tập hợp con?",
        options: ["3", "6", "8", "9"],
        answer: 2,
        level: "NB",
        topic: "Bài 2: Tập hợp",
        explanation: "Số tập con của tập hợp có $n$ phần tử là $2^n = 2^3 = 8$."
      },
      {
        id: "toan1_06",
        q: "Cho hai tập hợp $A = [-2; 3)$ và $B = [1; 5]$. Khi đó tập hợp $A \\cap B$ là:",
        options: ["$[-2; 5]$", "$[1; 3)$", "$(1; 3)$", "$[-2; 1)$"],
        answer: 1,
        level: "TH",
        topic: "Bài 3: Phép toán tập hợp",
        explanation: "Phần tử thuộc cả $A$ và $B$ là nửa khoảng $[1; 3)$."
      },
      {
        id: "toan1_07",
        q: "Cho $A = (-3; 2]$ và $B = [0; 5)$. Khi đó tập hợp $A \\setminus B$ là:",
        options: ["$(-3; 0]$", "$(-3; 0)$", "$(2; 5)$", "$[0; 2]$"],
        answer: 1,
        level: "VD",
        topic: "Bài 3: Phép toán tập hợp",
        explanation: "$A \\setminus B$ là phần thuộc $A$ nhưng không thuộc $B$: $(-3; 2] \\setminus [0; 5) = (-3; 0)$ (do $0 \\in B$ nên bị loại)."
      },
      {
        id: "toan1_08",
        q: "Cho hai tập hợp $A = [m-1; m+2)$ và $B = [2; 6]$. Điều kiện để $A \\cap B \\ne \\emptyset$ là:",
        options: ["$0 < m \\le 7$", "$m \\le 0$ hoặc $m > 7$", "$1 < m < 6$", "$0 \\le m \\le 7$"],
        answer: 0,
        level: "VDC",
        topic: "Bài 3: Phép toán tập hợp",
        explanation: "$A \\cap B = \\emptyset \\iff m+2 \\le 2$ hoặc $m-1 > 6 \\iff m \\le 0$ hoặc $m > 7$. Do đó giao khác rỗng khi $0 < m \\le 7$."
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
    chapterTitle: "Bất phương trình bậc nhất hai ẩn",
    summary: "Bất phương trình và Hệ BPT bậc nhất hai ẩn, biểu diễn miền nghiệm hình học $Oxy$, bài toán quy hoạch tuyến tính và tối ưu hóa thực tế.",
    keyFormulas: [
      { name: "Dạng tổng quát", formula: "$$ax + by + c \\le 0 \\quad (a^2 + b^2 \\ne 0)$$" },
      { name: "Định lý tối ưu đa giác", formula: "$$F(x, y) = ax + by \\text{ đạt GTLN/GTNN tại một trong các đỉnh}$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300">
        <p>• Đường thẳng bờ $\\Delta: ax + by + c = 0$ (nét liền nếu có dấu $=$, nét đứt nếu dấu ngặt).</p>
        <p>• Chọn điểm thử $M_0(x_0; y_0) \\notin \\Delta$ (thường chọn $O(0;0)$) để xác định nửa mặt phẳng nghiệm.</p>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Tối ưu hóa: Tìm tọa độ các đỉnh của miền nghiệm đa giác $\\to$ Thay vào hàm $F(x, y) \\to$ So sánh.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Bài toán xưởng sản xuất: Tối ưu hóa lợi nhuận $F(x, y) = 40x + 30y$ đạt cực đại tại $(20; 40) \\implies F_{\\max} = 2000$ triệu đồng.</p>`,
    quizzes: [
      {
        id: "toan2_01",
        q: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
        options: ["$2x^2 + 3y \\le 0$", "$2x - y + 3 > 0$", "$xy + x \\ge 1$", "$x + y + z < 4$"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: BPT bậc nhất hai ẩn",
        explanation: "Bất phương trình bậc nhất hai ẩn có dạng $ax + by + c > 0$ (hoặc $<, \\ge, \\le$) với $a, b$ không đồng thời bằng 0."
      },
      {
        id: "toan2_02",
        q: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x - y + 1 > 0$?",
        options: ["$(1; 2)$", "$(0; 2)$", "$(-1; 0)$", "$(1; 4)$"],
        answer: 0,
        level: "TH",
        topic: "Bài 1: BPT bậc nhất hai ẩn",
        explanation: "Thay $(1; 2)$ vào BPT: $2(1) - 2 + 1 = 1 > 0$ (thỏa mãn)."
      },
      {
        id: "toan2_03",
        q: "Cho hệ BPT $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 3 \\end{cases}$. Giá trị lớn nhất của $F(x, y) = 2x + 3y$ bằng:",
        options: ["6", "9", "0", "5"],
        answer: 1,
        level: "VD",
        topic: "Bài 2: Hệ BPT & Tối ưu",
        explanation: "Các đỉnh của miền tam giác là $O(0;0), A(3;0), B(0;3)$. Tính $F(O)=0, F(A)=6, F(B)=9 \\implies F_{\\max} = 9$ tại $(0; 3)$."
      }
    ],
    keywords: ["toan", "bat phuong trinh", "he bpt", "bac nhat hai an", "mien nghiem", "quy hoach tuyen tinh"]
  },

  // =========================================================================
  // ============================== VẬT LÝ 10 ================================
  // =========================================================================
  {
    id: "ly-c1",
    subject: "ly",
    subjectName: "Vật lý 10",
    badgeColor: "bg-amber-950 text-amber-300 border-amber-800",
    chapterNumber: "Chương 1",
    chapterTitle: "Mô tả chuyển động (Động học)",
    summary: "Sai số đo lường, độ dịch chuyển vs quãng đường, tốc độ vs vận tốc, chuyển động thẳng biến đổi đều, rơi tự do, đồ thị động học.",
    keyFormulas: [
      { name: "Phương trình vận tốc", formula: "$$v = v_0 + at$$" },
      { name: "Độ dịch chuyển", formula: "$$d = v_0 t + \\frac{1}{2}at^2$$" },
      { name: "Hệ thức độc lập thời gian", formula: "$$v^2 - v_0^2 = 2ad$$" },
      { name: "Rơi tự do ($v_0 = 0$)", formula: "$$v = gt, \\quad h = \\frac{1}{2}gt^2, \\quad v = \\sqrt{2gh}, \\quad t = \\sqrt{\\frac{2h}{g}}$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300 leading-relaxed">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <h4 class="font-bold text-amber-400 text-sm">Quãng đường vs Độ dịch chuyển</h4>
          <p>• Quãng đường $s$: Vô hướng, luôn $\\ge 0$. Độ dịch chuyển $\\vec{d}$: Đại lượng vectơ.</p>
          <p>• Chuyển động thẳng biến đổi đều: Nhanh dần đều $a \\cdot v > 0$; Chậm dần đều $a \\cdot v < 0$.</p>
        </div>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Áp dụng bộ 3 công thức động học theo từng giai đoạn chuyển động.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Bài toán rơi tự do trong 2 giây cuối rơi $60\\text{ m} \\implies t = 4\\text{ s}, h = 80\\text{ m}, v = 40\\text{ m/s}$.</p>`,
    quizzes: [
      {
        id: "ly1_01",
        q: "Đơn vị của gia tốc trong hệ đo lường quốc tế SI là:",
        options: ["$\\text{m/s}$", "$\\text{m/s}^2$", "$\\text{km/h}$", "$\\text{m} \\cdot \\text{s}$"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Chuyển động thẳng biến đổi đều",
        explanation: "Gia tốc có đơn vị là mét trên giây bình phương ($\\text{m/s}^2$)."
      },
      {
        id: "ly1_02",
        q: "Một chất điểm chuyển động dọc trục $Ox$ có phương trình $x = 4 - 2t + 3t^2$ ($x$ tính bằng m, $t$ tính bằng s). Gia tốc của chất điểm bằng:",
        options: ["$3\\text{ m/s}^2$", "$-2\\text{ m/s}^2$", "$6\\text{ m/s}^2$", "$1.5\\text{ m/s}^2$"],
        answer: 2,
        level: "TH",
        topic: "Bài 1: Chuyển động thẳng biến đổi đều",
        explanation: "So sánh với phương trình $x = x_0 + v_0 t + \\frac{1}{2}at^2 \\implies \\frac{1}{2}a = 3 \\implies a = 6\\text{ m/s}^2$."
      },
      {
        id: "ly1_03",
        q: "Một ô tô đang chạy với vận tốc $15\\text{ m/s}$ thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn $2\\text{ m/s}^2$. Quãng đường ô tô đi được đến khi dừng hẳn là:",
        options: ["$56.25\\text{ m}$", "$112.5\\text{ m}$", "$28.125\\text{ m}$", "$7.5\\text{ m}$"],
        answer: 0,
        level: "VD",
        topic: "Bài 1: Chuyển động thẳng biến đổi đều",
        explanation: "Áp dụng $v^2 - v_0^2 = 2as \\implies 0 - 15^2 = 2(-2)s \\implies s = 56.25\\text{ m}$."
      },
      {
        id: "ly1_04",
        q: "Thả rơi tự do một hòn đá từ độ cao $125\\text{ m}$ xuống đất. Lấy $g = 10\\text{ m/s}^2$. Thời gian hòn đá chạm đất là:",
        options: ["$2.5\\text{ s}$", "$5\\text{ s}$", "$12.5\\text{ s}$", "$10\\text{ s}$"],
        answer: 1,
        level: "TH",
        topic: "Bài 2: Rơi tự do",
        explanation: "$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 125}{10}} = \\sqrt{25} = 5\\text{ s}$."
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
    summary: "Định luật I, II, III Newton, quán tính, trọng lực, lực ma sát trượt, lực đàn hồi (Định luật Hooke), lực căng dây, lực đẩy Archimedes.",
    keyFormulas: [
      { name: "Định luật II Newton", formula: "$$\\vec{F}_{hl} = m\\vec{a} \\iff \\vec{a} = \\frac{\\vec{F}}{m}$$" },
      { name: "Lực ma sát trượt", formula: "$$F_{mst} = \\mu_t \\cdot N$$" },
      { name: "Định luật Hooke", formula: "$$F_{dh} = k \\cdot |\\Delta l| = k \\cdot |l - l_0|$$" },
      { name: "Lực đẩy Archimedes", formula: "$$F_A = \\rho \\cdot g \\cdot V$$" }
    ],
    theoryHtml: `
      <div class="space-y-3 text-xs text-slate-300 leading-relaxed">
        <p>• <strong>ĐL I Newton:</strong> Hợp lực bằng 0 $\\implies$ vật bảo toàn trạng thái vận tốc (quán tính).</p>
        <p>• <strong>ĐL II Newton:</strong> $\\vec{F} = m\\vec{a}$. Khối lượng đặc trưng cho mức quán tính.</p>
        <p>• <strong>ĐL III Newton:</strong> $\\vec{F}_{BA} = -\\vec{F}_{AB}$ (cặp lực và phản lực đặt vào 2 vật khác nhau nên không triệt tiêu).</p>
      </div>
    `,
    methodsHtml: `<p class="text-xs text-slate-300">• Phương pháp động lực học: Biểu diễn lực $\\to$ Chiếu lên $Ox, Oy \\to a = \\frac{F_k\\cos\\alpha - \\mu N}{m}$.</p>`,
    essaysHtml: `<p class="text-xs text-slate-300">• Hệ vật máy Atwood: Gia tốc $a = 2\\text{ m/s}^2$, lực căng dây $T = 24\\text{ N}$.</p>`,
    quizzes: [
      {
        id: "ly2_01",
        q: "Đại lượng nào đặc trưng cho mức quán tính của một vật?",
        options: ["Vận tốc", "Khối lượng", "Lực tác dụng", "Gia tốc"],
        answer: 1,
        level: "NB",
        topic: "Bài 1: Ba định luật Newton",
        explanation: "Theo Định luật I Newton, khối lượng là đại lượng đặc trưng cho mức quán tính của vật."
      },
      {
        id: "ly2_02",
        q: "Khi một lực $F$ tác dụng vào vật khối lượng $m_1$ gây ra gia tốc $a_1 = 6\\text{ m/s}^2$, tác dụng vào $m_2$ gây gia tốc $a_2 = 3\\text{ m/s}^2$. Khi tác dụng vào vật $m = m_1 + m_2$ thì gia tốc là:",
        options: ["$9\\text{ m/s}^2$", "$4.5\\text{ m/s}^2$", "$2\\text{ m/s}^2$", "$1.5\\text{ m/s}^2$"],
        answer: 2,
        level: "TH",
        topic: "Bài 1: Ba định luật Newton",
        explanation: "$\\frac{1}{a} = \\frac{1}{a_1} + \\frac{1}{a_2} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2} \\implies a = 2\\text{ m/s}^2$."
      },
      {
        id: "ly2_03",
        q: "Treo một vật $m = 500\\text{ g}$ vào lò xo có độ cứng $k = 100\\text{ N/m}$. Lấy $g = 10\\text{ m/s}^2$. Độ dãn của lò xo khi cân bằng là:",
        options: ["$5\\text{ cm}$", "$2\\text{ cm}$", "$0.5\\text{ cm}$", "$50\\text{ cm}$"],
        answer: 0,
        level: "TH",
        topic: "Bài 2: Các lực cơ học",
        explanation: "$\\Delta l = \\frac{mg}{k} = \\frac{0.5 \\times 10}{100} = 0.05\\text{ m} = 5\\text{ cm}$."
      }
    ],
    keywords: ["ly", "dong luc hoc", "newton", "quan tinh", "ma sat", "dan hoi", "hooke", "archimedes", "ap luc"]
  }
];
