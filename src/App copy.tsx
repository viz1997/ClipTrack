import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Clipboard, Clock, Search } from 'lucide-react';
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { LoginDialog } from "@/components/auth/login-dialog";
import { SignupDialog } from "@/components/auth/signup-dialog";
import { PricingCard } from "@/components/pricing-card";
import PrivacyPolicy from './privacy-policy';
import TermsOfService from './terms-of-service';
import { KodepayIntegration } from "./KodepayIntegration"

function Home() {
  const { t } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();

  const handlePlanSelect = (plan: 'free' | 'pro') => {
    console.log(`Selected plan: ${plan}`);
    const kodepayIntegration = new KodepayIntegration();
    kodepayIntegration.handlePayment();
    if (!isAuthenticated) {
      // Show signup dialog
      document.querySelector<HTMLButtonElement>('[data-signup-trigger]')?.click();
    } else if (plan === 'pro' && user?.plan === 'free') {
      // Handle upgrade to pro
      console.error('Upgrade to pro');
      const kodepayIntegration = new KodepayIntegration();
      kodepayIntegration.handlePayment();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center justify-center">
            <Clipboard className="h-6 w-6 mr-2" />
            <span className="font-bold">ClipTrack</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6 items-center">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              {t('nav.features')}
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              {t('nav.pricing')}
            </a>
            <ThemeToggle />
            <LanguageToggle />
            {isAuthenticated ? (
              <Button variant="ghost" onClick={logout}>
                {t('nav.logout')}
              </Button>
            ) : (
              <>
                <LoginDialog />
                <SignupDialog />
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {t('hero.title')}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={() => handlePlanSelect('free')}>
                  {t('hero.getStarted')}
                </Button>
                <Button variant="outline" asChild>
                  <a href="#features">{t('hero.learnMore')}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              {t('features.title')}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clipboard className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.smartClipboard.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.smartClipboard.description')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Search className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.search.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.search.description')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clock className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.scheduled.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.scheduled.description')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t('pricing.title')}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {t('pricing.subtitle')}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <PricingCard
                title={t('pricing.free.title')}
                price={t('pricing.free.price')}
                period={t('pricing.free.period')}
                description={t('pricing.free.description')}
                features={t('pricing.free.features')}
                ctaText={t('pricing.free.cta')}
                onSelect={() => handlePlanSelect('free')}
              />
              <PricingCard
                title={t('pricing.pro.title')}
                price={t('pricing.pro.price')}
                period={t('pricing.pro.period')}
                description={t('pricing.pro.description')}
                features={t('pricing.pro.features')}
                ctaText={t('pricing.pro.cta')}
                isPro
                onSelect={() => handlePlanSelect('pro')}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">{t('footer.rights')}</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="text-xs hover:underline underline-offset-4">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms-of-service" className="text-xs hover:underline underline-offset-4">
              {t('footer.terms')}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center justify-center">
            <Clipboard className="h-6 w-6 mr-2" />
            <span className="font-bold">ClipTrack</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 ClipTrack. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
      </Routes>
    </Router>
  );
}
