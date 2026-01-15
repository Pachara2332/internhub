import type { Metadata } from "next";
import { Noto_Sans_Thai, Poppins } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['thai', 'latin'],
  variable: '--font-noto-sans-thai',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "InternHub",
  description: "แพลตฟอร์มหาฝึกงานสำหรับนักศึกษา | Internship platform for students",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  const fontClass = locale === 'th' ? notoSansThai.className : poppins.className;

  return (
    <html lang={locale}>
      <body className={`${notoSansThai.variable} ${poppins.variable} ${fontClass} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
