// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

function greetDevelopers(list) {
  return list.map((d) => {
    const greeting = `Hi ${d.firstName}, what do you like the most about ${d.language}?`;
    return { ...d, greeting };
  });
}
