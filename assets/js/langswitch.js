class Langswitch {
    constructor() {
        this.switcher = {
            "en": {
            "about": "About me",
            "study": "Study, cources",
            "experience": "Work experiance",
            "code": "Completed work example",
            "h1": "Max Khotsin: CV",
            "about-main": "At first, I would like to tell you about me and share some thoughts with you:",
            "about-text1": `<img src="./assets/img/About_photo.jpg" alt="Фото автора" class="author_photo">I'm 29 years old, working for The Embassy of Hungary, in consular section. For a long time I worked in spheres, crossed to visa information support, tried myself in different ways, searched and learned a lot of different information.`,
            "about-text2": "On every job you faced a roof, when you you don't need to learn new and job becoming just mechanical and lack of initiative, so I decided to study for IT, with job changing perspective.",
            "about-text3": "I analized huge mass of information about direction of growth and decided to study <strong>Front-end</strong> development. I've been offered to study the <em>Rolling Scopes School</em> from my friend, which successfully graduated that school couple years ago and working as <strong>Front-end/Back-end development</strong>.",
            "study-key": "Study, courses(key skills):",
            "kse1": "Speaking with native speakers",
            "kse2": "Relaxed atmosphere",
            "kse3": "Google classroom for doing homework",
            "kse4": "2018 - current - KickStart English(B2 level)",
            "iup-title": "2010-2015 - Private insitute of management and business(Economy and management)",
            "iup-text1": "Fundamentals of economy",
            "iup-text2": "Fundamentals of management approach in company",
            "iup-text3": "Management",
            "iup-text4": "Company resourses management",
            "work-exp-title": "Work experiance(key duties):",
            "emb-title": "2018 - current - Embassy of Hungary",
            "emb-text1": "Accept, processing visa applications",
            "emb-text2": "Inform customers the rules of getting visa",
            "emb-text3": "Processing incoming e-mails, contact with diplomatic missions from different countries",
            "armtech-title": "2017-2018 - ArmTech",
            "armtech-text1": "Organization of cargo assembly",
            "armtech-text2": "Quality check of goods",
            "armtech-text3": "Sort goods by quantity and quality",
            "vfs-title": "2015 - 2017 - VFS Global",
            "vfs-text1": "Accept, processing visa applications",
            "vfs-text2": "Send visa applications to Embassies",
            "vfs-text3": "Work with courier services",
            "vfs-text4": "Supply whole Belarussian offices with everything required",
            "contacts": "Contacts:",
            },
            "ru": {
                "about": "О себе",
                "study": "Учёба, курсы",
                "experience": "Опыт работы",
                "code": "Пример выполненной работы",
                "h1": "Максим Хотин: резюме",
                "about-main": "Для начала, хотелось бы немного рассказать о себе и поделиться некоторыми мыслями:",
                "about-text1": '<img src="./assets/img/About_photo.jpg" alt="Фото автора" class="author_photo">Мне 28 лет, работаю в Посольстве Венгрии, в консульском отделе. Долгое время работал в сферах, которые пересекаются с визовой и информационной поддержкой, пробовал себя в разных направлениях, искал и изучал много различной информации.',
                "about-text2": "На каждой работе сталкиваешься с потолком, в котором уже не требуется изучение нового, а работа становится лишь механической и безинициативной, в результате чего было принято решение учиться в IT, с перспективой смены места работы.",
                "about-text3": "Мною было проанализировано большое количество информации о направлениях развития и принято решение учиться в направлении <strong>Front-End</strong> разработки. Пройти обучение в <em>Rolling Scopes School</em> мне предложил друг, который успешно завершил данную школу несколько лет назад и работающий по направлению <strong>Front-end/Back-end разработка</strong>.",
                "study-key": "Учёба, курсы(ключевые навыки):",
                "kse1": "Общение c носителем языка",
                "kse2": "Непринуждённая обстановка",
                "kse3": "Google classroom для выполнения заданий школы",
                "kse4": "2018 - по настоящее время - KickStart English(B2 level)",
                "iup-title": "2010-2015 - Частный институт Управления и Предпринимательства(Экономика и управление)",
                "iup-text1": "Основы экономики",
                "iup-text2": "Основы управленческого подхода на предприятии",
                "iup-text3": "Менеджмент",
                "iup-text4": "Управление ресурсами предприятия",
                "work-exp-title": "Опыт работы(ключевые обязанности):",
                "emb-title": "2018 - по настоящее время - Посольство Венгрии",
                "emb-text1": "Приём, обработка визовых заявлений",
                "emb-text2": "Информирование клиентов по правилам получения виз",
                "emb-text3": "Обработка входящих писем, общение с представительствами дип. миссий различных стран",
                "armtech-title": "2017 - 2018 АрмТек",
                "armtech-text1": "Организация сборки грузов",
                "armtech-text2": "Проверка качества товара",
                "armtech-text3": "Сортировка товара по количеству и качеству",
                "vfs-title": "2015 - 2017 ВиЭфЭс Глобал",
                "vfs-text1": "Приём, обработка визовых заявлений",
                "vfs-text2": "Отправка визовых заявлений в Посольства",
                "vfs-text3": "Работа с курьерскими службами",
                "vfs-text4": "Снабжение всех офисов беларуси всем необходимым",
                "contacts": "Контакты для связи:",
            },
        };
        this.textElems = [...document.querySelectorAll('[data-switcher]')];
        this.langSwitchers = [...document.querySelectorAll('[data-switcher-switch]')];
        this.switchLang = this._switchLang.bind(this);
        this.init();
    }

    init() {
        this.langSwitchers.forEach((el) => {
            el.addEventListener('click', this.switchLang);
        });
    };

    _switchLang(event) {
        this.langSwitchers.forEach((el) => {
            el.classList.remove('active-lang');
        });

        let target = event.target;
        target.classList.add('active-lang');

        let lang = target.getAttribute('data-switcher-switch');
        for(let textElem of this.textElems) {
            let key = textElem.getAttribute('data-switcher');
            let value = this.switcher[lang][key];
            textElem.innerHTML = value;
        };
    };

}

new Langswitch();