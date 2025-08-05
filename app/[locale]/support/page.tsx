import { translations, Locale } from "@/lib/translations";

export default function SupportPage({ params }: { params: { locale: Locale } }) {
  const t = translations[params.locale];

  return (
    <div className="font-sans leading-relaxed p-8 max-w-4xl mx-auto text-gray-800 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.supportTitle}</h1>
      
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          {t.supportDescription}
        </p>
        
        <p className="text-lg leading-relaxed">
          {t.supportAvailability}
        </p>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.contact}</h2>
          <p className="text-lg leading-relaxed">
            {t.contactDescription}{' '}
            <strong>contact@ligain.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
} 