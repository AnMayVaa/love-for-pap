# Falling Love Notes ❤️ - ข้อความบอกรักที่ตกลงมา

โปรเจกต์เว็บแอปพลิเคชันเล็กๆ ที่สร้างขึ้นมาเพื่อเป็นของขวัญเซอร์ไพรส์ โดยจะแสดงผลหน้าเว็บที่มีข้อความบอกรักแบบต่างๆ ตกลงมาอย่างต่อเนื่องไม่มีที่สิ้นสุด พร้อมกับเสียงเพลงประกอบสุดโรแมนติก

เหมาะสำหรับการสร้าง QR Code แล้วส่งให้คนพิเศษของคุณสแกนเพื่อรับชม

**[ดูตัวอย่าง Live Demo](https://anmayvaa.github.io/love-for-pap/)**

![ตัวอย่างหน้าจอ](https://private-user-images.githubusercontent.com/181745491/481319099-5721248e-b67b-4ed1-806c-511f204e3585.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYwOTEwOTMsIm5iZiI6MTc1NjA5MDc5MywicGF0aCI6Ii8xODE3NDU0OTEvNDgxMzE5MDk5LTU3MjEyNDhlLWI2N2ItNGVkMS04MDZjLTUxMWYyMDRlMzU4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyNVQwMjU5NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNGEzOWNhOWYyODZmNjU1Mzg0YTZlZmNiNmY1YTJkODg1NGY3OGEzZThkZDM4MTZkYzY1MjI2ZDA5NDU5MTRjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.qwEWEyQPpMpdmbJ-jcGtT3e2RaWAA9zY7QVjHC2EXqc)

---

### **✨ คุณสมบัติ (Features)**

* **ข้อความเคลื่อนไหว:** ข้อความบอกรักจะตกลงมาจากด้านบนของจอเหมือนหิมะ
* **สร้างข้อความไม่สิ้นสุด:** JavaScript จะสร้างข้อความใหม่ๆ ขึ้นมาเรื่อยๆ
* **ปรับแต่งง่าย:** สามารถแก้ไขข้อความบอกรักและเปลี่ยนเพลงได้ง่ายๆ
* **มีเสียงเพลงประกอบ:** รองรับไฟล์เพลง `.mp3` เพื่อสร้างบรรยากาศ
* **ติดตั้งง่าย:** แค่อัปโหลดไฟล์ขึ้น GitHub Pages ก็พร้อมใช้งานทันที

---

### **🚀 วิธีการใช้งานและปรับแต่ง**

คุณสามารถปรับแต่งโปรเจกต์นี้ให้เป็นของคุณเองได้อย่างง่ายดาย

#### **1. แก้ไขข้อความบอกรัก**

-   เปิดไฟล์ `script.js`
-   มองหา `const loveMessages = [ ... ]`
-   แก้ไข เพิ่ม หรือลบข้อความในวงเล็บ `[ ]` ได้ตามใจชอบ โดยแต่ละข้อความต้องมีเครื่องหมายคำพูด `"` คร่อมและคั่นด้วยจุลภาค `,`

    ```javascript
    const loveMessages = [
        "รักที่สุดเลยนะ",
        "เธอคือคนโปรดของฉันเสมอ",
        "ขอบคุณที่อยู่ข้างๆ กันนะ ❤️"
    ];
    ```

#### **2. เปลี่ยนเพลงประกอบ**

-   หาไฟล์เพลงที่คุณต้องการ (แนะนำให้เป็น `.mp3`)
-   ลบไฟล์ `music.mp3` เดิมทิ้ง
-   นำไฟล์เพลงใหม่ของคุณมาใส่ในโฟลเดอร์โปรเจกต์ แล้ว**เปลี่ยนชื่อไฟล์เป็น `music.mp3`**
-   *(ทางเลือก)* หากไม่ต้องการเปลี่ยนชื่อไฟล์ ให้ไปแก้ชื่อใน `index.html` ตรง `<source src="ชื่อไฟล์เพลงของคุณ.mp3">`

#### **3. นำขึ้นออนไลน์ (Deploy)**

-   ทำตามขั้นตอนการ [อัปโหลดไฟล์ขึ้น GitHub Pages](https://pages.github.com/)
-   เมื่อได้ลิงก์สาธารณะมาแล้ว (เช่น `https://your-username.github.io/repository-name/`) ก็พร้อมใช้งาน

#### **4. สร้าง QR Code**

-   นำลิงก์ที่ได้จากขั้นตอนที่ 3 ไปสร้าง QR Code ผ่านเว็บต่างๆ เช่น [The QR Code Generator](https://www.the-qrcode-generator.com/)
-   ดาวน์โหลดรูปภาพ QR Code แล้วนำไปใช้ได้เลย!

---
### **🎨 การปรับแต่งเพิ่มเติม (Optional)**

หากคุณต้องการเปลี่ยนสีพื้นหลังหรือฟอนต์ สามารถเข้าไปแก้ไขได้ที่ไฟล์ `style.css`

-   **สีพื้นหลัง:** แก้ไขโค้ดสีในส่วน `body` ที่ `background: linear-gradient(...)`
-   **ฟอนต์:** แก้ไข `font-family` หรือ `import` ฟอนต์ใหม่ๆ จาก [Google Fonts](https://fonts.google.com/)
