import { GHOST_API_KEY } from '@/const/env-keys';
import jwt from 'jsonwebtoken';

export const handleHash = () => {
  const [id, secret] = GHOST_API_KEY.split(':');

  // Tạo token
  const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid: id,
    algorithm: 'HS256',
    expiresIn: '8h',
    audience: `/admin/`,
  });
  return token;
};
