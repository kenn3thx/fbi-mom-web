import type { Metadata } from 'next';
import Link from 'next/link';
// import { blogService } from '@/services/blog.service';
// import { settingsService } from '@/services/settings.service';
import { AppSettings } from '@/seed';
import { ArrowRight, Ban, Bed, Bell, Brain, ChartLine, CheckCircle, ChevronDown, Clock, Download, Eye, Heart, Lock, MessageCircle, PlayCircle, Quote, Rocket, Shield, ShieldUser, Star, StarIcon, Timer, TriangleAlert, User } from "lucide-react";
import { VideoDemoSection } from '@/components/public/home/VideoDemoSection';
import HeroSection from '@/components/public/home/HeroSection';
import Image from 'next/image';
import FAQSection from '@/components/public/home/FAQSection';


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


  const audiences = [
    {
      title: "Moms with kids aged 6–16",
      description:
        "Perfect for children starting to explore the digital world up to teenagers needing responsible boundaries.",
      image: "/uploads/images/b3d3f889-ae00-4683-ab9b-da23d31836b0.jpeg",
    },
    {
      title: "First smartphone families",
      description:
        "Essential for families giving kids their first smartphone, establishing healthy habits from day one.",
      image: "/uploads/images/photo_6061955376480980273_m.jpg",
    },
    {
      title: "Worried parents",
      description:
        "For parents concerned about online dangers but unsure how to protect their children effectively.",
      image: "/uploads/images/photo_6061955376480980274_m.jpg",
    },
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is FBI Mom safe to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FBI Mom uses bank-level encryption and privacy-first design. We comply with GDPR, COPPA, and other privacy regulations to keep children’s data secure."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child know about the monitoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FBI Mom encourages transparency and trust. Many parents find that open communication strengthens the parent-child relationship."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work on Android & iOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FBI Mom supports both Android and iOS platforms for parents and children."
        }
      },
      {
        "@type": "Question",
        "name": "Is this better than other parental control apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FBI Mom focuses on trust, education, and ethical digital parenting rather than pure surveillance."
        }
      }
    ]
  };

  return (
    <section className='gradient-bg'>

      {/* Hero Section */}
      <HeroSection />


      {/* Trusted by Parents */}
      {/* <section className="py-16 px-4 bg-white">
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
                  <User className="text-blue-400" />
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
              <Shield className='text-3xl mr-3 text-blue-400' />
              <div>
                <p className="font-bold">Secure Encryption</p>
                <p className="text-sm text-gray-600">Bank-level security</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <VideoDemoSection />


      {/* Problem Awareness */}
      {/* <section id="features" className="py-16 px-4">
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
                  <Timer className="text-blue-400 text-2xl" />
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
      </section> */}

      {/* Solutions */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#655B50]">How FBI Mom Protects Your Child</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <ChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Screen Time Monitoring</h3>
              <p className="text-gray-600 mb-6">Track how much time your child spends on apps and devices. Set daily limits and get detailed reports on their digital habits.</p>
              {/* <div className="flex items-center text-blue-400 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div> */}
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <Ban className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">App & Website Blocking</h3>
              <p className="text-gray-600 mb-6">Block unsafe apps and inappropriate websites instantly. Create custom blocklists or use our pre-configured safety categories.</p>
              {/* <div className="flex items-center text-blue-400 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div> */}
            </div>

            <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <Bell className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Alerts</h3>
              <p className="text-gray-600 mb-6">Get notified when risky behavior is detected. Receive alerts for inappropriate content, excessive usage, or attempted blocked site access.</p>
              {/* <div className="flex items-center text-blue-400 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div> */}
            </div>

            {/* <div className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kid-Friendly Boundaries</h3>
              <p className="text-gray-600 mb-6">Set rules without spying or creating conflict. Our approach encourages responsibility and healthy digital habits.</p>
              <div className="flex items-center text-blue-400 font-medium">
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
              <div className="flex items-center text-blue-400 font-medium">
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
              <div className="flex items-center text-blue-400 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2" />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section id="how-it-works" className="py-16 px-4">
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
      </section> */}

      {/* Target Audience */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="target-audience">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="target-audience" className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Who Is FBImom For?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="relative w-40 h-24 mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                    priority={index === 0}
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
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
                <Eye className="text-3xl text-blue-400 mr-4 mt-1" />
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
              {/* <div className="inline-block px-6 py-3 bg-white rounded-full font-bold text-purple-700 shadow-md">
                <Quote className="inline-block text-blue-400 mr-2" /> Ethical Monitoring
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section id="cta" className="py-20 px-4 primary-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Your Child's Safety Can't Wait</h2>
          <p className="text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto">Join thousands of moms protecting their children online today. Start for free with no credit card required.</p>

          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
            <Link href="#" className="bg-white text-purple-700 font-bold py-5 px-10 rounded-full text-lg shadow-2xl hover:bg-gray-100 transition">
              <Download className="inline-block mr-2" /> Download FBI Mom
            </Link>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <FAQSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

    </section>
  );
}