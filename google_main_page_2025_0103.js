// 페이지가 로드되었을 때 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
  // 'till' 클래스 요소들을 모두 가져옵니다.
  const tillElements = document.querySelectorAll(".till");

  // 각 'till' 요소에 클릭 이벤트 리스너 추가
  tillElements.forEach(function (till) {
    till.addEventListener("click", function () {
      // data-url 속성에서 URL을 가져옵니다.
      const url = till.getAttribute("data-url");

      // 해당 URL로 이동합니다. 같은 페이지에서 열리도록 설정
      if (url && url !== "#") {
        window.location.href = url;
      }
    });
  });
});

// app-dropdown 실행 시
function toggleAppBox() {
  const appDropdown = document.getElementById("app-dropdown");
  const tooltiptext = appDropdown.querySelector(".tooltiptext");
  const appBox = appDropdown.querySelector(".app-box");

  if (appBox.style.display === "none" || appBox.style.display === "") {
    tooltiptext.style.display = "none";
    appBox.style.display = "block";
  } else {
    tooltiptext.style.display = "inline";
    appBox.style.display = "none";
  }
}

document
  .getElementById("app-dropdown")
  .addEventListener("click", function (event) {
    toggleAppBox();
    event.stopPropagation();
  });

document.addEventListener("click", function (event) {
  const appDropdown = document.getElementById("app-dropdown");
  const appBox = appDropdown.querySelector(".app-box");

  if (!appDropdown.contains(event.target) && appBox.style.display === "block") {
    appBox.style.display = "none";
    appDropdown.querySelector(".tooltiptext").style.display = "inline";
  }
});

// modal 작동
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var modalbtn = document.getElementsByClassName("modal-btn");
  var closeBtn = document.getElementsByClassName("close")[0];
  var appDropdown = document.getElementById("app-dropdown");
  var tooltiptext = appDropdown.querySelector(".tooltiptext");

  for (var i = 0; i < modalbtn.length; i++) {
    modalbtn[i].onclick = function () {
      modal.style.display = "block";
      tooltiptext.style.visibility = "hidden";
    };
  }

  closeBtn.onclick = function (event) {
    modal.style.display = "none";
    event.stopPropagation();
  };

  modal.onclick = function (event) {
    event.stopPropagation();
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
