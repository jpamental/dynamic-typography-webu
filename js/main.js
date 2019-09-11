/* Widowtamer */
wt.fix({
	elements: 'p',
	chars: 15,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'blockquote',
	chars: 2,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'h1',
	chars: 6,
	method: 'nbsp',
	event: 'resize'
});

window.onload = function(){
  //console.log('test onload');
  pageCounter();
}

window.onresize = function(){
  //console.log("test onresize");
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  //console.log(style_value);  
  pageCounter();
}

// Accessibility panel
if (!'classList' in document.createElement('span')) {
  document.getElementById('c-unsupported').classList.remove('hidden');
  document.getElementById('execute').setAttribute('disabled', 'disabled');
} else {
  if (document.getElementById('toggle-dark')) {
    document.getElementById('toggle-dark').addEventListener('click', function() {
      document.getElementById('toggle-dark').classList.toggle('on');
      document.getElementById('toggle-dark').classList.toggle('off');
      document.getElementsByTagName("body")[0].classList.toggle('dark');
    });

  }
  if (document.getElementById('toggle-contrast')) {
    document.getElementById('toggle-contrast').addEventListener('click', function() {
      document.getElementById('toggle-contrast').classList.toggle('on');
      document.getElementById('toggle-contrast').classList.toggle('off');
      document.getElementsByTagName("body")[0].classList.toggle('contrast');
    });
  }
  if (document.getElementById('toggle-size')) {
    document.getElementById('toggle-size').addEventListener('click', function() {
      document.getElementById('toggle-size').classList.toggle('on');
      document.getElementById('toggle-size').classList.toggle('off');
      document.getElementsByTagName("body")[0].classList.toggle('bigtext');
    });
  }
  if (document.getElementById('toggle-spacing')) {
    document.getElementById('toggle-spacing').addEventListener('click', function() {
      document.getElementById('toggle-spacing').classList.toggle('on');
      document.getElementById('toggle-spacing').classList.toggle('off');
      document.getElementsByTagName("body")[0].classList.toggle('spacing');
    });
  }
  if (document.getElementById('panel-toggle')) {
    document.getElementById('panel-toggle').addEventListener('click', function() {
      document.getElementsByTagName("body")[0].classList.toggle('accessibility-panel-open');
    });
  }
  if (document.getElementById('toggle-theme-mod')) {
    document.getElementById('toggle-theme-mod').addEventListener('click', function() {
      document.getElementById('toggle-theme-mod').classList.toggle('on');
      document.getElementById('toggle-theme-mod').classList.toggle('off');
      document.getElementsByTagName("body")[0].classList.toggle('theme-mod');
    });
  }
}

// Book paging 
function pageCounter() {
  var contentContainerWidth = document.getElementById("content_container").scrollWidth;
  var windowWidth = window.innerWidth;
  var pageCount = Math.floor(contentContainerWidth / windowWidth);
  document.body.style.setProperty('--pageCount', pageCount);

  var currentDiv = document.getElementById("pager_wrapper"); 

  // add the newly created element and its content into the DOM 
  for (let i = 0; i < pageCount; i++) {
    // create a new div element 
    var pageDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode(" "); 
    // add the text node to the newly created div
    pageDiv.appendChild(newContent);
    pageDiv.classList.add('pager-wrapper--page');
    // set margin-left to keep divs in place
    //pageDiv.style.marginLeft = 'calc( 101vw * '+ i + ' )';
    currentDiv.appendChild(pageDiv);
  }
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// example use
var div = document.querySelector('div');
var divOffset = offset(div);
//console.log(divOffset.left, divOffset.top);

$(function () {
    var intViewportWidth = window.innerWidth;
    var $pane = $("#pane");
    var $animate = $("#animate");
    $("#scroll_left").click(function (ev) {
        var new_left;
        if (ev.target.id === "abs")
            new_left = 100;
        else
            new_left = $pane.scrollLeft() - intViewportWidth;
        
        $pane.delay(100).animate({scrollLeft: new_left});
    });
    $("#scroll_right").click(function (ev) {
        var new_left;
        if (ev.target.id === "abs")
            new_left = 100;
        else
            new_left = $pane.scrollLeft() + intViewportWidth;
        
        $pane.delay(100).animate({scrollLeft: new_left});
    });
});


function variableResize() {

  let root = document.documentElement;
  let bodyStyles = window.getComputedStyle(document.body);	
		
	// Minimum and Maximum viewport size - must be unitless em values
	const maxWindowSize = bodyStyles.getPropertyValue('--bp-xlarge') * 16;
	const minWindowSize = bodyStyles.getPropertyValue('--bp-small') * 16;
	
	// Get current viewport size
	const windowWidth = window.innerWidth

  // Scale elements and min/max values
  const pWeightVar = '--p-wght';
	const pMinFontWeight = bodyStyles.getPropertyValue('--p-wght-min');
	const pMaxFontWeight = bodyStyles.getPropertyValue('--p-wght-max');
	scale(pWeightVar, pMinFontWeight, pMaxFontWeight);

  const h1WeightVar = '--h1-wght';
	const h1MinFontWeight = bodyStyles.getPropertyValue('--h1-wght-min');
	const h1MaxFontWeight = bodyStyles.getPropertyValue('--h1-wght-max');
	scale(h1WeightVar, h1MinFontWeight, h1MaxFontWeight);

	const h1XPRNVar = '--h1-XPRN';
	const h1MinFontXPRN = bodyStyles.getPropertyValue('--h1-XPRN-min');
	const h1MaxFontXPRN = bodyStyles.getPropertyValue('--h1-XPRN-max');
	scale(h1XPRNVar, h1MinFontXPRN, h1MaxFontXPRN);

	const h1SlntVar = '--h1-slnt';
	const h1MinFontSlnt = bodyStyles.getPropertyValue('--h1-slnt-min');
	const h1MaxFontSlnt = bodyStyles.getPropertyValue('--h1-slnt-max');
	scale(h1SlntVar, h1MinFontSlnt, h1MaxFontSlnt);

	const h2WeightVar = '--h2-wght';
	const h2MinFontWeight = bodyStyles.getPropertyValue('--h2-wght-min');
	const h2MaxFontWeight = bodyStyles.getPropertyValue('--h2-wght-max');
	scale(h2WeightVar, h2MinFontWeight, h2MaxFontWeight);

	const h2XPRNVar = '--h2-XPRN';
	const h2MinFontXPRN = bodyStyles.getPropertyValue('--h2-XPRN-min');
	const h2MaxFontXPRN = bodyStyles.getPropertyValue('--h2-XPRN-max');
	scale(h2XPRNVar, h2MinFontXPRN, h2MaxFontXPRN);

	const h2SlntVar = '--h2-slnt';
	const h2MinFontSlnt = bodyStyles.getPropertyValue('--h2-slnt-min');
	const h2MaxFontSlnt = bodyStyles.getPropertyValue('--h2-slnt-max');
	scale(h2SlntVar, h2MinFontSlnt, h2MaxFontSlnt);
	
	function scale(varName, minValue, maxValue) {
		// Make sure min/max are numbers
		minValue = minValue * 1;
		maxValue = maxValue * 1;

		//Scale within a range
		const percent = (windowWidth - minWindowSize) / (maxWindowSize - minWindowSize);
		if (maxValue < minValue) {
			var valueScale = minValue - (percent * (minValue - maxValue));
		} else {
			var valueScale = (percent * (maxValue - minValue)) + minValue;
		}
	  
		// Get the new font width
		const newValue = windowWidth > maxWindowSize
		   ? maxValue 
		   : windowWidth < minWindowSize 
				? minValue 
				: valueScale;
	   
			// Set my CSS Custom Property for width to update.
		root.style.setProperty(varName, newValue);
	}


}

window.addEventListener("load", variableResize);
window.addEventListener("resize", variableResize);
