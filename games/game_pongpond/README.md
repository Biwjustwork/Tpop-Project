# 🏍️ BigBike Garage — Idle Clicker Mini Game

> **Mini Game ในโปรเจกต์ PixelPulse Studio**  
> **ผู้พัฒนา**: ณัฐกรณ์ แท่นงาม (ปังปอนด์) — Student ID: 170  
> **โฟลเดอร์**: `games/game_pongpond/`

---

## 📌 ภาพรวมโปรเจกต์ (Overview)

**BigBike Garage** เป็นเกมจำลองอู่ซ่อมมอเตอร์ไซค์บิ๊กไบค์แนว **Idle / Clicker** ที่ถูกพัฒนาด้วย **HTML5 Canvas API** และ **Vanilla JavaScript** แบบ Single-file Standalone โดยไม่ต้องพึ่งพา Backend, Database หรือ External Libraries ใดๆ 

ผู้เล่นจะรับบทเป็นเจ้าของอู่ซ่อมบิ๊กไบค์ คลิกที่ตัวรถบิ๊กไบค์เพื่อซ่อมแซมและสะสมรายได้ จากนั้นนำเงินที่ได้ไปลงทุนอัปเกรดเครื่องมือ อุปกรณ์ยกรถ จ้างช่างผู้ช่วย และติดป้ายโฆษณานีออนเพื่อเพิ่มรายได้ทั้งแบบต่อคลิก (CPC) และรายได้อัตโนมัติต่อวินาที (CPS)

---

## 🎨 แนวเกมและสไตล์ดีไซน์ (Genre & Visual Style)

- **แนวเกม (Genre)**: Idle Clicker / Management Simulation
- **สไตล์ศิลปะ (Visual Style)**: 32-bit Retro Pixel Art
  - ตัวรถ BigBike ทรง Cyber Sport สีฟ้า Electric Cyan วาดด้วย Pixel Matrix แบบ Custom Canvas API
  - ดีไซน์ Dark Mode ผสม Neon Glow Elements (Cyan `#00f0ff`, Gold `#ffe600`, Magenta `#ff007f`) ให้เข้ากับธีมของค่าย **PixelPulse Studio**
- **อนิเมชัน & เอฟเฟกต์ (Visual Effects)**:
  - **Bike Bounce Effect**: ตัวรถยุบเด้งตามจังหวะการคลิกซ่อม
  - **Floating Numbers**: ตัวเลขแสดงเงินที่ได้รับลอยขึ้นฟ้าเรียลไทม์
  - **Spark Particles**: ประกายไฟซ่อมรถฟุ้งกระจายตามจุดที่คลิก
  - **Dynamic Garage Upgrades**: ปรากฏอุปกรณ์ ตู้เครื่องมือ ลิฟต์ยกรถ ช่างผู้ช่วย และป้ายไฟนีออนบน Canvas ตามระดับการอัปเกรด

---

## ⚙️ ระบบเกมและ Core Loop (Gameplay Mechanics)

```
[ คลิกซ่อมรถ BigBike ] ➔ [ สะสมรายได้ (💰 เงิน) ] ➔ [ ซื้อ Upgrade อุปกรณ์อู่ ] ➔ [ เพิ่มเงินต่อคลิก & Passive Income ]
```

### 1. การควบคุมและการเล่น
- **Manual Click**: คลิกที่บริเวณตัวรถเพื่อรับเงินต่อคลิก (CPC)
- **Passive Income**: เมื่ออัปเกรดอู่ ระบบจะเจนเงินให้อัตโนมัติตลอดเวลาเรียลไทม์ต่อวินาที (CPS)

### 2. ผังการอัปเกรด (Upgrade Tree)
| Upgrade | คำอธิบาย | ผลลัพธ์ |
|---|---|---|
| 🔧 **เครื่องมือช่าง** | ประแจ ไขควง คีมคุณภาพสูง | เพิ่มเงินต่อคลิก (+1 / Click) |
| 🏗️ **ลิฟต์ยกรถ** | ยกรถไฮโดรลิค ซ่อมง่ายขึ้น | เพิ่มรายได้ต่อวินาที (+2 / Sec) |
| 👨‍🔧 **ช่างฝึกหัด** | จ้างผู้ช่วยซ่อมอัตโนมัติ | เพิ่มเงินต่อคลิก (+2 / Click) และต่อวินาที (+5 / Sec) |
| 📺 **ป้ายโฆษณา** | ติดป้ายนีออนเรียกลูกค้าพุ่ง | เพิ่มเงินต่อคลิก (+5 / Click) และต่อวินาที (+15 / Sec) |

*แต่ละระดับอัปเกรดได้สูงสุด Level 10 โดยราคาจะเพิ่มขึ้นตามสัดส่วน Exponential*

### 3. ระบบบันทึกข้อมูล (Save & Persistence)
- **Auto Save**: บันทึกจำนวนเงินและระดับ Upgrade ลงใน `localStorage` อัตโนมัติทุก 4 วินาที และบันทึกทันทีเมื่อมีการอัปเกรด/คลิก
- **Reset System**: มีปุ่ม Reset สำหรับล้างข้อมูลความก้าวหน้าและเริ่มเล่นใหม่ได้ตลอดเวลา

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Language**: Pure HTML5, CSS3, Vanilla JavaScript (ES6)
- **Rendering**: HTML5 Canvas 2D Context API (`image-rendering: pixelated`)
- **Storage**: Browser LocalStorage API
- **Fonts**: Google Fonts (`Press Start 2P`, `Outfit`)
- **Architecture**: Standalone Single-file Component (`index.html`)

---

## 🔗 โครงสร้างและการเชื่อมโยง (Navigation & Links)

- `index.html` — ไฟล์เกมหลักจบในตัว
- **ปุ่ม ← โปรไฟล์**: ลิงก์กลับไปยังหน้า Portfolio ของผู้พัฒนา (`../../portfolios/pangpond.html`)
- **ปุ่ม 🌐 Portfolio**: ลิงก์ไปยังเว็บไซต์ผลงานส่วนตัว (`https://nattakorn.vercel.app/`) เปิดในแท็บใหม่

---

© 2026 PixelPulse Studio — Developed by Pangpond (170)
