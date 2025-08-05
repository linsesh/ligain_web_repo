import { translations, Locale } from "@/lib/translations";

export default function PrivacyPolicy({ params }: { params: { locale: Locale } }) {
  const t = translations[params.locale];

  return (
    <div className="font-sans leading-relaxed p-8 max-w-4xl mx-auto text-gray-800 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.privacyTitle}</h1>
      <p className="mb-4"><strong>{t.lastUpdated}</strong></p>

      <p className="mb-4">{t.privacyIntro}</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.dataCollected}</h2>
      <p className="mb-4">{t.dataCollectedDesc}</p>
      <ul className="mb-4 pl-6 list-disc">
        {t.dataCollectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.purpose}</h2>
      <p className="mb-4">{t.purposeDesc}</p>
      <ul className="mb-4 pl-6 list-disc">
        {t.purposeItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mb-4">{t.purposeNote}</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.legalBasis}</h2>
      <p className="mb-4">{t.legalBasisDesc}</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.hosting}</h2>
      <p className="mb-4">{t.hostingDesc}</p>
      <ul className="mb-4 pl-6 list-disc">
        {t.hostingItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.sharing}</h2>
      <p className="mb-4">{t.sharingDesc}</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.retention}</h2>
      <p className="mb-4">{t.retentionDesc}</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.rights}</h2>
      <p className="mb-4">{t.rightsDesc}</p>
      <ul className="mb-4 pl-6 list-disc">
        {t.rightsItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mb-4">{t.rightsContact} <strong>contact@ligain.com</strong></p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">{t.contactSection}</h2>
      <p className="mb-4">{t.contactSectionDesc}</p>
      <ul className="mb-4 pl-6 list-disc">
        {t.contactItems.map((item, index) => (
          <li key={index}><strong>{item}</strong></li>
        ))}
      </ul>
    </div>
  );
} 