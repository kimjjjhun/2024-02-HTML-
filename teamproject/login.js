const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault()); 

function check(){
  if(document.frm.id.value == ""){
    alert("아이디를 입력해주세요")
    document.frm.id.focus();
    return false;
  }else if(document.frm.pass.value == ""){
  alert("비밀번호를 입력해주세요")
    document.frm.pass.focus();
    return false;
  }else if(isNaN(document.frm.pass.value)){
      alert("정수만 입력해주세요!")
      document.frm.pass.focus();
      return false;
  }else if(document.frm.id.value.length <= 3 ){
      alert("아이디는 4자 이상 입력해주세요")
      document.frm.id.focus();
      return false;
  }else if(document.frm.pass.value.length <= 3){
    alert("비밀번호는 4자 이상 입력해주세요")
        document.frm.pass.focus();
        return false;
    }else{
      return true;
    }
 }