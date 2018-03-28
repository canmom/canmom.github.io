const reveal = function(id) {
  document.getElementById(id).style.display = 'block'
  document.getElementById(id+'button').innerHTML = 'hide'
  document.getElementById(id+'button').onclick = function() { hide(id) }
}

const hide = function(id) {
  document.getElementById(id).style.display = 'none'
  document.getElementById(id+'button').innerHTML = 'reveal'
  document.getElementById(id+'button').onclick = function() { reveal(id) }
}
