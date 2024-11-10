let fortunesAvailable = 3;

async function getFortune() {
  if (fortunesAvailable > 0) {
    const response = await fetch("fortunes.json");
    const fortunes = await response.json();
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    document.getElementById("fortune-message").innerHTML = `
            <p>${fortune.message}</p>
            <p>이모티콘: ${fortune.emoji}</p>
            <p>주문: ${fortune.charm}</p>
            <p>비운의 아이템: ${fortune.unluckyItem}</p>
        `;

    fortunesAvailable--;
    if (fortunesAvailable === 0) {
      document.getElementById("fortune-button").style.display = "none";
    }
    document.getElementById("share-button").style.display = "block";
  } else {
    document.getElementById("fortune-message").innerText =
      "오늘의 운세를 모두 사용했습니다. 공유 버튼을 눌러 운세를 더 확인해보세요!";
  }
}

function shareFortune() {
  // 여기에 공유 기능을 구현하세요.
  fortunesAvailable++;
  document.getElementById("fortune-button").style.display = "block";
  document.getElementById("share-button").style.display = "none";
}

document.getElementById("fortune-button").onclick = getFortune;
