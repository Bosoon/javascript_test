document.write("Welcome to JavaScript" + "<br>");
var box;
box = 100;
document.write("Box " + box + "<br>");
box = 30;
document.write("Box : " + box + "<br>");
var s = "javascript";
var a = true;
var b = false;
var c = 10 > 5;
var d = Boolean("");

document.write(a, "<br>");
document.write(b, "<br>");
document.write(c, "<br>");
document.write(d, "<br>");
document.write(typeof box, "<br>");
document.write(typeof a, "<br>");

var str="<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";
document.write(str);

a = 10;
b = 3;

var result = a>b ? "javascript": "hello";
document.write(result,"<br>");