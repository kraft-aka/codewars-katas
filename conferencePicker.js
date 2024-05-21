function conferencePicker(citiesVisited, citiesOffered) {
  return (
    citiesOffered.filter((city) => !citiesVisited.includes(city))[0] ||
    "No worthwhile conferences this year!"
  );
}
