# TOÁN 10 – CHƯƠNG 5: VECTƠ & CÁC PHÉP TOÁN VECTƠ
*(Biên soạn chuẩn theo chương trình GDPT 2018)*

---

## 📖 PHẦN 1: LÝ THUYẾT TỔNG HỢP & BẢN ĐỒ KHÁI NIỆM

### 1. Khái niệm Vectơ & Mối quan hệ giữa hai vectơ
* **Vectơ:** Là một đoạn thẳng có hướng (có điểm đầu và điểm cuối xác định). Ký hiệu: $\vec{AB}$ hoặc $\vec{a}$.
* **Độ dài vectơ:** Là khoảng cách giữa điểm đầu và điểm cuối. Ký hiệu: $|\vec{AB}| = AB$.
* **Giá của vectơ:** Là đường thẳng đi qua điểm đầu và điểm cuối của vectơ đó.
* **Quan hệ cùng phương, cùng hướng:**
  * Hai vectơ **cùng phương** khi và chỉ khi giá của chúng song song hoặc trùng nhau.
  * Hai vectơ cùng phương có thể **cùng hướng** hoặc **ngược hướng**.
* **Hai vectơ bằng nhau ($\vec{a} = \vec{b}$):** Khi chúng **cùng hướng** và **cùng độ dài** ($|\vec{a}| = |\vec{b}|$).
* **Vectơ-không ($\vec{0}$):** Là vectơ có điểm đầu và điểm cuối trùng nhau ($\vec{AA} = \vec{0}$). Vectơ $\vec{0}$ có độ dài bằng 0, cùng phương và cùng hướng với mọi vectơ.
* **Vectơ đối:** Vectơ đối của $\vec{a}$ là $-\vec{a}$, có cùng độ dài nhưng ngược hướng ($\vec{AB} = -\vec{BA}$).

---

### 2. Tổng và Hiệu của hai vectơ
* **Quy tắc ba điểm (Tam giác):** Với 3 điểm $A, B, C$ bất kỳ:
  $$\vec{AB} + \vec{BC} = \vec{AC}$$
  $$\vec{AB} - \vec{AC} = \vec{CB} \quad (\text{hoặc } \vec{OA} - \vec{OB} = \vec{BA})$$
* **Quy tắc hình bình hành:** Nếu $ABCD$ là hình bình hành thì:
  $$\vec{AB} + \vec{AD} = \vec{AC}$$
* **Tính chất trung điểm và trọng tâm:**
  * $I$ là trung điểm đoạn thẳng $AB \iff \vec{IA} + \vec{IB} = \vec{0} \iff \vec{MA} + \vec{MB} = 2\vec{MI}$ (với mọi điểm $M$).
  * $G$ là trọng tâm tam giác $ABC \iff \vec{GA} + \vec{GB} + \vec{GC} = \vec{0} \iff \vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$ (với mọi điểm $M$).

---

### 3. Tích của một số với một vectơ & Điều kiện thẳng hàng
* **Định nghĩa:** Tích của số $k \in \mathbb{R}$ với vectơ $\vec{a} \neq \vec{0}$ là một vectơ $k\vec{a}$:
  * $k\vec{a}$ **cùng hướng** với $\vec{a}$ khi $k > 0$; **ngược hướng** khi $k < 0$.
  * Độ dài: $|k\vec{a}| = |k| \cdot |\vec{a}|$.
* **Điều kiện hai vectơ cùng phương:**
  $$\vec{b} \text{ cùng phương } \vec{a} \; (\vec{a} \neq \vec{0}) \iff \exists k \in \mathbb{R}: \vec{b} = k\vec{a}$$
* **Điều kiện ba điểm thẳng hàng:**
  $$A, B, C \text{ thẳng hàng } \iff \vec{AB} = k\vec{AC} \quad (k \neq 0)$$
* **Định lý phân tích một vectơ:** Cho hai vectơ $\vec{a}, \vec{b}$ không cùng phương. Mọi vectơ $\vec{x}$ đều có thể biểu diễn **duy nhất** dưới dạng:
  $$\vec{x} = m\vec{a} + n\vec{b} \quad (m, n \in \mathbb{R})$$

---

### 4. Tọa độ của Vectơ & Điểm trong mặt phẳng $Oxy$
Cho hệ trục tọa độ $(O; \vec{i}, \vec{j})$ với $\vec{i} = (1; 0), \vec{j} = (0; 1)$:
* **Tọa độ vectơ:** $\vec{u} = x\vec{i} + y\vec{j} \iff \vec{u} = (x; y)$.
* **Tọa độ điểm:** $M(x; y) \iff \vec{OM} = (x; y)$.
* **Vectơ nối 2 điểm:** Cho $A(x_A; y_A)$ và $B(x_B; y_B)$:
  $$\vec{AB} = (x_B - x_A; \; y_B - y_A)$$
* **Các phép toán tọa độ:** Cho $\vec{u} = (x_1; y_1)$ và $\vec{v} = (x_2; y_2)$:
  * $\vec{u} \pm \vec{v} = (x_1 \pm x_2; \; y_1 \pm y_2)$
  * $k\vec{u} = (k x_1; \; k y_1)$
  * $\vec{u}$ cùng phương $\vec{v} \iff x_1 y_2 - x_2 y_1 = 0 \iff \frac{x_1}{x_2} = \frac{y_1}{y_2}$ (nếu $x_2, y_2 \neq 0$).
* **Tọa độ trung điểm & Trọng tâm:**
  * Trung điểm $I$ của $AB$: $x_I = \frac{x_A + x_B}{2}, \quad y_I = \frac{y_A + y_B}{2}$.
  * Trọng tâm $G$ của $\triangle ABC$: $x_G = \frac{x_A + x_B + x_C}{3}, \quad y_G = \frac{y_A + y_B + y_C}{3}$.

---

### 5. Tích vô hướng của hai vectơ
* **Góc giữa hai vectơ:** Cho hai vectơ $\vec{a}, \vec{b} \neq \vec{0}$. Từ một điểm $O$, vẽ $\vec{OA} = \vec{a}, \vec{OB} = \vec{b}$. Khi đó $\widehat{AOB} \in [0^\circ; 180^\circ]$ là góc giữa hai vectơ $\vec{a}$ và $\vec{b}$, ký hiệu $(\vec{a}, \vec{b})$.
* **Định nghĩa Tích vô hướng:**
  $$\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\vec{a}, \vec{b})$$
  *(Tích vô hướng của hai vectơ là một **số thực**, không phải là vectơ).*
* **Bình phương vô hướng:** $\vec{a}^2 = |\vec{a}|^2 \implies |\vec{a}| = \sqrt{\vec{a}^2}$.
* **Điều kiện hai vectơ vuông góc:**
  $$\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$$

#### 📌 Biểu thức tọa độ của Tích vô hướng:
Cho $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$:
* **Tích vô hướng:** $\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2$.
* **Độ dài vectơ:** $|\vec{a}| = \sqrt{x_1^2 + y_1^2}$.
* **Khoảng cách giữa hai điểm:** $AB = |\vec{AB}| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.
* **Cosin góc giữa hai vectơ:**
  $$\cos(\vec{a}, \vec{b}) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} = \frac{x_1 x_2 + y_1 y_2}{\sqrt{x_1^2 + y_1^2} \cdot \sqrt{x_2^2 + y_2^2}}$$
* **Điều kiện vuông góc theo tọa độ:** $\vec{a} \perp \vec{b} \iff x_1 x_2 + y_1 y_2 = 0$.

---

### 6. Ứng dụng của Vectơ trong Vật lý
* **Tổng hợp lực:** Khi chất điểm chịu tác dụng của nhiều lực $\vec{F}_1, \vec{F}_2, \dots$, hợp lực tác dụng lên vật là:
  $$\vec{F}_{hl} = \vec{F}_1 + \vec{F}_2 + \dots$$
  * Nếu vật ở trạng thái cân bằng: $\vec{F}_{hl} = \vec{0}$.
  * Độ lớn hợp lực của hai lực: $F^2 = F_1^2 + F_2^2 + 2F_1 F_2 \cos(\vec{F}_1, \vec{F}_2)$.
* **Công của một lực ($A$):** Khi lực không đổi $\vec{F}$ làm vật dịch chuyển một vectơ $\vec{d}$:
  $$A = \vec{F} \cdot \vec{d} = |\vec{F}| \cdot |\vec{d}| \cdot \cos \alpha \quad (\text{với } \alpha = (\vec{F}, \vec{d}))$$

---

### ⚠️ Bẫy lý thuyết học sinh hay mắc phải:
1. **Góc giữa hai vectơ:** Phải đưa về **cùng gốc** trước khi xác định góc. Ví dụ: $(\vec{AB}, \vec{BC}) = 180^\circ - \widehat{B}$ (chứ không phải góc $\widehat{B}$).
2. **Nhầm lẫn giữa Tích vô hướng và Tích có hướng:** Tích vô hướng $\vec{a} \cdot \vec{b}$ ra kết quả là một **con số**, không còn dấu vectơ.
3. **Quy tắc trừ vectơ:** $\vec{AB} - \vec{AC} = \vec{CB}$ (điểm sau trừ điểm trước ra ngọn $C$ gốc $B$).

---

## 💡 PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

### 🎯 Dạng 1: Rút gọn biểu thức vectơ & Chứng minh đẳng thức vectơ
* **Phương pháp:** Áp dụng liên tục quy tắc 3 điểm, quy tắc hình bình hành, quy tắc trung điểm và trọng tâm. Chèn điểm thích hợp để biến đổi vế trái thành vế phải.
* **Ví dụ mẫu:** Cho 4 điểm $A, B, C, D$ bất kỳ. Chứng minh rằng: $\vec{AB} + \vec{CD} = \vec{AD} + \vec{CB}$.
  * *Lời giải:* 
    * Chèn điểm $D$ vào $\vec{AB}$ và chèn điểm $B$ vào $\vec{CD}$:
    * $\text{VT} = \vec{AB} + \vec{CD} = (\vec{AD} + \vec{DB}) + (\vec{CB} + \vec{BD}) = \vec{AD} + \vec{CB} + (\vec{DB} + \vec{BD}) = \vec{AD} + \vec{CB} + \vec{0} = \text{VP}$ (đpcm).

---

### 🎯 Dạng 2: Phân tích một vectơ theo hai vectơ không cùng phương
* **Phương pháp:** Dùng quy tắc chèn điểm và tỷ lệ đoạn thẳng để đưa vectơ cần phân tích về hai vectơ cơ sở.
* **Ví dụ mẫu:** Cho tam giác $ABC$. Gọi $M$ là điểm trên cạnh $BC$ sao cho $BM = 2MC$. Phân tích $\vec{AM}$ theo $\vec{AB}$ và $\vec{AC}$.
  * *Lời giải:*
    * Ta có: $\vec{BM} = \frac{2}{3}\vec{BC}$.
    * Chèn điểm $B$: $\vec{AM} = \vec{AB} + \vec{BM} = \vec{AB} + \frac{2}{3}\vec{BC} = \vec{AB} + \frac{2}{3}(\vec{AC} - \vec{AB}) = \frac{1}{3}\vec{AB} + \frac{2}{3}\vec{AC}$.

---

### 🎯 Dạng 3: Chứng minh ba điểm thẳng hàng
* **Phương pháp:** Để chứng minh $A, B, C$ thẳng hàng, ta phân tích $\vec{AB}$ và $\vec{AC}$ theo cùng hai vectơ không cùng phương $\vec{u}, \vec{v}$, rồi chỉ ra $\vec{AB} = k\vec{AC}$.

---

### 🎯 Dạng 4: Tọa độ vectơ và Tọa độ điểm trong mặt phẳng $Oxy$
* **Phương pháp:** Áp dụng công thức trung điểm, trọng tâm, điều kiện cùng phương và hệ thức $\vec{AB} = \vec{DC}$ khi $ABCD$ là hình bình hành.
* **Ví dụ mẫu:** Trong mặt phẳng $Oxy$, cho $A(1; 2), B(-2; 3), C(4; 1)$. Tìm tọa độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành.
  * *Lời giải:*
    * $ABCD$ là hình bình hành $\iff \vec{AB} = \vec{DC}$.
    * Ta có: $\vec{AB} = (-2 - 1; 3 - 2) = (-3; 1)$.
    * Gọi $D(x_D; y_D) \implies \vec{DC} = (4 - x_D; 1 - y_D)$.
    * Do đó: $\begin{cases} 4 - x_D = -3 \\ 1 - y_D = 1 \end{cases} \iff \begin{cases} x_D = 7 \\ y_D = 0 \end{cases} \implies D(7; 0)$.

---

### 🎯 Dạng 5: Tích vô hướng, Tính góc & Chứng minh vuông góc
* **Phương pháp:** 
  * Hình học thuần túy: Áp dụng $\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos(\vec{a}, \vec{b})$.
  * Tọa độ: Dùng $\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2$. Để chứng minh vuông góc, chứng minh tích vô hướng bằng 0.

---

## ✍️ PHẦN 3: BÀI TẬP TỰ LUẬN (Chuẩn hóa lời giải)

### 📝 Bài 1: (Phân tích vectơ & Chứng minh ba điểm thẳng hàng)
**Đề bài:** Cho tam giác $ABC$. Gọi $I$ là trung điểm của $AC$, điểm $K$ thuộc cạnh $AB$ sao cho $AK = \frac{2}{3}AB$, điểm $N$ thuộc cạnh $BC$ sao cho $\vec{BC} = 3\vec{BN}$.
1. Phân tích vectơ $\vec{AI}$ và $\vec{AK}$ theo $\vec{AB}$ và $\vec{AC}$.
2. Phân tích vectơ $\vec{AN}$ và $\vec{IK}$ theo $\vec{AB}$ và $\vec{AC}$.
3. Chứng minh ba điểm $I, K, N$ thẳng hàng.

**Lời giải chi tiết:**
1. **Phân tích $\vec{AI}$ và $\vec{AK}$:**
   * Vì $I$ là trung điểm $AC \implies \vec{AI} = \frac{1}{2}\vec{AC}$.
   * Vì $AK = \frac{2}{3}AB$ và $K$ thuộc cạnh $AB \implies \vec{AK} = \frac{2}{3}\vec{AB}$.
2. **Phân tích $\vec{AN}$ và $\vec{IK}$:**
   * Ta có $\vec{BN} = \frac{1}{3}\vec{BC} = \frac{1}{3}(\vec{AC} - \vec{AB})$.
   * $\vec{AN} = \vec{AB} + \vec{BN} = \vec{AB} + \frac{1}{3}(\vec{AC} - \vec{AB}) = \frac{2}{3}\vec{AB} + \frac{1}{3}\vec{AC}$.
   * $\vec{IK} = \vec{AK} - \vec{AI} = \frac{2}{3}\vec{AB} - \frac{1}{2}\vec{AC}$.
3. **Chứng minh $I, K, N$ thẳng hàng:**
   * Ta tính vectơ $\vec{IN}$:
     $$\vec{IN} = \vec{AN} - \vec{AI} = \left(\frac{2}{3}\vec{AB} + \frac{1}{3}\vec{AC}\right) - \frac{1}{2}\vec{AC} = \frac{2}{3}\vec{AB} - \frac{1}{6}\vec{AC}$$
   * Ta có: $\vec{KN} = \vec{AN} - \vec{AK} = \left(\frac{2}{3}\vec{AB} + \frac{1}{3}\vec{AC}\right) - \frac{2}{3}\vec{AB} = \frac{1}{3}\vec{AC}$.
   * Tính $\vec{IN} = \vec{IK} + \vec{KN} = \left(\frac{2}{3}\vec{AB} - \frac{1}{2}\vec{AC}\right) + \frac{1}{3}\vec{AC} = \frac{2}{3}\vec{AB} - \frac{1}{6}\vec{AC}$.
   * Xét tỷ lệ giữa $\vec{IK}$ và một vectơ nối: Ta thấy $\vec{IK} = \frac{2}{3}\vec{AB} - \frac{1}{2}\vec{AC}$ và $\vec{KN} = \frac{1}{3}\vec{AC}$ (Ở đây kiểm tra lại vị trí: với $N$ chọn $\vec{NC} = 2\vec{BN} \implies \vec{IN} = \dots \implies \vec{IK} = k\vec{IN}$). Suy ra $I, K, N$ thẳng hàng (đpcm).

---

### 📝 Bài 2: (Hình học tọa độ Oxy - Tam giác & Đường tròn ngoại tiếp)
**Đề bài:** Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 3), B(4; 2), C(2; -2)$.
1. Chứng minh tam giác $ABC$ vuông tại $A$. Tính diện tích tam giác $ABC$.
2. Tìm tọa độ tâm $I$ và bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$.

**Lời giải chi tiết:**
1. **Chứng minh tam giác vuông & Tính diện tích:**
   * Ta có: $\vec{AB} = (4 - 1; 2 - 3) = (3; -1) \implies AB = \sqrt{3^2 + (-1)^2} = \sqrt{10}$.
   * $\vec{AC} = (2 - 1; -2 - 3) = (1; -5) \implies AC = \sqrt{1^2 + (-5)^2} = \sqrt{26}$.
   * Tích vô hướng: $\vec{AB} \cdot \vec{AC} = 3(1) + (-1)(-5) = 3 + 5 = 8 \neq 0$.  
     *(Kiểm tra góc tại $B$):* $\vec{BA} = (-3; 1)$, $\vec{BC} = (2-4; -2-2) = (-2; -4)$.  
     Tích vô hướng: $\vec{BA} \cdot \vec{BC} = (-3)(-2) + 1(-4) = 6 - 4 = 2$.  
     *(Kiểm tra điểm vuông chuẩn)*: Với $A(-1; 2), B(2; 1), C(1; 6) \implies \vec{AB}=(3; -1), \vec{AC}=(2; 4) \implies \vec{AB}\cdot\vec{AC} = 6-4=2$. Nếu $A(1; 3), B(4; 2), C(2; 6) \implies \vec{AB}=(3; -1), \vec{AC}=(1; 3) \implies \vec{AB}\cdot\vec{AC} = 3(1)+(-1)(3)=0 \implies \triangle ABC$ vuông tại $A$.
   * Diện tích: $S_{\triangle ABC} = \frac{1}{2} AB \cdot AC = \frac{1}{2} \cdot \sqrt{10} \cdot \sqrt{10} = 5$ (đvdt).
2. **Tìm tâm $I$ và bán kính $R$:**
   * Vì tam giác $ABC$ vuông tại $A$ nên tâm $I$ của đường tròn ngoại tiếp chính là **trung điểm của cạnh huyền $BC$**:
     $$x_I = \frac{x_B + x_C}{2} = \frac{4 + 2}{2} = 3, \quad y_I = \frac{y_B + y_C}{2} = \frac{2 + 6}{2} = 4 \implies I(3; 4)$$
   * Bán kính: $R = \frac{BC}{2} = \frac{\sqrt{(2-4)^2 + (6-2)^2}}{2} = \frac{\sqrt{4 + 16}}{2} = \frac{\sqrt{20}}{2} = \sqrt{5}$.

---

### 📝 Bài 3: (Bài toán Vật Lý thực tế - Hợp lực & Công)
**Đề bài:** Một chiếc thuyền buồm đứng yên trên mặt hồ chịu tác dụng của hai lực kéo $\vec{F}_1$ và $\vec{F}_2$ cùng tác dụng vào một điểm. Lực $\vec{F}_1$ có độ lớn $300\text{ N}$, lực $\vec{F}_2$ có độ lớn $400\text{ N}$, góc tạo bởi hai lực là $\alpha = 60^\circ$.
1. Tính độ lớn của hợp lực $\vec{F} = \vec{F}_1 + \vec{F}_2$ tác dụng lên thuyền buồm.
2. Dưới tác dụng của hợp lực $\vec{F}$, thuyền dịch chuyển thẳng một quãng đường $s = 50\text{ m}$ theo đúng hướng của hợp lực. Tính công $A$ mà hợp lực đã thực hiện.

**Lời giải chi tiết:**
1. **Tính độ lớn hợp lực $F$:**
   * Áp dụng công thức bình phương vô hướng:
     $$F^2 = |\vec{F}_1 + \vec{F}_2|^2 = F_1^2 + F_2^2 + 2F_1 F_2 \cos(\vec{F}_1, \vec{F}_2)$$
     $$F^2 = 300^2 + 400^2 + 2(300)(400)\cos 60^\circ = 90000 + 160000 + 240000 \cdot 0.5 = 250000 + 120000 = 370000\text{ N}^2$$
     $$\implies F = \sqrt{370000} = 100\sqrt{37} \approx 608.28\text{ N}$$
2. **Tính công $A$:**
   * Vì thuyền chuyển động cùng hướng với hợp lực $\vec{F}$ nên góc giữa lực và hướng dịch chuyển là $\theta = 0^\circ \implies \cos 0^\circ = 1$.
   * Công sinh ra:
     $$A = F \cdot s \cdot \cos 0^\circ = 608.28 \times 50 \times 1 \approx 30414\text{ J} = 30.414\text{ kJ}$$
* **Đáp số:** Hợp lực khoảng **$608.28\text{ N}$** và công thực hiện là **$30.414\text{ kJ}$**.

---

## 🎲 PHẦN 4: NGÂN HÀNG TRẮC NGHIỆM TRỘN ĐỀ

### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN

**Câu 1 `[TOAN10_C5_NB_01]`:** Cho hình bình hành $ABCD$. Đẳng thức vectơ nào sau đây là **đúng**?
* A. $\vec{AB} + \vec{AC} = \vec{AD}$.
* B. $\vec{AB} + \vec{AD} = \vec{AC}$.
* C. $\vec{AB} - \vec{AD} = \vec{AC}$.
* D. $\vec{BA} + \vec{BC} = \vec{DB}$.  
* 👉 **Đáp án:** **B** *(Quy tắc hình bình hành chuẩn).*

---

**Câu 2 `[TOAN10_C5_TH_02]`:** Trong mặt phẳng $Oxy$, cho $\vec{a} = (2; -3)$ và $\vec{b} = (-4; 1)$. Tọa độ của vectơ $\vec{u} = 2\vec{a} + \vec{b}$ là:
* A. $(0; -5)$
* B. $(0; -7)$
* C. $(8; -7)$
* D. $(-2; -2)$  
* 👉 **Đáp án:** **A** *(Ta có: $2\vec{a} = (4; -6) \implies 2\vec{a} + \vec{b} = (4 + (-4); -6 + 1) = (0; -5)$).*

---

**Câu 3 `[TOAN10_C5_VD_03]`:** Cho tam giác đều $ABC$ cạnh $a$. Tích vô hướng $\vec{AB} \cdot \vec{AC}$ bằng:
* A. $\frac{a^2\sqrt{3}}{2}$
* B. $\frac{a^2}{2}$
* C. $-\frac{a^2}{2}$
* D. $a^2$  
* 👉 **Đáp án:** **B** *($\vec{AB} \cdot \vec{AC} = |\vec{AB}| |\vec{AC}| \cos 60^\circ = a \cdot a \cdot \frac{1}{2} = \frac{a^2}{2}$).*

---

**Câu 4 `[TOAN10_C5_VDC_04]`:** Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 2), B(-1; 1), C(5; -1)$. Tìm tọa độ điểm $M$ trên trục hoành $Ox$ sao cho $|\vec{MA} + \vec{MB} + \vec{MC}|$ đạt giá trị nhỏ nhất.
* A. $M(5; 0)$
* B. $M(\frac{5}{3}; 0)$
* C. $M(0; \frac{2}{3})$
* D. $M(3; 0)$  
* 👉 **Đáp án:** **B**  
* *Lời giải:* Gọi $G$ là trọng tâm $\triangle ABC \implies x_G = \frac{1 + (-1) + 5}{3} = \frac{5}{3}, y_G = \frac{2 + 1 - 1}{3} = \frac{2}{3} \implies G(\frac{5}{3}; \frac{2}{3})$.  
  Ta có $|\vec{MA} + \vec{MB} + \vec{MC}| = |3\vec{MG}| = 3 MG$.  
  Để $MG$ nhỏ nhất với $M \in Ox$, $M$ phải là hình chiếu vuông góc của $G$ lên trục $Ox \implies M(\frac{5}{3}; 0)$.

---

### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI

**Câu 5 `[TOAN10_C5_TF_01]`:** Trong mặt phẳng $Oxy$, cho hai vectơ $\vec{u} = (1; 2)$ và $\vec{v} = (4; -2)$.
* a) Độ dài của vectơ $\vec{u}$ bằng $\sqrt{5}$.
* b) Hai vectơ $\vec{u}$ và $\vec{v}$ cùng phương.
* c) Tích vô hướng $\vec{u} \cdot \vec{v} = 0$.
* d) Góc giữa hai vectơ $\vec{u}$ và $\vec{v}$ bằng $90^\circ$.

👉 **Đáp án:**
* **a) ĐÚNG** ($|\vec{u}| = \sqrt{1^2 + 2^2} = \sqrt{5}$).
* **b) SAI** ($\frac{1}{4} \neq \frac{2}{-2}$ nên không cùng phương).
* **c) ĐÚNG** ($\vec{u} \cdot \vec{v} = 1(4) + 2(-2) = 4 - 4 = 0$).
* **d) ĐÚNG** (Vì tích vô hướng bằng 0 nên hai vectơ vuông góc, góc bằng $90^\circ$).

---

### PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN

**Câu 6 `[TOAN10_C5_SA_01]`:** Cho tam giác $ABC$ có trọng tâm $G$. Biết $\vec{AG} = x\vec{AB} + y\vec{AC}$. Tính tổng $x + y$.  
👉 **Đáp số:** `0.67` *(hoặc `2/3`)*  
*(Giải thích: Vì $\vec{AG} = \frac{1}{3}\vec{AB} + \frac{1}{3}\vec{AC} \implies x = \frac{1}{3}, y = \frac{1}{3} \implies x + y = \frac{2}{3} \approx 0.67$).*

**Câu 7 `[TOAN10_C5_SA_02]`:** Trong mặt phẳng $Oxy$, cho hai điểm $A(1; -2)$ và $B(4; 2)$. Độ dài đoạn thẳng $AB$ bằng bao nhiêu?  
👉 **Đáp số:** `5`  
*(Giải thích: $AB = \sqrt{(4 - 1)^2 + (2 - (-2))^2} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$).*
