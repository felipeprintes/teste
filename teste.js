facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua alice, 10', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '234-5678', true],
  ['joão', 'telefone', '91234-5555', true],
  ['joão', 'telefone', '234-5678', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '98888-1111', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true],
];
 var vet = []
 
 
for(i=0; i<facts.length; i++){
   if(facts[i][3]==true & vet.indexOf(facts[i],i)){
        console.log('entrei no if')
        vet.push(facts[i])
     }
}

 console.log(vet)
 /*
  Olá, 
  primeiramente gostaria de agradecer pela oportunidade de participar dessa fase do
  processo seletivo. 
  
  Se me permitem fazer uma auto avaliação sobre meu desempenho no teste, falarei um pouco a seguir
  
  Gostei muito do teste, e entendi que o objetivo não era bem avaliar meus skills em Js, especificamente,
  mas minha lógica de programação e acho q o desafio atendeu bem o propósito. 
  
  Com relação ao meu desempennho:
    como o objetivo era passar os dados atuais que estão no banco, o primeiro requisito seria passar
    apenas o que é True, essa tarefa foi concluída sem muitos problemas.
    
    porém, encontrei dificuldade no momento em que eu precisava guardar um elemento, como endereço 
    para poder validar se aquele elemento ja pertencia ao vetor ao qual estava guardando meus dados
    mais atuais. 
    
    ['joão', 'endereço', 'rua alice, 10', true],
    ['joão', 'endereço', 'rua bob, 88', true],
    -> neste exemplo o endereco 'rua bob' deveria sobrescrevar, porém tive dificuldade
 */