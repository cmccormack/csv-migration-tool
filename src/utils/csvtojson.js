const csvtojson = csv => {
  const [headers, ...data] = csv.split("\n").map(row => row.split(/\s*,\s*/));

  if (!headers || !data) {
    return { success: false, message: "Invalid CSV Input" };
  }

  const result = data.map(row =>
    headers.reduce(
      (a, col, i) => Object.assign(a, { [headers[i]]: row[i] ? row[i] : "" }),
      {}
    )
  );

  console.log(result);
  return result;
};

module.exports = csvtojson;
