const questions = [
    "O que aprendi Hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0)=>{
    process.stdout.write("\n\n"+questions[index]+ ">")
}

ask()

const answers = []

process.stdin.on("data",data=>{
    answers.push(data.toString().trim())
    if(answers.length< questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
})

process.on('exit',()=>{
    console.log(`
    O que você aprendeu foi:
    ${answers[0]}

    O que te aborreceu foi:
    ${answers[1]}

    O que você fez para melhorar foi:
    ${answers[2]}

    O que te deixou feliz foi:
    ${answers[3]}

    Você ajudou ${answers[4]} pessoas Hoje!!

    Volte amanhã para novas reflexões!
    `);
})