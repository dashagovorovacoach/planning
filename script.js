const config = {
  bookingUrl: "https://calendar.app.google/D9NGnU5cNgPJ2Lm37",
  vkVideoIframeUrl: "https://vkvideo.ru/video\_ext.php?oid=-241161782&id=456239017&hash=c3bb0d59ad31803d&hd=3",
  socials: { telegram: null, whatsapp: null, vk: null, instagram: null },
  documents: { offer: null, privacy: null },
};

const faq = [
  [
    "А если я уже много раз составляла планы и не выполняла их?",
    "Мы не пишем очередной список чужих целей.<br/><br/>Сначала разбираемся, что сейчас происходит в твоей жизни, куда ты хочешь прийти, зачем тебе это, что сейчас мешает и что действительно имеет значение. И только после этого переводим это в конкретные действия.<br/><br/>Поэтому результат консультации — не просто список «хотелок», а связка:<br/>видение → цели → приоритет → конкретные шаги",
  ],
  [
    "Имеет ли смысл планировать в условиях полной неопределенности?",
    "Тогда планирование может быть особенно полезным.<br/>Тебе не обязательно знать, что будет через 10 лет. Мы не пытаемся предсказать будущее.<br/><br/>Мы создаем образ того, как бы тебе хотелось жить, если можно выбирать. А дальше смотрим, что из этого зависит от тебя уже сейчас и какой следующий шаг имеет смысл сделать. Это возвращает чувство контроля.<br/><br/>План дает направление, общее понимание вектора, помогает расставить приоритеты.",
  ],
  [
    "А не убивает ли планирование спонтанность и все хорошее, что может случиться само?",
    "Я тоже не хочу планировать каждый свой шаг.<br/><br/>Мы планируем направление, а не каждую минуту твоей жизни. Поэтому в плане всегда остается место для случайностей, новых возможностей, путешествий, людей и решений, которые невозможно было предугадать.<br/><br/>Когда понятно, куда ты хочешь двигаться, у тебя остается гораздо больше свободы выбирать, как именно туда идти. И часто мы приходим к цели неожиданным для нас образом.",
  ],
  [
    "А если планирование загоняет меня в рамки?",
    "Твой план — не контракт с собой на ближайшие 10 лет.<br/><br/>Жизнь меняется, и план тоже может меняться. Его задача не в том, чтобы расписать каждый твой шаг и лишить тебя спонтанности. Наоборот, когда ты понимаешь направление, тебе проще выбирать: куда идти, а где можно спокойно свернуть с маршрута.<br/><br/>План дает опору, а не клетку. Гибкость - неотъемлемая часть планирования.",
  ],
  [
    "А если я вообще не понимаю, чего хочу?",
    "Это не проблема — это цель встречи.<br/><br/>Тебе не нужно приходить с готовой целью или списком желаний. Наоборот, одна из задач консультации — разобраться, чего ты действительно хочешь, что для тебя важно и каким ты видишь свое будущее.<br/><br/>Мы не будем придумывать цели ради целей. Сначала ищем твое настоящее «хочу», а уже потом переводим его в план.",
  ],
  [
    "А если я не выполню свой план?",
    "Планирование — не экзамен на дисциплину и успешность.<br/><br/>Если через несколько месяцев что-то изменилось, цель перестала быть важной или план оказался нереалистичным — это не провал. Это информация. Невыполненные задачи часто говорят нам что-то важное о наших целях.  И План поможет это заметить.<br/><br/>Мне важно, чтобы твой план помогал тебе жить свою жизнь, а не заставлял соответствовать собственному списку задач.",
  ],
];

const faqContainer = document.querySelector("[data-faq]");
faq.forEach(([question, answer], index) => {
  const item = document.createElement("article");
  item.className = "faq-item";
  item.innerHTML = `<button aria-expanded="false" aria-controls="faq-${index}"><span>${question}</span><b aria-hidden="true">+</b></button><div class="faq-answer" id="faq-${index}" hidden><p>${answer}</p></div>`;
  item.querySelector("button").addEventListener("click", () => {
    const open = item.querySelector("button").getAttribute("aria-expanded") === "true";
    item.querySelector("button").setAttribute("aria-expanded", String(!open));
    item.querySelector("b").textContent = open ? "+" : "−";
    item.querySelector(".faq-answer").hidden = open;
  });
  faqContainer.append(item);
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

const setMenuState = (open) => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.classList.toggle("menu-toggle--expanded", open);

  mobileMenu.classList.toggle("mobile-menu--expanded", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  mobileMenu.toggleAttribute("inert", !open);
};

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isExpanded);
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

// const menuButton = document.querySelector(".menu-button");
// const overlay = document.querySelector(".menu-overlay");

// const setMenu = (open) => {
//   overlay.hidden = !open;
//   menuButton.setAttribute("aria-expanded", String(open));
//   document.body.classList.toggle("menu-open", open);
// };

// menuButton.addEventListener("click", () => setMenu(overlay.hidden));

// document.querySelector(".menu-close").addEventListener("click", () => setMenu(false));

// overlay.addEventListener("click", (event) => {
//   if (event.target === overlay) setMenu(false);
// });

// overlay.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") setMenuState(false);
// });

if (config.vkVideoIframeUrl)
  document.querySelector("[data-vk-video]").innerHTML =
    `<iframe src="${config.vkVideoIframeUrl}" title="Видео о консультации по планированию" allowfullscreen></iframe>`;

const socialLabels = { telegram: "Telegram", instagram: "Instagram", vk: "ВКонтакте" };
document.querySelector("[data-footer-socials]").innerHTML = Object.entries(socialLabels)
  .map(([name, label]) => {
    const image = `<img src="assets/${name}.svg" alt="${label}">`;
    return config.socials[name]
      ? `<a href="${config.socials[name]}" target="_blank" rel="noreferrer">${image}</a>`
      : image;
  })
  .join("");

document.querySelector("[data-legal]").innerHTML = config.documents.offer
  ? `<a href="${config.documents.offer}" target="_blank" rel="noreferrer">Публичная оферта</a>`
  : "<p>Публичная оферта</p>";
document
  .querySelector("[data-legal]")
  .insertAdjacentHTML(
    "beforeend",
    config.documents.privacy
      ? `<a href="${config.documents.privacy}" target="_blank" rel="noreferrer">Политика обработки персональных данных</a>`
      : "<p>Политика обработки персональных данных</p>",
  );
