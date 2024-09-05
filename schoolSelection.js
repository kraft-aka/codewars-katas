// Hello, my name is Anna, and I'm the director of elementary school. Every month I accept applications for schooling from new guys and when I process it manually, I get a little tired. Сould you help me and automate this process?

// If so, you have information about the ages of all these new pupils (array of ages - only positive digital numbers). Your goal is to sort sort these ages by grade. Your function schoolSelection needs to return an object where key is grade level and value is a number of convenient ages.

// Additional information:

// Level           -> age

// Kindergarten     -> 5
// 1st grade        -> 6
// 2nd grade        -> 7
// 3rd grade        -> 8
// 4th grade        -> 9


function schoolSelection(array) {
    const levels = {
        'Kindergarten': 5,
        '1st grade': 6,
        '2nd grade': 7,
        '3rd grade': 8,
        '4th grade': 9,
    }

    let selectionList = {
        'Kindergarten': 0,
        '1st grade': 0,
        '2nd grade': 0,
        '3rd grade': 0,
        '4th grade': 0,
    }

    Object.entries(levels).forEach(([k, v]) => {
        const count = array.filter(i => i === v).length;

        if (count > 0) {
            selectionList[k] = count;
        }
    })
    return selectionList;
}