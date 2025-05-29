import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translations via http
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    supportedLngs: ['en','es','fr'], // Languages you support
    fallbackLng: "fr", // Default language if browser language is not supported
    detection: {
      order: ['path', 'cookie', 'localStorage', 'htmlTag', 'subdomain'], // Order of language detection
      caches: ['cookie'], // Where to store detected language
      checkWhitelist: true, // Check if detected language is in supported languages list
      // Add these options to set default language and not change it automatically
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },
    backend: {
      loadPath: 'locales/{{lng}}/translation.json', // Path to your translation files
    },
    react: {
      useSuspense: false, // Don't use Suspense for translations loading
    },
    whitelist: ['en','fr'], // Languages you support
    nonExplicitWhitelist: true, // Accept languages like 'fr' instead of 'fr-FR'
    cleanCode: true, // Clean language codes to match whitelist
  });

export default i18n;
