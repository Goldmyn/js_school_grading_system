// simple if function statement

	

			// ID's ==  eng mat chem bio fre
			function englishScore() {
				var english=document.getElementById('eng').value;
						if(english<40){

						document.getElementById('engsco').innerHTML='F'



			}
						if(english>40 && english<=45){


						document.getElementById('engsco').innerHTML='E'

			}

						if(english>45 && english<=50){


						document.getElementById('engsco').innerHTML='D'

			}
						if(english>50 && english<60){


						document.getElementById('engsco').innerHTML='C'

			}
						if(english>=60 && english<=69){


					document.getElementById('engsco').innerHTML='B'

	}
					if(english>=70){


		document.getElementById('engsco').innerHTML='A'

	}
			}
			
			function mathScore() {
				var maths=document.getElementById('mat').value;
						if(maths<40){

						document.getElementById('matsco').innerHTML='F'



			}
						if(maths>40 && maths<=45){


						document.getElementById('matsco').innerHTML='E'

			}

						if(maths>45 && maths<=50){


						document.getElementById('matsco').innerHTML='D'

			}
						if(maths>50 && maths<60){


						document.getElementById('matsco').innerHTML='C'

			}
						if(maths>=60 && maths<=69){


					document.getElementById('matsco').innerHTML='B'

	}
					if(maths>=70){


		document.getElementById('matsco').innerHTML='A'

	}
			}

			function chemistryScore() {
				var chemistry=document.getElementById('chem').value;
						if(chemistry<40){

						document.getElementById('chmsco').innerHTML='F'



			}
						if(chemistry>40 && chemistry<=45){


						document.getElementById('chmsco').innerHTML='E'

			}

						if(chemistry>45 && chemistry<=50){


						document.getElementById('chmsco').innerHTML='D'

			}
						if(chemistry>50 && chemistry<60){


						document.getElementById('chmsco').innerHTML='C'

			}
						if(chemistry>=60 && chemistry<=69){


					document.getElementById('chmsco').innerHTML='B'

	}
					if(chemistry>=70){


		document.getElementById('chmsco').innerHTML='A'

	}
			}
			
			function biologyScore(){
				var biology=document.getElementById('bio').value;
						if(biology<40){

						document.getElementById('biosco').innerHTML='F'



			}
						if(biology>40 && biology<=45){


						document.getElementById('biosco').innerHTML='E'

			}

						if(biology>45 && biology<=50){


						document.getElementById('biosco').innerHTML='D'

			}
						if(biology>50 && biology<60){


						document.getElementById('biosco').innerHTML='C'

			}
						if(biology>=60 && biology<=69){


					document.getElementById('biosco').innerHTML='B'

	}
					if(biology>=70){


		document.getElementById('biosco').innerHTML='A'

	}	
			}
			
			function frenchScore(){
				var french=document.getElementById('fre').value;
						if(french<40){

						document.getElementById('fresco').innerHTML='F'



			}
						if(french>40 && french<=45){


						document.getElementById('fresco').innerHTML='E'

			}

						if(french>45 && french<=50){


						document.getElementById('fresco').innerHTML='D'

			}
						if(french>50 && french<60){


						document.getElementById('fresco').innerHTML='C'

			}
						if(french>=60 && french<=69){


					document.getElementById('fresco').innerHTML='B'

	}
					if(french>=70){


		document.getElementById('fresco').innerHTML='A'

	}
			}

			function getResult(){
		var score = document.getElementsByClassName("scores");
		var total = 0;
		for ( i = 0;  i < score.length; i++) {
			total = total +  Number(score[i].value)  ;
			document.getElementById('tot').innerHTML = total;	
		var	average = total / 3;
		document.getElementById('average').innerHTML = average;
		}
		if (average > 50) {
								document.getElementById('remarks').innerHTML ='YOU PASSED!';

								document.getElementById('image').innerHTML='<img src=pic/smilemoji.png>'

							}
							else{

								document.getElementById('remarks').innerHTML ='YOU HAVE FAILED YOUR TEACHERS!';
								document.getElementById('image').innerHTML='<img src=pic/sad-moji.png >'



							}
	}
		