var defined = document.querySelector('.show-hide');
var wrapper = document.querySelector('.comment-wrapper');

wrapper.style.display = 'none';

defined.onclick = function() {
  if(wrapper.style.display === 'block') {
    wrapper.style.display = 'none';
    defined.textContent = 'Show comments';
  } else {
    wrapper.style.display = 'block';
    defined.textContent = 'Hide comments';
  }
}