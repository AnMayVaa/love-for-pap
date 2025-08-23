document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('falling-container');
    const startOverlay = document.getElementById('start-overlay');
    const music = document.getElementById('bg-music');

    // --- แก้ไขข้อความบอกรักได้ตามใจชอบตรงนี้ ---
    const loveMessages = [
        "รักนะคะ", "คิดถึงที่สุดเลย", "เธอคือคนโปรดของฉัน",
        "อยู่ด้วยกันไปนานๆ นะ", "ขอบคุณที่เข้ามาในชีวิต", "You are my sunshine ☀️",
        "เธอคือของขวัญที่ดีที่สุด", "น่ารักที่สุดในโลก", "I love you 3000",
        "อยู่ข้างๆ เสมอนะ", "อยากเจอหน้าทุกวันเลย", "เหนื่อยมั้ย พักผ่อนบ้างนะ",
        "ดีใจที่มีเธอ", "คนเก่งของเค้า ❤️", "You complete me"
    ];

    // ฟังก์ชันสำหรับสร้างข้อความ
    function createLoveMessage() {
        const messageEl = document.createElement('div');
        messageEl.classList.add('love-message');
        
        // สุ่มข้อความจากใน list
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        messageEl.innerText = randomMessage;
        
        // สุ่มตำแหน่งแนวนอน
        messageEl.style.left = Math.random() * 90 + 'vw';
        
        // สุ่มระยะเวลาในการตก (ทำให้ความเร็วไม่เท่ากัน)
        const duration = Math.random() * 5 + 8; // ตกในเวลา 8-13 วินาที
        messageEl.style.animationDuration = duration + 's';

        // สุ่มขนาดตัวอักษร
        const fontSize = Math.random() * 1 + 1; // ขนาด 1rem - 2rem
        messageEl.style.fontSize = fontSize + 'rem';
        
        container.appendChild(messageEl);
        
        // ลบข้อความออกจากเว็บเมื่อตกสุดจอแล้ว (เพื่อไม่ให้เว็บช้า)
        setTimeout(() => {
            messageEl.remove();
        }, duration * 1000);
    }

    // ฟังก์ชันเริ่มต้นทุกอย่างเมื่อผู้ใช้คลิก
    function startExperience() {
        // ซ่อนหน้าจอเริ่มต้น
        startOverlay.style.display = 'none';

        // เล่นเพลง
        music.play().catch(error => {
            console.log("การเล่นเพลงอัตโนมัติถูกบล็อก, ผู้ใช้ต้องโต้ตอบกับหน้าเว็บก่อน");
        });

        // สร้างข้อความแรกทันที
        createLoveMessage();
        
        // สร้างข้อความใหม่ๆ ทุกๆ 0.5 วินาที
        setInterval(createLoveMessage, 500);
    }

    // รอผู้ใช้คลิกที่หน้าจอเริ่มต้น
    startOverlay.addEventListener('click', startExperience);
});