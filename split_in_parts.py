def split_in_parts(s, p_l): 
    st = ""
    for i in range(0,len(s),p_l):
        st += s[i:i+p_l] + " "
    return st.strip()