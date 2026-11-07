import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu,
  X,
  ArrowUpLeft,
  ArrowLeft,
  Code2,
  Instagram,
  Send,
  MessageCircle,
  Github,
  Globe,
  Sparkles,
  CalendarDays,
  ShieldCheck,
  ExternalLink,
  ChevronLeft,
  Crown,
  Layers,
} from "lucide-react";

import "./style.css";

const projects = [
  {
    name: "VERSION BUILD",
    category: "Development Platform",
    description:
      "منصة متخصصة في تطوير وبناء المشاريع البرمجية وإدارة الأكواد.",
    status: "قيد التطوير",
    link: "#",
  },
  {
    name: "WINE EDITOR V1",
    category: "Code Editor",
    description:
      "محرر أكواد يساعد المطورين على كتابة وتنظيم مشاريعهم البرمجية.",
    status: "مشروع سابق",
    link: "#",
  },
  {
    name: "WINE EDITOR V2",
    category: "Code Editor",
    description:
      "الإصدار المطور من محرر WINE EDITOR بتجربة استخدام محسّنة.",
    status: "مشروع سابق",
    link: "#",
  },
  {
    name: "EVORA CODE V2",
    category: "Programming",
    description:
      "بيئة برمجية تهدف إلى توفير أدوات عملية للمطورين.",
    status: "مشروع سابق",
    link: "#",
  },
];

const updates = [
  {
    title: "تأسيس MAIN WINE",
    description: "إطلاق المنصة الرئيسية التي تجمع مشاريع WINE.",
    date: "2026",
  },
  {
    title: "تطوير VERSION BUILD",
    description: "العمل على تطوير المنصة وتحسين تجربة الاستخدام.",
    date: "2026",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const [adminOpen, setAdminOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [adminError, setAdminError] = useState("");

  function navigate(page) {
    setActivePage(page);
    setMenuOpen(false);
    setAdminOpen(false);

    setTimeout(() => {
      document.getElementById(page)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }

  function loginAdmin(e) {
    e.preventDefault();

    setAdminError(
      "يلزم إعداد مصادقة آمنة وربط قاعدة البيانات لتفعيل لوحة الإدارة."
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <button
            className="brand"
            onClick={() => navigate("home")}
          >
            <img src="/velor-logo.png" alt="VELOR Logo" />
            <span>
              MAIN <strong>WINE</strong>
            </span>
          </button>

          <nav className={menuOpen ? "nav active" : "nav"}>
            <button onClick={() => navigate("home")}>
              الرئيسية
            </button>

            <button onClick={() => navigate("projects")}>
              المشاريع
            </button>

            <button onClick={() => navigate("updates")}>
              التحديثات
            </button>

            <button onClick={() => navigate("founder")}>
              المؤسس
            </button>

            <button onClick={() => navigate("contact")}>
              التواصل
            </button>
          </nav>

          <button
            className="admin-button"
            onClick={() => setAdminOpen(true)}
          >
            <ShieldCheck size={17} />
            دخول الإدارة
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot"></span>
              OFFICIAL WINE PLATFORM
            </span>

            <h1>
              عالم <span>WINE</span>
              <br />
              يبدأ من هنا.
            </h1>

            <p>
              منصة MAIN WINE هي الوجهة الرسمية لاستكشاف
              مشاريعنا ومنتجاتنا وتحديثاتنا.
              نبني أفكارنا ونطورها تحت هوية واحدة.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => navigate("projects")}
              >
                استكشف المشاريع
                <ArrowLeft size={18} />
              </button>

              <button
                className="secondary-button"
                onClick={() => navigate("founder")}
              >
                تعرف علينا
              </button>
            </div>

            <div className="hero-caption">
              <Code2 size={17} />
              <span>CODE. CREATE. EVOLVE.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="logo-card">
              <img src="/velor-logo.png" alt="VELOR" />
              <h2>WINE</h2>
              <span>EST. BY VELOR</span>
            </div>

            <div className="floating-label">
              <Crown size={17} />
              <span>Independent Projects</span>
            </div>
          </div>
        </section>

        <section className="stats container">
          <div>
            <strong>{projects.length}</strong>
            <span>مشاريع</span>
          </div>

          <div>
            <strong>VELOR</strong>
            <span>المؤسس</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>عام التطوير</span>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR PROJECTS</span>
              <h2>مشاريعنا</h2>
              <p>
                تعرف على المشاريع التي نعمل عليها تحت علامة WINE.
              </p>
            </div>

            <span className="section-count">
              0{projects.length} PROJECTS
            </span>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <Layers size={22} />
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-bottom">
                  <span>{project.status}</span>

                  <a href={project.link}>
                    استكشف المشروع
                    <ArrowUpLeft size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="updates-section" id="updates">
          <div className="container section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">LATEST NEWS</span>
                <h2>آخر التحديثات</h2>
                <p>تابع أخبار وإصدارات WINE الجديدة.</p>
              </div>

              <CalendarDays size={30} />
            </div>

            <div className="updates-list">
              {updates.map((update, index) => (
                <article className="update-item" key={index}>
                  <div className="update-icon">
                    <Sparkles size={21} />
                  </div>

                  <div>
                    <span>{update.date}</span>
                    <h3>{update.title}</h3>
                    <p>{update.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="founder-section container" id="founder">
          <div className="founder-logo">
            <img src="/velor-logo.png" alt="VELOR" />
          </div>

          <div className="founder-content">
            <span className="eyebrow">THE FOUNDER</span>
            <h2>من يقف خلف WINE؟</h2>

            <h3>VELOR</h3>

            <p>
              مؤسس WINE وصاحب الرؤية التي تجمع المشاريع
              والمنتجات تحت هوية واحدة.
            </p>

            <span className="founder-signature">
              Founded by VELOR.
            </span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-content">
            <span className="eyebrow">STAY CONNECTED</span>

            <h2>ابقَ على تواصل.</h2>

            <p>
              تابع أخبار WINE ومشاريعنا من خلال قنواتنا الرسمية.
            </p>

            <div className="contact-links">
              <a
                href="https://whatsapp.com/channel/0029VbE9QYx6GcG83CLgAX2v"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                WhatsApp
                <ExternalLink size={15} />
              </a>

              <a
                href="https://t.me/wine561"
                target="_blank"
                rel="noreferrer"
              >
                <Send size={19} />
                Telegram
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <img src="/velor-logo.png" alt="VELOR" />
            <strong>MAIN WINE</strong>
          </div>

          <p>© 2026 MAIN WINE. All rights reserved.</p>

          <span>CODE. CREATE. EVOLVE.</span>
        </div>
      </footer>

      {adminOpen && (
        <div className="modal-overlay">
          <div className="admin-modal">
            <button
              className="modal-close"
              onClick={() => setAdminOpen(false)}
            >
              <X size={21} />
            </button>

            <div className="admin-icon">
              <ShieldCheck size={30} />
            </div>

            <span className="eyebrow">ADMINISTRATION</span>

            <h2>دخول الإدارة</h2>

            <p>تسجيل دخول مسؤول MAIN WINE.</p>

            <form onSubmit={loginAdmin}>
              <label>البريد الإلكتروني</label>

              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="البريد الإلكتروني"
                required
              />

              <label>كلمة المرور</label>

              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="كلمة المرور"
                required
              />

              <button className="primary-button" type="submit">
                تسجيل الدخول
                <ChevronLeft size={18} />
              </button>

              {adminError && (
                <p className="admin-error">{adminError}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);