export const launchPlayer = function () {
  const allPlayers = Array.from(document.querySelectorAll(".player"));
  const playIconSvg = `<svg class="play-icon player-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 30">
                        <path fill="#001D3D" d="M24.0965 13.2794c1.3072.7747 1.3072 2.6665 0 3.4412l-21.0769 12.49c-1.3332.79-3.01960131-.1709-3.01960125-1.7206L-1.5e-7 2.50998C-1e-7 .960266 1.6864-.00065259 3.0196.789394L24.0965 13.2794Z"/>
                      </svg>`;
  const pauseIconSvg = `<svg class="pause-icon player-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14">
                          <rect width="2" height="14" x="7" rx="1"/>
                          <rect width="2" height="14" rx="1"/>
                        </svg>`;

  // MAIN MECHANICS

  allPlayers.forEach((player) => {
    const audio = player.querySelector("audio");
    const btn = player.querySelector(".player-btn");

    togglePlayer(player, audio, btn, allPlayers);
  });

  // HELPERS

  // Функция выключает другие плэеры на страницы, если нажимаем конкретный. и меняет иконки у выключенных
  function turnOffAllPlayers(allPlayersArray) {
    allPlayersArray.forEach((player) => {
      const audio = player.querySelector("audio");
      const btn = player.querySelector(".player-btn");

      if (!audio.paused) {
        audio.pause();
        btn.innerHTML = playIconSvg;
        player.classList.remove("is-playing");
      }
    });
  }

  // Возвращает ползунок и аудио на начало
  function returnPlayerToStart(audio, btn) {
    audio.currentTime = 0;
    btn.innerHTML = playIconSvg;
  }

  // Функция включает и выключает плеер, учитывает, что надо выключить перед этим другие
  function togglePlayer(player, audio, btn, allPlayersArray) {
    btn.onclick = () => {
      if (audio.paused) {
        turnOffAllPlayers(allPlayersArray);
        audio.play();
        btn.setAttribute("aria-label", "Остановить аудио");
        btn.classList.add("playing");
        btn.innerHTML = pauseIconSvg;
        player.classList.add("is-playing");
      } else {
        audio.pause();
        btn.setAttribute("aria-label", "Включить аудио");
        btn.classList.remove("playing");
        btn.innerHTML = playIconSvg;
        player.classList.remove("is-playing");
      }
    };
  }
};
