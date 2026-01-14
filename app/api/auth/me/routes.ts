import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { verifyToken } from '@/app/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Get token from cookie or Authorization header
    const token = 
      request.cookies.get('auth-token')?.value ||
      request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Verify token
    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Get user profile with credentials
    const profile = await prisma.profile.findUnique({
      where: { userId: payload.userId },
      include: {
        companies: {
          include: {
            company: true,
          },
        },
      },
    });

    if (!profile) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // ดึง credential แยกต่างหาก เพราะ Profile ไม่มี relation credential
    const credential = await prisma.userCredential.findUnique({
      where: { userId: payload.userId },
      select: {
        email: true,
        isActive: true,
        lastLoginAt: true,
      },
    });

    if (!credential?.isActive) {
      return NextResponse.json(
        { error: 'Account is disabled' },
        { status: 403 }
      );
    }

    // Return user data
    return NextResponse.json({
      success: true,
      user: {
        userId: profile.userId,
        email: credential.email,
        role: profile.role,
        displayName: profile.displayName,
        avatarUrl: profile.avatarUrl,
        phone: profile.phone,
        university: profile.university,
        faculty: profile.faculty,
        major: profile.major,
        yearLevel: profile.yearLevel,
        bio: profile.bio,
        location: profile.location,
        companies: profile.companies.map((cm: { companyId: any; company: { name: any; }; memberRole: any; status: any; }) => ({
          companyId: cm.companyId,
          companyName: cm.company.name,
          memberRole: cm.memberRole,
          status: cm.status,
        })),
        lastLoginAt: credential.lastLoginAt,
      },
    });
  } catch (error) {
    console.error('Get current user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}