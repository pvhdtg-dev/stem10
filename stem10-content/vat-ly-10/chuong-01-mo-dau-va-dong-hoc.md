# VẬT LÝ 10 – CHƯƠNG 1: MỞ ĐẦU & MÔ TẢ CHUYỂN ĐỘNG (ĐỘNG HỌC)
*(Biên soạn chuẩn theo chương trình GDPT 2018)*

---

## 📖 PHẦN 1: LÝ THUYẾT TỔNG HỢP & BẢN ĐỒ KHÁI NIỆM

### 1. Khái quát về môn Vật lí & Sai số phép đo
* **Đối tượng nghiên cứu:** Các dạng vận động của vật chất (chất, trường) và năng lượng.
* **Quy tắc an toàn:** Nắm vững quy trình thí nghiệm, cẩn trọng với nguồn điện, nhiệt độ và các thiết bị quang học/cơ khí.
* **Sai số trong phép đo vật lí:**
  * **Sai số dụng cụ ($\Delta A_{dc}$):** Thường lấy bằng nửa hoặc một độ chia nhỏ nhất (ĐCNN) trên dụng cụ đo.
  * **Sai số ngẫu nhiên ($\overline{\Delta A}$):** Tính bằng trung bình cộng các sai số tuyệt đối của từng lần đo:
    $$\overline{A} = \frac{A_1 + A_2 + \dots + A_n}{n}, \quad \overline{\Delta A} = \frac{|\overline{A} - A_1| + |\overline{A} - A_2| + \dots + |\overline{A} - A_n|}{n}$$
  * **Sai số tuyệt đối của phép đo:** $\Delta A = \overline{\Delta A} + \Delta A_{dc}$.
  * **Sai số tỉ đối ($\delta A$):** $\delta A = \frac{\Delta A}{\overline{A}} \times 100\%$ (đặc trưng cho độ chính xác của phép đo).
  * **Cách viết kết quả đo:** $A = \overline{A} \pm \Delta A$ (kèm đơn vị).

---

### 2. Quãng đường và Độ dịch chuyển
* **Hệ quy chiếu:** Gồm vật làm mốc, hệ tọa độ gắn với vật mốc, mốc thời gian và đồng hồ đo thời gian.
* **Quãng đường ($s$):** Là độ dài toàn bộ quỹ đạo mà vật đã đi qua.
  * Là một **đại lượng vô hướng**, luôn dương ($s \ge 0$).
* **Độ dịch chuyển ($\vec{d}$):** Là một **đại lượng vectơ** nối từ vị trí đầu đến vị trí cuối của chuyển động.
  * Độ lớn của độ dịch chuyển là khoảng cách ngắn nhất giữa điểm đầu và điểm cuối.
  * Trên trục tọa độ $Ox$: $d = x_2 - x_1 = \Delta x$. Có thể nhận giá trị **dương, âm hoặc bằng 0**.
* **So sánh $s$ và $d$:**
  * Khi vật chuyển động thẳng và **không đổi chiều**: $d = s$.
  * Khi vật đi đường cong hoặc có **đổi chiều chuyển động**: $d < s$.
  * Khi vật đi một vòng rồi quay về vị trí ban đầu: $s > 0$ nhưng $d = 0$.

---

### 3. Tốc độ và Vận tốc
* **Tốc độ trung bình:** Đại lượng đặc trưng cho mức độ nhanh hay chậm của chuyển động trên quãng đường:
  $$v_{tb} = \frac{s}{t} \quad (\text{đơn vị: m/s hoặc km/h; } 1 \text{ m/s} = 3.6 \text{ km/h})$$
* **Vận tốc trung bình:** Đại lượng vectơ đặc trưng cho mức độ nhanh chậm và hướng chuyển động:
  $$\vec{v}_{tb} = \frac{\vec{d}}{t} \implies v_{tb} = \frac{d}{t} = \frac{x_2 - x_1}{t_2 - t_1}$$
* **Vận tốc tức thời:** Là vận tốc tại một thời điểm xác định ($v = \frac{\Delta d}{\Delta t}$ khi $\Delta t \to 0$).

---

### 4. Chuyển động thẳng biến đổi đều & Gia tốc
* **Gia tốc ($\vec{a}$):** Là đại lượng vectơ đặc trưng cho sự thay đổi nhanh hay chậm của vận tốc theo thời gian:
  $$\vec{a} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v} - \vec{v}_0}{t - t_0} \implies a = \frac{v - v_0}{t} \quad (\text{đơn vị: m/s}^2)$$
  * **Chuyển động nhanh dần đều:** Vận tốc tăng dần theo thời gian $\implies \vec{a}$ **cùng chiều** với $\vec{v}$ ($a \cdot v > 0$).
  * **Chuyển động chậm dần đều:** Vận tốc giảm dần theo thời gian $\implies \vec{a}$ **ngược chiều** với $\vec{v}$ ($a \cdot v < 0$).

#### 📌 Bộ 3 công thức vàng của Chuyển động thẳng biến đổi đều:
1. **Phương trình vận tốc:**
   $$v = v_0 + at$$
2. **Phương trình độ dịch chuyển (hoặc quãng đường khi không đổi chiều):**
   $$d = v_0 t + \frac{1}{2}at^2$$
3. **Hệ thức độc lập với thời gian:**
   $$v^2 - v_0^2 = 2ad \quad (\text{hoặc } v^2 - v_0^2 = 2as)$$

---

### 5. Sự rơi tự do (Trường hợp đặc biệt)
* **Định nghĩa:** Sự rơi tự do là sự rơi của các vật chỉ chịu tác dụng của **trọng lực** (bỏ qua sức cản của không khí).
* **Đặc điểm:**
  * Phương: **Thẳng đứng**.
  * Chiều: **Từ trên xuống dưới**.
  * Tính chất: Là chuyển động **thẳng nhanh dần đều** không vận tốc ban đầu ($v_0 = 0$).
  * Gia tốc: Là gia tốc trọng trường $g$ (tại cùng một nơi trên Trái Đất, mọi vật đều rơi tự do với cùng gia tốc $g \approx 9.8 \text{ m/s}^2$ hoặc lấy tròn $10 \text{ m/s}^2$).

#### 📌 Bộ công thức Rơi tự do (với $v_0 = 0, a = g$):
* Vận tốc tại thời điểm $t$: $v = gt$
* Quãng đường rơi (độ cao rơi) sau thời gian $t$: $h = \frac{1}{2}gt^2$
* Hệ thức độc lập: $v^2 = 2gh \implies v = \sqrt{2gh}$
* Thời gian rơi từ độ cao $h$: $t = \sqrt{\frac{2h}{g}}$

---

### 6. Đọc và phân tích Đồ thị Động học
1. **Đồ thị Độ dịch chuyển – Thời gian ($d - t$):**
   * Đường thẳng nằm ngang: Vật **đứng yên** ($v = 0$).
   * Đường thẳng xiên lên: Vật chuyển động **thẳng đều theo chiều dương** ($v > 0$).
   * Đường thẳng xiên xuống: Vật chuyển động **thẳng đều theo chiều âm** ($v < 0$).
   * Hệ số góc (độ dốc) của đồ thị chính là vận tốc: $v = \frac{\Delta d}{\Delta t}$.
2. **Đồ thị Vận tốc – Thời gian ($v - t$):**
   * Đường thẳng nằm ngang: Chuyển động **thẳng đều** ($a = 0$).
   * Đường thẳng xiên: Chuyển động **biến đổi đều**; Độ dốc của đường thẳng là gia tốc $a = \frac{\Delta v}{\Delta t}$.
   * **Quy tắc diện tích:** Diện tích hình phẳng giới hạn bởi đồ thị $v-t$ và trục thời gian $Ot$ chính bằng **độ dịch chuyển $d$** của vật.

---

### ⚠️ Bẫy lý thuyết học sinh hay mắc phải:
1. **Nhầm lẫn giữa tốc độ và vận tốc:** Tốc độ trung bình luôn $\ge 0$ vì tính theo quãng đường $s$, còn vận tốc trung bình có thể âm hoặc bằng 0 vì tính theo độ dịch chuyển $d$.
2. **Dấu của gia tốc $a$:** Không phải cứ $a < 0$ là chuyển động chậm dần đều! Phải xét tích $a \cdot v$: nếu $a < 0$ và $v < 0$ thì vật đang chuyển động **nhanh dần đều theo chiều âm**.
3. **Rơi tự do nặng nhẹ:** Trong chân không (bỏ qua sức cản), vật nặng và vật nhẹ rơi tự do nhanh như nhau với cùng gia tốc $g$.

---

## 💡 PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

### 🎯 Dạng 1: Xác định Quãng đường, Độ dịch chuyển, Tốc độ & Vận tốc
* **Phương pháp:** 
  * Xác định tọa độ điểm đầu $x_1$ và điểm cuối $x_2 \implies d = x_2 - x_1$.
  * Cộng tổng các đoạn đường thực tế vật đã đi qua $\implies s = s_1 + s_2 + \dots$
  * Tính $v_{tb} = \frac{s}{t}$ và $v_{\text{vectơ}} = \frac{d}{t}$.
* **Ví dụ mẫu:** Một người đi bộ từ điểm $A$ sang điểm $B$ cách nhau $600\text{ m}$ theo hướng Đông mất $6\text{ phút}$, sau đó quay lại hướng Tây $200\text{ m}$ mất $4\text{ phút}$. Tính quãng đường, độ dịch chuyển, tốc độ trung bình và vận tốc trung bình của người đó.
  * *Lời giải:*
    * Quãng đường: $s = 600 + 200 = 800\text{ m}$.
    * Chọn chiều dương từ Tây sang Đông: Độ dịch chuyển $d = +600 - 200 = +400\text{ m}$ (hướng Đông).
    * Tổng thời gian: $t = 6 + 4 = 10\text{ phút} = 600\text{ s}$.
    * Tốc độ trung bình: $v_{tb} = \frac{s}{t} = \frac{800}{600} \approx 1.33\text{ m/s}$.
    * Vận tốc trung bình: $v = \frac{d}{t} = \frac{400}{600} \approx 0.67\text{ m/s}$ (theo hướng Đông).

---

### 🎯 Dạng 2: Bài toán Chuyển động thẳng biến đổi đều (Áp dụng bộ 3 công thức)
* **Phương pháp 4 bước:**
  1. Chọn hệ quy chiếu: Chiều dương (thường là chiều chuyển động ban đầu), gốc thời gian $t = 0$.
  2. Xác định các đại lượng đã biết ($v_0, v, a, t, d$). Chú ý dấu của $a$: nhanh dần đều $a > 0$, chậm dần đều $a < 0$.
  3. Chọn công thức phù hợp trong bộ 3 công thức (nếu không có thời gian $t$ thì ưu tiên dùng $v^2 - v_0^2 = 2ad$).
  4. Giải phương trình và kiểm tra tính hợp lý của kết quả.
* **Ví dụ mẫu:** Một đoàn tàu đang chạy với vận tốc $72\text{ km/h}$ thì hãm phanh chuyển động chậm dần đều, sau $20\text{ s}$ thì dừng hẳn.
  1. Tính gia tốc của đoàn tàu.
  2. Tính quãng đường tàu đi được từ lúc hãm phanh đến khi dừng hẳn.
  * *Lời giải:*
    * Đổi: $v_0 = 72\text{ km/h} = 20\text{ m/s}$; Tàu dừng hẳn $\implies v = 0$; $t = 20\text{ s}$.
    * 1. Gia tốc: $a = \frac{v - v_0}{t} = \frac{0 - 20}{20} = -1\text{ m/s}^2$ (dấu âm thể hiện chuyển động chậm dần đều).
    * 2. Quãng đường đi được: Áp dụng $v^2 - v_0^2 = 2as \implies 0^2 - 20^2 = 2(-1)s \implies -400 = -2s \implies s = 200\text{ m}$.

---

### 🎯 Dạng 3: Bài toán Rơi tự do & Ném thẳng đứng
* **Phương pháp:** 
  * Áp dụng $h = \frac{1}{2}gt^2, v = gt, v = \sqrt{2gh}$.
  * Bài toán tìm quãng đường rơi trong $n$ giây cuối cùng:
    $$s_{n\text{ giây cuối}} = h_{\text{tổng}} - h_{\text{sau } (t - n)\text{ giây}}$$
* **Ví dụ mẫu:** Thả một hòn đá rơi tự do từ đỉnh một tòa tháp cao $45\text{ m}$. Lấy $g = 10\text{ m/s}^2$. Tính thời gian rơi và vận tốc khi chạm đất.
  * *Lời giải:*
    * Thời gian rơi: $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 45}{10}} = \sqrt{9} = 3\text{ s}$.
    * Vận tốc khi chạm đất: $v = gt = 10 \times 3 = 30\text{ m/s}$ (hoặc $v = \sqrt{2gh} = \sqrt{2 \times 10 \times 45} = 30\text{ m/s}$).

---

### 🎯 Dạng 4: Phân tích Đồ thị Vận tốc – Thời gian ($v-t$)
* **Phương pháp:** Tính gia tốc qua độ dốc $a = \frac{v_2 - v_1}{t_2 - t_1}$; Tính quãng đường/độ dịch chuyển bằng diện tích hình chữ nhật/hình thang dưới đồ thị.

---

## ✍️ PHẦN 3: BÀI TẬP TỰ LUẬN (Chuẩn hóa lời giải)

### 📝 Bài 1: (Chuyển động thẳng biến đổi đều & Quãng đường trong giây thứ n)
**Đề bài:** Một ô tô bắt đầu chuyển động nhanh dần đều từ trạng thái đứng yên trên đường thẳng. Trong giây thứ 4 kể từ lúc bắt đầu chuyển động, ô tô đi được quãng đường $7\text{ m}$.
1. Tính gia tốc của ô tô.
2. Tính quãng đường ô tô đi được sau 10 giây đầu tiên và vận tốc của ô tô ở cuối giây thứ 10.

**Lời giải chi tiết:**
1. **Tính gia tốc của ô tô:**
   * Vì ô tô bắt đầu chuyển động từ trạng thái nghỉ nên vận tốc đầu $v_0 = 0$.
   * Quãng đường ô tô đi được sau $t$ giây là: $s(t) = \frac{1}{2}at^2$.
   * Quãng đường đi được sau 4 giây: $s_4 = \frac{1}{2}a(4)^2 = 8a$.
   * Quãng đường đi được sau 3 giây: $s_3 = \frac{1}{2}a(3)^2 = 4.5a$.
   * Quãng đường ô tô đi được trong giây thứ 4 chính là hiệu quãng đường:
     $$\Delta s_4 = s_4 - s_3 = 8a - 4.5a = 3.5a$$
   * Theo giả thiết đề bài: $3.5a = 7 \implies a = \frac{7}{3.5} = 2\text{ m/s}^2$.
2. **Tính quãng đường và vận tốc sau 10 giây:**
   * Quãng đường sau 10 giây: $s_{10} = \frac{1}{2}at^2 = \frac{1}{2}(2)(10)^2 = 100\text{ m}$.
   * Vận tốc ở cuối giây thứ 10: $v_{10} = v_0 + at = 0 + 2(10) = 20\text{ m/s} = 72\text{ km/h}$.
* **Đáp số:** $a = 2\text{ m/s}^2; \; s_{10} = 100\text{ m}; \; v_{10} = 20\text{ m/s}$.

---

### 📝 Bài 2: (Bài toán hai xe chuyển động gặp nhau)
**Đề bài:** Hai điểm $A$ và $B$ cách nhau $120\text{ m}$ trên một đường thẳng. Cùng một lúc, một xe máy chuyển động thẳng đều từ $A$ đến $B$ với vận tốc $v_1 = 10\text{ m/s}$. Đồng thời, một xe ô tô xuất phát từ $B$ chạy nhanh dần đều về phía $A$ với gia tốc có độ lớn $a_2 = 2\text{ m/s}^2$ (vận tốc đầu bằng 0).
1. Chọn trục tọa độ $Ox$ trùng đường thẳng $AB$, gốc $O$ tại $A$, chiều dương từ $A$ sang $B$, gốc thời gian lúc hai xe xuất phát. Viết phương trình chuyển động của hai xe.
2. Tìm thời điểm và vị trí hai xe gặp nhau.

**Lời giải chi tiết:**
1. **Viết phương trình chuyển động:**
   * **Xe 1 (từ $A$):** $x_{01} = 0, v_{01} = +10\text{ m/s}, a_1 = 0$.
     $$x_1 = x_{01} + v_{01}t = 10t \quad (\text{m})$$
   * **Xe 2 (từ $B$ chạy về $A$):** $x_{02} = 120\text{ m}, v_{02} = 0$, xe chạy ngược chiều dương nên gia tốc $a_2 = -2\text{ m/s}^2$.
     $$x_2 = x_{02} + v_{02}t + \frac{1}{2}a_2 t^2 = 120 - \frac{1}{2}(2)t^2 = 120 - t^2 \quad (\text{m})$$
2. **Thời điểm và vị trí gặp nhau:**
   * Hai xe gặp nhau khi $x_1 = x_2$:
     $$10t = 120 - t^2 \iff t^2 + 10t - 120 = 0$$
   * Giải phương trình bậc hai: $\Delta' = 5^2 - (-120) = 145 \implies t = -5 + \sqrt{145} \approx 7.04\text{ s}$ (loại nghiệm âm).
   * Vị trí gặp nhau cách gốc $A$:
     $$x_1 = 10(7.04) = 70.4\text{ m}$$
* **Đáp số:** Hai xe gặp nhau sau khoảng **$7.04\text{ s}$** tại vị trí cách $A$ một đoạn **$70.4\text{ m}$**.

---

### 📝 Bài 3: (Rơi tự do & Quãng đường trong giây cuối cùng)
**Đề bài:** Một vật được thả rơi tự do không vận tốc đầu từ độ cao $h$ so với mặt đất. Lấy $g = 10\text{ m/s}^2$. Biết trong $2\text{ giây}$ cuối cùng trước khi chạm đất, vật rơi được quãng đường $60\text{ m}$.
1. Tính tổng thời gian rơi của vật.
2. Tính độ cao $h$ nơi thả vật và vận tốc của vật ngay trước khi chạm đất.

**Lời giải chi tiết:**
1. **Tính tổng thời gian rơi $t$:**
   * Gọi $t$ (giây) là tổng thời gian từ lúc thả đến khi chạm đất ($t > 2$).
   * Quãng đường vật rơi được trong toàn bộ thời gian $t$: $h = \frac{1}{2}gt^2 = 5t^2$.
   * Quãng đường vật rơi được trong $(t - 2)$ giây đầu tiên: $h_{t-2} = \frac{1}{2}g(t - 2)^2 = 5(t - 2)^2$.
   * Quãng đường rơi trong 2 giây cuối cùng là:
     $$\Delta h = h - h_{t-2} = 5t^2 - 5(t - 2)^2 = 5[t^2 - (t^2 - 4t + 4)] = 5(4t - 4) = 20t - 20$$
   * Theo đề bài $\Delta h = 60\text{ m} \implies 20t - 20 = 60 \iff 20t = 80 \implies t = 4\text{ s}$.
2. **Tính độ cao $h$ và vận tốc chạm đất $v$:**
   * Độ cao nơi thả vật: $h = 5t^2 = 5(4)^2 = 80\text{ m}$.
   * Vận tốc ngay trước khi chạm đất: $v = gt = 10 \times 4 = 40\text{ m/s}$.
* **Đáp số:** $t = 4\text{ s}; \; h = 80\text{ m}; \; v = 40\text{ m/s}$.

---

## 🎲 PHẦN 4: NGÂN HÀNG TRẮC NGHIỆM TRỘN ĐỀ

### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN

**Câu 1 `[VATLY10_C1_NB_01]`:** Đơn vị nào sau đây là đơn vị của gia tốc trong hệ SI?
* A. $\text{m/s}$
* B. $\text{m/s}^2$
* C. $\text{km/h}$
* D. $\text{m} \cdot \text{s}$  
* 👉 **Đáp án:** **B** *(Gia tốc có đơn vị là mét trên giây bình phương $\text{m/s}^2$).*

---

**Câu 2 `[VATLY10_C1_TH_02]`:** Một chất điểm chuyển động thẳng dọc theo trục $Ox$ có phương trình tọa độ $x = 4 - 2t + 3t^2$ ($x$ tính bằng $\text{m}$, $t$ tính bằng $\text{s}$). Gia tốc của chất điểm bằng:
* A. $3\text{ m/s}^2$
* B. $-2\text{ m/s}^2$
* C. $6\text{ m/s}^2$
* D. $1.5\text{ m/s}^2$  
* 👉 **Đáp án:** **C** *(So sánh với phương trình chuẩn $x = x_0 + v_0 t + \frac{1}{2}at^2 \implies \frac{1}{2}a = 3 \implies a = 6\text{ m/s}^2$).*

---

**Câu 3 `[VATLY10_C1_VD_03]`:** Một ô tô đang chuyển động với vận tốc $15\text{ m/s}$ thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn $2\text{ m/s}^2$. Quãng đường ô tô đi được cho đến khi dừng hẳn là:
* A. $56.25\text{ m}$
* B. $112.5\text{ m}$
* C. $28.125\text{ m}$
* D. $7.5\text{ m}$  
* 👉 **Đáp án:** **A** *(Áp dụng hệ thức độc lập: $v^2 - v_0^2 = 2as \implies 0^2 - 15^2 = 2(-2)s \implies -225 = -4s \implies s = 56.25\text{ m}$).*

---

**Câu 4 `[VATLY10_C1_VDC_04]`:** Từ đỉnh một vách đá cao, người ta thả rơi tự do một hòn đá. Sau $2\text{ s}$ kể từ lúc thả hòn đá thứ nhất, người ta ném thẳng đứng hướng xuống hòn đá thứ hai từ cùng vị trí với vận tốc ban đầu $v_0$. Biết hai hòn đá chạm mặt nước cùng một lúc ở độ cao cách vách đá $80\text{ m}$. Lấy $g = 10\text{ m/s}^2$. Vận tốc ban đầu $v_0$ của hòn đá thứ hai là:
* A. $20\text{ m/s}$
* B. $30\text{ m/s}$
* C. $25\text{ m/s}$
* D. $15\text{ m/s}$  
* 👉 **Đáp án:** **B**  
* *Lời giải:*  
  Thời gian rơi của hòn đá thứ nhất: $t_1 = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 80}{10}} = 4\text{ s}$.  
  Vì hòn đá thứ hai được thả sau 2 giây và chạm nước cùng lúc $\implies$ thời gian chuyển động của hòn đá 2 là $t_2 = t_1 - 2 = 2\text{ s}$.  
  Phương trình quãng đường hòn đá 2: $h = v_0 t_2 + \frac{1}{2}gt_2^2 \implies 80 = v_0(2) + \frac{1}{2}(10)(2)^2 \implies 80 = 2v_0 + 20 \implies 2v_0 = 60 \implies v_0 = 30\text{ m/s}$.

---

### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI

**Câu 5 `[VATLY10_C1_TF_01]`:** Xét chuyển động của một vật được ném thẳng đứng từ mặt đất lên cao với vận tốc đầu $v_0 = 20\text{ m/s}$. Bỏ qua sức cản không khí, lấy $g = 10\text{ m/s}^2$, chiều dương hướng thẳng đứng lên trên.
* a) Quá trình đi lên của vật là chuyển động thẳng chậm dần đều với gia tốc $a = -10\text{ m/s}^2$.
* b) Độ cao cực đại mà vật đạt được so với mặt đất là $20\text{ m}$.
* c) Thời gian từ lúc ném đến khi vật đạt độ cao cực đại là $4\text{ s}$.
* d) Khi vật rơi trở lại chạm đất, vận tốc của vật có độ lớn bằng $20\text{ m/s}$.

👉 **Đáp án:**
* **a) ĐÚNG** (Vận tốc hướng lên dương, gia tốc trọng trường hướng xuống âm nên $a = -g = -10\text{ m/s}^2$).
* **b) ĐÚNG** ($v^2 - v_0^2 = 2ah_{\max} \implies 0 - 20^2 = 2(-10)h_{\max} \implies h_{\max} = 20\text{ m}$).
* **c) SAI** ($v = v_0 + at \implies 0 = 20 - 10t \implies t = 2\text{ s}$).
* **d) ĐÚNG** (Do bỏ qua lực cản không khí, cơ năng bảo toàn nên tốc độ khi chạm đất bằng tốc độ lúc ném).

---

### PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN

**Câu 6 `[VATLY10_C1_SA_01]`:** Thả rơi tự do một vật từ độ cao $125\text{ m}$ xuống đất. Lấy $g = 10\text{ m/s}^2$. Thời gian để vật chạm đất là bao nhiêu giây?  
👉 **Đáp số:** `5`  
*(Giải thích: $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 125}{10}} = \sqrt{25} = 5\text{ s}$).*

**Câu 7 `[VATLY10_C1_SA_02]`:** Một ô tô tăng tốc đều từ $10\text{ m/s}$ lên $20\text{ m/s}$ trong khoảng thời gian $5\text{ s}$. Độ lớn gia tốc của ô tô là bao nhiêu $\text{m/s}^2$?  
👉 **Đáp số:** `2`  
*(Giải thích: $a = \frac{v - v_0}{t} = \frac{20 - 10}{5} = 2\text{ m/s}^2$).*
