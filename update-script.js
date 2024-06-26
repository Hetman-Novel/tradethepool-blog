
if (window.matchMedia("(max-width: 1023.98px)").matches) {
   document.getElementById("searchform").setAttribute("data-da", "blog__categories, last, 1023");
}
if (window.matchMedia("(min-width: 481px)").matches) {
	
	const blogPreviewBlockTitle = document.querySelectorAll('.blog__previewBlockTitle')
   if (blogPreviewBlockTitle) {
      let height = 0;
      for (var i = 0; i < blogPreviewBlockTitle.length; i++) {
         var current_height = blogPreviewBlockTitle[i].offsetHeight;
         if (current_height > height) {
            height = current_height;
         }
      }
      for (var i = 0; i < blogPreviewBlockTitle.length; i++) {
         blogPreviewBlockTitle[i].style.height = height + 'px';
      }
   }
   const blogPreviewExcerpt = document.querySelectorAll('.blog__previewExcerpt')
   if (blogPreviewExcerpt) {
      let height = 0;
      for (var i = 0; i < blogPreviewExcerpt.length; i++) {
         var current_height = blogPreviewExcerpt[i].offsetHeight;
         if (current_height > height) {
            height = current_height;
         }
      }
      for (var i = 0; i < blogPreviewExcerpt.length; i++) {
         blogPreviewExcerpt[i].style.height = height + 'px';
      }
   }
}