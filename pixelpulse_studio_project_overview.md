# PixelPulse Studio - Project Overview

เอกสารภาพรวมโปรเจกต์ส่งวิชาซอฟต์แวร์พัฒนาโปรเจกต์ สำหรับการนำเสนอและจัดทำระบบเว็บไซต์โปรโมทบริษัทจำลอง

---

## 1. ภาพรวมของโปรเจกต์ (Project Overview)

**PixelPulse Studio** เป็นบริษัทจำลองที่ดำเนินธุรกิจด้าน **Indie Game Development Studio** เน้นการพัฒนาเกมขนาดเล็ก (Mini Games), เกมแนว 2D Pixel Art, Rhythm Games และเกมเพื่อการเรียนรู้/ความบันเทิง (Edutainment Games) บนแพลตฟอร์มเว็บ

เว็บไซต์นี้จัดทำขึ้นเพื่อใช้เป็นช่องทางหลักในการโปรโมทบริษัท แสดงผลงานเกมจำลอง (Game Showcase) แนะนำสมาชิกในทีม และเป็นศูนย์รวมแฟ้มสะสมผลงาน (Portfolio) รายบุคคลของสมาชิกแต่ละคน

---

## 2. เทคโนโลยีที่ใช้ (Tech Stack & Tools)

การเลือกใช้เทคโนโลยีเน้นไปที่การพัฒนา **Front-end แบบรวดเร็ว สดใส และทำงานร่วมกันได้ง่าย** โดยไม่มีการเชื่อมต่อกับระบบฐานข้อมูล (Database) และเครื่องเซิร์ฟเวอร์ (Server) ตามข้อกำหนดโปรเจกต์

### Core Web Framework (โครงสร้างหลักของบริษัท)
* **HTML5**: สำหรับโครงสร้างของหน้าเว็บหลัก (`index.html`, `team.html`)
* **CSS3**: ใช้การแต่งสไตล์แบบ Vanilla CSS ร่วมกับ Modern Features (CSS Variables, Flexbox, Grid, Animations)
* **JavaScript (ES6+)**: สำหรับการควบคุมลูกเล่นโต้ตอบ (DOM Manipulation, Interactivity, Sound Effects)

### Game Development & Frameworks (ส่วนของสมาชิกแต่ละคน)
* **React + Vite**: สำหรับสมาชิกที่ถนัดการสร้างเกมด้วย Component Architecture และ JSX
* **Canvas API / HTML5 Games**: สำหรับการประมวลผลกราฟิกและเกมลอจิก
* **Construct / Other Game Engines**: หรือการรันเกมที่สร้างเป็น HTML5 export มาแล้ว

### Version Control & Collaboration
* **Git & GitHub**: สำหรับการจัดการเวอร์ชันของโค้ดและการทำงานร่วมกัน
* **VS Code + Live Server Extension**: สำหรับการพัฒนาและทดสอบเว็บไซต์ในรูปแบบ Local Web Server

---

## 3. โครงสร้างของโปรเจกต์ (Project Structure)

โปรเจกต์ถูกออกแบบให้แยกสัดส่วนชัดเจน เพื่อป้องกันปัญหา Merge Conflict ใน Git และรองรับการดึงไฟล์ Build ของเกมเข้ามาวางแบบ Plug-and-Play

```text
indie-game-studio/
├── index.html                 # หน้าหลักโปรโมทบริษัทและ Showcase เกม
├── team.html                  # หน้าแสดงโปรไฟล์รวมของสมาชิกทีม
├── README.md                  # เอกสารกำกับการทำงาน
├── css/
│   └── style.css              # ไฟล์ CSS กลางของทั้งเว็บไซต์
├── js/
│   └── script.js              # ไฟล์ JavaScript กลาง (ลูกเล่นร่วม)
├── assets/                    # โฟลเดอร์เก็บรูปภาพ/เสียงส่วนกลาง
│   ├── images/
│   └── audio/
├── portfolios/                # แฟ้มสะสมผลงานรายบุคคล (คะแนนเดี่ยว)
│   ├── my-profile.html        # หน้า Portfolio ของ PM (181)
│   ├── pangpond.html          # หน้า Portfolio ของปังปอนด์ (170)
│   ├── plu.html               # หน้า Portfolio ของพลุ (200)
│   └── folk.html              # หน้า Portfolio ของโฟล์ค (193)
└── games/                     # โฟลเดอร์รวม Mini Games ที่เพื่อนสร้าง
    ├── game_pongpond/         # ไฟล์เกมของปังปอนด์ (Vite build / HTML5)
    │   ├── index.html
    │   └── assets/
    ├── game_plu/              # ไฟล์เกมของพลุ
    │   ├── index.html
    │   └── assets/
    └── game_folk/             # ไฟล์เกมของโฟล์ค
        ├── index.html
        └── assets/
```

---

## 4. โครงสร้างหน้าเว็บไซต์ (Page Structure)

### 4.1 หน้าหลัก (Home - `index.html`)
* **Hero Banner**: แนะนำบริษัท สโลแกน และสไตล์ของค่ายเกม PixelPulse Studio
* **About Us**: อธิบายลักษณะงาน ความเชี่ยวชาญ และเป้าหมายของสตูดิโอ
* **Game Showcase**: นำเสนอผลงานเกมจำลองของสมาชิกในทีม โดยสามารถดึงเกมมารันผ่าน HTML `<iframe src="games/game_.../index.html">` ให้ทดลองเล่นบนหน้าเว็บได้ทันที
* **Call to Action**: ปุ่มนำทางไปยังหน้าทีมงาน (`team.html`)

### 4.2 หน้าโปรไฟล์รวม (Team Profile - `team.html`)
* แสดงการ์ดข้อมูลเบื้องต้นของสมาชิกทั้ง 4 คน (ชื่อ-นามสกุล, รหัสนักศึกษา, ตำแหน่งในบริษัทจำลอง)
* ลิงก์เชื่อมโยงไปยังหน้า Portfolio รายบุคคลของแต่ละคน

### 4.3 หน้าแฟ้มสะสมผลงานรายบุคคล (Individual Portfolio - `portfolios/*.html`)
* แสดงรูปโปรไฟล์ ประวัติการศึกษา ผลงาน และทักษะส่วนตัว
* ใส่ลูกเล่นทางเทคนิค (Interactive UI) เช่น CSS Animation, Dark Mode Toggle หรือ Sound Effects เพื่อสะสมคะแนนส่วนบุคคล

---

## 5. การจัดองค์กรและการแบ่งบทบาทหน้าที่ (Team Roles)

| รหัสนักศึกษา | ชื่อ-นามสกุล | ตำแหน่งในบริษัทจำลอง | หน้าที่รับผิดชอบหลักในโปรเจกต์ |
| :--- | :--- | :--- | :--- |
| **181** | **(PM / Lead Dev)** | **Project Manager & Game Architect** | บริหารจัดการ Git Repository, ออกแบบโครงสร้างหลัก (`index.html`, `team.html`, `style.css`), รวมไฟล์โปรเจกต์ และทำหน้า Portfolio ของตนเอง |
| **170** | **ณัฐกรณ์ แท่นงาม (ปังปอนด์)** | **Game Developer & SA** | พัฒนา Mini Game ในโฟลเดอร์ `games/game_pongpond/`, ทำหน้า `portfolios/pangpond.html` |
| **200** | **สุวรรณชัย ชัยสุวรรณศรี (พลุ)** | **Lead UI/UX & Game Developer** | พัฒนา Mini Game ในโฟลเดอร์ `games/game_plu/`, ทำหน้า `portfolios/plu.html` |
| **193** | **ศรัณย์ กระจ่างแก้ว (โฟล์ค)** | **Interactive Gameplay Developer** | พัฒนา Mini Game ในโฟลเดอร์ `games/game_folk/`, ทำหน้า `portfolios/folk.html` |

---

## 6. แนวทางการรวมงานและวิธี Build เกม (Integration Workflow)

### ข้อตกลงการใช้งาน Git
1. สมาชิกทุกคนทำการ `git clone` Repository หลักไปที่เครื่องตนเอง
2. สร้าง Branch แยกเพื่อพัฒนาส่วนของตนเอง เช่น `feature/portfolio-pangpond` หรือ `feature/game-plu`
3. เมื่อพัฒนางานเสร็จสิ้น ส่ง Pull Request (PR) เพื่อให้ PM ทำการตรวจสอบและ Merge เข้า `main` branch

### ขั้นตอนสำหรับเกมที่ใช้ React + Vite
1. เปิดไฟล์ `vite.config.js` ในโปรเจกต์ React แล้วกำหนด Base Path ให้เป็น Relative Path:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: './', // สำคัญ: เพื่อให้อ้างอิงไฟล์ assets บนโฟลเดอร์ย่อยได้ถูกต้อง
   })
   ```
2. รันคำสั่งสั่ง Build:
   ```bash
   npm run build
   ```
3. คัดลอกเนื้อหาทั้งหมดภายในโฟลเดอร์ `dist/` นำไปวางในโฟลเดอร์ `games/game_ชื่อตนเอง/` ใน Repository หลัก

---

## 7. กำหนดการและแผนงาน 4 วัน (4-Day Project Timeline)

* **Day 1: Setup & Design Architecture**
  * PM สร้าง Git Repository และวางไฟล์โครงสร้างหลัก (`common.css`, `index.html` Skeleton)
  * สรุปข้อตกลงเรื่อง Path และโฟลเดอร์ส่งงาน
* **Day 2: Independent Development**
  * สมาชิกแยกย้ายทำ Mini Game และตกแต่งหน้า Portfolio รายบุคคล
  * PM จัดทำหน้า `index.html` และ `team.html`
* **Day 3: Game Integration & Testing**
  * นำโฟลเดอร์เกมของสมาชิกทุกคนมาวางไว้ใน `games/`
  * ฝัง `<iframe` บนหน้า `index.html` เพื่อทดสอบการรันผ่าน Live Server
* **Day 4: Final QA & Presentation Prep**
  * ตรวจสอบลิงก์เชื่อมโยงทุกหน้า ความสวยงาม และลูกเล่นต่างๆ
  * เตรียมสไลด์และเนื้อหาการนำเสนอสำหรับวันนำเสนอผลงาน (10 สิงหาคม 2569)
