'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  // Remove the current locale from the pathname
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, '') || '/';
  
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex space-x-2">
        <Link
          href={`/fr${pathWithoutLocale}`}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === 'fr'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          FR
        </Link>
        <Link
          href={`/en${pathWithoutLocale}`}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          EN
        </Link>
      </div>
    </div>
  );
} 