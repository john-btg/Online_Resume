//variable pour stocker les animations sans leur donner a chaque fois un delai d'execution une à une 
let tl = new TimelineMax();
//Ajout d'une animation pour afficher le menu
tl.to("#menu", 0.5, {
    left: '0%'
});
tl.staggerFrom("#menu ul li", 1.5, {
    x: -100,
    opacity: 0
}, 0.1);
tl.reverse();

$(".barres").click(function () {
    tl.play();
});
$("#portrait").click(function () {
    tl.reverse();
})



$("#xp").click(function () {
    let tlpages = new TimelineMax();
    tlpages.to("#xpmenu", 0.8, {
        left: '0%',
    });
    tlpages.set($('.barres'), {
        css: {
            zIndex: 1
        }
    })
    tl.reverse();
    tlpages.reverse();
    tlpages.play();
    $(".barres").click(function () {
        tlpages.reverse();
    });
});

$("#formation").click(function () {
    let tlpages = new TimelineMax();
    tlpages.to("#formationmenu", 0.8, {
        left: '0%'
    });
    tlpages.set($('.barres'), {
        css: {
            zIndex: 1
        }
    })
    tl.reverse();
    tlpages.reverse();
    tlpages.play();
    $(".barres").click(function () {
        tlpages.reverse();
    });
});

$("#skill").click(function () {
    let tlpages = new TimelineMax();
    tlpages.to("#skillmenu", 0.8, {
        left: '0%'
        });
    tlpages.set($('.barres'), {
        css: {
            zIndex: 1
        }
    })
    tl.reverse();
    tlpages.reverse();
    tlpages.play();
    $(".barres").click(function () {
        tlpages.reverse();
    });
});

$("#loisir").click(function () {
    let tlpages = new TimelineMax();
    tlpages.to("#loisirmenu", 0.8, {
        left: '0%'
        });
    tlpages.set($('.barres'), {
        css: {
            zIndex: 1
        }
    })
    tl.reverse();
    tlpages.reverse();
    tlpages.play();
    $(".barres").click(function () {
        tlpages.reverse();
    });
});



