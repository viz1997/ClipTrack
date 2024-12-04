import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  isPro?: boolean;
  onSelect: () => void;
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  isPro,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        isPro && 'border-primary shadow-lg'
      )}
    >
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-1 text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 space-y-4">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className="w-full"
          variant={isPro ? 'default' : 'outline'}
          onClick={onSelect}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}