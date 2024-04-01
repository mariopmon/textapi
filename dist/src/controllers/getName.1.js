import { validationResult } from 'express-validator';
export const getName = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation error', errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }
  try {
    const { name } = req.params;
    console.log(name);
    let finalName;
    if (name === '') {
      console.log(generatelastName());
      finalName = generatelastName();
    } else if (name === '') {
      finalName = name();
    } else {
      res.status(404).send('City not found');
    }
    function generatelastName() {
      throw new Error('Function not implemented.');
    }
  } catch (error) {
    res.status(500).send('Error in fetching name');
  }
};
//# sourceMappingURL=getName.1.js.map
