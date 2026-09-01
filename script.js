const config = {
  bookingUrl: null,
  vkVideoIframeUrl: null,
  socials: { telegram: null, whatsapp: null, vk: null, instagram: null },
  documents: { offer: null, privacy: null },
};

const faq = [
  ['А если я уже много раз составляла планы и не выполняла их?', 'Здесь не будет жёстких обещаний и универсальных списков. На встрече мы ищем честную точку опоры, реальные условия и шаги, которые можно сделать именно в твоём ритме.'],
  ['Имеет ли смысл планировать в условиях полной неопределенности?', 'Да. План — не договор с будущим, а ориентир. Он помогает увидеть, что для тебя важно сейчас, выбрать направление и сохранить возможность менять маршрут.'],
  ['Можно ли прийти, если я сейчас на перепутье?', 'Да, это один из лучших моментов для такой встречи. Мы распутаем варианты и сформулируем ближайшее бережное решение.'],
  ['А если планирование загоняет меня в рамки?', 'Планирование может быть гибким. Ты получишь живой документ, к которому можно возвращаться, пересматривать и адаптировать его под жизнь.'],
  ['А если я вообще не понимаю, чего хочу?', 'Не нужно приходить с готовым ответом. Методика начинается с диагностики: она помогает заметить важное и постепенно собрать направление.'],
  ['А если я не выполню свой план?', 'План — не оценка твоей успешности. Если что-то не случилось, это повод скорректировать шаги, а не обвинять себя.'],
];

document.querySelectorAll('[data-booking]').forEach((button) => button.addEventListener('click', () => {
  if (config.bookingUrl) window.open(config.bookingUrl, '_blank', 'noopener');
  else alert('Ссылка на запись ещё не добавлена. Укажите bookingUrl в script.js.');
}));

const faqContainer = document.querySelector('[data-faq]');
faq.forEach(([question, answer], index) => {
  const item = document.createElement('article'); item.className = 'faq-item';
  item.innerHTML = `<button aria-expanded="false" aria-controls="faq-${index}"><span>${question}</span><b aria-hidden="true">+</b></button><div class="faq-answer" id="faq-${index}" hidden><p>${answer}</p></div>`;
  item.querySelector('button').addEventListener('click', () => { const open = item.querySelector('button').getAttribute('aria-expanded') === 'true'; item.querySelector('button').setAttribute('aria-expanded', String(!open)); item.querySelector('b').textContent = open ? '+' : '−'; item.querySelector('.faq-answer').hidden = open; });
  faqContainer.append(item);
});

const menuButton = document.querySelector('.menu-button'), overlay = document.querySelector('.menu-overlay');
const setMenu = (open) => { overlay.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('menu-open', open); };
menuButton.addEventListener('click', () => setMenu(overlay.hidden));
document.querySelector('.menu-close').addEventListener('click', () => setMenu(false));
overlay.addEventListener('click', (event) => { if (event.target === overlay) setMenu(false); });
overlay.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

if (config.vkVideoIframeUrl) document.querySelector('[data-vk-video]').innerHTML = `<iframe src="${config.vkVideoIframeUrl}" title="Видео о консультации по планированию" allowfullscreen></iframe>`;

const socialLabels = { telegram: 'Telegram', instagram: 'Instagram', vk: 'ВКонтакте' };
document.querySelector('[data-footer-socials]').innerHTML = Object.entries(socialLabels).map(([name, label]) => {
  const image = `<img src="assets/${name}.png" alt="${label}">`;
  return config.socials[name] ? `<a href="${config.socials[name]}" target="_blank" rel="noreferrer">${image}</a>` : image;
}).join('');

document.querySelector('[data-legal]').innerHTML = config.documents.offer ? `<a href="${config.documents.offer}" target="_blank" rel="noreferrer">Публичная оферта</a>` : '<span>Публичная оферта</span>';
document.querySelector('[data-legal]').insertAdjacentHTML('beforeend', config.documents.privacy ? `<a href="${config.documents.privacy}" target="_blank" rel="noreferrer">Политика обработки персональных данных</a>` : '<span>Политика обработки персональных данных</span>');
