
let res = document.getElementById('res');
function mostrarBander(flag){
    res.src = flag;
    res.hidden = false;
}
$(document).ready(function () {

    res.hidden = true

    $('#btn').click(function () {

        $(this).attr('disabled',true);
        let flag = undefined;

        $.getJSON("https://restcountries.eu/rest/v2/name/albania?fullText=true",
            function (data) {
                if (!flag) {
                    flag = data[0].flag
                    mostrarBander(flag);
                    $('#btn').attr('disabled',false);
                   
                }
            },
            function (err) {
                alert(err);
            })


        $.getJSON("https://restcountries.eu/rest/v2/name/argentina?fullText=true",
            function (data) {
                if (!flag) {
                    flag = data[0].flag
                    mostrarBander(flag);
                    $('#btn').attr('disabled',false);
                }
            },
            function (err) {
                alert(err);
            })

    });

});