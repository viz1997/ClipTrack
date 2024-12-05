import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p>By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Use of Services</h2>
        <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:</p>
        <ul className="list-disc pl-6">
          <li>Violating any applicable laws or regulations</li>
          <li>Infringing on the rights of others</li>
          <li>Interfering with or disrupting our services</li>
          <li>Attempting to gain unauthorized access to our systems or user accounts</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
        <p>To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Intellectual Property</h2>
        <p>Our services and their contents are protected by copyright, trademark, and other laws. You may not use our trademarks or other brand elements without our prior written permission.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
        <p>Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. We will notify users of any significant changes. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">8. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
      </section>

      <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

