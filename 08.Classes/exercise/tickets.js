function tickets(arr, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
    static sortTickets(arr, sortCriteria) {
      if (sortCriteria === "price") {
        return arr.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
      }
      return arr.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }
  }
  let result = [];
  for (const line of arr) {
    let [destination, price, status] = line.split("|");

    result.push(new Ticket(destination, price, status));
  }
  result = Ticket.sortTickets(result, sortCriteria);

  return result;
}
console.log(
  tickets(
    [
      "Philadelphia|94.20|available",

      "New York City|95.99|available",

      "New York City|95.99|sold",

      "Boston|126.20|departed",
    ],

    "destination"
  )
);
