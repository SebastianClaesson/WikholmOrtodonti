/* ==========================================================================
   Wikholm Ortodonti — Scripts
   ========================================================================== */

(function () {
    'use strict';

    /* --- Translations --- */
    var translations = {
        sv: {
            navAbout: 'Om Invisalign',
            navClearCorrect: 'ClearCorrect',
            navBenefits: 'Fördelar',
            navDoctor: 'Dr. Wikholm',
            navClinics: 'Kliniker',
            navBlog: 'Nyheter',
            navFaq: 'FAQ',
            navContact: 'Kontakt',
            heroEyebrow: 'Wikholm Ortodonti',
            heroTitle: 'Ditt leende, <br><span class="text-accent">perfekt anpassat</span>',
            heroSubtitle: 'Dr. André Wikholm — specialist inom Invisalign och ClearCorrect. Moderna, diskreta och effektiva ortodontiska behandlingar för ett leende du kan vara stolt över.',
            heroBtn1: 'Hitta en klinik',
            heroBtn2: 'Läs mer om behandlingar',
            photoPlaceholder: 'Foto',
            aboutEyebrow: 'Behandling',
            aboutTitle: 'Vad är Invisalign?',
            aboutIntro: 'Invisalign är världens mest avancerade system för tandreglering med genomskinliga skenor — en modern, bekväm och nästan osynlig metod för att räta tänderna.',
            aboutCard1Title: 'Beprövad teknologi',
            aboutCard1Text: 'Över 17 miljoner patienter världen över har redan behandlats med Invisalign. Systemet bygger på avancerad 3D-teknik och skräddarsydda behandlingsplaner.',
            aboutCard2Title: 'Nästan osynlig',
            aboutCard2Text: 'De genomskinliga skenorna är diskreta och svåra att upptäcka. Du kan le med självförtroende under hela behandlingsperioden.',
            aboutCard3Title: 'Digital planering',
            aboutCard3Text: 'Med Invisaligns digitala verktyg kan du se ditt slutresultat redan innan behandlingen börjar — full transparens genom hela processen.',
            ccEyebrow: 'Alternativ behandling',
            ccTitle: 'ClearCorrect',
            ccIntro: 'Utöver Invisalign erbjuder vi även ClearCorrect — ett annat ledande system för genomskinlig tandreglering. Dr. Wikholm hjälper dig välja den behandling som passar dig bäst.',
            ccCard1Title: 'Flexibel behandling',
            ccCard1Text: 'ClearCorrect erbjuder flexibla behandlingsalternativ som kan anpassas efter dina specifika behov och budget, från enkla justeringar till mer omfattande korrigeringar.',
            ccCard2Title: 'Avancerat material',
            ccCard2Text: 'Tillverkade av ClearQuartz — ett flerskiktsmaterial som ger utmärkt passform, komfort och hållbarhet genom hela behandlingsperioden.',
            ccCard3Title: 'Straumann-kvalitet',
            ccCard3Text: 'ClearCorrect utvecklas av Straumann Group — en världsledare inom dental estetik och implantat, med över 60 års erfarenhet inom tandvårdsinnovation.',
            processEyebrow: 'Processen',
            processTitle: 'Hur fungerar behandlingen?',
            processStep1Title: 'Konsultation',
            processStep1Text: 'En grundlig undersökning och digital scanning av dina tänder för att skapa en personlig behandlingsplan.',
            processStep2Title: 'Behandlingsplan',
            processStep2Text: 'Med 3D-teknologi skapas en detaljerad plan som visar varje steg i din behandling — från start till slutresultat.',
            processStep3Title: 'Skräddarsydda skenor',
            processStep3Text: 'Du får en serie individuellt anpassade, genomskinliga skenor som gradvis flyttar dina tänder till rätt position.',
            processStep4Title: 'Ditt nya leende',
            processStep4Text: 'Regelbundna kontroller säkerställer att behandlingen följer planen. Resultatet — ett vackert, rakt leende.',
            benefitsEyebrow: 'Fördelar',
            benefitsTitle: 'Varför välja genomskinlig tandreglering?',
            benefitsIntro: 'Både Invisalign och ClearCorrect erbjuder en rad fördelar jämfört med traditionell tandreglering, speciellt för vuxna och ungdomar som vill ha en diskret behandling.',
            benefit1Title: 'Avtagbara skenor',
            benefit1Text: 'Ta enkelt ut skenorna när du äter, dricker eller borstar tänderna — för bättre munhygien under hela behandlingen.',
            benefit2Title: 'Bekvämt att bära',
            benefit2Text: 'Inga metalldelar som skaver. Skenorna är mjuka, släta och designade för maximal komfort.',
            benefit3Title: 'Färre besök',
            benefit3Text: 'Genomskinlig tandreglering kräver generellt färre klinikbesök än traditionell tandställning, vilket sparar tid i din vardag.',
            benefit4Title: 'Förutsägbara resultat',
            benefit4Text: 'Avancerad digital planering gör det möjligt att förutse och följa behandlingens framsteg med hög precision.',
            doctorEyebrow: 'Specialist',
            doctorTitle: 'Dr. André Wikholm',
            doctorIntro: 'Ortodontist med specialisering inom Invisalign och ClearCorrect. Dr. Wikholm är grundare av Wikholm Ortodonti och arbetar vid flera kliniker för att erbjuda tillgänglig specialistvård.',
            doctorBio: 'Med en passion för moderna ortodontiska metoder och ett starkt fokus på patientkomfort, hjälper Dr. Wikholm sina patienter att uppnå det leende de alltid önskat — med hjälp av den senaste teknologin inom genomskinlig tandreglering.',
            credLabel1: 'Specialisering',
            credValue1: 'Ortodonti, Invisalign &amp; ClearCorrect',
            credLabel2: 'Företag',
            credValue2: 'Wikholm Ortodonti',
            linkedinBtn: 'LinkedIn-profil',
            companyLinkedinBtn: 'Wikholm Ortodonti AB',
            doctorPhotoPlaceholder: 'Foto — Dr. Wikholm',
            clinicsEyebrow: 'Kliniker',
            clinicsTitle: 'Här hittar du oss',
            clinicsIntro: 'Dr. Wikholm tar emot patienter vid följande kliniker. Klicka för att besöka klinikens hemsida och boka en tid.',
            clinic1Name: 'Klinik 1',
            clinic1Address: 'Adress att uppdatera<br>Stad, Postnummer',
            clinic2Name: 'Klinik 2',
            clinic2Address: 'Adress att uppdatera<br>Stad, Postnummer',
            clinic3Name: 'Klinik 3',
            clinic3Address: 'Adress att uppdatera<br>Stad, Postnummer',
            clinicLink: 'Besök hemsida',
            blogEyebrow: 'Nyheter & tips',
            blogTitle: 'Aktuellt inom ortodonti',
            blogIntro: 'Artiklar, tips och nyheter om tandreglering, munhälsa och det senaste inom Invisalign och ClearCorrect.',
            blogCatGuide: 'Guide',
            blogCatTips: 'Tips',
            blogCatHealth: 'Munhälsa',
            blog1Date: '15 mars 2026',
            blog1Title: 'Invisalign vs ClearCorrect: Vilken behandling passar dig?',
            blog1Excerpt: 'En jämförelse av de två ledande systemen för genomskinlig tandreglering — material, process, kostnad och resultat.',
            blog2Date: '1 mars 2026',
            blog2Title: '5 tips för att få ut mest av din skenbehandling',
            blog2Excerpt: 'Praktiska råd som hjälper dig hålla behandlingen på rätt spår — från rengöring till bärtid och kontroller.',
            blog3Date: '14 februari 2026',
            blog3Title: 'Varför raka tänder handlar om mer än estetik',
            blog3Excerpt: 'Felställda tänder kan påverka tuggfunktion, munhygien och till och med huvudvärk. Läs om hälsofördelarna med ortodonti.',
            blogReadMore: 'Läs mer &rarr;',
            faqEyebrow: 'Vanliga frågor',
            faqTitle: 'Frågor & svar',
            faqIntro: 'Här hittar du svar på de vanligaste frågorna om Invisalign och ClearCorrect.',
            faq1Q: 'Hur länge pågår en behandling med Invisalign eller ClearCorrect?',
            faq1A: 'Behandlingstiden varierar beroende på hur mycket tänderna behöver flyttas. En typisk behandling tar mellan 6 och 18 månader. Under konsultationen får du en uppskattning baserad på din individuella situation.',
            faq2Q: 'Gör det ont att använda genomskinliga skenor?',
            faq2A: 'De flesta upplever ett lätt tryck eller obehag de första dagarna med en ny skena, vilket är helt normalt — det betyder att skenan arbetar. Obehaget är vanligtvis milt och övergående.',
            faq3Q: 'Hur ofta måste jag bära skenorna?',
            faq3A: 'För bästa resultat bör skenorna bäras 20–22 timmar per dag. Du tar ut dem när du äter, dricker (annat än vatten) och borstar tänderna.',
            faq4Q: 'Vad är skillnaden mellan Invisalign och ClearCorrect?',
            faq4A: 'Båda systemen använder genomskinliga, avtagbara skenor för att räta tänderna. Invisalign har funnits längst och har den största kliniska databasen. ClearCorrect, som utvecklas av Straumann Group, erbjuder ett konkurrenskraftigt alternativ med sitt ClearQuartz-material. Dr. Wikholm hjälper dig välja det system som bäst passar dina behov.',
            faq5Q: 'Kan alla behandlas med genomskinliga skenor?',
            faq5A: 'De flesta ortodontiska problem kan behandlas med Invisalign eller ClearCorrect, men inte alla fall är lämpliga. Mer komplexa bettfel kan kräva andra metoder. En konsultation med Dr. Wikholm ger dig svar på om genomskinlig tandreglering passar just dig.',
            faq6Q: 'Vad kostar en behandling?',
            faq6A: 'Kostnaden varierar beroende på behandlingens omfattning. Under en konsultation får du en tydlig kostnadsuppskattning. Många kliniker erbjuder delbetalning för att göra behandlingen mer tillgänglig.',
            faqSourceLink: 'Läs mer på invisalign.se &rarr;',
            ctaTitle: 'Redo att ta första steget?',
            ctaText: 'Boka en konsultation hos en av våra kliniker och ta reda på om Invisalign eller ClearCorrect är rätt för dig.',
            ctaBtn1: 'Se våra kliniker',
            ctaBtn2: 'Kontakta via LinkedIn',
            footerCopy: '\u00a9 2026 Wikholm Ortodonti. Alla rättigheter förbehållna.'
        },
        en: {
            navAbout: 'About Invisalign',
            navClearCorrect: 'ClearCorrect',
            navBenefits: 'Benefits',
            navDoctor: 'Dr. Wikholm',
            navClinics: 'Clinics',
            navBlog: 'News',
            navFaq: 'FAQ',
            navContact: 'Contact',
            heroEyebrow: 'Wikholm Ortodonti',
            heroTitle: 'Your smile, <br><span class="text-accent">perfectly aligned</span>',
            heroSubtitle: 'Dr. André Wikholm — Invisalign and ClearCorrect specialist. Modern, discreet, and effective orthodontic treatments for a smile you can be proud of.',
            heroBtn1: 'Find a clinic',
            heroBtn2: 'Learn about treatments',
            photoPlaceholder: 'Photo',
            aboutEyebrow: 'Treatment',
            aboutTitle: 'What is Invisalign?',
            aboutIntro: 'Invisalign is the world\'s most advanced clear aligner system — a modern, comfortable, and nearly invisible method to straighten your teeth.',
            aboutCard1Title: 'Proven technology',
            aboutCard1Text: 'Over 17 million patients worldwide have been treated with Invisalign. The system uses advanced 3D technology and customized treatment plans.',
            aboutCard2Title: 'Nearly invisible',
            aboutCard2Text: 'The clear aligners are discreet and hard to notice. You can smile with confidence throughout your entire treatment.',
            aboutCard3Title: 'Digital planning',
            aboutCard3Text: 'With Invisalign\'s digital tools, you can see your final result before treatment even begins — full transparency throughout the process.',
            ccEyebrow: 'Alternative treatment',
            ccTitle: 'ClearCorrect',
            ccIntro: 'In addition to Invisalign, we also offer ClearCorrect — another leading clear aligner system. Dr. Wikholm helps you choose the treatment that suits you best.',
            ccCard1Title: 'Flexible treatment',
            ccCard1Text: 'ClearCorrect offers flexible treatment options that can be tailored to your specific needs and budget, from simple adjustments to more comprehensive corrections.',
            ccCard2Title: 'Advanced material',
            ccCard2Text: 'Made from ClearQuartz — a multi-layer material that provides excellent fit, comfort, and durability throughout the treatment period.',
            ccCard3Title: 'Straumann quality',
            ccCard3Text: 'ClearCorrect is developed by Straumann Group — a world leader in dental aesthetics and implants, with over 60 years of experience in dental innovation.',
            processEyebrow: 'The process',
            processTitle: 'How does the treatment work?',
            processStep1Title: 'Consultation',
            processStep1Text: 'A thorough examination and digital scan of your teeth to create a personalized treatment plan.',
            processStep2Title: 'Treatment plan',
            processStep2Text: 'Using 3D technology, a detailed plan is created showing every step of your treatment — from start to finish.',
            processStep3Title: 'Custom aligners',
            processStep3Text: 'You receive a series of custom-made, clear aligners that gradually move your teeth into the correct position.',
            processStep4Title: 'Your new smile',
            processStep4Text: 'Regular check-ups ensure your treatment stays on track. The result — a beautiful, straight smile.',
            benefitsEyebrow: 'Benefits',
            benefitsTitle: 'Why choose clear aligners?',
            benefitsIntro: 'Both Invisalign and ClearCorrect offer numerous advantages over traditional braces, especially for adults and teens who want a discreet treatment.',
            benefit1Title: 'Removable aligners',
            benefit1Text: 'Easily remove your aligners when eating, drinking, or brushing — for better oral hygiene throughout treatment.',
            benefit2Title: 'Comfortable to wear',
            benefit2Text: 'No metal parts that irritate. The aligners are smooth, soft, and designed for maximum comfort.',
            benefit3Title: 'Fewer visits',
            benefit3Text: 'Clear aligner treatment generally requires fewer clinic visits than traditional braces, saving time in your daily life.',
            benefit4Title: 'Predictable results',
            benefit4Text: 'Advanced digital planning makes it possible to predict and monitor treatment progress with high precision.',
            doctorEyebrow: 'Specialist',
            doctorTitle: 'Dr. André Wikholm',
            doctorIntro: 'Orthodontist specializing in Invisalign and ClearCorrect. Dr. Wikholm is the founder of Wikholm Ortodonti and works at multiple clinics to provide accessible specialist care.',
            doctorBio: 'With a passion for modern orthodontic methods and a strong focus on patient comfort, Dr. Wikholm helps his patients achieve the smile they\'ve always wanted — using the latest clear aligner technology.',
            credLabel1: 'Specialization',
            credValue1: 'Orthodontics, Invisalign &amp; ClearCorrect',
            credLabel2: 'Company',
            credValue2: 'Wikholm Ortodonti',
            linkedinBtn: 'LinkedIn profile',
            companyLinkedinBtn: 'Wikholm Ortodonti AB',
            doctorPhotoPlaceholder: 'Photo — Dr. Wikholm',
            clinicsEyebrow: 'Clinics',
            clinicsTitle: 'Where to find us',
            clinicsIntro: 'Dr. Wikholm sees patients at the following clinics. Click to visit the clinic\'s website and book an appointment.',
            clinic1Name: 'Clinic 1',
            clinic1Address: 'Address to update<br>City, Postal code',
            clinic2Name: 'Clinic 2',
            clinic2Address: 'Address to update<br>City, Postal code',
            clinic3Name: 'Clinic 3',
            clinic3Address: 'Address to update<br>City, Postal code',
            clinicLink: 'Visit website',
            blogEyebrow: 'News & tips',
            blogTitle: 'Latest in orthodontics',
            blogIntro: 'Articles, tips and news about orthodontic treatment, oral health, and the latest in Invisalign and ClearCorrect.',
            blogCatGuide: 'Guide',
            blogCatTips: 'Tips',
            blogCatHealth: 'Oral health',
            blog1Date: 'March 15, 2026',
            blog1Title: 'Invisalign vs ClearCorrect: Which treatment is right for you?',
            blog1Excerpt: 'A comparison of the two leading clear aligner systems — materials, process, cost, and results.',
            blog2Date: 'March 1, 2026',
            blog2Title: '5 tips to get the most out of your aligner treatment',
            blog2Excerpt: 'Practical advice to keep your treatment on track — from cleaning to wear time and check-ups.',
            blog3Date: 'February 14, 2026',
            blog3Title: 'Why straight teeth are about more than aesthetics',
            blog3Excerpt: 'Misaligned teeth can affect chewing, oral hygiene, and even cause headaches. Learn about the health benefits of orthodontics.',
            blogReadMore: 'Read more &rarr;',
            faqEyebrow: 'Common questions',
            faqTitle: 'FAQ',
            faqIntro: 'Find answers to the most common questions about Invisalign and ClearCorrect.',
            faq1Q: 'How long does Invisalign or ClearCorrect treatment take?',
            faq1A: 'Treatment duration varies depending on how much your teeth need to move. A typical treatment takes between 6 and 18 months. During the consultation, you\'ll receive an estimate based on your individual situation.',
            faq2Q: 'Does wearing clear aligners hurt?',
            faq2A: 'Most people experience mild pressure or discomfort during the first few days with new aligners, which is completely normal — it means the aligners are working. The discomfort is usually mild and temporary.',
            faq3Q: 'How often do I need to wear the aligners?',
            faq3A: 'For the best results, aligners should be worn 20–22 hours per day. You remove them when eating, drinking (anything other than water), and brushing your teeth.',
            faq4Q: 'What is the difference between Invisalign and ClearCorrect?',
            faq4A: 'Both systems use clear, removable aligners to straighten teeth. Invisalign has been around the longest and has the largest clinical database. ClearCorrect, developed by Straumann Group, offers a competitive alternative with its ClearQuartz material. Dr. Wikholm helps you choose the system that best suits your needs.',
            faq5Q: 'Can everyone be treated with clear aligners?',
            faq5A: 'Most orthodontic issues can be treated with Invisalign or ClearCorrect, but not all cases are suitable. More complex bite problems may require other methods. A consultation with Dr. Wikholm will determine if clear aligners are right for you.',
            faq6Q: 'How much does treatment cost?',
            faq6A: 'The cost varies depending on the scope of treatment. During a consultation, you\'ll receive a clear cost estimate. Many clinics offer payment plans to make treatment more accessible.',
            faqSourceLink: 'Learn more at invisalign.se &rarr;',
            ctaTitle: 'Ready to take the first step?',
            ctaText: 'Book a consultation at one of our clinics and find out if Invisalign or ClearCorrect is right for you.',
            ctaBtn1: 'See our clinics',
            ctaBtn2: 'Contact via LinkedIn',
            footerCopy: '\u00a9 2026 Wikholm Ortodonti. All rights reserved.'
        }
    };

    /* --- DOM References --- */
    var navbar = document.getElementById('navbar');
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');

    /* --- Navbar scroll effect --- */
    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    /* --- Mobile nav toggle --- */
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    /* --- FAQ Accordion --- */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.closest('.faq-item');
            var wasOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
                openItem.classList.remove('open');
            });

            // Toggle clicked
            if (!wasOpen) {
                item.classList.add('open');
            }
        });
    });

    /* --- Scroll reveal animation --- */
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.about-card, .process-step, .benefit-item, .clinic-card, .blog-card').forEach(function (el, i) {
            el.style.transitionDelay = (i % 4) * 0.1 + 's';
            observer.observe(el);
        });
    } else {
        document.querySelectorAll('.about-card, .process-step, .benefit-item, .clinic-card, .blog-card').forEach(function (el) {
            el.classList.add('visible');
        });
    }

    /* --- Language Switcher --- */
    function setLanguage(lang) {
        var t = translations[lang];
        if (!t) return;

        document.documentElement.lang = lang;
        localStorage.setItem('wikholm-lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('.lang-btn');
        if (btn) {
            setLanguage(btn.getAttribute('data-lang'));
        }
    });

    /* --- Dark Mode --- */
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('wikholm-theme', theme);
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            var sunIcon = btn.querySelector('.icon-sun');
            var moonIcon = btn.querySelector('.icon-moon');
            if (sunIcon && moonIcon) {
                sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
                moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
            }
        });
    }

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('.theme-toggle');
        if (btn) {
            var current = document.documentElement.getAttribute('data-theme') || 'light';
            setTheme(current === 'dark' ? 'light' : 'dark');
        }
    });

    /* --- Initialize --- */
    var savedTheme = localStorage.getItem('wikholm-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    var savedLang = localStorage.getItem('wikholm-lang') || 'sv';
    setLanguage(savedLang);

})();
