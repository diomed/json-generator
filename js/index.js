let myObj = {};
let myArr = [];

document.getElementById('myForm').addEventListener('submit', processForm, false);

function processForm(e){
    e.preventDefault();

    const formData = new FormData(document.getElementById('myForm'));

const inputArr = [0, 1].map(ind => document.querySelectorAll("input")[ind].value);
  if (inputArr[0] !== "" && inputArr[1] !== ""){
    for(let key of formData.entries()){
        myObj[key[0]] = key[1];
    }
    myArr.push(myObj);

    myObj = {};

    document.getElementById('myForm').reset();
    document.getElementById('grid-first-name').focus();
    getResult();
  }
  }

function getResult(){
  let result = JSON.stringify(myArr);
 result = result.replace(/\,(?={)/g, ',\n');
document.getElementById('result').innerHTML = <span style='word-break:break-word'>result</span>;
}
// First form submit: [{"user":"test1","age":"40"}]
// Second form submit: [{"user":"test1","age":"40"},{"user":"test2","age":"32"}]

//clears everything one has typed
function functions() {
function clearArray(){
  myArr = [];
  document.getElementById('result').innerHTML = '';
};

swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    clearArray();
    swal(
      'Deleted!',
      'Everything has been deleted.',
      'success'
    )
  }
})
};
