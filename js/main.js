var controller = new ScrollMagic.Controller();

var cerfa = TweenMax.staggerFromTo(".anime-cerfa", 2, {"margin-left": "100%"}, {"margin-left": "0%", ease: Back.easeOut}, 0.15);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 300})
					.setTween(cerfa)
					.addIndicators({name: "staggering"}) // add indicators (requires plugin)
					.addTo(controller);