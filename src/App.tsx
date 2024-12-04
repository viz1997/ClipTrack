import { Button } from "@/components/ui/button"
import { ArrowRight, Clipboard, Clock, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Clipboard className="h-6 w-6 mr-2" />
          <span className="font-bold">ClipTrack</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#download">
            Download
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Manage Your Clipboard Like a Pro
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  ClipTrack is the intelligent clipboard manager that helps you boost your productivity and organize your digital life.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clipboard className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Smart Clipboard History</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Access your entire clipboard history with ease and never lose important information again.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Search className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Powerful Search</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Find any copied item instantly with our advanced search functionality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clock className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Scheduled Clips</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Schedule your clips to be available at the right time, enhancing your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</div>
                <h3 className="text-xl font-bold">Install ClipTrack</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Download and install ClipTrack on your device.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</div>
                <h3 className="text-xl font-bold">Copy as Usual</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Use your device normally. ClipTrack works silently in the background.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</div>
                <h3 className="text-xl font-bold">Access Your Clips</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Open ClipTrack anytime to view, search, and manage your clipboard history.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Productivity?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Download ClipTrack now and start managing your clipboard like a pro.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">
                  Download Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Available for Windows, macOS, and Linux
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ClipTrack. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

