// to detect if popup is enabled or not
// alert('Please disable the popup block')
//-- start of snippet --
function PopupBlocked() {
var PUtest = window.open(null,"","width=100,height=100");
try { PUtest.close(); return false; }
catch(e) { return true; }
}

if(PopupBlocked()) {
	alert('Please disable the popup block');
	// Custom code may replace alert()
	}
/*else {
	alert('Thank you for blocking popup block');
	// Custom code may replace alert()
	}
//-- end of snippet --
*/

// Calibrate Search Url

// function to search
function forSearch() {
  var search = document.getElementById("searched").value; // to get input of what to be searched
  var category = document.getElementById("mode").value; // to get the category of input
  // alert(category);

  if (category == "General" || category == "All") {
    window.open(`https://www.google.com/search?q=${search}`);
    window.open(`https://www.bing.com/search?q=${search}`);
  }

  if(category == "GeneralEdu" || category == "All") {
    window.open(`https://www.quora.com/search?q=${search}`);
    window.open(`https://www.reddit.com/search?q=${search}`);
  }

	if(category == "ComputerSci" || category == "All") {
		window.open(`https://www.stackoverflow.com/search?q=${search}`);
		window.open(`https://www.geeksforgeeks.org/search?q=${search}`);
		window.open(`https://www.programiz.com/search/${search}`);
		window.open(`https://www.github.com/search?q=${search}`);
		window.open(`https://www.youtube.com/results?search_query=${search}`);
	}

	if(category == "Medical" || category == "All") {
		window.open(`https://www.webmd.com/search/search_results/default.aspx?query=${search}`);
		window.open(`https://www.mayoclinic.org/search/search-results?q=${search}`);
	}

  if(category == "Entertainment" || category == "All") {
    window.open(`https://www.youtube.com/results?search_query=${search}`);
    window.open(`https://www.dailymotion.com/search/${search}/videos`);
  }
}
