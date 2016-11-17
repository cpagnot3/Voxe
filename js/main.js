var controller = new ScrollMagic.Controller();

var carte = TweenMax.staggerFromTo("#carte", 2, {"margin-left": "-25%"}, {"margin-left": "0%", ease: Linear.easeNone}, 0.15);
var facture = TweenMax.staggerFromTo(".facture", 2, {"margin-left": "-100%"}, {"margin-left": "0%", ease: Linear.easeNone}, 0.15);
var cerfa = TweenMax.staggerFromTo(".anime-cerfa", 2, {"margin-left": "100%"}, {"margin-left": "0%", ease: Linear.easeNone}, 0.15);
var lettre = TweenMax.staggerFromTo("#lettre", 2, {"margin-left": "10%"}, {"margin-left": "55%", ease: Linear.easeNone}, 0.15);
var bulletin = TweenMax.staggerFromTo("#bulletin", 2, {"margin-top": "-2%"}, {"margin-top": "5%", ease: Linear.easeNone}, 0.15);
// build scene
var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
				.setTween(carte)
				.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 400})
				.setTween(facture)
				.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400})
				.setTween(cerfa)
				.addTo(controller);

var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 400})
				.setTween(lettre)
				.addTo(controller);

var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 400})
				.setTween(bulletin)
				.addTo(controller);