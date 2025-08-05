export default function SupportPage() {
  return (
    <div className="font-sans leading-relaxed p-8 max-w-4xl mx-auto text-gray-800 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Qu'est ce que Ligain ?</h1>
      
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Ligain est une plateforme pour parier sur les matches de football entre amis.
        </p>
        
        <p className="text-lg leading-relaxed">
          C'est pour le moment uniquement disponible pour les matchs de Ligue 1.
        </p>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p className="text-lg leading-relaxed">
            Si tu as des commentaires, des demandes ou des suggestions, contacte-moi via l'email suivant :{' '}
            <strong>contact@ligain.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
} 