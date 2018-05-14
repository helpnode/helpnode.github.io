let ekadosi_list = [
	{
		"name":"ষটতিলা একাদশী (পক্ষবর্দ্ধিনী মহাদ্বাদশী)",
		"date":"১৩.০১.২০১৮ - শনিবার",
		"breakfast":"০৬.৪২-১০.১৯"
	},
	{
		"name":"ভৈমী একাদশী (ত্রিস্পর্শা মহাদ্বাদশী)",
		"date":"২৮.০১.২০১৮ - রবিবার",
		"breakfast":"০৬.৪০-১০.২১"
	},
	{
		"name":"বিজয়া একাদশী",
		"date":"১১.০২.২০১৮ - রবিবার",
		"breakfast":"০৬.৩৩-১০.১৯"
	},
	{
		"name":"আমলকীব্রত একাদশী",
		"date":"২৬.০২.২০১৮ - সোমবার",
		"breakfast":"০৬.২২-১০.১৪"
	},
	{
		"name":"পাপমোচনী একাদশী",
		"date":"১৩.০৩.২০১৮ - মঙ্গলবার",
		"breakfast":"০৬.০৮-১০.০৮"
	},
	{
		"name":"কামদা একাদশী**",
		"date":"২৭.০৩.২০১৮ - মঙ্গলবার",
		"breakfast":"০৭.৩২-১০.০০"
	},
	{
		"name":"বরুথিনী একাদশী",
		"date":"১২.০৪.২০১৮ - বৃহস্পতিবার",
		"breakfast":"০৫.৩৯-০৯.৩৬"
	},
	{
		"name":"মোহিনী একাদশী",
		"date":"২৬.০৪.২০১৮ - বৃহস্পতিবার",
		"breakfast":"০৫.২৭-০৮.৩৯"
	},
	{
		"name":"অপরা একাদশী",
		"date":"১১.০৫.২০১৮ - শুক্রবার",
		"breakfast":"০৬.০৫-০৯.৪২"
	},
	{
		"name":"পদ্মিনী একাদশী",
		"date":"২৫.০৫.২০১৮ - শুক্রবার",
		"breakfast":"০৫.১২-০৯.৪১"
	},
	{
		"name":"পরমা একাদশী",
		"date":"১০.০৬.২০১৮ - রবিবার",
		"breakfast":"০৫.১০-০৯.৪২"
	},
	{
		"name":"পাণ্ডবা নির্জলা একাদশী",
		"date":"২৪.০৬.২০১৮ - রবিবার",
		"breakfast":"০৫.১৩-০৫.২৬"
	},
	{
		"name":"যোগিনী একাদশী",
		"date":"০৯.০৭.২০১৮ - সোমবার",
		"breakfast":"০৫.১৮-০৯.৪৮"
	},
	{
		"name":"শয়ন একাদশী",
		"date":"২৩.০৭.২০১৮ - সোমবার",
		"breakfast":"০৫.২৪-০৯.৫১"
	},
	{
		"name":"কামিকা একাদশী (ত্রিস্পর্শা মহাদ্বাদশী)",
		"date":"০৮.০৮.২০১৮ - বুধবার",
		"breakfast":"০৫.৩১-০৯.৫২"
	},
	{
		"name":"পবিত্রারোপণ একাদশী",
		"date":"২২.০৮.২০১৮ - বুধবার",
		"breakfast":"০৫.৩৬-০৯.৫২"
	},
	{
		"name":"অন্নদা একাদশী",
		"date":"০৬.০৯.২০১৮ - বৃহস্পতিবার",
		"breakfast":"০৫.৪২-০৯.৪৪"
	},
	{
		"name":"পার্শ্ব একাদশী",
		"date":"২০.০৯.২০১৮ - বৃহস্পতিবার",
		"breakfast":"০৮.২৪-০৯.৪৯"
	},
	{
		"name":"ইন্দিরা একাদশী",
		"date":"০৫.১০.২০১৮ - শুক্রবার",
		"breakfast":"০৫.৫১-০৯.৪৮"
	},
	{
		"name":"পাশাঙ্কুশা একাদশী",
		"date":"২০.১০.২০১৮ - শনিবার",
		"breakfast":"০৫.৫৮-০৯.৪৭"
	},
	{
		"name":"রমা একাদশী",
		"date":"০৪.১১.২০১৮ - রবিবার",
		"breakfast":"০৬.০৬-০৯.৪৯"
	},
	{
		"name":"উত্থান একাদশী",
		"date":"১৯.১১.২০১৮ - সোমবার",
		"breakfast":"০৬.১৬-০৯.৫৪"
	},
	{
		"name":"উৎপন্না একাদশী",
		"date":"০৩.১২.২০১৮ - সোমবার",
		"breakfast":"০৬.২৫-১০.০০"
	},
	{
		"name":"মোক্ষদা একাদশী",
		"date":"১৯.১২.২০১৮ - বুধবার",
		"breakfast":"০৬.৩৫-০৬.৫৭"
	},
	{
		"name":"সফলা একাদশী (পক্ষবর্দ্ধিনী মহাদ্বাদশী)",
		"date":"০২.০১.২০১৯ - বুধবার",
		"breakfast":"০৬.৪১-১০.১৫"
	}];

let send = document.getElementById("send");
let date1= new Date;

var ekadosiDate= 
[ "2018 01 13", "2018 01 28", "2018 02 11", "2018 02 26", "2018 03 13", "2018 03 27", "2018 04 12", "2018 04 26", "2018 05 11", "2018 05 25", "2018 06 10", "2018 07 09", "2018 07 23", "2018 08 08", "2018 08 22", "2018 09 06", "2018 09 20", "2018 10 05", "2018 10 20", "2018 11 04", "2018 11 19", "2018 12 03", "2018 12 19", "2019 01 02" ];
var date2;
function checkDate(ekadosi){
	 date2 = new Date(ekadosi);
	 return date1 <= date2;
}
var result= ekadosiDate.filter(checkDate);

// alert(ekadosiDate.indexOf(result[0]));
let ekadosi_index = ekadosiDate.indexOf(result[0]);

send.onclick= function(){
	let data = ekadosi_list[ekadosi_index];
	document.getElementById("res").innerHTML= `<tr><td>Ekadosir Name: ${data.name}</td><td>Date: ${data.date}</td><td>Paroner Somoy: ${data.breakfast}</td></tr>`;
}


document.getElementById('tt').innerHTML = `${ekadosi_list.map(ek=> `<tr><td>Ekadosir Name: ${ek.name}</td><td>Date: ${ek.date}</td><td>Paroner Somoy: ${ek.breakfast}</td></tr>`)}`;