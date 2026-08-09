# PixelPulse Studio - Web & Game Project Boilerplate

เอกสารคู่มือและโครงสร้างโปรเจกต์สำหรับ **PixelPulse Studio** บริษัทจำลองด้าน Indie Game Development Studio สำหรับนำเสนอและส่งงานวิชาซอฟต์แวร์พัฒนาโปรเจกต์

---

## 1. ภาพรวมโครงสร้างโปรเจกต์ (Project Structure)

โปรเจกต์ถูกจัดวางโครงสร้างอย่างเป็นระบบตามแนวทาง Plug-and-Play Architecture เพื่อแยกสัดส่วนการทำงานของสมาชิกในทีมและป้องกันปัญหา Merge Conflict ใน Git:

```text
indie-game-studio/
├── index.html                 # หน้าหลักโปรโมทบริษัทและ Showcase เกม (iframe Embedded View Center)
├── team.html                  # หน้าแสดงโปรไฟล์รวมของสมาชิกทีม
├── README.md                  # เอกสารกำกับการทำงานและคู่มือโปรเจกต์
├── css/
│   └── style.css              # ไฟล์ CSS กลาง (Design System: Glassmorphism, Pixel Art Theme, Animations)
├── js/
│   └── script.js              # ไฟล์ JavaScript กลาง (Web Audio API SFX, Tab Switcher, Theme Toggle)
├── assets/                    # โฟลเดอร์เก็บรูปภาพและเสียงส่วนกลาง
│   ├── images/
│   └── audio/
├── portfolios/                # แฟ้มสะสมผลงานรายบุคคล
│   ├── biw/                   # โฟลเดอร์ Portfolio ของ PM (181)
│   ├── pangpond.html          # หน้า Portfolio ของปังปอนด์ (170)
│   ├── plu.html               # หน้า Portfolio ของพลุ (200)
│   └── folk.html              # หน้า Portfolio ของโฟล์ค (193)
└── games/                     # โฟลเดอร์รวม Mini Games ของสมาชิกทุกคน
    ├── game_pongpond/         # ไฟล์มินิเกมของปังปอนด์ (Pixel Rhythm Catch)
    │   └── index.html
    ├── game_plu/              # ไฟล์มินิเกมของพลุ (Load Balancer)
    │   └── index.html
    └── game_folk/             # ไฟล์มินิเกมของโฟล์ค (Neon Lane Racer)
        └── index.html
```

---

## 2. ตารางบทบาทหน้าที่ทีมงาน (Team Roles)

| รหัสนักศึกษา | ชื่อ-นามสกุล | ตำแหน่งในบริษัทจำลอง | หน้าที่รับผิดชอบหลักในโปรเจกต์ |
| :--- | :--- | :--- | :--- |
| **181** | **(PM / Lead Dev)** | **Project Manager & Game Architect** | บริหารจัดการ Git Repository, ออกแบบโครงสร้างหลัก (`index.html`, `team.html`, `style.css`), รวมไฟล์โปรเจกต์ และทำหน้า Portfolio ของตนเอง |
| **170** | **ณัฐกรณ์ แท่นงาม (ปังปอนด์)** | **Game Developer & SA** | พัฒนา Mini Game ในโฟลเดอร์ `games/game_pongpond/`, ทำหน้า `portfolios/pangpond.html` |
| **200** | **สุวรรณชัย ชัยสุวรรณศรี (พลุ)** | **Backend Developer** | พัฒนา Mini Game ในโฟลเดอร์ `games/game_plu/` (Load Balancer จำลองระบบกระจายโหลด API), ทำหน้า `portfolios/plu.html` |
| **193** | **ศรัณย์ กระจ่างแก้ว (โฟล์ค)** | **Interactive Gameplay Developer** | พัฒนา Mini Game ในโฟลเดอร์ `games/game_folk/`, ทำหน้า `portfolios/folk.html` |

---

## 3. วิธีการใช้งานและการเปิดทดสอบ (Local Development & Testing)

1. ใช้ **VS Code** เปิดโฟลเดอร์โปรเจกต์นี้
2. ติดตั้ง Extension **Live Server** ใน VS Code
3. คลิกขวาที่ไฟล์ [`index.html`](file:///D:/Project/Tpop-Project/index.html) แล้วเลือก **"Open with Live Server"**
4. ทดลองสลับแท็บมินิเกมในส่วน **Game Showcase** เพื่อทดสอบการโหลดเกมผ่าน iframe
5. กดปุ่มเปิด/ปิดเสียงเอฟเฟกต์ 🔊 และสลับธีม สว่าง/มืด 🌙 ด้านบนขวา

---

## 4. ข้อแนะนำสำหรับการนำเกม React + Vite มาวางใน `games/`

หากสมาชิกสร้างเกมด้วย **React + Vite** ให้ทำตามขั้นตอนดังนี้ก่อนนำไฟล์มาวาง:

1. เปิดไฟล์ `vite.config.js` ในโปรเจกต์ React แล้วตั้งค่า `base: './'`
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: './', // สำคัญ: เพื่อให้อ้างอิงไฟล์ assets บนโฟลเดอร์ย่อยได้ถูกต้อง
   })
   ```
2. รันคำสั่ง Build:
   ```bash
   npm run build
   ```
3. คัดลอกเนื้อหาทั้งหมดในโฟลเดอร์ `dist/` นำมาวางในโฟลเดอร์ `games/game_ชื่อของตนเอง/` ในโปรเจกต์นี้

---

&copy; 2026 PixelPulse Studio - Project Presentation Ready
