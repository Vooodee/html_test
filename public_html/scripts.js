const select__parent = document.querySelector('.select__parent')
const select__select = document.querySelectorAll('.select__select')
const select__input = document.querySelector('.select__input')

const listEvent = (item_click) =>{
  select__input.value = item_click.target.innerText 
  select__parent.classList.remove('open-select')
}

select__parent.addEventListener('click', () =>{
  select__parent.classList.toggle('open-select')
})
select__select.forEach(item_select_list =>{
  item_select_list.addEventListener('click', listEvent);
})


/* mobile */

const close_btn = document.querySelector('.close-btn-menu')
const menu_container = document.querySelector('.header-container_menu')
const open_btn = document.querySelector('.mobile-menu')


open_btn.addEventListener('click', () =>{
  menu_container.classList.add('open-menu-container')
})

close_btn.addEventListener('click', () =>{
  menu_container.classList.remove('open-menu-container')
})

/* range value */

const item_range = document.querySelector('.item-range')
const range = document.querySelector('#range')

document.addEventListener('mousemove', () =>{

  item_range.innerText = range.value + '%'
})
