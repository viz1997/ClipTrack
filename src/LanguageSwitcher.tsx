"use client"

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client';
import { Button } from "@/components/ui/button"

const LanguageSwitcher: React.FC = () => {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div className="flex space-x-2">
      <Button
        variant={locale === 'zh' ? 'default' : 'outline'}
        onClick={() => switchLanguage('zh')}
      >
        中文
      </Button>
      <Button
        variant={locale === 'en' ? 'default' : 'outline'}
        onClick={() => switchLanguage('en')}
      >
        English
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

