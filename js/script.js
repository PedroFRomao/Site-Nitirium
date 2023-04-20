//menu
import React, { useEffect, useState } from 'react';
import Header from './components/Header';


function menu() {

  const [ativaCor, setAtivaCor] = useState(false)

  useEffect(function(){
    function posicaoScroll(){
      if(window.scrollY > 10){
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }
  
    window.addEventListener('scroll', posicaoScroll);
  }, []);
}

/*Scroll suave*/

const menuItems = document.querySelectorAll('.menu a[href^="#"]')

console.log(menuItems);

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 120;
  scrollToPosition(to);
}

function scrollToPosition(to){
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

