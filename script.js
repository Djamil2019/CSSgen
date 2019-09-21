function fun1() {
  var rtl=document.getElementBiId('rtl').value;
  var rtr=document.getElementBiId('rtr').value;
  var rbr=document.getElementBiId('rbr').value;
  var rbl=document.getElementBiId('rbl').value;
  var ttl=document.getElementBiId('ttl');
  var ttr=document.getElementBiId('ttr');
  var tbr=document.getElementBiId('tbr');
  var tbl=document.getElementBiId('tbl');

  var block = document.getElementById('block');

  ttl.value=rtl;
  ttr.value=rtr;
  tbr.value=rbr;
  tbl.value=rbl;

  block.style.borderRadius=rtl+'px ' +rtr +'px ' +rbr +'px ' +rbl+'px ';
}
