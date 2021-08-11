$(document).ready(main);
let contador = 1;

function main() {
    $('.menu-bars').click(function() {
        if (contador == 1) {
            $('.menu').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.menu').animate({
                left: '-100%'
            });
        }
    });
}