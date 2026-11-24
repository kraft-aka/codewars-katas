def game_winners(g, s):
    if "yes" in g:
        update = g[0]+150
        g[0]=update
    else:
        update = s[0]+150
        s[0]=update
    if g[0] > s[0]:
        return "Gryffindor wins!"
    elif s[0] > g[0]:
        return "Slytherin wins!"
    else:
        return "It's a draw!"