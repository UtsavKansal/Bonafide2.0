jQuery(document).ready(function ($) {
  var $timeline_block = $(".cd-timeline-block");
  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function () {
    if (
      $(this).offset().top >
      $(window).scrollTop() + $(window).height() * 0.75
    ) {
      $(this)
        .find(".cd-timeline-img, .cd-timeline-content")
        .addClass("is-hidden");
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on("scroll", function () {
    $timeline_block.each(function () {
      if (
        $(this).offset().top <=
          $(window).scrollTop() + $(window).height() * 0.75 &&
        $(this).find(".cd-timeline-img").hasClass("is-hidden")
      ) {
        $(this)
          .find(".cd-timeline-img, .cd-timeline-content")
          .removeClass("is-hidden")
          .addClass("bounce-in");
      }
    });
  });
});

window.addEventListener("load", showtimeline);
var firebaseConfig = {
  apiKey: "AIzaSyAfwDAtL1WGFNxPVGHeAiWcbEghVo0AjxE",
  authDomain: "bona-fide-e6405.firebaseapp.com",
  databaseURL: "https://bona-fide-e6405.firebaseio.com",
  projectId: "bona-fide-e6405",
  storageBucket: "bona-fide-e6405.appspot.com",
  messagingSenderId: "1078457724723",
  appId: "1:1078457724723:web:cac255c39e772ac46cd846",
  measurementId: "G-8S58YSF0JX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var htmlstring = "";
function showtimeline() {
  var ref = database
    .ref()
    .child("scores/truth/-MLo8Pg1XpZdc62dJVls/Transaction")
    .on("value", (snap) => {
      var Transactions = snap.val();
      var keys = Object.keys(Transactions);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var CurrentTransaction = Transactions[key];
        htmlstring =
          htmlstring +
          `<div class="cd-timeline-block">
           <div class="cd-timeline-img cd-picture">
        	 <img
        	   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg"
        	   alt="Picture"
        	 />
           </div>

           <div class="cd-timeline-content">
        	 <div class="InnerContainer">
        	   <div class="Text1">
        		 <p><b>Date: </b></p>
        		 <p>XX/XX/XXXX</p>
        	   </div>
        	   <div class="Text1">
        		 <p><b>Buyer: </b></p>
        		 <p>${CurrentTransaction.Buyer}</p>
        	   </div>
        	   <div class="Text1">
        		 <p><b>Seller: </b></p>
        		 <p>${CurrentTransaction.Seller}</p>
        	   </div>
        	 </div>
        	 <span class="cd-date">Jan 14</span>
           </div>
           </div>`;
      }
      console.log(htmlstring);
      document.getElementById("cd-timeline").innerHTML = htmlstring;
    });
}
