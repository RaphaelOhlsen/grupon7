// BOTÃO FLUTUTANTE TO TOP & EFEITO REDUÇÃO HEADER
const $wrapHeader = document.querySelector(".wrap-header");
const $btnToTop = document.querySelector(".btn-totop");
const landmark = 300;
// NEVEGAÇÃO NA DENTRO DA HOMEPAGE COM EFEITO DE SCROLL SUAVE
const $itemParceiros = document.querySelector("#itemParceiros");
const $itemContato = document.querySelector("#itemContato");
const $Partners = document.querySelector(".wrap-partners");
const $Contacts = document.querySelector(".main-footer");
let $positionPartners = 0;
let $positionContacts = 0;
// NEVEGAÇÃO NA DENTRO DA PÁGINA SEGUROS COM EFEITO DE SCROLL SUAVE
const $btnPF = document.querySelector("#btnPF");
const $btnPJ = document.querySelector("#btnPJ");
const $seguroPF = document.querySelector("#seguroPF");
const $seguroPJ = document.querySelector("#seguroPJ");
let $positionSeguroPF = 0;
let $positionSeguroPJ = 0;
// VARIÁVEIS
const breakPhone = 599;
const descontoAlturaHeader = 80;
const $view = window.innerWidth;

//BOTÃO FLUTUTANTE TO TOP & EFEITO REDUÇÃO HEADER
window.onscroll = function() {
  var top = window.pageYOffset;
  if (top > landmark) {
    $btnToTop.classList.add("-visible");
    $wrapHeader.classList.add("scrolleffect");
  } else {
    $btnToTop.classList.remove("-visible");
    $wrapHeader.classList.remove("scrolleffect");
  }
};

$btnToTop.addEventListener("click", function() {
  smoothScroll($wrapHeader, 2000, 0);
});

// NEVEGAÇÃO DENTRO DA HOMEPAGE COM EFEITO DE SCROLL SUAVE
if ($Partners != null) {
  $positionPartners = $Partners.getBoundingClientRect().top;
}

if ($Contacts != null) {
  $positionContacts = $Contacts.getBoundingClientRect().top;
}

$itemParceiros.addEventListener("click", function() {
  smoothScroll($Partners, 2000, $positionPartners - descontoAlturaHeader);
});

$itemContato.addEventListener("click", function() {
  smoothScroll($Contacts, 2000, $positionContacts - descontoAlturaHeader);
});

//NEVEGAÇÃO DENTRO DA PÁGINA SEGUROS COM EFEITO DE SCROLL SUAVE
if ($btnPF != null && $btnPJ != null) {
  $positionSeguroPF = $seguroPF.getBoundingClientRect().top;
  $positionSeguroPJ = $seguroPJ.getBoundingClientRect().top;
  console.log($positionSeguroPJ);

  $btnPF.addEventListener("click", function() {
    if ($view > breakPhone) {
      smoothScroll($seguroPF, 2000, $positionSeguroPF - descontoAlturaHeader);
    } else {
      smoothScroll($seguroPF, 2000, $positionSeguroPF);
    }
  });
  $btnPJ.addEventListener("click", function() {
    if ($view > breakPhone) {
      smoothScroll($seguroPJ, 2000, $positionSeguroPJ - descontoAlturaHeader);
    }
    // } else {
    //   smoothScroll($seguroPJ, 2000, $positionSeguroPJ);
    // }
  });
}

// CONTROLA O EFEITO DE SCROLL SUAVE
const smoothScroll = (target, duration, position) => {
  let $target = target;
  let $targetPosition = position;
  let $startPosition = window.pageYOffset;
  let distance = $targetPosition - $startPosition;
  let startTime = null;

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, $startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};
