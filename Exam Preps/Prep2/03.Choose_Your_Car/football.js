class footballTeam {
    constructor(clubName, country) {
      this.clubName = clubName;
      this.country = country;
      this.invitedPlayers = [];
    }
  
    newAdditions(players) {
      let output = "You successfully invite ";
      let nameArr = [];
      for (let line of players) {
        let [name, age, playerValue] = line.split("/");
        let currentPlayer = this.invitedPlayers.find((pl) => pl.name === name);
        if (!currentPlayer) {
          this.invitedPlayers.push({ name, age, playerValue });
          nameArr.push(name);
        } else if (currentPlayer.playerValue < playerValue) {
          currentPlayer.playerValue = playerValue;
        }
      }
      output += nameArr.join(", ") + ".";
      return output;
    }
  
    signContract(selectedPlayer) {
      let [name, playerOffer] = selectedPlayer.split("/");
      playerOffer = Number(playerOffer);
      let currentPlayer = this.invitedPlayers.find((pl) => pl.name === name);
      if (!currentPlayer) {
        throw new Error(`${name} is not invited to the selection list!`);
      } else if (currentPlayer.playerValue > playerOffer) {
        let priceDifference = currentPlayer.playerValue - playerOffer;
        throw new Error(
          `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
        );
      }
      currentPlayer.playerValue = "Bought";
      return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }
  
    ageLimit(selectedPlayer, ageLimit) {
      let currentPlayer = this.invitedPlayers.find(
        (pl) => pl.name === selectedPlayer
      );
      if (!currentPlayer) {
        throw new Error(
          `${selectedPlayer} is not invited to the selection list!`
        );
      }
      if (currentPlayer.age < ageLimit) {
        let ageDifference = ageLimit - currentPlayer.age;
        if (ageDifference < 5) {
          return `${selectedPlayer} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else if (ageDifference > 5) {
          return `${selectedPlayer} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
      } else {
        return `${selectedPlayer} is above age limit!`;
      }
    }
  
    transferWindowResult() {
      let output = "Players list:";
      let sortedPlayers = this.invitedPlayers.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      sortedPlayers.forEach((pl) => {
        output += `\nPlayer ${pl.name}-${pl.playerValue}`;
      });
      return output;
    }
  }
  
  let fTeam = new footballTeam("Barcelona", "Spain");
  
  console.log(
    fTeam.newAdditions([
      "Kylian Mbappé/23/160",
      "Aionel Messi/35/50",
  
      "Pau Torres/25/52",
    ])
  );
  
  console.log(fTeam.signContract("Kylian Mbappé/240"));
  
  console.log(fTeam.ageLimit("Kylian Mbappé", 30));
  
  console.log(fTeam.transferWindowResult());