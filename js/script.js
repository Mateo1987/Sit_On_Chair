// MENU

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelectorAll(".header_right>ul>li");

    for (var i=0; i<menu.length; i++) {
        menu[i].addEventListener("mouseover", function (event) {
            var submenu = this.querySelector("ul");
            if (submenu !== null) {
                submenu.style.display = "block";
            }
        });

        menu[i].addEventListener("mouseout", function (event) {
            var submenu = this.querySelector("ul");
            if (submenu !== null) {
                submenu.style.display = "none";
            }
        });
    }
});


$(document).ready(function(){

// SLIDER

 $(".bxslider").bxSlider();


// pictures hide/show

var picture = $(".gallery_pic");
var title = $(".pic_title");

 picture.on("mouseover", function(){
    $(this).find(title).hide();
});

picture.on("mouseleave", function(){
    $(this).find(title).show();
});


// walidacja

    var form = $("#contactForm");
    var name = $("#nameInput");
    var email = $("#emailInput");
    var message = $("#messageInput");
    var checkbox2 = $("#agree");

    var error = $(".error");

        form.on('submit', function(event) {
        if (name.val().length <= 5) {
          var p1 = $("<p class='xxx'>Imię musi mieć ponad 5 znaków!</p>");
          error.append(p1);
          event.preventDefault();
        }
        if (email.val().indexOf("@") === -1 || email.val().indexOf(".") === -1) {
          var p2 = $("<p class='xxx'>Wpisany adres E-mail jest niepoprawny!</p>");
          error.append(p2);
          event.preventDefault();
        }

        if (message.val().length <= 10) {
          var p3 = $("<p class='xxx'>Wiadomość musi mieć ponad 10 znaków!</p>");
          error.append(p3);
          event.preventDefault();
        }

        if (!checkbox2.is(':checked')) {
          var p4 = $("<p class='xxx'>Musisz zaznaczyć checkbox!</p>");
          error.append(p4);
          event.preventDefault();
        }
    });


// skomponuj swoje krzesło

    var suma = 0;

    var firstSelect = $("#firstSelect");
    var firstDisplay = $(".text1");
    var priceDisplay1 = $(".priceDisplay1");

    firstSelect.one("change", function(){
        firstDisplay.text(firstSelect.val());
        var price1 = firstSelect.find('option:selected').data().price;
        priceDisplay1.text(price1);

        suma += price1;
    sum.text(suma);

    });

    var secondSelect = $("#secondSelect");
    var secondDisplay = $(".text2");
    var priceDisplay2 = $(".priceDisplay2");

    secondSelect.one("change", function(){
        secondDisplay.text(secondSelect.val());
       var  price2 = secondSelect.find('option:selected').data().price;
        priceDisplay2.text(price2);

        suma += price2;
    sum.text(suma);

    });

    var thirdSelect = $("#thirdSelect");
    var thirdDisplay = $(".text3");
    var priceDisplay3 = $(".priceDisplay3");

    var sum = $(".sum2");

    thirdSelect.one("change", function(){
        thirdDisplay.text(thirdSelect.val());
        var price3 = thirdSelect.find('option:selected').data().price;
        priceDisplay3.text(price3);

        suma += price3;
    sum.text(suma);

    });

    var checkbox = $("#trans");
    var checked = $(".text4");
    var priceDisplay4 = $(".priceDisplay4");

    checkbox.one("change", function(){
        var price4 = checkbox.data().price;

        if (checkbox.is(':checked')) {
            checked.text('Transport');
            priceDisplay4.text(price4);
        }

        suma += price4;
    sum.text(suma);

    });

});
