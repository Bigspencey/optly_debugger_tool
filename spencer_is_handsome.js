function snippetLocation() {
	var headScripts = document.head.getElementsByTagName("script")

}

function experimentInfo() {
	if (window.optimizely !== undefined) {
		if (window.optimizely.activeExperiments.length > 0) {
			for (var i = 0; window.optimizely.activeExperiments.length > i; i++) {
				console.log("Optimizely Active Experiment: " + window.optimizely.activeExperiments[i] + " : " + window.optimizely.variationNamesMap[window.optimizely.activeExperiments[i]]);
			}
		} else {
			console.log("There are no active experiments on this page.")
		}
		console.log("Optimizely Revision: " + window.optimizely.revision)
	}
}

function printToConsole() {
	snippetLocation();
	experimentInfo();
}

printToConsole();


// if ($('head').find($('script[src*="//cdn.optimizely.com/"]')).length > 0) {
// 	console.log("OK: The snippet is in the <head>.")
// } else if ($('body').find($('script[src*="//cdn.optimizely.com/"]')).length > 0) {
// 	console.log("Warning: The snippet is in the <body>.")
// } else {
// 	console.log("The snippet could not be found on the page.")
// }