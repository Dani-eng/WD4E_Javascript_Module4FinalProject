/*Name this external file gallery.js*/
const ORIGINAL_TEXT = "Hover over an image below to display here.";

function upDate(previewPic){
    const display = document.getElementById("image")

    /*Check if function is being called */
    console.log("Previewing:", previewPic.alt, previewPic.src);

    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image */

    display.style.backgroundImage = "url('" + previewPic.src + "')"; 

    /*2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    display.textContent = previewPic.alt;
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the original-image.  You can use the css code to see what that original URL was */

    const display = document.getElementById("image");

    display.style.backgroundImage= "url(' ')";
    
    
    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
   display.textContent = ORIGINAL_TEXT;
		
	}