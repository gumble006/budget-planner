const fastCsv = require('fast-csv');

const csvFormatter = arr => arr.reduce((accum, category) => {
  category.costs.forEach((expense, i) => {
    accum.push({ 
      Category: i === 0 ? category.category : '', 
      Expense: expense.name, 
      Price: expense.price, 
    });
  });

  return accum;
}, []);

module.exports = (req, res) => {
  res.set({
    'Content-Type': 'text/csv',
    'Content-Disposition': 'inline; filename="myPlan.csv"',
  });

  const formatted = csvFormatter(req.body);
 
  fastCsv
    .write(formatted, { headers: true })
    .pipe(res);
};
