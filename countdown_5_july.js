<script>
  
  var deadline = Date.parse('{{wf {&quot;path&quot;:&quot;countdown-expire-date&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}');

 
 function timer() {
 
 var now = Date.parse(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
 var t = deadline - now; 
 
 var days = Math.floor(t / (1000 * 60 * 60 * 24));
 var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
 var secs = Math.floor((t % (1000 * 60)) / 1000);
 
 $("#js-clock-days").html(days)
 $("#js-clock-hours").html(hours)
 $("#js-clock-minutes").html(mins)
 $("#js-clock-seconds").html(secs)
 
 if ((days <= 0) && (hours <= 0) && (mins <= 0) && (secs <= 0)) {
      $(".tn-9").html("");
      return -1;
 }
 
 setTimeout(timer, 1000)
 		
 }
 
 setTimeout(timer, 1000)
  
</script>