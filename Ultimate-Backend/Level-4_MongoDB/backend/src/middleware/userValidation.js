const userValidation = (req, res, next) => {
  // Body exists or not
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: 'Request body is required.',
    });
  }

  const { name, age, email, userName } = req.body;

  const allowedFields = ['name', 'age', 'email', 'userName'];

  const receivedFields = Object.keys(req.body);

  // Extra fields check
  const hasExtraField = receivedFields.some(
    (field) => !allowedFields.includes(field)
  );

  if (hasExtraField) {
    return res.status(400).json({
      message: 'Only name, age, email and userName are allowed.',
    });
  }

  // Required fields check
  if (!name || !age || !email || !userName) {
    return res.status(400).json({
      message: 'All fields are required.',
    });
  }

  next();
};

module.exports = userValidation;