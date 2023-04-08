AOS.init({
  once:true
});


$(".btn-project-list").click(function(){
  $(".contents__info").addClass("hidden");
  $(".contents__chat").addClass("hidden");
});
$(".btn-home").click(function(){
  $(".contents__info").removeClass("hidden");
  $(".contents__chat").removeClass("hidden");
});


function NewProjectChecker__init() {
  // 오늘 날짜
  let today = new Date();
  // 오늘 기준 한달 전 날짜
  let oneMonthAgo = new Date(today.setMonth(today.getMonth() - 1));
  // 테이블 리스트 개수 가져오기
  let tablelength = $(".project-table > tbody > tr").length;

  for (let i = 1; i <= tablelength; i++) {

    // 프로젝트 날짜 가져오기
    let projectdate = new Date($(".project-table > tbody > tr:nth-child(" + i + ") .project-date").text());

    // 프로젝트 날짜가 한달 전 이내일 때 신규 표시
    if (projectdate > oneMonthAgo) {
      $(".project-table > tbody > tr:nth-child(" + i + ") .project-name").append('<div class="badge badge-secondary badge-sm ml-1">NEW</div>');
    };

  }
}


NewProjectChecker__init();

// btn__side-menu

$(".btn__side-menu").click(function () {
  if ($(".side-menu").hasClass("off")) {
    $(".side-menu").removeClass("off");
  } else {
    $(".side-menu").addClass("off");
  }
});

// theme

$(".theme-swap-btn svg").click(function (event) {
  if ($("html").attr("data-theme") == "business") {
    $("html").attr("data-theme", "light");
  } else {
    $("html").attr("data-theme", "business");
  }
});


// formspree

function sendEmailForm(form) {
  if (form.email.value.length == 0) {
    alert('이메일 주소를 입력해주세요.');
    form.email.focus();
    return;
  }

  if (form.message.value.length == 0) {
    alert('메세지를 입력해주세요.');
    form.message.focus();
    return;
  }

  form.submit();

  form.email.value = '';
  form.message.value = '';
  form.submit.innerHTML = '전송되었습니다.';
  form.submit.disabled = true;
}



// cursor

class BigCircle {
  constructor() {
    this.root = document.body
    this.cursor = document.querySelector(".curzr")
    this.circle = document.querySelector(".curzr .circle")
    this.dot = document.querySelector(".curzr .dot")

    this.pointerX = 0
    this.pointerY = 0
    this.cursorSize = 34

    this.circleStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      top: `${ this.cursorSize / -2 }px`,
      left: `${ this.cursorSize / -2 }px`,
      zIndex: '2147483647',
      width: `${ this.cursorSize }px`,
      height: `${ this.cursorSize }px`,
      backgroundColor: '#fff0',
      borderRadius: '50%',
      transition: '500ms, transform 100ms',
      userSelect: 'none',
      pointerEvents: 'none'
    }

    this.dotStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: '2147483647',
      width: '6px',
      height: '6px',
      backgroundColor: '#fffd',
      borderRadius: '50%',
      userSelect: 'none',
      pointerEvents: 'none',
      transition: '250ms, transform 75ms'
    }

    if (CSS.supports("backdrop-filter", "invert(1) grayscale(1)")) {
      this.circleStyle.backdropFilter = 'invert(1) grayscale(1)'
      this.circleStyle.backgroundColor = '#fff0'
      this.dotStyle.backdropFilter = 'invert(1) grayscale(1)'
      this.dotStyle.backgroundColor = '#fff0'
    } else {
      this.circleStyle.backgroundColor = '#000'
      this.circleStyle.opacity = '0.75'
      this.dotStyle.backgroundColor = '#fff'
      this.dotStyle.opacity = '0.75'
    }

    this.init(this.circle, this.circleStyle)
    this.init(this.dot, this.dotStyle)
  }

  init(el, style) {
    Object.assign(el.style, style)
    this.cursor.removeAttribute("hidden")

  }

  move(event) {
    this.pointerX = event.pageX
    this.pointerY = event.pageY + this.root.getBoundingClientRect().y

    this.circle.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
    this.dot.style.transform = `translate3d(calc(-50% + ${this.pointerX}px), calc(-50% + ${this.pointerY}px), 0)`

    if (event.target.localName === 'button' ||
      event.target.localName === 'a' ||
      event.target.localName === 'label' ||
      event.target.onclick !== null ||
      event.target.className.includes('curzr-hover')) {
      this.hover()
    }
  }

  hover() {
    this.circle.style.transform += ` scale(1.5)`
  }

  click() {
    this.circle.style.transform += ` scale(0.75)`
    setTimeout(() => {
      this.circle.style.transform = this.circle.style.transform.replace(` scale(0.75)`, '')
    }, 35)
  }

  remove() {
    this.circle.remove()
    this.dot.remove()
  }
}

(() => {
  const cursor = new BigCircle()
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.onmousemove = function (event) {
      cursor.move(event)
    }
    document.onclick = function () {
      cursor.click()
    }
  } else {
    cursor.remove()
  }

})()


