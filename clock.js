$(document).ready(function() {
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      changeBackground(h, m, s);
      m = checkTime(m);
      s = checkTime(s);
      $('#clock').text(h + ":" + m + ":" + s);
      setTimeout(function(){startTime()},500);
  }
  function changeBackground(h, m, s){
  	var totalMins = (h * 60) + m;
  	var hue = totalMins * 0.25;
  	var sat = m + 20;
  	var light = s + 15;
  	$('body').css('backgroundColor', 'hsl('+ hue + ', ' + sat + '%, ' + light + '%)');
  }
  function checkTime(i) {
      if (i<10) {i = "0" + i};
      return i;
  }
  startTime();
});
