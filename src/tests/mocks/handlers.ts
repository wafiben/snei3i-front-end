import { rest } from 'msw/node';
import { mockSignInResponse , mockClientUser, mockFreelancerUser } from './user.mock';

export const handlers = [
  rest.post('/api/auth/signin', async (req, res, ctx) => {
    const { email, password } = await req.json();

    if (email === 'client@example.com' && password === 'password123') {
      return res(
        ctx.status(200),
        ctx.json({ id: '123', token: 'fake-jwt-token-123' })
      );
    }

    if (email === 'freelancer@example.com' && password === 'password456') {
      return res(
        ctx.status(200),
        ctx.json({ id: '456', token: 'fake-jwt-token-456' })
      );
    }

    return res(
      ctx.status(401),
      ctx.json({ message: 'Invalid credentials' })
    );
  }),

  rest.get('/api/users/:id', (req, res, ctx) => {
    const { id } = req.params;

    if (id === '123') {
      return res(ctx.status(200), ctx.json(mockClientUser));
    }

    if (id === '456') {
      return res(ctx.status(200), ctx.json(mockFreelancerUser));
    }

    return res(ctx.status(404), ctx.json({ message: 'User not found' }));
  }),
];