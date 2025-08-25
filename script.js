document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('falling-container');
    const startOverlay = document.getElementById('start-overlay');
    const music = document.getElementById('bg-music');

    // --- แก้ไขข้อความบอกรักได้ตามใจชอบตรงนี้ ---
    const loveMessages = [
        "รักนะคะ", "คิดถึงที่สุดเลย", "เทอคือคนโปรดของเค้า", "ขอให้เทอมีความสุข",
        "อยู่ด้วยกันไปนานๆ นะ", "ขอบคุณที่เข้ามาในชีวิต", "You are my sunshine ☀️",
        "เทอคือของขวัญที่ดีที่สุด", "น่ารักที่สุดในโลก", "I love you 3000",
        "อยู่ข้างๆ เสมอนะ", "อยากเจอหน้าทุกวันเลย", "เหนื่อยมั้ย พักผ่อนบ้างนะ",
        "ดีใจที่มีเทอ", "คนเก่งของเค้า ❤️", "You complete me","วันนี้เทอน่ารักเป็นพิเศษเลยนะ",
        "ยิ้มเยอะๆ นะรู้มั้ย","เทอคือพลังบวกของเค้าเลย","แค่มีเทอก็ดีพอแล้ว","ขอบคุณที่โลกใบนี้มีเทอนะ",
        "เหนื่อยมั้ย กอดๆ น้า","โลกใจร้าย แต่เราใจดีกับเทอนะ","อยากหยุดเวลาไว้ตอนที่มีเทอ",
        "ขอจองเทอไว้ทั้งชีวิตเลยได้มั้ย","You are my favorite notification",
        "เทอคือความสบายใจของเค้า","อย่าลืมกินข้าวด้วยนะ เป็นห่วง","เก่งมากๆ เลยนะวันนี้",
        "วันไหนแย่ๆ แค่หันมานะ","เทอทำให้วันธรรมดาๆ พิเศษขึ้นมา","รักเทอมากกว่าที่คำพูดจะบรรยายได้",
        "ขอบคุณที่เป็นตัวของตัวเองนะ","เทอคือความสุขของเค้า","อยากอยู่กับเทอตลอดไป",
        "You are my once in a lifetime","เทอคือแรงบันดาลใจของเค้า","รักเทอที่สุดในโลกเลย",
        "แค่คิดถึงเทอก็ยิ้มได้แล้ว","อยากให้เทอรู้ว่าเค้ารักเทอมากแค่ไหน","เทอคือทุกอย่างของเค้า",
        "ไม่มีใครเข้าใจเค้าได้ดีเท่าเทออีกแล้ว","ขอบคุณที่ทำให้เค้ามีความสุข","รักเทอมากๆ นะ",
        "You are my dream come true","อยากให้เทอมีความสุขที่สุดเลย","เทอคือคนพิเศษของเค้า",
        "รักเทอจนหมดหัวใจเลย","ขอบคุณที่อยู่ข้างๆ เค้านะ","อยากให้เทอรู้ว่าเค้าห่วงใยเทอมากแค่ไหน",
        "You are my heart and soul","อยากให้เทอรู้ว่าเค้ารักเทอมากแค่ไหน","รักเทอที่สุดในโลกเลย",
        "แค่คิดถึงเทอก็ยิ้มได้แล้ว","อยากให้เทอรู้ว่าเค้ารักเทอมากแค่ไหน","You are my forever and always",
        "เทอคือ Dagger ที่ฮีลเค้าเก่งที่สุด","เทอคือ Cloak ที่จัดการกับภัยต่างๆที่เข้ามาในชีวิตเค้า","เทอเล่น Marvel rival กับเค้าเรื่อยๆเลยนะ"
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