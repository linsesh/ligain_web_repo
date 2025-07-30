export default function PrivacyPolicy() {
  return (
    <div className="font-sans leading-relaxed p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de confidentialité</h1>
      <p className="mb-4"><strong>Dernière mise à jour : 20 juillet 2025</strong></p>

      <p className="mb-4">Nous accordons une grande importance à la confidentialité de vos données. Cette politique explique quelles informations nous collectons, pourquoi, et comment elles sont utilisées.</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">1. Données collectées</h2>
      <p className="mb-4">Nous collectons les données suivantes lors de l'utilisation de l'application :</p>
      <ul className="mb-4 pl-6 list-disc">
        <li>Votre adresse email (via Google ou Apple)</li>
        <li>Un pseudonyme</li>
        <li>Vos pronostics</li>
        <li>Des informations techniques de connexion (ex : date et heure de dernière connexion)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">2. Finalité de la collecte</h2>
      <p className="mb-4">Ces données sont utilisées pour :</p>
      <ul className="mb-4 pl-6 list-disc">
        <li>Vous identifier et vous permettre d'accéder à l'application</li>
        <li>Afficher vos pronostics à vos amis dans le cadre des ligues</li>
        <li>Améliorer la stabilité et la sécurité de l'application</li>
      </ul>
      <p className="mb-4">Aucune donnée n'est utilisée à des fins commerciales ou publicitaires.</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">3. Base légale</h2>
      <p className="mb-4">La collecte est fondée sur votre <strong>consentement</strong> (inscription via Google ou Apple), et sur notre <strong>intérêt légitime</strong> à faire fonctionner l'application.</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">4. Hébergement des données</h2>
      <p className="mb-4">Vos données sont hébergées en Europe :</p>
      <ul className="mb-4 pl-6 list-disc">
        <li>Serveurs et logs : Google Cloud Platform (Europe)</li>
        <li>Base de données : Neon, hébergée en Allemagne</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">5. Partage des données</h2>
      <p className="mb-4">Nous ne partageons aucune donnée avec des tiers, sauf obligation légale.</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">6. Durée de conservation</h2>
      <p className="mb-4">Vos données sont conservées tant que vous avez un compte actif. Si vous demandez la suppression de votre compte, toutes vos données seront supprimées sous 30 jours.</p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">7. Vos droits</h2>
      <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul className="mb-4 pl-6 list-disc">
        <li>Accès à vos données</li>
        <li>Rectification de vos données</li>
        <li>Suppression de votre compte et de vos données</li>
        <li>Limitation ou opposition au traitement</li>
      </ul>
      <p className="mb-4">Vous pouvez exercer ces droits en nous contactant à : <strong>contact@ligain.com</strong></p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-300">8. Contact</h2>
      <p className="mb-4">Pour toute question concernant la protection de vos données :</p>
      <ul className="mb-4 pl-6 list-disc">
        <li><strong>Ligain</strong></li>
        <li>Email : <strong>contact@ligain.com</strong></li>
      </ul>
    </div>
  );
} 