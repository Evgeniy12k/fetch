'use strict';
    

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import command from './modules/toggleImg';

// timer
countTimer('31 december 2020'); 
// menu    
toggleMenu();   
// popup 
togglePopUp();
//tab
tabs();   
 //  слайдер
slider();            
           
 // Работа с изображениями. Смена аватарки  
command;         
 // создание калькулятора. 
calc(100);
// работа с формой
// set-ajax-form
sendForm();