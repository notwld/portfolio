let colors = document.querySelectorAll('.color');
let head = document.querySelectorAll('.head')
let circle = document.querySelectorAll('.circle');
const element = (tag)=>{
    return document.querySelectorAll(`.${tag}`)[0];
}
// const border_changer = (tag)=>{
//   colors.forEach(color => {
//     color.addEventListener('click', ()=>{
//         let col = color.className.split("color ")[1];
//         if (col == "purple"){
//             element("purple").style.border = `1px solid white`;
//             element("red").style.border = `1px solid #D24141`;
//             element("green").style.border = `1px solid #41D272`;
//             element("blue").style.border='1px solid #4150D2'
            
//         }
//         else if (col == "red"){
//             element("purple").style.border = `1px solid #A441D2`;
//             element("red").style.border = `1px solid white`;
//             element("green").style.border = `1px solid #41D272`;
//             element("blue").style.border='1px solid #4150D2'
            
//         }
//         else if (col == "green"){
//             element("purple").style.border = `1px solid #A441D2`;
//             element("red").style.border = `1px solid #D24141`;
//             element("green").style.border = `1px solid white`;
//             element("blue").style.border='1px solid #4150D2'
            
//         }
//         else if (col == "blue"){
//             element("purple").style.border = `1px solid #A441D2`;
//             element("red").style.border = `1px solid #D24141`;
//             element("green").style.border = `1px solid #41D272`;
//             element("blue").style.border='1px solid white'

            
//         }
//   })
// }
//   )}


colors.forEach(function(color) {
    color.addEventListener("click", function() {
       let col = color.className.split("color ")[1];
        if (col =='purple'){
            for (let i = 0; i < head.length; i++) {
                    circle[0].style.border='2px solid #A441D2'
                    head[i].style.color='#A441D2'
                    element("purple").style.border = `1px solid white`;
                    element("red").style.border = `1px solid #D24141`;
                    element("green").style.border = `1px solid #41D272`;
                    element("blue").style.border='1px solid #4150D2'
                }
            }
            else if (col =='red'){
                for (let i = 0; i < head.length; i++) {
                        circle[0].style.border='2px solid #D24141'
                        head[i].style.color='#D24141'
                        element("purple").style.border = `1px solid #A441D2`;
                        element("red").style.border = `1px solid white`;
                        element("green").style.border = `1px solid #41D272`;
                        element("blue").style.border='1px solid #4150D2'
                    }
                }
            else if (col=='green'){
                for (let i = 0; i < head.length; i++) {
                        circle[0].style.border='2px solid #41D272'
                        head[i].style.color='#41D272'
                        element("purple").style.border = `1px solid #A441D2`;
                        element("red").style.border = `1px solid #D24141`;
                        element("green").style.border = `1px solid white`;
                        element("blue").style.border='1px solid #4150D2'

                    }
                }
            else if (col=='blue'){
                for (let i = 0; i < head.length; i++) {
                        circle[0].style.border='2px solid #4150D2'
                        head[i].style.color='#4150D2'
                        element("purple").style.border = `1px solid #A441D2`;
                        element("red").style.border = `1px solid #D24141`;
                        element("green").style.border = `1px solid #41D272`;
                        element("blue").style.border='1px solid white'
                    }
                }
            else {}
                
    })
});
 