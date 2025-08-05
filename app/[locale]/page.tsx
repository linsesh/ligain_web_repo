import Image from "next/image";
import Link from "next/link";
import { translations, Locale } from "@/lib/translations";

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = translations[params.locale];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white">
      {/* Logo */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/icon.png"
          alt="Ligain Logo"
          width={120}
          height={120}
          priority
          className="mb-8"
        />
      </div>

      {/* Coming Soon Text */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-white">
          {t.comingSoon}
        </h1>
      </div>

      {/* Footer Links */}
      <footer className="text-center">
        <div className="flex flex-col space-y-2">
          <Link 
            href={`/${params.locale}/support`}
            className="text-sm text-gray-300 hover:text-white underline"
          >
            {t.whatIsLigain}
          </Link>
          <Link 
            href={`/${params.locale}/privacy`}
            className="text-sm text-gray-300 hover:text-white underline"
          >
            {t.privacyPolicy}
          </Link>
        </div>
      </footer>
    </div>
  );
} 