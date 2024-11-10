document.addEventListener("DOMContentLoaded", () => {
  let fortuneCount = 0;
  const maxFortunesPerDay = 3;

  const fortuneBtn = document.getElementById("getFortuneBtn");
  const fortuneResult = document.getElementById("fortuneResult");
  const fortuneMessage = document.getElementById("fortuneMessage");
  const fortuneEmoji = document.getElementById("fortuneEmoji");
  const fortuneCharm = document.getElementById("fortuneCharm");
  const fortuneMisfortune = document.getElementById("fortuneMisfortune");
  const shareBtn = document.getElementById("shareBtn");
  const closeBtn = document.getElementById("closeBtn");

  fortuneBtn.addEventListener("click", () => {
    if (fortuneCount < maxFortunesPerDay) {
      fetch("fortunes.json")
        .then((response) => response.json())
        .then((data) => {
          const randomFortune = data[Math.floor(Math.random() * data.length)];
          fortuneMessage.textContent = randomFortune.message;
          fortuneEmoji.textContent = randomFortune.emoji;
          fortuneCharm.textContent = randomFortune.charm;
          fortuneMisfortune.textContent = randomFortune.misfortune;
          fortuneResult.classList.remove("hidden");
          fortuneCount++;
        });
    } else {
      alert(
        "오늘의 포춘쿠키는 더 이상 볼 수 없습니다. 내일 다시 시도해 보세요!"
      );
    }
  });

  shareBtn.addEventListener("click", () => {
    alert("운세가 공유되었습니다! 한 번 더 운세를 볼 수 있습니다.");
    fortuneCount--; // 공유 후 추가 운세 보기 가능
  });

  closeBtn.addEventListener("click", () => {
    fortuneResult.classList.add("hidden");
  });
});
