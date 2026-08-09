# 👾 PixelPulse Studio - Web & Game Project Architecture

เอกสารคู่มือ โครงสร้างโปรเจกต์ และสถาปัตยกรรมซอฟต์แวร์สำหรับ **PixelPulse Studio** ค่ายพัฒนาอินดี้เกมจำลอง (Indie Game Development Studio) สำหรับนำเสนอและแสดงผลงานรายวิชาการพัฒนาโปรเจกต์ซอฟต์แวร์

---

## 📌 1. ภาพรวมโครงสร้างโปรเจกต์ (Project Structure)

โปรเจกต์ได้รับการออกแบบด้วยสถาปัตยกรรมแบบ **Modular Plug-and-Play System** เพื่อความสวยงาม เป็นเอกภาพ และรองรับการทำงานร่วมกันผ่าน Git โดยแยกสัดส่วนการทำงานออกเป็น 4 ส่วนหลัก:

```text
Tpop-Project/
├── index.html                 # หน้าหลักโปรโมท Studio, Showcase เกมแบบโต้ตอบ และ Alpha Test Signup
├── aboutUs.html               # หน้าเกี่ยวกับ Studio (Core Directives, Timeline 4 วัน, Studio Overview)
├── team.html                  # หน้าแสดงโปรไฟล์สมาชิกทีมพัฒขาทั้ง 4 คน (Party Roster)
├── README.md                  # เอกสารคู่มือโปรเจกต์ สถาปัตยกรรม และแนวทางการพัฒนา
├── css/
│   └── style.css              # ระบบ Design System กลาง (Pixel Art Borders, Neon Glow, Glassmorphic UI)
├── js/
│   └── script.js              # สคริปต์สลับแท็บเกม, Fullscreen Handler, และ Click-to-Play Overlay System
├── assets/                    # คลังเก็บสื่อกราฟิกและโลโก้
│   ├── favicon.svg            # Favicon สัญลักษณ์ Pixel Pulse
│   └── img/
│       └── cover art/         # ปกเกมความละเอียดสูง
│           ├── Chaos_Chess.png
│           ├── BigBike_Garage.png
│           ├── API_ROUTE.png
│           └── Neon lane racer.png
├── portfolios/                # แฟ้มสะสมผลงานรายบุคคล
│   ├── biw/                   # แฟ้มผลงานของ บิว (181 - Project Lead)
│   │   └── index.html
│   ├── Pangpond/              # แฟ้มผลงานของ ปังปอนด์ (170 - Game Dev & SA)
│   │   └── index.html
│   ├── plu.html               # แฟ้มผลงานของ พลุ (200 - Backend Dev)
│   └── folk.html              # แฟ้มผลงานของ โฟล์ค (193 - Interactive Gameplay Dev)
└── games/                     # โฟลเดอร์แสดงตัวอย่างและซอร์สโค้ดมินิเกม
    ├── demo_biw.html          # หน้า Gameplay & Technical Details ของ Chaos Chess
    ├── demo_pongpond.html     # หน้า Gameplay & Technical Details ของ BigBike Garage
    ├── demo_plu.html          # หน้า Gameplay & Technical Details ของ Load Balancer
    ├── demo_folk.html         # หน้า Gameplay & Technical Details ของ Neon Lane Racer
    ├── game_biw/              # ซอร์สโค้ดและแคนวาสมินิเกม Chaos Chess (React + Vite)
    ├── game_pongpond/         # ซอร์สโค้ดและแคนวาสมินิเกม BigBike Garage (HTML5 Canvas 2D + LocalStorage)
    ├── game_plu/              # ซอร์สโค้ดและแคนวาสมินิเกม Load Balancer (HTML5 Canvas 2D)
    └── game_folk/             # ซอร์สโค้ดและแคนวาสมินิเกม Neon Lane Racer (HTML5 Canvas 2D)
```

---

## 👥 2. ตารางบทบาทหน้าที่ทีมนักพัฒนา (Team Roster & Mini Games)

| รหัสนักศึกษา | ชื่อ-นามสกุล (ชื่อเล่น) | ตำแหน่งใน Studio | มินิเกมที่รับผิดชอบ | รายละเอียดและเทคโนโลยีที่ใช้ |
| :--- | :--- | :--- | :--- | :--- |
| **181** | **(บิว)** | **Project Manager & Game Architect** | ⚔️ **Chaos Chess** | เกมสลับกติกาหมากรุกสุ่มสไตล์ Roguelike พัฒนาด้วย React + Vite และ Custom Logic Engine |
| **170** | **ณัฐกรณ์ แท่นงาม (ปังปอนด์)** | **Game Developer & System Analyst** | 🏍️ **BigBike Garage** | เกมจำลองอู่ซ่อมบิ๊กไบค์แนว Idle Clicker (CPC & CPS) พัฒนาด้วย HTML5 Canvas 2D + LocalStorage |
| **200** | **สุวรรณชัย ชัยสุวรรณศรี (พลุ)** | **Backend Developer & Systems Engine** | 🖥️ **Load Balancer** | เกมจำลองการกระจายโหลดคิว API สไตล์ 8-bit Pixel Terminal พัฒนาด้วย HTML5 Canvas 2D |
| **193** | **ศรัณย์ กระจ่างแก้ว (โฟล์ค)** | **Interactive Gameplay Developer** | 🏎️ **Neon Lane Racer** | เกมขับขี่หลบสิ่งกีดขวางความไวสูงแนว Cyberpunk Synthwave พัฒนาด้วย Lerp & Lean Physics Canvas |

---

## 🎨 3. ระบบดีไซน์และฟีเจอร์เด่น (Design System & Features)

1. **Click-to-Play Overlay System**:
   - หน้า Demo มินิเกมจะแสดงภาพปก Cover Art พร้อมปุ่ม **Click to Play** นีออน เพื่อป้องกันการรันสคริปต์และเสียงรบกวนในพื้นหลังก่อนผู้ใช้อนุญาต
2. **Dynamic Fullscreen Viewport Mode**:
   - รองรับการขยายหน้าจอเล่นเกมแบบเต็มจอภาพด้วยปุ่ม **Fullscreen Mode** โดยมีสไตล์การล็อกแถบสถานะด้านล่างไว้ที่ขอบล่างอัตโนมัติ
3. **Unified Navigation & Responsive Grid**:
   - Header และ Footer สไตล์ Glassmorphism ไดนามิกแบบเดียวกันทุกหน้า พร้อมรองรับการแสดงผลบนสมาร์ตโฟน แท็บเล็ต และเดสก์ท็อป
4. **LocalStorage Auto-Save (BigBike Garage)**:
   - ระบบบันทึกรายได้และการอัปเกรดอู่อัตโนมัติใน Browser

---

## 🚀 4. การเปิดใช้งานและการทดสอบโปรเจกต์ (Local Testing)

1. เปิดโฟลเดอร์โปรเจกต์ด้วย **Visual Studio Code**
2. ติดตั้งส่วนขยาย **Live Server**
3. คลิกขวาที่ไฟล์ [`index.html`](file:///D:/Project/Tpop-Project/index.html) แล้วเลือก **Open with Live Server**
4. ทดลองเลือกเปิดหน้าต่างมินิเกมต่าง ๆ ได้จากส่วน **Our Games** หรือเมนู **Games**

---

&copy; 2026 PixelPulse Studio — All Rights Reserved
