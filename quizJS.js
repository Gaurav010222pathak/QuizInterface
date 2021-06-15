//RETRIEVE ARRAY FROM LOCAL STORAGE

var score = 0;
var home = document.getElementById("home-page")
var startBtn = document.getElementById("start");
var quiz = document.getElementById("quiz-page");
var submit = document.getElementById("submit");
var next = document.getElementById("next");
var question = document.getElementById("question");
var op1 = document.getElementById("opt1");
var op2 = document.getElementById("opt2");
var op3 = document.getElementById("opt3");
var op4 = document.getElementById("opt4");
var ansKey = document.getElementById("answerKey");
var res = document.getElementById("restart");
var ele = document.getElementsByTagName("input");

const ARRanswers = ["A", "B", "C", "C", "D", "D", "B", "B", "D", "A"];

const questions = [
	{
		id : 1,
		ques : "Ques1",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans1"
	},
	{
		id : 2,
		ques : "Ques2",
		option1 : " A1",
		option2 : " B1",
		option3 : " C1",
		option4 : " D1",
		correctAns : "ans2"
	},
	{
		id : 3,
		ques : "Ques3",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans3"
	},
	{
		id : 4,
		ques : "Ques4",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans3"
	},
	{
		id : 5,
		ques : "Ques5",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans4"
	},
	{
		id : 6,
		ques : "Ques6",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans4"
	},
	{
		id : 7,
		ques : "Ques7",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans2"
	},
	{
		id : 8,
		ques : "Ques8",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans3"
	},
	{
		id : 9,
		ques : "Ques9",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans4"
	},
	{
		id : 10,
		ques : "Ques10",
		option1 : " A",
		option2 : " B",
		option3 : " C",
		option4 : " D",
		correctAns : "ans1"
	},
];

function uncheckALL(){
	for(var i=0; i<ele.length; i++){
			if(ele[i].type == "radio"){
				if(ele[i].checked){
					ele[i].checked = false;
				}

			}
	}
}

startBtn.addEventListener("click", commenceTest);
var q = 0;
function commenceTest(event){
	//hide given page data
	home.style.display = "none";
	quiz.style.display = "block";
	submit.disabled = false;
	submit.innerHTML = "Submit";
	uncheckALL();

	question.innerHTML = questions[q].ques;
	op1.innerHTML = questions[q].option1;
	op2.innerHTML = questions[q].option2;
	op3.innerHTML = questions[q].option3;
	op4.innerHTML = questions[q].option4;
}

//read selected option and compare with correct ans
submit.addEventListener("click", handleSubmit);


function handleSubmit(event){
	//read selected ans
	
	var sel;


	//uncheck all
	

	for(var i=0; i<ele.length; i++){
		if(ele[i].type == "radio"){
			if(ele[i].checked){
				sel = ele[i].id;
			}

		}
	}
	//check correct or incorrect
	if(sel !== undefined){
		if(sel == questions[q].correctAns){
			submit.innerHTML = "correct";
			submit.style.color = "green";
			score++;
		}
		else{
			submit.innerHTML = "incorrect";
			submit.style.backgroundColor = "red";
			submit.style.color = "yellow";
		}
	
		submit.disabled = true;

		
		
	}
	
}

next.addEventListener("click", handleNext);

function someCode(q){
	console.log(q);
	submit.innerHTML = "submit";
	submit.style.backgroundColor = "lightblue";
	submit.style.color = "floralwhite";
	submit.disabled = false;
	if(q<10){
		question.innerHTML = questions[q].ques;

	}
	op1.innerHTML = questions[q].option1;
	op2.innerHTML = questions[q].option2;
	op3.innerHTML = questions[q].option3;
	op4.innerHTML = questions[q].option4;

	var ele = document.getElementsByTagName("input");
	var sel;
	for(var i=0; i<ele.length; i++){
		if(ele[i].type == "radio"){
			if(ele[i].checked){
				sel = ele[i].id;
			}

		}
	}
	//correct
	if(sel !== undefined){
		if(sel == questions[q].correctAns){
			submit.innerHTML = "correct";
			submit.style.color = "green";
			score++;
		}
		else{
			submit.innerHTML = "incorrect";
			submit.style.backgroundColor = "red";
			submit.style.color = "yellow";
		}
	
		submit.disabled = true;

	}

}


                                //HANDLE NEXT BUTTON

function handleNext(event){
	uncheckALL();
	submit.disabled = false;
	submit.innerHTML = "Submit";
	q++;

	if(q==9){
		next.innerHTML = "Finish test";
		
		someCode(q);

		next.addEventListener("click", handleFinish);

	}

	else if(q<9){
		
		someCode(q);
	
	}
		

}

                    //HANDLE FINISH BUTTON

//display result page
function handleFinish(event){
	
	quiz.style.display = "none";
	ansKey.style.display = "block";
	var sc = document.getElementById("scoreS");
	sc.innerHTML = "SCORE : " + score;

	var correctans = document.getElementById("correctAns"); 
	for(var i=0; i<questions.length; i++){

		var item = document.createElement("h3");
		item.setAttribute("id", "i");
		item.style.margin = "5px";
		// var cAns = questions[i].correctAns;
		var str = ARRanswers[i];
		var final = str.fontcolor("green");
		item.innerHTML = questions[i].ques + " : " + final ;
		correctans.appendChild(item);
	}

}

                       // HANDLE RESET BUTTON



res.addEventListener("click", handleRes);
function handleRes(event) {
	q = 0;
	score = 0;
	next.innerHTML = "Next";
	for(var i=0; i<10; i++){
		var element = document.getElementById("i");
		element.remove();
	}
	home.style.display = "block";
	quiz.style.display = "none";
	ansKey.style.display = "none";
	next.removeEventListener("click", handleFinish);
	startBtn.addEventListener("click", commenceTest);
	
}	



