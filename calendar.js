var date = new Date();

// 달력 연도
var calendarYear = date.getFullYear();
// 달력 월
var calendarMonth = date.getMonth() + 1;
// 달력 일
var calendarToday = date.getDate();

var monthLastDate = new Date(calendarYear, calendarMonth, 0);
//달력 월의 마지막 일
var calendarMonthLastDate = monthLastDate.getDate();

var monthStartDay = new Date(calendarYear, date.getMonth(), 1);
// 달력 월의 시작 요일
var calendarMonthStartDay = monthStartDay.getDay();

// 주카운트
var calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);

var html = "";
    html +="<table style=\"border-collapse: collapse;\">";
    for (var index1 = 0; index1 < calendarWeekCount; index1++) {
        html += "<tr>";
        for (var index2 = 0; index2 < 7; index2++){
            html +="<td style=\"border: solid 1px #9fee9f; padding:20px 20px;\"></td>";
        }
        html += "</tr>";
}
html += "</table>";
$("#calendar").html(html);