import { NextResponse } from 'next/server';

// This should match the version in your service worker
const APP_VERSION = 'v2025.6.21.1703';

export async function GET() {
  return NextResponse.json({
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
    buildTime: process.env.BUILD_TIME || new Date().toISOString(),
  });
}

export const dynamic = 'force-dynamic';
