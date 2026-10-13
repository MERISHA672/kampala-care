* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #635bff;
    --primary-dark: #5046e5;
    --text: #172033;
    --muted: #6b7280;
    --background: #f7f8fc;
    --card: #ffffff;
    --border: #e5e7eb;
    --dark: #111827;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
    transition: 0.3s;
}


/* NAVBAR */

.navbar {
    height: 75px;
    padding: 0 7%;
    background: white;
    border-bottom: 1px solid var(--border);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 21px;
    font-weight: 800;
}

.logo span {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background: var(--primary);
    color: white;

    font-size: 14px;
}

nav {
    display: flex;
    gap: 32px;
}

nav a {
    text-decoration: none;
    color: var(--muted);
    font-size: 14px;
    font-weight: 600;
}

nav a:hover {
    color: var(--primary);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.icon-btn,
.login-btn,
.menu-btn {
    border: none;
    cursor: pointer;
}

.icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    background: #f1f3f9;
}

.login-btn {
    padding: 10px 18px;
    border-radius: 8px;
    background: var(--primary);
    color: white;
}

.menu-btn {
    display: none;
    font-size: 22px;
    background: none;
}


/* HERO */

.hero {
    min-height: 620px;

    padding: 80px 8%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background:
        radial-gradient(circle at 80% 20%, #ddd9ff, transparent 30%),
        #f7f8fc;
}

.hero-content {
    max-width: 650px;
}

.badge {
    display: inline-block;

    padding: 7px 12px;

    border-radius: 30px;

    background: #eceaff;
    color: var(--primary);

    font-size: 12px;
    font-weight: bold;
}

.hero h1 {
    font-size: clamp(45px, 6vw, 76px);
    line-height: 1.05;

    margin: 25px 0;
}

.hero h1 span {
    color: var(--primary);
}

.hero p {
    color: var(--muted);
    max-width: 580px;
    font-size: 17px;
}

.hero-search {
    display: flex;

    background: white;

    padding: 7px;

    border-radius: 12px;

    margin-top: 30px;

    max-width: 580px;

    box-shadow: 0 10px 35px rgba(0,0,0,0.08);
}

.hero-search input {
    flex: 1;

    border: none;
    outline: none;

    padding: 15px;
    font-size: 14px;
}

.hero-search button {
    border: none;

    background: var(--primary);
    color: white;

    padding: 0 25px;

    border-radius: 8px;

    cursor: pointer;
}

.quick-links {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 20px;

    flex-wrap: wrap;
}

.quick-links span {
    color: var(--muted);
    font-size: 13px;
}

.quick-links button {
    border: none;

    background: transparent;

    color: var(--primary);

    cursor: pointer;

    font-weight: bold;
}

.hero-visual {
    width: 400px;
    height: 400px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-circle {
    width: 280px;
    height: 280px;

    border-radius: 50%;

    background: linear-gradient(
        135deg,
        #635bff,
        #9f7aea
    );

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 100px;

    box-shadow:
        0 30px 70px rgba(99,91,255,0.3);
}

.floating-card {
    position: absolute;

    padding: 14px 20px;

    background: white;

    border-radius: 12px;

    box-shadow: 0 10px 30px rgba(0,0,0,0.1);

    font-weight: bold;
}

.card-one {
    top: 60px;
    left: 0;
}

.card-two {
    bottom: 60px;
    right: 0;
}


/* STATS */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    background: white;

    padding: 35px 8%;

    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.stats div {
    text-align: center;

    border-right: 1px solid var(--border);
}

.stats div:last-child {
    border: none;
}

.stats strong {
    display: block;

    font-size: 28px;
}

.stats span {
    color: var(--muted);
    font-size: 13px;
}


/* SECTIONS */

.section {
    padding: 90px 8%;
}

.section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;

    gap: 30px;

    margin-bottom: 35px;
}

.section-heading h2 {
    font-size: 38px;
    line-height: 1.2;

    margin-top: 7px;
}

.eyebrow {
    color: var(--primary);

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1.5px;
}

.filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.filter {
    border: 1px solid var(--border);

    background: white;

    padding: 9px 14px;

    border-radius: 7px;

    cursor: pointer;
}

.filter.active,
.filter:hover {
    background: var(--primary);
    color: white;
}


/* SERVICE GRID */

.service-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}

.service-card {
    background: white;

    border: 1px solid var(--border);

    border-radius: 16px;

    overflow: hidden;

    transition: 0.3s;
}

.service-card:hover {
    transform: translateY(-7px);

    box-shadow:
        0 20px 40px rgba(0,0,0,0.08);
}

.service-image {
    height: 180px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 70px;
}

.cleaning {
    background: #e9f8ff;
}

.plumbing {
    background: #eaf1ff;
}

.electrical {
    background: #fff5d9;
}

.beauty {
    background: #ffeaf3;
}

.service-content {
    padding: 20px;
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.category {
    color: var(--primary);

    background: #eeecff;

    padding: 5px 8px;

    border-radius: 5px;

    font-size: 11px;

    font-weight: bold;
}

.favorite {
    background: none;
    border: none;

    font-size: 23px;

    cursor: pointer;

    color: #9ca3af;
}

.favorite.saved {
    color: #ef4444;
}

.service-card h3 {
    margin: 15px 0 8px;
}

.service-card p {
    color: var(--muted);

    font-size: 13px;
}

.provider {
    display: flex;

    gap: 10px;

    align-items: center;

    margin-top: 20px;
}

.provider-avatar,
.big-avatar {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #e8e6ff;

    color: var(--primary);

    font-size: 11px;

    font-weight: bold;
}

.provider strong {
    display: block;

    font-size: 13px;
}

.provider small {
    color: var(--muted);

    font-size: 11px;
}

.card-bottom {
    border-top: 1px solid var(--border);

    margin-top: 18px;
    padding-top: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-bottom strong {
    font-size: 13px;
}

.card-bottom button,
.professional button {
    border: none;

    background: var(--primary);

    color: white;

    padding: 9px 12px;

    border-radius: 7px;

    cursor: pointer;
}


/* HOW IT WORKS */

.how-section {
    padding: 90px 8%;

    background: #111827;

    color: white;
}

.centered {
    display: block;
    text-align: center;
}

.centered h2 {
    margin-top: 10px;
}

.steps {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 30px;

    margin-top: 50px;
}

.step {
    padding: 25px;

    border: 1px solid #293449;

    border-radius: 12px;
}

.step-number {
    color: #a7a1ff;

    font-size: 13px;

    font-weight: bold;

    margin-bottom: 20px;
}

.step p {
    color: #9ca3af;

    font-size: 14px;

    margin-top: 8px;
}


/* PROVIDERS */

.providers-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}

.professional {
    background: white;

    border: 1px solid var(--border);

    padding: 30px;

    border-radius: 15px;

    text-align: center;
}

.big-avatar {
    width: 80px;
    height: 80px;

    margin: auto;

    font-size: 20px;
}

.professional p {
    color: var(--muted);

    font-size: 13px;
}

.rating {
    margin: 15px 0;
}


/* ABOUT */

.about {
    padding: 90px 8%;

    background: #eeecff;

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 70px;

    align-items: center;
}

.about h2 {
    font-size: 45px;

    line-height: 1.15;

    margin: 12px 0 20px;
}

.about p {
    color: var(--muted);

    margin-bottom: 15px;
}

.about-box {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 15px;
}

.about-box div {
    background: white;

    padding: 30px;

    border-radius: 12px;

    text-align: center;
}

.about-box strong {
    display: block;

    color: var(--primary);

    font-size: 30px;
}

.about-box span {
    color: var(--muted);

    font-size: 13px;
}


/* FOOTER */

footer {
    background: #0b1120;

    color: white;

    padding: 70px 8%;

    display: grid;

    grid-template-columns:
        2fr 1fr 1fr 1.5fr;

    gap: 40px;
}

footer p,
footer a {
    color: #9ca3af;

    font-size: 13px;

    display: block;

    margin-top: 8px;

    text-decoration: none;
}

footer h4 {
    margin-bottom: 15px;
}


/* MODAL */

.modal {
    display: none;

    position: fixed;

    inset: 0;

    background: rgba(0,0,0,0.65);

    align-items: center;
    justify-content: center;

    padding: 20px;

    z-index: 3000;
}

.modal.show {
    display: flex;
}

.modal-box {
    width: 100%;
    max-width: 480px;

    background: white;

    border-radius: 15px;

    padding: 35px;

    position: relative;

    max-height: 90vh;

    overflow-y: auto;
}

.close {
    position: absolute;

    top: 15px;
    right: 20px;

    border: none;

    background: none;

    font-size: 30px;

    cursor: pointer;
}

.modal-box h2 {
    margin: 8px 0;
}

.modal-box form {
    margin-top: 20px;
}

.modal-box label {
    display: block;

    margin: 13px 0 5px;

    font-size: 13px;

    font-weight: bold;
}

.modal-box input {
    width: 100%;

    padding: 13px;

    border: 1px solid var(--border);

    border-radius: 8px;

    outline: none;
}

.submit-btn {
    width: 100%;

    border: none;

    background: var(--primary);

    color: white;

    padding: 14px;

    border-radius: 8px;

    margin-top: 20px;

    cursor: pointer;
}

.register-text {
    text-align: center;

    color: var(--muted);

    font-size: 13px;

    margin-top: 20px;
}

.register-text strong {
    color: var(--primary);

    cursor: pointer;
}


/* TOAST */

.toast {
    position: fixed;

    right: 25px;
    bottom: 25px;

    background: #111827;

    color: white;

    padding: 15px 20px;

    border-radius: 8px;

    transform: translateY(120px);

    transition: 0.3s;

    z-index: 5000;
}

.toast.show {
    transform: translateY(0);
}


/* DARK MODE */

body.dark {
    --background: #0f172a;
    --text: #f8fafc;
    --card: #1e293b;
    --border: #334155;
}

body.dark .navbar,
body.dark .service-card,
body.dark .professional,
body.dark .modal-box,
body.dark .hero-search,
body.dark .about-box div {
    background: #1e293b;
}

body.dark .hero {
    background: #0f172a;
}

body.dark .navbar a,
body.dark .service-card p,
body.dark .provider small {
    color: #94a3b8;
}

body.dark .stats {
    background: #1e293b;
}


/* RESPONSIVE */

@media (max-width: 1100px) {

    .service-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-visual {
        width: 320px;
    }

    .steps {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (max-width: 800px) {

    .navbar {
        padding: 0 5%;
    }

    nav {
        display: none;

        position: absolute;

        top: 75px;
        left: 0;

        width: 100%;

        padding: 20px;

        background: white;

        flex-direction: column;
    }

    nav.show {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .hero {
        flex-direction: column;

        padding: 70px 6%;

        text-align: center;
    }

    .hero-search {
        margin-left: auto;
        margin-right: auto;
    }

    .quick-links {
        justify-content: center;
    }

    .hero-visual {
        margin-top: 50px;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);

        gap: 25px;
    }

    .stats div {
        border: none;
    }

    .section-heading {
        align-items: flex-start;

        flex-direction: column;
    }

    .providers-grid {
        grid-template-columns: 1fr;
    }

    .about {
        grid-template-columns: 1fr;
    }

    footer {
        grid-template-columns: 1fr 1fr;
    }

}

@media (max-width: 550px) {

    .hero h1 {
        font-size: 42px;
    }

    .hero-search {
        flex-direction: column;

        gap: 8px;
    }

    .hero-search button {
        padding: 13px;
    }

    .service-grid,
    .steps {
        grid-template-columns: 1fr;
    }

    .stats {
        grid-template-columns: 1fr 1fr;
    }

    footer {
        grid-template-columns: 1fr;
    }

    .about h2 {
        font-size: 34px;
    }

}
