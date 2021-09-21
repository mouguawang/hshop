function close(){
  document.querySelector('.container').classList.remove('show-nav')
}
function open(){
  document.querySelector('.container').classList.add('show-nav')
}
export{
  close,
  open
}
