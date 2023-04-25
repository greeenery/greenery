// AOS
AOS.init({
  once: true
});


function NavFunction__init() {
  // project-list
  $(".btn-project-list").click(function () {
    $(".contents__info").addClass("hidden");
    $(".contents__chat").addClass("hidden");
  });
  $(".btn-home").click(function () {
    $(".contents__info").removeClass("hidden");
    $(".contents__chat").removeClass("hidden");
  });


  // theme
  $(".theme-swap-btn svg").click(function (event) {
    if ($("html").attr("data-theme") == "business") {
      $("html").attr("data-theme", "light");
    } else {
      $("html").attr("data-theme", "business");
    }
  });
}
NavFunction__init();


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


