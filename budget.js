// The simulator updates sample values only in the current browser session.
const initialValues = {
  boarding: { wallet: 2400, initialWallet: 3500, morale: 85, academic: 90 },
  dayscholar: { wallet: 1800, initialWallet: 2000, morale: 85, academic: 90 }
};

let state = { ...initialValues.boarding, buffer: 500, mode: 'boarding' };

const walletDisplay = document.querySelector('#wallet-display');
const moraleDisplay = document.querySelector('#morale-display');
const academicDisplay = document.querySelector('#academic-display');
const bufferDisplay = document.querySelector('#buffer-display');
const walletBar = document.querySelector('#wallet-progress-bar');
const moraleBar = document.querySelector('#morale-progress-bar');
const academicBar = document.querySelector('#academic-progress-bar');
const feedbackBox = document.querySelector('#decision-feedback');
const feedbackTitle = document.querySelector('#feedback-title');
const feedbackDescription = document.querySelector('#feedback-desc');
const feedbackIcon = document.querySelector('#feedback-icon');

function updateDashboard() {
  walletDisplay.textContent = state.wallet.toLocaleString();
  moraleDisplay.textContent = Math.max(0, Math.min(100, state.morale));
  academicDisplay.textContent = Math.max(0, Math.min(100, state.academic));
  bufferDisplay.textContent = state.buffer.toLocaleString();
  walletBar.style.width = `${Math.max(0, Math.min(100, (state.wallet / state.initialWallet) * 100))}%`;
  moraleBar.style.width = `${Math.max(0, Math.min(100, state.morale))}%`;
  academicBar.style.width = `${Math.max(0, Math.min(100, state.academic))}%`;
}

function showFeedback(title, message, icon = '✓') {
  feedbackIcon.textContent = icon;
  feedbackTitle.textContent = title;
  feedbackDescription.textContent = message;
  feedbackBox.hidden = false;
}

const choices = {
  A: { cost: 200, academics: 15, morale: -5, title: 'Calculated move! (KES −200)', message: 'You covered the printing, skipped the canteen, and protected the rest of your term budget.', icon: '✓' },
  B: { cost: 350, academics: 15, morale: 20, title: 'Squad vibes high, pockets strained! (KES −350)', message: 'You got the printing and the snacks. Keep an eye on your weekly spending for the rest of term.', icon: '!' },
  C: { cost: 50, academics: 5, morale: 10, title: 'Nairobi street genius! (KES −50)', message: 'You and your partner handwrote the project, bought one samosa, and kept most of your pocket money.', icon: '↗' }
};

document.querySelectorAll('.decision-card').forEach((button) => {
  button.addEventListener('click', () => {
    const choice = choices[button.dataset.choice];
    if (!choice) return;
    state.wallet = Math.max(0, state.wallet - choice.cost);
    state.academic = Math.min(100, state.academic + choice.academics);
    state.morale = Math.max(0, Math.min(100, state.morale + choice.morale));
updateDashboard();
    showFeedback(choice.title, choice.message, choice.icon);
  });
});

function investInHustle(button, cost, returnAmount, successMessage) {
  if (button.disabled) return;
  if (state.wallet < cost) {
    showFeedback('Not enough pocket money yet', `This idea needs KES ${cost.toLocaleString()} in starting capital. Try another move or reset your simulation.`, '!');
    return;
  }
  state.wallet = state.wallet - cost + returnAmount;
  state.morale = Math.min(100, state.morale + 8);
  button.disabled = true;
  button.textContent = 'Hustle completed';
  updateDashboard();
  showFeedback('Hustle win!', successMessage, '✓');
}

document.querySelector('#invest-beads-btn').addEventListener('click', (event) => {
  investInHustle(event.currentTarget, 800, 2000, 'Your wristbands sold. The KES 800 investment returned, with KES 1,200 profit added to your wallet.');
});
document.querySelector('#invest-flyer-btn').addEventListener('click', (event) => {
  investInHustle(event.currentTarget, 400, 1000, 'The posters sold. Your KES 400 investment came back with KES 600 profit.');
});

const modeButtons = {
  boarding: document.querySelector('#mode-boarding'),
  dayscholar: document.querySelector('#mode-dayscholar')
};
function setSchoolMode(mode) {
  state.mode = mode;
  state.wallet = initialValues[mode].wallet;
  state.initialWallet = initialValues[mode].initialWallet;
  state.morale = initialValues[mode].morale;
  state.academic = initialValues[mode].academic;
  modeButtons.boarding.classList.toggle('selected', mode === 'boarding');
  modeButtons.dayscholar.classList.toggle('selected', mode === 'dayscholar');
  modeButtons.boarding.setAttribute('aria-pressed', String(mode === 'boarding'));
  modeButtons.dayscholar.setAttribute('aria-pressed', String(mode === 'dayscholar'));
  document.querySelector('#term-week-label').textContent = mode === 'boarding' ? 'Week 4 of 13 (Term 2)' : 'Week 4 (Day scholar: commute priority)';
  feedbackBox.hidden = true;
  resetHustleButtons();
  updateDashboard();
}
modeButtons.boarding.addEventListener('click', () => setSchoolMode('boarding'));
modeButtons.dayscholar.addEventListener('click', () => setSchoolMode('dayscholar'));

function resetHustleButtons() {
  const beadsButton = document.querySelector('#invest-beads-btn');
  const flyerButton = document.querySelector('#invest-flyer-btn');
  beadsButton.disabled = false;
  flyerButton.disabled = false;
  beadsButton.textContent = 'Execute seed capital (−800)';
  flyerButton.textContent = 'Try design gig (−400)';
}
document.querySelector('#reset-sim-btn').addEventListener('click', () => {
  state = { ...initialValues[state.mode], buffer: 500, mode: state.mode };
  feedbackBox.hidden = true;
  resetHustleButtons();
  updateDashboard();
});
document.querySelector('#save-play-btn').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const originalLabel = button.innerHTML;
  button.innerHTML = '<span aria-hidden="true">✓</span> Strategy saved';
  window.setTimeout(() => { button.innerHTML = originalLabel; }, 2200);
});

const menuButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#main-navigation');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.querySelectorAll('a').forEach((item) => {
      item.classList.remove('nav-active');
      item.removeAttribute('aria-current');
    });
    link.classList.add('nav-active');
    link.setAttribute('aria-current', link.href.includes('chama.html') ? 'page' : 'location');
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('#search-button').addEventListener('click', () => {
  const searchTerm = window.prompt('What would you like to find? Try “canteen”, “budget”, or “hustle”.');
  if (!searchTerm || !searchTerm.trim()) return;
  const matchingSection = Array.from(document.querySelectorAll('main section')).find((section) => section.textContent.toLowerCase().includes(searchTerm.trim().toLowerCase()));
  if (matchingSection) {
    matchingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.alert('No matching topic found. Try “canteen”, “budget”, “leak”, or “hustle”.');
  }
});

updateDashboard();

const moneyCalculatorForm = document.querySelector('#money-calculator-form');
const pocketMoneyInput = document.querySelector('#pocket-money-amount');
const allocationOutputs = {
  needs: document.querySelector('#needs-amount'),
  savings: document.querySelector('#savings-amount'),
  spending: document.querySelector('#spending-amount'),
  sharing: document.querySelector('#sharing-amount')
};
const allocationTotal = document.querySelector('#allocation-total');
const formatKes = (amount) => `KES ${amount.toLocaleString('en-KE')}`;

moneyCalculatorForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!pocketMoneyInput.reportValidity()) return;

  const amount = Number(pocketMoneyInput.value);
  if (!Number.isSafeInteger(amount) || amount < 1 || amount > 1000000) {
    pocketMoneyInput.setCustomValidity('Enter a whole amount between KES 1 and KES 1,000,000.');
    pocketMoneyInput.reportValidity();
    pocketMoneyInput.setCustomValidity('');
    return;
  }

  const split = {
    needs: Math.round(amount * 0.5),
    savings: Math.round(amount * 0.2),
    spending: Math.round(amount * 0.2)
  };
  split.sharing = amount - split.needs - split.savings - split.spending;
  Object.entries(split).forEach(([category, value]) => {
    allocationOutputs[category].textContent = formatKes(value);
  });
  allocationTotal.textContent = formatKes(Object.values(split).reduce((sum, value) => sum + value, 0));
});

const moneyQuizForm = document.querySelector('#money-quiz-form');
const quizResult = document.querySelector('#quiz-result');
moneyQuizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const answers = ['b', 'a', 'a'];
  const score = answers.reduce((total, answer, index) => {
    return total + (moneyQuizForm.querySelector(`input[name="quiz-${index + 1}"]:checked`)?.value === answer ? 1 : 0);
  }, 0);
  quizResult.textContent = score === answers.length
    ? `Great job — ${score} out of ${answers.length} correct. You’re ready to give every shilling a plan!`
    : `You got ${score} out of ${answers.length} correct. Review the choices and try again — saving early and protecting emergency money are smart moves.`;
  quizResult.dataset.state = score === answers.length ? 'success' : 'retry';
  quizResult.hidden = false;
});
