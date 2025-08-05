export const translations = {
  fr: {
    // Main page
    comingSoon: "Bientôt disponible",
    whatIsLigain: "Qu'est ce que Ligain ?",
    privacyPolicy: "Politique de confidentialité",
    
    // Support page
    supportTitle: "Qu'est ce que Ligain ?",
    supportDescription: "Ligain est une plateforme pour parier sur les matches de football entre amis.",
    supportAvailability: "C'est pour le moment uniquement disponible pour les matchs de Ligue 1.",
    contact: "Contact",
    contactDescription: "Si tu as des commentaires, des demandes ou des suggestions, contacte-moi via l'email suivant :",
    
    // Privacy page
    privacyTitle: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 20 juillet 2025",
    privacyIntro: "Nous accordons une grande importance à la confidentialité de vos données. Cette politique explique quelles informations nous collectons, pourquoi, et comment elles sont utilisées.",
    
    // Privacy sections
    dataCollected: "1. Données collectées",
    dataCollectedDesc: "Nous collectons les données suivantes lors de l'utilisation de l'application :",
    dataCollectedItems: [
      "Votre adresse email (via Google ou Apple)",
      "Un pseudonyme",
      "Vos pronostics",
      "Des informations techniques de connexion (ex : date et heure de dernière connexion)"
    ],
    
    purpose: "2. Finalité de la collecte",
    purposeDesc: "Ces données sont utilisées pour :",
    purposeItems: [
      "Vous identifier et vous permettre d'accéder à l'application",
      "Afficher vos pronostics à vos amis dans le cadre des ligues",
      "Améliorer la stabilité et la sécurité de l'application"
    ],
    purposeNote: "Aucune donnée n'est utilisée à des fins commerciales ou publicitaires.",
    
    legalBasis: "3. Base légale",
    legalBasisDesc: "La collecte est fondée sur votre consentement (inscription via Google ou Apple), et sur notre intérêt légitime à faire fonctionner l'application.",
    
    hosting: "4. Hébergement des données",
    hostingDesc: "Vos données sont hébergées en Europe :",
    hostingItems: [
      "Serveurs et logs : Google Cloud Platform (Europe)",
      "Base de données : Neon, hébergée en Allemagne"
    ],
    
    sharing: "5. Partage des données",
    sharingDesc: "Nous ne partageons aucune donnée avec des tiers, sauf obligation légale.",
    
    retention: "6. Durée de conservation",
    retentionDesc: "Vos données sont conservées tant que vous avez un compte actif. Si vous demandez la suppression de votre compte, toutes vos données seront supprimées sous 30 jours.",
    
    rights: "7. Vos droits",
    rightsDesc: "Conformément au RGPD, vous disposez des droits suivants :",
    rightsItems: [
      "Accès à vos données",
      "Rectification de vos données",
      "Suppression de votre compte et de vos données",
      "Limitation ou opposition au traitement"
    ],
    rightsContact: "Vous pouvez exercer ces droits en nous contactant à :",
    
    contactSection: "8. Contact",
    contactSectionDesc: "Pour toute question concernant la protection de vos données :",
    contactItems: [
      "Ligain",
      "Email : contact@ligain.com"
    ]
  },
  
  en: {
    // Main page
    comingSoon: "Coming Soon",
    whatIsLigain: "What is Ligain?",
    privacyPolicy: "Privacy Policy",
    
    // Support page
    supportTitle: "What is Ligain?",
    supportDescription: "Ligain is a platform for betting on football matches between friends.",
    supportAvailability: "It is currently only available for Ligue 1 matches.",
    contact: "Contact",
    contactDescription: "If you have comments, requests or suggestions, contact me via the following email:",
    
    // Privacy page
    privacyTitle: "Privacy Policy",
    lastUpdated: "Last updated: July 20, 2025",
    privacyIntro: "We place great importance on the confidentiality of your data. This policy explains what information we collect, why, and how it is used.",
    
    // Privacy sections
    dataCollected: "1. Data Collected",
    dataCollectedDesc: "We collect the following data when using the application:",
    dataCollectedItems: [
      "Your email address (via Google or Apple)",
      "A nickname",
      "Your predictions",
      "Technical connection information (e.g., date and time of last connection)"
    ],
    
    purpose: "2. Purpose of Collection",
    purposeDesc: "This data is used for:",
    purposeItems: [
      "Identifying you and allowing you to access the application",
      "Displaying your predictions to your friends within leagues",
      "Improving the stability and security of the application"
    ],
    purposeNote: "No data is used for commercial or advertising purposes.",
    
    legalBasis: "3. Legal Basis",
    legalBasisDesc: "The collection is based on your consent (registration via Google or Apple), and on our legitimate interest in making the application work.",
    
    hosting: "4. Data Hosting",
    hostingDesc: "Your data is hosted in Europe:",
    hostingItems: [
      "Servers and logs: Google Cloud Platform (Europe)",
      "Database: Neon, hosted in Germany"
    ],
    
    sharing: "5. Data Sharing",
    sharingDesc: "We do not share any data with third parties, except for legal obligations.",
    
    retention: "6. Data Retention",
    retentionDesc: "Your data is retained as long as you have an active account. If you request deletion of your account, all your data will be deleted within 30 days.",
    
    rights: "7. Your Rights",
    rightsDesc: "In accordance with GDPR, you have the following rights:",
    rightsItems: [
      "Access to your data",
      "Rectification of your data",
      "Deletion of your account and data",
      "Limitation or opposition to processing"
    ],
    rightsContact: "You can exercise these rights by contacting us at:",
    
    contactSection: "8. Contact",
    contactSectionDesc: "For any questions regarding the protection of your data:",
    contactItems: [
      "Ligain",
      "Email: contact@ligain.com"
    ]
  }
};

export type Locale = keyof typeof translations; 