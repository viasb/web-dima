//Пример сортировки массива пузырьком
let arr = [3,4,1,6,5,2,7];
console.log(""+arr+" массив до сортировки!")
 //функция сортировки
function sortB(arr) {
    for(let i=0; i<arr.length; i++) {
         for(let j=i; j<arr.length; j++) {
             if (arr[i] > arr[j]) {
                 let temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
             }
         }
    }
    console.log(""+arr+" массив после сортировки");
}
sortB(arr);
//Конец сортировки массива пузырьком

//пример сортировки блоков html
//По возрастанию
document.querySelector(".btn1").onclick = mySortV;
document.querySelector(".btn2").onclick = mySortU;

function mySortV() {
  let nav = document.querySelector('.con');
  for (var i = 0; i < nav.children.length; i++) {
    for (var j = i; j < nav.children.length; j++) {
      if (nav.children[i].getAttribute('data-num') > nav.children[j].getAttribute('data-num')) {
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}
//По убыванию
function mySortU() {
  let nav = document.querySelector('.con');
  for (var i = 0; i < nav.children.length; i++) {
    for (var j = i; j < nav.children.length; j++) {
      if (nav.children[i].getAttribute('data-num') < nav.children[j].getAttribute('data-num')) {
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replaceNode, nav.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
//Конец сортировки блоков
