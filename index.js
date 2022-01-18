function insertNumber(number){

	var previousNumber=$("#result").val();
	$("#result").val(previousNumber+number);
}

function clearResult(){
	$("#result").val('');
}

function calculate(){
	var result=eval($("#result").val());
	$("#result").val(result);
}

function deletval()
{
	var value=$("#result").val();

	if(value!=''){
		$("#result").val(value.slice(0,-1));

	}
}
