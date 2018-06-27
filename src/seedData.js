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
    commitment: [],
    status: "active",
    interested: ["int1", "int2", "int3"],
    applicants: ["app1", "app2"],
    confirmed: ["confirm1"]
  },
  {
    title: "posting2test1",
    pay: "$9",
    desc: "posting2test1",
    req: `posting2test1`,
    location: "posting2test1",
    type: "others",
    commitment: [],
    status: "active",
    interested: ["int3", "int4"],
    applicants: ["app3"],
    confirmed: []
  },
  {
    title: "posting3test1",
    pay: "$11",
    desc: "posting3test1",
    req: `posting3test1`,
    type: "others",
    commitment: [],
    status: "active",
    location: "posting3test1",
    interested: ["int5", "int6"],
    applicants: [],
    confirmed: ["confirm2"]
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
    postings: postings1
  }
];
