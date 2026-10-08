# TOÁN 10 – CHƯƠNG 1: MỆNH ĐỀ & TẬP HỢP
*(Biên soạn chuẩn theo chương trình GDPT 2018)*

---

## 📖 PHẦN 1: LÝ THUYẾT TỔNG HỢP & BẢN ĐỒ KHÁI NIỆM

### 1. Mệnh đề & Mệnh đề chứa biến
* **Mệnh đề logic:** Là một khẳng định **chỉ có thể đúng hoặc sai**, không thể vừa đúng vừa sai.
  * *Lưu ý:* Câu hỏi, câu cảm thán, câu mệnh lệnh **không phải** là mệnh đề.
* **Mệnh đề chứa biến:** Là câu khẳng định chứa biến số $x, y, \dots$, tính đúng/sai phụ thuộc vào giá trị cụ thể của biến.  
  *(Ví dụ: $P(x): "x + 2 > 5"$ là mệnh đề chứa biến).*
* **Mệnh đề phủ định ($\overline{P}$):** 
  * $\overline{P}$ đúng khi $P$ sai, và $\overline{P}$ sai khi $P$ đúng.
  * Khi phủ định mệnh đề chứa $\forall$ và $\exists$:
    $$\overline{\forall x \in X, P(x)} \iff \exists x \in X, \overline{P(x)}$$
    $$\overline{\exists x \in X, P(x)} \iff \forall x \in X, \overline{P(x)}$$

### 2. Mệnh đề kéo theo & Mệnh đề tương đương
* **Mệnh đề kéo theo ($P \Rightarrow Q$):** "Nếu $P$ thì $Q$".
  * Mệnh đề $P \Rightarrow Q$ **chỉ sai** khi $P$ đúng mà $Q$ sai.
  * $P$ là **điều kiện đủ** để có $Q$.
  * $Q$ là **điều kiện cần** để có $P$.
* **Mệnh đề đảo:** Mệnh đề đảo của $P \Rightarrow Q$ là $Q \Rightarrow P$.
* **Mệnh đề tương đương ($P \Leftrightarrow Q$):** "$P$ khi và chỉ khi $Q$" hoặc "$P$ là điều kiện cần và đủ để có $Q$".
  * $P \Leftrightarrow Q$ đúng khi cả $P$ và $Q$ cùng đúng hoặc cùng sai.

### 3. Tập hợp & Các phép toán trên tập hợp
* **Biểu diễn tập hợp:** Liệt kê các phần tử hoặc Chỉ ra tính chất đặc trưng.
* **Tập rỗng ($\emptyset$):** Tập hợp không chứa phần tử nào ($x \in \emptyset$ là sai với mọi $x$).
* **Tập con ($A \subset B$):** $\forall x \in A \Rightarrow x \in B$.
  * Quy ước: $\emptyset \subset A$ và $A \subset A$ với mọi tập hợp $A$.
  * Số tập con của tập hợp có $n$ phần tử là $2^n$.
* **Hai tập hợp bằng nhau ($A = B$):** Khi $A \subset B$ và $B \subset A$.

#### 📌 Bảng tổng hợp các phép toán tập hợp:
| Phép toán | Ký hiệu | Định nghĩa | Biểu diễn logic |
| :--- | :---: | :--- | :--- |
| **Giao** | $A \cap B$ | Lấy phần tử **chung** của cả $A$ và $B$ | $x \in A \cap B \iff x \in A \text{ và } x \in B$ |
| **Hợp** | $A \cup B$ | Lấy **tất cả** phần tử thuộc $A$ hoặc thuộc $B$ | $x \in A \cup B \iff x \in A \text{ hoặc } x \in B$ |
| **Hiệu** | $A \setminus B$ | Thuộc $A$ nhưng **không thuộc** $B$ | $x \in A \setminus B \iff x \in A \text{ và } x \notin B$ |
| **Phần bù** | $C_E A$ | Là $E \setminus A$ (với điều kiện $A \subset E$) | $x \in C_E A \iff x \in E \text{ và } x \notin A$ |

### 4. Các tập con thường gặp của tập số thực $\mathbb{R}$
* **Khoảng:** $(a; b) = \{x \in \mathbb{R} \mid a < x < b\}$; $(-\infty; a) = \{x \in \mathbb{R} \mid x < a\}$.
* **Đoạn:** $[a; b] = \{x \in \mathbb{R} \mid a \le x \le b\}$.
* **Nửa khoảng:** $[a; b) = \{x \in \mathbb{R} \mid a \le x < b\}$; $(a; b] = \{x \in \mathbb{R} \mid a < x \le b\}$.

### ⚠️ Bẫy lý thuyết học sinh hay mắc phải:
1. Nhầm lẫn khi phủ định dấu bất đẳng thức: Phủ định của "$>$" là "$\le$" (không phải là "$<$").
2. Quên xét trường hợp tập con là tập rỗng $\emptyset$ khi giải bài toán chứa tham số $m$.
3. Nhầm lẫn giữa "Điều kiện cần" và "Điều kiện đủ".

---

## 💡 PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

### 🎯 Dạng 1: Xét tính đúng/sai và Lập mệnh đề phủ định
* **Phương pháp:**
  * Mệnh đề $\forall$: Muốn chứng minh đúng phải chứng minh với mọi $x$; muốn chứng minh sai chỉ cần chỉ ra **1 phản ví dụ**.
  * Mệnh đề $\exists$: Muốn chứng minh đúng chỉ cần chỉ ra **1 ví dụ thỏa mãn**.
  * Khi phủ định: Chuyển $\forall \rightarrow \exists$, $\exists \rightarrow \forall$, và phủ định mệnh đề phía sau.
* **Ví dụ mẫu:** Lập mệnh đề phủ định của $P: "\forall x \in \mathbb{R}, x^2 + 1 > 0"$.
  * *Lời giải:* $\overline{P}: "\exists x \in \mathbb{R}, x^2 + 1 \le 0"$. (Mệnh đề $P$ đúng, $\overline{P}$ sai).

---

### 🎯 Dạng 2: Xác định tập hợp & Tìm số phần tử của tập hợp
* **Phương pháp:** Giải phương trình / bất phương trình để tìm nghiệm thỏa mãn điều kiện tập số ($x \in \mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$).
* **Ví dụ mẫu:** Tìm các phần tử của tập $A = \{x \in \mathbb{Z} \mid (2x^2 - 5x + 2)(x^2 - 2) = 0\}$.
  * *Phân tích:* $(2x^2 - 5x + 2)(x^2 - 2) = 0 \iff x = 2$, $x = \frac{1}{2}$, $x = \pm\sqrt{2}$.
  * *Đối chiếu điều kiện $x \in \mathbb{Z}$:* Chỉ nhận $x = 2$.
  * *Kết luận:* $A = \{2\}$.

---

### 🎯 Dạng 3: Các phép toán giao, hợp, hiệu trên tập số thực (Dùng trục số)
* **Phương pháp 4 bước:**
  1. Vẽ một trục số chung.
  2. Biểu diễn các khoảng/đoạn lên trục số (dùng ngoặc tròn, ngoặc vuông tương ứng).
  3. Gạch bỏ phần không thỏa mãn định nghĩa phép toán:
     * *Giao ($A \cap B$):* Gạch phần nằm ngoài $A$ và gạch phần nằm ngoài $B$.
     * *Hợp ($A \cup B$):* Lấy tất cả các phần được tô bởi $A$ hoặc $B$.
     * *Hiệu ($A \setminus B$):* Lấy phần thuộc $A$ nhưng gạch bỏ phần thuộc $B$.
  4. Đọc kết quả từ các khoảng còn lại trên trục số.
* **Ví dụ mẫu:** Cho $A = [-2; 3)$ và $B = (1; 5]$. Tìm $A \cap B, A \cup B, A \setminus B$.
  * *Lời giải:*
    * $A \cap B = (1; 3)$
    * $A \cup B = [-2; 5]$
    * $A \setminus B = [-2; 1]$ *(chú ý tại điểm 1: vì $1 \notin B$ nên $1 \in A \setminus B$, dùng ngoặc vuông).*

---

### 🎯 Dạng 4: Bài toán tập hợp chứa tham số $m$
* **Phương pháp:** 
  * Biểu diễn điều kiện bài toán ($A \subset B$, $A \cap B = \emptyset$, $A \cap B \neq \emptyset$) thành bất phương trình chứa $m$.
  * Chú ý xét kỹ dấu bằng "$=$" tại các đầu mút.
* **Ví dụ mẫu:** Cho $A = (m-1; m+3)$ và $B = [-2; 4]$. Tìm $m$ để $A \subset B$.
  * *Điều kiện để $A \subset B$:* Đầu mút trái của $A \ge$ đầu mút trái của $B$ VÀ đầu mút phải của $A \le$ đầu mút phải của $B$.
  * $\begin{cases} m - 1 \ge -2 \\ m + 3 \le 4 \end{cases} \iff \begin{cases} m \ge -1 \\ m \le 1 \end{cases} \iff -1 \le m \le 1$.

---

## ✍️ PHẦN 3: BÀI TẬP TỰ LUẬN (Chuẩn hóa lời giải)

### 📝 Bài 1: (Phép toán tập hợp & Trục số)
**Đề bài:** Cho các tập hợp $A = \{x \in \mathbb{R} \mid x \ge -3\}$, $B = \{x \in \mathbb{R} \mid -5 < x \le 2\}$, $C = \{x \in \mathbb{R} \mid x > 4\}$.
1. Viết lại các tập hợp $A, B, C$ dưới dạng khoảng, đoạn, nửa khoảng.
2. Tìm $(A \cap B) \cup C$ và $C_{\mathbb{R}}(A \cup B)$.

**Lời giải chi tiết:**
1. Biểu diễn dưới dạng khoảng, đoạn:
   * $A = [-3; +\infty)$
   * $B = (-5; 2]$
   * $C = (4; +\infty)$
2. Thực hiện phép toán:
   * Tìm $A \cap B$: $A \cap B = [-3; +\infty) \cap (-5; 2] = [-3; 2]$.
   * Tìm $(A \cap B) \cup C = [-3; 2] \cup (4; +\infty)$.
   * Tìm $A \cup B = (-5; +\infty)$.
   * Phần bù $C_{\mathbb{R}}(A \cup B) = \mathbb{R} \setminus (-5; +\infty) = (-\infty; -5]$.

---

### 📝 Bài 2: (Bài toán thực tế ứng dụng biểu đồ Venn)
**Đề bài:** Lớp 10A có 45 học sinh. Trong đó có 25 bạn thích môn Toán, 20 bạn thích môn Vật Lý, 18 bạn thích môn Hóa Học. Có 12 bạn thích cả Toán và Lý, 8 bạn thích cả Lý và Hóa, 10 bạn thích cả Toán và Hóa. Có 5 bạn thích cả 3 môn Toán, Lý, Hóa. Hỏi lớp 10A có bao nhiêu bạn không thích môn nào trong 3 môn trên?

**Lời giải chi tiết:**
* Gọi $T, L, H$ lần lượt là tập hợp các học sinh thích môn Toán, Lý, Hóa.
* Theo công thức số phần tử của hợp 3 tập hợp:
  $$|T \cup L \cup H| = |T| + |L| + |H| - (|T \cap L| + |L \cap H| + |T \cap H|) + |T \cap L \cap H|$$
* Thay số:
  $$|T \cup L \cup H| = 25 + 20 + 18 - (12 + 8 + 10) + 5 = 63 - 30 + 5 = 38 \text{ (học sinh)}$$
* Số học sinh không thích môn nào trong cả 3 môn là:
  $$45 - 38 = 7 \text{ (học sinh)}.$$
* **Đáp số:** 7 học sinh.

---

### 📝 Bài 3: (Bài toán tập hợp chứa tham số)
**Đề bài:** Cho hai tập hợp $A = [m; m+2]$ và $B = [1; 5]$. Tìm tất cả các giá trị của tham số $m$ để $A \cap B = \emptyset$.

**Lời giải chi tiết:**
* Ta có: $A \cap B = \emptyset$ khi và chỉ khi tập $A$ nằm hoàn toàn về phía bên trái của $B$ hoặc nằm hoàn toàn về phía bên phải của $B$.
* **Trường hợp 1 (A nằm hẳn bên trái B):**
  $$m + 2 < 1 \iff m < -1$$
* **Trường hợp 2 (A nằm hẳn bên phải B):**
  $$m > 5$$
* **Kết luận:** Để $A \cap B = \emptyset$ thì $m \in (-\infty; -1) \cup (5; +\infty)$.

---

## 🎲 PHẦN 4: NGÂN HÀNG TRẮC NGHIỆM TRỘN ĐỀ

*(Hệ thống mã câu: `[Môn_Chương_MứcĐộ_Dạng_ID]` để phần mềm tự động bốc ngẫu nhiên tạo nhiều mã đề)*

### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (1 Câu / 1 Đáp án đúng)

**Câu 1 `[TOAN10_C1_NB_01]`:** Trong các câu sau, câu nào là mệnh đề?
* A. $x + 1 > 0$.
* B. Hôm nay trời đẹp quá!
* C. Số 15 là số nguyên tố.
* D. Bạn có thích học toán không?  
* 👉 **Đáp án:** **C** *(Vì C là một khẳng định có tính đúng/sai rõ ràng - cụ thể là mệnh đề sai).*

---

**Câu 2 `[TOAN10_C1_TH_02]`:** Cho tập hợp $X = \{x \in \mathbb{N} \mid (x^2 - 4)(x - 1) = 0\}$. Số phần tử của tập hợp $X$ là:
* A. 1
* B. 2
* C. 3
* D. 0  
* 👉 **Đáp án:** **B** *(Phương trình có nghiệm $x = 2, x = -2, x = 1$. Do $x \in \mathbb{N}$ nên $X = \{1; 2\}$, có 2 phần tử).*

---

**Câu 3 `[TOAN10_C1_VD_03]`:** Cho hai tập hợp $A = (-3; 2]$ và $B = [0; 5)$. Khi đó tập hợp $A \setminus B$ là:
* A. $(-3; 0]$
* B. $(-3; 0)$
* C. $(2; 5)$
* D. $[0; 2]$  
* 👉 **Đáp án:** **B** *(Phần thuộc $A$ nhưng không thuộc $B$: $x \in (-3; 2]$ và $x \notin [0; 5) \Rightarrow x \in (-3; 0)$).*

---

**Câu 4 `[TOAN10_C1_VDC_04]`:** Cho hai tập hợp $A = [m-1; m+2)$ và $B = [2; 6]$. Có bao nhiêu giá trị nguyên của tham số $m$ để $A \cap B \neq \emptyset$?
* A. 5
* B. 6
* C. 7
* D. 8  
* 👉 **Đáp án:** **C** *(Để $A \cap B \neq \emptyset \iff 0 < m \le 7 \Rightarrow m \in \{1;2;3;4;5;6;7\}$ có 7 giá trị).*

---

### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (Định dạng đề thi mới GDPT 2018)

**Câu 5 `[TOAN10_C1_TF_01]`:** Cho mệnh đề chứa biến $P(n): "n^2 + 1 \text{ chia hết cho 5}"$ với $n \in \mathbb{N}$.
* a) Với $n = 2$, mệnh đề $P(2)$ là mệnh đề đúng.
* b) Với $n = 3$, mệnh đề $P(3)$ là mệnh đề đúng.
* c) Mệnh đề phủ định của $\exists n \in \mathbb{N}, P(n)$ là "$\forall n \in \mathbb{N}, n^2 + 1 \text{ không chia hết cho 5}$".
* d) Mệnh đề "$\forall n \in \mathbb{N}, P(n)$" là mệnh đề đúng.

👉 **Đáp án:**
* **a) ĐÚNG** ($2^2 + 1 = 5 \;\vdots\; 5$).
* **b) SAI** ($3^2 + 1 = 10 \;\vdots\; 5$ nên $P(3)$ đúng).
* **c) ĐÚNG** (Quy tắc phủ định $\exists \rightarrow \forall$).
* **d) SAI** (Với $n = 1 \Rightarrow 1^2 + 1 = 2$ không chia hết cho 5).

---

### PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN (Điền đáp số)

**Câu 6 `[TOAN10_C1_SA_01]`:** Cho tập hợp $A$ có 5 phần tử. Hỏi tập hợp $A$ có tất cả bao nhiêu tập hợp con có đúng 2 phần tử?  
👉 **Đáp số:** `10`  
*(Giải thích: Số tập con có 2 phần tử là tổ hợp $C_5^2 = 10$).*

**Câu 7 `[TOAN10_C1_SA_02]`:** Cho hai khoảng $A = (-\infty; 4m)$ và $B = \left(\frac{16}{m}; +\infty\right)$ với $m > 0$. Tìm giá trị nhỏ nhất của $m$ để $A \cup B = \mathbb{R}$.  
👉 **Đáp số:** `2`  
*(Giải thích: $\frac{16}{m} \le 4m \iff 4m^2 \ge 16 \iff m \ge 2$).*
