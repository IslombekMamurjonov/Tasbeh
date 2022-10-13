'use strict'

const btn_s = document.querySelector('.count_start')
const btn_r = document.querySelector('.count_reset')
const screen = document.querySelector('.screen')

btn_s.addEventListener('click', () => {
    screen.value = parseInt(screen.value) + 1;
})

btn_r.addEventListener('click', () => {
    screen.value = 0;
})