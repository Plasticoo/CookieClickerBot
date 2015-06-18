// Cookie Clicker Bot -
// <Romeu Gomes> <oh4ianon@hotmail.com>

var ccBot = document.createElement('script');
ccBot.src = "//code.jquery.com/jquery-1.10.2.min.js";
document.getElementsByTagName('head')[0].appendChild(ccBot);

BUILDINGS = [
    "Cursor",
    "Grandma",
    "Farm",
    "Mine",
    "Factory",
    "Bank",
    "Temple",
    "Wizard tower",
    "Shipment",
    "Alchemy lab",
    "Portal",
    "Time machine",
    "Antimatter condenser",
    "Prism"
];

Array.min = function(array) {
    return Math.min.apply(Math, array);
};

CCBot = {

    start: function() {

        var min_price_index;
        var prod_prices = [];

        this.cookieClick = setInterval(function() {
            $('#bigCookie').click();
        }, 5);

        this.gCookieClick = setInterval(function() {
            $('#goldenCookie').click();
        }, 1000);

        this.storeBuy = setInterval(function() {

            var prod_enabled = [].slice.call($$(".product.enabled"));

            if(prod_enabled.length > 0) {
                for (i in BUILDINGS) {
                    prod_prices.push(Game.Objects[BUILDINGS[i]].price);
                }

                min_price_index = prod_prices.indexOf(Array.min(prod_prices));

                if(prod_enabled[min_price_index]) {
                    $('#product' + min_price_index).click();
                }
            }

            prod_prices = [];

        }, 1000);

        this.upgrBuy = setInterval(function() {

            var upgr_enabled= [].slice.call($$(".upgrade.enabled"));

            if(upgr_enabled.length > 0) {
                $('#upgrade0').click();
            }

        }, 5000);

    },

    stop: function() {
        clearInterval(this.cookieClick);
        clearInterval(this.gCookieClick);
        clearInterval(this.storeBuy);
        clearInterval(this.upgrBuy);
    }

};

//Main
$(document).ready(function() {
    $(function() {

        $('#game').append('<div id="CCBotGUI" style="width:150px; height:150px; position:absolute;bottom:100px; left:0; z-index:200000000;">' +
        '</div>');

        $('#CCBotGUI').append('<button id="CCBotButton" style="height: 40px; width: 120px; margin:20px;">Start</button>');

        $('#CCBotButton').bind('click', function() {
            if($(this).html() === "Start")
            {
                CCBot.start();
                $(this).html('Stop');
            }
            else
            {
                CCBot.stop();
                $(this).html('Start');
            }
        })
    })
});
