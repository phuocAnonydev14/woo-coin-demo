import { GHOST_API_KEY } from '@/const/env-keys';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const [id, secret] = GHOST_API_KEY.split(':');

  // Tạo token
  const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid: id,
    algorithm: 'HS256',
    expiresIn: '8h',
    audience: `/admin/`,
  });

  console.log('NextResponse', NextResponse);
  // Response will have a `Set-Cookie:show-banner=false;path=/home` header
  return NextResponse.json(
    { success: true, token: token },
    {
      status: 200,
    },
  );
}
