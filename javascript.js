// https://www.codewithfaraz.com/img/calculator.png
// https://media.istockphoto.com/id/1031072096/vector/new-icon-of-a-simple-calculator-with-a-set-of-digits-vector-illustration-eps-10.jpg?s=612x612&w=0&k=20&c=MoqHgC60t78kKOIRXigDed-tUwkxS_zRx_JoQghSBnc=
// https://cdn.dribbble.com/users/2381635/screenshots/6893304/20190801.png?resize=400x0

function clickBtn(e){
  console.log(e.target.id);
  currDisplay.textContent
}

const currDisplay = document.getElementsByClassName('prevNumDisplay');


const numberBtn = document.getElementsByClassName('number');
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', (e) => clickBtn(e));
}




