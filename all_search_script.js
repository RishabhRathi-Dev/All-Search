// to detect if popup is enabled or not
function PopupBlocked() {
	var PUtest = window.open(null,"","width=100,height=100");
	try { PUtest.close(); return false; }
	catch(e) { return true; }
}

if(PopupBlocked()) {
	alert('Please disable the popup block');
}

// function for human verification warning
function humanwarning() {

var gq = document.getElementById("GeneralQuery");
var cq = document.getElementById("ComputerSciQNA");
var all = document.getElementById("All");

if (gq.checked == true || all.checked == true) {
	alert('Human Verification would be required for Stackexchange');
}

if (cq.checked == true || all.checked == true) {
	alert('Human Verification would be required for Stakeoverflow');
}

}
// function to search
function forSearch() {
  var search = document.getElementById("searched").value; // to get input of what to be searched

	// Status of all the checkboxs
	var general = document.getElementById("General");
	var generalquery = document.getElementById("GeneralQuery");
	var computersciqna = document.getElementById("ComputerSciQNA");
	var computerscitheory = document.getElementById("ComputerSciTHEORY");
	var medical = document.getElementById("Medical");
	var pictures = document.getElementById("Pictures");
	var entertainmentvid = document.getElementById("EntertainmentVID");
	var entertainmentreading = document.getElementById("EntertainmentREADING");
	var shoppin = document.getElementById("Shopping")
	var all = document.getElementById("All");

	// Opening according to demand
  if (general.checked == true || all.checked == true) {
    window.open(`https://www.google.com/search?q=${search}`);
    window.open(`https://www.bing.com/search?q=${search}`);
  }

  if(generalquery.checked == true || all.checked == true) {
		
		window.open(`https://stackexchange.com/search?q=${search}`)
    window.open(`https://www.quora.com/search?q=${search}`);
    window.open(`https://www.reddit.com/search?q=${search}`);
		window.open(`https://www.medium.com/search?q=${search}`);
		
  }

	if(computersciqna.checked == true || all.checked == true) {
		
		window.open(`https://www.stackoverflow.com/search?q=${search}`);
		window.open(`https://www.geeksforgeeks.org/search?q=${search}`);
		window.open(`https://www.github.com/search?q=${search}`);
		window.open(`https://www.quora.com/search?q=${search}`);
	  window.open(`https://www.reddit.com/search?q=${search}`);
	  
	}

	if (computerscitheory.checked == true || all.checked == true) {
		window.open(`https://www.geeksforgeeks.org/search?q=${search}`);
		window.open(`https://www.programiz.com/search/${search}`);
		window.open(`https://www.google.com/search?q=${search+" site:https://www.w3schools.com/"}`);
		window.open(`https://www.medium.com/search?q=${search}`);
		window.open(`https://www.youtube.com/results?search_query=${search}`);
	}

	if(medical.checked == true || all.checked == true) {
		window.open(`https://www.webmd.com/search/search_results/default.aspx?query=${search}`);
		window.open(`https://www.mayoclinic.org/search/search-results?q=${search}`);
		window.open(`https://www.google.com/search?q=${search+" site:https://www.healthline.com/"}`);
	}

	if (pictures.checked == true || all.checked == true) {
		window.open(`https://stocksnap.io/search/${search}`);
		window.open(`https://pixabay.com/images/search/${search}`);
		window.open(`https://www.pexels.com/search/${search}`);
		window.open(`https://unsplash.com/s/photos/${search}`);
	}

  if(entertainmentvid.checked == true || all.checked == true) {
    window.open(`https://www.youtube.com/results?search_query=${search}`);
    window.open(`https://www.dailymotion.com/search/${search}/videos`);
  }

	if (entertainmentreading.checked == true || all.checked == true) {
		window.open(`https://www.medium.com/search?q=${search}`);
		window.open(`https://www.quora.com/search?q=${search}`);
	  window.open(`https://www.reddit.com/search?q=${search}`);
	}

	if (shoppin.checked == true || all.checked == true) {
		window.open(`https://www.amazon.com/s?k=${search}`);
		window.open(`https://www.ebay.com/sch/i.html?_from=R40&_nkw=${search}`);
		window.open(`https://www.flipkart.com/search?q=${search}`);
		window.open(`https://www.google.com/search?tbm=shop&q=${search}`);
	}
}
