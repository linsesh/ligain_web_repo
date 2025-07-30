import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          Bientôt disponible
        </h1>
      </div>

      {/* Privacy Policy Link */}
      <footer className="text-center">
        <Link 
          href="/privacy" 
          className="text-sm text-gray-300 hover:text-white underline"
        >
          Politique de confidentialité
        </Link>
      </footer>
    </div>
  );
}
