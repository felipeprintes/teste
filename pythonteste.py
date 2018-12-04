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


x = [['joao', '1111'], ['joao', '1111'], ['gabriel', '2222']]




'''
for i in range(len(x)):
  for j in range( i ):
    if x[i] not in vetx:
      vetx.append(x[i])
print(vetx)
'''

#solução que está mais proxima da resposta correta
'''
for i in range(len(facts)):
  for j in range(0,i):
    if facts[i][3]==True:
      if facts[i] not in vetx:
        vetx.append(facts[i])

for a in vetx:
  print(a)
'''
vetx = []
for i in range(len(facts)):
  if facts[i][3]==True and facts[i] not in vetx:
      vetx.append(facts[i])

    
for j in vetx:
  print(j) 


"""
for a in vetx:
  print(a)
  #nome = a[0]
  #endereco = a[2]
  #if nome and endereco in vetx: 
"""