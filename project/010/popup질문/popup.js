document.addEventListener('DOMContentLoaded', isExpired);

const closeBtn = document.querySelector('.closeBtn');
const notTodayBtn = document.querySelector('.notTodayBtn');
const popup = document.querySelector('.popup-wrap');

// 팝업창 닫기
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// 오늘 하루 열지 않기
notTodayBtn.addEventListener('click', () => {
  setExpiryKey();
  popup.classList.add('hidden');
});

function isExpired() {
  const expiryKey = getExpiryKey();
  const now = new Date().getTime();

  // expiryKey가 없거나 만료된 경우 팝업 표시, 그렇지 않으면 감추기
  if (!expiryKey || parseInt(expiryKey, 10) < now) {
    popup.classList.remove('hidden');
  } else {
    popup.classList.add('hidden');
  }
}

function getExpiryKey() {
  return localStorage.getItem('expiryKey3');
}

function setExpiryKey() {
  const now = new Date().getTime();
  const expiryTime = 24 * 60 * 60 * 1000; // 24시간 후 만료
  const expiryKey = now + expiryTime;
  localStorage.setItem('expiryKey3', expiryKey);
}


/*

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup-wrap');
  const closeBtn = document.querySelector('.closeBtn');
  const notTodayBtn = document.querySelector('.notTodayBtn');

  // 만료 여부 확인
  const expiryKey = localStorage.getItem('expiryKey');
  const now = new Date().getTime();

  // 팝업 표시/감추기 결정
  if (!expiryKey || parseInt(expiryKey) < now) {
    popup.classList.remove('hidden');
  } else {
    popup.classList.add('hidden');
  }

  // 팝업창 닫기
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  // 오늘 하루 열지 않기
  notTodayBtn.addEventListener('click', () => {
    const expiryTime = 24 * 60 * 60 * 1000; // 24시간
    localStorage.setItem('expiryKey', now + expiryTime);
    popup.classList.add('hidden');
  });
}); 

*/