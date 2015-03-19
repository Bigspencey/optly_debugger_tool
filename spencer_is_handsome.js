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

function objectSearch() {
	if (window.optimizely !== undefined) {
		console.log("[OPTIMIZELY SUCCESS LOG] OK: The Optimizely object is defined.");
	} else {
		console.log("[OPTIMIZELY SUCCESS LOG] WARNING: The Optimizely object is not defined.");
	}
}

function snippetLocation() {
	var headScripts = document.head.getElementsByTagName("script");
	var bodyScripts = document.body.getElementsByTagName("script");
	if (headSearch(headScripts)) {
		console.log("[OPTIMIZELY SUCCESS LOG] OK: The snippet is in the <head>.");
	} else if (bodySearch(bodyScripts)){
		console.log("[OPTIMIZELY SUCCESS LOG] WARNING: The snippet is in the <body>.");
	} else {
		console.log("[OPTIMIZELY SUCCESS LOG] The snippet could not be found on the page.");
	}
}

function experimentInfo() {
	if (window.optimizely !== undefined) {
		if (window.optimizely.activeExperiments.length > 0) {
			for (var i = 0; window.optimizely.activeExperiments.length > i; i++) {
				console.log("[OPTIMIZELY SUCCESS LOG] Optimizely Active Experiment: " + window.optimizely.activeExperiments[i] + " : " + window.optimizely.variationNamesMap[window.optimizely.activeExperiments[i]]);
			}
		} else {
			console.log("[OPTIMIZELY SUCCESS LOG] There are no active experiments on this page.");
		}
		console.log("[OPTIMIZELY SUCCESS LOG] Optimizely Revision: " + window.optimizely.revision);
	}
}

function printOptimizelyInfo() {
	objectSearch();
	snippetLocation();
	experimentInfo();
}

printOptimizelyInfo();