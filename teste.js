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
 