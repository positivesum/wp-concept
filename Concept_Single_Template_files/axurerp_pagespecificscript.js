
var PageName = 'Concept Single Template';
var PageId = '845db932f32840d7aee867f38098049c'
var PageUrl = 'Concept_Single_Template.html'
document.title = 'Concept Single Template';
var PageNotes = 
{
"pageName":"Concept Single Template",
"showNotesNames":"False",
"Default":"<p style=\"text-align:left;\"><span style=\"\">Shows frontend interface of the concept plugin.<\/span><\/p>"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '3');
  value = value.replace(/\[\[GenMonth\]\]/g, '12');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'December');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Saturday');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

if (true) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u84ann'), "<div id='u84Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u84Note').click(function(e) { ToggleWorkflow(e, 'u84', 300, 150, false); return false; });
var u84Ann = 
{
"label":"Revision 1 Link",
"Description":"Clicking on this link will show revision 1"};

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u48', 'pd2u48','none','',500,'none','',500);

	SetPanelState('u101', 'pd2u101','none','',500,'none','',500);

}

}
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

}

}
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd1u13','none','',500,'swing','left',500);

}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd1u13','none','',500,'swing','left',500);

}

}

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd1u46','none','',500,'none','',500);

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd0u46','none','',500,'none','',500);

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd0u13','none','',500,'swing','right',500);

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd1u46','none','',500,'none','',500);

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u48', 'pd1u48','none','',500,'none','',500);

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

}

}
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u59ann'), "<div id='u59Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u59Note').click(function(e) { ToggleWorkflow(e, 'u59', 300, 150, false); return false; });
var u59Ann = 
{
"label":"Revision 2 Link",
"Description":"Clicking on this link will show revision 2"};

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u48', 'pd0u48','none','',500,'none','',500);

	SetPanelState('u101', 'pd0u101','none','',500,'none','',500);

}

}
gv_vAlignTable['u59'] = 'top';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd0u13','none','',500,'swing','right',500);

}

}

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');

var u70 = document.getElementById('u70');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u70ann'), "<div id='u70Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u70Note').click(function(e) { ToggleWorkflow(e, 'u70', 300, 150, false); return false; });
var u70Ann = 
{
"label":"Revision 1 Link",
"Description":"Clicking on this link will show revision 1"};

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u48', 'pd2u48','none','',500,'none','',500);

	SetPanelState('u101', 'pd2u101','none','',500,'none','',500);

}

}
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u73ann'), "<div id='u73Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u73Note').click(function(e) { ToggleWorkflow(e, 'u73', 300, 150, false); return false; });
var u73Ann = 
{
"label":"Revision 2 Link",
"Description":"Clicking on this link will show revision 2"};

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u48', 'pd0u48','none','',500,'none','',500);

	SetPanelState('u101', 'pd0u101','none','',500,'none','',500);

}

}
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u30', 'pd2u30','none','',500,'none','',500);

	SetPanelState('u46', 'pd2u46','none','',500,'none','',500);

	SetPanelState('u48', 'pd1u48','none','',500,'none','',500);

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

}

}
gv_vAlignTable['u79'] = 'top';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
if (window.OnLoad) OnLoad();
