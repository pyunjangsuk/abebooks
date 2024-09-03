$(document).ready(function(){
    main3tabMenu("div.index_container>div:nth-child(3)>div:first-of-type ul li");
    headerOpenSearch();
    headercloseSearch();
    headerOpenCart();
    headerCloseCart();

    detailPageimgRemoveClass();
    detailPageimgAddClass1();
    detailPageimgAddClass2();
    detailPageimgAddClass3();
    detailPageimgAddClass4();
    detailPageimgAddClass5();

    checkout03tabMenu("div.checkout03 form>div:first-child>div:nth-child(3) ul li");

    exchangeRefundOpen();
    exchangeRefundClose();
});
function main3tabMenu(tabMenu){
    var $selectMenu = null;

    $(tabMenu).click(function(){
        $(tabMenu).removeClass("active");
        $selectMenu = $(this);
        $selectMenu.addClass("active");
    });
}
function headerOpenSearch(){
    $("header>div:nth-child(2) div ul li:first-of-type button").click(function(){
        $("#searchPanel").addClass("active");
    });
}
function headercloseSearch(){
    $("header>div:nth-child(2) div ul li:first-child div[id='searchPanel'] button").click(function(){
        $("#searchPanel").removeClass("active");
    });
}
function headerOpenCart(){
    $("header>div:nth-child(2) div ul li:last-child button").click(function(){
        $("#cartPanel").addClass("active");
        $("#searchPanel").removeClass("active");
    });
}
function headerCloseCart(){
    $("header>div[id='cartPanel']>div:first-child button").click(function(){
        $("#cartPanel").removeClass("active");
    });
}

function detailPageimgRemoveClass(){
    $("div.detail_container div:first-child ol li button").click(function(){
        $("div.detail_container div:first-child>img").removeClass("active");
    });
}
function detailPageimgAddClass1(){
    $("div.detail_container div:first-child ol li:first-of-type button").click(function(){
        $("div.detail_container div:first-child>img:first-of-type").addClass("active");
    });
}
function detailPageimgAddClass2(){
    $("div.detail_container div:first-child ol li:nth-of-type(2) button").click(function(){
        $("div.detail_container div:first-child>img:nth-of-type(2)").addClass("active");
    });
}
function detailPageimgAddClass3(){
    $("div.detail_container div:first-child ol li:nth-of-type(3) button").click(function(){
        $("div.detail_container div:first-child>img:nth-of-type(3)").addClass("active");
    });
}
function detailPageimgAddClass4(){
    $("div.detail_container div:first-child ol li:nth-of-type(4) button").click(function(){
        $("div.detail_container div:first-child>img:nth-of-type(4)").addClass("active");
    });
}
function detailPageimgAddClass5(){
    $("div.detail_container div:first-child ol li:last-of-type button").click(function(){
        $("div.detail_container div:first-child>img:last-of-type").addClass("active");
    });
}

function checkout03tabMenu(cardtabMenu){
    var $selectMenu = null;

    $(cardtabMenu).click(function(){
        $(cardtabMenu).removeClass("active");
        $selectMenu = $(this);
        $selectMenu.addClass("active");
    });
}

function exchangeRefundOpen(){
    $("div.myaccount02>button").click(function(){
        $("#exchangeRefundpopup").addClass("active");
    });
}
function exchangeRefundClose(){
    $("div.myaccount02 div:nth-child(3) div form button").click(function(){
        $("#exchangeRefundpopup").removeClass("active");
    });
}