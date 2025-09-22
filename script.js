//your JS code here. If required.
const form  = document.getElementById('otp-form')
const inputlengthbox = 6
for(let i = 0;i<inputlengthbox;i++){
	const input = document.createElement('input')
	input.classList.add('code')
	input.id = `code-${i+1}`;
	input.maxLength = '1';
	
	form.appendChild(input)
}
const allinputs = document.querySelectorAll('.code')
for(let i = 0;i<allinputs.length;i++){
	// input written in the box 
	allinputs[i].addEventListener('input',e=>{
		// check whether is it number or not
		if(!isvalid(e.target.value)){
			e.target.value = ''
			return 
		}
		if(allinputs[i+1]){
			allinputs[i+1].focus()
		}
		
	})
	// backspace 
	allinputs[i].addEventListener('keydown',e=>{
		if(e.key === 'Backspace'){
			e.preventDefault()
			//check if the element is present then delete the element
			if(allinputs[i].value){
				allinputs[i].value = '';
			}
			else{
				//if no element then focus go back
				if(allinputs[i-1]){
					allinputs[i-1].focus();
				}
			}
		}
	})
	// pasting the otp and here paste is an event 
	allinputs[i].addEventListener('paste',e=>{
		const pastedvalue = e.clipboardData.getData('text')
		if(!ispastedvalue(pastedvalue)){
			alert('invalid')
		}
		else{
			for(let i = 0;i<pastedvalue.length;i++){
				allinputs[i].value = pastedvalue[i]
			}
			allinputs[pastedvalue.length-1].focus()
		}
		
	})
	
}

function isvalid(val){
	if(val.charCodeAt(0)>= 48 && val.charCodeAt(0) <= 57){
		return true
	}
	else{
		return false
	}
}
function ispastedvalue(string){
	for(let i = 0;i<string.length;i++){
		if(!Number(string[i])){
			return false
		}
	}
	return true
}