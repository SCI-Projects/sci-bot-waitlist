/**
 * SCI-BOT Landing Page Logic & Bilingual Engine
 * Faculty of Science, Ain Shams University
 */

// Bilingual Dictionaries (Arabic default + English)
const translations = {
  ar: {
    // Page SEO Meta
    pageTitle: 'SCI-BOT — الرفيق الأكاديمي الذكي لكلية العلوم | جامعة عين شمس',
    pageDescription: 'SCI-BOT هو المساعد الأكاديمي الذكي المخصص لطلاب وأعضاء هيئة التدريس بقسم علوم الحاسب بكلية العلوم - جامعة عين شمس. يفهم مقررات الكلية، الشيتات، والمحاضرات مع حماية قصوى للخصوصية والأمان.',

    // Navigation
    brandTitle: 'SCI-BOT',
    brandSubtitle: 'قسم علوم الحاسب — كلية العلوم، جامعة عين شمس',
    navFeatures: 'الميزات',
    navSecurity: 'الأمان والخصوصية',
    navDemo: 'تجربة سريعة',
    navTeam: 'فريق العمل',
    navArticle: 'وثيقة المشروع',
    navContact: 'اقتراح ميزة',
    comingSoonPill: 'قريباً لطلاب حاسب علوم عين شمس',

    // Hero
    heroTag: 'الرفيق الذكي لطلاب علوم الحاسب والبرمجة',
    heroAsuTag: 'حاسب آلي — علوم عين شمس',
    heroTitle: 'مش شات جي بي تي عادي..<br><span class="gradient-text">ده رفيقك في علوم الحاسب</span> اللي فاهم كليتك!',
    heroPunchline: '«عشان ماتحتاجش تسأل جروب الدفعة على الواتساب الساعة 3 الفجر!» ☕',
    heroDesc: 'أول روبوت ذكاء اصطناعي أكاديمي يفهم مقررات علوم الحاسب بعين شمس، دكاترة القسم، وشيتات الخوارزميات والـ Data Structures. مش مجرد توليد كود جاهز.. ده بيشرحلك الـ Logic خطوة بخطوة ويجهزك لمناقشة المشاريع والفاينال بأمان تام مع بريدك الجامعي.',
    btnTryDemo: '🚀 جرب تسأله تجريبياً',
    btnDownloadDoc: '📄 قراءة وتحميل وثيقة المشروع',
    btnSuggestHero: '💡 اقترح ميزة جديدة',
    credText: 'تسجيل الدخول مشروط بالبريد الجامعي المعتمد:',

    // Floating badges
    floatChat: '«شرحتلك الـ Recursion ومسألة شيت الخوارزميات!» 💻',
    floatPrivacy: '🔒 كودك ومحادثتك خاصة 100% ومش مراقبة',

    // Coming Soon Banner
    csTitle: '⏳ ميعاد الإطلاق التجريبي: 15 ديسمبر 2026!',
    csDesc: 'النظام حالياً في مراحل التطوير المتقدمة والاختبار الميداني ضمن مشروعات تخرج قسم علوم الحاسب لعام 2026. العد التنازلي بدأ حتى 15 ديسمبر.. جهز إيميلك الجامعي ومفتاح الـ API اللي بتفضله!',
    csDays: 'أيام',
    csHours: 'ساعات',
    csMinutes: 'دقائق',
    csSeconds: 'ثوانٍ',

    // Reality Check
    rcTag: 'المقارنة الصادقة',
    rcTitle: 'ليه الذكاء الاصطناعي العام مش كفاية لطلاب علوم الحاسب؟',
    rcDesc: 'النماذج العامة شاطرة في كتابة كود سطحي، بس أول ما تسألها عن شيت مادتك أو طريقة دكتورك بتعترف إنها "في كوكب تاني":',
    genAiTitle: 'الذكاء الاصطناعي العام (ChatGPT العادي)',
    genAiBadge: 'مش فاهم كليتك ❌',
    genItem1: '<strong>"مين دكتور مادة الـ Data Structures والـ Algorithms؟"</strong> — عذراً، لا أملك معلومات عن كليتك ولا أعرف مقررات قسمك!',
    genItem2: '<strong>"حللي شيت البرمجة ده فوراً"</strong> — بيرميلك كود كامل، ولما الدكتور يسألك في المناقشة "عملت الـ Pointer ده ليه؟" تقف محتار.',
    genItem3: '<strong>"مقررات قسم علوم الحاسب"</strong> — بيقترح مناهج عشوائية ملهاش أي علاقة بلائحة وسكاشن الكلية.',
    genItem4: '<strong>الخصوصية</strong> — بياناتك وأكوادك ومحادثاتك قد تُستخدم في تدريب النماذج العامة دون عزل كامل.',

    sciBotTitle: 'SCI-BOT المخصص لحاسب علوم عين شمس',
    sciBotBadge: 'ابن القسم وفاهم كودك ✅',
    sciItem1: '<strong>عارف دكاترة ومقررات علوم الحاسب:</strong> يربط الحلول بالمصطلحات وطريقة الشرح المعتمدة بمحاضرات القسم.',
    sciItem2: '<strong>توجيه برمجي وسقراطي ذكي:</strong> تلميحات بالـ Pseudo-code وشرح التعقيد الزمني O(n) عشان تفهم الكود بجد.',
    sciItem3: '<strong>قاعدة معرفة الكلية والشيتات:</strong> مطلع على مذكرات المحاضرات وسكاشن المعمل المعتمدة بقسمك.',
    sciItem4: '<strong>خصوصية فولاذية وعزل بيانات:</strong> محادثتك وأكوادك سرية تماماً ولا تُستخدم أبداً للدرجات أو المراقبة.',

    // Features Section
    featTag: 'حزمة القدرات لمهندسي البرمجيات',
    featTitle: 'ميزات صُممت خصيصاً لمجتمع علوم الحاسب والرياضيات',
    featDesc: 'من أول كود C++ في الفرقة الأولى وحتى سورس كود مشروع التخرج.. SCI-BOT معاك سطر بسطر:',

    f1Title: 'المساعد السقراطي لمقررات الحاسب',
    f1Desc: 'بدل ما يرميلك الكود جاهز وتتصدم في مناقشة المشروع أو الفاينال، بيمشي معاك خطوة بخطوة بالأسئلة والتلميحات لحد ما تستوعب الخوارزمية وتكتبها بإيدك.',
    f1Tag: 'فهم حقيقي وكود نظيف',

    f2Title: 'مساعد الأكواد والـ Debugging الفوري',
    f2Desc: 'وداعاً للـ Segmentation Fault و Memory Leaks! دعم عميق لأكواد C++، Python، هياكل البيانات، والخوارزميات مع توضيح سبب الخطأ في الـ Terminal وكيفية حله.',
    f2Tag: 'C++ & Python & Algorithms',

    f3Title: 'مراجعة التقارير العلمية والـ Documentation',
    f3Desc: 'مراجعة الـ Software Architecture، وتدقيق تقارير مشاريع التخرج، وصياغة الـ README ومستندات LaTeX ومخططات UML الأكاديمية بدقة متناهية.',
    f3Tag: 'LaTeX & Project Docs',

    f4Title: 'قاعدة المعرفة الذكية لمقررات القسم (RAG)',
    f4Desc: 'ربط مباشر بسلايدات وشيتات دكاترة الحاسب، مع تصنيف ذكي يفصل بين أكواد وتلخيصات الطلاب المعتمدة وبين المحاضرات الرسمية.',
    f4Tag: 'Official vs Community RAG',

    f5Title: 'الوعي بالتقويم الأكاديمي لطلاب الحاسب',
    f5Desc: 'يتأقلم مع فترتك الحالية: تجهيز بيئة التطوير في البداية، مراجعات خوارزميات الميدتيرم، دعم ضغط المشاريع، واستشارات معماريات مشروع التخرج.',
    f5Tag: 'مواكب لمراحل الترم',

    f6Title: 'دليل أساتذة القسم ومجالاتهم البحثية',
    f6Desc: 'معلومات معتمدة عن دكاترة ومعيدي علوم الحاسب، اهتماماتهم البحثية (AI, Networks, Cyber, SE)، والمقررات التي يدرسونها.',
    f6Tag: 'CS Faculty Directory',

    f7Title: 'الدعم النفسي وتنظيم الوقت وضغط المشاريع',
    f7Desc: 'مضغوط بين تسليم الـ Sprint وشيت الخوارزميات؟ بيساعدك تفكك المهام البرمجية الكبيرة لخطوات صغيرة واقعية بدون إحباط أو توتر.',
    f7Tag: 'Sprint & Study Balance',

    f8Title: 'شغّل الذكاء الاصطناعي اللي يريحك (Gemini, Claude, GPT)',
    f8Desc: 'مش هنجبرك على موديل واحد! تقدر تستخدم البوت بمفتاحك الخاص وتربطه بالموديل المفضل ليك: Google Gemini، أو Groq فائق السرعة، أو Claude للكتابة، أو DeepSeek و OpenAI بكل سهولة وبدون أي قيود.',
    f8Tag: 'مرونة تامة بدون إجبار على موديل',

    // Security Section
    secTag: 'الخصوصية والأمان أولاً',
    secTitle: 'بياناتك وأكوادك في أمان تام.. الخصوصية مبنية في صميم النظام',
    secDesc: 'حرصنا في SCI-BOT ألا يكون مجرد أداة ذكية، بل قلعة أمان تحترم خصوصية الطالب بالكامل:',

    s1Title: 'عزل تام للمحادثات ومسودات الكود',
    s1Desc: 'محادثاتك وأكوادك ومسودات مشاريعك مفصولة ومحمية؛ لا يمكن لطالب آخر رؤيتها ولا تضاف للمعرفة العامة بدون إذنك.',
    s1High: 'كودك ومحادثاتك ملك لك وحدك',

    s2Title: 'ممنوع المراقبة أو تقييم الدرجات',
    s2Desc: 'لا يمكن استخدام المحادثات كأداة لمراقبة الطلاب أو خصم درجات في المعمل. المنصة مساحة آمنة لتسأل عن أي Bug براحتك.',
    s2High: 'اسأل عن أي خطأ برمجى دون خوف من التقييم',

    s3Title: 'إحصائيات مجردة فقط للأساتذة (Zero-Exposure)',
    s3Desc: 'عضو هيئة التدريس يرى فقط الإحصائيات العامة (مثال: 70% من الطلاب يواجهون صعوبة في شجرة AVL أو الـ Dynamic Programming) ولا يظهر اسم أي طالب نهائياً.',
    s3High: 'تحسين التدريس دون كشف هوية الطالب',

    s4Title: 'حذف حقيقي وشامل للبيانات',
    s4Desc: 'عندما تقرر مسح محادثتك، تُحذف فعلياً من قواعد البيانات ومتجهات الـ Vector، وليس مجرد إخفاء شكلي في الواجهة.',
    s4High: 'True Deletion — لا توجد نسخ غير معلنة',

    s5Title: 'حماية مفاتيح الـ API والتشفير',
    s5Desc: 'مفاتيح الـ API التي تدخلها لا تُحفظ كنصوص مقروءة ولا تظهر في ملفات الـ Logs وتظل تحت إدارتك الآمنة في المتصفح أو مشفرة.',
    s5High: 'تشفير كامل لمفاتيح الـ API الخاصة بك',

    s6Title: 'حماية من حقن الأوامر (Injection Defense)',
    s6Desc: 'يتم عزل أي مستند أو سورس كود يتم رفعه وتصنيفه كمدخل غير موثوق به لمنع أي أوامر خبيثة من اختراق سياق النظام والذكاء الاصطناعي.',
    s6High: 'Multi-layer Context Protection',

    // Interactive Demo
    demoTag: 'محاكاة تفاعلية سريعة',
    demoTitle: 'شوف بنفسك SCI-BOT بيرد إزاي على أسئلة طلاب الحاسب',
    demoDesc: 'اضغط على أي من المواقف البرمجية والدراسية وشوف الرد الذكي والأكاديمي:',
    demoOnline: 'متصل ومستعد لمساعدتك في الكود',
    demoFacultyBadge: 'علوم حاسب - عين شمس',
    demoPresetsLabel: 'اختر سيناريو من واقع حياة طالب علوم الحاسب:',

    preset1: '1. شيت الـ Data Structures والـ AVL Tree 🌲',
    preset2: '2. كود الـ Knapsack والـ Dynamic Programming 💻',
    preset3: '3. هل الكود والمحادثة مراقبة من الأساتذة؟ 🔒',
    preset4: '4. مضغوط بين تسليم المشروع والفاينال ⏱️',

    // Team Section
    teamTag: 'فريق العمل والإشراف',
    teamTitle: 'صُنِع بكل فخر في كلية العلوم — جامعة عين شمس',
    teamDesc: 'مشروع تخرج نوعي يجمع بين الخبرة الأكاديمية الرائدة والتنفيذ البرمجي المتقن:',

    supRole: 'المشرف الأكاديمي على المشروع',
    supName: 'دكتور / محمد هاشم',
    supEn: 'Doctor Mohamed Hashim — Project Supervisor',
    supDesc: 'الإشراف العلمي وتوجيه الرؤية الأكاديمية لمواءمة المشروع مع معايير الكلية وخدمة المنظومة التعليمية.',

    leadRole: 'القائد التقني للمشروع',
    leadName: 'م.م / محمد مصطفى',
    leadEn: 'TA Mohamed Mostafa — Technical Lead',
    leadDesc: 'القيادة التقنية وهندسة معمارية الأنظمة وتوجيه فريق التطوير البرمجي وتطوير آليات الـ RAG.',

    devRole: 'مطور التطبيقات الأول',
    devName: 'م.م / إيهاب رمضان',
    devEn: 'TA Ihab Ramadan — Senior Application Developer',
    devDesc: 'تطوير وهندسة تطبيقات الهواتف الذكية (Mobile App) وربطها بالواجهات البرمجية وتوفير تجربة مستخدم سلسة على مختلف المنصات.',

    dirRole: 'مديرة الإدارة',
    dirName: 'م.م / الاء سيد عمر',
    dirEn: 'TA Alaa Sayed Omar — Management Director',
    dirDesc: 'إدارة المشروع وتنسيق سير العمل بين الإشراف الأكاديمي والفريق التقني وفريق التطوير.',

    advRole: 'مستشار النظام والاستشارات',
    advName: 'م.م / هاجر محمود',
    advEn: 'TA Hager Mahmoud — System Advisor & Consultant',
    advDesc: 'تقديم الاستشارات الهندسية والتحليلية ومراجعة تكامل واجهات وتجربة المستخدم الأكاديمية.',

    studRole: 'فريق طلاب مشروع التخرج',
    studHeader: 'مهندسو التطوير من طلاب البكالوريوس المبدعين:',
    studNote: '🎓 SCI-BOT هو مشروع تخرج بقسم علوم الحاسب، يعمل على تطويره مجموعة من طلاب البكالوريوس تحت إشراف ومتابعة الفريق الأكاديمي والتقني المذكور أعلاه.',
    stud1: 'أحمد أشرف',
    stud1En: 'Ahmed Ashraf',
    stud1Role: 'تطوير وهندسة برمجيات',
    stud2: 'محمد شتا',
    stud2En: 'Mohamed Sheta',
    stud2Role: 'تطوير وهندسة برمجيات',
    stud3: 'يوسف',
    stud3En: 'Yousef',
    stud3Role: 'تطوير وهندسة برمجيات',

    // Download Section
    dlTitle: 'وثيقة المشروع الشاملة (Executive Summary & Guide)',
    dlDesc: 'هل ترغب في قراءة أو طباعة الدليل المفصل للمشروع؟ قمنا بإعداد مقال شامل يغطي كافة النقاط الـ 38 المذكورة في التوصيف التقني ومعمارية النظام والأمان.',
    btnReadArticle: '📖 قراءة الوثيقة أونلاين',
    btnDownloadArticle: '⬇️ تحميل الملف بصيغة HTML/PDF',
    docBadgePill: 'جاهز للتحميل بصيغة PDF و HTML',
    docMockupTitle: 'SCI-BOT Project Whitepaper',
    docMockupDesc: '38 فصلاً تغطي المفهوم، الهيكل التقني، والخصوصية',

    // Suggestion & Feedback Section
    sugTitle: 'عندك فكرة أو ميزة حابب تشوفها في البوت؟',
    sugDesc: 'رأيكم ومقترحاتكم هي حجر الأساس لتطوير SCI-BOT قبل الإطلاق التجريبي. شاركنا أفكارك واحتياجاتك الأكاديمية بسهولة:',
    sugFormBadge: '🌟 القناة الرسمية الأساسية للمقترحات',
    sugFormTitle: 'نموذج الاقتراحات السريع (Google Form)',
    sugFormDesc: 'أسرع وأسهل وسيلة لمشاركة أفكارك، ترشيح ميزات جديدة، أو طلب شيتات ومذكرات لموادك الدراسية — يستغرق دقيقة واحدة دون الحاجة لأي بريد إلكتروني!',
    btnOpenForm: '📝 افتح نموذج الاقتراحات الرسمي',
    sugOrEmail: 'أو كخيار بديل: التواصل المباشر بالبريد الإلكتروني',
    sugEmailTag: 'خيار إضافي للمراسلات المفصلة',
    sugEmailDesc: 'إذا كنت تفضل المراسلة المباشرة أو لديك استفسار أكاديمي أو تقني مفصل، يسعدنا تواصلك مع القائد التقني للمشروع:',
    sugNameLabel: 'اسمك / تخصصك (اختياري):',
    sugNamePlaceholder: 'مثال: أحمد - حاسب آلي وإحصاء',
    sugMsgLabel: 'الميزة المقترحة أو الاستفسار:',
    sugPlaceholder: 'مثلاً: حابب البوت يضيف شرح عملي لمكتبة معينة في بايثون، أو مراجعة أكواد الـ Git، أو شيتات مادة معينة...',
    btnSendMail: '✉️ إرسال الاقتراح بالبريد الإلكتروني',

    // Modals
    modalArticleTag: 'وثيقة المشروع',
    modalArticleTitle: 'وثيقة المشروع والميزات الشاملة',
    btnOpenNewTab: '↗ فتح في نافذة مستقلة',
    btnDownloadFullDoc: '⬇️ تحميل الوثيقة كاملة',
    modalSugTag: '💡 اقتراح ميزة أو استفسار',
    modalSugHeader: 'شاركنا أفكارك لتطوير SCI-BOT',
    modalSugSub: 'اختر الطريقة الأنسب لك لمشاركة مقترحاتك مع فريق العمل:',
    btnOpenFormModal: '📝 فتح نموذج الاقتراحات السريع (مُوصى به)',
    modalFormHint: '⚡ يستغرق دقيقة واحدة — أسهل وأسرع وسيلة دون فتح برامج الإيميل',
    sugOrEmailOption: 'أو كخيار بديل: المراسلة عبر البريد',
    btnEmailModal: '✉️ مراسلة م.م / محمد مصطفى بالإيميل',

    // Footer
    footerQuote: '«صُنع بحب وشغف وكميات محترمة من القهوة في علوم عين شمس ☕»',
    footerCopy: '© 2026 مشروع SCI-BOT. جميع الحقوق محفوظة لكلية العلوم — جامعة عين شمس.',
    footerTeamNote: 'الإشراف الأكاديمي: د. محمد هاشم | القائد التقني: م.م / محمد مصطفى | مطور التطبيقات الأول: م.م / إيهاب رمضان | مديرة الإدارة: م.م / الاء سيد عمر | المستشار: م.م / هاجر محمود'
  },

  en: {
    // Page SEO Meta
    pageTitle: 'SCI-BOT — Academic AI Companion for Computer Science | Ain Shams University',
    pageDescription: 'SCI-BOT is the specialized academic AI assistant for Computer Science students and faculty at Faculty of Science, Ain Shams University. Understands coursework, problem sheets, and lectures with maximum privacy.',

    // Navigation
    brandTitle: 'SCI-BOT',
    brandSubtitle: 'Computer Science — Faculty of Science, Ain Shams University',
    navFeatures: 'Features',
    navSecurity: 'Security & Privacy',
    navDemo: 'Live Demo',
    navTeam: 'Our Team',
    navArticle: 'Full Document',
    navContact: 'Suggest Feature',
    comingSoonPill: 'Coming Soon for ASU CS Students',

    // Hero
    heroTag: 'AI Companion for Computer Science Students',
    heroAsuTag: 'Computer Science - Ain Shams',
    heroTitle: 'Not Just Another Generic AI..<br><span class="gradient-text">Your Computer Science Companion</span> That Truly Knows Your Faculty!',
    heroPunchline: '"So you don\'t have to desperately ping the batch WhatsApp group at 3 AM!" ☕',
    heroDesc: 'The first academic AI assistant tailored for Computer Science students at Faculty of Science, ASU. Understands algorithms, data structures, professor lecture slides, and coding sheets. Guides your logic step-by-step so you excel during oral project defenses and exams.',
    btnTryDemo: '🚀 Try Interactive Demo',
    btnDownloadDoc: '📄 Read & Download Full Article',
    btnSuggestHero: '💡 Suggest a Feature',
    credText: 'Access authenticated via official university email:',

    // Floating badges
    floatChat: '"Explained recursion and your algorithms sheet!" 💻',
    floatPrivacy: '🔒 100% Private Code & Never Monitored',

    // Coming Soon Banner
    csTitle: '⏳ Official Beta Release: 15 December 2026!',
    csDesc: 'The platform is currently in active advanced development as part of the 2026 Computer Science graduation projects. The countdown to December 15th is on—get your university email and preferred AI API key ready!',
    csDays: 'Days',
    csHours: 'Hours',
    csMinutes: 'Mins',
    csSeconds: 'Secs',

    // Reality Check
    rcTag: 'The Reality Check',
    rcTitle: 'Why Generic AI Fails Computer Science Students?',
    rcDesc: 'General-purpose AI can spit out generic code snippets, but is completely clueless about your department exams, TAs, and specific faculty assignments:',
    genAiTitle: 'Generic AI (Standard ChatGPT)',
    genAiBadge: 'Clueless About Your Department ❌',
    genItem1: '<strong>"Who teaches Data Structures & Algorithms?"</strong> — Sorry, I know nothing about your faculty, professors, or lab sheets!',
    genItem2: '<strong>"Solve this coding assignment for me"</strong> — Dumps raw code, so when the professor asks why you used this pointer in the oral exam, you freeze.',
    genItem3: '<strong>"Computer Science Syllabus"</strong> — Suggests random foreign curricula completely unrelated to Ain Shams faculty regulations.',
    genItem4: '<strong>Privacy Risks</strong> — Your code snippets and chats may be used for general model training without isolated departmental boundaries.',

    sciBotTitle: 'SCI-BOT (Built for Ain Shams CS)',
    sciBotBadge: 'Built By Coders, For Coders ✅',
    sciItem1: '<strong>Knows CS Faculty & Syllabi:</strong> Connects problems directly to the terminology and concepts taught in your department lectures.',
    sciItem2: '<strong>Socratic Coding Guidance:</strong> Provides algorithmic hints, pseudo-code, and O(n) complexity breakdowns so you understand every single line.',
    sciItem3: '<strong>Verified Department Knowledge Base:</strong> Understands your lecture slides, lab sheets, and official course repositories.',
    sciItem4: '<strong>Fortress Privacy:</strong> Your private chats and code drafts are strictly confidential and NEVER used for grading or surveillance.',

    // Features Section
    featTag: 'Software Engineering Capabilities',
    featTitle: 'Features Designed for the Computer Science Community',
    featDesc: 'From writing your first C++ pointers in Year 1 to your graduation project software architecture.. SCI-BOT is your companion:',

    f1Title: 'Socratic Computer Science Tutor',
    f1Desc: 'Instead of dumping raw code that leaves you helpless during oral discussions, it guides your algorithmic thinking step-by-step until you write it yourself.',
    f1Tag: 'Clean Code & True Logic',

    f2Title: 'Live Debugging & Scientific Coding',
    f2Desc: 'Say goodbye to Segmentation Faults and memory leaks! Deep debugging assistance for C++, Python, data structures, dynamic programming, and numerical modeling.',
    f2Tag: 'C++ & Python & Algorithms',

    f3Title: 'Scientific Article & Project Documentation',
    f3Desc: 'Assistance with software architecture documentation, graduation project reports, README writing, UML diagrams, and LaTeX formatting.',
    f3Tag: 'LaTeX & Project Docs',

    f4Title: 'Department-Aware Knowledge Base (RAG)',
    f4Desc: 'Seamless vector retrieval over faculty slides and sheets with strict separation between student notes and official verified materials.',
    f4Tag: 'Official vs Community RAG',

    f5Title: 'Academic Calendar Awareness for CS',
    f5Desc: 'Adapts intelligently across the term: dev environment setup early on, midterm algorithm revisions, sprint deadlines, and final thesis guidance.',
    f5Tag: 'Semester-Aware',

    f6Title: 'CS Faculty Directory & Research Labs',
    f6Desc: 'Authoritative data on Computer Science staff, their research fields (AI, Cybersecurity, Networks, Software Engineering), and office hours.',
    f6Tag: 'CS Faculty Directory',

    f7Title: 'Sprint Stress & Study Management',
    f7Desc: 'Feeling overwhelmed between project deadlines and theoretical exams? Deconstructs huge development tasks into calm, manageable daily sprints.',
    f7Tag: 'Sprint & Study Balance',

    f8Title: 'Use Any AI Model You Prefer (Gemini, Claude, GPT)',
    f8Desc: 'Never locked into a single AI model! Seamlessly connect your custom API key to run Gemini, ultra-fast Groq, Claude, DeepSeek, or OpenAI—with complete freedom.',
    f8Tag: 'Zero Model Lock-in',

    // Security Section
    secTag: 'Privacy & Security First',
    secTitle: 'Your Code & Data Are Sacred: Privacy By Design',
    secDesc: 'SCI-BOT is engineered from the ground up to protect students and build an atmosphere of trust:',

    s1Title: 'Strict Separation of Private Chats & Code',
    s1Desc: 'Your personal code drafts, chats, and project notes are segregated and encrypted. They are never exposed to peers or merged into the public knowledge pool.',
    s1High: 'Your Code & Chats Belong Solely to You',

    s2Title: 'Zero Surveillance Guarantee',
    s2Desc: 'Conversations are never used to monitor student thoughts, assess lab grades, or initiate disciplinary actions. Ask about any bug freely without fear.',
    s2High: 'Ask About Any Bug Without Judgment',

    s3Title: 'Anonymous Aggregated Insights Only',
    s3Desc: 'Instructors only view anonymous trends (e.g. "65% of students struggle with AVL Trees or Dynamic Programming"). Student identities are NEVER revealed.',
    s3High: 'Pedagogical Improvement, Zero Exposure',

    s4Title: 'True Data Deletion',
    s4Desc: 'Deleting a conversation purges it immediately from databases, vector embeddings, and temporary caches, not merely hiding it from the UI.',
    s4High: 'True Deletion — No Zombie Copies',

    s5Title: 'API Key Security & Client Management',
    s5Desc: 'Your custom API keys are never stored in plain text or logged in application traces. They remain encrypted or client-managed in your browser.',
    s5High: 'Full Encryption for Your Custom API Keys',

    s6Title: 'Prompt Injection Defense',
    s6Desc: 'Retrieved student and faculty documents or code repositories are sandboxed as untrusted content, preventing malicious injections from hijacking the model.',
    s6High: 'Multi-layer Context Protection',

    // Interactive Demo
    demoTag: 'Interactive Preview',
    demoTitle: 'See How SCI-BOT Responds to Real Computer Science Scenarios',
    demoDesc: 'Select any of the authentic coding and academic dilemmas below:',
    demoOnline: 'Online & Ready to Debug with You',
    demoFacultyBadge: 'Computer Science - ASU',
    demoPresetsLabel: 'Choose a real computer science student situation:',

    preset1: '1. Data Structures & AVL Tree Sheet 🌲',
    preset2: '2. Knapsack Problem & Dynamic Programming 💻',
    preset3: '3. Are our code and chats monitored? 🔒',
    preset4: '4. Stressed between project deadlines & exams ⏱️',

    // Team Section
    teamTag: 'Project Supervision & Development Team',
    teamTitle: 'Proudly Developed at Faculty of Science, Ain Shams University',
    teamDesc: 'An outstanding graduation project combining academic supervision with cutting-edge AI engineering:',

    supRole: 'Project Supervisor',
    supName: 'Doctor Mohamed Hashim',
    supEn: 'Faculty of Science — Ain Shams University',
    supDesc: 'Academic leadership, research supervision, and strategic alignment with university educational goals.',

    leadRole: 'Technical Lead',
    leadName: 'TA Mohamed Mostafa',
    leadEn: 'Technical Lead & System Architect',
    leadDesc: 'Technical direction, system architecture, RAG orchestration, and backend/AI engineering oversight.',

    devRole: 'Senior Application Developer',
    devName: 'TA Ihab Ramadan',
    devEn: 'TA Ihab Ramadan — Senior Application Developer',
    devDesc: 'Mobile application engineering and development, API integration, and delivering a seamless mobile user experience across platforms.',

    dirRole: 'Management Director',
    dirName: 'TA Alaa Sayed Omar',
    dirEn: 'TA Alaa Sayed Omar — Management Director',
    dirDesc: 'Project management and workflow coordination between academic supervision, technical leadership, and the development team.',

    advRole: 'System Advisor & Consultant',
    advName: 'TA Hager Mahmoud',
    advEn: 'System Advisor & Academic Consultant',
    advDesc: 'System advisory, user requirement validation, architectural reviews, and academic workflow integration.',

    studRole: 'Graduation Project Students',
    studHeader: 'Talented undergraduate software engineers & researchers:',
    studNote: '🎓 SCI-BOT is a Computer Science graduation project developed by senior undergraduate students under the supervision and mentorship of the academic and technical team above.',
    stud1: 'Ahmed Ashraf',
    stud1En: 'Ahmed Ashraf',
    stud1Role: 'Software & AI Development',
    stud2: 'Mohamed Sheta',
    stud2En: 'Mohamed Sheta',
    stud2Role: 'Software & AI Development',
    stud3: 'Yousef',
    stud3En: 'Yousef',
    stud3Role: 'Software & AI Development',

    // Download Section
    dlTitle: 'Full Project Documentation (Executive Summary & Architecture)',
    dlDesc: 'Would you like to read or print the comprehensive 38-chapter project paper? We prepared an in-depth document detailing all concepts, architecture layers, privacy charters, and pedagogical features.',
    btnReadArticle: '📖 Read Article Online',
    btnDownloadArticle: '⬇️ Download HTML/Print PDF',
    docBadgePill: 'PDF & HTML Export Ready',
    docMockupTitle: 'SCI-BOT Project Whitepaper',
    docMockupDesc: '38 Comprehensive Chapters on Architecture & Privacy',

    // Suggestion & Feedback Section
    sugTitle: 'Have a Feature Suggestion or Inquiry?',
    sugDesc: 'Your feedback and insights are vital to shaping SCI-BOT ahead of our beta release. Share your ideas and academic needs easily:',
    sugFormBadge: '🌟 Official Primary Feedback Channel',
    sugFormTitle: 'Quick Suggestion Form (Google Form)',
    sugFormDesc: 'The quickest and simplest way to submit ideas, request features, or suggest course materials—takes under a minute with no email client needed!',
    btnOpenForm: '📝 Open Official Suggestion Form',
    sugOrEmail: 'Or as an alternative: Direct Email Correspondence',
    sugEmailTag: 'Alternative for In-Depth Inquiries',
    sugEmailDesc: 'If you prefer direct correspondence or have a detailed technical/academic inquiry, reach out directly to the Technical Lead:',
    sugNameLabel: 'Your Name / Department (Optional):',
    sugNamePlaceholder: 'e.g. Ahmed - Computer Science & Statistics',
    sugMsgLabel: 'Your Suggestion or Enquiry:',
    sugPlaceholder: 'e.g. Would love to see integrated Git repo reviews, Linux terminal cheat-sheets, or specific course problem sets...',
    btnSendMail: '✉️ Send Suggestion via Email',

    // Modals
    modalArticleTag: 'Project Whitepaper',
    modalArticleTitle: 'Comprehensive Project Documentation & Features',
    btnOpenNewTab: '↗ Open in New Window',
    btnDownloadFullDoc: '⬇️ Download Full Document',
    modalSugTag: '💡 Feature Suggestion or Inquiry',
    modalSugHeader: 'Share Your Ideas to Shape SCI-BOT',
    modalSugSub: 'Choose your preferred channel to share your ideas with our team:',
    btnOpenFormModal: '📝 Open Quick Suggestion Form (Recommended)',
    modalFormHint: '⚡ Takes 1 minute — fastest option with no email client required',
    sugOrEmailOption: 'Or as an alternative: Send via Email',
    btnEmailModal: '✉️ Email Tech Lead Directly',

    // Footer
    footerQuote: '"Crafted with care, passion, and lots of coffee at Faculty of Science, ASU ☕"',
    footerCopy: '© 2026 SCI-BOT Project. Faculty of Science, Ain Shams University. All rights reserved.',
    footerTeamNote: 'Supervisor: Dr. Mohamed Hashim | Tech Lead: TA Mohamed Mostafa | Senior App Developer: TA Ihab Ramadan | Management Director: TA Alaa Sayed Omar | Consultant: TA Hager Mahmoud'
  }
};

// Chat Simulation Presets Responses
const chatPresets = {
  preset1: {
    user: {
      ar: 'يا ساي-بوت، مين دكتور مادة الـ Data Structures والـ Algorithms؟ وشيت 3 فيه مسألة AVL Tree و Recursion معقدة مش فاهمها!',
      en: 'Hey SCI-BOT, who teaches Data Structures & Algorithms, and what is the trick behind Sheet 3 on AVL Trees and Recursion?'
    },
    bot: {
      ar: 'أهلاً يا باشمهندس! 💻 مادة تراكيب البيانات والخوارزميات بتدرس في قسم علوم الحاسب، والمحاضرات بتركيز كبير على الـ Self-Balancing Trees وحساب عامل التوازن: <code>Balance Factor = Height(Left) - Height(Right)</code>.<br><br>بالنسبة لشيت 3: السر إنك لما تلاقي الـ Balance Factor انحرف عن [-1, 0, 1] بتعمل Rotation (سواء Left-Right أو Right-Left). بلاش تحفظ شكل الشجرة! فكر فيها: الدوران بيحافظ على خاصية الـ In-order traversal. تحب نعمل تتبع (Trace) للـ Tree مع بعض عشان تحل المسألة بإيدك وتكون جاهز لمناقشة المعيد؟ 😉',
      en: 'Welcome, future software engineer! 💻 Data Structures & Algorithms is a core CS course focusing on Self-Balancing Trees and Balance Factors: <code>Balance Factor = Height(Left) - Height(Right)</code>.<br><br>Regarding Sheet 3: When the Balance Factor deviates from [-1, 0, 1], you execute a rotation (LL, RR, LR, or RL). Instead of blindly memorizing trees, remember that rotations preserve the in-order traversal invariant! Shall we trace one insertion together so you ace your oral lab discussion? 😉'
    }
  },
  preset2: {
    user: {
      ar: 'اكتبلي كود بايثون كامل يحل شيت الـ Dynamic Programming ومسألة الـ Knapsack عشان أسلمه بكرة الصبح!',
      en: 'Write me the complete Python code for the Dynamic Programming Knapsack sheet so I can submit it tomorrow morning!'
    },
    bot: {
      ar: 'عارف زنقة تسليمات مشاريع الـ CS قبل الديدلاين بساعات! 😅 بس لو نسختلك كود الـ Knapsack جاهز، أول ما المعيد أو الدكتور يسألك في المناقشة: "ليه عملت الـ DP Table أبعاده (N+1) x (W+1)؟ وليه ما استخدمتش الـ Memoization؟" مش هتعرف ترد.<br><br>تعال نفهم الـ Recurrence Relation مع بعض: في كل عنصر، عندك خيارين: إما تاخده وتطرح وزنه من السعة، أو تسيبه. اكتب بس معادلة الـ Base Cases ووريني كودك، وهساعدك تكمله في 5 دقايق بفهم حقيقي! 💪',
      en: 'I know the classic CS deadline panic all too well! 😅 But if I write the Knapsack code for you, the moment your TA asks why your DP table is (N+1) x (W+1) or why you chose tabulation over memoization, you will be in trouble.<br><br>Let us build the recurrence relation together: for every item, you either include it (subtracting weight) or exclude it. Write down the base cases and show me your logic; I will guide you to finish it in 5 minutes with real understanding! 💪'
    }
  },
  preset3: {
    user: {
      ar: 'بصراحة كدة.. هل دكاترة ومعيدي القسم بيشوفوا كودي وأسئلتي لما أغلط وبيقيموا درجاتي عليها؟',
      en: 'Honestly, do computer science professors or TAs see my buggy code and questions to grade me?'
    },
    bot: {
      ar: 'سؤالك في الجون ومهم جداً لأي مبرمج! والإجابة القاطعة: **مستحيل تماماً.** 🔒🛡️<br><br>وفقاً لميثاق الأمان في SCI-BOT:<br>1. كودك ومحادثاتك معزولة ومشفرة ولا تظهر لأي إنسان آخر.<br>2. الأساتذة بيشوفوا فقط إحصائيات عامة مجردة (مثال: "65% من الطلاب واجهوا صعوبة في فهم الـ Graph Traversal") بدون أي أسماء أو هويات.<br>3. تقدر تمسح كل محادثاتك وسورس كودك بضغطة زر ويتم حذفها فعلياً من السيرفر. جرب واغلط في الـ Syntax براحتك.. إحنا هنا عشان نساعدك تفهم مش عشان نراقبك! ❤️',
      en: 'That is a vital question for every software student! The definitive answer is: **Absolutely Not.** 🔒🛡️<br><br>According to the SCI-BOT Security Charter:<br>1. Your code drafts and chats are completely segregated and encrypted.<br>2. Staff only receive anonymized aggregate trends (e.g., "65% of students struggled with Graph Traversal") with ZERO personal identities attached.<br>3. You can permanently delete your chat history at any moment. Feel free to make bugs and experiment without fear! ❤️'
    }
  },
  preset4: {
    user: {
      ar: 'مضغوط ومشتت بين تسليم بروجكت الـ Software، شيت الخوارزميات، وامتحان الميدتيرم!',
      en: 'I am overwhelmed between the software project submission, algorithms sheet, and midterms!'
    },
    bot: {
      ar: 'خد نفس عميق، كل مبرمج في علوم عين شمس عاش ضغط تسليمات البرمجة ده! 🧘‍♂️💻<br><br>تعال نرتب الأولويات في 3 خطوات عملية:<br>1. **امتحان الميدتيرم أولاً:** حدد المادة النظرية اللي عليها أكبر وزن درجات، وهنقسم فصولها لجلسات بومودورو 45 دقيقة.<br>2. **بروجكت السوفت وير:** قسم الـ Features إلى MVP (الحد الأدنى المطلوب للتسليم) وسيب الـ Nice-to-have لبعد الميدتيرم.<br>3. **شيت الخوارزميات:** اخصص ساعة واحدة بكرة الصبح لحل المسألتين الأساسيتين.<br>تحب نبدأ دلوقتي بخطة 48 ساعة هادية؟ أنا معاك خطوة بخطوة!',
      en: 'Take a deep breath; every CS student has been through this crunch! 🧘‍♂️💻<br><br>Let us prioritize in 3 practical steps:<br>1. **Midterms First:** Focus on the highest-stake subject; we will break its chapters into 45-minute Pomodoro sessions.<br>2. **Software Project:** Scope down to the core MVP required for the demo, saving extra features for after exams.<br>3. **Algorithms Sheet:** Block 1 hour tomorrow morning for the 2 core problems.<br>Shall we draft a calm 48-hour sprint plan together right now? Step by step, you got this! 💪'
    }
  }
};

// Application State
let currentLang = 'ar';
let activePreset = 'preset1';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCountdown();
  initChatSimulator();
  initModals();
  initMobileNav();
  initSuggestionForm();
});

/**
 * Initialize Language Switcher (Arabic default)
 */
function initLanguage() {
  const toggleBtn = document.getElementById('langToggleBtn');
  const storedLang = localStorage.getItem('scibot_lang') || 'ar';
  setLanguage(storedLang);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(nextLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('scibot_lang', lang);

  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  const toggleBtn = document.getElementById('langToggleBtn');

  if (lang === 'ar') {
    htmlEl.setAttribute('lang', 'ar');
    htmlEl.setAttribute('dir', 'rtl');
    bodyEl.classList.remove('lang-en');
    if (toggleBtn) {
      toggleBtn.innerHTML = '🌐 English';
      toggleBtn.setAttribute('aria-label', 'تبديل اللغة إلى الإنجليزية');
    }
  } else {
    htmlEl.setAttribute('lang', 'en');
    htmlEl.setAttribute('dir', 'ltr');
    bodyEl.classList.add('lang-en');
    if (toggleBtn) {
      toggleBtn.innerHTML = '🌐 العربية';
      toggleBtn.setAttribute('aria-label', 'Switch language to Arabic');
    }
  }

  // Update Page Title and Meta Description
  if (translations[lang] && translations[lang].pageTitle) {
    document.title = translations[lang].pageTitle;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang] && translations[lang].pageDescription) {
    metaDesc.setAttribute('content', translations[lang].pageDescription);
  }

  // Update all data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update Placeholders
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Re-render active chat preset
  loadPreset(activePreset);
}

/**
 * Launch Countdown Timer (Target: 15 December 2026)
 */
function initCountdown() {
  // Target Launch: Official Release Date - 15 December 2026
  const targetDate = new Date('2026-12-15T00:00:00');

  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMins');
  const secsEl = document.getElementById('cdSecs');

  function update() {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) {
      if (daysEl) daysEl.innerText = '00';
      if (hoursEl) hoursEl.innerText = '00';
      if (minsEl) minsEl.innerText = '00';
      if (secsEl) secsEl.innerText = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(h).padStart(2, '0');
    if (minsEl) minsEl.innerText = String(m).padStart(2, '0');
    if (secsEl) secsEl.innerText = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/**
 * Chat Simulator Widget
 */
function initChatSimulator() {
  const chips = document.querySelectorAll('.preset-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const presetId = chip.getAttribute('data-preset');
      loadPreset(presetId);
    });
  });

  loadPreset('preset1');
}

function loadPreset(presetId) {
  activePreset = presetId;
  const data = chatPresets[presetId];
  if (!data) return;

  const chatArea = document.getElementById('simChatArea');
  if (!chatArea) return;

  const userMsg = data.user[currentLang];
  const botMsg = data.bot[currentLang];

  chatArea.innerHTML = `
    <div class="chat-bubble bubble-user">
      <div style="font-weight: 700; margin-bottom: 0.2rem; font-size: 0.8rem; opacity: 0.85;">
        ${currentLang === 'ar' ? 'أنت (طالب علوم):' : 'You (Science Student):'}
      </div>
      ${userMsg}
    </div>
    <div class="chat-bubble bubble-bot">
      <div style="display: flex; align-items: center; gap: 0.4rem; font-weight: 800; color: var(--primary); margin-bottom: 0.35rem; font-size: 0.82rem;">
        <span>🤖 SCI-BOT:</span>
      </div>
      ${botMsg}
    </div>
  `;

  chatArea.scrollTop = chatArea.scrollHeight;
}

/**
 * Modals & Interactive Viewers
 */
function initModals() {
  // Article Modal
  const openArticleBtn = document.getElementById('openArticleModalBtn');
  const articleModal = document.getElementById('articleModal');
  const closeArticleBtn = document.getElementById('closeArticleModalBtn');

  if (openArticleBtn && articleModal) {
    openArticleBtn.addEventListener('click', () => {
      articleModal.classList.add('active');
    });
  }

  if (closeArticleBtn && articleModal) {
    closeArticleBtn.addEventListener('click', () => {
      articleModal.classList.remove('active');
    });
  }

  // Suggestion Modal / Triggers
  const openSuggestBtns = document.querySelectorAll('.trigger-suggest-modal');
  const suggestModal = document.getElementById('suggestModal');
  const closeSuggestBtn = document.getElementById('closeSuggestModalBtn');

  openSuggestBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (suggestModal) suggestModal.classList.add('active');
    });
  });

  if (closeSuggestBtn && suggestModal) {
    closeSuggestBtn.addEventListener('click', () => {
      suggestModal.classList.remove('active');
    });
  }

  // Close modals on clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });
}

/**
 * Suggestion Form linking to mohamedmostafa@sci.asu.edu.eg
 */
function initSuggestionForm() {
  const form = document.getElementById('suggestionForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('sugName');
    const msgInput = document.getElementById('sugMessage');

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const msgVal = msgInput ? msgInput.value.trim() : '';

    if (!msgVal) {
      alert(currentLang === 'ar' ? 'برجاء كتابة اقتراحك أولاً!' : 'Please write your suggestion first!');
      return;
    }

    const recipient = 'mohamedmostafa@sci.asu.edu.eg';
    const subject = encodeURIComponent(`[SCI-BOT Suggestion] From: ${nameVal || 'Science Student'}`);
    const body = encodeURIComponent(
      `Hello TA Mohamed Mostafa,\n\nI have a feature suggestion/enquiry regarding the SCI-BOT project:\n\n${msgVal}\n\nSender: ${nameVal || 'Ain Shams Science Student'}`
    );

    // Open mail client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Close modal if open
    const suggestModal = document.getElementById('suggestModal');
    if (suggestModal) suggestModal.classList.remove('active');

    // Clean up
    if (msgInput) msgInput.value = '';
    alert(
      currentLang === 'ar' 
        ? 'شكراً لك! تم فتح تطبيق البريد لإرسال رسالتك مباشرة للمشرف التقني.' 
        : 'Thank you! Your email client has been opened with your pre-filled suggestion.'
    );
  });
}

/**
 * Mobile Navigation Menu Toggle
 */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggleBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.setAttribute('aria-expanded', 'false');

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on link click
    const links = navMenu.querySelectorAll('a');
    links.forEach(l => {
      l.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on click/touch outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on window resize if crossing above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
