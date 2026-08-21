const services = [
  ["▥", "Business Intelligence", "Transform raw data into actionable insights with Sisense—the premium BI solution built for massive datasets, embedded analytics, and flexible deployment."],
  ["✦", "Artificial Intelligence", "Practical AI systems that turn ambitious ideas into measurable products and smarter workflows."],
  ["</>", "Web Applications", "Secure, scalable web applications designed around the way your business works."],
  ["▣", "Mobile Applications", "We craft high-quality mobile experiences that run seamlessly across smartphones and help your business connect with users effectively."],
  ["▤", "E-commerce solutions", "Thoughtful commerce experiences that make every customer interaction count."],
  ["▧", "Workshops & Consulting", "Product discovery and technical direction for confident decisions."],
  ["✽", "UX Design", "Research-led product experiences that feel clear and useful."],
  ["▰", "UI Design", "A distinctive interface system with precision in every detail."]
];
const trust = [["♕","Proven Results","Over a decade of experience launching successful web and mobile products for SMEs, startups, and government institutions."],["⚒","Custom Solutions","Tailor-made web and mobile applications that bring your unique vision to life with precision and innovation."],["▱","Advanced Technology","Expert development powered by modern stacks including JavaScript, PHP, Python, Flutter and React Native."],["▥","Comprehensive Services","End-to-end support from UX workshops to managed hosting—meeting all your digital needs in one place."],["◇","Value-Driven Pricing","High-quality, budget-optimized solutions delivered by our international team of in-house experts."]];

document.querySelector('#service-list').innerHTML = services.map(([icon,title,detail],index) => `<article class="service ${index === 3 ? 'open' : ''}"><div class="service-head"><span class="service-icon">${icon}</span><b>${title.split(' ')[0]}</b> ${title.split(' ').slice(1).join(' ')}<span class="chev">⌄</span></div><p class="service-detail">${detail}<br><a href="#footer">see more →</a></p></article>`).join('');
document.querySelectorAll('.service').forEach(item => item.addEventListener('click', () => { document.querySelectorAll('.service').forEach(x => x.classList.remove('open')); item.classList.add('open'); }));
document.querySelector('#trust-grid').innerHTML = trust.map(([icon,title,text]) => `<article class="trust-card"><i>${icon}</i><h3>${title}</h3><p>${text}</p></article>`).join('');
document.querySelector('#article-row').innerHTML = Array.from({length:4}, () => `<article class="article"><div class="article-copy"><span class="tag">Technologies</span><h3>Agility Isn’t Dead. It’s Finally Becoming Real</h3><small>April 29, 2026</small></div><div class="article-image"></div></article>`).join('');
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('show'));
