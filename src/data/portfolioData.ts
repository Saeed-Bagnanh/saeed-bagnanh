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
  location: 'Mukalla, Hadhramaut, Yemen',
  locationAr: 'المكلا، حضرموت، اليمن',
  experienceYears: '5+',
  emails: ['saeed344422@gmail.com'],
  phones: ['+967 775057438'],
  websites: [
    { name: 'dhad.me', url: 'https://dhad.me' },
    { name: 'muqtabasat.com', url: 'https://muqtabasat.com' }
  ],
  github: 'https://github.com/Saeed-Bagnanh',
  linkedin: 'https://www.linkedin.com/in/saeed-bagnanh-36b077289/',
  education: {
    degree: 'B.Sc. in Computer Information Systems',
    degreeAr: 'بكالوريوس نظم المعلومات الحاسوبية',
    institution: 'Al-Ahgaff University',
    institutionAr: 'جامعة الأحقاف',
    period: '2019 – 2023'
  },
  languages: [
    { name: 'Arabic', nameAr: 'العربية', level: 'Native', levelAr: 'اللغة الأم' },
    { name: 'English', nameAr: 'الإنجليزية', level: 'Professional Working Proficiency', levelAr: 'إجادة مهنية' }
  ],
  differentiator: {
    headline: 'Backend systems and full-stack products',
    headlineAr: 'الأنظمة الخلفية والمنتجات البرمجية الشاملة',
    narrative: 'I build web applications and backend services, with experience in REST APIs, relational databases, and production platforms. My work includes Laravel, Django, ASP.NET, Vue.js, JavaScript, and Flutter.',
    narrativeAr: 'أطوّر تطبيقات الويب والخدمات الخلفية، مع خبرة في واجهات REST وقواعد البيانات العلائقية والمنصات المنشورة. تشمل تقنياتي Laravel وDjango وASP.NET وVue.js وJavaScript وFlutter.'
  }
};

const LEGACY_CASE_STUDIES: CaseStudy[] = [
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

const LEGACY_SKILL_CATEGORIES: SkillCategory[] = [
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

const LEGACY_WORK_EXPERIENCES: ExperienceItem[] = [
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
  { platform: 'Website', url: 'https://dhad.me', handle: 'dhad.me', icon: 'Globe' },
  { platform: 'Website', url: 'https://muqtabasat.com', handle: 'muqtabasat.com', icon: 'Globe' },
  { platform: 'Email', url: 'mailto:saeed344422@gmail.com', handle: 'saeed344422@gmail.com', icon: 'Mail' }
];

export const BLOG_POSTS = [
  {
    id: 'maintaining-independent-web-platforms',
    title: 'Maintaining Independent Web Platforms',
    titleAr: 'تطوير وصيانة منصات ويب مستقلة',
    date: 'August 2026',
    dateAr: 'أغسطس 2026',
    category: 'Web Development',
    categoryAr: 'تطوير الويب',
    readTime: '6 min read',
    readTimeAr: '٦ دقائق قراءة',
    excerpt: 'Notes from launching and maintaining dhad.me and muqtabasat.com, with work spanning application features, server configuration, and data queries.',
    excerptAr: 'ملاحظات من إطلاق dhad.me وmuqtabasat.com وصيانتهما، والعمل على ميزات التطبيقات وإعداد الخوادم واستعلامات البيانات.',
    author: 'Saeed Bagnanh',
    content: `
      <p class="lead">Since 2023, I have launched and maintained dhad.me and muqtabasat.com as independent web platforms.</p>
      <h3>Work across the application</h3>
      <p>The work spans server configuration, application features, data queries, and deployment. One documented feature area is dynamic text processing for platform users.</p>
      <h3>Ongoing maintenance</h3>
      <p>Running independent platforms means continuing to improve their application workflows and keep their production environments maintained.</p>
    `
  },
  {
    id: 'medicines-distribution-catalog',
    title: 'A Digital Catalog for Medicines Distribution',
    titleAr: 'كتالوج رقمي لتوزيع الأدوية',
    date: 'July 2026',
    dateAr: 'يوليو 2026',
    category: 'Application Development',
    categoryAr: 'تطوير التطبيقات',
    readTime: '8 min read',
    readTimeAr: '٨ دقائق قراءة',
    excerpt: 'A Laravel and Vue.js application for pharmaceutical product distribution, including an electronic catalog for less-common medicines.',
    excerptAr: 'تطبيق باستخدام Laravel وVue.js لتوزيع المنتجات الدوائية، يتضمن كتالوجاً إلكترونياً للأدوية الأقل شيوعاً.',
    author: 'Saeed Bagnanh',
    content: `
      <p class="lead">From 2022 to 2023, I developed a digital distribution application for a medicines factory using Laravel, Vue.js, and Tailwind CSS.</p>
      <h3>Making product information easier to find</h3>
      <p>The project included an electronic catalog intended to help people locate less-common medicines across local pharmacies.</p>
      <h3>Connecting the application workflow</h3>
      <p>The application brought product publication and distribution into a centralized workflow, with a Laravel API and a Vue.js interface.</p>
    `
  },
  {
    id: 'afaq-travel-booking-workflow',
    title: 'Building a Travel Booking Workflow with ASP.NET',
    titleAr: 'بناء تدفق لحجوزات السفر باستخدام ASP.NET',
    date: 'June 2026',
    dateAr: 'يونيو 2026',
    category: 'Application Development',
    categoryAr: 'تطوير التطبيقات',
    readTime: '5 min read',
    readTimeAr: '٥ دقائق قراءة',
    excerpt: 'A look at the AFAQ HADHRAMAUT travel website features: route selection, ticket reservations, authentication, and payment processing.',
    excerptAr: 'نظرة على ميزات موقع آفاق حضرموت للسفر: اختيار المسارات وحجز التذاكر ومصادقة المستخدمين ومعالجة المدفوعات.',
    author: 'Saeed Bagnanh',
    content: `
      <p class="lead">From 2021 to 2022, I worked on the AFAQ HADHRAMAUT land-travel booking website using ASP.NET and C#.</p>
      <h3>Supporting the travel reservation flow</h3>
      <p>The application covered route and destination selection, user authentication, and ticket reservations for travel across the Arabian Peninsula.</p>
      <h3>Handling the booking transaction</h3>
      <p>Payment processing was part of the booking workflow, alongside the core reservation features.</p>
    `
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'dhad-muqtabasat-platforms',
    title: 'dhad.me & muqtabasat.com',
    titleAr: 'منصتا dhad.me وmuqtabasat.com',
    subtitle: 'Independent web platforms and ongoing product development',
    subtitleAr: 'منصات ويب مستقلة وتطوير مستمر للمنتجات',
    category: 'Full-Stack',
    categoryAr: 'تطوير شامل',
    role: 'Founder & Lead Full-Stack Developer',
    roleAr: 'المؤسس والمطور الشامل الرئيسي',
    period: '2023 – Present',
    image: '/images/ecommerce-platform.svg',
    featured: true,
    summary: 'Launched and maintain two independent web platforms, working across server configuration, application features, data queries, and production deployment.',
    summaryAr: 'إطلاق منصتين مستقلتين للويب وصيانتهما، مع العمل على إعداد الخوادم وميزات التطبيقات واستعلامات البيانات والنشر.',
    problem: 'The platforms require ongoing development and maintenance across backend workflows, content features, and production operations.',
    problemAr: 'تتطلب المنصتان تطويراً وصيانة مستمرين لتدفقات الأنظمة الخلفية وميزات المحتوى وعمليات الإنتاج.',
    approach: 'Built and maintained web application features, including dynamic text processing, database query improvements, server configuration, and end-to-end deployment.',
    approachAr: 'تطوير وصيانة ميزات تطبيقات الويب، بما فيها معالجة النصوص ديناميكياً وتحسين استعلامات قواعد البيانات وإعداد الخوادم والنشر.',
    architecture: {
      description: 'Independent production web platforms with backend features and user-facing interfaces.',
      descriptionAr: 'منصات ويب مستقلة منشورة، تضم ميزات للأنظمة الخلفية وواجهات للمستخدمين.',
      highlights: [
        'Launched and maintained two live web platforms',
        'Developed dynamic text-processing features',
        'Managed server configuration and application deployment',
        'Improved data queries and backend workflows'
      ],
      highlightsAr: [
        'إطلاق منصتين للويب وصيانتهما',
        'تطوير ميزات لمعالجة النصوص ديناميكياً',
        'إدارة إعداد الخوادم ونشر التطبيقات',
        'تحسين استعلامات البيانات وتدفقات الأنظمة الخلفية'
      ]
    },
    measurableOutcomes: [
      { metric: '2', metricAr: '٢', label: 'Independent production platforms', labelAr: 'منصتان مستقلتان منشورتان' },
      { metric: '2023 – Present', metricAr: '٢٠٢٣ – الآن', label: 'Ongoing development', labelAr: 'تطوير مستمر' }
    ],
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://dhad.me'
  },
  {
    slug: 'medicines-distribution-system',
    title: 'Medicines Factory Distribution System',
    titleAr: 'نظام توزيع منتجات مصنع الأدوية',
    subtitle: 'Digital product catalog and distribution workflows',
    subtitleAr: 'كتالوج رقمي وتدفقات لتوزيع المنتجات',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة الأعمال',
    role: 'Full-Stack Developer',
    roleAr: 'مطور برمجيات شامل',
    period: '2022 – 2023',
    image: '/images/restaurant-system.svg',
    featured: true,
    summary: 'Developed a distribution application for a medicines factory, including a product catalog to help users find less-common medicines across local pharmacies.',
    summaryAr: 'تطوير تطبيق توزيع لمصنع أدوية، يتضمن كتالوجاً يساعد المستخدمين في العثور على الأدوية الأقل شيوعاً في الصيدليات المحلية.',
    problem: 'Finding less-common medicines across local pharmacies was difficult for consumers.',
    problemAr: 'كان العثور على الأدوية الأقل شيوعاً في الصيدليات المحلية أمراً صعباً للمستهلكين.',
    approach: 'Built a Laravel API and Vue.js application with a searchable electronic catalog and workflows for publishing and distributing products.',
    approachAr: 'بناء واجهة Laravel برمجية وتطبيق Vue.js مع كتالوج إلكتروني وتدفقات لنشر المنتجات وتوزيعها.',
    architecture: {
      description: 'A web application connecting a Laravel API, a Vue.js interface, and relational product data.',
      descriptionAr: 'تطبيق ويب يربط واجهة Laravel برمجية بواجهة Vue.js وبيانات المنتجات العلائقية.',
      highlights: [
        'Laravel 9 API for the distribution application',
        'Vue.js 3 interface styled with Tailwind CSS',
        'Electronic catalog for product discovery',
        'Structured product and distribution data'
      ],
      highlightsAr: [
        'واجهة Laravel 9 برمجية لتطبيق التوزيع',
        'واجهة Vue.js 3 منسقة باستخدام Tailwind CSS',
        'كتالوج إلكتروني للعثور على المنتجات',
        'تنظيم بيانات المنتجات والتوزيع'
      ]
    },
    measurableOutcomes: [
      { metric: 'Online catalog', metricAr: 'كتالوج إلكتروني', label: 'Digital access to medicines information', labelAr: 'وصول رقمي إلى معلومات الأدوية' },
      { metric: '2022 – 2023', metricAr: '٢٠٢٢ – ٢٠٢٣', label: 'Project period', labelAr: 'فترة المشروع' }
    ],
    technologies: ['Laravel 9', 'PHP', 'Vue.js 3', 'Tailwind CSS', 'JavaScript', 'MySQL']
  },
  {
    slug: 'afaq-travel-booking',
    title: 'AFAQ HADHRAMAUT Travel Booking Platform',
    titleAr: 'منصة آفاق حضرموت لحجوزات السفر',
    subtitle: 'Land travel reservations and route selection',
    subtitleAr: 'حجوزات السفر البري واختيار المسارات',
    category: 'Full-Stack',
    categoryAr: 'تطوير شامل',
    role: 'Full-Stack Developer',
    roleAr: 'مطور برمجيات شامل',
    period: '2021 – 2022',
    image: '/images/university-cms.svg',
    featured: false,
    summary: 'Developed a travel booking website for routes across the Arabian Peninsula, with user authentication, destination selection, ticket reservations, and payment workflows.',
    summaryAr: 'تطوير موقع لحجوزات السفر بين وجهات شبه الجزيرة العربية، مع مصادقة المستخدمين واختيار الوجهات وحجز التذاكر وتدفقات الدفع.',
    problem: 'Travelers needed a web-based way to select routes and manage ticket reservations.',
    problemAr: 'احتاج المسافرون إلى وسيلة عبر الويب لاختيار المسارات وإدارة حجوزات التذاكر.',
    approach: 'Implemented core booking features for route selection, user authentication, ticket reservations, and payment processing.',
    approachAr: 'تنفيذ ميزات الحجز الأساسية لاختيار المسارات ومصادقة المستخدمين وحجز التذاكر ومعالجة المدفوعات.',
    architecture: {
      description: 'An ASP.NET and C# web application for travel booking workflows.',
      descriptionAr: 'تطبيق ويب باستخدام ASP.NET وC# لتدفقات حجز السفر.',
      highlights: [
        'User authentication and booking workflows',
        'Destination and route selection',
        'Ticket reservation features',
        'Payment processing modules'
      ],
      highlightsAr: [
        'مصادقة المستخدمين وتدفقات الحجز',
        'اختيار الوجهات والمسارات',
        'ميزات حجز التذاكر',
        'وحدات معالجة المدفوعات'
      ]
    },
    measurableOutcomes: [
      { metric: 'Booking website', metricAr: 'موقع للحجوزات', label: 'Travel reservation workflow', labelAr: 'تدفق لحجوزات السفر' },
      { metric: '2021 – 2022', metricAr: '٢٠٢١ – ٢٠٢٢', label: 'Project period', labelAr: 'فترة المشروع' }
    ],
    technologies: ['ASP.NET', 'C#']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    titleAr: 'لغات البرمجة',
    icon: 'Code2',
    description: 'Languages used in backend, web, and mobile application development.',
    descriptionAr: 'لغات مستخدمة في تطوير الأنظمة الخلفية وتطبيقات الويب والهواتف.',
    skills: [
      { name: 'PHP', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
      { name: 'C#', level: 'Proficient' },
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'Dart', level: 'Proficient' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    titleAr: 'الأنظمة الخلفية وواجهات البرمجة',
    icon: 'Server',
    description: 'Backend frameworks, API development, and application workflows.',
    descriptionAr: 'أطر الأنظمة الخلفية وتطوير الواجهات البرمجية وتدفقات التطبيقات.',
    skills: [
      { name: 'Laravel', level: 'Proficient' },
      { name: 'Django', level: 'Proficient' },
      { name: 'ASP.NET Core', level: 'Proficient' },
      { name: 'FastAPI', level: 'Proficient' },
      { name: 'REST APIs', level: 'Proficient' },
      { name: 'Authentication & Authorization', level: 'Proficient' }
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    titleAr: 'تطوير الويب',
    icon: 'Layout',
    description: 'Frontend frameworks and styling tools used in web applications.',
    descriptionAr: 'أطر الواجهات وأدوات التنسيق المستخدمة في تطبيقات الويب.',
    skills: [
      { name: 'Vue.js 3', level: 'Proficient' },
      { name: 'React', level: 'Proficient' },
      { name: 'HTML & CSS', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Proficient' }
    ]
  },
  {
    id: 'data-mobile-tools',
    title: 'Data, Mobile & Tools',
    titleAr: 'البيانات والهواتف والأدوات',
    icon: 'Database',
    description: 'Relational database systems, cross-platform apps, and development tools.',
    descriptionAr: 'قواعد البيانات العلائقية والتطبيقات متعددة المنصات وأدوات التطوير.',
    skills: [
      { name: 'MySQL', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'SQL Server', level: 'Proficient' },
      { name: 'Flutter & GetX', level: 'Proficient' },
      { name: 'Git & GitHub', level: 'Proficient' }
    ]
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'independent-platforms',
    company: 'dhad.me & muqtabasat.com',
    companyAr: 'dhad.me وmuqtabasat.com',
    role: 'Founder & Lead Full-Stack Developer',
    roleAr: 'المؤسس والمطور الشامل الرئيسي',
    period: '2023 – Present',
    periodAr: '٢٠٢٣ – حتى الآن',
    location: 'Mukalla, Yemen',
    locationAr: 'المكلا، اليمن',
    description: [
      'Launched and maintain independent production web platforms.',
      'Manage server configuration, application features, data queries, and deployment.'
    ],
    descriptionAr: [
      'إطلاق منصات ويب مستقلة منشورة وصيانتها.',
      'إدارة إعداد الخوادم وميزات التطبيقات واستعلامات البيانات والنشر.'
    ],
    keyWins: [
      'Built dynamic text-processing features for platform users',
      'Maintain two live digital platforms'
    ],
    keyWinsAr: [
      'تطوير ميزات لمعالجة النصوص ديناميكياً لمستخدمي المنصات',
      'صيانة منصتين رقميتين منشورتين'
    ],
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'medicines-distribution',
    company: 'Medicines Factory Distribution System',
    companyAr: 'نظام توزيع منتجات مصنع الأدوية',
    role: 'Full-Stack Developer',
    roleAr: 'مطور برمجيات شامل',
    period: '2022 – 2023',
    periodAr: '٢٠٢٢ – ٢٠٢٣',
    location: 'Yemen',
    locationAr: 'اليمن',
    description: [
      'Developed a digital distribution application for a pharmaceutical factory.',
      'Built an electronic catalog to help users find less-common medicines at local pharmacies.'
    ],
    descriptionAr: [
      'تطوير تطبيق رقمي للتوزيع لصالح مصنع أدوية.',
      'بناء كتالوج إلكتروني لمساعدة المستخدمين في العثور على الأدوية الأقل شيوعاً في الصيدليات المحلية.'
    ],
    keyWins: [
      'Implemented Laravel API and Vue.js 3 application features',
      'Organized product catalog and distribution workflows'
    ],
    keyWinsAr: [
      'تنفيذ ميزات عبر واجهة Laravel البرمجية وتطبيق Vue.js 3',
      'تنظيم كتالوج المنتجات وتدفقات التوزيع'
    ],
    technologies: ['Laravel 9', 'PHP', 'Vue.js 3', 'Tailwind CSS', 'JavaScript', 'MySQL']
  },
  {
    id: 'afaq-travel-platform',
    company: 'AFAQ HADHRAMAUT Travel Platform',
    companyAr: 'منصة آفاق حضرموت للسفر',
    role: 'Full-Stack Developer',
    roleAr: 'مطور برمجيات شامل',
    period: '2021 – 2022',
    periodAr: '٢٠٢١ – ٢٠٢٢',
    location: 'Hadhramaut, Yemen',
    locationAr: 'حضرموت، اليمن',
    description: [
      'Developed a land-travel ticket booking website for routes across the Arabian Peninsula.',
      'Implemented route selection, user authentication, reservations, and payment workflows.'
    ],
    descriptionAr: [
      'تطوير موقع لحجز تذاكر السفر البري للمسارات عبر شبه الجزيرة العربية.',
      'تنفيذ اختيار المسارات ومصادقة المستخدمين والحجوزات وتدفقات الدفع.'
    ],
    keyWins: [
      'Built core ticket allocation and reservation features',
      'Implemented secure user access and transaction workflows'
    ],
    keyWinsAr: [
      'بناء ميزات توزيع التذاكر والحجوزات الأساسية',
      'تنفيذ وصول آمن للمستخدمين وتدفقات المعاملات'
    ],
    technologies: ['ASP.NET', 'C#']
  }
];

export const EXPERIENCE_ITEMS = WORK_EXPERIENCES;
export const BLOG_POSTS_DATA = BLOG_POSTS;

