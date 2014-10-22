function headSearch(headScripts) {
	for (var i = 0; headScripts.length > i; i++) {
  	if (headScripts[i].src.indexOf("//cdn.optimizely.com") !== -1) {
    	return true
		}
	}
}

function bodySearch(bodyScripts) {
	for (var i = 0; bodyScripts.length > i; i++) {
  	if (bodyScripts[i].src.indexOf("//cdn.optimizely.com") !== -1) {
    	return true
		}
	}
}

function snippetLocation() {
	var headScripts = document.head.getElementsByTagName("script");
	var bodyScripts = document.body.getElementsByTagName("script");
	if (headSearch(headScripts)) {
		console.log("OK: The snippet is in the <head>.")
	} else if (bodySearch(bodyScripts)){
		console.log("Warning: The snippet is in the <body>.")
	} else {
		console.log("The snippet could not be found on the page.")
	}
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