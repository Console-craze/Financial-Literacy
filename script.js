// The four stages explain how a chama can move from a shared saving habit to accountable lending.
const stageInformation = {
  1: { title: 'Umoja: The Power of Aggregation', badge: 'Stage 1: Pooling mechanics', description: 'Individually, saving KES 2,000 a month feels painfully slow. Ten friends commit to the same goal, creating an instant lump sum of KES 20,000 every 30 days. No bank bureaucracy, zero account ledger maintenance fees.', burden: 'KES 2,000/mo', power: 'KES 20,000', lesson: 'Saving solo on M-Pesa is risky because Fuliza or temptation strikes easily. A Chama acts as a human smart-contract: missing a payment means letting down 9 real peers.', indicator: 'Month 1: All 10 send KES 2,000 into the pool', pot: 'KES 20,000', member: 0 },
  2: { title: 'The Merry-Go-Round (Potelea)', badge: 'Stage 2: Sequential rotation', description: 'Member #1 receives the full KES 20,000 pot in Month 1 to buy a school laptop or equipment. In Month 2, Member #2 gets it. By Month 10, everyone has received the lump sum once. Zero interest, pure forced liquidity.', burden: 'KES 2,000/mo', power: 'KES 20,000 payout', lesson: 'Member #1 essentially gets a 0% interest loan. Member #10 has forced themselves to save KES 20,000 without a bank manager taking ledger deductions.', indicator: 'Month 1 payout: KES 20,000 transferred to Member #1 (Amina)', pot: 'KES 20,000 out', member: 0 },
  3: { title: 'Table Banking & Micro-Loans', badge: 'Stage 3: Wealth accumulation', description: 'Rather than letting excess funds sit idle, members borrow from the emergency pool for weekend hustles or emergencies. Any agreed interest stays inside the group and is shared transparently.', burden: 'Optional borrowing', power: 'Internal growth', lesson: 'A table bank can help members access funds and share returns within their group. Agree on fair terms together and keep clear records of every loan.', indicator: 'Micro-loans active: 2 members borrowing from the shared fund', pot: 'KES 24,000*', member: 3 },
  4: { title: 'Social Collateral: Reputation as an Asset', badge: 'Stage 4: Accountability', description: 'Chama members protect the fund with clear agreements, open records, and accountability to one another. Strong relationships help—but documented rules and fair processes matter too.', burden: 'Peer accountability', power: 'Trust & transparency', lesson: 'Reputation is valuable, but never rely on social pressure alone. Use written agreements, two-person verification, and a realistic way to resolve missed payments.', indicator: 'Safeguards: Shared ledger, dual sign-off, and agreed rules', pot: 'KES 20,000', member: 6 }
};

const tabs = document.querySelectorAll('.stage-tab');
const memberNodes = document.querySelectorAll('.member');
const connectorLines = document.querySelectorAll('.connectors line');

function showStage(stageNumber) {
  const stage = stageInformation[stageNumber];
  if (!stage) return;

  tabs.forEach((tab) => {
    const isSelected = Number(tab.dataset.stage) === stageNumber;
    tab.classList.toggle('active', isSelected);
    tab.setAttribute('aria-selected', String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });
  document.querySelector('#stage-panel').setAttribute('aria-labelledby', `stage-tab-${stageNumber}`);
  document.querySelector('#stage-badge').textContent = stage.badge;
  document.querySelector('#stage-title').textContent = stage.title;
  document.querySelector('#stage-description').textContent = stage.description;
  document.querySelector('#burden').textContent = stage.burden;
  document.querySelector('#power').textContent = stage.power;
  document.querySelector('#lesson').textContent = stage.lesson;
  document.querySelector('#stage-indicator').textContent = `↔ ${stage.indicator}`;
  document.querySelector('#pot-value').textContent = stage.pot;

  memberNodes.forEach((node, index) => {
    node.classList.toggle('active-member', index === stage.member);
  });
  connectorLines.forEach((line, index) => {
    const isHighlighted = stageNumber === 1 || index === stage.member || (stageNumber === 3 && index === 1);
    line.style.stroke = isHighlighted ? (stageNumber === 2 ? '#e06d3b' : '#006c49') : '#aebbb0';
    line.style.strokeWidth = isHighlighted ? '2.5' : '1';
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => showStage(Number(tab.dataset.stage)));
  tab.addEventListener('keydown', (event) => {
    const currentIndex = Array.from(tabs).indexOf(tab);
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex !== currentIndex) {
      event.preventDefault();
      tabs[nextIndex].focus();
      showStage(Number(tabs[nextIndex].dataset.stage));
    }
  });
});

document.querySelectorAll('.chama-check').forEach((checkbox) => {
  checkbox.addEventListener('change', updateReadiness);
});

function updateReadiness() {
  const checkedCount = document.querySelectorAll('.chama-check:checked').length;
  const totalCount = document.querySelectorAll('.chama-check').length;
  document.querySelector('#score-text').textContent = `${checkedCount} / ${totalCount} Checked`;
  document.querySelector('#readiness-progress').style.width = `${(checkedCount / totalCount) * 100}%`;

  const messages = [
    'Check the protocols to evaluate readiness.',
    'Start with clear rules and shared record-keeping.',
    'Good start. A few important safeguards are still missing.',
    'Almost ready. Agree on the last missing safeguard.',
    'Your group has a strong foundation for a transparent chama.'
  ];
  document.querySelector('#score-feedback').textContent = messages[checkedCount];
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
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
    link.setAttribute('aria-current', 'location');
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('.search-button').addEventListener('click', () => {
  const searchTerm = window.prompt('What would you like to find in this guide?');
  if (!searchTerm || !searchTerm.trim()) return;

  const matchingSection = Array.from(document.querySelectorAll('main section')).find((section) =>
    section.textContent.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  if (matchingSection) {
    matchingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.alert('No matching topic found. Try “chama”, “bank”, or “savings”.');
  }
});
