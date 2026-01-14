import { randomUUID } from "crypto";
import prisma from "./client.js";

type SeedUser = {
  userId: string;
  email: string;
  role: "student" | "company" | "admin";
  displayName: string;
  avatarUrl?: string;
  phone?: string;
  university?: string;
  faculty?: string;
  major?: string;
  yearLevel?: number;
  bio?: string;
  location?: string;
};

const seedUsers: SeedUser[] = [
  {
    userId: randomUUID(),
    email: "maya.s@internhub.test",
    role: "student",
    displayName: "Maya Sirisuk",
    university: "Khon Kaen University",
    faculty: "Engineering",
    major: "Software Engineering",
    yearLevel: 3,
    location: "Khon Kaen",
    bio: "Frontend intern who loves product design.",
  },
  {
    userId: randomUUID(),
    email: "phet.t@internhub.test",
    role: "student",
    displayName: "Phet Tanakorn",
    university: "Chulalongkorn University",
    faculty: "Commerce",
    major: "Information Systems",
    yearLevel: 4,
    location: "Bangkok",
    bio: "Data-driven and curious about HR tech.",
  },
  {
    userId: randomUUID(),
    email: "jamie.n@internhub.test",
    role: "student",
    displayName: "Jamie Narin",
    university: "Mahidol University",
    faculty: "Science",
    major: "Computer Science",
    yearLevel: 2,
    location: "Nakhon Pathom",
    bio: "Backend learner focused on APIs.",
  },
  {
    userId: randomUUID(),
    email: "sarai.k@internhub.test",
    role: "student",
    displayName: "Sarai Khem",
    university: "Chiang Mai University",
    faculty: "Humanities",
    major: "Digital Media",
    yearLevel: 3,
    location: "Chiang Mai",
    bio: "Storyteller and UX researcher.",
  },
  {
    userId: randomUUID(),
    email: "hr@brightpath.test",
    role: "company",
    displayName: "Brightpath HR",
    location: "Bangkok",
    bio: "Hiring platform for early career talent.",
  },
  {
    userId: randomUUID(),
    email: "people@northstar.test",
    role: "company",
    displayName: "Northstar People Ops",
    location: "Khon Kaen",
    bio: "Talent partner for tech startups.",
  },
];

const mockPasswordHash = "mock_password_hash";

async function seedProfiles() {
  await prisma.profile.createMany({
    data: seedUsers.map((user) => ({
      userId: user.userId,
      role: user.role,
      displayName: user.displayName,
      avatarUrl: user.avatarUrl,
      phone: user.phone,
      university: user.university,
      faculty: user.faculty,
      major: user.major,
      yearLevel: user.yearLevel,
      bio: user.bio,
      location: user.location,
    })),
  });

  await prisma.userCredential.createMany({
    data: seedUsers.map((user) => ({
      userId: user.userId,
      email: user.email,
      passwordHash: mockPasswordHash,
      passwordAlgo: "bcrypt",
      isActive: true,
    })),
  });
}

async function seedCompanies() {
  const [brightpathUser, northstarUser] = seedUsers.slice(4, 6);

  const brightpath = await prisma.company.create({
    data: {
      name: "Brightpath Studio",
      slug: "brightpath-studio",
      website: "https://brightpath.test",
      industry: "HR Tech",
      sizeRange: "51-100",
      location: "Bangkok",
      about: "Building talent operations tools for modern teams.",
    },
  });

  const northstar = await prisma.company.create({
    data: {
      name: "Northstar Labs",
      slug: "northstar-labs",
      website: "https://northstar.test",
      industry: "Software",
      sizeRange: "11-50",
      location: "Khon Kaen",
      about: "Product studio for growth-stage startups.",
    },
  });

  await prisma.companyMember.createMany({
    data: [
      {
        companyId: brightpath.id,
        userId: brightpathUser.userId,
        memberRole: "owner",
        status: "active",
      },
      {
        companyId: northstar.id,
        userId: northstarUser.userId,
        memberRole: "owner",
        status: "active",
      },
    ],
  });

  return { brightpath, northstar };
}

async function seedJobs(companyIds: { brightpath: string; northstar: string }) {
  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

  await prisma.job.createMany({
    data: [
      {
        companyId: companyIds.brightpath,
        title: "Product Design Intern",
        description: "Support product design for new hiring tools.",
        requirements: "Figma, user research basics.",
        jobType: "intern",
        workMode: "hybrid",
        location: "Bangkok",
        stipendMin: 8000,
        stipendMax: 12000,
        tags: ["design", "ux", "figma"],
        openings: 2,
        status: "open",
        publishedAt: threeDaysAgo,
      },
      {
        companyId: companyIds.brightpath,
        title: "Frontend Engineer Intern",
        description: "Ship fast UI improvements in Next.js.",
        requirements: "React, Tailwind, attention to detail.",
        jobType: "intern",
        workMode: "remote",
        location: "Bangkok",
        stipendMin: 10000,
        stipendMax: 15000,
        tags: ["frontend", "nextjs", "tailwind"],
        openings: 1,
        status: "open",
        publishedAt: threeDaysAgo,
      },
      {
        companyId: companyIds.northstar,
        title: "Data Analyst Intern",
        description: "Analyze internship funnel and build dashboards.",
        requirements: "SQL, Excel, curiosity.",
        jobType: "intern",
        workMode: "onsite",
        location: "Khon Kaen",
        stipendMin: 9000,
        stipendMax: 13000,
        tags: ["data", "analytics", "sql"],
        openings: 1,
        status: "open",
        publishedAt: threeDaysAgo,
      },
    ],
  });

  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return jobs;
}

async function seedPortfolios() {
  const studentUsers = seedUsers.slice(0, 4);

  const portfolios = await Promise.all(
    studentUsers.map((user, index) =>
      prisma.portfolio.create({
        data: {
          userId: user.userId,
          slug: `portfolio-${index + 1}`,
          headline: "Product builder and lifelong learner.",
          summary: "Selected projects in web apps, research, and data.",
          theme: "default",
          isPublic: true,
          viewsCount: 10 + index * 5,
        },
      })
    )
  );

  return portfolios;
}

async function seedApplications(jobs: { id: string }[], portfolios: { id: string }[]) {
  const studentUsers = seedUsers.slice(0, 4);

  await prisma.application.createMany({
    data: [
      {
        jobId: jobs[0].id,
        studentUserId: studentUsers[0].userId,
        portfolioId: portfolios[0].id,
        resumeUrl: "https://files.internhub.test/resume-maya.pdf",
        coverLetter: "Excited to contribute to Brightpath design team.",
        status: "reviewing",
      },
      {
        jobId: jobs[1].id,
        studentUserId: studentUsers[1].userId,
        portfolioId: portfolios[1].id,
        resumeUrl: "https://files.internhub.test/resume-phet.pdf",
        coverLetter: "Focused on building fast and clean UIs.",
        status: "submitted",
      },
      {
        jobId: jobs[2].id,
        studentUserId: studentUsers[2].userId,
        portfolioId: portfolios[2].id,
        resumeUrl: "https://files.internhub.test/resume-jamie.pdf",
        coverLetter: "Interested in analytics and insight delivery.",
        status: "interview",
      },
    ],
  });
}

async function main() {
  await prisma.application.deleteMany();
  await prisma.portfolio.deleteMany();
  await prisma.job.deleteMany();
  await prisma.companyMember.deleteMany();
  await prisma.company.deleteMany();
  await prisma.userCredential.deleteMany();
  await prisma.profile.deleteMany();

  await seedProfiles();
  const companies = await seedCompanies();
  const jobs = await seedJobs({
    brightpath: companies.brightpath.id,
    northstar: companies.northstar.id,
  });
  const portfolios = await seedPortfolios();
  await seedApplications(jobs, portfolios);

  console.log("Database seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
