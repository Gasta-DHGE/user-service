export default {
  type: 'object',
  properties: {
    firstName: { type: 'string', minLength: 1 },
    lastName: { type: 'string', minLength: 1 },
    birthDate: { type: 'number' },
    gender: { type: 'string', enum: ['male', 'female', 'other'] },
    diet: { type: 'string', enum: ['everything', 'vegetarian', 'vegan'] },
    address: {
      type: 'object',
      properties: {
        city: { type: 'string', minLength: 2 },
        street: { type: 'string', minLength: 2 },
        streetNumber: { type: 'number' },
        postcode: { type: 'string', minLength: 5, maxLength: 5 },
        additionalInfo: { type: 'string' }
      },
      required: ['city', 'street', 'postcode', 'additionalInfo']
    }
  }
};
