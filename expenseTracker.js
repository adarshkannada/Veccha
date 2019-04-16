function saveForm(){

    var expenseName = document.getElementById('expenseName').value;
    var amount = document.getElementById('expenseAmount').value;
    var  expenseCategory = document.getElementById('expenseCategory').value;
    var date = document.getElementById('expenseDate').value;

    alert(amount);
    document.getElementById('homeTotal').innerHTML = amount;

}

function resetForm(){
        document.getElementById("expenseform").reset();
}