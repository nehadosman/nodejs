class myClass {
  tickets = [
    {
      id: 1,
      seat_num: 1,
      flight_num: 3,
      departure: "10:00 am",
      arrivals: "10:20 pm",
      date: "23-3-21",
    },
    {
      id: 2,
      seat_num: 3,
      flight_num: 3,
      departure: "10:00 am",
      arrivals: "12:20 pm",
      date: "23-4-21",
    },
    {
      id: 3,
      seat_num: 4,
      flight_num: 4,
      departure: "10:00 am",
      arrivals: "1:20 pm",
      date: "23-3-21",
    },
  ];

  display() {
    for (let i = 0; i < this.tickets.length; i++) {
      console.log(this.tickets[i]);
    }
  }

  getTicket(id) {
    for (let i = 0; i < this.tickets.length; i++) {
      if (id == this.tickets[i].id) console.log(this.tickets[i]);
    }
  }

  update(id, seat_num, flight_num, departure, arrivals, date) {
    for (let i = 0; i < this.tickets.length; i++) {
      if (id == this.tickets[i].id) {
        this.tickets[i].seat_num = seat_num;
        this.tickets[i].flight_num = flight_num;
        this.tickets[i].departure = departure;
        this.tickets[i].arrivals = arrivals;
        this.tickets[i].date = date;
      }
    }
  }
}
module.exports = {
  myClass,
};
