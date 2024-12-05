import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="mb-2">We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Payment information</li>
          <li>Usage data and preferences</li>
        </ul>
        <p>We also automatically collect certain information when you use our services, including:</p>
        <ul className="list-disc pl-6">
          <li>Device information</li>
          <li>Log data</li>
          <li>Location information</li>
          <li>Cookies and similar technologies</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Personalize and improve your experience</li>
          <li>Monitor and analyze trends, usage, and activities</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Sharing of Information</h2>
        <p>We may share your information as follows:</p>
        <ul className="list-disc pl-6">
          <li>With vendors, consultants, and other service providers</li>
          <li>In response to legal requests or to comply with applicable laws</li>
          <li>To protect the rights and safety of our users and third parties</li>
          <li>In connection with a business transfer or transaction</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Your Choices</h2>
        <p>You can access, update, or delete your account information at any time by logging into your account settings. You may also contact us to request access to, correction of, or deletion of any personal information that you have provided to us.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Changes to this Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.</p>
      </section>

      <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

