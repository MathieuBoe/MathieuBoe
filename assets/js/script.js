// Skills Bars
$('.skill-percent').each(function () {
  $(this).animate({
    width: $(this).attr('data-percent')
  }, "fast");
});

// play video loisir overwatch
$(document).ready(function () {
  $(".game").hover(function () {
    $(this).children("video")[0].play();
  }, function () {
    var el = $(this).children("video")[0];
    el.pause();
    el.currentTime = 0;
  });
});

// contact form

$(document).ready(function () {

  //material contact form
  $('.gform').find('.form-control').each(function () {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
      });
    }
  })
  $('.gform').find('.form-control').focus(function () {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px'
    }, 300);
  })
  $('.gform').find('.form-control').blur(function () {
    if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
      }, 300);
    }
  })

});

// picme puffin

const wrapper = document.querySelector('.wrapper')
if (wrapper) wrapper.classList.add('magictime', 'puffIn')


const containerleft = document.querySelectorAll('.container.left')
if (containerleft) {
  containerleft.forEach(function (element) {
    element.classList.add('magictime', 'tinLeftIn', 'zindex')
  })
}

const containerright = document.querySelectorAll('.container.right')
if (containerright) {
  containerright.forEach(function (element) {
    element.classList.add('magictime', 'tinRightIn', 'zindex')
  })
}

const portfolio = document.querySelector('#portfolio')
if (portfolio) portfolio.classList.add('magictime', 'spaceInUp')

const hobbies = document.querySelector('.hobbywrapper')
if (hobbies) hobbies.classList.add('magictime', 'spaceInUp')

const contact = document.querySelector('#section')
if (contact) contact.classList.add('magictime', 'vanishIn')