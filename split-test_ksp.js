const url = window.location.href;

// ALL VARIATIONS ON THE LINKS
const split_landers = [
// {
// "funnelURL": "https://try.miraclebrand.co/sheets/ksp/",
// },
{
"funnelURL": "https://try.miraclebrand.co/sheets/ksp-b/",
},
];

// RUN SPLIT TEST ONLY BELOW SELECTED ADVERTORIALS
// This script is only added to the below listed pages but better safe than sorry...
if (url.includes("/a/s6-reasons") || url.includes("/a/s31/")) {

	const split_selected = Math.floor(Math.random() * split_landers.length);
	console.log(split_landers[split_selected]["funnelURL"]);

	$("a.split_link").attr("href", split_landers[split_selected]["funnelURL"]);

}