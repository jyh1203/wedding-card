// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed




// 내비바가 다른데 터치하면 닫히도록 하는 기능
$(function () {         
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});





document.querySelectorAll('button[data-type="copy"]')
  .forEach(function(button){
      button.addEventListener('click', function(){
      let email = this.parentNode.parentNode
        .querySelector('td[data-type="email"]')
        .innerText;
      
      let tmp = document.createElement('textarea');
          tmp.value = email;
          tmp.setAttribute('readonly', '');
          tmp.style.position = 'absolute';
          tmp.style.left = '-9999px';
          document.body.appendChild(tmp);
          tmp.select();
          document.execCommand('copy');
          document.body.removeChild(tmp);
          console.log(`${email} copied.`);
    });
});

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});





(function()         //클립보드 저장 기능
{
  let buttons = document.getElementsByTagName('Button');
  for(let i = 0; i < buttons.length; i++)
  {
    let button = buttons[i];
    button.addEventListener('click', e =>
    {
      let button = e.target;
      let bankinfo = button.parentNode.parentNode.getElementsByClassName('bankinfo')[0].innerHTML;
      let text = document.createElement('input');
      text.setAttribute('type', 'text');
      text.value = bankinfo;
      document.body.appendChild(text);
      text.select();
      document.execCommand('copy');
      alert("계좌번호("+bankinfo+")가 클립보드에 복사되었습니다");
      document.body.removeChild(text);
      
    });
  }
})();
