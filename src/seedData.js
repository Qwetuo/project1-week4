const postings1 = [
  {
    title: "Flyer Distribution",
    pay: "$9",
    desc:
      "10am to 3pm on 30June, 1 July, 7 & 8 July, 14 & 15 July, 21 & 22 July, 28 & 29 July. Total: $441",
    req: `* Must be able to commit ALL stated dates
        * Salary only paid after assignment is done`,
    location: "Bedok North",
    type: "others",
    commitment: [
      "20180630",
      "20180701",
      "20180707",
      "20180714",
      "20180721",
      "20180708",
      "20180722",
      "20180728",
      "20180715",
      "20180729"
    ],
    status: "active",
    interested: ["int1", "int2", "int3"],
    applicants: ["app1", "app2"],
    confirmed: ["confirm1"]
  },
  {
    title: "posting2employer1",
    pay: "$9",
    desc: "posting2test1",
    req: `posting2test1`,
    location: "posting2test1",
    type: "others",
    commitment: ["20180630", "20180714", "20180715", "20180716", "20180717"],
    status: "active",
    interested: ["int3", "int4"],
    applicants: ["app3"],
    confirmed: []
  },
  {
    title: "posting3employer1",
    pay: "$11",
    desc: "posting3test1",
    req: `posting3test1`,
    type: "others",
    commitment: [
      "20180630",
      "20180727",
      "20180720",
      "20180803",
      "20180810",
      "20180817"
    ],
    status: "active",
    location: "posting3test1",
    interested: ["int5", "int6"],
    applicants: [],
    confirmed: ["confirm2"]
  }
];

const postings2 = [
  {
    title: "posting1employer2",
    pay: "$8",
    desc: "desc 2.1",
    req: `req 2.1`,
    type: "others",
    commitment: ["20180701", "20180702"],
    status: "active",
    location: "location 2.1",
    interested: ["int"],
    applicants: [],
    confirmed: []
  },
  {
    title: "posting2employer2",
    pay: "$9",
    desc: "desc 2.2",
    req: `req 2.2`,
    type: "others",
    commitment: ["20180630", "20180714"],
    status: "active",
    location: "location 2.2",
    interested: [],
    applicants: ["int"],
    confirmed: []
  },
  {
    title: "posting2employer2",
    pay: "$10",
    desc: "desc 2.3",
    req: `req 2.3`,
    type: "others",
    commitment: ["20180630"],
    status: "active",
    location: "location 2.3",
    interested: [],
    applicants: [],
    confirmed: ["int"]
  }
];

export const employers = [
  {
    name: "test1 name",
    email: "test1@mail.com",
    mobile: "test1 +65",
    password: "000000",
    coyName: "test1 company name",
    UEN: "test1 Company Registry Number",
    postings: postings1
  },
  {
    name: "test2 name",
    email: "test2@mail.com",
    mobile: "test2 +65",
    password: "000000",
    coyName: "test2 company name",
    UEN: "test2 Company Registry Number",
    postings: postings2
  }
];

export const employees = [
  {
    name: "employee1",
    email: "employee1@mail.com",
    mobile: "employee1 +65",
    password: "000000",
    citizen: "Singapore",
    education: "diploma",
    avail: [],
    updatedAvail: "20180504"
  },
  {
    name: "employee2",
    email: "employee2@mail.com",
    mobile: "employee2 +65",
    password: "000000",
    citizen: "PR",
    education: "O Levels",
    avail: [],
    updatedAvail: ""
  }
];

export const allPostings = postings1.concat(postings2);

// Empty objects (Shortcut to create new data)
// {
//   title: "",
//   pay: "",
//   desc: "desc",
//   req: `req`,
//   type: "others",
//   commitment: [],
//   status: "active",
//   location: "location",
//   interested: [],
//   applicants: [],
//   confirmed: []
// }

// {
//   name: "",
//   email: "",
//   mobile: "",
//   password: "",
//   coyName: "",
//   UEN: "",
//   postings: postingsx
// }
