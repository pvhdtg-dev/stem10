# VẬT LÝ 10 – CHƯƠNG 2: ĐỘNG LỰC HỌC (BA ĐỊNH LUẬT NEWTON & CÁC LỰC CƠ HỌC)
*(Biên soạn chuẩn theo chương trình GDPT 2018)*

---

## 📖 PHẦN 1: LÝ THUYẾT TỔNG HỢP & BẢN ĐỒ KHÁI NIỆM

### 1. Tổng hợp & Phân tích lực
* **Lực ($\vec{F}$):** Là đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác, gây ra gia tốc cho vật hoặc làm vật biến dạng. Đơn vị: Newton ($\text{N}$).
* **Tổng hợp lực:** Là thay thế hai hay nhiều lực tác dụng đồng thời vào một vật bằng một lực duy nhất có tác dụng tương đương:
  $$\vec{F} = \vec{F}_1 + \vec{F}_2$$
  * Nếu $\vec{F}_1 \uparrow\uparrow \vec{F}_2$ (cùng chiều): $F = F_1 + F_2$
  * Nếu $\vec{F}_1 \uparrow\downarrow \vec{F}_2$ (ngược chiều): $F = |F_1 - F_2|$
  * Nếu $\vec{F}_1 \perp \vec{F}_2$ (vuông góc): $F = \sqrt{F_1^2 + F_2^2}$
  * Góc bất kỳ $\alpha = (\vec{F}_1, \vec{F}_2)$: $F = \sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \cos \alpha}$
  * Giới hạn độ lớn: $|F_1 - F_2| \le F \le F_1 + F_2$.
* **Phân tích lực:** Là phép thay thế một lực thành hai lực thành phần vuông góc với nhau:
  $$F_x = F \cdot \cos \alpha, \quad F_y = F \cdot \sin \alpha$$

---

### 2. Ba định luật Newton
* **Định luật I Newton (Định luật Quán tính):**
  * *Nội dung:* Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng 0 thì vật đang đứng yên sẽ tiếp tục **đứng yên**, vật đang chuyển động sẽ tiếp tục **chuyển động thẳng đều**.
  * *Quán tính:* Là tính chất của mọi vật có xu hướng bảo toàn vận tốc của nó cả về hướng và độ lớn.
  * *Khối lượng ($m$):* Là đại lượng đặc trưng cho **mức quán tính** của vật (khối lượng càng lớn thì vật càng khó thay đổi vận tốc).
* **Định luật II Newton:**
  * *Nội dung:* Gia tốc của một vật cùng hướng với hợp lực tác dụng lên vật. Độ lớn gia tốc tỉ lệ thuận với độ lớn hợp lực và tỉ lệ nghịch với khối lượng của vật:
    $$\vec{a} = \frac{\vec{F}_{hl}}{m} \iff \vec{F}_{hl} = m\vec{a}$$
* **Định luật III Newton (Tương tác):**
  * *Nội dung:* Khi vật $A$ tác dụng lên vật $B$ một lực thì vật $B$ cũng tác dụng lại vật $A$ một lực. Hai lực này là hai lực trực đối:
    $$\vec{F}_{BA} = -\vec{F}_{AB}$$
  * *Đặc điểm của cặp Lực & Phản lực:*
    * Luôn xuất hiện và mất đi **đồng thời**.
    * Có cùng độ lớn, cùng phương, **ngược chiều**.
    * **Đặt vào hai vật khác nhau** (do đó chúng KHÔNG triệt tiêu nhau).

---

### 3. Các lực cơ học trong thực tiễn
1. **Trọng lực ($\vec{P}$) & Trọng lượng ($P$):**
   * Là lực hút của Trái Đất tác dụng lên vật: $\vec{P} = m\vec{g}$.
   * Điểm đặt tại **trọng tâm** của vật; Phương thẳng đứng, chiều hướng về tâm Trái Đất.
2. **Lực ma sát trượt ($F_{mst}$):**
   * Xuất hiện ở mặt tiếp xúc khi vật trượt trên một bề mặt, có hướng ngược hướng chuyển động trượt.
   * Độ lớn:
     $$F_{mst} = \mu_t \cdot N$$
     *(trong đó $\mu_t$ là hệ số ma sát trượt, không có đơn vị; $N$ là độ lớn áp lực vuông góc với mặt tiếp xúc).*
3. **Lực đàn hồi & Định luật Hooke:**
   * Xuất hiện khi vật bị biến dạng đàn hồi, có xu hướng chống lại nguyên nhân gây ra biến dạng.
   * Định luật Hooke cho lò xo:
     $$F_{dh} = k \cdot |\Delta l| = k \cdot |l - l_0|$$
     *($k$ là độ cứng của lò xo tính bằng $\text{N/m}$; $\Delta l$ là độ biến dạng dãn hoặc nén).*
4. **Lực căng dây ($\vec{T}$):**
   * Xuất hiện dọc theo sợi dây khi dây bị kéo căng. Điểm đặt tại vật gắn với dây, chiều hướng dọc theo dây vào trong.
5. **Lực đẩy Archimedes ($F_A$):**
   * Tác dụng lên vật nhúng trong chất lưu (chất lỏng hoặc chất khí), hướng thẳng đứng từ dưới lên:
     $$F_A = \rho \cdot g \cdot V = d \cdot V$$
     *($\rho$ là khối lượng riêng của chất lưu $\text{kg/m}^3$; $V$ là thể tích phần vật chìm trong chất lưu).*

---

### 4. Phương pháp Động lực học giải bài toán chuyển động
Quy trình 5 bước kinh điển:
1. **Chọn vật khảo sát** và biểu diễn tất cả các lực tác dụng lên vật ($\vec{P}, \vec{N}, \vec{F}_{k}, \vec{F}_{ms}, \vec{T}\dots$).
2. **Chọn hệ trục tọa độ $Oxy$:** Trục $Ox$ theo phương chuyển động (chiều dương là chiều chuyển động), trục $Oy$ vuông góc với $Ox$.
3. **Viết phương trình định luật II Newton dạng vectơ:**
   $$\sum \vec{F} = \vec{P} + \vec{N} + \vec{F}_k + \vec{F}_{ms} = m\vec{a}$$
4. **Chiếu phương trình lên 2 trục tọa độ:**
   * Chiếu lên $Oy$: $N = \dots \implies F_{ms} = \mu N$.
   * Chiếu lên $Ox$: $F_{k,x} - F_{ms} = m a \implies a = \frac{F_{k,x} - F_{ms}}{m}$.
5. **Kết hợp các công thức động học** ($v = v_0 + at, s = v_0 t + \frac{1}{2}at^2, v^2 - v_0^2 = 2as$) để giải yêu cầu đề bài.

---

### ⚠️ Bẫy lý thuyết học sinh hay mắc phải:
1. **Nhầm lẫn Lực - Phản lực với Hai lực cân bằng:** Cặp lực - phản lực đặt vào **hai vật khác nhau** (không triệt tiêu), còn hai lực cân bằng cùng đặt vào **một vật** (hợp lực bằng 0).
2. **Áp lực $N$ không phải lúc nào cũng bằng $P = mg$:** Khi có lực kéo xiên góc $\alpha$ hoặc vật ở trên mặt phẳng nghiêng, $N = mg\cos\alpha$ hoặc $N = mg - F\sin\alpha$.
3. **Quên đổi đơn vị độ biến dạng $\Delta l$:** Trong công thức $F_{dh} = k|\Delta l|$, $\Delta l$ bắt buộc phải đổi ra mét ($\text{m}$), không được để centimet ($\text{cm}$).

---

## 💡 PHẦN 2: PHÂN DẠNG BÀI TẬP & PHƯƠNG PHÁP GIẢI

### 🎯 Dạng 1: Chuyển động trên mặt phẳng nằm ngang với lực kéo $\vec{F}_k$ xiên góc $\alpha$
* **Phương pháp:**
  * Chiếu lên $Oy$: $N + F_k \sin \alpha - P = 0 \implies N = mg - F_k \sin \alpha$.
  * Lực ma sát: $F_{ms} = \mu N = \mu (mg - F_k \sin \alpha)$.
  * Chiếu lên $Ox$: $F_k \cos \alpha - F_{ms} = ma \implies a = \frac{F_k \cos \alpha - \mu(mg - F_k \sin \alpha)}{m}$.
* **Ví dụ mẫu:** Kéo một vật khối lượng $m = 10\text{ kg}$ trên sàn nằm ngang bằng lực $F_k = 40\text{ N}$ hợp với phương ngang góc $\alpha = 30^\circ$. Hệ số ma sát giữa vật và sàn là $\mu = 0.1$. Lấy $g = 10\text{ m/s}^2$. Tính gia tốc của vật.
  * *Lời giải:*
    * Áp lực: $N = mg - F_k \sin 30^\circ = 10(10) - 40(0.5) = 100 - 20 = 80\text{ N}$.
    * Lực ma sát: $F_{ms} = \mu N = 0.1 \times 80 = 8\text{ N}$.
    * Lực kéo theo phương ngang: $F_x = F_k \cos 30^\circ = 40 \times \frac{\sqrt{3}}{2} = 20\sqrt{3} \approx 34.64\text{ N}$.
    * Gia tốc: $a = \frac{F_x - F_{ms}}{m} = \frac{34.64 - 8}{10} = 2.664\text{ m/s}^2$.

---

### 🎯 Dạng 2: Chuyển động trên mặt phẳng nghiêng góc $\alpha$
* **Phương pháp (Vật trượt xuống):**
  * Thành phần trọng lực kéo vật xuống: $P_x = P \sin \alpha = mg \sin \alpha$.
  * Áp lực vuông góc mặt nghiêng: $N = P_y = mg \cos \alpha \implies F_{ms} = \mu mg \cos \alpha$.
  * Gia tốc trượt xuống:
    $$a = g(\sin \alpha - \mu \cos \alpha)$$
* **Ví dụ mẫu:** Một vật trượt không vận tốc đầu từ đỉnh một dốc nghiêng góc $\alpha = 30^\circ$. Hệ số ma sát trượt $\mu = 0.2$. Lấy $g = 10\text{ m/s}^2$. Tính gia tốc của vật khi trượt xuống dốc.
  * *Lời giải:*
    * $a = g(\sin 30^\circ - \mu \cos 30^\circ) = 10(0.5 - 0.2 \times \frac{\sqrt{3}}{2}) = 10(0.5 - 0.1732) = 3.268\text{ m/s}^2$.

---

### 🎯 Dạng 3: Bài toán Lực đàn hồi của lò xo (Định luật Hooke)
* **Phương pháp:**
  * Khi treo thẳng đứng một vật $m$: Tại vị trí cân bằng, $F_{dh} = P \iff k \cdot \Delta l_0 = mg \implies \Delta l_0 = \frac{mg}{k}$.
  * Chiều dài khi dãn: $l = l_0 + \Delta l$.
* **Ví dụ mẫu:** Một lò xo có chiều dài tự nhiên $l_0 = 20\text{ cm}$. Khi treo quả cân $m = 200\text{ g}$ thì lò xo dài $24\text{ cm}$. Lấy $g = 10\text{ m/s}^2$. Tìm độ cứng $k$ của lò xo.
  * *Lời giải:*
    * Đổi: $m = 0.2\text{ kg}$; $\Delta l = 24 - 20 = 4\text{ cm} = 0.04\text{ m}$.
    * Lò xo cân bằng: $k \cdot \Delta l = mg \implies k = \frac{mg}{\Delta l} = \frac{0.2 \times 10}{0.04} = 50\text{ N/m}$.

---

## ✍️ PHẦN 3: BÀI TẬP TỰ LUẬN (Chuẩn hóa lời giải)

### 📝 Bài 1: (Chuyển động trên mặt phẳng ngang & Lực cản)
**Đề bài:** Một ô tô khối lượng $m = 2\text{ tấn}$ bắt đầu khởi hành trên đường thẳng nằm ngang nhờ lực phát động của động cơ $F_k = 4000\text{ N}$. Hệ số ma sát lăn giữa bánh xe và mặt đường là $\mu = 0.05$. Lấy $g = 10\text{ m/s}^2$.
1. Tính gia tốc của ô tô trong giai đoạn tăng tốc này.
2. Sau $10\text{ giây}$ kể từ lúc khởi hành, xe đạt vận tốc là bao nhiêu và đi được quãng đường bao xa?
3. Sau $10\text{ giây}$, tài xế tắt máy để xe tự trượt chậm dần đều cho đến khi dừng lại. Tính thời gian và quãng đường xe đi thêm được từ lúc tắt máy đến khi dừng hẳn.

**Lời giải chi tiết:**
* Đổi: $m = 2\text{ tấn} = 2000\text{ kg}$; $v_0 = 0$.
1. **Tính gia tốc giai đoạn tăng tốc ($a_1$):**
   * Áp lực tác dụng lên mặt đường: $N = mg = 2000 \times 10 = 20000\text{ N}$.
   * Lực ma sát: $F_{ms} = \mu N = 0.05 \times 20000 = 1000\text{ N}$.
   * Áp dụng định luật II Newton:
     $$a_1 = \frac{F_k - F_{ms}}{m} = \frac{4000 - 1000}{2000} = \frac{3000}{2000} = 1.5\text{ m/s}^2$$
2. **Vận tốc và quãng đường sau 10 giây đầu:**
   * Vận tốc sau $10\text{ s}$: $v_1 = v_0 + a_1 t_1 = 0 + 1.5 \times 10 = 15\text{ m/s} = 54\text{ km/h}$.
   * Quãng đường đi được: $s_1 = \frac{1}{2}a_1 t_1^2 = \frac{1}{2}(1.5)(10)^2 = 75\text{ m}$.
3. **Giai đoạn tắt máy trượt chậm dần đều:**
   * Khi tắt máy, lực kéo $F_k = 0$, chỉ còn lực ma sát cản trở chuyển động:
     $$a_2 = \frac{-F_{ms}}{m} = \frac{-1000}{2000} = -0.5\text{ m/s}^2$$
   * Vận tốc ban đầu của giai đoạn này là $v_1 = 15\text{ m/s}$, xe dừng hẳn khi $v_2 = 0$.
   * Thời gian đi thêm: $t_2 = \frac{v_2 - v_1}{a_2} = \frac{0 - 15}{-0.5} = 30\text{ s}$.
   * Quãng đường đi thêm: Áp dụng $v_2^2 - v_1^2 = 2a_2 s_2 \implies 0^2 - 15^2 = 2(-0.5)s_2 \implies s_2 = \frac{-225}{-1} = 225\text{ m}$.
* **Đáp số:** $a_1 = 1.5\text{ m/s}^2$; $v_1 = 15\text{ m/s}, s_1 = 75\text{ m}$; $t_2 = 30\text{ s}, s_2 = 225\text{ m}$.

---

### 📝 Bài 2: (Mặt phẳng nghiêng & Chuyển động hai giai đoạn)
**Đề bài:** Một vật có khối lượng $m = 1\text{ kg}$ bắt đầu trượt không vận tốc đầu từ đỉnh một mặt phẳng nghiêng dài $L = 10\text{ m}$, góc nghiêng $\alpha = 30^\circ$ so với phương ngang. Hệ số ma sát trượt giữa vật và mặt nghiêng là $\mu = 0.1$. Lấy $g = 10\text{ m/s}^2$.
1. Tính gia tốc của vật khi trượt trên mặt phẳng nghiêng.
2. Tính vận tốc của vật khi đến chân mặt phẳng nghiêng và thời gian trượt trên dốc.

**Lời giải chi tiết:**
1. **Tính gia tốc khi trượt xuống ($a$):**
   * Các lực tác dụng lên vật: Trọng lực $\vec{P}$, Phản lực $\vec{N}$, Lực ma sát trượt $\vec{F}_{ms}$.
   * Chọn trục $Ox$ hướng dọc theo mặt nghiêng xuống dưới, trục $Oy$ vuông góc mặt nghiêng hướng lên.
   * Chiếu lên $Oy$: $N - P_y = 0 \implies N = mg \cos \alpha = 1 \times 10 \times \cos 30^\circ = 5\sqrt{3} \approx 8.66\text{ N}$.
   * Lực ma sát trượt: $F_{ms} = \mu N = 0.1 \times 5\sqrt{3} = 0.5\sqrt{3} \approx 0.866\text{ N}$.
   * Chiếu lên $Ox$: $P_x - F_{ms} = ma \implies mg \sin \alpha - F_{ms} = ma$.
   * Gia tốc:
     $$a = g \sin 30^\circ - \mu g \cos 30^\circ = 10(0.5) - 0.1(10)\frac{\sqrt{3}}{2} = 5 - 0.866 = 4.134\text{ m/s}^2$$
2. **Vận tốc tại chân dốc và thời gian trượt:**
   * Áp dụng hệ thức độc lập: $v^2 - v_0^2 = 2aL \implies v = \sqrt{2aL} = \sqrt{2 \times 4.134 \times 10} = \sqrt{82.68} \approx 9.09\text{ m/s}$.
   * Thời gian trượt trên dốc: $t = \frac{v - v_0}{a} = \frac{9.09}{4.134} \approx 2.2\text{ s}$.
* **Đáp số:** $a \approx 4.134\text{ m/s}^2; \; v \approx 9.09\text{ m/s}; \; t \approx 2.2\text{ s}$.

---

### 📝 Bài 3: (Hệ hai vật nối bằng dây vắt qua ròng rọc)
**Đề bài:** Hai vật có khối lượng $m_1 = 3\text{ kg}$ và $m_2 = 2\text{ kg}$ được nối với nhau bằng một sợi dây nhẹ, không dãn vắt qua một ròng rọc cố định không ma sát (máy Atwood). Thả cho hệ chuyển động tự do từ trạng thái nghỉ. Lấy $g = 10\text{ m/s}^2$.
1. Tính gia tốc chuyển động của hệ vật.
2. Tính lực căng của sợi dây.

**Lời giải chi tiết:**
* Vì $m_1 > m_2$ nên vật 1 chuyển động đi xuống, vật 2 chuyển động đi lên.
* Phương trình định luật II Newton cho từng vật:
  * Vật 1: $P_1 - T = m_1 a \implies m_1 g - T = m_1 a \quad (1)$
  * Vật 2: $T - P_2 = m_2 a \implies T - m_2 g = m_2 a \quad (2)$
1. **Tính gia tốc $a$:**
   * Cộng (1) và (2) vế theo vế: $(m_1 - m_2)g = (m_1 + m_2)a$
     $$a = \frac{m_1 - m_2}{m_1 + m_2} g = \frac{3 - 2}{3 + 2} \times 10 = \frac{1}{5} \times 10 = 2\text{ m/s}^2$$
2. **Tính lực căng dây $T$:**
   * Thay $a = 2\text{ m/s}^2$ vào phương trình (2):
     $$T = m_2(g + a) = 2(10 + 2) = 24\text{ N}$$
* **Đáp số:** $a = 2\text{ m/s}^2; \; T = 24\text{ N}$.

---

## 🎲 PHẦN 4: NGÂN HÀNG TRẮC NGHIỆM TRỘN ĐỀ

### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN

**Câu 1 `[VATLY10_C2_NB_01]`:** Đại lượng nào sau đây đặc trưng cho mức quán tính của một vật?
* A. Vận tốc
* B. Khối lượng
* C. Lực tác dụng
* D. Gia tốc  
* 👉 **Đáp án:** **B** *(Theo Định luật I Newton, khối lượng là đại lượng đặc trưng cho mức quán tính).*

---

**Câu 2 `[VATLY10_C2_TH_02]`:** Khi một lực $F$ tác dụng vào vật có khối lượng $m_1$ thì gây ra gia tốc $a_1 = 6\text{ m/s}^2$. Nếu lực đó tác dụng vào vật có khối lượng $m_2$ thì gây ra gia tốc $a_2 = 3\text{ m/s}^2$. Nếu lực đó tác dụng vào vật có khối lượng $m = m_1 + m_2$ thì gia tốc gây ra là:
* A. $9\text{ m/s}^2$
* B. $4.5\text{ m/s}^2$
* C. $2\text{ m/s}^2$
* D. $1.5\text{ m/s}^2$  
* 👉 **Đáp án:** **C** *($a = \frac{F}{m_1 + m_2} \implies \frac{1}{a} = \frac{m_1}{F} + \frac{m_2}{F} = \frac{1}{a_1} + \frac{1}{a_2} = \frac{1}{6} + \frac{1}{3} = \frac{1}{2} \implies a = 2\text{ m/s}^2$).*

---

**Câu 3 `[VATLY10_C2_VD_03]`:** Một lò xo có độ cứng $k = 100\text{ N/m}$. Khi treo vật có khối lượng $m = 500\text{ g}$ ở nơi có $g = 10\text{ m/s}^2$ thì lò xo dãn một đoạn là:
* A. $5\text{ cm}$
* B. $2\text{ cm}$
* C. $0.5\text{ cm}$
* D. $50\text{ cm}$  
* 👉 **Đáp án:** **A** *($\Delta l = \frac{mg}{k} = \frac{0.5 \times 10}{100} = 0.05\text{ m} = 5\text{ cm}$).*

---

**Câu 4 `[VATLY10_C2_VDC_04]`:** Một vật đặt trên đỉnh một bán cầu nhẵn nằm cố định trên mặt phẳng ngang. Vật trượt không vận tốc đầu xuống dưới theo mặt cầu bán kính $R$. Lấy gia tốc trọng trường là $g$. Góc $\theta$ hợp bởi bán kính nối vật với phương thẳng đứng tại vị trí vật bắt đầu rời khỏi mặt bán cầu thỏa mãn:
* A. $\cos \theta = \frac{1}{2}$
* B. $\cos \theta = \frac{2}{3}$
* C. $\cos \theta = \frac{3}{4}$
* D. $\cos \theta = \frac{1}{\sqrt{3}}$  
* 👉 **Đáp án:** **B**  
* *Lời giải:* Lực tác dụng theo phương hướng tâm: $P\cos\theta - N = \frac{m v^2}{R}$. Khi vật bắt đầu rời khỏi mặt cầu thì $N = 0 \implies v^2 = gR\cos\theta$.  
  Bảo toàn cơ năng: $mgR = mgR\cos\theta + \frac{1}{2}mv^2 \implies mgR(1 - \cos\theta) = \frac{1}{2}m(gR\cos\theta) \implies 1 - \cos\theta = \frac{1}{2}\cos\theta \implies \frac{3}{2}\cos\theta = 1 \implies \cos\theta = \frac{2}{3}$.

---

### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI

**Câu 5 `[VATLY10_C2_TF_01]`:** Cho một vật khối lượng $m = 5\text{ kg}$ đặt trên sàn nằm ngang. Tác dụng một lực kéo nằm ngang $F_k = 20\text{ N}$. Hệ số ma sát trượt giữa vật và sàn là $\mu = 0.2$. Lấy $g = 10\text{ m/s}^2$.
* a) Trọng lực tác dụng lên vật có độ lớn bằng $50\text{ N}$.
* b) Độ lớn lực ma sát trượt tác dụng lên vật là $10\text{ N}$.
* c) Gia tốc chuyển động của vật là $4\text{ m/s}^2$.
* d) Nếu tăng lực kéo lên $F_k = 30\text{ N}$ thì hệ số ma sát $\mu$ giữa vật và sàn sẽ tăng lên.

👉 **Đáp án:**
* **a) ĐÚNG** ($P = mg = 5 \times 10 = 50\text{ N}$).
* **b) ĐÚNG** ($F_{ms} = \mu N = \mu mg = 0.2 \times 50 = 10\text{ N}$).
* **c) SAI** ($a = \frac{F_k - F_{ms}}{m} = \frac{20 - 10}{5} = 2\text{ m/s}^2$).
* **d) SAI** (Hệ số ma sát $\mu$ chỉ phụ thuộc vào bản chất và tình trạng của hai bề mặt tiếp xúc, không phụ thuộc vào lực kéo).

---

### PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN

**Câu 6 `[VATLY10_C2_SA_01]`:** Một hợp lực có độ lớn $12\text{ N}$ tác dụng vào một vật khối lượng $4\text{ kg}$ đang đứng yên. Vận tốc của vật sau $3\text{ giây}$ là bao nhiêu $\text{m/s}$?  
👉 **Đáp số:** `9`  
*(Giải thích: $a = \frac{F}{m} = \frac{12}{4} = 3\text{ m/s}^2 \implies v = at = 3 \times 3 = 9\text{ m/s}$).*

**Câu 7 `[VATLY10_C2_SA_02]`:** Một khối gỗ có thể tích $V = 0.002\text{ m}^3$ được nhúng chìm hoàn toàn trong nước có khối lượng riêng $\rho = 1000\text{ kg/m}^3$. Lấy $g = 10\text{ m/s}^2$. Độ lớn của lực đẩy Archimedes tác dụng lên khối gỗ là bao nhiêu Newton?  
👉 **Đáp số:** `20`  
*(Giải thích: $F_A = \rho \cdot g \cdot V = 1000 \times 10 \times 0.002 = 20\text{ N}$).*
