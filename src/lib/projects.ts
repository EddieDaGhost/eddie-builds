export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  color: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const categories = [
  "All",
  "Web App",
  "E-Commerce",
  "Landing Page",
  "Mobile App",
  "API / Dev Tool",
  "AI / ML",
  "Business Site",
];

export const projects: Project[] = [
  {
    slug: "novadash",
    title: "NovaDash",
    category: "Web App",
    description:
      "Real-time analytics dashboard with interactive charts and live data feeds.",
    longDescription:
      "NovaDash is a comprehensive analytics platform designed for data-driven teams. It provides real-time monitoring of key business metrics with beautiful, interactive visualizations. The dashboard features customizable widgets, drag-and-drop layout management, and automated reporting capabilities.",
    challenge:
      "Businesses needed a way to monitor hundreds of metrics in real time without overwhelming their teams. Existing tools were either too complex or too limited in their visualization options.",
    solution:
      "Built a modular dashboard system with WebSocket-powered live updates, D3.js-based interactive charts, and a flexible widget architecture. Users can create custom views and set up intelligent alerts based on metric thresholds.",
    techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "WebSocket", "Redis"],
    features: [
      "Real-time data streaming via WebSockets",
      "20+ interactive chart types with D3.js",
      "Drag-and-drop dashboard builder",
      "Automated PDF report generation",
      "Role-based access control",
      "Custom alert thresholds & notifications",
    ],
    color: "from-violet-500 to-purple-600",
    icon: "BarChart3",
  },
  {
    slug: "cartflow",
    title: "CartFlow",
    category: "E-Commerce",
    description:
      "Modern e-commerce storefront with cart, checkout, and order tracking.",
    longDescription:
      "CartFlow is a full-featured e-commerce platform built for speed and conversion. It features a blazing-fast storefront with server-side rendering, a frictionless checkout experience powered by Stripe, and a comprehensive order management system with real-time tracking.",
    challenge:
      "Many e-commerce solutions sacrifice performance for features, leading to slow page loads and poor conversion rates. Merchants needed a platform that delivers both speed and functionality.",
    solution:
      "Leveraged Next.js for server-side rendering and static generation to achieve sub-second page loads. Integrated Stripe for seamless payments and built a custom inventory management system with real-time stock updates.",
    techStack: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB", "Vercel", "Node.js"],
    features: [
      "Server-rendered product pages for instant loads",
      "One-click checkout with Stripe integration",
      "Real-time inventory management",
      "Order tracking with email notifications",
      "Advanced search with filters and sorting",
      "Responsive design with mobile-first approach",
    ],
    color: "from-emerald-500 to-teal-600",
    icon: "ShoppingCart",
  },
  {
    slug: "pulseui",
    title: "PulseUI",
    category: "Landing Page",
    description:
      "Sleek product launch landing page with scroll-triggered animations.",
    longDescription:
      "PulseUI is a high-converting product launch landing page designed to captivate visitors from the first scroll. It features stunning scroll-triggered animations, parallax effects, and a carefully crafted visual hierarchy that guides users toward conversion.",
    challenge:
      "Product launches need to make a strong first impression. Standard landing pages fail to create the excitement and urgency needed for successful launches, resulting in low conversion rates.",
    solution:
      "Designed a visually immersive experience with GSAP-powered scroll animations, micro-interactions, and a strategic content flow. Every element is optimized for engagement and conversion, from the hero section to the final CTA.",
    techStack: ["HTML/CSS", "GSAP", "JavaScript", "Figma", "Lottie", "Netlify"],
    features: [
      "Scroll-triggered GSAP animations",
      "Parallax depth effects",
      "Animated SVG illustrations with Lottie",
      "Email capture with validation",
      "Performance-optimized for 95+ Lighthouse score",
      "A/B testing ready with analytics hooks",
    ],
    color: "from-pink-500 to-rose-600",
    icon: "Sparkles",
    liveUrl: "https://genuine-sunshine-9a7090.netlify.app",
    githubUrl: "#",
  },
  {
    slug: "fitsync",
    title: "FitSync",
    category: "Mobile App",
    description:
      "Cross-platform fitness tracker with workout logging and progress charts.",
    longDescription:
      "FitSync is a cross-platform mobile fitness application that helps users track workouts, monitor progress, and stay motivated. Built with React Native for a native feel on both iOS and Android, it features offline-first data management and beautiful progress visualizations.",
    challenge:
      "Fitness apps often feel generic and fail to adapt to individual user needs. They also struggle with offline usage, which is critical for gym environments with poor connectivity.",
    solution:
      "Built an adaptive workout system that learns user preferences over time. Implemented offline-first architecture with Firebase sync, ensuring data is never lost. Added social features for accountability and motivation.",
    techStack: [
      "React Native",
      "Firebase",
      "Expo",
      "TypeScript",
      "Reanimated",
      "Victory Charts",
    ],
    features: [
      "Custom workout builder with exercise library",
      "Progress tracking with interactive charts",
      "Offline-first with Firebase sync",
      "Social challenges & leaderboards",
      "Apple Health & Google Fit integration",
      "Push notifications for workout reminders",
    ],
    color: "from-orange-500 to-amber-600",
    icon: "Dumbbell",
  },
  {
    slug: "codeforge-api",
    title: "CodeForge API",
    category: "API / Dev Tool",
    description:
      "RESTful API for code snippet management with auth, rate limiting, and docs.",
    longDescription:
      "CodeForge API is a developer-focused platform for storing, sharing, and discovering code snippets. It provides a robust RESTful API with comprehensive documentation, authentication, rate limiting, and syntax highlighting for 50+ programming languages.",
    challenge:
      "Developers constantly rewrite common code patterns because existing snippet tools lack good APIs, search capabilities, or collaboration features. There was no developer-first solution for programmatic snippet management.",
    solution:
      "Designed a clean REST API with OpenAPI/Swagger documentation, JWT authentication, and intelligent search powered by Redis. Built a CLI companion tool for terminal-based snippet management.",
    techStack: [
      "Node.js",
      "Express",
      "Redis",
      "Swagger/OpenAPI",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "RESTful API with OpenAPI 3.0 docs",
      "JWT authentication with refresh tokens",
      "Rate limiting with Redis",
      "Full-text search across 50+ languages",
      "CLI tool for terminal access",
      "Webhook integrations for CI/CD",
    ],
    color: "from-blue-500 to-indigo-600",
    icon: "Terminal",
  },
  {
    slug: "mindflow",
    title: "MindFlow",
    category: "AI / ML",
    description:
      "AI-powered writing assistant with real-time suggestions and tone analysis.",
    longDescription:
      "MindFlow is an intelligent writing companion that helps users craft better content through AI-powered suggestions, tone analysis, and style optimization. It integrates seamlessly into the writing workflow, providing real-time feedback without disrupting creative flow.",
    challenge:
      "Writers and content creators struggle with maintaining consistent tone, catching subtle errors, and optimizing their content for different audiences. Existing tools feel intrusive and break the creative flow.",
    solution:
      "Built a non-intrusive AI assistant using the OpenAI API with custom fine-tuning for writing contexts. Implemented real-time streaming analysis with a clean sidebar UI that provides suggestions without disrupting the editor.",
    techStack: [
      "Python",
      "OpenAI API",
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "WebSocket",
    ],
    features: [
      "Real-time AI writing suggestions",
      "Tone & sentiment analysis",
      "Style consistency scoring",
      "Multi-language support (12 languages)",
      "Custom writing style profiles",
      "Export to Markdown, PDF, and DOCX",
    ],
    color: "from-cyan-500 to-blue-600",
    icon: "Brain",
  },
  {
    slug: "pixelmart",
    title: "PixelMart",
    category: "E-Commerce",
    description:
      "Custom Shopify theme with advanced filtering and quick-view modals.",
    longDescription:
      "PixelMart is a premium custom Shopify theme built for fashion and lifestyle brands. It features advanced collection filtering, quick-view product modals, and a highly customizable design system that merchants can tailor through the Shopify theme editor.",
    challenge:
      "Default Shopify themes lack the premium feel that high-end brands require. Custom development is expensive and hard to maintain across Shopify updates.",
    solution:
      "Created a modular Shopify theme using Liquid templating with a section-based architecture. Built custom JavaScript components for filtering, quick-view, and dynamic cart updates that work without page reloads.",
    techStack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS/SCSS",
      "Shopify CLI",
      "Theme Kit",
    ],
    features: [
      "Ajax-powered collection filtering",
      "Quick-view product modals",
      "Dynamic cart with drawer functionality",
      "Mega menu with featured collections",
      "Custom section blocks for page builder",
      "Optimized for Core Web Vitals",
    ],
    color: "from-fuchsia-500 to-pink-600",
    icon: "Palette",
  },
  {
    slug: "devlog",
    title: "DevLog",
    category: "Web App",
    description:
      "Developer blog platform with MDX support, syntax highlighting, and dark mode.",
    longDescription:
      "DevLog is a modern developer blog platform designed specifically for technical writing. It combines the flexibility of MDX with beautiful syntax highlighting, interactive code playgrounds, and a reading experience optimized for technical content.",
    challenge:
      "Developer blogs often sacrifice reading experience for technical features, or vice versa. Technical writers need a platform that handles code blocks, interactive examples, and long-form content equally well.",
    solution:
      "Built on Next.js with MDX support for mixing React components into blog posts. Added Shiki for accurate syntax highlighting, interactive code sandboxes, and an optimized typography system for long-form technical reading.",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel", "Shiki", "TypeScript"],
    features: [
      "MDX support for interactive blog posts",
      "Syntax highlighting for 100+ languages",
      "Interactive code sandboxes",
      "SEO-optimized with sitemap generation",
      "RSS feed and newsletter integration",
      "Reading time estimation & progress bar",
    ],
    color: "from-green-500 to-emerald-600",
    icon: "FileCode",
  },
  {
    slug: "windy-city-masonry",
    title: "Windy City Masonry",
    category: "Business Site",
    description:
      "Professional website for a Chicago masonry contractor with service showcase and quote request form.",
    longDescription:
      "Windy City Masonry is a full-featured local business website built for a Chicago masonry contractor. It showcases the company's services, past work, and customer reviews while driving visitors toward a free estimate request. Designed to build trust with homeowners and rank well for local search terms.",
    challenge:
      "Local trades businesses often have no web presence or rely on outdated sites that fail to convert visitors. They needed a professional site that could compete with larger companies while feeling personal and trustworthy to Chicago homeowners.",
    solution:
      "Built a performance-optimised static site with strong visual hierarchy, real Chicago neighbourhood references, and a streamlined quote request form. Used CSS-art gallery placeholders, IntersectionObserver scroll animations, and a mobile-first layout that loads instantly on any device.",
    techStack: ["HTML/CSS", "JavaScript", "Google Fonts", "Vercel"],
    features: [
      "8-section single-page layout with smooth scroll navigation",
      "Service cards for 6 masonry specialties",
      "CSS-art gallery with before/after project previews",
      "Google-review-style testimonial cards",
      "Chicago neighbourhood service area grid",
      "Validated quote request form with mailto integration",
      "Fully responsive — mobile, tablet, desktop",
      "IntersectionObserver scroll-reveal animations",
    ],
    color: "from-orange-700 to-red-800",
    icon: "Hammer",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "buttercream-dreams",
    title: "Buttercream Dreams",
    category: "E-Commerce",
    description:
      "Online bakery storefront with product catalog, cart, and Venmo/Zelle checkout flow.",
    longDescription:
      "Buttercream Dreams is a full-featured online bakery for a home baker selling custom cupcakes, cakes, and artisan breads. Customers browse a filterable product catalog, build an order in a slide-out cart drawer, and submit via a form that generates pre-filled payment instructions for Venmo and Zelle — no payment processor required.",
    challenge:
      "Home bakers take orders through Instagram DMs and spreadsheets, which is chaotic and unprofessional. They needed a real storefront without the cost and complexity of Shopify or Square.",
    solution:
      "Built a zero-dependency vanilla JS storefront with localStorage cart persistence, animated product cards, and a checkout flow that produces a mailto-pre-filled order email and displays Venmo/Zelle payment instructions — all as a static site with zero backend.",
    techStack: ["HTML/CSS", "JavaScript", "Google Fonts", "localStorage", "Vercel"],
    features: [
      "13-product catalog with cupcakes, cakes, and breads",
      "Category filter tabs with animated product grid",
      "Slide-out cart drawer with quantity controls",
      "Cart persists across page refreshes via localStorage",
      "Order form with client-side validation",
      "Post-order Venmo & Zelle payment instructions",
      "CSS-art cupcake and cake illustrations — no images needed",
      "Fully responsive — mobile hamburger menu, stacked layouts",
    ],
    color: "from-pink-500 to-fuchsia-600",
    icon: "Cake",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}
