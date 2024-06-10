// $(document).ready(function () {
//     const arr = ["a", "b", "c", "d", "e"];
//     $("#test").click(function () {
//         $(this).hide();
//     });

//     // $("#test").mousemove(function () {
//     //     console.log('asdkjhas')
//     // })

//     $("button").click(function () {
//         $("#test").show();

//         showUI()
//     });

//     // $("button").on('click', () => {

//     // })



//     function showUI() {
//         arr.forEach((element) => {
//             const div = document.createElement("div");
//             div.innerHTML = element
//             $("#root").append(div);
//         })
//     }
// })

$(document).ready(function () {

    $("#test").on({
        click: function () {
            console.log('clicked');
        },
        dblclick: function () {
            console.log('dbl clicked');
        },
        mouseenter: function () {
            console.log('mouse enter');
        },
        mouseleave: function () {
            console.log('mouse leave');
        }
    })

    $("#btn1").click(function () {
        // $("#test").remove();
        $("#test").toggleClass("bg-purple")
        // $("ul").empty();

    })
    $("#btn2").click(function () {
        // $("h2").toggleClass("bg-purple")
        $("h2").css({
            "font-size": "30px",
            "background-color": "red"
        })
    })

    $("span").click(function () {
        $("span").css("background-color", "lime")
        console.log($("span").parent().css("background-color", "red"));
    })
})