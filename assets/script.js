let fortunesAvailable = 3;

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
  document
    .getElementById("fortune-button")
    .addEventListener("click", getFortune);
  document
    .getElementById("share-fortune-button")
    .addEventListener("click", shareFortune);
});

async function getFortune() {
  console.log("getFortune function called");
  if (fortunesAvailable > 0) {
    try {
      const response = await fetch("fortunes.json");
      if (response.ok) {
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
          document.getElementById("fortune-button").disabled = true;
        }
        document.getElementById("share-button").style.display = "block";
      } else {
        console.error("포춘 데이터를 불러오는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("Fetch 요청 중 오류가 발생했습니다:", error);
    }
  } else {
    document.getElementById("fortune-message").innerText =
      "오늘의 운세를 모두 사용했습니다. 공유 버튼을 눌러 운세를 더 확인해보세요!";
  }
}

function shareFortune() {
  console.log("shareFortune function called");
  fortunesAvailable++;
  document.getElementById("fortune-button").disabled = false;
  document.getElementById("share-button").style.display = "none";
}
