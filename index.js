//declarando quantos participantes já possuem cadastro

let participantes=10

if (participantes<=100){

console.log ("Avance para informar a idade")
}
	else {

     console.log("Cadastro inválido, número de participantes excedido")
	}

	//Declarando lista de participantes

	let Listarparticipantes = ["Participante 1", "Participante 2", "Participante 3", "Participante 4" , "Participante 5" ,"Participante 6","Participante 7","Participante 8","Participante 9","Participante 10" ]

console.log ("Participantes inscritos no momento:")

for (let contador = 0; contador < Listarparticipantes.length; contador++) {
  console.log (Listarparticipantes[contador])
}

//Declaração de idade para cadastro

let idade=18

if(idade>=18){
	console.log("Avance para marcar a data do evento")
}
else{
	console.log("Cadastro inválido,só permitido a maiores de idade")
}

//Declaração da data do evento

let hoje = new Date().toDateString()
let dataEvento = new Date('25/02/2022').toDateString()

console.log(hoje)

if(dataEvento < hoje ){
	console.log("Cadastro permitido!")
}
else{
	console.log("Cadastro não permitido. A data é inválida")
}

//Declaração e listagem dos palestrantes


let palestrantes=3

console.log("Quantidade de palestrantes inscritos até o momento:", palestrantes)

if(palestrantes<=5){

	console.log("Palestrante cadastrado.")
}
	else{
		console.log("Número de palestrantes excedido.")
	}

	let listaPalestrantes= ["Palestrante 1", "Palestrante 2", "Palestrante 3"]

console.log ("Palestrantes inscritos até o momento:")

for (let contador = 0; contador < listaPalestrantes.length; contador++) {
  console.log (listaPalestrantes[contador])
}


