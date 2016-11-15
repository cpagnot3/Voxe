var controller = new ScrollMagic.Controller();

var facture = TweenMax.staggerFromTo(".facture", 2, {"margin-left": "-100%"}, {"margin-left": "0%", ease: Linear.easeNone}, 0.15);
var cerfa = TweenMax.staggerFromTo(".anime-cerfa", 2, {"margin-left": "100%"}, {"margin-left": "0%", ease: Linear.easeNone}, 0.15);
var lettre = TweenMax.staggerFromTo("#lettre", 2, {"margin-left": "10%"}, {"margin-left": "55%", ease: Linear.easeNone}, 0.15);
var bulletin = TweenMax.staggerFromTo("#bulletin", 2, {"margin-top": "-2%"}, {"margin-top": "5%", ease: Linear.easeNone}, 0.15);
// build scene
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 400})
				.setTween(facture)
				.addIndicators({name: "staggering"}) // add indicators (requires plugin)
				.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400})
				.setTween(cerfa)
				.addIndicators({name: "staggering"}) // add indicators (requires plugin)
				.addTo(controller);

var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 400})
				.setTween(lettre)
				.addIndicators({name: "staggering"}) // add indicators (requires plugin)
				.addTo(controller);

var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 400})
				.setTween(bulletin)
				.addIndicators({name: "staggering"}) // add indicators (requires plugin)
				.addTo(controller);