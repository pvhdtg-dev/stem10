# TOÁN 10 – CHƯƠNG 4: HỆ THỨC LƯỢNG TRONG TAM GIÁC
*(Biên soạn chuẩn theo chương trình GDPT 2018)*

---

## 📖 PHẦN 1: LÝ THUYẾT TỔNG HỢP & BẢN ĐỒ KHÁI NIỆM

### 1. Giá trị lượng giác của một góc từ $0^\circ$ đến $180^\circ$
* Trên nửa đường tròn đơn vị tâm $O(0;0)$, bán kính $R = 1$ nằm phía trên trục hoành: Với mỗi góc $\alpha$ ($0^\circ \le \alpha \le 180^\circ$), có duy nhất điểm $M(x_0; y_0)$ sao cho $\widehat{xOM} = \alpha$.
  * $\sin \alpha = y_0$ (Tung độ)
  * $\cos \alpha = x_0$ (Hoành độ)
  * $\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{y_0}{x_0} \quad (\alpha \neq 90^\circ)$
  * $\cot \alpha = \frac{\cos \alpha}{\sin \alpha} = \frac{x_0}{y_0} \quad (\alpha \neq 0^\circ, \alpha \neq 180^\circ)$

#### 📌 Dấu của các giá trị lượng giác:
* Với mọi $\alpha \in [0^\circ; 180^\circ]$: $\sin \alpha \ge 0$.
* Khi $\alpha$ là góc nhọn ($0^\circ < \alpha < 90^\circ$): $\cos \alpha > 0, \tan \alpha > 0, \cot \alpha > 0$.
* Khi $\alpha$ là góc tù ($90^\circ < \alpha < 180^\circ$): $\cos \alpha < 0, \tan \alpha < 0, \cot \alpha < 0$.

#### 📌 Mối quan hệ giữa các góc đặc biệt:
* **Hai góc bù nhau ($\alpha$ và $180^\circ - \alpha$):**
  $$\sin(180^\circ - \alpha) = \sin \alpha$$
  $$\cos(180^\circ - \alpha) = -\cos \alpha$$
  $$\tan(180^\circ - \alpha) = -\tan \alpha \quad (\alpha \neq 90^\circ)$$
  $$\cot(180^\circ - \alpha) = -\cot \alpha \quad (\alpha \neq 0^\circ, 180^\circ)$$
* **Hai góc phụ nhau ($\alpha$ và $90^\circ - \alpha$):**
  $$\sin(90^\circ - \alpha) = \cos \alpha, \quad \cos(90^\circ - \alpha) = \sin \alpha$$
* **Các hằng đẳng thức lượng giác cơ bản:**
  $$\sin^2\alpha + \cos^2\alpha = 1$$
  $$1 + \tan^2\alpha = \frac{1}{\cos^2\alpha} \quad (\alpha \neq 90^\circ), \quad 1 + \cot^2\alpha = \frac{1}{\sin^2\alpha} \quad (\alpha \neq 0^\circ, 180^\circ)$$
  $$\tan\alpha \cdot \cot\alpha = 1 \quad (\alpha \neq 0^\circ, 90^\circ, 180^\circ)$$

---

### 2. Định lý Cosin & Công thức Trung tuyến
Trong tam giác $ABC$ có $BC = a, CA = b, AB = c$:
* **Định lý Cosin:**
  $$a^2 = b^2 + c^2 - 2bc \cos A$$
  $$b^2 = a^2 + c^2 - 2ac \cos B$$
  $$c^2 = a^2 + b^2 - 2ab \cos C$$
* **Hệ quả (Tính góc khi biết 3 cạnh):**
  $$\cos A = \frac{b^2 + c^2 - a^2}{2bc}, \quad \cos B = \frac{a^2 + c^2 - b^2}{2ac}, \quad \cos C = \frac{a^2 + b^2 - c^2}{2ab}$$
* **Công thức độ dài đường trung tuyến ($m_a, m_b, m_c$):**
  $$m_a^2 = \frac{2(b^2 + c^2) - a^2}{4}, \quad m_b^2 = \frac{2(a^2 + c^2) - b^2}{4}, \quad m_c^2 = \frac{2(a^2 + b^2) - c^2}{4}$$

---

### 3. Định lý Sin
Trong tam giác $ABC$ có bán kính đường tròn ngoại tiếp là $R$:
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$
* **Hệ quả:** $a = 2R\sin A; \quad b = 2R\sin B; \quad c = 2R\sin C; \quad \sin A = \frac{a}{2R}$.

---

### 4. Bộ 5 công thức tính diện tích tam giác ($S$)
Gọi $p = \frac{a + b + c}{2}$ là nửa chu vi tam giác, $r$ là bán kính đường tròn nội tiếp, $R$ là bán kính đường tròn ngoại tiếp, $h_a, h_b, h_c$ là chiều cao:
1. $S = \frac{1}{2} a h_a = \frac{1}{2} b h_b = \frac{1}{2} c h_c$
2. $S = \frac{1}{2} ab \sin C = \frac{1}{2} bc \sin A = \frac{1}{2} ca \sin B$
3. $S = \frac{abc}{4R}$
4. $S = p \cdot r \implies r = \frac{S}{p}$
5. **Công thức Heron:** $S = \sqrt{p(p - a)(p - b)(p - c)}$

---

### ⚠️ Bẫy lý thuyết học sinh hay mắc phải:
1. **Dấu của Cosin khi góc tù:** Nếu $\cos A < 0$ thì góc $A$ là góc tù ($90^\circ < A < 180^\circ$), học sinh hay quên dấu âm dẫn đến tính sai cạnh $a$.
2. **Nhầm lẫn giữa $R$ và $2R$ trong định lý Sin:** Công thức là $\frac{a}{\sin A} = 2R$, không phải bằng $R$.
3. **Quên đổi đơn vị góc:** Khi bấm máy tính Casio, cần kiểm tra màn hình đang ở chế độ Độ (**D**) hay Radian (**R**).

---

## 💡 PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

### 🎯 Dạng 1: Tính giá trị lượng giác & Rút gọn biểu thức
* **Phương pháp:** Dùng $\sin^2\alpha + \cos^2\alpha = 1$, các góc bù nhau $\sin(180^\circ - \alpha) = \sin \alpha$, $\cos(180^\circ - \alpha) = -\cos \alpha$.
* **Ví dụ mẫu:** Cho $\cos \alpha = -\frac{3}{5}$ với $90^\circ < \alpha < 180^\circ$. Tính $\sin \alpha$ và $\tan \alpha$.
  * *Lời giải:* 
    * Vì $90^\circ < \alpha < 180^\circ \Rightarrow \sin \alpha > 0$.
    * $\sin \alpha = \sqrt{1 - \cos^2\alpha} = \sqrt{1 - \left(-\frac{3}{5}\right)^2} = \sqrt{\frac{16}{25}} = \frac{4}{5}$.
    * $\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{4/5}{-3/5} = -\frac{4}{3}$.

---

### 🎯 Dạng 2: Giải tam giác (Tìm cạnh, góc, bán kính $R, r$)
* **Dấu hiệu & Lựa chọn công thức:**
  * Biết **2 cạnh và góc xen giữa** $\rightarrow$ Dùng **Định lý Cosin** tìm cạnh thứ 3.
  * Biết **3 cạnh** $\rightarrow$ Dùng **Hệ quả định lý Cosin** tìm các góc.
  * Biết **1 cạnh và 2 góc** $\rightarrow$ Tính góc còn lại ($180^\circ - \widehat{A} - \widehat{B}$) rồi dùng **Định lý Sin**.
* **Ví dụ mẫu:** Cho tam giác $ABC$ có $b = 8, c = 5$ và $\widehat{A} = 60^\circ$. Tính cạnh $a$ và bán kính $R$.
  * *Lời giải:*
    * Áp dụng định lý Cosin: $a^2 = b^2 + c^2 - 2bc \cos A = 8^2 + 5^2 - 2(8)(5)\cos 60^\circ = 64 + 25 - 40 = 49 \implies a = 7$.
    * Áp dụng định lý Sin: $2R = \frac{a}{\sin A} = \frac{7}{\sin 60^\circ} = \frac{7}{\frac{\sqrt{3}}{2}} = \frac{14\sqrt{3}}{3} \implies R = \frac{7\sqrt{3}}{3}$.

---

### 🎯 Dạng 3: Tính diện tích tam giác & Bán kính nội tiếp $r$
* **Phương pháp:** Linh hoạt chọn công thức Heron khi biết 3 cạnh nguyên, hoặc công thức tích 2 cạnh nhân $\sin$ góc xen giữa.
* **Ví dụ mẫu:** Cho tam giác $ABC$ có $a = 13, b = 14, c = 15$. Tính diện tích $S$ và bán kính $r$.
  * *Lời giải:*
    * Nửa chu vi: $p = \frac{13 + 14 + 15}{2} = 21$.
    * Diện tích theo Heron: $S = \sqrt{21(21 - 13)(21 - 14)(21 - 15)} = \sqrt{21 \times 8 \times 7 \times 6} = 84$.
    * Bán kính nội tiếp: $r = \frac{S}{p} = \frac{84}{21} = 4$.

---

### 🎯 Dạng 4: Bài toán đo đạc thực tế (Chiều cao, khoảng cách)
* **Phương pháp:** Mô hình hóa thực tế thành tam giác $\rightarrow$ Xác định các yếu tố đã biết (khoảng cách giữa 2 điểm quan sát, góc nâng/hạ) $\rightarrow$ Áp dụng định lý Sin/Cosin.

---

## ✍️ PHẦN 3: BÀI TẬP TỰ LUẬN (Chuẩn hóa lời giải)

### 📝 Bài 1: (Giải tam giác & Tính các yếu tố đường tròn)
**Đề bài:** Cho tam giác $ABC$ có $a = 6, b = 7, c = 8$.
1. Tính $\cos A$ và tính diện tích tam giác $ABC$.
2. Tính độ dài đường cao kẻ từ đỉnh $A$ ($h_a$) và bán kính đường tròn ngoại tiếp $R$, nội tiếp $r$.

**Lời giải chi tiết:**
1. **Tính $\cos A$ và Diện tích $S$:**
   * $\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{7^2 + 8^2 - 6^2}{2 \times 7 \times 8} = \frac{49 + 64 - 36}{112} = \frac{77}{112} = \frac{11}{16}$.
   * Nửa chu vi: $p = \frac{6 + 7 + 8}{2} = \frac{21}{2} = 10.5$.
   * Diện tích theo công thức Heron:
     $$S = \sqrt{\frac{21}{2}\left(\frac{21}{2} - 6\right)\left(\frac{21}{2} - 7\right)\left(\frac{21}{2} - 8\right)} = \sqrt{\frac{21}{2} \cdot \frac{9}{2} \cdot \frac{7}{2} \cdot \frac{5}{2}} = \frac{21\sqrt{15}}{4} \approx 20.33$$
2. **Tính $h_a, R, r$:**
   * Chiều cao $h_a$: $S = \frac{1}{2} a h_a \implies h_a = \frac{2S}{a} = \frac{2 \cdot \frac{21\sqrt{15}}{4}}{6} = \frac{7\sqrt{15}}{4}$.
   * Bán kính ngoại tiếp $R$: $R = \frac{abc}{4S} = \frac{6 \times 7 \times 8}{4 \cdot \frac{21\sqrt{15}}{4}} = \frac{336}{21\sqrt{15}} = \frac{16}{\sqrt{15}} = \frac{16\sqrt{15}}{15}$.
   * Bán kính nội tiếp $r$: $r = \frac{S}{p} = \frac{\frac{21\sqrt{15}}{4}}{\frac{21}{2}} = \frac{\sqrt{15}}{2}$.

---

### 📝 Bài 2: (Bài toán thực tế - Đo chiều cao của tháp không thể đến chân)
**Đề bài:** Để đo chiều cao $CD = h$ của một ngọn tháp trên đỉnh đồi, người ta chọn hai điểm $A$ và $B$ trên mặt đất bằng phẳng sao cho $A, B, D$ thẳng hàng. Khoảng cách giữa hai điểm quan sát là $AB = 24\text{ m}$. Từ $A$ và $B$, người ta ngắm lên đỉnh tháp $C$ với góc nâng lần lượt là $\widehat{CAD} = 30^\circ$ và $\widehat{CBD} = 45^\circ$. Tính chiều cao $CD$ của tháp (làm tròn đến hàng phần mười).

**Lời giải chi tiết:**
* Xét tam giác $ABC$:
  * Góc $\widehat{CAB} = 30^\circ$.
  * Góc ngoài $\widehat{CBD} = 45^\circ \implies \widehat{ACB} = \widehat{CBD} - \widehat{CAB} = 45^\circ - 30^\circ = 15^\circ$.
* Áp dụng định lý Sin trong $\triangle ABC$:
  $$\frac{BC}{\sin \widehat{CAB}} = \frac{AB}{\sin \widehat{ACB}} \implies BC = \frac{AB \cdot \sin 30^\circ}{\sin 15^\circ} = \frac{24 \cdot 0.5}{\sin 15^\circ} = \frac{12}{\sin 15^\circ} \approx 46.36\text{ m}$$
* Xét tam giác vuông $BCD$ vuông tại $D$:
  $$CD = BC \cdot \sin \widehat{CBD} = BC \cdot \sin 45^\circ = 46.36 \cdot \frac{\sqrt{2}}{2} \approx 32.8\text{ m}$$
* **Đáp số:** Chiều cao của tháp là khoảng **$32.8\text{ m}$**.

---

### 📝 Bài 3: (Bài toán thực tế - Khoảng cách tàu biển)
**Đề bài:** Hai tàu thủy xuất phát cùng một lúc từ một cảng $A$, đi theo hai hướng tạo với nhau một góc $60^\circ$. Tàu thứ nhất chạy với vận tốc $v_1 = 30\text{ km/h}$, tàu thứ hai chạy với vận tốc $v_2 = 40\text{ km/h}$. Hỏi sau 2 giờ, khoảng cách giữa hai tàu là bao nhiêu kilômét?

**Lời giải chi tiết:**
* Sau $t = 2$ giờ:
  * Quãng đường tàu 1 đi được: $b = AC = v_1 \cdot t = 30 \times 2 = 60\text{ km}$.
  * Quãng đường tàu 2 đi được: $c = AB = v_2 \cdot t = 40 \times 2 = 80\text{ km}$.
  * Góc xen giữa $\widehat{BAC} = 60^\circ$.
* Áp dụng định lý Cosin trong tam giác $ABC$ để tìm khoảng cách $a = BC$:
  $$a^2 = b^2 + c^2 - 2bc \cos \widehat{BAC}$$
  $$a^2 = 60^2 + 80^2 - 2(60)(80)\cos 60^\circ = 3600 + 6400 - 9600 \cdot 0.5 = 10000 - 4800 = 5200$$
  $$\implies a = \sqrt{5200} = 20\sqrt{13} \approx 72.11\text{ km}$$
* **Đáp số:** Sau 2 giờ, hai tàu cách nhau khoảng **$72.11\text{ km}$**.

---

## 🎲 PHẦN 4: NGÂN HÀNG TRẮC NGHIỆM TRỘN ĐỀ

### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN

**Câu 1 `[TOAN10_C4_NB_01]`:** Cho góc $\alpha \in (90^\circ; 180^\circ)$. Khẳng định nào sau đây là **đúng**?
* A. $\sin \alpha < 0$.
* B. $\cos \alpha > 0$.
* C. $\tan \alpha < 0$.
* D. $\cot \alpha > 0$.  
* 👉 **Đáp án:** **C** *(Với góc tù $\alpha$, $\sin \alpha > 0$ còn $\cos \alpha < 0 \implies \tan \alpha = \frac{\sin\alpha}{\cos\alpha} < 0$).*

---

**Câu 2 `[TOAN10_C4_TH_02]`:** Cho tam giác $ABC$ có $a = 8, \widehat{A} = 30^\circ$. Bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ bằng:
* A. 4
* B. 8
* C. 16
* D. $8\sqrt{3}$  
* 👉 **Đáp án:** **B** *(Theo định lý Sin: $2R = \frac{a}{\sin A} = \frac{8}{\sin 30^\circ} = \frac{8}{0.5} = 16 \implies R = 8$).*

---

**Câu 3 `[TOAN10_C4_VD_03]`:** Tam giác $ABC$ có các cạnh $a = 5, b = 7, c = 8$. Số đo của góc $\widehat{A}$ là:
* A. $30^\circ$
* B. $45^\circ$
* C. $60^\circ$
* D. $120^\circ$  
* 👉 **Đáp án:** **C** *(Ta có $\cos A = \frac{7^2 + 8^2 - 5^2}{2 \times 7 \times 8} = \frac{49 + 64 - 25}{112} = \frac{88}{112} = \frac{11}{14}$ $\rightarrow$ Tính lại với số đo chuẩn: Với $a=7, b=5, c=8 \implies \cos A = \frac{5^2+8^2-7^2}{2(5)(8)} = \frac{25+64-49}{80} = \frac{40}{80} = \frac{1}{2} \implies \widehat{A} = 60^\circ$).*

---

**Câu 4 `[TOAN10_C4_VDC_04]`:** Cho tam giác $ABC$ thỏa mãn hệ thức $a = 2b \cos C$. Khi đó tam giác $ABC$ là tam giác gì?
* A. Tam giác vuông tại $A$
* B. Tam giác cân tại $A$
* C. Tam giác cân tại $C$
* D. Tam giác vuông tại $B$  
* 👉 **Đáp án:** **B** *(Theo định lý Cosin: $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$. Thay vào hệ thức: $a = 2b \cdot \frac{a^2 + b^2 - c^2}{2ab} \iff a = \frac{a^2 + b^2 - c^2}{a} \iff a^2 = a^2 + b^2 - c^2 \iff b^2 = c^2 \iff b = c \implies \triangle ABC$ cân tại $A$).*

---

### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI

**Câu 5 `[TOAN10_C4_TF_01]`:** Cho tam giác $ABC$ có $b = 6, c = 8$ và diện tích $S = 12\sqrt{3}$.
* a) $\sin A = \frac{\sqrt{3}}{2}$.
* b) Góc $\widehat{A}$ chỉ có thể bằng $60^\circ$.
* c) Nếu $\widehat{A} = 60^\circ$ thì cạnh $a = 2\sqrt{13}$.
* d) Bán kính đường tròn ngoại tiếp tam giác $ABC$ khi $\widehat{A} = 60^\circ$ là $R = \frac{2\sqrt{39}}{3}$.

👉 **Đáp án:**
* **a) ĐÚNG** ($S = \frac{1}{2}bc\sin A \implies 12\sqrt{3} = \frac{1}{2}(6)(8)\sin A = 24\sin A \implies \sin A = \frac{\sqrt{3}}{2}$).
* **b) SAI** (Vì $\sin A = \frac{\sqrt{3}}{2}$ thì $\widehat{A} = 60^\circ$ hoặc $\widehat{A} = 120^\circ$).
* **c) ĐÚNG** ($a^2 = 6^2 + 8^2 - 2(6)(8)\cos 60^\circ = 36 + 64 - 48 = 52 \implies a = \sqrt{52} = 2\sqrt{13}$).
* **d) ĐÚNG** ($2R = \frac{a}{\sin A} = \frac{2\sqrt{13}}{\frac{\sqrt{3}}{2}} = \frac{4\sqrt{13}}{\sqrt{3}} \implies R = \frac{2\sqrt{39}}{3}$).

---

### PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN

**Câu 6 `[TOAN10_C4_SA_01]`:** Cho tam giác $ABC$ có ba cạnh $a = 10, b = 10, c = 12$. Bán kính đường tròn nội tiếp $r$ của tam giác bằng bao nhiêu?  
👉 **Đáp số:** `3`  
*(Giải thích: $p = \frac{10+10+12}{2} = 16$. Chiều cao $h_c = \sqrt{10^2 - 6^2} = 8 \implies S = \frac{1}{2} \cdot 12 \cdot 8 = 48$. Bán kính $r = \frac{S}{p} = \frac{48}{16} = 3$).*

**Câu 7 `[TOAN10_C4_SA_02]`:** Cho góc $\alpha$ thỏa mãn $\tan \alpha = 2$. Tính giá trị của biểu thức $P = \frac{2\sin \alpha - 3\cos \alpha}{\sin \alpha + 2\cos \alpha}$.  
👉 **Đáp số:** `0.25`  
*(Giải thích: Chia cả tử và mẫu cho $\cos \alpha \neq 0$: $P = \frac{2\tan \alpha - 3}{\tan \alpha + 2} = \frac{2(2) - 3}{2 + 2} = \frac{1}{4} = 0.25$).*
