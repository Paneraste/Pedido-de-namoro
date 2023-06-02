var btn = document.querySelector(".no");
var positionX, positionY;
var noButtonClicks = 0;

function getRandomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  btn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    positionX = getRandomPosition(-100, 100);
    positionY = getRandomPosition(-100, 100);
    btn.style.transform = `translate(${positionX}px, ${positionY}px)`;
    btn.style.transition = "all 0.3s ease";
    checkNoButtonClicks();
  });

  btn.addEventListener("touchend", function() {
    positionX = getRandomPosition(-100, 100);
    positionY = getRandomPosition(-100, 100);
    btn.style.transform = `translate(${positionX}px, ${positionY}px)`;
    btn.style.transition = "all 0.3s ease";
  });
} else {
  btn.addEventListener("mouseover", function() {
    positionX = getRandomPosition(-100, 100);
    positionY = getRandomPosition(-100, 100);
    btn.style.transform = `translate(${positionX}px, ${positionY}px)`;
    btn.style.transition = "all 0.3s ease";
  });
  btn.addEventListener("click", function() {
    checkNoButtonClicks();
  });
}

function thanks() {
  alert("Nós já namoramos! Mas te amo por me escolher de novo!");
}

var btnYes = document.querySelector(".yes");

btnYes.addEventListener("click", function() {
  thanks();
  openYouTubeVideo();
});

function openYouTubeVideo() {
  var videoId = "WRxwtV_x8nM";
  var youtubeUrl = "https://www.youtube.com/watch?v=WRxwtV_x8nM&themeRefresh=1";
  setTimeout(function() {
    window.location.href = youtubeUrl;
  }, 1000); // Aguarde 1 segundo antes de abrir o vídeo do YouTube
}

function not() {
  alert("Você nem está maluca de não aceitar, volte lá e clique no sim! :/");
}

function checkNoButtonClicks() {
  noButtonClicks++;
  if (noButtonClicks % 10 === 0) {
    not();
  }
}




/* ... seu código JavaScript existente ... */

/* Inicializar partículas */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

/* ... seu código JavaScript existente ... */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    shape: {
      type: "image",
      image: {
        src: "heart.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 15,
      random: true,
      anim: {
        enable: false
      }
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});


var leftImage = document.querySelector(".left-image");
var rightImage = document.querySelector(".right-image");

leftImage.addEventListener("click", function() {
  window.open("https://www.facebook.com/keila.oliveira.1293", "_blank");
});

rightImage.addEventListener("click", function() {
  window.open("https://www.facebook.com/0MORS", "_blank");
});


function expandImage(image) {
  image.classList.add("expanded-image");
}

function shrinkImage(image) {
  image.classList.remove("expanded-image");
}

function openLink(url) {
  window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("background-music");
  var playButton = document.getElementById("play-button");
  
  playButton.addEventListener("click", function() {
    audio.play();
    playButton.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var introScreen = document.getElementById("intro-screen");
  var playButton = document.getElementById("play-button");
  var question = document.getElementById("question");
  var leftImage = document.querySelector(".left-image");
  var rightImage = document.querySelector(".right-image");
  var audio = new Audio("your-music.mp3");

  playButton.addEventListener("click", function() {
    introScreen.style.display = "none";
    question.style.display = "block";
    leftImage.style.display = "block";
    rightImage.style.display = "block";
    audio.play();
  });
});

/* ... código anterior ... */

/* ... código anterior ... */

playButton.addEventListener("click", function() {
  introScreen.style.display = "none";
  question.style.display = "block";
  leftImage.style.display = "block";
  rightImage.style.display = "block";
  audio.play();

  setTimeout(function() {
    leftImage.style.animation = "slideLeftImage 2s forwards";
    rightImage.style.animation = "slideRightImage 2s forwards";
  }, 1000); // Espera 1 segundo antes de iniciar a animação
});

