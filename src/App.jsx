import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FileText, Sparkles, Filter, Bell, MoveRight, Brain, Database, BarChart3, Users, Rocket, Megaphone, Building2, Briefcase, Mail, TrendingUp, Code2, Flame,
  Video
} from "lucide-react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState("saas");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar" data-aos="fade-down">
        <div className="logo">LeadBotX</div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#get-started" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#casestudy" onClick={() => setMenuOpen(false)}>
              Case Study
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => setMenuOpen(false)}>
              Team
            </a>
          </li>
        </ul>
      </nav>


      {/* HERO */}
      <section id="hero" className="hero">

        {/* MOBILE BACKGROUND OVERLAY */}
        <div className="mobile-bg-overlay" aria-hidden="true"></div>

        <div className="hero-glow"></div>
        <div className="hero-content">
          <h1 data-aos="fade-up" data-aos-delay="0">
            Generate Qualified Leads with the Power of AI
          </h1>
          <p data-aos="fade-up" data-aos-delay="120">
            LeadBotX analyzes your ideal customer profile to find high-quality
            prospects, saving your time and boosting your sales pipelines.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="240">
            <a href="#prototype"> <button className="primary" >
              <Video />  Watch Workflow Video
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* GET STARTED */}
      <section id="get-started">
        <div className="section-inner">
          <h1 data-aos="fade-up">Get Started in Minutes</h1>
          <p data-aos="fade-up" data-aos-delay="120" className="subtitle">
            Our intuitive process makes it easy to go from description to
            qualified leads in no time.
          </p>
          <div className="gs-grid">
            <div className="gs-card" data-aos="zoom-in" data-aos-delay="0">
              <div className="gs-icon"><FileText size={38} /></div>
              <h3>1. Step</h3>
              <p>
                User provides niche input.
              </p>
            </div>
            <div className="gs-card" data-aos="zoom-in" data-aos-delay="120">
              <div className="gs-icon"><Sparkles size={38} /></div>
              <h3>2. Step</h3>
              <p>
                AI Agent collects & filters data.
              </p>
            </div>
            <div className="gs-card" data-aos="zoom-in" data-aos-delay="240">
              <div className="gs-icon"><Filter size={38} /></div>
              <h3>3. Step</h3>
              <p>
                Data stored in Notion via API.
              </p>
            </div>
            <div className="gs-card" data-aos="zoom-in" data-aos-delay="360">
              <div className="gs-icon"><Bell size={38} /></div>
              <h3>4. Step</h3>
              <p>
                User notified of new leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE */}
      <section id="prototype">
        <div className="section-inner">
          <h1 data-aos="fade-up">See LeadBotX in Action</h1>

          <p
            data-aos="fade-up"
            data-aos-delay="120"
            className="subtitle"
          >
            Watch a 2-minute demo to see how you can go from a simple description
            to a list of qualified leads.
          </p>

          <div className="proto-box" data-aos="zoom-in">
            <video
              className="proto-video"
              src="/assets/demo.mp4"
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="section-inner">
          <h1 data-aos="fade-up">Powerful Features to Supercharge Your Sales</h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="120">
            LeadBotX is packed with features designed to make your lead generation
            faster, smarter, and more effective.
          </p>
          <div className="feature-grid">
            <div className="feature-card" data-aos="zoom-in">
              <div className="feature-icon">
                <Brain size={30} />
              </div>
              <h3>Saves 80% of Time</h3>
              <p>
                Automate manual lead research and save up to 80% of your time with AI-powered prospect discovery.
              </p>
            </div>
            <div className="feature-card" data-aos="zoom-in">
              <div className="feature-icon">
                <Filter size={30} />
              </div>
              <h3>Accurate & Ready-to-Use Leads</h3>
              <p>
                Get clean, verified leads that are ready for immediate outreach—no manual cleanup needed.
              </p>
            </div>
            <div className="feature-card" data-aos="zoom-in">
              <div className="feature-icon">
                <Code2 size={30} />
              </div>
              <h3>No Coding Skills Required</h3>
              <p>
                Fully automated workflows mean zero coding or technical knowledge is required.
              </p>
            </div>
            <div className="feature-card" data-aos="zoom-in">
              <div className="feature-icon">
                <BarChart3 size={30} />
              </div>
              <h3>Scale Faster</h3>
              <p>
                Built for startups, agencies, and marketers to scale lead generation faster and more efficiently.
              </p>
            </div>
            <div className="feature-card" data-aos="zoom-in">
              <div className="feature-icon">
                <Users size={30} />
              </div>
              <h3>Team Collaboration</h3>
              <p>
                Share lead lists, add notes, and manage pipelines together with your
                team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases">
        <div className="section-inner">
          <h1 data-aos="fade-up">Designed for Your Industry</h1>
          <p data-aos="fade-up" data-aos-delay="120" className="subtitle">
            LeadBotX is versatile enough to power lead generation for a wide range
            of businesses. Here’s how different teams use our platform.
          </p>

          {/* TABS OF USE CASES */}
          <div className="use-tabs" data-aos="fade-up" data-aos-delay="240">
            <button
              className={`use-tab ${activeTab === "saas" ? "active" : ""}`}
              onClick={() => setActiveTab("saas")}
            >
              <Rocket size={18} /> SaaS Companies
            </button>

            <button
              className={`use-tab ${activeTab === "marketing" ? "active" : ""}`}
              onClick={() => setActiveTab("marketing")}
            >
              <Megaphone size={18} /> Marketing Agencies
            </button>

            <button
              className={`use-tab ${activeTab === "realestate" ? "active" : ""}`}
              onClick={() => setActiveTab("realestate")}
            >
              <Building2 size={18} /> Real Estate
            </button>

            <button
              className={`use-tab ${activeTab === "sales" ? "active" : ""}`}
              onClick={() => setActiveTab("sales")}
            >
              <Briefcase size={18} /> B2B Sales Teams
            </button>
          </div>

          {/* CONTENT */}
          <div className="use-content" data-aos="fade-up" data-aos-delay="360">
            {activeTab === "saas" && (
              <p>
                Find and engage with businesses that fit your ideal customer profile.
                Filter by technology stack, company size, and funding stage to identify
                high-intent prospects for your software.
              </p>
            )}
            {activeTab === "marketing" && (
              <p>
                Generate high-quality, targeted leads for multiple clients at scale. Automate prospect research, segment audiences by industry or campaign goals, and deliver better ROI with less manual effort.
              </p>
            )}
            {activeTab === "realestate" && (
              <p>
                Identify property investors, buyers, and builders based on location, budget, and intent signals. Automate lead discovery and outreach to close deals faster with more accurate prospects.
              </p>
            )}
            {activeTab === "sales" && (
              <p>
                Empower your sales reps with verified, high-intent leads enriched with company and contact data. Prioritize hot prospects and accelerate conversions by syncing leads directly into your sales workflow.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="casestudy">
        <div className="section-inner">
          <h1 data-aos="fade-up">Case Study</h1>
          <p data-aos="fade-up" data-aos-delay="120" className="subtitle">
            How LeadBotX transformed raw data into high-intent sales opportunities.
          </p>
          <div className="casestudy-box">
            <img src="/assets/workflow.jpg" alt="Workflow" data-aos="zoom-in" />
          </div>
          <div className="casestudy-grid">
            <div className="case-card" data-aos="zoom-in">
              <div className="case-icon">
                <Database size={22} />
              </div>
              <h3>Data Collection</h3>
              <p>
                Collects raw leads from Social Media APIs, Google APIs, and web scrapping.
              </p>
            </div>
            <div className="case-card" data-aos="zoom-in">
              <div className="case-icon">
                <Filter size={22} />
              </div>
              <h3>Data Cleaning & Enrichment</h3>
              <p>
                Removes duplicates, validates emails/contacts, and formats data properly.
              </p>
            </div>
            <div className="case-card" data-aos="zoom-in">
              <div className="case-icon">
                <Flame size={22} />
              </div>
              <h3>Lead Categorization</h3>
              <p>
                Uses AI to analyze leads, assign quality (Hot, Warm, Cold), and categorize by industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section id="future">
        <div className="section-inner">
          <h1 data-aos="fade-up">What's Next for LeadBotX</h1>
          <p data-aos="fade-up" data-aos-delay="120" className="subtitle">
            We are constantly innovating to bring you the most powerful lead
            generation tool on the market.
          </p>
          <div className="future-grid">
            <div className="future-card" data-aos="zoom-in">
              <div className="future-icon">
                <Mail size={22} />
              </div>
              <div className="future-text">
                <h3>Upcoming Feature</h3>
                <p>
                  CRM & Email Integration.
                </p>
              </div>
            </div>
            <div className="future-card" data-aos="zoom-in">
              <div className="future-icon">
                <TrendingUp size={22} />
              </div>
              <div className="future-text">
                <h3>Upcoming Feature</h3>
                <p>
                  Advanced Analytics Dashboard.
                </p>
              </div>
            </div>
            <div className="future-card" data-aos="zoom-in">
              <div className="future-icon">
                <Code2 size={22} />
              </div>
              <div className="future-text">
                <h3>Upcoming Feature</h3>
                <p>
                  Fully customize application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="section-inner">
          <h1 data-aos="fade-up">Meet the Innovators</h1>
          <p data-aos="fade-up" data-aos-delay="120" className="subtitle">
            We are a passionate team of developers, designers, and strategists
            dedicated to revolutionizing sales.
          </p>
          <div className="team-grid">
            {/* MEMBER 1 */}
            <div className="team-card" data-aos="flip-left">
              <img
                src="/assets/pfp.png"
                alt="Ekagra"
              />
              <h3>Ekagra</h3>
              <span>Full Stack Developer</span>
              <div className="team-icons">
                <a
                  href="https://github.com/Ekagrashharma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ekagra-sharma-65a980313"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* MEMBER 2 */}
            <div className="team-card" data-aos="flip-right">
              <img
                src="/assets/pfp.png"
                alt="Khushi Singh"
              />
              <h3>Khushi Singh</h3>
              <span>Frontend Developer</span>
              <div className="team-icons">
                <a
                  href="https://github.com/Khushisingh-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/khushisingh50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" data-aos="fade-up">
        <p>© 2025 LeadBotX. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

