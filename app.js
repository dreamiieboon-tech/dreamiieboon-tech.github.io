/* ==========================================================================
   Library Quest - Application Logic
   ========================================================================== */

// 1. Data Definitions

// Library types detailed database
const libraryData = {
    school: {
        title: "1. ห้องสมุดโรงเรียน (School Library)",
        image: "assets/images/school_library.png",
        quickInfo: "ศูนย์กลางการเรียนรู้ที่ใกล้ตัวพวกเรามากที่สุด ออกแบบมาเพื่อสนับสนุนครูและนักเรียนโรงเรียนมัธยมศึกษาปีที่ 1",
        meaning: "ห้องสมุดที่จัดตั้งขึ้นภายในโรงเรียน มีหน้าที่หลักคือช่วยเหลือนักเรียนในการทำการบ้าน ศึกษาค้นคว้าเพิ่มเติมนอกตำราเรียน และช่วยเหลือคุณครูในการเตรียมสื่อการสอนต่าง ๆ",
        characteristics: "ตั้งอยู่ในอาคารเรียน เข้าถึงได้ง่าย บรรยากาศเป็นกันเอง มีโซนเก้าอี้นั่งอ่านหนังสือเดี่ยว มุมอ่านการ์ตูนความรู้ และมีตู้ชั้นหนังสือที่แยกตามกลุ่มสาระการเรียนรู้ (เช่น วิทยาศาสตร์, ภาษาไทย, ภาษาอังกฤษ)",
        howToUse: "นักเรียนแสดงบัตรประจำตัวนักเรียนก่อนการใช้บริการยืมหนังสือเสมอ, รักษาความเงียบไม่รบกวนสมาธิผู้อื่น และงดนำน้ำ ขนม หรืออาหารเข้ามาทานในห้องสมุดโดยเด็ดขาด",
        services: "บริการยืม-คืนหนังสือเรียนและหนังสืออ่านนอกเวลา, มุมคอมพิวเตอร์สืบค้นอินเทอร์เน็ตสำหรับทำงานส่งครู, กิจกรรมส่งเสริมการอ่าน (เช่น สัปดาห์ห้องสมุด, การจัดบอร์ดตอบปัญหาวันสำคัญ)",
        examples: "ห้องสมุดโรงเรียนของเรา, ห้องสมุดกลุ่มสาระ, ห้องปฏิบัติการภาษาและห้องสมุดสื่อดิจิทัล"
    },
    university: {
        title: "2. ห้องสมุดมหาวิทยาลัย (University / Academic Library)",
        image: "assets/images/university_library.png",
        quickInfo: "แหล่งค้นคว้าขนาดใหญ่โต มีอุปกรณ์วิจัยและฐานข้อมูลภาษาต่างประเทศจำนวนมหาศาลสำหรับนิสิตนักศึกษาและนักวิจัย",
        meaning: "ห้องสมุดในสถาบันอุดมศึกษา (มหาวิทยาลัยหรือวิทยาลัย) จัดตั้งขึ้นเพื่อตอบสนองการเรียนการสอนและการทำวิจัยขั้นสูงของนิสิต นักศึกษา อาจารย์ และนักวิจัยระดับปริญญาโท-เอก",
        characteristics: "มีขนาดใหญ่โต มักเป็นอาคารเดี่ยวหลายชั้นหรือแยกสาขาตามคณะต่าง ๆ (เช่น หอสมุดวิศวกรรม, หอสมุดแพทยศาสตร์) บรรยากาศทันสมัย มีโซนเงียบพิเศษ และระบบอำนวยความสะดวกด้วยเทคโนโลยี",
        howToUse: "ผู้เข้าใช้ต้องแตะบัตรนิสิต/นักศึกษา หรือชำระค่าบริการหากเป็นบุคคลภายนอก, สามารถจองห้องประชุมกลุ่มผ่านแอปพลิเคชันออนไลน์ และใช้คอมพิวเตอร์สืบค้นขั้นสูง",
        services: "บริการจองห้องศึกษาค้นคว้ากลุ่ม (Group Study Room), บริการยืมระหว่างสถาบัน (ILL) หากหนังสือไม่มีในห้องสมุดตนเอง, บริการฐานข้อมูลวิจัยออนไลน์และวารสารวิชาการจากทั่วโลก",
        examples: "สำนักงานวิทยทรัพยากร จุฬาลงกรณ์มหาวิทยาลัย (หอกลาง), หอสมุดป๋วย อึ๊งภากรณ์ มหาวิทยาลัยธรรมศาสตร์, หอสมุดกลาง มหาวิทยาลัยเกษตรศาสตร์"
    },
    special: {
        title: "3. ห้องสมุดเฉพาะ (Special Library)",
        image: "assets/images/special_library.png",
        quickInfo: "ห้องสมุดสำหรับรวบรวมข้อมูลเจาะลึกเฉพาะทาง มักให้บริการแก่บุคลากรในหน่วยงานนั้น ๆ เป็นสำคัญ",
        meaning: "ห้องสมุดที่รวบรวมเอกสาร หนังสือ และฐานข้อมูลเฉพาะสาขาวิชาชีพใดสาขาวิชาชีพหนึ่ง มักจัดตั้งโดยหน่วยงานเฉพาะ เช่น โรงพยาบาล ธนาคาร กระทรวง หรือบริษัทวิจัย",
        characteristics: "ขนาดมักจะเล็กถึงปานกลาง จัดเก็บเฉพาะสารสนเทศที่จำเป็นสำหรับวิชาชีพนั้น ๆ ไม่มีนิยายหรือการ์ตูนทั่วไป ปะปน มีผู้เชี่ยวชาญเฉพาะทางคอยให้คำแนะนำค้นคว้าเชิงลึก",
        howToUse: "ส่วนใหญ่เน้นให้บริการคนในองค์กร บุคคลภายนอกที่ต้องการใช้บริการมักต้องได้รับอนุญาตล่วงหน้า หรือแลกบัตรเข้า และเตรียมความต้องการของหัวข้อวิจัยให้ชัดเจน",
        services: "บริการจัดหาและแปลเอกสารภาษาต่างประเทศเฉพาะทาง, บริการรวบรวมข้อมูลตามคำขอของนักวิจัย (Information Retrieval), บริการส่งสรุปข่าวสารสำคัญในวิชาชีพเป็นประจำ (Current Awareness Services)",
        examples: "ห้องสมุดธนาคารแห่งประเทศไทย, หอสมุดดนตรีพระบาทสมเด็จพระเจ้าอยู่หัวรัชกาลที่ 9, ห้องสมุดสภาผู้แทนราษฎร, ห้องสมุดแพทย์ในแต่ละโรงพยาบาลใหญ่"
    },
    public: {
        title: "4. ห้องสมุดประชาชน (Public Library)",
        image: "assets/images/public_library.png",
        quickInfo: "ห้องเรียนของสังคมที่เปิดต้อนรับคนทุกเพศ ทุกวัย ตั้งแต่เด็กทารกจนถึงผู้สูงอายุ ฟรีไม่มีค่าใช้จ่าย",
        meaning: "ห้องสมุดที่รัฐบาลหรือท้องถิ่นจัดตั้งขึ้นเพื่อบริการประชาชนทุกคนในชุมชน สังคม โดยไม่มีข้อจำกัดด้านวัย การศึกษา เพศ หรืออาชีพ เพื่อส่งเสริมการเรียนรู้ตลอดชีวิต",
        characteristics: "ตั้งอยู่ในทำเลที่เดินทางสะดวก เป็นศูนย์กลางของชุมชน มีมุมของเล่นเด็ก มุมหนังสือพิมพ์สำหรับผู้สูงอายุ เก้าอี้นั่งพักผ่อน และพื้นที่จัดกิจกรรมอบรมต่าง ๆ",
        howToUse: "บุคคลทั่วไปเดินเข้าใช้งาน นั่งอ่านหนังสือได้ฟรีทันที หากต้องการยืมหนังสือกลับบ้านต้องแสดงบัตรประชาชนเพื่อสมัครสมาชิกและจ่ายค่าธรรมเนียมบำรุงรายปีเล็กน้อย",
        services: "บริการยืม-คืนหนังสือวรรณกรรม นวนิยาย ความรู้ทั่วไป, บริการคอมพิวเตอร์และอินเทอร์เน็ตชุมชน, กิจกรรมส่งเสริมการอ่านสำหรับเด็ก (เล่านิทาน, ศิลปะ) และการอบรมวิชาชีพระยะสั้น",
        examples: "หอสมุดเมืองกรุงเทพมหานคร (Bangkok City Library), ห้องสมุดประชาชนกรุงเทพมหานครแต่ละเขต, ห้องสมุดประชาชนเฉลิมราชกุมารี"
    },
    national: {
        title: "5. หอสมุดแห่งชาติ (National Library)",
        image: "assets/images/national_library.png",
        quickInfo: "คลังสมบัติทางปัญญาของคนทั้งชาติ ทำหน้าที่เก็บรักษาหนังสือและสิ่งพิมพ์ทุกเล่มที่เคยตีพิมพ์ในไทย",
        meaning: "สถาบันคลังสารสนเทศระดับชาติ ทำหน้าที่รวบรวม จดแจ้ง และเก็บรักษาทรัพย์สินทางปัญญา สิ่งพิมพ์ เอกสารโบราณ และประวัติศาสตร์ทุกชิ้นที่จัดทำขึ้นภายในประเทศตามกฎหมาย",
        characteristics: "มีขนาดใหญ่โต โอ่อ่า เป็นที่ตั้งของศูนย์วิจัยทางประวัติศาสตร์ มักเงียบสงบเป็นพิเศษ เต็มไปด้วยเอกสารโบราณ คัมภีร์ใบลาน แผนที่โบราณ และตู้ไม้อนุรักษ์เอกสารมีค่า",
        howToUse: "ผู้ใช้ต้องทำการฝากสัมภาระและกระเป๋าทั้งหมดไว้ในตู้ล็อคเกอร์ก่อนเข้า, ค้นหารายการหนังสือผ่านฐานข้อมูล เมื่อพบแล้วต้องเขียนคำขอให้เจ้าหน้าที่นำทางไปหยิบ และ**ห้ามนำหนังสือกลับบ้าน**",
        services: "บริการสืบค้นเอกสารจดหมายเหตุ คัมภีร์โบราณ รูปภาพเก่าทางประวัติศาสตร์, บริการออกเลขมาตรฐานสากลประจำหนังสือ (ISBN) และสิ่งพิมพ์ต่อเนื่อง (ISSN) ให้แก่ผู้จัดพิมพ์",
        examples: "หอสมุดแห่งชาติ ท่าวาสุกรี (ถนนสามเสน กรุงเทพมหานคร) และสาขาต่าง ๆ ทั่วประเทศ เช่น หอสมุดแห่งชาติสาขาเชียงใหม่ หรือ ชลบุรี"
    }
};

// Game Quests database
const gameQuests = [
    {
        name: "น้องบีม ม.1",
        avatar: "fa-solid fa-child-reaching",
        desc: '"หนูต้องการยืมหนังสืออ่านนอกเวลาเรื่อง แฮร์รี่ พอตเตอร์ ไปอ่านเตรียมสอบสัปดาห์หน้า และอยากหาโต๊ะนั่งทำการบ้านช่วงพักกลางวันจังเลยค่ะ"',
        correctType: "school",
        feedbackCorrect: "ยอดเยี่ยมมากน้อง ๆ! สำหรับน้องบีมวัย ม.1 ห้องสมุดโรงเรียนคือสถานที่ที่เหมาะสมที่สุด เพราะใกล้ตัวและมีหนังสือเพื่อการศึกษาและการอ่านนอกเวลาตรงระดับชั้นเรียนครับ",
        feedbackIncorrect: "อ๊ะ! ยังไม่ถูกครับ ลองนึกดูสิว่าเด็กนักเรียน ม.1 ที่อยากทำงานช่วงพักกลางวันและยืมหนังสือเรียน/นิยายอ่านนอกเวลา ควรไปที่ไหนง่ายที่สุด?"
    },
    {
        name: "พี่ก้อง นิสิตปริญญาโท",
        avatar: "fa-solid fa-user-graduate",
        desc: '"ผมกำลังทำวิทยานิพนธ์วิจัยเรื่อง ระบบการประมวลผลควอนตัมเชิงลึก จึงต้องการสืบค้นข้อมูลในวารสารวิชาการภาษาอังกฤษระดับนานาชาติ และฐานข้อมูลวิจัยออนไลน์ออนไลน์ย้อนหลัง 15 ปี"',
        correctType: "university",
        feedbackCorrect: "ถูกต้องแล้ว! พี่ก้องเป็นนิสิตที่ต้องการฐานข้อมูลการวิจัยระดับชาติและวารสารวิชาการต่างประเทศเชิงลึก ซึ่งมีให้บริการครบครันที่สุดที่ห้องสมุดมหาวิทยาลัย",
        feedbackIncorrect: "ยังไม่ถูกต้องครับ! งานวิจัยระดับควอนตัมและวารสารการวิจัยนานาชาติ ไม่น่าจะมีอยู่ในห้องสมุดโรงเรียนหรือห้องสมุดประชาชนนะ ลองเลือกห้องสมุดสำหรับสถาบันการศึกษาระดับสูงดูสิ"
    },
    {
        name: "พี่ทิพย์ นักโภชนาการโรงพยาบาล",
        avatar: "fa-solid fa-user-doctor",
        desc: '"ฉันต้องการสืบค้นคู่มือทางการแพทย์และงานวิจัยที่ได้รับการรับรองด่วน เกี่ยวกับการสกัดวิตามินจากผลไม้ตระกูลเบอร์รี่เพื่อจัดเมนูฟื้นฟูตับผู้ป่วยเฉพาะทางค่ะ"',
        correctType: "special",
        feedbackCorrect: "ถูกต้องเลย! ข้อมูลคู่มือวิชาชีพและงานวิจัยเฉพาะด้านการแพทย์ที่ต้องการความแม่นยำสูง ควรค้นหาที่ห้องสมุดเฉพาะทางแพทย์ในโรงพยาบาลหรือหน่วยงานวิทยาศาสตร์",
        feedbackIncorrect: "ยังไม่ใช่ครับ! ข้อมูลคู่มือทางการแพทย์ระดับผู้ป่วยเฉพาะทางนี้ค่อนข้างเฉพาะเจาะจงมาก ห้องสมุดทั่วไปอาจไม่มีข้อมูลเจาะลึกแบบนี้ ลองเลือกห้องสมุดที่เน้นเก็บเอกสารวิชาชีพเฉพาะด้านดูสิ"
    },
    {
        name: "คุณยายเพ็ญและหลานชาย",
        avatar: "fa-solid fa-person-cane",
        desc: '"ยายอยากพาน้องบอลวัย 5 ขวบไปฟังพี่ ๆ เล่านิทานแสนสนุก และตัวยายเองก็อยากอ่านหนังสือพิมพ์รายวันกับวารสารทำอาหารทั่วไปริมสวนชุมชนเสาร์นี้จ้ะ"',
        correctType: "public",
        feedbackCorrect: "ถูกต้องครับเก่งมาก! ห้องสมุดประชาชนเปิดต้อนรับทุกคนในสังคมฟรี มีทั้งมุมหนังสือพิมพ์สำหรับผู้สูงอายุ และมุมนิทานสร้างสรรค์สำหรับเด็กเล็ก ตอบโจทย์คุณยายเพ็ญสุด ๆ",
        feedbackIncorrect: "ยังไม่ถูกจ้า! กิจกรรมเล่านิทานเด็กเล็กและมุมหนังสือพิมพ์ทั่วไปในชุมชนแบบเข้าถึงได้ทุกคนฟรี เป็นหัวใจหลักของห้องสมุดประเภทใด ลองทบทวนดูอีกครั้งนะ"
    },
    {
        name: "คุณครูสมชาติ ครูประวัติศาสตร์",
        avatar: "fa-solid fa-chalkboard-user",
        desc: '"ผมกำลังรวบรวมแผนที่กรุงเทพฯ สมัยรัชกาลที่ 5 และภาพถ่ายฟิล์มกระจกโบราณซึ่งถือเป็นสมบัติทางวัฒนธรรมของชาติที่ไม่สามารถหาดูจากที่ไหนได้อีกเพื่อเรียบเรียงหนังสือประวัติศาสตร์ครับ"',
        correctType: "national",
        feedbackCorrect: "สุดยอดมาก! แผนที่โบราณ คัมภีร์ เอกสารประวัติศาสตร์ และสิ่งพิมพ์ทุกชนิดของชาติ ถูกจัดเก็บและอนุรักษ์ไว้อย่างปลอดภัยสูงสุดที่หอสมุดแห่งชาติ และห้ามยืมกลับบ้านเพื่อกันสูญหาย",
        feedbackIncorrect: "ยังไม่ถูกต้องครับ! เอกสารโบราณระดับชาติที่เป็นของหายากและอนุรักษ์ไว้ในคลังประวัติศาสตร์ มักไม่เปิดให้ยืมออกนอกอาคารและมีขนาดใหญ่ที่สุด ลองเลือกหอสมุดประจำชาติดูสิ"
    }
];

// Bloom's Taxonomy Quiz questions
const quizQuestions = [
    {
        question: "1. หอสมุดแห่งชาติแตกต่างจากห้องสมุดประเภทอื่นในด้านหน้าที่หลักตามข้อใด?",
        options: [
            "เน้นจัดกิจกรรมส่งเสริมวิชาชีพระยะสั้นและเล่านิทานเด็กในชุมชน",
            "ทำหน้าที่รวบรวมและอนุรักษ์สิ่งพิมพ์ทุกชนิดที่ผลิตขึ้นในประเทศเพื่อเป็นมรดกชาติ",
            "ให้บริการวิชาการชั้นสูงแก่นิสิตนักศึกษาของแต่ละมหาวิทยาลัยเป็นสำคัญ",
            "เน้นให้เยาวชนเข้ามายืมหนังสือการ์ตูนและของเล่นกลับบ้านได้ฟรี"
        ],
        answer: 1,
        bloomLevel: "Remembering (จำ)",
        explain: "หอสมุดแห่งชาติ (National Library) เป็นคลังเก็บรวบรวมทรัพย์สินทางปัญญาทุกประเภทที่ตีพิมพ์ในประเทศตามกฎหมายจดแจ้งการพิมพ์ มีวัตถุประสงค์หลักเพื่อการอนุรักษ์มรดกทางปัญญาของชาติ ไม่เน้นบริการยืมกลับบ้าน"
    },
    {
        question: "2. ข้อใดอธิบายขอบเขตและการทำงานของ 'ห้องสมุดเฉพาะ' ได้ถูกต้องที่สุด?",
        options: [
            "เน้นรวบรวมเอกสารข้อมูลในสาขาวิชาชีพใดวิชาหนึ่งโดยเฉพาะ เพื่อรับใช้บุคลากรในหน่วยงานนั้น ๆ",
            "เป็นห้องเรียนขนาดใหญ่ที่มีวิทยากรมาสอนการทำอาหารและจำหน่ายอุปกรณ์เครื่องครัว",
            "ห้องสมุดที่อนุญาตให้คนทุกคนในชุมชนเข้ามานอนหลับพักผ่อนโดยไม่มีเจ้าหน้าที่ดูแล",
            "ห้องสมุดของนักเรียนโรงเรียนประถมศึกษาที่เน้นหนังสือภาพระบายสีเป็นหลัก"
        ],
        answer: 0,
        bloomLevel: "Understanding (เข้าใจ)",
        explain: "ห้องสมุดเฉพาะ (Special Library) รวบรวมเอกสารสารสนเทศเจาะลึกเฉพาะสาขาวิชา (เช่น แพทย์ การเงิน ดนตรี) เพื่อสนับสนุนนักวิจัยหรือบุคลากรในสถาบัน/องค์กรนั้น ๆ เป็นหลัก"
    },
    {
        question: "3. หากแก้วใสได้รับโจทย์ทำรายงานเรื่อง 'การเปลี่ยนแปลงทางเศรษฐกิจและการเงินไทยโบราณในสมัยรัชกาลที่ 5' แก้วใสควรเลือกไปใช้บริการห้องสมุดในข้อใดเพื่อค้นหาข้อมูลที่ตรงจุดที่สุด?",
        options: [
            "ห้องสมุดโรงเรียน เพราะมีครูบรรณารักษ์คอยตรวจโครงร่างรายงานให้",
            "ห้องสมุดเฉพาะของธนาคารแห่งประเทศไทย หรือ หอสมุดแห่งชาติ",
            "ห้องสมุดประชาชนประจำหมู่บ้าน เพราะเดินทางสะดวกและมีพื้นที่กว้างขวาง",
            "ห้องสมุดโรงพยาบาลศิริราช เพราะมีแพทย์ผู้เชี่ยวชาญนั่งทำงานอยู่"
        ],
        answer: 1,
        bloomLevel: "Applying (ประยุกต์ใช้)",
        explain: "ประเด็นเศรษฐกิจและการเงินโบราณเป็นเรื่องเฉพาะทาง ดังนั้น ห้องสมุดเฉพาะ (เช่น ห้องสมุดธนาคารแห่งประเทศไทย) หรือ หอสมุดแห่งชาติ (แหล่งรวมเอกสารจดหมายเหตุโบราณ) จึงมีข้อมูลที่ลึกและกว้างขวางที่สุดสำหรับรายงานนี้"
    },
    {
        question: "4. ในวันหยุดสุดสัปดาห์ คุณพ่อต้องการพาน้องสาววัย 4 ขวบไปร่วมกิจกรรมเล่านิทานคุณธรรม และคุณแม่ต้องการอ่านวารสารแฟชั่น ครอบครัวนี้ควรเลือกเดินทางไปที่ใด?",
        options: [
            "ห้องสมุดมหาวิทยาลัย เพื่อให้น้องฝึกเข้าสังคมกับนักศึกษา",
            "ห้องสมุดประชาชน เพราะต้อนรับคนทุกกลุ่มในชุมชน มีมุมนิทานเด็ก และบริการทั่วไปฟรี",
            "ห้องสมุดเฉพาะทางวิทยาศาสตร์ เพราะมีห้องทดลองให้เด็กได้ลองเล่น",
            "หอสมุดแห่งชาติ เพื่อช่วยให้ลูกได้เข้าเรียนรู้ความเงียบสงบตั้งแต่เด็ก"
        ],
        answer: 1,
        bloomLevel: "Applying (ประยุกต์ใช้)",
        explain: "ห้องสมุดประชาชน (Public Library) มีวัตถุประสงค์เพื่อส่งเสริมการอ่านของคนในท้องถิ่นทุกเพศทุกวัย มีมุมหนังสือพิมพ์ นวนิยาย มุมเด็ก และกิจกรรมนิทานสำหรับเด็กปฐมวัยโดยเฉพาะ"
    },
    {
        question: "5. ทำไมห้องสมุดโรงเรียนจึงจัดมุมวรรณกรรมเยาวชนและการ์ตูนความรู้ไว้จำนวนมาก ในขณะที่ห้องสมุดมหาวิทยาลัยเน้นวารสารวิชาการต่างประเทศและฐานข้อมูลวิจัยออนไลน์?",
        options: [
            "เพราะนักเรียน ม.1 สอบใบขับขี่ไม่ได้ จึงยังไม่สามารถอ่านงานวิจัยได้",
            "เพื่อให้สอดคล้องกับวัย วัตถุประสงค์การเรียนรู้ และหลักสูตรของกลุ่มผู้ใช้งานหลักในสถาบันนั้น ๆ",
            "เพราะมหาวิทยาลัยต้องการขายฐานข้อมูลวิจัยเพื่อเก็บค่าเข้าชมจากประชาชนทั่วไป",
            "เพราะห้องสมุดโรงเรียนมีขนาดตู้หนังสือที่เล็กกว่าตู้หนังสือของมหาวิทยาลัย"
        ],
        answer: 1,
        bloomLevel: "Analyzing (วิเคราะห์)",
        explain: "การจัดการทรัพยากรห้องสมุดต้องวิเคราะห์ผู้ใช้บริการหลัก (Target Users) นักเรียน ม.1 ต้องการข้อมูลกระตุ้นการอ่านและการเรียนรู้ขั้นพื้นฐาน ส่วนนักศึกษาและอาจารย์มหาวิทยาลัยต้องการข้อมูลเชิงลึกทางวิชาการเพื่อทำวิจัยสร้างองค์ความรู้ใหม่"
    },
    {
        question: "6. ข้อใดคือเหตุผลสำคัญที่สุดที่หอสมุดแห่งชาติ 'ไม่อนุญาตให้ผู้ใช้บริการยืมหนังสือกลับบ้าน'?",
        options: [
            "เพื่ออำนวยความสะดวกให้นักเรียนไม่ต้องจำกำหนดส่งคืนหนังสือ",
            "เพื่อประหยัดไฟฟ้าในการทำงานของเครื่องพิมพ์บาร์โค้ดยืมคืน",
            "เพื่อสงวนรักษาและอนุรักษ์หนังสือซึ่งเปรียบเสมือนทรัพย์สินทางปัญญาชิ้นเดียวของชาติไม่ให้ชำรุดเสียหายหรือสูญหาย",
            "เพราะหอสมุดไม่มีงบประมาณเพียงพอในการทำบัตรสมาชิกให้ยืมหนังสือ"
        ],
        answer: 2,
        bloomLevel: "Analyzing (วิเคราะห์)",
        explain: "หอสมุดแห่งชาติเก็บรวบรวมสิ่งพิมพ์ที่เป็นมรดกทางวัฒนธรรมและประวัติศาสตร์ของประเทศ ซึ่งหนังสือหลายเล่มเป็นของหายากและเหลืออยู่เล่มเดียว การไม่ให้ยืมออกนอกอาคารช่วยให้เกิดความมั่นใจว่าจะไม่สูญหายและพร้อมบริการผู้มาศึกษาค้นคว้าเสมอ"
    },
    {
        question: "7. หากนักเรียนเป็นคณะกรรมการพัฒนาหมู่บ้าน และพบว่าเยาวชนในชุมชนขาดทักษะอาชีพจนเกิดภาวะว่างงาน นักเรียนจะประเมินบทบาทของห้องสมุดประชาชนอย่างไรเพื่อร่วมแก้ปัญหานี้?",
        options: [
            "ปิดห้องสมุดถาวรแล้วเปลี่ยนเป็นร้านอินเทอร์เน็ตคาเฟ่เพื่อสร้างรายได้จากเกมออนไลน์",
            "ประเมินว่าห้องสมุดประชาชนมีศักยภาพเป็นศูนย์การเรียนรู้ชุมชน จึงควรจัดมุมหนังสือวิชาชีพและเปิดพื้นที่จัดอบรมทักษะสั้น ๆ ฟรี",
            "เปิดรับสมัครคนว่างงานเข้ามาปัดกวาดเช็ดถูหนังสือทุกวันโดยให้ค่าแรงต่ำเพื่อความคุ้มค่า",
            "ย้ายห้องสมุดไปตั้งในเมืองใหญ่เพื่อให้พ้นสายตาของวัยรุ่นในชุมชนที่ว่างงาน"
        ],
        answer: 1,
        bloomLevel: "Evaluating (ประเมินค่า)",
        explain: "ห้องสมุดประชาชนมีหน้าที่หลักในการพัฒนาคุณภาพชีวิตคนในชุมชน การใช้พื้นที่และทรัพยากรห้องสมุดมาขยายผลจัดโครงการฝึกอาชีพและจัดหาตำราความรู้ทางอาชีพจึงเป็นบทบาทที่สร้างสรรค์และแก้ปัญหาได้ตรงประเด็นที่สุด"
    },
    {
        question: "8. หากศูนย์วิจัยทางการแพทย์จำเป็นต้องเลือกจัดตั้งห้องสมุดสำหรับทีมแพทย์ผู้รักษาโรคอุบัติใหม่ ระหว่างการสร้าง 'ห้องสมุดเฉพาะด้านการแพทย์' กับการอาศัย 'ห้องสมุดประชาชน' ทางเลือกใดเหมาะสมและมีประสิทธิภาพดีที่สุดเพราะเหตุใด?",
        options: [
            "ใช้ห้องสมุดประชาชน เพราะประหยัดงบประมาณและมีหนังสือท่องเที่ยวให้แพทย์ได้ผ่อนคลายความเครียด",
            "จัดตั้งห้องสมุดเฉพาะด้านการแพทย์ เพราะเน้นเก็บสารสนเทศการแพทย์เชิงลึกและตรงประเด็น ช่วยให้แพทย์ค้นพบแนวทางรักษาอย่างรวดเร็วและน่าเชื่อถือ",
            "ใช้ห้องสมุดประชาชน เพราะเปิดให้พยาบาลเข้ามาช่วยตอบปัญหาสุขภาพทั่วไปของประชาชนได้ไปพร้อมกัน",
            "ทั้งสองแห่งไม่มีประสิทธิภาพเลย แพทย์ควรศึกษาจากกลุ่มแอปพลิเคชันพูดคุยในโซเชียลมีเดียเท่านั้น"
        ],
        answer: 1,
        bloomLevel: "Evaluating (ประเมินค่า)",
        explain: "เมื่อประเมินประสิทธิภาพในสถานการณ์ฉุกเฉินหรือเชิงลึกอย่างการแพทย์ ห้องสมุดเฉพาะ (Special Library) มีความโดดเด่นกว่าเนื่องจากขจัดข้อมูลทั่วไปที่ไม่เกี่ยวข้องออกไป และรวมเฉพาะข้อมูลวิชาการแพทย์ชั้นนำที่ทีมแพทย์ใช้ประกอบการตัดสินใจรักษาชีวิตคนไข้ได้ทันท่วงที"
    },
    {
        question: "9. หากนักเรียนได้รับมอบหมายให้ออกแบบบริการใหม่ของห้องสมุดโรงเรียน โดยนำเอาแนวคิดเด่นของ 'ห้องสมุดเฉพาะ' และ 'ห้องสมุดประชาชน' มาผสมผสานกัน ข้อใดคือแนวคิดที่สร้างสรรค์ที่สุด?",
        options: [
            "เก็บค่าเข้าใช้บริการของนักเรียนทุกคนเพื่อระดมทุนไปซื้อหนังสือพิมพ์ระดับประเทศมาวางเรียงกัน",
            "ยกเลิกชั้นหนังสือวิชาการทั้งหมดแล้วจัดชั้นวางเฉพาะตุ๊กตาและมุมเครื่องดื่มชาไข่มุก",
            "จัดตั้ง 'มุมความรู้สู่อาชีพในฝัน' ที่เก็บข้อมูลเฉพาะทาง (แบบห้องสมุดเฉพาะ) พร้อมจัดตั้งกลุ่มบอร์ดสนทนาพูดคุยแลกเปลี่ยนผลงานของเด็ก ๆ ในโรงเรียน (แบบห้องสมุดประชาชน)",
            "ห้ามนักเรียนในโรงเรียนพูดคุยกันอย่างเด็ดขาด และเปิดเพลงบรรเลงเสียงดังตลอดทั้งวัน"
        ],
        answer: 2,
        bloomLevel: "Creating (สร้างสรรค์)",
        explain: "แนวคิดนี้เป็นการสังเคราะห์ (Synthesis) จุดเด่นจากทั้งสองแห่ง: ดึงเอาความเชี่ยวชาญเฉพาะเรื่อง (ห้องสมุดเฉพาะ) มารวมกับการมีส่วนร่วมแลกเปลี่ยนความรู้ในสังคม (ห้องสมุดประชาชน) ช่วยส่งเสริมทักษะอาชีพให้นักเรียนอย่างเพลิดเพลินและได้ประโยชน์จริง"
    },
    {
        question: "10. เพื่อออกแบบกฎเกณฑ์การใช้งานห้องสมุดดิจิทัล (Digital Library) ของโรงเรียนยุคใหม่ให้เคารพสิทธิ์และส่งเสริมจริยธรรมสูงสุด นักเรียนจะเสนอหลักปฏิบัติในข้อใด?",
        options: [
            "อนุญาตให้นักเรียนดาวน์โหลดหนังสือของโรงเรียนไปแจกจ่ายและจำหน่ายต่อในเว็บไซต์ส่วนตัวได้เสรี",
            "กำหนดให้ระบุแหล่งที่มาและอ้างอิงลิขสิทธิ์ของสิ่งพิมพ์ดิจิทัลทุกครั้งที่นำข้อมูลไปใช้ประโยชน์ พร้อมแบ่งปันสรุปความรู้ของตนเองลงในพื้นที่ชุมชนโรงเรียนอย่างรับผิดชอบ",
            "ห้ามนักเรียนค้นหาข้อมูลอื่นใดนอกจากวิชาคณิตศาสตร์และภาษาไทยเพื่อความเป็นระเบียบเรียบร้อย",
            "กำหนดให้นักเรียนต้องจ่ายค่าลิขสิทธิ์ทุกครั้งในการเปิดอ่านหนังสือหนึ่งหน้าผ่านระบบคลาวด์ของโรงเรียน"
        ],
        answer: 1,
        bloomLevel: "Creating (สร้างสรรค์)",
        explain: "การเสนอแนวทางใช้งานที่เน้นเคารพสิทธิ์การอ้างอิงผลงานผู้อื่น (Academic Integrity) ควบคู่กับการแชร์ความรู้สร้างสรรค์แบบเปิด (Open Education) เป็นการส่งเสริมจริยธรรมการเรียนรู้ในสังคมดิจิทัลได้อย่างสร้างสรรค์และตอบโจทย์อนาคตที่สุด"
    }
];


// 2. DOM Elements Selection
document.addEventListener("DOMContentLoaded", () => {
    // Nav Navigation Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // 3. Tab Rendering and Interaction Logic
    const tabContentArea = document.getElementById("tab-content-area");
    const tabButtons = document.querySelectorAll(".tab-btn");

    function renderTabContent(tabKey) {
        const data = libraryData[tabKey];
        if (!data) return;

        tabContentArea.innerHTML = `
            <div class="tab-content">
                <div class="tab-visual">
                    <img src="${data.image}" alt="${data.title}" class="tab-image">
                    <div class="tab-quick-info">
                        <h4>💡 จุดสังเกตของประเภทนี้</h4>
                        <p>${data.quickInfo}</p>
                    </div>
                </div>
                <div class="tab-details">
                    <h3><i class="fa-solid fa-book-open"></i> ${data.title}</h3>
                    
                    <div class="content-grid">
                        <div class="info-card">
                            <div class="card-title">
                                <i class="fa-solid fa-graduation-cap"></i>
                                <span>ความหมาย</span>
                            </div>
                            <p class="card-text">${data.meaning}</p>
                        </div>
                        
                        <div class="info-card">
                            <div class="card-title">
                                <i class="fa-solid fa-circle-info"></i>
                                <span>ลักษณะเด่นของห้องสมุด</span>
                            </div>
                            <p class="card-text">${data.characteristics}</p>
                        </div>

                        <div class="info-card">
                            <div class="card-title">
                                <i class="fa-solid fa-door-open"></i>
                                <span>วิธีการใช้งานอย่างถูกต้อง</span>
                            </div>
                            <p class="card-text">${data.howToUse}</p>
                        </div>

                        <div class="info-card">
                            <div class="card-title">
                                <i class="fa-solid fa-hand-holding-heart"></i>
                                <span>บริการที่มีให้ในห้องสมุด</span>
                            </div>
                            <p class="card-text">${data.services}</p>
                        </div>

                        <div class="info-card">
                            <div class="card-title">
                                <i class="fa-solid fa-star"></i>
                                <span>ตัวอย่างห้องสมุดประเภทนี้</span>
                            </div>
                            <p class="card-text"><strong>เช่น:</strong> ${data.examples}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize with School Library content
    renderTabContent("school");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const tabKey = btn.getAttribute("data-tab");
            renderTabContent(tabKey);
            
            // Highlight active tab in navigation if needed
            document.getElementById("learn").scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    });


    // 4. Mini-Game "Library Quest" Logic
    let gameCurrentIndex = 0;
    let gameScore = 0;
    let gameHasAnswered = false;

    const gameIntro = document.getElementById("game-intro");
    const gamePlay = document.getElementById("game-play");
    const gameFinish = document.getElementById("game-finish");
    const startGameBtn = document.getElementById("start-game-btn");
    
    const gameCurrStepText = document.getElementById("game-curr-step");
    const gameBarInner = document.getElementById("game-bar-inner");
    const gameStarsText = document.getElementById("game-stars");
    const scenarioIcon = document.getElementById("scenario-icon");
    const scenarioName = document.getElementById("scenario-name");
    const scenarioDesc = document.getElementById("scenario-desc");
    
    const choiceButtons = document.querySelectorAll(".game-choice-btn");
    const gameFeedback = document.getElementById("game-feedback");
    const feedbackIconDiv = document.getElementById("feedback-icon-div");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackDesc = document.getElementById("feedback-desc");
    const gameNextBtn = document.getElementById("game-next-btn");

    const gameCorrectCount = document.getElementById("game-correct-count");
    const gameFinalStars = document.getElementById("game-final-stars");
    const replayGameBtn = document.getElementById("replay-game-btn");

    startGameBtn.addEventListener("click", () => {
        gameIntro.classList.remove("active");
        gamePlay.classList.add("active");
        loadGameScenario(0);
    });

    function loadGameScenario(index) {
        gameHasAnswered = false;
        gameFeedback.classList.add("hidden");
        
        // Reset choices styles
        choiceButtons.forEach(btn => {
            btn.classList.remove("correct", "incorrect");
            btn.disabled = false;
        });

        const quest = gameQuests[index];
        gameCurrStepText.innerText = index + 1;
        gameBarInner.style.width = `${((index + 1) / 5) * 100}%`;
        gameStarsText.innerText = gameScore;
        
        scenarioIcon.className = quest.avatar;
        scenarioName.innerText = quest.name;
        scenarioDesc.innerText = quest.desc;
    }

    choiceButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (gameHasAnswered) return;
            gameHasAnswered = true;

            const selectedType = btn.getAttribute("data-type");
            const quest = gameQuests[gameCurrentIndex];

            // Disable all buttons
            choiceButtons.forEach(b => b.disabled = true);

            if (selectedType === quest.correctType) {
                // Correct answer
                btn.classList.add("correct");
                gameScore += 1;
                gameStarsText.innerText = gameScore;
                
                feedbackIconDiv.className = "feedback-icon success";
                feedbackIconDiv.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                feedbackTitle.innerText = "ถูกต้องแล้วครับน้อง ๆ! เก่งมาก!";
                feedbackDesc.innerText = quest.feedbackCorrect;
            } else {
                // Incorrect answer
                btn.classList.add("incorrect");
                
                // Show the correct button
                choiceButtons.forEach(b => {
                    if (b.getAttribute("data-type") === quest.correctType) {
                        b.classList.add("correct");
                    }
                });

                feedbackIconDiv.className = "feedback-icon error";
                feedbackIconDiv.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
                feedbackTitle.innerText = "ยังไม่ถูกต้องนะน้อง ๆ ลองมาดูเฉลยกัน:";
                feedbackDesc.innerText = quest.feedbackIncorrect;
            }

            gameFeedback.classList.remove("hidden");
        });
    });

    gameNextBtn.addEventListener("click", () => {
        gameCurrentIndex++;
        if (gameCurrentIndex < 5) {
            loadGameScenario(gameCurrentIndex);
        } else {
            // End Game
            gamePlay.classList.remove("active");
            gameFinish.classList.add("active");
            gameCorrectCount.innerText = gameScore;
            gameFinalStars.innerText = gameScore;
        }
    });

    replayGameBtn.addEventListener("click", () => {
        gameCurrentIndex = 0;
        gameScore = 0;
        gameFinish.classList.remove("active");
        gamePlay.classList.add("active");
        loadGameScenario(0);
    });


    // 5. Quiz Section Logic (Bloom's Taxonomy)
    let quizCurrentIndex = 0;
    let quizScore = 0;
    let quizHasAnswered = false;
    let studentNameValue = "";

    const quizRegContainer = document.getElementById("quiz-reg-container");
    const quizPlayContainer = document.getElementById("quiz-play-container");
    const quizResultContainer = document.getElementById("quiz-result-container");
    
    const studentNameInput = document.getElementById("student-name");
    const nameError = document.getElementById("name-error");
    const startQuizBtn = document.getElementById("start-quiz-btn");

    const quizCurrNumText = document.getElementById("quiz-curr-num");
    const quizBloomLevel = document.getElementById("quiz-bloom-level");
    const quizBarInner = document.getElementById("quiz-bar-inner");
    const quizQuestionText = document.getElementById("quiz-question-text");
    const quizOptionsContainer = document.getElementById("quiz-options-container");
    
    const quizExplainCard = document.getElementById("quiz-explain-card");
    const explainTitle = document.getElementById("explain-title");
    const explainText = document.getElementById("explain-text");
    const quizNextBtn = document.getElementById("quiz-next-btn");

    const quizFinalScore = document.getElementById("quiz-final-score");
    const resultStudentName = document.getElementById("result-student-name");
    const resultStatus = document.getElementById("result-status");
    const resultGreeting = document.getElementById("result-greeting");
    const resultText = document.getElementById("result-text");
    const resultIconDiv = document.getElementById("result-icon-div");
    const restartQuizBtn = document.getElementById("restart-quiz-btn");
    const gotoCertBtn = document.getElementById("goto-cert-btn");

    // E-Certificate DOM lock
    const certLockedView = document.getElementById("cert-locked-view");
    const certUnlockedView = document.getElementById("cert-unlocked-view");
    const navCertLink = document.getElementById("nav-cert-link");

    startQuizBtn.addEventListener("click", () => {
        studentNameValue = studentNameInput.value.trim();
        if (studentNameValue === "") {
            nameError.classList.remove("hidden");
            return;
        }
        nameError.classList.add("hidden");
        quizRegContainer.classList.add("hidden");
        quizPlayContainer.classList.remove("hidden");
        
        // Start quiz
        quizCurrentIndex = 0;
        quizScore = 0;
        loadQuizQuestion(0);
    });

    function loadQuizQuestion(index) {
        quizHasAnswered = false;
        quizExplainCard.classList.add("hidden");
        quizOptionsContainer.innerHTML = "";

        const questionData = quizQuestions[index];
        quizCurrNumText.innerText = index + 1;
        quizBloomLevel.innerText = `ระดับ: ${questionData.bloomLevel}`;
        quizBarInner.style.width = `${((index + 1) / 10) * 100}%`;
        quizQuestionText.innerText = questionData.question;

        // Render options
        questionData.options.forEach((option, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
            const button = document.createElement("button");
            button.className = "quiz-opt-btn";
            button.innerHTML = `
                <span class="opt-prefix">${letter}</span>
                <span>${option}</span>
            `;
            button.addEventListener("click", () => handleSelectOption(optIdx, button));
            quizOptionsContainer.appendChild(button);
        });
    }

    function handleSelectOption(selectedIdx, clickedBtn) {
        if (quizHasAnswered) return;
        quizHasAnswered = true;

        const questionData = quizQuestions[quizCurrentIndex];
        const optionButtons = quizOptionsContainer.querySelectorAll(".quiz-opt-btn");

        // Disable all buttons
        optionButtons.forEach(btn => btn.classList.add("disabled"));

        if (selectedIdx === questionData.answer) {
            clickedBtn.classList.add("correct");
            quizScore++;
            explainTitle.innerHTML = '<i class="fa-solid fa-circle-check text-success"></i> ถูกต้องแล้วเก่งมากครับน้อง ๆ!';
        } else {
            clickedBtn.classList.add("incorrect");
            // Show the correct button
            optionButtons[questionData.answer].classList.add("correct");
            explainTitle.innerHTML = '<i class="fa-solid fa-circle-xmark text-error"></i> ยังไม่ถูกต้องจ้า... ลองดูเหตุผลกันนะ:';
        }

        // Render explanation
        explainText.innerText = questionData.explain;
        quizExplainCard.classList.remove("hidden");
    }

    quizNextBtn.addEventListener("click", () => {
        quizCurrentIndex++;
        if (quizCurrentIndex < 10) {
            loadQuizQuestion(quizCurrentIndex);
        } else {
            // Show Quiz Results
            quizPlayContainer.classList.add("hidden");
            quizResultContainer.classList.remove("hidden");
            
            // Set results details
            quizFinalScore.innerText = quizScore;
            resultStudentName.innerText = studentNameValue;
            
            const passGrade = 6; // 60% to pass
            if (quizScore >= passGrade) {
                // Pass State
                resultIconDiv.className = "result-icon-div";
                resultIconDiv.innerHTML = '<i class="fa-solid fa-award"></i>';
                resultGreeting.innerText = "ยินดีด้วยครับคนเก่ง! 🎉";
                resultText.innerText = `น้อง ๆ สอบผ่านการทดสอบเรื่องประเภทห้องสมุด ด้วยคะแนนอันยอดเยี่ยม!`;
                resultStatus.innerText = `สอบผ่านการทดสอบ (ระดับชั้นดีเยี่ยม)`;
                resultStatus.style.color = "var(--success)";
                
                // Unlock Certificate
                certLockedView.classList.add("hidden");
                certUnlockedView.classList.remove("hidden");
                
                // Redraw Certificate
                generateCertificateCanvas(studentNameValue, quizScore);
            } else {
                // Fail State
                resultIconDiv.className = "result-icon-div failed";
                resultIconDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
                resultGreeting.innerText = "พยายามอีกนิดนะน้อง ๆ! 💪";
                resultText.innerText = `น้อง ๆ ได้คะแนนยังไม่ถึงเกณฑ์ขั้นต่ำ 6 คะแนนสำหรับรับเกียรติบัตร ลองศึกษาข้อมูลอีกครั้งและกลับมาสู้ใหม่นะครับ!`;
                resultStatus.innerText = `ยังไม่ผ่านเกณฑ์การทดสอบ (ต้องการอย่างน้อย 6 ข้อ)`;
                resultStatus.style.color = "var(--error)";
                
                // Lock Certificate
                certLockedView.classList.remove("hidden");
                certUnlockedView.classList.add("hidden");
            }
        }
    });

    restartQuizBtn.addEventListener("click", () => {
        quizResultContainer.classList.add("hidden");
        quizRegContainer.classList.remove("hidden");
    });


    // 6. E-Certificate Canvas Rendering Logic
    const certCanvas = document.getElementById("cert-canvas");
    const downloadCertBtn = document.getElementById("download-cert-btn");
    const printCertBtn = document.getElementById("print-cert-btn");

    function generateCertificateCanvas(name, score) {
        const ctx = certCanvas.getContext("2d");
        const width = certCanvas.width;
        const height = certCanvas.height;

        // Ensure canvas is cleared
        ctx.clearRect(0, 0, width, height);

        // 1. Draw elegant background colors (Soft Purple Wash)
        ctx.fillStyle = "#FAF9FF";
        ctx.fillRect(0, 0, width, height);

        // 2. Draw outer border (Deep Purple)
        ctx.strokeStyle = "#6D28D9";
        ctx.lineWidth = 14;
        ctx.strokeRect(7, 7, width - 14, height - 14);

        // 3. Draw inner gold thin border
        ctx.strokeStyle = "#F59E0B";
        ctx.lineWidth = 3;
        ctx.strokeRect(20, 20, width - 40, height - 40);

        // 4. Draw corner decorative ornaments (Gold triangles/circles)
        const corners = [
            { x: 20, y: 20 },
            { x: width - 20, y: 20 },
            { x: 20, y: height - 20 },
            { x: width - 20, y: height - 20 }
        ];
        
        ctx.fillStyle = "#F59E0B";
        corners.forEach(corner => {
            ctx.beginPath();
            ctx.arc(corner.x, corner.y, 10, 0, Math.PI * 2);
            ctx.fill();
        });

        // 5. Draw Title header
        ctx.fillStyle = "#1E1B4B";
        ctx.textAlign = "center";
        
        ctx.font = "bold 24px 'Kanit'";
        ctx.fillText("เกียรติบัตรผู้พิทักษ์ห้องสมุด (Library Guardian)", width / 2, 75);

        ctx.font = "16px 'Sarabun'";
        ctx.fillStyle = "#4B5563";
        ctx.fillText("เกียรติบัตรฉบับนี้มอบให้ไว้เพื่อแสดงว่า", width / 2, 125);

        // 6. Draw Student Name (Big, bold purple font)
        ctx.fillStyle = "#6D28D9";
        ctx.font = "bold 38px 'Kanit'";
        ctx.fillText(name, width / 2, 190);

        // Draw underlining below name
        ctx.strokeStyle = "#A78BFA";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo((width / 2) - 180, 210);
        ctx.lineTo((width / 2) + 180, 210);
        ctx.stroke();

        // 7. Certificate Body Content
        ctx.fillStyle = "#1E1B4B";
        ctx.font = "18px 'Sarabun'";
        ctx.fillText("ได้ผ่านการศึกษาและทำแบบทดสอบวัดระดับผลสัมฤทธิ์ทางการเรียนรู้", width / 2, 255);
        ctx.fillText("รายวิชาการใช้ห้องสมุดเบื้องต้น เรื่อง 'ประเภทของห้องสมุดทั้ง 5 ประเภท'", width / 2, 285);
        ctx.fillText("ระดับชั้นมัธยมศึกษาปีที่ 1 ตามกรอบทฤษฎีการเรียนรู้ Bloom's Taxonomy", width / 2, 315);

        // 8. Score Display
        ctx.fillStyle = "#10B981";
        ctx.font = "bold 20px 'Kanit'";
        ctx.fillText(`ได้ผลคะแนนประเมินคิดเป็น: ${score} คะแนนจากเต็ม 10 คะแนน (ผ่านเกณฑ์)`, width / 2, 360);

        // 9. Draw Seal of Knowledge (Gold Shield/Medal)
        const sealX = width / 2;
        const sealY = 445;

        // Outer glow/rays of seal
        ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(sealX, sealY, 38, 0, Math.PI * 2);
        ctx.stroke();

        // Main gold seal circle
        ctx.fillStyle = "#F59E0B";
        ctx.beginPath();
        ctx.arc(sealX, sealY, 30, 0, Math.PI * 2);
        ctx.fill();

        // Inside seal text/star icon
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 16px 'Kanit'";
        ctx.fillText("SUCCESS", sealX, sealY + 5);

        // 10. Date and Signature Fields
        ctx.fillStyle = "#4B5563";
        ctx.font = "14px 'Sarabun'";
        
        // Date
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('th-TH', options);
        ctx.fillText(`ให้ไว้ ณ วันที่ ${formattedDate}`, 180, 450);
        ctx.fillText("วันที่ออกเกียรติบัตร", 180, 480);
        ctx.beginPath();
        ctx.moveTo(80, 465);
        ctx.lineTo(280, 465);
        ctx.strokeStyle = "#D1D5DB";
        ctx.stroke();

        // Sign Authority
        ctx.fillStyle = "#6D28D9";
        ctx.font = "italic 16px 'Kanit'";
        ctx.fillText("ระบบตรวจข้อสอบ Library Quest", width - 180, 445);
        ctx.fillStyle = "#4B5563";
        ctx.font = "14px 'Sarabun'";
        ctx.fillText("ผู้ประสานการประเมินผลออนไลน์", width - 180, 480);
        ctx.beginPath();
        ctx.moveTo(width - 280, 465);
        ctx.lineTo(width - 80, 465);
        ctx.strokeStyle = "#D1D5DB";
        ctx.stroke();
    }

    // Download action
    downloadCertBtn.addEventListener("click", () => {
        const image = certCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `เกียรติบัตร_LibraryQuest_${studentNameValue}.png`;
        link.href = image;
        link.click();
    });

    // Print action
    printCertBtn.addEventListener("click", () => {
        const windowContent = '<!DOCTYPE html><html><head><title>พิมพ์เกียรติบัตร</title></head><body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background-color:#fff;">' +
            '<img src="' + certCanvas.toDataURL("image/png") + '" style="max-width:100%; max-height:100%; object-fit:contain;"/>' +
            '<script>window.onload = function() { window.print(); setTimeout(function() { window.close(); }, 500); }</script>' +
            '</body></html>';
        
        const printWindow = window.open("", "_blank");
        printWindow.document.open();
        printWindow.document.write(windowContent);
        printWindow.document.close();
    });

    // Smooth Scroll adjustments for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
