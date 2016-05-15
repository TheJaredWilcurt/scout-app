var latestRelease = 'https://api.github.com/repos/TheJaredWilcurt/scout-app/releases';
$.get(latestRelease, function (data) {
	console.log(data);
});