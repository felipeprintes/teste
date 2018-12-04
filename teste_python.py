facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', True],
  ['joão', 'endereço', 'rua alice, 10', True],
  ['joão', 'endereço', 'rua bob, 88', True],
  ['joão', 'telefone', '234-5678', True],
  ['joão', 'telefone', '91234-5555', True],
  ['joão', 'telefone', '234-5678', False],
  ['gabriel', 'telefone', '98888-1111', True],
  ['gabriel', 'telefone', '98888-1111', False],
  ['gabriel', 'telefone', '98888-1111', True],
  ['gabriel', 'telefone', '56789-1010', True],
];

vetx = []
for i in range(len(facts)):
  if facts[i][3]==True and facts[i] not in vetx:
      vetx.append(facts[i])

    
for j in vetx:
  print(j) 


