//初始化bmob
Bmob.initialize("03fb6d9aad6aa01a12054dd823ff110b", "18d70d5ad717839d2a78d9d20bd47678");


// var GameScore = Bmob.Object.extend("GameScore");
//  var gameScore = new GameScore();
//  gameScore.set("score", 1337);
//  gameScore.save(null, {
//    success: function(object) {
//      alert("create object success, object id:"+object.id);
//    },
//    error: function(model, error) {
//      alert("create object fail");
//    }
//  });


function addData() {
    var username = $("#username").val();
    var password = $("#password").val();

    var Student = Bmob.Object.extend("Student")
    var stu = new Student();

    stu.set("username", username)
    stu.set("password", password)

    stu.save(null, {
        success: function (object) {
            console.log("object:" + object);
            alert("success")
        },
        error: function (model, error) {
            console.log("model" + model);
            console.log("error:" + error);
            alert("error")
        }
    })


}

//
// var Student = Bmob.Object.extend("Student")
// var stu = new Student()
//
// stu.set("name", "张三");
// stu.set("age", 120);
//
// stu.save(null, {
//     success: function (object) {
//         alert("success")
//     },
//
//     error: function (model, error) {
//         alert("error")
//     }
//
// })
//
// var stu2 = new Student()
//
// stu2.set("name", "张三2");
// stu2.set("age", 1202);
//
// stu2.save(null, {
//     success: function (object) {
//         alert("success")
//     },
//     error: function (model, error) {
//         alert("error")
//     }
//
// })

