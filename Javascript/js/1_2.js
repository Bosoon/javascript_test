var firstQuarter = 1200;
var secondQuarter = 1300;
var thirdQuarter = 1000;
var average = (firstQuarter + secondQuarter + thirdQuarter)/3;

var forthQuarter = prompt("4분기 실적","0");
var result = forthQuarter > average ? "판매량이 평균이상입니다." : "판매량이 평균 이하입니다.";

document.write("평균 : " + average + "<br>");
document.write(result);