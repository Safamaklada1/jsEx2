//start of part one
var me= {
	"eyesColor":"green",
	"name":"safa",
	"height":"176"+"cm"
};
document.write('My name is: '+me.name+'<br>'+'My eyes color is: '+ me.eyesColor+'<br>'+'My height is: '+me.height);
// end of part one 
//start of part two
me.eyesColor="brown";
//end of part two
//start of part three
var me= {
	"eyesColor":"green",
	"name":"safa",
	"height":"176"+"cm",
	"location":"Israel?",
	"city":"Haifa"
};
document.write('<br>'+'Are you from: '+me.location+'<br>'+'city: '+ me.city);
//end of part three
//start of part four
me.languages={
	"a":" english?, ",
	"b":" hebrew?, ",
	"c":" rusian? "
	};
	
	document.write('<br>'+'Do you speak one of the languages: '+(me.languages.a)+(me.languages.b)+(me.languages.c));
//end of part four
//start of part five
document.write("<br>"+'The type of hebrew is: '+ typeof (me.languages.b));
//end of part five

