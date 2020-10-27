

$(document).ready(function() {
    function checkNum(x) {
        var a = /^[0-9]+$/;
        if (x.match(a)) {
            return true;
        } else {
            return false;
        }
    }
    //hàm kiểm tra chức năng cần thực hiện

    function checkPhone() {
        var x = ($('#exampleInputPhone').val()).trim();
        if (x == '' || x == null) {
            $('.a').text("is a required field");
        } else {
            if (x != null && checkNum(x) == false) {
                $('.a').text("Please enter a valid phone number.");
            } else {
                $('.a').text("");
            }
        }

    }

    function checkPass() {
        var y = ($('#exampleInputPassword1').val()).trim();
        if (y === '' || y == null) {
            $('.c').text("is a required field");
        } else {
            if (y != null && y.length < 4) {
                $('.c').text("should be long 4 than char");
            } else {
                $('.c').text("");
            }
        }
    }

    function checkName() {
        var z = ($('#exampleInputName').val()).trim();
        if (z === '' || z == null) {
            $('.b').text("is a required field");
        } else {
            if (z != null && z.length < 4) {
                $('.b').text("should be long 4 than char");
            } else {
                $('.b').text("");
            }
        }
    }

    //khi click vào nút button trong form nó sẽ thực hiện chức năng được gọi vào
    
    
    function check() {
        checkPhone();
        checkPass();
        checkName();
    }
    //khi nhập vào trường "input" nó sẽ thực hiện chức năng: kiểm tại lại kiểu input
    document.getElementById('exampleInputPhone').oninput = function() { checkPhone(); }
    document.getElementById('exampleInputPassword1').oninput = function() { checkPass(); }
    document.getElementById('exampleInputName').oninput = function() { checkName(); }

  

   


});