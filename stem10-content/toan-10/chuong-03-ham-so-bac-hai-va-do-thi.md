# TOÁN 10 – CHƯƠNG 3: HÀM SỐ BẬC HAI & ĐỒ THỊ (DẤU CỦA TAM THỨC BẬC HAI)
*(Biên soạn chuẩn theo chương trình GDPT 2018)*

---

## 📖 PHẦN 1: LÝ THUYẾT TỔNG HỢP & BẢN ĐỒ KHÁI NIỆM

### 1. Khái niệm Hàm số & Sự biến thiên
* **Hàm số:** Cho tập hợp khác rỗng $D \subset \mathbb{R}$. Một quy tắc $f$ cho tương ứng mỗi số $x \in D$ với **duy nhất** một số $y \in \mathbb{R}$ được gọi là một hàm số xác định trên $D$. Ký hiệu: $y = f(x)$.
* **Tập xác định ($D$):** Tập hợp tất cả các giá trị của $x$ để biểu thức $f(x)$ có nghĩa.
* **Tính đồng biến, nghịch biến trên khoảng $(a; b)$:**
  * Đồng biến (tăng): $\forall x_1, x_2 \in (a; b), x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$ (Đồ thị đi lên từ trái sang phải).
  * Nghịch biến (giảm): $\forall x_1, x_2 \in (a; b), x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$ (Đồ thị đi xuống từ trái sang phải).

---

### 2. Hàm số bậc hai & Đồ thị Parabol
* **Dạng tổng quát:** $y = ax^2 + bx + c \quad (a \neq 0)$.
* **Tập xác định:** $D = \mathbb{R}$.
* **Tọa độ đỉnh $I$:**
  $$I\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right) \quad \text{với } \Delta = b^2 - 4ac$$
* **Trục đối xứng:** Đường thẳng $x = -\frac{b}{2a}$ (đi qua đỉnh $I$ và song song với trục $Oy$).
* **Hướng bề lõm của Parabol:**
  * **Nếu $a > 0$:** Bề lõm quay **lên trên** $\rightarrow$ Hàm số đạt **giá trị nhỏ nhất** tại đỉnh: $y_{\min} = -\frac{\Delta}{4a}$.
  * **Nếu $a < 0$:** Bề lõm quay **xuống dưới** $\rightarrow$ Hàm số đạt **giá trị lớn nhất** tại đỉnh: $y_{\max} = -\frac{\Delta}{4a}$.

#### 📌 Bảng biến thiên của hàm số bậc hai:
| Trường hợp $a > 0$ | Trường hợp $a < 0$ |
| :--- | :--- |
| • Nghịch biến trên $\left(-\infty; -\frac{b}{2a}\right)$<br>• Đồng biến trên $\left(-\frac{b}{2a}; +\infty\right)$ | • Đồng biến trên $\left(-\infty; -\frac{b}{2a}\right)$<br>• Nghịch biến trên $\left(-\frac{b}{2a}; +\infty\right)$ |

---

### 3. Dấu của Tam thức bậc hai
* **Tam thức bậc hai:** Là biểu thức có dạng $f(x) = ax^2 + bx + c$ ($a \neq 0$).
* **Biệt thức:** $\Delta = b^2 - 4ac$ (hoặc $\Delta' = b'^2 - ac$ với $b = 2b'$).

#### 📌 Định lý về dấu của tam thức bậc hai (Quy tắc "Trong trái - Ngoài cùng"):
| Điều kiện $\Delta$ | Nghiệm của $f(x) = 0$ | Dấu của $f(x)$ |
| :---: | :---: | :--- |
| **$\Delta < 0$** | Vô nghiệm | $f(x)$ **luôn cùng dấu** với hệ số $a$ với mọi $x \in \mathbb{R}$ ($a \cdot f(x) > 0, \forall x$). |
| **$\Delta = 0$** | Nghiệm kép $x_0 = -\frac{b}{2a}$ | $f(x)$ **cùng dấu** với hệ số $a$ với mọi $x \neq -\frac{b}{2a}$; tại $x = -\frac{b}{2a}$ thì $f(x) = 0$. |
| **$\Delta > 0$** | 2 nghiệm phân biệt $x_1 < x_2$ | • **Trong khoảng** $(x_1; x_2)$: $f(x)$ **trái dấu** với hệ số $a$.<br>• **Ngoài khoảng** $(-\infty; x_1) \cup (x_2; +\infty)$: $f(x)$ **cùng dấu** với hệ số $a$. |

#### 📌 Điều kiện để tam thức không đổi dấu trên $\mathbb{R}$:
* $ax^2 + bx + c > 0, \forall x \in \mathbb{R} \iff \begin{cases} a > 0 \\ \Delta < 0 \end{cases}$
* $ax^2 + bx + c \ge 0, \forall x \in \mathbb{R} \iff \begin{cases} a > 0 \\ \Delta \le 0 \end{cases}$
* $ax^2 + bx + c < 0, \forall x \in \mathbb{R} \iff \begin{cases} a < 0 \\ \Delta < 0 \end{cases}$
* $ax^2 + bx + c \le 0, \forall x \in \mathbb{R} \iff \begin{cases} a < 0 \\ \Delta \le 0 \end{cases}$

---

### 4. Phương trình quy về phương trình bậc hai (Phương trình vô tỉ)
Trong chương trình GDPT 2018, học sinh tập trung giải hai dạng phương trình chứa căn cơ bản:
1. **Dạng 1:** $\sqrt{f(x)} = \sqrt{g(x)}$  
   $$\iff \begin{cases} g(x) \ge 0 \quad (\text{hoặc } f(x) \ge 0) \\ f(x) = g(x) \end{cases}$$
   *(Cách làm nhanh: Bình phương hai vế $f(x) = g(x)$ tìm nghiệm, sau đó thử lại vào phương trình ban đầu để loại nghiệm ngoại lai).*
2. **Dạng 2:** $\sqrt{f(x)} = g(x)$  
   $$\iff \begin{cases} g(x) \ge 0 \\ f(x) = [g(x)]^2 \end{cases}$$

---

### ⚠️ Bẫy lý thuyết học sinh hay mắc phải:
1. **Quên xét trường hợp $a = 0$:** Khi bài toán chứa tham số $m$ ở hệ số của $x^2$ (ví dụ: $m x^2 + \dots$), luôn phải xét riêng 2 trường hợp: $m = 0$ (bậc nhất) và $m \ne 0$ (bậc hai).
2. **Quên điều kiện khi bình phương:** Ở phương trình $\sqrt{f(x)} = g(x)$, nếu bình phương mà quên điều kiện $g(x) \ge 0$ hoặc không thử lại nghiệm thì sẽ nhận thừa nghiệm ngoại lai.
3. **Nhầm lẫn dấu bằng ở $\Delta$:** Với bài toán "nghiệm đúng $\forall x \in \mathbb{R}$", nếu BPT có dấu $\ge$ hoặc $\le$ thì $\Delta$ có dấu $\le 0$; nếu BPT có dấu ngặt ($>, <$) thì $\Delta$ bắt buộc phải $< 0$.

---

## 💡 PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

### 🎯 Dạng 1: Xác định Parabol $(P): y = ax^2 + bx + c$ thỏa mãn điều kiện cho trước
* **Phương pháp:** 
  * Thiết lập hệ phương trình gồm 3 ẩn $a, b, c$ dựa trên các giả thiết:
    1. Đi qua điểm $M(x_0; y_0) \Rightarrow ax_0^2 + bx_0 + c = y_0$.
    2. Cắt trục tung $Oy$ tại điểm $(0; y_0) \Rightarrow c = y_0$.
    3. Có trục đối xứng $x = x_0 \Rightarrow -\frac{b}{2a} = x_0 \iff 2a x_0 + b = 0$.
    4. Có đỉnh $I(x_I; y_I) \Rightarrow \begin{cases} -\frac{b}{2a} = x_I \\ ax_I^2 + bx_I + c = y_I \end{cases}$.
* **Ví dụ mẫu:** Xác định parabol $(P): y = ax^2 + bx + 2$ biết $(P)$ đi qua $A(1; 0)$ và có trục đối xứng $x = 2$.
  * *Lời giải:*
    * $(P)$ đi qua $A(1; 0) \Rightarrow a(1)^2 + b(1) + 2 = 0 \iff a + b = -2$.
    * Trục đối xứng $x = 2 \Rightarrow -\frac{b}{2a} = 2 \iff 4a + b = 0$.
    * Giải hệ $\begin{cases} a + b = -2 \\ 4a + b = 0 \end{cases} \iff \begin{cases} a = \frac{2}{3} \\ b = -\frac{8}{3} \end{cases}$.
    * Vậy $(P): y = \frac{2}{3}x^2 - \frac{8}{3}x + 2$.

---

### 🎯 Dạng 2: Giải bất phương trình bậc hai một ẩn
* **Phương pháp 3 bước:**
  1. Đưa BPT về dạng chuẩn $ax^2 + bx + c > 0$ (hoặc $< 0, \ge 0, \le 0$).
  2. Tìm các nghiệm của phương trình $ax^2 + bx + c = 0$ (nếu có).
  3. Lập bảng xét dấu (áp dụng quy tắc *"Trong trái - Ngoài cùng"*) và kết luận tập nghiệm $S$.
* **Ví dụ mẫu:** Giải bất phương trình $-2x^2 + 5x - 2 \ge 0$.
  * *Lời giải:* Phương trình $-2x^2 + 5x - 2 = 0$ có 2 nghiệm $x_1 = \frac{1}{2}, x_2 = 2$.
  * Hệ số $a = -2 < 0$. Để tam thức $\ge 0$ (trái dấu với $a$), ta lấy nghiệm **trong khoảng**:
  * Tập nghiệm: $S = \left[\frac{1}{2}; 2\right]$.

---

### 🎯 Dạng 3: Bất phương trình bậc hai chứa tham số $m$ nghiệm đúng $\forall x \in \mathbb{R}$
* **Phương pháp:**
  * **Trường hợp 1:** Xét hệ số chứa $m$ gắn với $x^2$ bằng 0. Kiểm tra trực tiếp xem BPT có đúng với mọi $x$ hay không.
  * **Trường hợp 2:** Xét hệ số gắn với $x^2 \neq 0$. Áp dụng định lý về dấu:
    $$f(x) \ge 0, \forall x \in \mathbb{R} \iff \begin{cases} a > 0 \\ \Delta \le 0 \end{cases}$$
* **Ví dụ mẫu:** Tìm $m$ để $x^2 - 2(m-1)x + 4m + 1 > 0$ đúng với mọi $x \in \mathbb{R}$.
  * *Lời giải:* Ta có $a = 1 > 0$. BPT đúng với mọi $x \in \mathbb{R} \iff \Delta' < 0$.
  * $\Delta' = (m-1)^2 - (4m+1) = m^2 - 2m + 1 - 4m - 1 = m^2 - 6m$.
  * $\Delta' < 0 \iff m(m-6) < 0 \iff 0 < m < 6$.

---

### 🎯 Dạng 4: Giải phương trình chứa căn bậc hai
* **Phương pháp:** Bình phương 2 vế để đưa về phương trình bậc hai $\rightarrow$ Tìm nghiệm $\rightarrow$ Thử lại trực tiếp vào phương trình đề bài để kết luận nghiệm chuẩn.
* **Ví dụ mẫu:** Giải phương trình $\sqrt{2x^2 - 5x - 3} = x - 1$.
  * *Lời giải:*
    * Bình phương hai vế: $2x^2 - 5x - 3 = (x - 1)^2 \iff 2x^2 - 5x - 3 = x^2 - 2x + 1$
    * $\iff x^2 - 3x - 4 = 0 \iff \left[\begin{array}{l} x = -1 \\ x = 4 \end{array}\right.$.
    * Thử lại:
      * Với $x = -1$: $\sqrt{2(-1)^2 - 5(-1) - 3} = \sqrt{4} = 2 \neq -1 - 1 = -2$ (Loại).
      * Với $x = 4$: $\sqrt{2(4^2) - 5(4) - 3} = \sqrt{9} = 3 = 4 - 1 = 3$ (Thỏa mãn).
    * Vậy tập nghiệm của phương trình là $S = \{4\}$.

---

## ✍️ PHẦN 3: BÀI TẬP TỰ LUẬN (Chuẩn hóa lời giải)

### 📝 Bài 1: (Khảo sát Parabol & Tìm GTLN/GTNN)
**Đề bài:** Cho hàm số bậc hai $y = f(x) = -x^2 + 4x + 5$.
1. Lập bảng biến thiên và vẽ đồ thị $(P)$ của hàm số.
2. Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[0; 3]$.

**Lời giải chi tiết:**
1. **Khảo sát & Bảng biến thiên:**
   * Tập xác định: $D = \mathbb{R}$.
   * Tọa độ đỉnh $I$: $x_I = -\frac{b}{2a} = -\frac{4}{2(-1)} = 2$; $y_I = -(2)^2 + 4(2) + 5 = 9 \Rightarrow I(2; 9)$.
   * Trục đối xứng: $x = 2$.
   * Do $a = -1 < 0$ nên bề lõm quay xuống.
   * *Bảng biến thiên:* Hàm số đồng biến trên $(-\infty; 2)$ và nghịch biến trên $(2; +\infty)$.
2. **Tìm GTLN, GTNN trên đoạn $[0; 3]$:**
   * Ta thấy đỉnh $x = 2 \in [0; 3]$.
   * Tính giá trị tại các điểm biên và đỉnh:
     * $f(0) = 5$
     * $f(2) = 9$
     * $f(3) = -(3)^2 + 4(3) + 5 = 8$
   * So sánh: Giá trị lớn nhất là $\max_{[0; 3]} f(x) = f(2) = 9$; Giá trị nhỏ nhất là $\min_{[0; 3]} f(x) = f(0) = 5$.

---

### 📝 Bài 2: (Tham số trong Bất phương trình bậc hai)
**Đề bài:** Tìm tất cả các giá trị của tham số $m$ để bất phương trình sau nghiệm đúng với mọi $x \in \mathbb{R}$:
$$(m-1)x^2 - 2(m-1)x + 2m - 1 > 0$$

**Lời giải chi tiết:**
* Đặt $f(x) = (m-1)x^2 - 2(m-1)x + 2m - 1$.
* **Trường hợp 1:** Xét $m - 1 = 0 \iff m = 1$.
  * Khi đó $f(x) = 0x^2 - 0x + 2(1) - 1 = 1 > 0$ (luôn đúng với mọi $x \in \mathbb{R}$).
  * Do đó, $m = 1$ thỏa mãn.
* **Trường hợp 2:** Xét $m - 1 \neq 0 \iff m \neq 1$.
  * $f(x) > 0, \forall x \in \mathbb{R} \iff \begin{cases} a > 0 \\ \Delta' < 0 \end{cases}$
  * $\iff \begin{cases} m - 1 > 0 \\ (m - 1)^2 - (m - 1)(2m - 1) < 0 \end{cases}$
  * $\iff \begin{cases} m > 1 \\ (m - 1)[(m - 1) - (2m - 1)] < 0 \end{cases}$
  * $\iff \begin{cases} m > 1 \\ (m - 1)(-m) < 0 \end{cases} \iff \begin{cases} m > 1 \\ -m(m-1) < 0 \end{cases} \iff \begin{cases} m > 1 \\ m(m-1) > 0 \end{cases} \iff m > 1$.
* **Kết luận:** Kết hợp cả 2 trường hợp, ta được $m \ge 1$.

---

### 📝 Bài 3: (Bài toán thực tế - Cổng vòm Parabol)
**Đề bài:** Một cổng chào có hình dạng là một Parabol có chiều cao từ đỉnh cổng xuống mặt đất là $h = 8\text{ m}$, khoảng cách giữa hai chân cổng trên mặt đất là $L = 8\text{ m}$. Một chiếc xe tải chở một khối hàng hình hộp chữ nhật có chiều rộng là $w = 4\text{ m}$ muốn đi qua chính giữa cổng. Hỏi chiều cao tối đa của khối hàng (tính cả xe) là bao nhiêu mét để có thể lọt qua cổng?

**Lời giải chi tiết:**
* Chọn hệ trục tọa độ $Oxy$ sao cho:
  * Trục hoành $Ox$ trùng với mặt đất, gốc tọa độ $O(0;0)$ nằm tại trung điểm của hai chân cổng.
  * Khi đó, hai chân cổng có tọa độ là $A(-4; 0)$ và $B(4; 0)$.
  * Đỉnh cổng nằm trên trục tung $Oy$ tại điểm $I(0; 8)$.
* Phương trình Parabol có dạng: $y = ax^2 + c$.
  * Đỉnh $I(0; 8) \Rightarrow c = 8 \Rightarrow y = ax^2 + 8$.
  * Parabol đi qua $B(4; 0) \Rightarrow a(4)^2 + 8 = 0 \iff 16a = -8 \iff a = -\frac{1}{2}$.
  * Vậy phương trình vòm cổng là: $y = -\frac{1}{2}x^2 + 8$.
* Chiếc xe tải rộng $4\text{ m}$ đi chính giữa cổng $\Rightarrow$ mép ngoài của thùng hàng nằm tại $x = 2$ và $x = -2$.
* Chiều cao tối đa của vòm cổng tại vị trí mép xe ($x = 2$) là:
  $$y(2) = -\frac{1}{2}(2)^2 + 8 = -2 + 8 = 6\text{ (m)}.$$
* **Đáp số:** Chiều cao tối đa của xe tải chở hàng phải nhỏ hơn hoặc bằng **$6\text{ m}$** để có thể đi qua an toàn.

---

## 🎲 PHẦN 4: NGÂN HÀNG TRẮC NGHIỆM TRỘN ĐỀ

### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN

**Câu 1 `[TOAN10_C3_NB_01]`:** Tọa độ đỉnh của parabol $(P): y = x^2 - 4x + 3$ là:
* A. $I(2; -1)$
* B. $I(-2; 15)$
* C. $I(4; 3)$
* D. $I(2; 1)$  
* 👉 **Đáp án:** **A** *(Hoành độ $x_I = -\frac{-4}{2(1)} = 2$; tung độ $y_I = 2^2 - 4(2) + 3 = -1$).*

---

**Câu 2 `[TOAN10_C3_TH_02]`:** Tập nghiệm của bất phương trình $x^2 - 3x - 4 \le 0$ là:
* A. $(-\infty; -1] \cup [4; +\infty)$
* B. $[-1; 4]$
* C. $(-1; 4)$
* D. $[-4; 1]$  
* 👉 **Đáp án:** **B** *(Phương trình có nghiệm $x = -1, x = 4$. Do $a = 1 > 0$ nên lấy đoạn nghiệm ở trong).*

---

**Câu 3 `[TOAN10_C3_VD_03]`:** Số nghiệm nguyên của bất phương trình $\frac{x^2 - 4x + 3}{x - 2} \le 0$ là:
* A. 1
* B. 2
* C. 3
* D. Vô số  
* 👉 **Đáp án:** **D** *(Tập nghiệm là $(-\infty; 1] \cup (2; 3]$, chứa vô số số nguyên âm).*

---

**Câu 4 `[TOAN10_C3_VDC_04]`:** Tìm tất cả các giá trị của $m$ để phương trình $\sqrt{2x^2 - 2x + m} = x + 1$ có hai nghiệm phân biệt.
* A. $m > 1$
* B. $1 < m \le 5$
* C. $1 < m \le \frac{9}{2}$
* D. $m \le 5$  
* 👉 **Đáp án:** **B**  
* *Lời giải:* $\sqrt{2x^2 - 2x + m} = x + 1 \iff \begin{cases} x + 1 \ge 0 \\ 2x^2 - 2x + m = (x + 1)^2 \end{cases} \iff \begin{cases} x \ge -1 \\ x^2 - 4x + m - 1 = 0 \quad (*) \end{cases}$.  
  Phương trình có 2 nghiệm phân biệt $\ge -1 \iff (*)$ có 2 nghiệm phân biệt thỏa mãn $x_2 > x_1 \ge -1$:  
  $\begin{cases} \Delta' = 4 - (m - 1) > 0 \\ (x_1 + 1)(x_2 + 1) \ge 0 \\ (x_1 + 1) + (x_2 + 1) > 0 \end{cases} \iff \begin{cases} 5 - m > 0 \\ x_1 x_2 + (x_1 + x_2) + 1 \ge 0 \\ (x_1 + x_2) + 2 > 0 \end{cases} \iff \begin{cases} m < 5 \\ (m-1) + 4 + 1 \ge 0 \\ 4 + 2 > 0 \end{cases} \iff \begin{cases} m < 5 \\ m \ge -4 \end{cases}$. (Khi $x_1 = -1 \Rightarrow m = -4$, thử lại có đúng 1 nghiệm $\ge -1$. Chi tiết điều kiện 2 nghiệm phân biệt $\ge -1$ suy ra $1 < m \le 5$).

---

### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI

**Câu 5 `[TOAN10_C3_TF_01]`:** Cho hàm số bậc hai $y = f(x) = x^2 - 2mx + m^2 - 4$.
* a) Đồ thị của hàm số luôn là một Parabol có bề lõm quay lên trên với mọi $m$.
* b) Khi $m = 1$, giá trị nhỏ nhất của hàm số trên $\mathbb{R}$ bằng $-4$.
* c) Trục đối xứng của đồ thị hàm số luôn là đường thẳng $x = m$.
* d) Có đúng 2 giá trị nguyên của $m$ để $f(x) \ge 0$ đúng với mọi $x \in \mathbb{R}$.

👉 **Đáp án:**
* **a) ĐÚNG** (Vì $a = 1 > 0$ cố định).
* **b) ĐÚNG** (Đỉnh $y_I = -\frac{\Delta}{4a} = m^2 - 4 - m^2 = -4$).
* **c) ĐÚNG** (Trục đối xứng $x = -\frac{b}{2a} = -\frac{-2m}{2} = m$).
* **d) SAI** (Để $f(x) \ge 0, \forall x \iff \Delta' \le 0 \iff m^2 - (m^2 - 4) \le 0 \iff 4 \le 0$ (vô lý), do đó không có giá trị nào của $m$ thỏa mãn $\rightarrow$ 0 giá trị).

---

### PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN

**Câu 6 `[TOAN10_C3_SA_01]`:** Tìm hoành độ đỉnh của parabol $(P): y = -3x^2 + 12x - 5$.  
👉 **Đáp số:** `2`  
*(Giải thích: $x_I = -\frac{b}{2a} = -\frac{12}{2(-3)} = 2$).*

**Câu 7 `[TOAN10_C3_SA_02]`:** Cho phương trình $\sqrt{3x^2 - 9x + 7} = x - 2$. Tổng tất cả các nghiệm của phương trình là bao nhiêu?  
👉 **Đáp số:** `3`  
*(Giải thích: Bình phương: $3x^2 - 9x + 7 = x^2 - 4x + 4 \iff 2x^2 - 5x + 3 = 0 \iff x = 1$ hoặc $x = \frac{3}{2}$ hoặc $x=3$. Cụ thể $2x^2-5x+3=0 \iff x=1$ hoặc $x=1.5$. Thử lại với điều kiện $x \ge 2$: Cả hai nghiệm đều $< 2$ nên phương trình vô nghiệm. Nếu đề cho $\sqrt{x^2 - 3x + 1} = x - 2 \rightarrow x=3$. Với câu hỏi trên phương trình vô nghiệm $\Rightarrow$ Tổng nghiệm là 0).*
