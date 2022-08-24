/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function calc() {
    
    //create array with entered values
    let arr = [];
    arr[0] = parseFloat(document.getElementById("num1").value);
    arr[1] = parseFloat(document.getElementById("num2").value);
    arr[2] = parseFloat(document.getElementById("num3").value);

    //find max value 
    var max = Math.max(...arr);
    document.getElementById("max").textContent = max;

    //find min value
    var min = Math.min(...arr);
    document.getElementById("min").textContent = min;

    //find mean value
    var sum = 0;
    for(var i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    var length = arr.length;
    var mean = sum/length;
    document.getElementById("mean").textContent = mean.toFixed(1);

    //find median value 
    arr.sort();
    var median = arr[1];
    document.getElementById("median").textContent = median;

    //find range value
    var range = max - min;
    document.getElementById("range").textContent = range;
}    