export interface CaseStudy {
  slug: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  category: 'Full-Stack' | 'Hardware & Automation' | 'E-Commerce' | 'Enterprise Systems';
  categoryAr: string;
  role: string;
  roleAr: string;
  period: string;
  image: string;
  featured: boolean;
  summary: string;
  summaryAr: string;
  problem: string;
  problemAr: string;
  approach: string;
  approachAr: string;
  architecture: {
    description: string;
    descriptionAr: string;
    highlights: string[];
    highlightsAr: string[];
  };
  measurableOutcomes: {
    metric: string;
    metricAr: string;
    label: string;
    labelAr: string;
  }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  skills: {
    name: string;
    level: string; // 'Expert' | 'Advanced' | 'Proficient'
    context?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyAr: string;
  role: string;
  roleAr: string;
  period: string;
  periodAr: string;
  location: string;
  locationAr: string;
  description: string[];
  descriptionAr: string[];
  keyWins: string[];
  keyWinsAr: string[];
  technologies: string[];
}

export interface SocialProfile {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export const PERSONAL_INFO = {
  fullName: 'Saeed Mohammed Omer Ba-gnanh',
  fullNameAr: 'سعيد محمد عمر باقنانة',
  shortName: 'Saeed Bagnanh',
  username: 'Saeed-Bagnanh',
  title: 'Full-Stack Software Developer',
  titleAr: 'مطور برمجيات شامل',
  agency: '',
  agencyUrl: '',
  location: 'Mukalla, Hadhramaut, Yemen',
  locationAr: 'المكلا، حضرموت، اليمن',
  experienceYears: '10+',
  emails: ['saeed344422@gmail.com'],
  phones: [],
  github: 'https://github.com/Saeed-Bagnanh',
  education: {
    degree: 'B.Sc. Computer Science / Computer Information Systems',
    degreeAr: 'بكالوريوس علوم الحاسوب / نظم المعلومات الحاسوبية',
    institution: 'Al-Ahgaff University',
    institutionAr: 'جامعة الأحقاف',
    period: '2019 – 2023',
    gpa: 'Excellent with Honors'
  },
  languages: [
    { name: 'Arabic', nameAr: 'العربية', level: 'Native', levelAr: 'اللغة الأم' },
    { name: 'English', nameAr: 'الإنجليزية', level: 'Fluent / Professional', levelAr: 'طلاقة واحترافية' }
  ],
  differentiator: {
    headline: 'Bridging High-Throughput Software Architecture with Physical Hardware Engineering',
    headlineAr: 'الجمع بين بنية البرمجيات فائقة الأداء وهندسة الأجهزة المادية والآلات',
    narrative: 'I build reliable backend systems and full-stack products, with a practical focus on APIs, database-backed applications, and maintainable delivery. My work spans Laravel, Django, Python, ASP.NET, JavaScript, TypeScript, and cross-platform mobile development.',
    narrativeAr: 'أبني أنظمة خلفية موثوقة ومنتجات برمجية شاملة مع تركيز عملي على واجهات البرمجة وتطبيقات قواعد البيانات وسهولة الصيانة. تمتد خبرتي عبر Laravel وDjango وPython وASP.NET وJavaScript وTypeScript وتطوير تطبيقات متعددة المنصات.'
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'bandwal-academy',
    title: 'Bandwal Academy E-Learning Ecosystem',
    titleAr: 'منصة أكاديمية بندوال للتعليم الإلكتروني',
    subtitle: 'Enterprise E-Learning Platform with Automated Multi-Tier CI/CD & HLS Streaming',
    subtitleAr: 'منصة تعليم إلكتروني متكاملة مع خطوط نشر مؤتمتة وبث فيديو متكيف HLS',
    category: 'Full-Stack',
    categoryAr: 'تطوير شامل وقيادة تقنية',
    role: 'Full-Stack Developer & Technical Lead',
    roleAr: 'مطور شامل وقائد تقني',
    period: '2024 – 2025',
    image: '/images/bandwal-academy.svg',
    featured: true,
    summary: 'Architected and spearheaded the complete digital transformation of Bandwal Academy using Laravel 12 on the backend and Nuxt.js 4 (SSR) on the frontend. Engineered secure course access, interactive examinations, payment gateway integrations, and automated GitHub Actions CI/CD.',
    summaryAr: 'تصميم وبناء البنية التحتية لمنصة بندوال التعليمية باستخدام Laravel 12 وNuxt.js 4 SSR مع نظام امتحانات ذكي، بوابات دفع، وبث فيديو متكيف وخطوط نشر مؤتمتة بالكامل عبر GitHub Actions.',
    problem: 'The client faced slow manual deployments taking hours or days with frequent configuration mistakes. Furthermore, standard video hosting was vulnerable to unauthorized downloads, and students in low-bandwidth regions suffered severe buffering issues.',
    problemAr: 'واجه العميل صعوبات في عمليات النشر اليدوية البطيئة التي كانت تستغرق ساعات وأياماً مع أخطاء متكررة، بالإضافة إلى مشاكل تسريب وحماية الفيديوهات التعليمية وانقطاع البث للطلاب في المناطق ذات سرعات الإنترنت الضعيفة.',
    approach: 'Instituted a decoupled architecture with Laravel 12 providing robust Service-Repository patterns, policy-based authorization, and RESTful API Resources. On the client, built an ultra-fast Nuxt.js 4 application with server-side rendering (SSR), full bidirectional i18n (Arabic RTL / English LTR), and integrated HLS adaptive-bitrate video streaming.',
    approachAr: 'تطبيق بنية معمارية منفصلة قائمة على Laravel 12 مع طبقات الخدمة والسياسات الأمنية وموارد RESTful API، وتطوير واجهة مستخدم سريعة وفائقة الأداء عبر Nuxt.js 4 SSR تدعم ثنائية اللغة والاتجاه بالكامل وبث الفيديو المتكيف.',
    architecture: {
      description: 'Decoupled API-first architecture running automated Docker containers with orchestrated CI/CD workflows and Redis caching.',
      descriptionAr: 'معمارية معتمدة على الـ APIs المنفصلة وحاويات Docker وخطوط أنابيب CI/CD المؤتمتة وتخزين مؤقت عالي الكفاءة عبر Redis.',
      highlights: [
        'Laravel 12 API with strict policy-driven authentication and resource transformations',
        'Nuxt.js 4 SSR with auto-caching, route pre-rendering, and seamless RTL/LTR switching',
        'HLS Video Streaming with signed tokens preventing unauthorized media ripping',
        'Automated CI/CD pipeline targeting Staging and Production with rollback safeguards',
        'Automated examination engine with instant grading, randomized question banks, and certificate generator'
      ],
      highlightsAr: [
        'واجهة برمجية عبر Laravel 12 مع نظام سياسات أمني صارم وتحويل دقيق للبيانات',
        'تطبيق Nuxt.js 4 SSR مع توليد سريع للمسارات وتناغم كامل بين العربية والإنجليزية',
        'بث فيديو HLS مع تشفير وتوقيع رقمي يمنع القرصنة وتنزيل المحاضرات بدون إذن',
        'خطوط نشر مؤتمتة GitHub Actions لبيئات التجربة والإنتاج مع آليات استعادة فورية',
        'محرك امتحانات مؤتمت بالكامل مع تصحيح فوري وتوليد شهادات رقمية موثقة'
      ]
    },
    measurableOutcomes: [
      {
        metric: '< 3 Min',
        metricAr: '< ٣ دقائق',
        label: 'Automated CI/CD Deployment (Down from hours/days)',
        labelAr: 'زمن النشر المؤتمت الكامل (انخفاضاً من أيام وساعات)'
      },
      {
        metric: '99.9%',
        metricAr: '٩٩.٩٪',
        label: 'Video Delivery Uptime & Zero Piracy Leakage',
        labelAr: 'جاهزية بث الفيديو مع حماية تامة من القرصنة'
      },
      {
        metric: '98/100',
        metricAr: '٩٨/١٠٠',
        label: 'Lighthouse Performance & SEO Score on Nuxt SSR',
        labelAr: 'تقييم الأداء ومحركات البحث على Nuxt SSR'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Knowledge Transfer & Team Architecture Mentorship',
        labelAr: 'نقل المعرفة والخبرة المعمارية وتدريب الفريق'
      }
    ],
    technologies: ['Laravel 12', 'Nuxt.js 4', 'Vue.js 3', 'GitHub Actions', 'HLS Streaming', 'Docker', 'Redis', 'Tailwind CSS', 'TypeScript', 'RESTful API'],
    githubUrl: 'https://github.com/Saeed-Bagnanh',
    liveUrl: 'https://github.com/Saeed-Bagnanh'
  },
  {
    slug: 'python-api-platform',
    title: 'Python API Platform',
    titleAr: 'منصة واجهات برمجية باستخدام Python',
    subtitle: 'Backend services, REST APIs, and relational data workflows',
    subtitleAr: 'خدمات خلفية وواجهات REST وتدفقات بيانات علائقية',
    category: 'Hardware & Automation',
    categoryAr: 'عتاد مادي وأتمتة صناعية',
    role: 'Hardware Engineer & Embedded Systems Developer',
    roleAr: 'مهندس عتاد ومطور أنظمة مضمنة',
    period: '2024',
    image: '/images/restaurant-system.svg',
    featured: true,
    summary: 'Designed backend services around clear API contracts, relational data models, authentication, and maintainable application boundaries using Python frameworks.',
    summaryAr: 'تصميم خدمات خلفية تعتمد على عقود واضحة لواجهات البرمجة ونماذج بيانات علائقية ومصادقة وحدود تطبيق قابلة للصيانة باستخدام أطر Python.',
    problem: 'Growing applications need backend services that keep data consistent, expose predictable APIs, and remain easy to extend without coupling every feature together.',
    problemAr: 'تحتاج التطبيقات المتنامية إلى خدمات خلفية تحافظ على اتساق البيانات وتوفر واجهات متوقعة وتبقى قابلة للتوسع دون ربط كل الميزات ببعضها.',
    approach: 'Built structured Python services with Django and FastAPI, separating request handling, business rules, persistence, and integrations while keeping API responses consistent.',
    approachAr: 'بناء خدمات Python منظمة عبر Django وFastAPI مع فصل معالجة الطلبات وقواعد الأعمال والتخزين والتكاملات والحفاظ على اتساق استجابات الواجهات البرمجية.',
    architecture: {
      description: 'Layered backend architecture coordinating HTTP requests, application services, relational data, and external integrations.',
      descriptionAr: 'معمارية خلفية متعددة الطبقات تنسق طلبات HTTP وخدمات التطبيق والبيانات العلائقية والتكاملات الخارجية.',
      highlights: [
        'Django and FastAPI services with predictable REST contracts',
        'Relational data models with validation and clear ownership boundaries',
        'Authentication and authorization flows for protected resources',
        'Service and integration layers that keep external dependencies isolated',
        'Git-based workflow for maintainable, reviewable changes'
      ],
      highlightsAr: [
        'خدمات Django وFastAPI مع عقود REST واضحة',
        'نماذج بيانات علائقية مع التحقق وحدود ملكية واضحة',
        'تدفقات مصادقة وصلاحيات لحماية الموارد',
        'طبقات خدمات وتكامل تعزل الاعتماديات الخارجية',
        'سير عمل قائم على Git لتغييرات قابلة للمراجعة والصيانة'
      ]
    },
    measurableOutcomes: [
      {
        metric: '0.05 mm',
        metricAr: '٠.٠٥ ملم',
        label: 'Repeatable Axis Positioning Accuracy',
        labelAr: 'دقة تحديد المواقع وتكرار الحركة للمحاور'
      },
      {
        metric: '3-Axis',
        metricAr: '٣ محاور',
        label: 'Full Cartesian Motion Automation (X, Y, Z)',
        labelAr: 'أتمتة كاملة للحركة الفراغية (س، ص، ع)'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Autonomous Fabrication from CAM to Physical Part',
        labelAr: 'تنفيذ كامل من مرحلة التصميم الرقمي إلى القطعة المادية'
      },
      {
        metric: '12,000 RPM',
        metricAr: '١٢,٠٠٠ د/د',
        label: 'Variable Spindle Speed Control via Software',
        labelAr: 'تحكم برمجي متكيف في سرعة دوران المغزل'
      }
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'REST APIs', 'SQL', 'Authentication', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Saeed-Bagnanh'
  },
  {
    slug: 'ecommerce-dotnet',
    title: 'Enterprise .NET E-Commerce & Custom Integrations',
    titleAr: 'منصات تجارة إلكترونية متقدمة عبر .NET Core',
    subtitle: 'Backend APIs and database-backed business applications',
    subtitleAr: 'منظومات تجارة إلكترونية عالية الكفاءة مع بوابات دفع وربط لوجستي مخصص',
    category: 'E-Commerce',
    categoryAr: 'تجارة إلكترونية وحلول رقمية',
    role: 'Lead Full-Stack .NET Engineer',
    roleAr: 'مهندس برمجيات رئيسي .NET',
    period: '2023 – 2024',
    image: '/images/ecommerce-platform.svg',
    featured: true,
    summary: 'Developed backend services and database-backed business applications using ASP.NET, SQL, REST APIs, and practical integration patterns.',
    summaryAr: 'تطوير خدمات خلفية وتطبيقات أعمال تعتمد على قواعد البيانات باستخدام ASP.NET وSQL وواجهات REST وأنماط تكامل عملية.',
    problem: 'Standard e-commerce engines lacked regional payment gateway plugins, experienced sluggish checkout pages under concurrent traffic, and suffered from slow database queries on extensive catalog filters.',
    problemAr: 'افتقار الأنظمة الجاهزة لدعم بوابات الدفع الإقليمية وبطء صفحات إنهاء الطلب عند تزايد الزوار وضعف أداء استعلامات قواعد البيانات عند تصفية المنتجات الكثيرة.',
    approach: 'Developed custom C# plugins adhering to clean architecture, implemented multi-tiered caching in memory and Redis, tuned SQL Server clustered indexes, and built high-converting checkout user experiences.',
    approachAr: 'بناء إضافات برمجية بلغة C# وفق معايير Clean Architecture وتطبيق التخزين المؤقت متعدد المستويات وتحسين فهارس SQL Server لرفع سرعة الاستجابة إلى أقصى حد.',
    architecture: {
      description: 'High-performance .NET Core micro-modular architecture connected to optimized SQL Server database clusters with secure payment gateways.',
      descriptionAr: 'معمارية برمجية قياسية تعتمد على .NET Core وقواعد بيانات SQL Server مفهرسة بدقة مع ربط آمن ببوابات الدفع.',
      highlights: [
        'Custom nopCommerce & Smartstore C# plugin engineering for payment & shipping',
        'Database query tuning reducing complex catalog filter latency by 70%',
        'Secure multi-currency payment processing with asynchronous webhook confirmation',
        'Modular architecture facilitating zero-downtime plugin updates'
      ],
      highlightsAr: [
        'تطوير إضافات C# مخصصة لبوابات الدفع وشركات الشحن على nopCommerce وSmartstore',
        'تحسين استعلامات قواعد البيانات مما خفض زمن تصفية المنتجات بنسبة 70٪',
        'معالجة آمنة للمدفوعات متعددة العملات مع تأكيد فوري عبر الـ Webhooks',
        'معمارية برمجية مرنة تسمح بتحديث الإضافات دون توقف المتجر'
      ]
    },
    measurableOutcomes: [
      {
        metric: '< 120 ms',
        metricAr: '< ١٢٠ ملي ثانية',
        label: 'Catalog & Checkout Page Response Time',
        labelAr: 'زمن استجابة صفحات المنتجات وإنهاء الطلب'
      },
      {
        metric: '70%',
        metricAr: '٧٠٪',
        label: 'Database Query Latency Reduction',
        labelAr: 'انخفاض زمن استعلامات قواعد البيانات'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Transaction Security & PCI Compliance Readiness',
        labelAr: 'أمان المعاملات المالية وجهوزية المعايير المصرفية'
      }
    ],
    technologies: ['.NET / .NET Core', 'C#', 'SQL Server', 'nopCommerce', 'Smartstore', 'Redis', 'REST APIs', 'Payment Gateways'],
    githubUrl: 'https://github.com/Saeed-Bagnanh',
    liveUrl: 'https://github.com/Saeed-Bagnanh'
  },
  {
    slug: 'university-cms-electron',
    title: 'University Student & Course Management System',
    titleAr: 'نظام إدارة الطلاب والمقررات الأكاديمية بالجامعة',
    subtitle: 'Cross-Platform Web & Desktop Administrative Portal (Al-Ahgaff University)',
    subtitleAr: 'بوابة إدارية مشتركة للويب وسطح المكتب لجامعة الأحقاف عبر .NET وElectron.Net',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة ومؤسسات تعليمية',
    role: 'Full-Stack Software Developer',
    roleAr: 'مطور برمجيات شامل',
    period: '2022 – 2023',
    image: '/images/university-cms.svg',
    featured: false,
    summary: 'Engineered a comprehensive university administrative management platform for the Hadhramaut Center at Al-Ahgaff University. Built as a cross-platform solution utilizing .NET Core and Electron.Net for unified web and desktop executive administration.',
    summaryAr: 'تطوير منظومة إدارية متكاملة لمركز حضرموت بجامعة الأحقاف لإدارة شؤون الطلاب والمقررات والجداول الأكاديمية، باستخدام .NET Core وElectron.Net لتوفير تطبيق ويب وتطبيق سطح مكتب موحد.',
    problem: 'University registrars had to manage thousands of students using fragmented spreadsheets and outdated legacy software that caused grade discrepancies and lacked centralized audit logs.',
    problemAr: 'اعتماد إدارة الجامعة على جداول بيانات متفرقة وبرامج قديمة أدى لبطء استخراج كشوفات الدرجات وغياب سجلات التدقيق والمتابعة المركزية.',
    approach: 'Consolidated academic data into a normalized SQL database, exposed secure role-based services in .NET, and wrapped the client interface in Electron.Net for native offline-capable desktop execution alongside web accessibility.',
    approachAr: 'توحيد البيانات الأكاديمية في قاعدة بيانات منظمة مع طبقة حماية وصلاحيات متعددة المستويات، وتوفير تجربة سطح مكتب سريعة عبر Electron.Net تعمل بالتوازي مع بوابة الويب.',
    architecture: {
      description: 'Multi-tier enterprise client-server system with offline data caching and cross-platform desktop compilation.',
      descriptionAr: 'نظام مؤسسي متعدد الطبقات يجمع بين خادم موحد وتطبيقات ويب وسطح مكتب مع مزامنة بيانات آمنة.',
      highlights: [
        'Unified C# / .NET backend serving both web browsers and desktop clients',
        'Electron.Net desktop package with native OS printing and PDF grade generation',
        'Fine-grained role-based access control (RBAC) for professors, deans, and students',
        'Automated GPA calculations and academic transcript verification'
      ],
      highlightsAr: [
        'خادم موحد بلغة C# و.NET يخدم متصفحات الويب وتطبيقات سطح المكتب في آن واحد',
        'تطبيق سطح مكتب Electron.Net يدعم الطباعة المباشرة وتوليد كشوفات الدرجات PDF',
        'نظام تحكم في الصلاحيات (RBAC) للأساتذة وعمداء الكليات وشؤون الطلاب',
        'حساب آلي للمعدلات التراكمية وتدقيق تاريخ السجل الأكاديمي'
      ]
    },
    measurableOutcomes: [
      {
        metric: '12,500+',
        metricAr: '١٢,٥٠٠+',
        label: 'Student Academic Records Centrally Managed',
        labelAr: 'سجل أكاديمي للطلاب يدار مركزياً'
      },
      {
        metric: '100%',
        metricAr: '١٠٠٪',
        label: 'Elimination of Manual Grade Discrepancies',
        labelAr: 'القضاء التام على أخطاء رصد الدرجات اليدوية'
      },
      {
        metric: 'Cross-Platform',
        metricAr: 'متعدد المنصات',
        label: 'Single Codebase for Web and Windows Desktop',
        labelAr: 'كود موحد لتطبيقات الويب وسطح المكتب'
      }
    ],
    technologies: ['.NET Core', 'C#', 'Electron.Net', 'SQL Server', 'Windows Forms', 'RESTful APIs', 'Reports & PDF Engine'],
    githubUrl: 'https://github.com/Saeed-Bagnanh'
  },
  {
    slug: 'restaurant-management-novelsoft',
    title: 'Real-Time Restaurant Management & POS Suite',
    titleAr: 'منظومة إدارة المطاعم ونقاط البيع اللحظية',
    subtitle: 'High-Throughput Order Queue, Kitchen Display, and Inventory APIs (Novel Soft)',
    subtitleAr: 'واجهات برمجية فورية لإدارة الطاولات وشاشات المطبخ والمخزون في شركة نوفل سوفت',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة إدارة وأعمال',
    role: 'Software Developer',
    roleAr: 'مطور برمجيات',
    period: '2023 – 2024',
    image: '/images/restaurant-system.svg',
    featured: false,
    summary: 'Developed real-time RESTful APIs, kitchen order routing systems, and inventory tracking modules at Novel Soft Company utilizing Node.js, Express.js, SQL Server, and Docker containerization.',
    summaryAr: 'تطوير واجهات برمجة تطبيقات سريعة ونظام توجيه طلبات المطبخ وشاشات نقاط البيع وتتبع المخزون في شركة نوفل سوفت عبر Node.js وExpress وSQL Server وحاويات Docker.',
    problem: 'High peak-hour order volumes frequently led to kitchen ticket drops, inventory count desynchronization, and network timeouts during concurrent point-of-sale transactions.',
    problemAr: 'تزايد ضغط الطلبات في أوقات الذروة كان يؤدي إلى تأخر وصول تذاكر المطبخ وتعارض بيانات المخزون وبطء عمليات الدفع المتزامنة.',
    approach: 'Architected event-driven Express endpoints with clustered SQL Server transaction locks, lightweight JSON serialization, and Dockerized environments ensuring identical behavior across branch locations.',
    approachAr: 'بناء مسارات Express.js عالية الاستجابة مع معاملات SQL Server محكمة تمنع تعارض البيانات وتوفير بيئة Docker متطابقة لكافة فروع المطاعم.',
    architecture: {
      description: 'Micro-services POS engine running on Node.js and SQL Server with robust transaction isolation.',
      descriptionAr: 'محرك نقاط بيع معتمد على خدمات Node.js وقواعد بيانات SQL Server مع حماية فائقة للعمليات المالية.',
      highlights: [
        'Sub-50ms API endpoint latency under peak load conditions',
        'Real-time kitchen order dispatch and status synchronization',
        'Automated ingredient-level inventory decrementing on order placement',
        'Docker container deployment across multi-terminal setups'
      ],
      highlightsAr: [
        'سرعة استجابة فائقة للـ APIs بأقل من 50 ملي ثانية تحت أقصى ضغط تشغيلي',
        'توجيه فوري لطلبات المطبخ وتحديث مستمر لحالة التجهيز',
        'خصم آلي ومباشر للمخزون على مستوى المكونات عند إصدار الفواتير',
        'نشر موثوق عبر حاويات Docker لجميع الأجهزة ونقاط البيع'
      ]
    },
    measurableOutcomes: [
      {
        metric: '< 50 ms',
        metricAr: '< ٥٠ ملي ثانية',
        label: 'POS Transaction & Order Dispatch Latency',
        labelAr: 'زمن تنفيذ العمليات وتوجيه طلبات المطبخ'
      },
      {
        metric: '0%',
        metricAr: '٠٪',
        label: 'Order Packet Loss During Peak Rush Hours',
        labelAr: 'فقدان تذاكر الطلبات أثناء أوقات الذروة'
      },
      {
        metric: 'Dockerized',
        metricAr: 'حاويات Docker',
        label: 'Seamless Multi-Terminal Branch Deployments',
        labelAr: 'نشر فوري ومتطابق عبر جميع محطات الفروع'
      }
    ],
    technologies: ['Node.js', 'Express.js', 'SQL Server', 'Docker', 'RESTful APIs', 'Git', 'Swagger'],
    githubUrl: 'https://github.com/Saeed-Bagnanh'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Core Languages',
    titleAr: 'لغات البرمجة الأساسية',
    icon: 'Code2',
    description: 'Multi-paradigm mastery across statically typed and dynamic languages.',
    descriptionAr: 'إتقان عميق للغات البرمجة الكائنية والديناميكية وهندسة النظم.',
    skills: [
      { name: 'TypeScript / JavaScript', level: 'Expert', context: 'ESNext, Node, Browser Runtimes' },
      { name: 'C# / .NET', level: 'Expert', context: '.NET Core, ASP.NET, Windows Runtimes' },
      { name: 'PHP', level: 'Expert', context: 'Laravel 12, Modern OOP, Architecture' },
      { name: 'SQL', level: 'Expert', context: 'SQL Server, PostgreSQL, MySQL' },
      { name: 'Python', level: 'Advanced', context: 'Django, Automation, AI Services' },
      { name: 'Java', level: 'Advanced', context: 'Enterprise OOP, Processing' },
      { name: 'C++', level: 'Advanced', context: 'Embedded Systems, Microcontrollers' },
      { name: 'Dart & Flutter', level: 'Advanced', context: 'Cross-platform application development' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    titleAr: 'الأنظمة الخلفية والخدمات السحابية',
    icon: 'Server',
    description: 'Scalable service architectures, microservices, and enterprise API design.',
    descriptionAr: 'معمارية الخدمات الموزعة، الـ Microservices وتصميم الـ APIs المؤسسية.',
    skills: [
      { name: 'Laravel 12', level: 'Expert', context: 'Service layers, Policies, Telescope, Jobs' },
      { name: 'Node.js & Express.js', level: 'Expert', context: 'High-throughput async APIs' },
      { name: 'Nest.js', level: 'Advanced', context: 'Modular TypeScript microservices' },
      { name: '.NET / .NET Core', level: 'Expert', context: 'Clean architecture, Web APIs, nopCommerce' },
      { name: 'Django', level: 'Advanced', context: 'ORM modeling, REST Framework' },
      { name: 'RESTful API & Swagger', level: 'Expert', context: 'Contract-first OpenAPI schemas' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Modern SSR',
    titleAr: 'واجهات المستخدم والأداء العالي',
    icon: 'Layout',
    description: 'Ultra-fast server-rendered web applications with flawless accessibility and design.',
    descriptionAr: 'تطبيقات ويب فائقة السرعة مدعومة بـ SSR مع إمكانية وصول وتصميم رفيع.',
    skills: [
      { name: 'Next.js (App Router)', level: 'Expert', context: 'Server Components, SSG, SEO, Turbopack' },
      { name: 'Nuxt.js 4 & Vue.js 3', level: 'Expert', context: 'Composition API, SSR, Pinia, Nitro' },
      { name: 'React.js 19', level: 'Expert', context: 'Hooks, Concurrent rendering, State' },
      { name: 'Tailwind CSS v4', level: 'Expert', context: 'Design tokens, Responsive & RTL layouts' },
      { name: 'Framer Motion', level: 'Advanced', context: 'Physics-based micro-interactions' }
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware & Embedded Systems',
    titleAr: 'العتاد المادي والأنظمة المضمنة',
    icon: 'Cpu',
    description: 'Unique capability bridging digital code with precision physical machines.',
    descriptionAr: 'قدرة استثنائية تجمع بين الكود البرمجي والتحكم الفيزيائي في الآلات الصناعية.',
    skills: [
      { name: 'Flutter & Dart', level: 'Advanced', context: 'Cross-platform mobile applications' },
      { name: 'API Integrations', level: 'Advanced', context: 'REST services and external systems' },
      { name: 'Relational Databases', level: 'Advanced', context: 'SQL-backed application design' },
      { name: 'Authentication & Authorization', level: 'Advanced', context: 'Secure application workflows' },
      { name: 'GitHub Workflows', level: 'Proficient', context: 'Version control and collaboration' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automated CI/CD',
    titleAr: 'عمليات التطوير والنشر المؤتمت',
    icon: 'GitBranch',
    description: 'Zero-downtime automated deployment pipelines and container orchestration.',
    descriptionAr: 'خطوط نشر مؤتمتة بدون انقطاع للخدمة وإدارة الحاويات السحابية.',
    skills: [
      { name: 'GitHub Actions', level: 'Expert', context: 'Multi-stage Staging & Production CI/CD' },
      { name: 'Docker & Compose', level: 'Advanced', context: 'Multi-container reproducible stacks' },
      { name: 'Git & Version Control', level: 'Expert', context: 'Trunk-based & GitFlow branching' },
      { name: 'Linux Server Admin', level: 'Advanced', context: 'Nginx reverse proxy, SSL, Security' },
      { name: 'Laravel Telescope', level: 'Expert', context: 'Deep query & performance profiling' }
    ]
  },
  {
    id: 'desktop',
    title: 'Desktop & Cross-Platform',
    titleAr: 'تطبيقات سطح المكتب والمنصات',
    icon: 'Monitor',
    description: 'Unified cross-platform desktop applications for Windows and Web.',
    descriptionAr: 'تطبيقات سطح مكتب متكاملة لأنظمة Windows والويب بكود موحد.',
    skills: [
      { name: 'Electron.Net', level: 'Expert', context: '.NET Core cross-platform desktop wrapper' },
      { name: 'Electron.js', level: 'Advanced', context: 'Node.js native desktop packaging' },
      { name: 'Windows Forms (WinForms)', level: 'Advanced', context: 'High-performance native utilities' },
      { name: 'React Native', level: 'Proficient', context: 'Mobile component architectures' }
    ]
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'full-stack-development',
    company: 'Independent Software Development',
    companyAr: 'تطوير البرمجيات بشكل مستقل',
    role: 'Full-Stack Software Developer',
    roleAr: 'مطور برمجيات شامل',
    period: '2016 – Present',
    periodAr: '2016 – حتى الآن',
    location: 'Mukalla, Yemen / Remote',
    locationAr: 'المكلا، اليمن / عن بعد',
    description: [
      'Build and maintain backend services, REST APIs, and database-backed applications for web and business workflows.',
      'Work across Laravel, Django, Python, FastAPI, ASP.NET, JavaScript, and TypeScript to deliver complete product features.',
      'Use Git and GitHub workflows to keep development organized, reviewable, and ready for continued improvement.'
    ],
    descriptionAr: [
      'بناء وصيانة الخدمات الخلفية وواجهات REST وتطبيقات الأعمال المعتمدة على قواعد البيانات.',
      'العمل عبر Laravel وDjango وPython وFastAPI وASP.NET وJavaScript وTypeScript لتطوير ميزات المنتجات كاملة.',
      'استخدام Git وGitHub للحفاظ على تطوير منظم وقابل للمراجعة والتحسين المستمر.'
    ],
    keyWins: [
      'Designed API and database flows for maintainable applications',
      'Delivered backend and full-stack features across multiple frameworks',
      'Kept codebases organized through GitHub workflows and practical documentation'
    ],
    keyWinsAr: [
      'تصميم تدفقات الواجهات البرمجية وقواعد البيانات لتطبيقات قابلة للصيانة',
      'تطوير ميزات خلفية وشاملة عبر أطر عمل متعددة',
      'الحفاظ على تنظيم المشاريع عبر GitHub والتوثيق العملي'
    ],
    technologies: ['Laravel', 'Django', 'Python', 'FastAPI', 'ASP.NET', 'JavaScript', 'TypeScript', 'SQL', 'GitHub']
  },
  {
    id: 'python-backend',
    company: 'Backend & API Development',
    companyAr: 'تطوير الأنظمة الخلفية وواجهات البرمجة',
    role: 'Backend Software Developer',
    roleAr: 'مطور برمجيات خلفية',
    period: '2021 – Present',
    periodAr: '2021 – حتى الآن',
    location: 'Mukalla, Yemen / Remote',
    locationAr: 'المكلا، اليمن / عن بعد',
    description: [
      'Developed backend applications with Python, Django, FastAPI, Laravel, and ASP.NET.',
      'Designed REST APIs, relational data models, authentication flows, and service integrations.',
      'Applied clean coding practices, Git version control, and practical debugging to improve reliability.'
    ],
    descriptionAr: [
      'تطوير تطبيقات خلفية باستخدام Python وDjango وFastAPI وLaravel وASP.NET.',
      'تصميم واجهات REST ونماذج البيانات العلائقية وتدفقات المصادقة وتكامل الخدمات.',
      'تطبيق ممارسات كتابة كود واضحة وإدارة الإصدارات عبر Git وتحسين الموثوقية من خلال التصحيح العملي.'
    ],
    keyWins: [
      'Delivered backend services across Python and PHP ecosystems',
      'Structured API contracts and relational database models',
      'Improved maintainability through clear separation of application concerns'
    ],
    keyWinsAr: [
      'تطوير خدمات خلفية عبر بيئتي Python وPHP',
      'تنظيم عقود واجهات البرمجة ونماذج قواعد البيانات العلائقية',
      'تحسين قابلية الصيانة عبر فصل مسؤوليات التطبيق بوضوح'
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'Laravel', 'ASP.NET', 'REST APIs', 'SQL', 'Git']
  },
  {
    id: 'novel-soft',
    company: 'Novel Soft Company',
    companyAr: 'شركة نوفل سوفت (Novel Soft)',
    role: 'Software Developer',
    roleAr: 'مطور برمجيات',
    period: '2023 – 2024',
    periodAr: '2023 – 2024',
    location: 'Al-Mukalla, Yemen',
    locationAr: 'المكلا، اليمن',
    description: [
      'Developed high-performance RESTful APIs and backend services using Node.js, Express.js, and SQL Server for commercial enterprise platforms.',
      'Engineered Windows Forms desktop modules with optimized SQL queries and local hardware integration.',
      'Utilized Docker containers and Git version control to ensure seamless multi-branch deployment and API documentation via Swagger.'
    ],
    descriptionAr: [
      'تطوير واجهات برمجة تطبيقات RESTful وخدمات خلفية عالية الأداء عبر Node.js وExpress وSQL Server للأنظمة التجارية.',
      'هندسة تطبيقات سطح مكتب عبر Windows Forms مع استعلامات SQL سريعة وربط مباشر مع الأجهزة الطرفية.',
      'استخدام حاويات Docker ونظام Git لضمان النشر السلس وتوثيق واجهات الـ APIs عبر Swagger.'
    ],
    keyWins: [
      'Engineered POS restaurant APIs with sub-50ms transaction latency',
      'Implemented transactional database locking preventing concurrent inventory race conditions',
      'Standardized API testing and documentation using OpenAPI/Swagger'
    ],
    keyWinsAr: [
      'بناء واجهات برمجية لنقاط البيع بزمن استجابة أقل من 50 ملي ثانية',
      'تطبيق آليات القفل في قواعد البيانات لمنع تعارضات وتضارب عمليات المخزون',
      'توحيد معايير الفحص وتوثيق واجهات الـ APIs عبر Swagger'
    ],
    technologies: ['Node.js', 'Express.js', 'SQL Server', 'Windows Forms', 'Docker', 'Git', 'Swagger']
  },
  {
    id: 'ahgaff-project',
    company: 'Al-Ahgaff University',
    companyAr: 'جامعة الأحقاف (مركز حضرموت)',
    role: 'Full-Stack Developer (University CMS Project)',
    roleAr: 'مطور برمجيات شامل (مشروع إدارة الجامعة)',
    period: '2022 – 2023',
    periodAr: '2022 – 2023',
    location: 'Al-Mukalla, Yemen',
    locationAr: 'المكلا، اليمن',
    description: [
      'Engineered the comprehensive Student & Courses Management System for the Hadhramaut Center at Al-Ahgaff University.',
      'Combined .NET Core and Electron.Net to deliver a unified cross-platform administrative solution for web and desktop environments.',
      'Modeled relational database schemas managing thousands of academic enrollments, transcripts, and course prerequisites.'
    ],
    descriptionAr: [
      'تطوير منظومة إدارة الطلاب والمقررات الأكاديمية لمركز حضرموت بجامعة الأحقاف.',
      'الجمع بين .NET Core وElectron.Net لتوفير تطبيق موحد لإدارة شؤون الطلاب عبر الويب وسطح المكتب.',
      'تصميم وبناء قواعد بيانات علائقية تدير آلاف السجلات الأكاديمية والدرجات والجداول الدراسية.'
    ],
    keyWins: [
      'Digitized academic records for over 12,500 active and alumnus students',
      'Delivered unified single-codebase web and Electron.Net desktop deployment',
      'Graduated with honors, presenting architectural innovations to university faculty'
    ],
    keyWinsAr: [
      'أتمتة وحفظ السجلات الأكاديمية لأكثر من 12,500 طالب وخريج',
      'تقديم حل برمجي موحد لكافة المنصات عبر الويب وتطبيقات سطح المكتب',
      'التخرج بمرتبة الشرف وتقديم أحدث النماذج المعمارية للكلية'
    ],
    technologies: ['.NET Core', 'C#', 'Electron.Net', 'SQL Server', 'REST APIs', 'PDF Engine']
  }
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  { platform: 'GitHub', url: 'https://github.com/Saeed-Bagnanh', handle: '@Saeed-Bagnanh', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/saeed-bagnanh-36b077289', handle: 'Saeed Bagnanh', icon: 'Linkedin' },
  { platform: 'Email', url: 'mailto:saeed344422@gmail.com', handle: 'saeed344422@gmail.com', icon: 'Mail' }
];

export const BLOG_POSTS = [
  {
    id: 'ci-cd-github-actions-automation',
    title: 'Reducing Deployment Time from Hours to < 3 Minutes with GitHub Actions & Laravel 12 / Nuxt 4',
    titleAr: 'تخفيض زمن النشر من ساعات إلى أقل من ٣ دقائق عبر GitHub Actions وLaravel 12 / Nuxt 4',
    date: 'August 2026',
    dateAr: 'أغسطس 2026',
    category: 'DevOps & Architecture',
    categoryAr: 'العمليات وهندسة النظم',
    readTime: '6 min read',
    readTimeAr: '٦ دقائق قراءة',
    excerpt: 'How we eliminated manual deployment errors, automated testing, and achieved zero-downtime production deployments for the Bandwal Academy platform.',
    excerptAr: 'كيف قمنا بالقضاء على أخطاء النشر اليدوي وأتمتة الفحص الشامل وتحقيق نشر فوري بدون انقطاع لمنصة أكاديمية بندوال.',
    author: 'Saeed Bagnanh',
    content: `
      <p class="lead">Manual deployments are a ticking time bomb in enterprise systems. When a release requires SSHing into production, pulling Git commits, running composer install, compiling assets, and clearing caches manually, human error is inevitable.</p>
      
      <h3>The Problem at Bandwal Academy</h3>
      <p>Before implementing our automated pipeline, deployments required senior engineering attention, taking anywhere from 45 minutes to several hours. A forgotten database migration or cache clear often introduced temporary 500 errors during peak student hours.</p>
      
      <h3>The Architecture: Automated GitHub Actions Workflow</h3>
      <p>We designed a dual-stage CI/CD architecture targeting both Staging and Production environments:</p>
      <ul>
        <li><strong>Step 1: Parallel Testing & Linting</strong> — PHPStan strict analysis, Pest unit/feature test suites, and ESLint / TypeScript type-checks for Nuxt.js 4.</li>
        <li><strong>Step 2: Nuxt 4 SSR Production Build</strong> — Pre-compiling server-rendered Nitro output and optimizing WebP assets.</li>
        <li><strong>Step 3: Zero-Downtime Atomic Symlink Switch</strong> — Uploading release packages to isolated timestamped directories and executing zero-downtime atomic symlink swaps once all health-checks pass.</li>
      </ul>

      <blockquote>"Automating deployment isn't just about speed; it's about engineering confidence. When deploying takes under 3 minutes, teams release fixes continuously without fear."</blockquote>

      <h3>Measurable Outcomes</h3>
      <p>The entire pipeline reduced deployment duration to under 3 minutes, eliminated release regressions, and enabled continuous value delivery for thousands of active learners.</p>
    `
  },
  {
    id: 'designing-reliable-python-apis',
    title: 'Designing Reliable Python APIs for Growing Products',
    titleAr: 'تصميم واجهات Python موثوقة للمنتجات المتنامية',
    date: 'July 2026',
    dateAr: 'يوليو 2026',
    category: 'Hardware & Embedded',
    categoryAr: 'العتاد والأنظمة المضمنة',
    readTime: '8 min read',
    readTimeAr: '٨ دقائق قراءة',
    excerpt: 'Practical patterns for separating request handling, business rules, persistence, and integrations in Django and FastAPI services.',
    excerptAr: 'أنماط عملية لفصل معالجة الطلبات وقواعد الأعمال والتخزين والتكاملات في خدمات Django وFastAPI.',
    author: 'Saeed Bagnanh',
    content: `
      <p class="lead">Most web developers operate exclusively in virtual memory buffers and HTTP requests. Bridging the divide between digital software logic and electro-mechanical physical execution fundamentally sharpens your systems thinking.</p>
      
      <h3>1. Start with a clear API boundary</h3>
      <p>A backend becomes easier to change when request parsing, validation, business rules, and persistence have clear responsibilities. This keeps framework details from leaking into every part of the application.</p>

      <h3>2. Model data around real workflows</h3>
      <p>Relational models should reflect the product's language and protect the invariants that matter. Validation belongs close to the boundary, while reusable business rules belong in services that can be tested directly.</p>

      <h3>3. Make integrations replaceable</h3>
      <p>External services change. Isolating integrations behind small interfaces makes failures easier to handle and allows the core application to remain stable when a provider or transport changes.</p>
      
      <blockquote>"Understanding physics, electrical timing, and mechanical tolerances makes you a vastly better software architect. Hardware leaves zero room for sloppy assumptions."</blockquote>
    `
  },
  {
    id: 'scaling-dotnet-ecommerce-nopcommerce',
    title: 'Architecting High-Throughput .NET Core E-Commerce Platforms & Custom nopCommerce Plugins',
    titleAr: 'هندسة منصات تجارة إلكترونية عالية الأداء عبر .NET Core وإضافات nopCommerce المخصصة',
    date: 'June 2026',
    dateAr: 'يونيو 2026',
    category: 'E-Commerce & .NET',
    categoryAr: 'التجارة الإلكترونية و.NET',
    readTime: '5 min read',
    readTimeAr: '٥ دقائق قراءة',
    excerpt: 'Best practices for custom payment gateway plugins, SQL Server index optimization, and distributed caching in enterprise .NET e-commerce systems.',
    excerptAr: 'أفضل الممارسات لتطوير إضافات بوابات الدفع المخصصة، تحسين فهارس SQL Server والتخزين المؤقت الموزع في أنظمة .NET.',
    author: 'Saeed Bagnanh',
    content: `
      <p class="lead">Reliable software starts with clear boundaries between application logic, data, and external services. This article outlines practical patterns for building maintainable backend systems.</p>
      
      <h3>Custom Plugin Architecture</h3>
      <p>Rather than modifying core framework classes, we developed decoupled C# plugins using dependency injection, isolating regional payment webhooks and custom shipping calculations.</p>

      <h3>Database & Query Tuning</h3>
      <p>By analyzing execution plans in SQL Server and introducing covering non-clustered indexes on frequently filtered catalog dimensions, we reduced query execution time from 420ms to under 18ms.</p>
    `
  }
];

export const EXPERIENCE_ITEMS = WORK_EXPERIENCES;
export const BLOG_POSTS_DATA = BLOG_POSTS;

