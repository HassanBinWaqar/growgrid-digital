import { StrictMode, type FormEvent, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Code2,
  FileText,
  Facebook,
  Globe2,
  GraduationCap,
  HeartPulse,
  Home,
  Instagram,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  Linkedin,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  MousePointerClick,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Target,
  TrendingUp,
  Twitter,
  UsersRound,
  Video,
  X,
} from "lucide-react";
import "./styles.css";

type IconComponent = typeof Search;

type Review = {
  id: number;
  quote: string;
  name: string;
  role: string;
  result: string;
  avatar: string;
};

function SplashScreen() {
  const [isHidden, setIsHidden] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progressDuration = prefersReducedMotion ? 1600 : 2800;
    const hideDelay = progressDuration + 320;
    const removeDelay = progressDuration + 900;
    const startedAt = window.performance.now();

    const progressTimer = window.setInterval(() => {
      const elapsed = window.performance.now() - startedAt;
      const nextProgress = Math.min(Math.round((elapsed / progressDuration) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(progressTimer);
      }
    }, 45);
    const hideTimer = window.setTimeout(() => setIsHidden(true), hideDelay);
    const removeTimer = window.setTimeout(() => setIsRemoved(true), removeDelay);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
      window.clearInterval(progressTimer);
    };
  }, []);

  if (isRemoved) {
    return null;
  }

  return (
    <section className={`splashScreen ${isHidden ? "isHidden" : ""}`} aria-label="GrowGrid Digital loading screen">
      <div className="splashGlow" />
      <div className="splashOrbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="splashShell">
        <div className="splashBrandPanel">
          <div className="splashLogoWrap" aria-hidden="true">
            <img src="/growgrid-logo.jpeg" alt="" />
            <span />
          </div>
          <p className="splashEyebrow">Launching Growth Engine</p>
          <h1>GrowGrid Digital</h1>
          <p>Your Growth. Our Grid.</p>
          <div className="splashProgressMeta">
            <span>Building campaign workspace</span>
            <strong>{progress}%</strong>
          </div>
          <div className="splashLoader" role="progressbar" aria-label="Loading GrowGrid Digital website" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="splashStages">
            <small className={progress >= 34 ? "isComplete" : ""}>Strategy loaded</small>
            <small className={progress >= 68 ? "isComplete" : ""}>Campaigns synced</small>
            <small className={progress >= 96 ? "isComplete" : ""}>Revenue tracking live</small>
          </div>
        </div>

        <div className="splashDashboard" aria-hidden="true">
          <div className="splashDashTop">
            <span>Live Campaign Command Center</span>
            <strong>+42%</strong>
          </div>
          <div className="splashChart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <svg viewBox="0 0 220 92" role="img" aria-hidden="true">
              <path d="M8 78 C36 58 42 64 63 42 S101 51 122 29 158 39 180 17 202 21 214 9" />
            </svg>
          </div>
          <div className="splashMetrics">
            <span>
              <strong>3.6x</strong>
              Growth
            </span>
            <span>
              <strong>8,670</strong>
              Leads
            </span>
            <span>
              <strong>$256K</strong>
              Revenue
            </span>
          </div>
          <div className="splashChannels">
            <small>SEO</small>
            <small>PPC</small>
            <small>Meta Ads</small>
            <small>Email</small>
          </div>
        </div>
      </div>
    </section>
  );
}

const services: Array<{
  icon: IconComponent;
  title: string;
  category: string;
  copy: string;
  outcome: string;
  tone: string;
  bullets: string[];
}> = [
  {
    icon: Search,
    title: "SEO & Organic Growth",
    category: "Search visibility",
    copy: "Technical SEO, content strategy, and authority building that helps qualified buyers find you.",
    outcome: "Higher rankings and compounding traffic",
    tone: "green",
    bullets: ["Technical audits", "Keyword strategy", "Content clusters"],
  },
  {
    icon: MousePointerClick,
    title: "Google Ads & PPC",
    category: "Performance media",
    copy: "Search, display, shopping, and retargeting campaigns built around cost-efficient conversions.",
    outcome: "Cleaner spend and better lead quality",
    tone: "blue",
    bullets: ["Search campaigns", "Retargeting", "Landing page testing"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    category: "Audience growth",
    copy: "Organic calendars and paid social campaigns that turn attention into conversations and demand.",
    outcome: "Stronger reach and consistent engagement",
    tone: "amber",
    bullets: ["Meta ads", "LinkedIn campaigns", "Content calendars"],
  },
  {
    icon: Mail,
    title: "Email & SMS Marketing",
    category: "Lifecycle revenue",
    copy: "Automated nurture flows, newsletters, offers, and retention campaigns that keep buyers moving.",
    outcome: "More repeat sales and warmer leads",
    tone: "purple",
    bullets: ["Welcome flows", "Lead nurturing", "Win-back campaigns"],
  },
  {
    icon: Code2,
    title: "Website & Landing Pages",
    category: "Conversion assets",
    copy: "Fast, modern websites and campaign pages designed for trust, clarity, and measurable action.",
    outcome: "Better conversion rates from existing traffic",
    tone: "cyan",
    bullets: ["Website builds", "Landing pages", "Speed optimization"],
  },
  {
    icon: Target,
    title: "Brand Strategy",
    category: "Market positioning",
    copy: "Messaging, positioning, offers, and creative direction that make your business easier to choose.",
    outcome: "Sharper offers and stronger differentiation",
    tone: "emerald",
    bullets: ["Messaging", "Offer strategy", "Visual direction"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    category: "Demand education",
    copy: "Blogs, guides, lead magnets, and thought leadership that answer buyer questions before sales calls.",
    outcome: "Trust-building assets for every stage",
    tone: "slate",
    bullets: ["Blog strategy", "Lead magnets", "Case studies"],
  },
  {
    icon: Video,
    title: "Creative & Video Ads",
    category: "Campaign creative",
    copy: "Scroll-stopping ad creative, short videos, hooks, and testing angles for paid and organic channels.",
    outcome: "More usable creative for rapid testing",
    tone: "rose",
    bullets: ["Ad concepts", "Short-form video", "Creative testing"],
  },
  {
    icon: LineChart,
    title: "CRO & Funnel Optimization",
    category: "Revenue optimization",
    copy: "We study user behavior, remove friction, and improve the path from visitor to qualified lead.",
    outcome: "More revenue without simply buying more traffic",
    tone: "lime",
    bullets: ["A/B testing", "Heatmap review", "Form optimization"],
  },
  {
    icon: LayoutDashboard,
    title: "Analytics & Reporting",
    category: "Measurement",
    copy: "GA4, pixels, events, dashboards, and revenue tracking so every campaign has a clear scoreboard.",
    outcome: "Decisions backed by clean performance data",
    tone: "indigo",
    bullets: ["GA4 setup", "Pixel tracking", "Live dashboards"],
  },
  {
    icon: Globe2,
    title: "Local SEO & Listings",
    category: "Local discovery",
    copy: "Google Business Profile, map rankings, citations, reviews, and local landing pages for nearby buyers.",
    outcome: "More calls, visits, and local inquiries",
    tone: "teal",
    bullets: ["GBP optimization", "Citation cleanup", "Review growth"],
  },
  {
    icon: ClipboardCheck,
    title: "Marketing Automation",
    category: "Operations",
    copy: "CRM workflows, lead routing, follow-ups, and sales handoff systems that protect every opportunity.",
    outcome: "Faster response and fewer missed leads",
    tone: "navy",
    bullets: ["CRM workflows", "Lead scoring", "Sales handoff"],
  },
];

const stats = [
  ["98%", "Client Satisfaction", BarChart3],
  ["$18M+", "Revenue Generated", CircleDollarSign],
  ["500+", "Happy Clients", UsersRound],
  ["1200+", "Campaigns Completed", Rocket],
] as const;

const process = [
  ["01", "Discovery", "We analyze your business, audience, and competitors.", Search],
  ["02", "Strategy", "We create a growth roadmap tailored to your goals.", Lightbulb],
  ["03", "Execution", "We launch campaigns with precision and expertise.", Rocket],
  ["04", "Optimization", "We monitor, test, and optimize for stronger results.", BarChart3],
  ["05", "Scaling", "We scale what works and maximize your growth.", TrendingUp],
] as const;

const caseStudies = [
  {
    client: "DTC Ecommerce Brand",
    industry: "Ecommerce",
    image: "/case-ecommerce-growth.png",
    summary: "Scaled a paid search and shopping funnel while improving product page conversion for a fast-growing consumer brand.",
    challenge: "Traffic was increasing, but acquisition costs were rising and returning customer revenue was underdeveloped.",
    services: ["Google Ads", "CRO", "Email flows"],
    timeline: "90 days",
    metrics: [
      ["+420%", "Revenue growth"],
      ["-38%", "Cost per acquisition"],
      ["2.9x", "ROAS improvement"],
    ],
  },
  {
    client: "Regional Real Estate Group",
    industry: "Real Estate",
    image: "/case-real-estate-leads.png",
    summary: "Built a local lead engine using search, landing pages, retargeting, and CRM follow-up for high-intent buyers.",
    challenge: "The team relied on referrals and inconsistent paid campaigns with limited visibility into lead quality.",
    services: ["Local SEO", "PPC", "CRM automation"],
    timeline: "120 days",
    metrics: [
      ["+180", "Leads per month"],
      ["+240%", "Marketing ROI"],
      ["31%", "Booked-call rate"],
    ],
  },
  {
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    image: "/case-healthcare-acquisition.png",
    summary: "Improved patient acquisition with compliant campaign messaging, local SEO, appointment funnels, and reporting.",
    challenge: "Campaign spend was fragmented across locations and appointment tracking was unclear for leadership.",
    services: ["Local SEO", "Paid social", "Analytics"],
    timeline: "6 months",
    metrics: [
      ["6x", "Return on ad spend"],
      ["-65%", "Cost per lead"],
      ["+72%", "Appointment requests"],
    ],
  },
] as const;

const partnerLogos = [
  ["Google", "https://cdn.simpleicons.org/google"],
  ["Shopify", "https://cdn.simpleicons.org/shopify/7AB55C"],
  ["HubSpot", "https://cdn.simpleicons.org/hubspot/FF5C35"],
  ["Meta", "https://cdn.simpleicons.org/meta/0866FF"],
  ["WordPress", "https://cdn.simpleicons.org/wordpress/21759B"],
  ["Amazon", "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"],
] as const;

const whyChoosePoints = [
  {
    icon: Target,
    title: "Revenue-led strategy",
    copy: "Every channel plan starts with your funnel, margin, lead quality, and sales goals.",
  },
  {
    icon: BarChart3,
    title: "Transparent reporting",
    copy: "Clear dashboards connect spend, traffic, leads, conversion rate, and revenue.",
  },
  {
    icon: ShieldCheck,
    title: "Senior execution team",
    copy: "Specialists handle search, paid media, creative, automation, and conversion optimization.",
  },
  {
    icon: Award,
    title: "Continuous optimization",
    copy: "We test offers, landing pages, targeting, and creative every month to improve ROI.",
  },
] as const;

const industries = [
  ["Healthcare", HeartPulse],
  ["Finance", Landmark],
  ["SaaS", BriefcaseBusiness],
  ["Real Estate", Home],
  ["Education", GraduationCap],
  ["Law Firms", Building2],
  ["Retail", ShoppingBag],
] as const;

const packages = [
  {
    name: "Starter Growth",
    bestFor: "Best for local businesses and lean teams",
    price: "Custom from $1.5k/mo",
    features: ["SEO foundation", "1 paid channel", "Monthly reporting", "Landing page recommendations"],
  },
  {
    name: "Scale",
    bestFor: "Best for brands ready to increase lead volume",
    price: "Custom from $3.5k/mo",
    features: ["SEO + PPC management", "Social campaign strategy", "Conversion testing", "CRM and tracking setup"],
  },
  {
    name: "Performance Partner",
    bestFor: "Best for teams needing full-funnel growth",
    price: "Custom proposal",
    features: ["Multi-channel growth team", "Creative testing roadmap", "Automation workflows", "Weekly optimization calls"],
  },
] as const;

const faqs = [
  ["How soon can we see results?", "Paid campaigns can generate early signals within weeks, while SEO and content usually compound over 3 to 6 months."],
  ["Do you work with small businesses?", "Yes. We build lean plans for local businesses, service providers, ecommerce brands, and growing teams."],
  ["Which platforms do you manage?", "We support Google Ads, Meta Ads, LinkedIn, GA4, Shopify, WordPress, HubSpot, Klaviyo, and related analytics tools."],
  ["Do you require long-term contracts?", "We recommend enough runway to test and optimize properly, but we keep agreements transparent and tied to clear goals."],
] as const;

const initialReviews: Review[] = [
  {
    id: 1,
    quote: "GrowGrid Digital transformed our online presence and helped us scale revenue like never before.",
    name: "John Carter",
    role: "CEO, Carter Logistics",
    result: "+64% qualified leads",
    avatar: "/client-avatar-1.jpg",
  },
  {
    id: 2,
    quote: "The best marketing investment we've made. Professional, reliable, and results-driven team.",
    name: "Sarah Wilson",
    role: "Marketing Director, Bright Homes",
    result: "2.4x marketing ROI",
    avatar: "/client-avatar-2.jpg",
  },
  {
    id: 3,
    quote: "Their reporting finally connected our ad spend to pipeline, not just clicks and impressions.",
    name: "Mia Chen",
    role: "Founder, Northline Studio",
    result: "-31% cost per lead",
    avatar: "/client-avatar-3.jpg",
  },
];

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/", Linkedin],
  ["Twitter", "https://twitter.com/", Twitter],
  ["Facebook", "https://www.facebook.com/", Facebook],
  ["Instagram", "https://www.instagram.com/", Instagram],
] as const;

const navItems = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Case Studies", "#case-studies"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
] as const;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    role: "",
    quote: "",
  });

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1020) {
        setIsMenuOpen(false);
      }
    };

    document.body.classList.add("menuOpen");
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.classList.remove("menuOpen");
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.body.classList.add("modalOpen");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modalOpen");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = reviewForm.name.trim();
    const role = reviewForm.role.trim();
    const quote = reviewForm.quote.trim();

    if (!name || !role || !quote) {
      return;
    }

    const avatarIndex = (reviews.length % 4) + 1;
    const nextReview: Review = {
      id: Date.now(),
      name,
      role,
      quote,
      result: "New client review",
      avatar: `/client-avatar-${avatarIndex}.jpg`,
    };

    setReviews((currentReviews) => [nextReview, ...currentReviews]);
    setReviewForm({ name: "", role: "", quote: "" });
  };

  return (
    <>
      <SplashScreen />
      <main>
        <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="GrowGrid Digital home">
            <img className="brandLogo" src="/growgrid-logo.jpeg" alt="" />
            <span>
              <strong>GrowGrid Digital</strong>
              <small>Your Growth. Our Game.</small>
            </span>
          </a>
          <div className="navLinks">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
                {label === "Services" ? <ChevronDown size={14} /> : null}
              </a>
            ))}
          </div>
          <a className="navCta" href="#contact">
            Get Free Strategy Call <ArrowRight size={16} />
          </a>
          <button
            className={`menuBtn ${isMenuOpen ? "isActive" : ""}`}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <Menu className="menuIcon menuIconOpen" size={22} />
            <X className="menuIcon menuIconClose" size={22} />
          </button>
          <div
            className={`mobileMenuOverlay ${isMenuOpen ? "isOpen" : ""}`}
            aria-hidden={!isMenuOpen}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`mobileMenu ${isMenuOpen ? "isOpen" : ""}`}
            id="mobile-menu"
            aria-hidden={!isMenuOpen}
          >
            <div className="mobileMenuHeader">
              <span>Menu</span>
              <small>Grow with clarity</small>
            </div>
            <div className="mobileMenuLinks">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{label}</span>
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>
            <a
              className="mobileMenuCta"
              href="#contact"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Free Strategy Call <ArrowRight size={16} />
            </a>
          </div>
        </nav>

        <div className="heroInner">
          <div className="heroCopy">
            <h1>
              Digital Marketing That Drives <span>Real Revenue.</span>
            </h1>
            <p>
              We help ambitious businesses generate qualified leads, increase sales, and scale
              through SEO, PPC, Social Media, and performance marketing.
            </p>
            <a className="primaryBtn" href="#contact">
              Get Free Strategy Call <ArrowRight size={18} />
            </a>
            <div className="trustStrip" aria-label="Rated by trusted businesses">
              <div className="avatars">
                {["1", "2", "3", "4"].map((avatar) => (
                  <img
                    key={avatar}
                    src={`/client-avatar-${avatar}.jpg`}
                    alt=""
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>
                <small>Trusted by 500+ businesses</small>
              </div>
            </div>
          </div>

          <aside className="heroProofPanel" aria-label="Agency performance snapshot">
            <span>Average Client Growth</span>
            <strong>3.6x</strong>
            <p>Across SEO, PPC, paid social, email funnels, and conversion-focused landing pages.</p>
            <div>
              <small>Lead quality</small>
              <small>Revenue tracking</small>
              <small>Campaign scale</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="logos" aria-label="Trusted company logos">
        <div className="logosIntro">
          <span>Trusted Growth Partners</span>
          <h2>Built for teams scaling across the platforms that matter.</h2>
          <p>From search demand to ecommerce funnels, GrowGrid Digital connects strategy, media, creative, and reporting into one revenue engine.</p>
        </div>
        <div className="logoCloud">
          {partnerLogos.map(([name, src]) => (
            <article className="logoTile" key={name}>
              <img src={src} alt={`${name} logo`} loading="lazy" />
              <strong>{name}</strong>
            </article>
          ))}
        </div>
        <div className="platformProof" aria-label="Platform marketing proof points">
          <div>
            <strong>42%</strong>
            <span>average lift in qualified pipeline after 90 days</span>
          </div>
          <div>
            <strong>9.4M</strong>
            <span>tracked monthly impressions across paid and organic channels</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>dashboard visibility for campaign spend, leads, and revenue</span>
          </div>
        </div>
      </section>

      <section className="section servicesSection" id="services">
        <div className="sectionIntro">
          <p className="eyebrow">Our Services</p>
          <h2>Full-Funnel Digital Marketing Services</h2>
          <p>
            Strategy, media buying, creative, websites, automation, and reporting under one growth system,
            built for businesses that want measurable revenue, not vanity metrics.
          </p>
          <div className="serviceBadges" aria-label="Service delivery highlights">
            <span>Strategy first</span>
            <span>Channel specialists</span>
            <span>Revenue reporting</span>
          </div>
        </div>
        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <div className="serviceCardTop">
                  <div className={`serviceIcon ${service.tone}`}>
                    <Icon size={28} />
                  </div>
                  <span>{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={15} /> {bullet}
                    </li>
                  ))}
                </ul>
                <div className="serviceOutcome">
                  <span>Outcome</span>
                  <strong>{service.outcome}</strong>
                </div>
                <button className="serviceAction" type="button" onClick={() => setSelectedService(service)}>
                  View service details <ArrowRight size={15} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about" id="about">
        <div className="teamVisual">
          <img src="/why-choose-agency-team.png" alt="GrowGrid Digital team reviewing campaign analytics in a strategy meeting" />
          <div className="imageMetric imageMetricTop">
            <span>Avg. campaign lift</span>
            <strong>3.6x</strong>
          </div>
          <div className="imageMetric imageMetricBottom">
            <span>Monthly reporting</span>
            <strong>24/7</strong>
          </div>
        </div>
        <div className="aboutCopy">
          <p className="eyebrow">Why Choose Us</p>
          <h2>A senior growth team built around measurable performance.</h2>
          <p>
            We combine strategy, media buying, creative, websites, automation, and analytics so your marketing feels coordinated, accountable, and ready to scale.
          </p>
          <div className="whyGrid">
            {whyChoosePoints.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon size={22} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="aboutProof">
            {[
              ["8+ yrs", "Digital growth experience"],
              ["250+", "Projects launched"],
              ["$10M+", "Client revenue tracked"],
            ].map(([value, label]) => (
              <span key={label}>
                <strong>{value}</strong>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="statsBand" aria-label="Company statistics">
        {stats.map(([value, label, Icon]) => (
          <div className="stat" key={label}>
            <Icon size={34} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section processSection">
        <p className="eyebrow">Our Process</p>
        <h2>A Proven Process That Delivers Results</h2>
        <div className="processGrid">
          {process.map(([step, title, copy, Icon]) => (
            <article className="processCard" key={title}>
              <div className="processIcon">
                <Icon size={28} />
              </div>
              <strong>{step}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="caseSection" id="case-studies">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2>Growth stories backed by clean execution and measurable results.</h2>
            <p>Selected client wins across ecommerce, real estate, and healthcare, showing how strategy, media, creative, funnels, and reporting work together.</p>
          </div>
          <a href="#contact">
            View All Case Studies <ArrowRight size={16} />
          </a>
        </div>
        <div className="caseProofBar" aria-label="Case study performance summary">
          <span>
            <strong>$18M+</strong>
            Revenue influenced
          </span>
          <span>
            <strong>1200+</strong>
            Campaigns optimized
          </span>
          <span>
            <strong>500+</strong>
            Growth dashboards built
          </span>
        </div>
        <div className="caseGrid">
          {caseStudies.map((study) => (
            <article className="caseCard" key={study.client}>
              <div className="caseImage">
                <img src={study.image} alt={`${study.client} case study campaign dashboard`} loading="lazy" />
                <span>{study.industry}</span>
              </div>
              <div className="caseBody">
                <div className="caseTitleRow">
                  <h3>{study.client}</h3>
                  <small>{study.timeline}</small>
                </div>
                <p>{study.summary}</p>
                <div className="caseChallenge">
                  <span>Challenge</span>
                  <p>{study.challenge}</p>
                </div>
                <div className="caseServices">
                  {study.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </div>
                <div className="caseMetrics">
                  {study.metrics.map(([value, label]) => (
                    <span key={label}>
                      <strong>{value}</strong>
                      {label}
                    </span>
                  ))}
                </div>
                <div className="growthLine" />
                <a href="#contact">
                  Read Story <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials" aria-label="Client testimonials">
        <div className="reviewIntro">
          <p className="eyebrow">Client Reviews</p>
          <h2>Real feedback, updated instantly.</h2>
          <p>Clients can submit a review and see it appear at the top of the list immediately.</p>
        </div>
        <form className="reviewForm" onSubmit={handleReviewSubmit}>
          <label>
            Name
            <input
              type="text"
              value={reviewForm.name}
              placeholder="Your name"
              onChange={(event) => setReviewForm((form) => ({ ...form, name: event.target.value }))}
            />
          </label>
          <label>
            Company / Role
            <input
              type="text"
              value={reviewForm.role}
              placeholder="CEO, Carter Logistics"
              onChange={(event) => setReviewForm((form) => ({ ...form, role: event.target.value }))}
            />
          </label>
          <label className="reviewFull">
            Review
            <textarea
              value={reviewForm.quote}
              placeholder="Share your experience with GrowGrid Digital..."
              onChange={(event) => setReviewForm((form) => ({ ...form, quote: event.target.value }))}
            />
          </label>
          <button className="primaryBtn reviewFull" type="submit">
            Add Review <ArrowRight size={18} />
          </button>
        </form>
        <div className="reviewList">
          {reviews.map((testimonial) => (
            <blockquote key={testimonial.id}>
              <div className="testimonialTop">
                <img src={testimonial.avatar} alt={`${testimonial.name} client portrait`} loading="lazy" />
                <div>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <strong>{testimonial.result}</strong>
                </div>
              </div>
              "{testimonial.quote}"
              <cite>
                <span>{testimonial.name}</span>
                {testimonial.role}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="industries">
        <h2>Industries We Serve</h2>
        <div>
          {industries.map(([industry, Icon]) => (
            <span key={industry}>
              <Icon size={28} />
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section className="auditSection" id="audit">
        <div className="auditCopy">
          <p className="eyebrow">Free Growth Audit</p>
          <h2>Get a 7-point marketing audit before you spend another dollar.</h2>
          <p>We review the core areas that usually leak revenue: tracking, traffic quality, page conversion, content gaps, follow-up, creative, and reporting.</p>
          <div className="auditChecks">
            {["Tracking accuracy", "Traffic quality", "Landing page friction", "Revenue reporting"].map((item) => (
              <span key={item}>
                <CheckCircle2 size={17} /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="auditPanel">
          <strong>Audit deliverables</strong>
          <span>Scorecard</span>
          <span>Priority fixes</span>
          <span>Channel roadmap</span>
          <span>30-day action plan</span>
          <a className="primaryBtn" href="#contact">
            Request Free Audit <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section packagesSection" id="pricing">
        <div className="sectionIntro">
          <p className="eyebrow">Growth Packages</p>
          <h2>Flexible engagement models for every stage of growth.</h2>
          <p>Choose a starting lane, then we tailor channels, budget, reporting, and deliverables around your goals.</p>
        </div>
        <div className="packageGrid">
          {packages.map((plan, index) => (
            <article className={index === 1 ? "packageCard highlighted" : "packageCard"} key={plan.name}>
              <span>{plan.bestFor}</span>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={16} /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                Discuss Plan <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="faqSection" id="faq">
        <div className="faqIntro">
          <p className="eyebrow">FAQ</p>
          <h2>Questions clients ask before starting.</h2>
          <p>Clear answers help the right clients move faster and avoid vague marketing retainers.</p>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactCopy">
          <p className="eyebrow">Book a Strategy Call</p>
          <h2>Ready to find your next growth lever?</h2>
          <p>Tell us where you are today. We'll respond with the cleanest next step for your traffic, funnel, and revenue goals.</p>
          <div className="contactMethods">
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
            <a href="mailto:hello@growgriddigital.com">hello@growgriddigital.com</a>
            <span>Response within 1 business day</span>
          </div>
        </div>
        <form
          className={`leadForm ${isLeadSubmitted ? "isSubmitted" : ""}`}
          onSubmit={(event) => {
            event.preventDefault();
            setIsLeadSubmitted(true);
          }}
        >
          {isLeadSubmitted ? (
            <div className="formSuccess formFull" role="status">
              <CheckCircle2 size={22} />
              <div>
                <strong>Request received</strong>
                <span>Thanks. A strategist will review your details and respond with a practical next step.</span>
              </div>
            </div>
          ) : null}
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" />
          </label>
          <label>
            Website
            <input type="url" name="website" placeholder="https://yourwebsite.com" />
          </label>
          <label>
            Monthly ad budget
            <select name="budget" defaultValue="">
              <option value="" disabled>Select range</option>
              <option>$0 - $2,500</option>
              <option>$2,500 - $10,000</option>
              <option>$10,000+</option>
            </select>
          </label>
          <label>
            Main service needed
            <select name="service" defaultValue="">
              <option value="" disabled>Select service</option>
              {services.slice(0, 8).map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label>
            Timeline
            <select name="timeline" defaultValue="">
              <option value="" disabled>When do you want to start?</option>
              <option>Immediately</option>
              <option>Next 30 days</option>
              <option>Next quarter</option>
            </select>
          </label>
          <label className="formFull">
            What do you want to improve?
            <textarea name="message" placeholder="Leads, revenue, traffic, tracking, conversion rate..." />
          </label>
          <button className="primaryBtn formFull" type="submit">
            Send Growth Request <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <footer>
        <div className="footerBrand">
          <a className="brand" href="#home">
            <img className="brandLogo" src="/growgrid-logo.jpeg" alt="" />
            <span>
              <strong>GrowGrid Digital</strong>
              <small>Your Growth. Our Game.</small>
            </span>
          </a>
          <p>We help businesses grow with data-driven digital marketing strategies.</p>
          <div className="footerSocials" aria-label="Social media links">
            {socialLinks.map(([label, href, Icon]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#services">SEO & Organic Growth</a>
          <a href="#services">Google Ads & PPC</a>
          <a href="#services">Social Media Marketing</a>
          <a href="#services">Email & SMS Marketing</a>
          <a href="#services">Websites & Landing Pages</a>
          <a href="#services">Analytics & Automation</a>
        </div>
        <div>
          <h3>Contact Us</h3>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
          <a href="mailto:hello@growgriddigital.com">hello@growgriddigital.com</a>
          <p>123 Market St, Suite 100, San Francisco, CA</p>
        </div>
        <div className="footerBottom">
          <span>&copy; 2026 GrowGrid Digital. All rights reserved.</span>
          <span>Developed by Hassan Bin Waqar</span>
        </div>
      </footer>
      <a className="stickyMobileCta" href="#contact">
        Book Free Audit <ArrowRight size={16} />
      </a>
      <a
        className="whatsappFloat"
        href="https://wa.me/15551234567?text=Hi%20GrowGrid%20Digital%2C%20I%20want%20to%20discuss%20digital%20marketing%20services."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with GrowGrid Digital on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      {selectedService ? (
        <div className="serviceModal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
          <button className="serviceModalBackdrop" type="button" aria-label="Close service details" onClick={() => setSelectedService(null)} />
          <div className="serviceModalPanel">
            <button className="serviceModalClose" type="button" aria-label="Close service details" onClick={() => setSelectedService(null)}>
              <X size={20} />
            </button>
            <span className="serviceModalCategory">{selectedService.category}</span>
            <h2 id="service-modal-title">{selectedService.title}</h2>
            <p>{selectedService.copy}</p>
            <div className="serviceModalGrid">
              <div>
                <strong>What we handle</strong>
                <ul>
                  {selectedService.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={16} /> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Best outcome</strong>
                <p>{selectedService.outcome}</p>
                <a className="primaryBtn" href="#contact" onClick={() => setSelectedService(null)}>
                  Discuss this service <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
