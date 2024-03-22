class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }
  addParticipant(name, gender) {
    if (this.participants.hasOwnProperty(name)) {
      return `${name} has already been added to the list`;
    }
    this.participants[name] = gender;
    return `A new participant has been added - ${name}`;
  }

  completeness(name, condition) {
    if (!this.participants.hasOwnProperty(name)) {
      throw new Error(`${name} is not in the current participants list`);
    }
    if (condition < 30) {
      throw new Error(
        `${name} is not well prepared and cannot finish any discipline`
      );
    }
    let finishedDisciplines = Math.trunc(condition / 30);
    if (finishedDisciplines < 3) {
      return `${name} could only complete ${finishedDisciplines} of the disciplines`;
    }

    this.listOfFinalists.push({ [name]: this.participants[name] });
    delete this.participants[name];
    return `Congratulations, ${name} finished the whole competition`;
  }


  rewarding(name) {
    let output = this.listOfFinalists.filter((finalist) =>
      finalist.hasOwnProperty(name)
    );

    if (output.length) {
      return `${name} was rewarded with a trophy for his performance`;
    }
    return `${name} is not in the current finalists list`;
  }

  
  showRecord(criteria) {
    let output = `List of all ${this.competitionName} finalists:`;
    if (this.listOfFinalists.length === 0) {
      return "There are no finalists in this competition";
    }
    if (criteria === "all") {
      this.listOfFinalists.sort((a, b) =>
        Object.keys(a)[0].localeCompare(Object.keys(b)[0])
      );
      this.listOfFinalists.forEach(
        (finalist) => (output += `\n${Object.keys(finalist)[0]}`)
      );
      return output;
    }
    let criteriaMatch = this.listOfFinalists.filter(
      (finalist) => Object.entries(finalist)[0][1] === criteria
    );
    if (criteriaMatch.length === 0) {
      return `There are no ${criteria}'s that finished the competition`;
    }

    return `${Object.keys(
      criteriaMatch[0]
    )} is the first ${criteria} that finished the ${
      this.competitionName
    } triathlon`;
  }
}
// const contest = new Triathlon("Dynamos");

// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");

// console.log(contest.addParticipant("Peter", "male"));

// console.log(contest.addParticipant("Sasha", "female"));

// console.log(contest.completeness("Peter", 100));

// console.log(contest.completeness("Sasha", 90));

// console.log(contest.rewarding("Peter"));

// console.log(contest.rewarding("Sasha"));

// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");

console.log(contest.addParticipant("Peter", "male"));

console.log(contest.addParticipant("Sasha", "female"));

console.log(contest.addParticipant("George", "male"));

console.log(contest.completeness("Peter", 100));

console.log(contest.completeness("Sasha", 90));

console.log(contest.completeness("George", 95));

console.log(contest.rewarding("Peter"));

console.log(contest.rewarding("Sasha"));

console.log(contest.rewarding("George"));

console.log(contest.showRecord("male"));
