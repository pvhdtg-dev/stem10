# TOÁN 10 – CHƯƠNG 2: BẤT PHƯƠNG TRÌNH & HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
*(Biên soạn chuẩn theo chương trình GDPT 2018)*

---

## 📖 PHẦN 1: LÝ THUYẾT TỔNG HỢP & BẢN ĐỒ KHÁI NIỆM

### 1. Bất phương trình bậc nhất hai ẩn
* **Dạng tổng quát:** Có một trong các dạng sau:
  $$ax + by + c < 0; \quad ax + by + c \le 0; \quad ax + by + c > 0; \quad ax + by + c \ge 0$$
  trong đó $a, b, c \in \mathbb{R}$ và $a, b$ không đồng thời bằng 0 ($a^2 + b^2 \neq 0$).
* **Nghiệm:** Mỗi cặp số $(x_0; y_0)$ thỏa mãn bất phương trình được gọi là một nghiệm của BPT.
* **Miền nghiệm:** Là tập hợp tất cả các điểm $M(x_0; y_0)$ trên mặt phẳng tọa độ $Oxy$ mà tọa độ của nó là nghiệm của BPT.

#### 📌 Quy trình 3 bước biểu diễn miền nghiệm trên mặt phẳng $Oxy$:
1. **Vẽ đường thẳng bờ $\Delta: ax + by + c = 0$**:
   * Nếu BPT chứa dấu $\ge$ hoặc $\le$: Vẽ $\Delta$ bằng **nét liền** (nhận cả điểm trên bờ).
   * Nếu BPT chứa dấu $>$ hoặc $<$: Vẽ $\Delta$ bằng **nét đứt** (không nhận điểm trên bờ).
2. **Chọn điểm thử:** Lấy một điểm $M_0(x_0; y_0) \notin \Delta$ (thường chọn gốc tọa độ $O(0; 0)$ nếu $\Delta$ không đi qua $O$).
3. **Tính giá trị & Kết luận:**
   * Tính $ax_0 + by_0 + c$.
   * Nếu thỏa mãn BPT thì nửa mặt phẳng chứa $M_0$ là miền nghiệm.
   * Nếu không thỏa mãn thì nửa mặt phẳng đối diện (không chứa $M_0$) là miền nghiệm. Gạch bỏ phần không phải là miền nghiệm.

---

### 2. Hệ bất phương trình bậc nhất hai ẩn
* **Định nghĩa:** Là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn $x, y$.
* **Miền nghiệm của hệ:** Là **phần giao (phần chung)** của các miền nghiệm của từng bất phương trình trong hệ.
* **Đặc điểm hình học:** Miền nghiệm của hệ thường là một miền đa giác (tam giác, tứ giác...) hoặc một miền không bị chặn trên mặt phẳng $Oxy$.

---

### 3. Bài toán Quy hoạch tuyến tính & Ứng dụng thực tế
* **Mục tiêu:** Tìm cặp $(x; y)$ thuộc miền nghiệm của hệ BPT để biểu thức hàm mục tiêu:
  $$F(x; y) = ax + by \quad (a, b \in \mathbb{R})$$
  đạt **giá trị lớn nhất ($F_{\max}$)** hoặc **giá trị nhỏ nhất ($F_{\min}$)**.
* **Định lý tối ưu trên miền đa giác:**  
  Nếu miền nghiệm của hệ BPT là một **miền đa giác lồi** $A_1 A_2 \dots A_n$ (kể cả biên) thì giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x; y) = ax + by$ **luôn đạt được tại một trong các đỉnh** $A_1, A_2, \dots, A_n$ của đa giác đó.

#### 📌 Các bước giải bài toán tối ưu thực tế:
1. Đặt ẩn $x, y$ và tìm điều kiện của ẩn ($x \ge 0, y \ge 0\dots$).
2. Lập hệ BPT bậc nhất hai ẩn mô tả các ràng buộc thực tế (vốn, thời gian, nguyên liệu, nhân công...).
3. Biểu diễn miền nghiệm của hệ BPT trên mặt phẳng $Oxy$ và tìm tọa độ tất cả các đỉnh của miền đa giác.
4. Lập hàm mục tiêu $F(x; y)$ cần tối ưu (lợi nhuận, chi phí...).
5. Tính giá trị của $F(x; y)$ tại từng đỉnh và so sánh để đưa ra kết luận thực tế.

---

### ⚠️ Bẫy lý thuyết học sinh hay mắc phải:
1. **Điểm thử đi qua gốc tọa độ:** Nếu đường thẳng $\Delta$ đi qua $O(0;0)$ (tức $c = 0$), không được chọn $O(0;0)$ làm điểm thử mà phải chọn điểm khác như $(1; 0)$ hoặc $(0; 1)$.
2. **Nét đứt / Nét liền:** Quên vẽ nét đứt khi gặp dấu ngặt ($>, <$) dẫn đến sai bản chất tập nghiệm (lấy nhầm cả điểm trên đường bờ).
3. **Quên điều kiện không âm:** Trong các bài toán thực tế, luôn phải có $x \ge 0, y \ge 0$.

---

## 💡 PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

### 🎯 Dạng 1: Kiểm tra điểm thuộc miền nghiệm của BPT và Hệ BPT
* **Phương pháp:** Thay trực tiếp tọa độ $(x_0; y_0)$ vào từng BPT. Nếu thỏa mãn tất cả thì điểm đó thuộc miền nghiệm.
* **Ví dụ mẫu:** Điểm nào sau đây thuộc miền nghiệm của hệ $\begin{cases} 2x - y + 1 > 0 \\ x + 3y - 4 \le 0 \end{cases}$ ?
  * A. $M(1; 2)$
  * B. $N(0; 1)$
  * *Lời giải:*
    * Với $M(1; 2)$: $2(1) - 2 + 1 = 1 > 0$ (Đúng), nhưng $1 + 3(2) - 4 = 3 \le 0$ (Sai) $\rightarrow M$ loại.
    * Với $N(0; 1)$: $2(0) - 1 + 1 = 0 > 0$ (Sai) $\rightarrow N$ loại.
    * Xét điểm $P(-1; 0)$: $2(-1) - 0 + 1 = -1 > 0$ (Sai).
    * Xét điểm $Q(1; 0)$: $2(1) - 0 + 1 = 3 > 0$ (Đúng) và $1 + 3(0) - 4 = -3 \le 0$ (Đúng) $\rightarrow Q(1; 0)$ thỏa mãn.

---

### 🎯 Dạng 2: Biểu diễn hình học miền nghiệm & Xác định tọa độ các đỉnh
* **Phương pháp:**
  1. Chuyển các BPT về phương trình đường thẳng để vẽ các cạnh của đa giác.
  2. Giải hệ phương trình từng cặp đường thẳng cắt nhau để tìm tọa độ các giao điểm (đỉnh của miền đa giác).
* **Ví dụ mẫu:** Xác định tọa độ các đỉnh của miền nghiệm tạo bởi hệ:
  $$\begin{cases} x \ge 0 \\ y \ge 0 \\ x + y \le 4 \\ 2x + y \le 6 \end{cases}$$
  * *Lời giải:* Miền nghiệm là tứ giác $OABC$ với:
    * $O(0; 0)$ (gốc tọa độ).
    * $A(3; 0)$ (giao của $2x + y = 6$ với trục $Ox$).
    * $B(2; 2)$ (nghiệm của hệ $\begin{cases} x + y = 4 \\ 2x + y = 6 \end{cases}$).
    * $C(0; 4)$ (giao của $x + y = 4$ với trục $Oy$).

---

### 🎯 Dạng 3: Bài toán tối ưu thực tế (Quy hoạch tuyến tính)
* **Phương pháp:** Tính giá trị hàm $F(x; y)$ tại tất cả các đỉnh vừa tìm được ở Dạng 2 rồi so sánh.
* **Ví dụ mẫu:** Với miền nghiệm tứ giác $O(0;0), A(3;0), B(2;2), C(0;4)$ ở trên, tìm giá trị lớn nhất của $F(x; y) = 300x + 200y$.
  * *Lời giải:*
    * $F(O) = F(0; 0) = 0$
    * $F(A) = F(3; 0) = 300(3) + 200(0) = 900$
    * $F(B) = F(2; 2) = 300(2) + 200(2) = 600 + 400 = 1000$
    * $F(C) = F(0; 4) = 300(0) + 200(4) = 800$
  * *Kết luận:* $F_{\max} = 1000$ khi $(x; y) = (2; 2)$.

---

## ✍️ PHẦN 3: BÀI TẬP TỰ LUẬN (Chuẩn hóa lời giải)

### 📝 Bài 1: (Xác định miền nghiệm & Tính diện tích)
**Đề bài:** Trong mặt phẳng tọa độ $Oxy$, hãy biểu diễn miền nghiệm của hệ bất phương trình:
$$\begin{cases} x - y \le 0 \\ x + 2y \le 6 \\ x \ge 0 \end{cases}$$
và tính diện tích của miền tam giác tạo bởi miền nghiệm đó.

**Lời giải chi tiết:**
1. **Xác định các đường thẳng bờ:**
   * $d_1: x - y = 0$ (đường phân giác góc phần tư thứ I và III).
   * $d_2: x + 2y = 6$ (đi qua $(0; 3)$ và $(6; 0)$).
   * $d_3: x = 0$ (trục tung $Oy$).
2. **Xác định các đỉnh của miền tam giác:**
   * Đỉnh $O$: Giao của $d_1$ và $d_3 \Rightarrow O(0; 0)$.
   * Đỉnh $A$: Giao của $d_2$ và $d_3 \Rightarrow A(0; 3)$.
   * Đỉnh $B$: Giao của $d_1$ và $d_2 \Rightarrow \begin{cases} x - y = 0 \\ x + 2y = 6 \end{cases} \iff \begin{cases} x = 2 \\ y = 2 \end{cases} \Rightarrow B(2; 2)$.
3. **Tính diện tích tam giác $OAB$:**
   * Cạnh đáy $OA$ nằm trên trục $Oy$ có độ dài: $OA = |y_A - y_O| = 3$.
   * Chiều cao $h_B$ kẻ từ đỉnh $B(2; 2)$ xuống trục $Oy$ chính là hoành độ của $B$: $h_B = x_B = 2$.
   * Diện tích: $S_{\triangle OAB} = \frac{1}{2} \cdot OA \cdot h_B = \frac{1}{2} \cdot 3 \cdot 2 = 3$ (đvdt).

---

### 📝 Bài 2: (Bài toán kinh tế thực tế - Tối ưu hóa lợi nhuận)
**Đề bài:** Một xưởng sản xuất hai loại sản phẩm $A$ và $B$. Để sản xuất 1 tấn sản phẩm $A$ cần 2 tấn nguyên liệu và 30 giờ máy làm việc. Để sản xuất 1 tấn sản phẩm $B$ cần 4 tấn nguyên liệu và 15 giờ máy làm việc. Xưởng hiện có 200 tấn nguyên liệu và máy chỉ có thể hoạt động tối đa 1200 giờ. Biết rằng lợi nhuận khi bán 1 tấn sản phẩm $A$ là 40 triệu đồng, 1 tấn sản phẩm $B$ là 30 triệu đồng. Hãy lập kế hoạch sản xuất để xưởng thu được lợi nhuận cao nhất?

**Lời giải chi tiết:**
* **Bước 1: Đặt ẩn và điều kiện:**
  * Gọi $x$ (tấn) là lượng sản phẩm loại $A$ cần sản xuất ($x \ge 0$).
  * Gọi $y$ (tấn) là lượng sản phẩm loại $B$ cần sản xuất ($y \ge 0$).
* **Bước 2: Lập hệ bất phương trình ràng buộc:**
  * Lượng nguyên liệu sử dụng: $2x + 4y \le 200 \iff x + 2y \le 100$.
  * Thời gian máy hoạt động: $30x + 15y \le 1200 \iff 2x + y \le 80$.
  * Hệ ràng buộc:
    $$\begin{cases} x \ge 0 \\ y \ge 0 \\ x + 2y \le 100 \\ 2x + y \le 80 \end{cases}$$
* **Bước 3: Xác định tọa độ các đỉnh của miền nghiệm:**
  * $O(0; 0)$
  * $M(40; 0)$ (giao của $2x + y = 80$ với trục $Ox$)
  * $N(20; 40)$ (nghiệm của hệ $\begin{cases} x + 2y = 100 \\ 2x + y = 80 \end{cases}$)
  * $P(0; 50)$ (giao của $x + 2y = 100$ với trục $Oy$)
* **Bước 4: Thiết lập hàm lợi nhuận và tính giá trị:**
  * Hàm lợi nhuận (triệu đồng): $F(x; y) = 40x + 30y$.
  * Tại $O(0; 0) \Rightarrow F(0; 0) = 0$.
  * Tại $M(40; 0) \Rightarrow F(40; 0) = 40(40) + 30(0) = 1600$ triệu đồng.
  * Tại $N(20; 40) \Rightarrow F(20; 40) = 40(20) + 30(40) = 800 + 1200 = 2000$ triệu đồng.
  * Tại $P(0; 50) \Rightarrow F(0; 50) = 40(0) + 30(50) = 1500$ triệu đồng.
* **Bước 5: Kết luận:**
  * Xưởng cần sản xuất **20 tấn sản phẩm $A$** và **40 tấn sản phẩm $B$** để thu về lợi nhuận tối đa là **2 tỷ đồng** (2000 triệu đồng).

---

## 🎲 PHẦN 4: NGÂN HÀNG TRẮC NGHIỆM TRỘN ĐỀ

### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN

**Câu 1 `[TOAN10_C2_NB_01]`:** Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?
* A. $2x^2 + 3y \le 0$.
* B. $2x - y + 3 > 0$.
* C. $xy + x \ge 1$.
* D. $x + y + z < 4$.  
* 👉 **Đáp án:** **B** *(BPT chỉ chứa bậc 1 của hai ẩn $x, y$).*

---

**Câu 2 `[TOAN10_C2_TH_02]`:** Miền nghiệm của bất phương trình $x - 2y + 4 \ge 0$ chứa điểm nào sau đây?
* A. $(0; 3)$
* B. $(1; 4)$
* C. $(0; 0)$
* D. $(-5; 0)$  
* 👉 **Đáp án:** **C** *(Thay $(0; 0)$ vào: $0 - 2(0) + 4 = 4 \ge 0$ đúng).*

---

**Câu 3 `[TOAN10_C2_VD_03]`:** Cho hệ bất phương trình $\begin{cases} x \ge 0 \\ y \ge 0 \\ x + y \le 3 \end{cases}$. Giá trị lớn nhất của biểu thức $F(x; y) = 2x + 3y$ bằng:
* A. 6
* B. 9
* C. 0
* D. 5  
* 👉 **Đáp án:** **B** *(Miền nghiệm là tam giác $O(0;0), A(3;0), B(0;3)$. Ta có $F(O)=0, F(A)=6, F(B)=2(0)+3(3)=9 \Rightarrow F_{\max} = 9$).*

---

**Câu 4 `[TOAN10_C2_VDC_04]`:** Cho $x, y$ thỏa mãn hệ $\begin{cases} 0 \le y \le 4 \\ x \ge 0 \\ x - y - 1 \le 0 \\ x + 2y - 10 \le 0 \end{cases}$. Giá trị nhỏ nhất của biểu thức $P = x - 2y$ là:
* A. $-8$
* B. $-7$
* C. $1$
* D. $0$  
* 👉 **Đáp án:** **A** *(Các đỉnh của miền nghiệm gồm $(0;0), (1;0), (4;3), (2;4), (0;4)$. Giá trị tại $(0;4)$ là $P(0;4) = 0 - 2(4) = -8$).*

---

### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI

**Câu 5 `[TOAN10_C2_TF_01]`:** Cho hệ bất phương trình $\begin{cases} x + y - 2 \le 0 \\ 2x - 3y + 6 \ge 0 \\ x - 1 \ge 0 \end{cases}$.
* a) Điểm $M(1; 1)$ thuộc miền nghiệm của hệ bất phương trình đã cho.
* b) Đường thẳng $d: x - 1 = 0$ đi qua gốc tọa độ $O(0; 0)$.
* c) Miền nghiệm của hệ bất phương trình là một miền đa giác tam giác.
* d) Giá trị lớn nhất của biểu thức $T(x; y) = x + 2y$ trên miền nghiệm là 6.

👉 **Đáp án:**
* **a) ĐÚNG** (Thay $(1; 1)$ thỏa mãn cả 3 BPT: $0 \le 0$, $5 \ge 0$, $0 \ge 0$).
* **b) SAI** ($d$ là đường thẳng song song với trục $Oy$, cắt $Ox$ tại $(1; 0)$ nên không đi qua $O$).
* **c) ĐÚNG** (3 đường thẳng cắt nhau tạo thành tam giác với các đỉnh $(1; 1), (1; \frac{8}{3}), (0; 2)$ sau khi đối chiếu miền).
* **d) SAI** (Tại đỉnh $(1; \frac{8}{3})$, $T = 1 + 2(\frac{8}{3}) = \frac{19}{3} \approx 6.33 > 6$).

---

### PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN

**Câu 6 `[TOAN10_C2_SA_01]`:** Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn hệ bất phương trình $\begin{cases} x > 0 \\ y > 0 \\ x + y \le 4 \end{cases}$?  
👉 **Đáp số:** `6`  
*(Giải thích: Các cặp $(x; y) \in \mathbb{Z}^+$ là: $(1; 1), (1; 2), (1; 3), (2; 1), (2; 2), (3; 1) \rightarrow$ Có 6 cặp).*

**Câu 7 `[TOAN10_C2_SA_02]`:** Cho $x, y$ thỏa mãn $\begin{cases} x \ge 0 \\ y \ge 0 \\ 2x + y \le 4 \end{cases}$. Tìm giá trị lớn nhất của $F(x; y) = 5x + 4y$.  
👉 **Đáp số:** `16`  
*(Giải thích: Các đỉnh là $O(0; 0), A(2; 0), B(0; 4)$. Tính $F(O)=0, F(A)=10, F(B)=5(0)+4(4)=16 \Rightarrow F_{\max} = 16$).*
