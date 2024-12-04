import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"
import { ArrowRight, Clipboard, Clock, Search, Moon, Sun, Globe } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-toggle"
import { PricingPlans } from "@/components/pricing-card"
import { SupportUs } from "@/components/support-us"
import { LoginForm } from "@/components/login-form"
import { RegisterForm } from "@/components/register-form"

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Clipboard className="h-6 w-6 mr-2" />
          <span className="font-bold">ClipTrack</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            {t('nav.features')}
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            {t('nav.howItWorks')}
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            {t('nav.pricing')}
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#download">
            {t('nav.download')}
          </a>
        </nav>
        <div className="flex items-center gap-4 ml-4">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {t('hero.title')}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t('hero.description')}
                </p>
              </div>
              <div className="space-x-4">
                <Button>{t('hero.getStarted')}</Button>
                <Button variant="outline">{t('hero.learnMore')}</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{t('features.title')}</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clipboard className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.smartClipboard')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.smartClipboardDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Search className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.powerfulSearch')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.powerfulSearchDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clock className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.scheduledClips')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.scheduledClipsDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Globe className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.multiLanguage')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.multiLanguageDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Moon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">{t('features.darkMode')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('features.darkModeDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{t('howItWorks.title')}</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</div>
                <h3 className="text-xl font-bold">{t('howItWorks.install')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('howItWorks.installDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</div>
                <h3 className="text-xl font-bold">{t('howItWorks.copy')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('howItWorks.copyDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</div>
                <h3 className="text-xl font-bold">{t('howItWorks.access')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {t('howItWorks.accessDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{t('pricing.title')}</h2>
            <PricingPlans />
          </div>
        </section>
        <section id="download" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('download.title')}</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t('download.description')}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">
                  {t('download.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t('download.platforms')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="auth" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{t('auth.login')}</h2>
                <LoginForm />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{t('auth.register')}</h2>
                <RegisterForm />
              </div>
            </div>
          </div>
        </section>
        <section id="support-us" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">{t('support.title')}</h2>
            <SupportUs />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">{t('footer.copyright')}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            {t('footer.terms')}
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            {t('footer.privacy')}
          </a>
        </nav>
      </footer>
    </div>
  )
}

