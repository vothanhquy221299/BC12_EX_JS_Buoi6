/**
 * Bài 1
 */
var timSoNhoNhat = function () {
    var sum = 0;
    var n = 0;
    while (sum < 10000) {
        n++;
        //sum sẽ được cộng dồn với n
        sum += n;
    }
    return n;
}
console.log("Số nguyên dương nhỏ nhất là: " + timSoNhoNhat())
document.getElementById('noti').style.display = 'block';
document.getElementById('noti').innerHTML = "<div> Số nguyên dương nhỏ nhất là: " + timSoNhoNhat() + "</div>";

/**
 * Bài 2:
 */

var tinhTong = function (x, n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += x ** i;
    }
    return sum;
}

document.getElementById('btnTinhTong').addEventListener('click', function () {
    var x = document.getElementById('ipX').value;
    var n = document.getElementById('ipN').value;

    var ketQua = tinhTong(x, n);
    document.getElementById('ketQuaTinhTong').style.display = 'block';
    document.getElementById('ketQuaTinhTong').style.backgroundColor = '#f5b6da';
    document.getElementById('ketQuaTinhTong').innerHTML = ketQua;
});

/**
 * Bài 3:
 */
var tinhGiaiThua = function (soGiaiThua) {
    var giaiThua = 1;
    if (soGiaiThua == 0 || soGiaiThua == 1) {
        return giaiThua;
    } else {
        for (var i = 2; i <= soGiaiThua; i++) {
            giaiThua *= i;
        }
        return giaiThua;
    }
}
console.log('Giai thừa của là: ' + tinhGiaiThua(5));
document.getElementById('btnTinhGT').addEventListener('click', function () {
    var n2 = document.getElementById('ipN2').value;

    var ketQuaGT = tinhGiaiThua(n2);
    document.getElementById('ketQuaGiaiThua').style.display = 'block';
    document.getElementById('ketQuaGiaiThua').style.backgroundColor = '#B9F6CA';
    document.getElementById('ketQuaGiaiThua').innerHTML = ketQuaGT;
});

/**
 * Bài 4
 */

document.getElementById('btnTaoDiv').addEventListener('click', function () {
    var theDiv = document.getElementById('theDiv');
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            theDiv.innerHTML += '<div style="background-color: red; padding: 10px;"> Div chẵn ' + i + '</div>';
        } else {
            theDiv.innerHTML += '<div style="background-color: blue; padding: 10px;"> Div lẻ ' + i + '</div>';
        }
    }
    theDiv.style.display = 'block';
})