import type { Metadata } from 'next';
import Link from 'next/link';
// import { blogService } from '@/services/blog.service';
// import { settingsService } from '@/services/settings.service';
import { AppSettings } from '@/seed';
import {  ArrowRight, Ban, Bed, Bell, Brain, ChartLine, CheckCircle, ChevronDown, Clock, Download, Eye, Heart, Lock, MessageCircle, PlayCircle, Quote, Rocket, Shield, ShieldUser, Star, StarIcon, Timer, TriangleAlert, User } from "lucide-react";


/**
 * Homepage
 * SEO-optimized landing page with latest blogs
 */

export async function generateMetadata(): Promise<Metadata> {
  //   const settings = await settingsService.getSettings();
  const settings = AppSettings;

  return {
    title: settings.defaultSeoTitle,
    description: settings.defaultSeoDescription,
    openGraph: {
      title: settings.defaultSeoTitle,
      description: settings.defaultSeoDescription,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: settings.defaultSeoTitle,
      description: settings.defaultSeoDescription,
    },
  };
}

export default async function HomePage() {
  const settings = AppSettings;
  //const blogs = await blogService.getPublishedBlogs();
  //const latestBlogs = blogs.slice(0, 6);

  return (
    <section className='gradient-bg'>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
                <StarIcon className="mr-2 inline-block" /> <span>Trusted by 50,000+ moms worldwide</span>

              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--dark-color)' }}>
                Smart Parental Control App to Protect Your Child Online
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                FBI Mom empowers moms to monitor screen time, block harmful content, and guide children safely through the digital world — all in one simple app.
              </p>

              <div className="mb-10">
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-500 mr-3 text-xl" />
                  <span className="text-lg">Monitor your child's phone activity</span>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-500 mr-3 text-xl" />
                  <span className="text-lg">Block unsafe apps & websites</span>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-500 mr-3 text-xl" />
                  <span className="text-lg">Control screen time effortlessly</span>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-500 mr-3 text-xl" />
                  <span className="text-lg">Get real-time safety alerts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 text-xl" />
                  <span className="text-lg">Designed for moms, not tech experts</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="#cta" className="btn-primary text-white font-bold py-4 px-8 rounded-full text-center text-lg shadow-xl">
                  <ShieldUser className="mr-2 inline-block" /> Start Protecting My Child Now
                </Link>
                <Link href="#how-it-works" className="bg-white text-purple-700 font-bold py-4 px-8 rounded-full text-center text-lg border-2 border-purple-200 hover:border-purple-400 transition">
                  <PlayCircle className="mr-2 inline-block" /> See How It Works
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full primary-gradient flex items-center justify-center floating">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4">👩‍👦</div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>FBI Mom</h3>
                      <p className="text-gray-600">Parental Control App</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 left-0 bg-white p-4 rounded-2xl shadow-xl" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Clock className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-bold">Screen Time</p>
                      <p className="text-sm text-gray-500">Managed</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-0 bg-white p-4 rounded-2xl shadow-xl" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <Ban className="text-red-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-bold">Harmful Content</p>
                      <p className="text-sm text-gray-500">Blocked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Trusted by Parents */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Parents Who Care About Digital Safety</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
              </div>
              <p className="text-lg italic mb-6">"Finally an app made for moms, not engineers. I can actually understand how to use it and it gives me peace of mind."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                  <User className="text-purple-600" />
                </div>
                <div>
                  <p className="font-bold">Sarah J.</p>
                  <p className="text-sm text-gray-500">Mom of 2</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
              </div>
              <p className="text-lg italic mb-6">"I feel confident letting my child use a phone again. FBI Mom helps me set healthy boundaries without constant arguments."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                  <User className="text-pink-600" />
                </div>
                <div>
                  <p className="font-bold">Maria L.</p>
                  <p className="text-sm text-gray-500">Mom of 3</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
              </div>
              <p className="text-lg italic mb-6">"Simple, powerful, and actually works. The real-time alerts have helped me catch potential issues before they became problems."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <User className="text-blue-600" />
                </div>
                <div>
                  <p className="font-bold">Jessica T.</p>
                  <p className="text-sm text-gray-500">Mom of 1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">

            <div className="trust-badge p-4 rounded-xl shadow-md flex items-center">
              <Lock className='text-3xl mr-3 text-blue-600' />
              <div>
                <p className="font-bold">Privacy-first</p>
                <p className="text-sm text-gray-600">GDPR-ready</p>
              </div>
            </div>

            <div className="trust-badge p-4 rounded-xl shadow-md flex items-center">
              <Shield className='text-3xl mr-3 text-purple-600' />
              <div>
                <p className="font-bold">Secure Encryption</p>
                <p className="text-sm text-gray-600">Bank-level security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Children Are at Risk Online Today</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <TriangleAlert className="text-red-600 text-2xl ml-1" />
                </div>
                <h3 className="text-xl font-bold">Inappropriate Content</h3>
              </div>
              <p className="text-gray-600">Children can accidentally access inappropriate content while browsing or watching videos, exposing them to material they're not emotionally ready for.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <User className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold">Stranger Danger</h3>
              </div>
              <p className="text-gray-600">Social media exposes kids to strangers who may have harmful intentions, with predators often pretending to be other children or friendly adults.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Bed className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold">Sleep & Learning Impact</h3>
              </div>
              <p className="text-gray-600">Excessive screen time affects sleep patterns, concentration, and learning abilities, with blue light disrupting natural sleep cycles.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Timer className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold">Parental Control Gap</h3>
              </div>
              <p className="text-gray-600">Parents often feel outdated and out of control when it comes to their children's online activities, creating anxiety and communication gaps.</p>
            </div>
          </div>

          <div className="bg-linear-to-r from-purple-100 to-pink-100 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">FBI Mom was built to solve these problems — without invading your child's trust.</h3>
            <p className="text-gray-700">We believe in protection through guidance, not punishment. Our app promotes open conversations about online safety.</p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How FBI Mom Protects Your Child</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <ChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Screen Time Monitoring</h3>
              <p className="text-gray-600 mb-6">Track how much time your child spends on apps and devices. Set daily limits and get detailed reports on their digital habits.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <Ban className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">App & Website Blocking</h3>
              <p className="text-gray-600 mb-6">Block unsafe apps and inappropriate websites instantly. Create custom blocklists or use our pre-configured safety categories.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <Bell className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Alerts</h3>
              <p className="text-gray-600 mb-6">Get notified when risky behavior is detected. Receive alerts for inappropriate content, excessive usage, or attempted blocked site access.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kid-Friendly Boundaries</h3>
              <p className="text-gray-600 mb-6">Set rules without spying or creating conflict. Our approach encourages responsibility and healthy digital habits.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <Rocket className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Simple Setup in Minutes</h3>
              <p className="text-gray-600 mb-6">No technical skills needed — made for busy moms. Get up and running in less than 5 minutes with our step-by-step guide.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div>
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Family Communication Tools</h3>
              <p className="text-gray-600 mb-6">Promote open dialogue with built-in conversation starters about online safety and responsible digital citizenship.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How FBI Mom Works in 3 Simple Steps</h2>

          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="step-container md:w-1/3 p-8 text-center">
              <div className="w-24 h-24 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Install FBI Mom</h3>
              <p className="text-gray-600">Download FBI Mom on your phone from the App Store or Google Play. The app is free to install with a 14-day trial.</p>
            </div>

            <div className="step-container md:w-1/3 p-8 text-center">
              <div className="w-24 h-24 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect Devices</h3>
              <p className="text-gray-600">Securely connect your child's device using our simple pairing process. No complex settings or technical knowledge required.</p>
            </div>

            <div className="step-container md:w-1/3 p-8 text-center">
              <div className="w-24 h-24 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Monitor & Guide</h3>
              <p className="text-gray-600">Monitor, guide, and protect — in real time. Set boundaries, review activity, and receive alerts all from your dashboard.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="#cta" className="btn-primary text-white font-bold py-4 px-12 rounded-full text-lg inline-block shadow-xl">
              <PlayCircle className="mr-2 inline-block" />Try FBI Mom Today
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Who Is FBImom For?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="text-5xl mb-6">👩‍👧</div>
              <h3 className="text-xl font-bold mb-4">Moms with kids aged 6–16</h3>
              <p className="text-gray-600">Perfect for children starting to explore the digital world up to teenagers needing responsible boundaries.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-xl font-bold mb-4">First smartphone families</h3>
              <p className="text-gray-600">Essential for families giving kids their first smartphone, establishing healthy habits from day one.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-6">🏫</div>
              <h3 className="text-xl font-bold mb-4">Worried parents</h3>
              <p className="text-gray-600">For parents concerned about online dangers but unsure how to protect their children effectively.</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-6">❤️</div>
              <h3 className="text-xl font-bold mb-4">Trust-building moms</h3>
              <p className="text-gray-600">For moms who want safety without control battles, fostering trust and open communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Ethics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Privacy-First & Child-Respecting Monitoring</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start mb-8">
                <Lock className="text-3xl text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">No selling child data</h3>
                  <p className="text-gray-600">We never sell or share your child's data with third parties. Your family's privacy is our top priority.</p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Shield className="text-3xl text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Encrypted communication</h3>
                  <p className="text-gray-600">All data is encrypted with bank-level security, ensuring that your family's information stays private.</p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Eye className="text-3xl text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent permissions</h3>
                  <p className="text-gray-600">We explain exactly what data we collect and why, with clear options for parents to control privacy settings.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Brain className="text-3xl text-pink-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Child psychology in mind</h3>
                  <p className="text-gray-600">Designed with child development experts to promote healthy digital habits, not fear-based monitoring.</p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-50 to-purple-50 p-10 rounded-3xl text-center">
              <div className="text-7xl mb-6">🛡️</div>
              <h3 className="text-2xl font-bold mb-6">"Protection without punishment."</h3>
              <p className="text-gray-700 text-lg mb-8">Our philosophy centers on guiding children to make smart choices online, rather than punishing them for mistakes. We believe in teaching digital responsibility.</p>
              <div className="inline-block px-6 py-3 bg-white rounded-full font-bold text-purple-700 shadow-md">
                <Quote className="inline-block text-purple-600 mr-2" /> Ethical Monitoring
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 primary-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Your Child's Safety Can't Wait</h2>
          <p className="text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto">Join thousands of moms protecting their children online today. Start with a free 14-day trial, no credit card required.</p>

          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
            <Link href="#" className="bg-white text-purple-700 font-bold py-5 px-10 rounded-full text-lg shadow-2xl hover:bg-gray-100 transition">
              <Download className="inline-block mr-2" /> Download FBI Mom
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center">
              <CheckCircle className="text-2xl mr-3" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-2xl mr-3" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-2xl mr-3" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <div className="faq-item border border-gray-200">
              <div className="faq-question p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Is FBI Mom safe to use?</h3>
                <ChevronDown className="text-purple-600" />
              </div>
              <div className="faq-answer p-6 pt-0 bg-gray-50">
                <p className="text-gray-600">Yes, FBI Mom uses bank-level encryption and privacy-first design. We're compliant with GDPR, COPPA, and other privacy regulations to ensure your child's data is protected with the highest security standards.</p>
              </div>
            </div>

            <div className="faq-item border border-gray-200">
              <div className="faq-question p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Can my child know about the monitoring?</h3>
                <ChevronDown className="text-purple-600" />
              </div>
              <div className="faq-answer p-6 pt-0 bg-gray-50">
                <p className="text-gray-600">Absolutely. FBI Mom promotes open communication and trust. We provide conversation guides to help parents explain why online safety matters. Many parents find that being transparent about monitoring actually strengthens their relationship with their child.</p>
              </div>
            </div>

            <div className="faq-item border border-gray-200">
              <div className="faq-question p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Does it work on Android & iOS?</h3>
                <ChevronDown className="text-purple-600" />
              </div>
              <div className="faq-answer p-6 pt-0 bg-gray-50">
                <p className="text-gray-600">Yes, FBI Mom supports both Android and iOS platforms. The parent app works on both platforms, and you can monitor children's devices regardless of the operating system they use.</p>
              </div>
            </div>

            <div className="faq-item border border-gray-200">
              <div className="faq-question p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Is this better than other parental control apps?</h3>
                <ChevronDown className="text-purple-600" />
              </div>
              <div className="faq-answer p-6 pt-0 bg-gray-50">
                <p className="text-gray-600">FBI Mom is designed specifically for moms — simpler, clearer, and more ethical than many technical solutions. We focus on the parent-child relationship rather than just surveillance, with tools designed to foster trust and teach responsible digital citizenship.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Have more questions? We're here to help.</p>
            <Link href="/contact" className="inline-block border-2 border-purple-600 text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-600 hover:text-white transition">
              <i className="fas fa-question-circle mr-2"></i> Contact Support
            </Link>
          </div>
        </div>
      </section>

    </section>
  );
}