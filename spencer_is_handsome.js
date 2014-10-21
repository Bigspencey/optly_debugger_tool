function printToConsole() {
	if (window.optimizely.activeExperiments) {
		for (var i = 0; window.optimizely.activeExperiments > i; i++) {
			console.log("Optimizely Active Experiments: " + window.optimizely.activeExperiments[i]);
			console.log("Optimizely Variations: " + window.optimizely.variationNamesMap[window.optimizely.activeExperiments[i]]);
		}
	} else {
		console.log("There are no active experiments on this page.")
	}

}
printToConsole();