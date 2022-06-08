function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  document.getElementById("CopyAlert").style.display = "block";
  setTimeout(function(){
    document.getElementById("CopyAlert").style.display = "none";
  }, 2500);

}

function hideAlert(){
  document.getElementById("CopyAlert").style.display = "none";
}

function showAlert(){
  document.getElementById("CopyAlert").style.display = "block";
}

$('img').on('dragstart', function(event) { event.preventDefault(); });