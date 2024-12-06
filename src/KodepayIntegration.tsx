import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    KODEPAY_APPLICATION_ID: string
    KODEPAY_CLIENT_ID: string
    KODEPAY_ENV: string
    KodePay: {
      open_payment_page: (priceId: string, originalData: any) => void
      open_payment_choose_page: (priceId: string, currency: string) => void
      on_pay_completed: {
        addListener: (callback: (userInfo: any, status: string) => void) => void
      }
    }
  }
}

export class KodepayIntegration {
  private isKodepayLoaded: boolean = false;

  constructor() {
    this.initKodepay();
  }

  private initKodepay() {
    if (typeof window !== 'undefined') {
      window.KODEPAY_APPLICATION_ID = '176e9f1a-0698-11ee-9f89-ee976976769e';
      window.KODEPAY_CLIENT_ID = '15560ede-14b7-11ee-b656-4a11ab462b2e';
      window.KODEPAY_ENV = 'development';

      const script = document.createElement('script');
      script.src = 'https://kodepay-global.zingfront.com/resource/kodepay/2.1.4/kodepay-website.js';
      script.async = true;
      script.onload = () => {
        this.isKodepayLoaded = true;
        if (window.KodePay) {
          window.KodePay.on_pay_completed.addListener(this.paySuccessCallback);
        }
      };
      document.head.appendChild(script);
    }
  }

  public handlePayment = () => {

      const originalData = { user_id: 3242422, order_id: 123123 };
      const priceId = 'prod_a96e31a4e35046d3';
      window.KodePay.open_payment_page(priceId, originalData);

  };

  public handlePaymentChoose = () => {
    if (this.isKodepayLoaded && window.KodePay) {
      const priceId = 'prod_a96e31a4e35046d3';
      const currency = 'usd';
      window.KodePay.open_payment_choose_page(priceId, currency);
    } else {
      console.error('Kodepay is not loaded yet');
    }
  };

  private paySuccessCallback = (userInfo: any, status: string) => {
    if (status === 'succeed') {
      console.log('Payment successful', userInfo);
      // Here you should refresh the page or update the user's information
      // to ensure the payment status is reflected correctly
    } else {
      console.log('Payment failed or cancelled');
    }
  };

  render() {
    return (
      <div className="flex space-x-4">
        <Button onClick={this.handlePayment} disabled={!this.isKodepayLoaded}>
          Make Payment
        </Button>
        <Button onClick={this.handlePaymentChoose} disabled={!this.isKodepayLoaded}>
          Choose Payment Method
        </Button>
      </div>
    )
  }
}

