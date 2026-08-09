# Portfolio ของพลุ (สุวรรณชัย ชัยสุวรรณศรี - 200) — Source Code

โฟลเดอร์นี้คือ **โค้ดต้นฉบับ (source code)** ของเว็บ Portfolio ส่วนตัว เขียนด้วย **React + Vite + TailwindCSS**

> 📌 เว็บจริงที่ deploy แล้ว: https://phlucode.github.io/my-portfolio/
> โฟลเดอร์นี้ไว้สำหรับ **อ่านโค้ด** โดยเฉพาะ (ตัว build ถูก minify อ่านไม่ได้)

## เริ่มอ่านโค้ดจากตรงนี้

| ไฟล์ | หน้าที่ |
| :--- | :--- |
| `src/main.jsx` | จุดเริ่มต้นของแอป (mount React เข้า `index.html`) |
| `src/App.jsx` | ประกอบหน้าเว็บจาก component ทั้งหมด |
| `src/components/Navbar.jsx` | แถบเมนูด้านบน |
| `src/components/Hero.jsx` | ส่วนหัว + แนะนำตัว (Backend Developer) |
| `src/components/Technologies.jsx` | เทคโนโลยีที่ใช้ (JS, Node, React, PostgreSQL ฯลฯ) |
| `src/components/Projects.jsx` | ผลงานโปรเจกต์ |
| `src/components/Contact.jsx` | ช่องทางติดต่อ |
| `src/constants/index.js` | ข้อมูลเนื้อหาทั้งหมด (ข้อความ, รายการโปรเจกต์, ทักษะ) |
| `src/index.css` | สไตล์ส่วนกลาง (Tailwind) |

## วิธีรันในเครื่อง (ถ้าต้องการทดสอบ)

```bash
npm install
npm run dev
```
