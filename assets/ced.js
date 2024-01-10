// Get the modal
var social_modal = document.getElementById("social_Modal");
// Get the button that opens the modal
//var social_btn = document.getElementById("social_myBtn");
// Get the <span> element that closes the modal
var social_span = document.getElementsByClassName("social_close")[0];
// When the user clicks the button, open the modal
/*social_btn.onclick = function() {
  social_modal.style.display = "block";
}*/
// When the user clicks on <span> (x), close the modal
if(social_span){
social_span.onclick = function() {
  social_modal.style.display = "none";
}
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == social_modal) {
    social_modal.style.display = "none";
  }
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if(document.getElementById("defaultOpen")){
  document.getElementById("defaultOpen").click();
}
$(".ced_modal_inner_img").each(function(){
    $(this).click(function(){
      src_fetched = $(this).data('cedimg');
      $('.main_img_ced').attr('src',src_fetched)
      openCity(event, 'ced_modal_image')
      social_modal.style.display = "block";
    })
  });
$('.ced_video_btn').each(function(){
    $(this).click(function(){
      $('.ced_main_video').attr('src', $(this).prev().children().attr('src'))
    })
  });
$('.ced_video_btn_modal').each(function(){
    $(this).click(function(){
      $('.ced_main_video').attr('src', $(this).prev().children().attr('src'))
      openCity(event, 'ced_modal_video')
      social_modal.style.display = "block";
    })
  });
$(document).on('change', '.quantity_select_ced', function() {
console.log('select ced');
console.log(this);
  if($(this).val() == '10+'){
    $(this).attr('disabled',true);
    $(this).parent().css('display','none');
    $(this).removeAttr('name');
    $('.quantity_input_ced').attr('name', 'quantity');
    $('.quantity_input_ced').val(10);
    $('.quantity_input_ced').attr('disabled',false);
    $('.quantity_input_ced_wrap').css('display','inline-flex');
  }
})
$('.quantity_input_ced').change(function(){
  $('.quantity_select_ced').attr('disabled',false);
  $('.quantity_select_ced option').each(function(){
    $(this).removeAttr('selected')
  })
  $('.quantity_select_ced').append('<option selected value="'+$(this).val()+'">'+$(this).val()+'</option>');
  $('.quantity_select_ced').attr('disabled',true);
})
$('.ced_modal_inner_vdo').each(function(){
  var src_vdo = $(this).attr('src');
  $(this).attr('src',src_vdo+'&autoplay=0')
  $(this).removeAttr('autoplay')
})
var copy_btn = document.getElementsByClassName("copy_link_btn_ced")[0];
if(copy_btn){
copy_btn.addEventListener('click',function(e){
  e.preventDefault()
  navigator.clipboard.writeText(window.location.href);
})
}
$(".ced_thumbnail_img").each(function(){
    $(this).click(function(){
      src_fetched = $(this).data('cedimg');
      $('.containerZoom').css('background-image', 'url(' + src_fetched + ')');
      $('.main_img_ced_wrap img').attr('src',src_fetched)
    })
  });
const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');
accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));
function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;
console.log(thisItem.parentNode);
  var targetElement = document.querySelector('#Description');
  console.log(targetElement)
 if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY -110; // Adjust the offset value
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}
  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}