const csvtojson = require("./csvtojson");

test("it should return an object", () => {
  const json = csvtojson(
    "firstName, secondName, thirdName\nChris, Tara, Pepper\nJosh, Kat, Blake"
  );
  expect(json).toEqual([
    {
      firstName: "Chris",
      secondName: "Tara",
      thirdName: "Pepper"
    },
    {
      firstName: "Josh",
      secondName: "Kat",
      thirdName: "Blake"
    }
  ]);
});

test("it should return an object with missing values filled in", () => {
  const json = csvtojson("a, b, c\n1\nm, n\n,y,z");
  expect(json).toEqual([
    {
      a: "1",
      b: "",
      c: ""
    },
    {
      a: "m",
      b: "n",
      c: ""
    },
    {
      a: "",
      b: "y",
      c: "z"
    }
  ]);
});
