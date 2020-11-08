const express = require('express');
const router = express.Router();
const handleSolveMath = (expression, res) => {
  let result;
  const val = expression.replace(/sqrt/g, 'Math.sqrt')
  const operation = /^([ 0-9()+*/.,-]|Math.sqrt)+$/;
  const value = operation.test(val);
  if (value) {
    try {
      result = res.status(200).send((eval(val)).toString());
    } catch (err) {
      result = res.status(400).send('Invalid operation', err);
    }
  } else {
    result = res.status(400).send('Invalid operation');
  }
  return result;
};
//the get method solves any mathematical operation that comes by parameter, first validates that it is an expression and then solves the operation
router.get('/api/calculator', (req, res) => {
  const { expression } = req.query;
  return handleSolveMath(expression, res);
});
//the post method solves any mathematical operation that comes through the body, first validates that it is an expression and then solves the operation
router.post('/api/calculator', async (req, res) => {
  const { expression } = req.body;
  return handleSolveMath(expression, res);
});
module.exports = router;