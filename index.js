const questions = [
    {
      question: "Qual é a palavra-chave usada para declarar uma variável constante em Java?",
      respostas: [
        "final",
        "const",
        "static"
      ],
      correta: 0 // "final" é a resposta correta
    },
    {
      question: "Qual desses tipos de dados em Java é usado para armazenar números inteiros?",
      respostas: [
        "float",
        "int",
        "double"
      ],
      correta: 1 // "int" é a resposta correta
    },
    {
      question: "Em Java, qual é o operador usado para verificar se dois valores são iguais?",
      respostas: [
        "==",
        "=",
        "==="
      ],
      correta: 0 // "==" é a resposta correta
    },
    {
      question: "Qual é a estrutura de controle em Java que permite repetir um bloco de código várias vezes até que uma condição seja falsa?",
      respostas: [
        "for",
        "while",
        "if"
      ],
      correta: 1 // "while" é a resposta correta
    },
    {
      question: "Qual é a função do método 'toString()' em Java?",
      respostas: [
        "Converter uma string em um objeto",
        "Converter um objeto em uma string",
        "Comparar duas strings"
      ],
      correta: 1 // "Converter um objeto em uma string" é a resposta correta
    },
    {
      question: "Qual é a classe base para todas as classes em Java?",
      respostas: [
        "Main",
        "Object",
        "BaseClass"
      ],
      correta: 1 // "Object" é a resposta correta
    },
    {
      question: "Como se chama o processo de converter um objeto de uma classe em uma representação de texto em Java?",
      respostas: [
        "Parsing",
        "Casting",
        "Serialization"
      ],
      correta: 2 // "Serialization" é a resposta correta
    },
    {
      question: "Em Java, qual é o nome dado a uma função dentro de uma classe?",
      respostas: [
        "Sub-rotina",
        "Método",
        "Função"
      ],
      correta: 1 // "Método" é a resposta correta
    },
    {
      question: "Qual é a palavra-chave usada para iniciar a definição de uma classe em Java?",
      respostas: [
        "class",
        "def",
        "object"
      ],
      correta: 0 // "class" é a resposta correta
    },
    {
      question: "Qual dessas declarações é usada para criar um objeto em Java?",
      respostas: [
        "new",
        "create",
        "instance"
      ],
      correta: 0 // "new" é a resposta correta
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const correct = new Set()
  const totOfQuestions = questions.length
  const showTotal = document.querySelector('#hits span')
  showTotal.textContent = correct.size + ' de ' + totOfQuestions
  
  for(const item of questions){
    const quizItem  = template.content.cloneNode(true)
    quizItem.querySelector('h2').textContent = item.question
  
    for(let response of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      
      dt.querySelector('span').textContent = response
      dt.querySelector('input').setAttribute('name', 'pergunta-' + questions.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(response)
      dt.querySelector('input').onchange = (event) => {
        const itsCorrect = event.target.value == item.correta
  
        correct.delete(item)
        if(itsCorrect){
          correct.add(item)
        }
        showTotal.textContent = correct.size + ' de ' + totOfQuestions
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
     quiz.appendChild(quizItem)
  }
  