const AlphanumericSpace = '^[a-zA-Z0-9 ]*$';
const Email = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

export const signupSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string', pattern: Email },
        password: { type: 'string' },
        name: { type: 'string', pattern: AlphanumericSpace },
      },
      required: ['email', 'password', 'name'],
    },
  },
};

export const confirmSignupSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string', pattern: Email },
        code: { type: 'string', pattern: AlphanumericSpace },
      },
      required: ['email', 'code'],
    },
  },
};

export const loginSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string', pattern: Email },
        password: { type: 'string' },
      },
      required: ['email', 'password'],
    },
  },
};
