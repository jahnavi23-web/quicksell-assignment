const data = {
  tickets: [
    {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      tag: ["Feature request"],
      userId: "usr-1",
      status: "Todo",
      priority: 4,
    },
    {
      id: "CAM-2",
      title:
        "Add Multi-Language Support - Enable multi-language support within the application.",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 1,
    },
    {
      id: "CAM-4",
      title: "Implement Email Notification System",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "In progress",
      priority: 0,
    },
    {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "Todo",
      priority: 1,
    },
    {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "Backlog",
      priority: 2,
    },
    {
      id: "CAM-8",
      title: "Implement Role-Based Access Control (RBAC)",
      tag: ["Feature Request"],
      userId: "usr-3",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "Todo",
      priority: 2,
    },
    {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: ["Feature Request"],
      userId: "usr-4",
      status: "Backlog",
      priority: 1,
    },
  ],
  users: [
    { id: "usr-1", name: "Anoop sharma", available: false },
    { id: "usr-2", name: "Yogesh", available: true },
    { id: "usr-3", name: "Shankar Kumar", available: true },
    { id: "usr-4", name: "Ramesh", available: true },
    { id: "usr-5", name: "Suresh", available: true },
  ],
};

const tickets = data.tickets;

// console.log('tickets');
// console.log(tickets);

const titles = [
  "Update User Profile Page UI",
  "Add Multi-Language Support - Enable multi-language support within the application.",
  "Optimize Database Queries for Performance",
  "Implement Email Notification System",
  "Enhance Search Functionality",
  "Third-Party Payment Gateway",
  "Create Onboarding Tutorial for New Users",
  "Implement Role-Based Access Control (RBAC)",
  "Upgrade Server Infrastructure",
  "Conduct Security Vulnerability Assessment",
];

function compareText(a, b) {
  var lengthA = a.length;
  var lengthB = b.length;

  // if (lengthA > lengthB) return -1;
  // else if (lengthA < lengthB) return 1;
  // else return 0;

  return lengthA - lengthB;
}

// var titlesSorted = titles.sort(compareText);

// console.log(titlesSorted);

// for (let i = 0; i < tickets.length; i++) {

// }

function compareTicketTitleText(a, b) {
  var lengthA = a.title.length;
  var lengthB = b.title.length;

  return lengthA - lengthB; // Ascending order
}

function compareTicketsPriorityNumber(a, b) {
  var lengthA = a.priority;
  var lengthB = b.priority;

  return lengthB - lengthA; // Descending order
}



var ticketsSortedbyTitle = tickets.sort(compareTicketTitleText);
// console.log(ticketsSortedbyTitle);

var ticketsSortedbyPriority = tickets.sort(compareTicketsPriorityNumber);
// console.log('ticketsSortedbyPriority');
// console.log(ticketsSortedbyPriority);


let name = 'Akash Chandra';
let nameSplit = name.split();
console.log(nameSplit);