
var careerinfo = Utils.getcareerinfo();

$.each(careerinfo, function (i) {
    var descrip = $('<span></span>').text(careerinfo[i].descriptor).addClass('descriptor');
    var txt = $('<span></span>').text(careerinfo[i].text);
    var li = $('<li></li>');
    li.append(descrip).append(txt);
    $('.career').append(li);
}
)