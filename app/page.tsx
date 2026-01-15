'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Building2,
  Clock,
  Users,
  Briefcase,
  TrendingUp,
  Target,
  Folder,
  Bell,
  Globe,
  ArrowRight,
  Rocket,
  HardHat,
  Megaphone,
  Factory,
  GraduationCap,
  Truck,
  CheckCircle
} from 'lucide-react';

type Locale = 'th' | 'en';

const featuredInternships = [
  {
    id: 1,
    company: 'Google Thailand',
    logo: '🔷',
    position: 'Software Engineer Intern',
    positionTh: 'นักศึกษาฝึกงาน Software Engineer',
    location: 'Bangkok',
    locationTh: 'กรุงเทพฯ',
    salary: '25,000',
    type: 'Full-time',
    typeTh: 'เต็มเวลา',
    tags: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    company: 'SCB',
    logo: '💜',
    position: 'Data Analyst Intern',
    positionTh: 'นักศึกษาฝึกงาน Data Analyst',
    location: 'Bangkok',
    locationTh: 'กรุงเทพฯ',
    salary: '20,000',
    type: 'Full-time',
    typeTh: 'เต็มเวลา',
    tags: ['Python', 'SQL', 'Power BI']
  },
  {
    id: 3,
    company: 'LINE Thailand',
    logo: '💚',
    position: 'UX/UI Designer Intern',
    positionTh: 'นักศึกษาฝึกงาน UX/UI Designer',
    location: 'Bangkok',
    locationTh: 'กรุงเทพฯ',
    salary: '22,000',
    type: 'Full-time',
    typeTh: 'เต็มเวลา',
    tags: ['Figma', 'Adobe XD', 'UI Design']
  }
];

const hotCareers = [
  { icon: HardHat, name: 'ก่อสร้าง', nameEn: 'Construction', count: 12415, color: 'bg-orange-500' },
  { icon: Megaphone, name: 'การตลาด/PR', nameEn: 'Marketing/PR', count: 55449, color: 'bg-red-500' },
  { icon: Factory, name: 'การผลิต/QA-QC', nameEn: 'Production/QA-QC', count: 24439, color: 'bg-yellow-500' },
  { icon: GraduationCap, name: 'การศึกษา/วิชาการ', nameEn: 'Education', count: 5360, color: 'bg-pink-500' },
  { icon: Truck, name: 'ขนส่ง/คลังสินค้า', nameEn: 'Logistics', count: 33930, color: 'bg-amber-500' }
];

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');

  const [currentLocale, setCurrentLocale] = useState<Locale>('th');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const match = document.cookie.match(/locale=([^;]+)/);
    if (match) {
      setCurrentLocale(match[1] as Locale);
    }
  }, []);

  const switchLanguage = () => {
    const newLocale: Locale = currentLocale === 'th' ? 'en' : 'th';
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    setCurrentLocale(newLocale);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
            <Briefcase size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">{tCommon('appName')}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-red-500 font-medium">{tNav('home')}</Link>
          <Link href="/internships" className="text-gray-600 hover:text-red-500 transition-colors font-medium">{tNav('internships')}</Link>
          <Link href="/about" className="text-gray-600 hover:text-red-500 transition-colors font-medium">{tNav('about')}</Link>
          <Link href="/contact" className="text-gray-600 hover:text-red-500 transition-colors font-medium">{tNav('contact')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={switchLanguage} className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all">
            <Globe size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{currentLocale === 'th' ? 'TH' : 'EN'}</span>
          </button>
          <Link href="/login" className="text-gray-600 hover:text-red-500 font-medium transition-colors">{tNav('signIn')}</Link>
          <Link href="/register">
            <button className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-200">
              {tNav('register')}
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t('heroTitle')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {t('heroTitleHighlight')}
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">{t('heroSubtitle')}</p>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex items-center bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-2">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-200">
                {t('searchButton')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users size={24} className="text-red-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">10K+</p>
              <p className="text-gray-500 text-sm">{t('statsStudents')}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building2 size={24} className="text-orange-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-gray-500 text-sm">{t('statsCompanies')}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Briefcase size={24} className="text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">2K+</p>
              <p className="text-gray-500 text-sm">{t('statsPositions')}</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp size={24} className="text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">85%</p>
              <p className="text-gray-500 text-sm">{t('statsSuccess')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Careers */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('hotCareersTitle')}</h2>
            <Link href="/careers" className="flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition-colors">
              {t('viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hotCareers.map((career, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className={`${career.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {currentLocale === 'th' ? career.name : career.nameEn}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                  {currentLocale === 'th' ? career.name : career.nameEn}
                </h3>
                <p className="text-sm text-gray-500">{career.count.toLocaleString()} {t('hotCareersPositions')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('featuredTitle')}</h2>
            <Link href="/internships" className="flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition-colors">
              {t('viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInternships.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">{job.logo}</div>
                  <div>
                    <p className="font-bold text-gray-900">{job.company}</p>
                    <p className="text-sm text-gray-500">{currentLocale === 'th' ? job.typeTh : job.type}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{currentLocale === 'th' ? job.positionTh : job.position}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={14} />{currentLocale === 'th' ? job.locationTh : job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} />฿{job.salary}{t('perMonth')}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full">{tag}</span>
                  ))}
                </div>
                <button className="w-full py-3 border-2 border-red-500 text-red-500 font-semibold rounded-xl hover:bg-red-500 hover:text-white transition-all">
                  {t('apply')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why InternHub */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">{t('whyTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-200">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('whyReason1Title')}</h3>
              <p className="text-gray-500">{t('whyReason1Desc')}</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                <Folder size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('whyReason2Title')}</h3>
              <p className="text-gray-500">{t('whyReason2Desc')}</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                <Bell size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('whyReason3Title')}</h3>
              <p className="text-gray-500">{t('whyReason3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('aboutTitle')}</h2>
              <h3 className="text-3xl font-bold text-red-500 mb-6">{tCommon('appName')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('aboutDesc')}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentLocale === 'th' ? 'หาฝึกงานทุกสาขาอาชีพ ทุกรูปแบบ ที่ InternHub' : 'Find Internships in All Fields at InternHub'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {currentLocale === 'th'
                  ? 'เราคือผู้ให้บริการแพลตฟอร์มหาฝึกงานอันดับต้นในประเทศไทย พร้อมมอบโอกาสให้กับนักศึกษาที่ต้องการหาประสบการณ์ทำงานจริง'
                  : 'We are a leading internship platform in Thailand, providing opportunities for students seeking real work experience.'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('aboutFeature1Title')}</h4>
                <p className="text-sm text-gray-500">{t('aboutFeature1Desc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('aboutFeature2Title')}</h4>
                <p className="text-sm text-gray-500">{t('aboutFeature2Desc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('aboutFeature3Title')}</h4>
                <p className="text-sm text-gray-500">{t('aboutFeature3Desc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('aboutFeature4Title')}</h4>
                <p className="text-sm text-gray-500">{t('aboutFeature4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <Rocket size={48} className="text-white mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t('ctaTitle')}</h2>
              <Link href="/register">
                <button className="px-10 py-4 bg-white text-red-500 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:scale-105">
                  {t('ctaButton')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100">
        {tCommon('footer')}
      </footer>
    </div>
  );
}
