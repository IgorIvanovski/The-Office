//function for clicking on the desks
function Profile(profilePic, locationName, id) {

  this.profilePic = profilePic;
  this.locationName = locationName;

//area click modal
  $(id).click(function(e){
    e.preventDefault();
    var mymodal = $('#myModal').css({top: event.clientY - $('#myModal').height(), left: event.clientX});;
    mymodal.find('.modal-body').html(profilePic + locationName + "</br>" + '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>');
    mymodal.modal('show');

  });
};

//Sorting the select list in Alphabetical order by first name.
function AlphabeticalOrder(){
  // choose target dropdown
  var select = $(".nameSelect");
  select.html(select.find("option").sort(function(x, y) {
    // to change to descending order switch "<" for ">"
    return $(x).text() > $(y).text() ? 1 : -1;
  }));
  // select default item after sorting (first item)
   //$('select').get(1).selectedIndex = 1;
};

// function CheckOptionValue() {
//   //Choose an option value (modal)
//   $(".nameSelect").change(function() {
//       var optionValue = $(this).val();
//       $('modal-body').html(optionValue);
//       console.log(optionValue);
//       //Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Mackinac Island", "#A1");
//       //console.log(Profile);
//       $("#myModal").modal("show");
//   });
// };

// function CheckOptionValue(){
//   $(".nameSelect").change(function() {

    
//     var optionValue = $(this).val();
//     console.log($("#" + optionValue));
//     $("#myModal").position({
//       of: "#" + optionValue
//     })
//     $('modal-body').html(optionValue);
//     $("#myModal").modal("show");
//   });
// }

$(document).ready(function() {

AlphabeticalOrder();//call the alphabetise order function
//CheckOptionValue();//call the check option function.


//var profile = {"A1": "<img src='profilePic.jpg' class='img-responsive'/>", "Igor", "Ivanvovski", "Programmer", "#A1"};
Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Mackinac Island", "#A1");
Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Traverse City", "#A2");
Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Grand Rapids", "#A3");
Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Sleeping Bear Dunes", "#A4");
Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Charlevoix", "#A5");
Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Mackinac Island", "#A6");
Profile("<img src='profilePic.jpg' class='img-responsive'/>", "Sugarloaf Mountain", "#A7");



});




//function for selecting a name from the option drop down.
//function CheckOptionValue() {
  //Choose an option value (modal)
//  $(".nameSelect").change(function() {
//      var optionValue = $(this).val();
//      console.log(optionValue);
//    if(optionValue == $(this).val()){
//        $("#myModal").modal("show");
//    }
//  });
//};
