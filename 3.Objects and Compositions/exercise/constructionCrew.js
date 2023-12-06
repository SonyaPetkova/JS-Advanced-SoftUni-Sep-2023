function constructionCrew(obj) {
  let result = Object.assign({}, obj);
  

  if (result.dizziness) {
    result.levelOfHydrated += 0.1 * result.weight * result.experience;
    result.dizziness = false;
  }
 return result
}

constructionCrew({
  weight: 80,

  experience: 1,

  levelOfHydrated: 0,

  dizziness: true,
});
constructionCrew({
  weight: 120,

  experience: 20,

  levelOfHydrated: 200,

  dizziness: true,
});
constructionCrew({
  weight: 95,

  experience: 3,

  levelOfHydrated: 0,

  dizziness: false,
});
