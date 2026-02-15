
# Translate anything into French !

def i_speak_french(s):
    output = []
    flag = True
    if len(s)== 0:
        return ''
    arr = s.split(' ')
    for i in arr:
        if flag:    
            output.append('Baguette')
            flag = False
        else:
            output.append('baguette')
        if i.endswith('.'):
            output.append('Encore!')
            flag = True
    
    if output[-1] != 'Encore!':
        output.append('Encore!')
        
           
    print(s, arr, output )
    return ' '.join(output)