//Display de Idea
	var idea_display = document.querySelector("#idea_display");

//botones comentarios y escribir
	var buttonComments = document.querySelector("#buttonComments");
		//display de comentarios
		var comments_display
		//textarea para escribir comentario
		var comments_write = document.querySelector("#comments_write");
		//boton de enviar comentario
		var comments_send = document.querySelector("#comments_send");
		
	var buttonWrite = document.querySelector("#buttonWrite");
		//textarea para escribir idea
		var write_idea = document.querySelector("#write_idea");
		//boton de enviar idea
		var write_send = document.querySelector("#write_send");



//Funcion de visibilidad de los botones
buttonComments.addEventListener("click", function(){
	comments_write.classList.remove("hideParts");
	comments_send.classList.remove("hideParts");
	write_send.classList.add("startHide-write_send");
	write_idea.classList.add("hideParts");
	write_idea.classList.remove("startHide-write_idea");
	buttonWrite.classList.remove("buttonSelected");
	buttonComments.classList.add("buttonSelected");
});

buttonWrite.addEventListener("click", function(){
	comments_write.classList.add("hideParts");
	comments_send.classList.add("hideParts");
	write_send.classList.remove("startHide-write_send");
	write_idea.classList.remove("hideParts");
	write_idea.classList.remove("startHide-write_idea");
	buttonComments.classList.remove("buttonSelected");
	buttonWrite.classList.add("buttonSelected");
});

