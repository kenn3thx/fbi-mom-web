import { AppSettings } from '@/seed';
import { ArrowRight, Book, Calendar, Check, Clock, Headset, Mail, MailCheck, MailIcon, MessageCircle, Paintbrush, Paperclip, Phone, SendIcon, User, Video } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
// import { settingsService } from '@/services/settings.service';

export async function generateMetadata(): Promise<Metadata> {
  //const settings = await settingsService.getSettings();
  const settings = AppSettings;

  return {
    title: 'Contact FBI Mom – Parental Control App Support | Child Online Safety',
    description: `Contact FBI Mom support team for help with parental controls, child online safety, screen time monitoring, and digital parenting guidance.`,
  };
}

export default async function AboutPage() {
  //const settings = await settingsService.getSettings();
  const settings = AppSettings;

  return (
    <section>
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
                <Headset className="inline-block ml-2 w-5 h-5" /> We're Here to Help
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Contact FBI Mom Support
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Have questions about child online safety, parental controls, or need technical support? Our team of digital parenting experts is ready to help you protect your children in the digital world.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">24/7 Support</p>
                    <p className="text-sm text-gray-500">Always here for you</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Parenting Experts</p>
                    <p className="text-sm text-gray-500">Specialized guidance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full primary-gradient flex items-center justify-center floating">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4">📱</div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">Need Help?</h3>
                      <p className="text-gray-600">We're just a message away</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 left-0 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <MessageCircle className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-bold">Live Chat</p>
                      <p className="text-sm text-gray-500">Fast response</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-0 bg-white p-4 rounded-2xl shadow-xl" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <Mail className="text-pink-600 text-xl" />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-sm text-gray-500">support@fbimom.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section id="support" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Preferred Contact Method</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">We offer multiple ways to get in touch with our support team. Select the option that works best for you.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="contact-card bg-white shadow-lg">
              <div className="p-8">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Live Chat Support</h3>
                <p className="text-gray-600 mb-6">Get instant answers to your questions from our digital parenting experts. Available 24/7 for urgent matters.</p>
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>Instant connection</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>Screen sharing available</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>No waiting in queue</span>
                  </div>
                </div>
                <button id="start-chat" className="btn-primary text-white font-bold py-3 px-8 rounded-full w-full">
                  <MessageCircle className="inline mr-2 w-5 h-5" /> Start Live Chat
                </button>
              </div>
            </div>

            <div className="contact-card bg-white shadow-lg">
              <div className="p-8">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                  <MailCheck className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">Send us a detailed message and receive a comprehensive response within 2 hours during business hours.</p>
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>Detailed responses</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>Attach screenshots</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>24/7 for emergencies</span>
                  </div>
                </div>
                <a href="mailto:support@fbimom.com" className="block bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full text-center hover:bg-gray-200 transition">
                  <Mail className="inline mr-2 w-5 h-5" /> support@fbimom.com
                </a>
              </div>
            </div>

            <div className="contact-card bg-white shadow-lg">
              <div className="p-8">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6">
                  <Phone className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Phone Support</h3>
                <p className="text-gray-600 mb-6">Speak directly with a parenting specialist for personalized guidance on child online safety and app setup.</p>
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>Mon-Fri: 9AM-8PM EST</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>Sat-Sun: 10AM-6PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-3 w-5 h-5" />
                    <span>Quick issue resolution</span>
                  </div>
                </div>
                <a href="tel:+1-800-555-1234" className="block bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full text-center hover:bg-gray-200 transition">
                  <Phone className="inline mr-2 w-5 h-5" /> 1-800-555-FBIMOM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Send Us a Message</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Fill out the form below and our team will get back to you as soon as possible. For faster response, try our live chat.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <form id="contact-form" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-gray-700 font-medium mb-2">First Name *</label>
                      <input type="text" id="first-name" className="form-input" placeholder="Enter your first name" required />
                    </div>

                    <div>
                      <label htmlFor="last-name" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                      <input type="text" id="last-name" className="form-input" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input type="email" id="email" className="form-input" placeholder="you@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number (Optional)</label>
                    <input type="tel" id="phone" className="form-input" placeholder="(123) 456-7890" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select id="subject" className="form-input" defaultValue={""} required>
                      <option value="" disabled>Select a topic</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Account</option>
                      <option value="parenting">Parenting Guidance</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea id="message" rows={6} className="form-input" placeholder="Please describe your question or issue in detail..." required></textarea>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="consent" className="w-5 h-5 mr-3" required />
                    <label htmlFor="consent" className="text-gray-700">I agree to the <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a> and consent to FBI Mom contacting me regarding my inquiry.</label>
                  </div>

                  <button type="submit" className="btn-primary text-white font-bold py-4 px-10 rounded-full text-lg w-full md:w-auto">
                    <SendIcon className="inline mr-2 w-5 h-5" /> Send Message
                  </button>

                  <div id="success-message" className="success-message bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <Check className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-800">Message Sent Successfully!</h3>
                        <p className="text-green-700">Thank you for contacting FBI Mom. Our support team will respond within 2 hours during business hours.</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div>
                <div className="bg-purple-50 p-8 rounded-2xl mb-8">
                  <h3 className="text-xl font-bold mb-6">What to Include</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 mt-1 w-5 h-5" />
                      <span>Your child's age and device type</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 mt-1 w-5 h-5" />
                      <span>Specific issue or question</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 mt-1 w-5 h-5" />
                      <span>Screenshots if applicable</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-3 mt-1 w-5 h-5" />
                      <span>Steps you've already tried</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-6">Response Time</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-blue-800">Live Chat</p>
                      <p className="text-blue-700">Instant response</p>
                    </div>
                    <div>
                      <p className="font-bold text-blue-800">Email</p>
                      <p className="text-blue-700">Within 2 hours (business hours)</p>
                    </div>
                    <div>
                      <p className="font-bold text-blue-800">Phone</p>
                      <p className="text-blue-700">Immediate during business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Help & Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Common Questions</h3>

              <div className="space-y-4">
                <div className="contact-option bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-lg mb-2">How do I set up screen time limits?</h4>
                  <p className="text-gray-600 mb-4">Learn how to set healthy screen time boundaries for your child based on their age and needs.</p>
                  <Link href="#" className="text-purple-600 font-medium flex items-center">
                    <span>View setup guide</span>
                    <ArrowRight className="ml-2" />
                  </Link>
                </div>

                <div className="contact-option bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-lg mb-2">My child bypassed app blocking. What now?</h4>
                  <p className="text-gray-600 mb-4">Discover strategies for maintaining boundaries when children try to bypass parental controls.</p>
                  <Link href="#" className="text-purple-600 font-medium flex items-center">
                    <span>Learn prevention tips</span>
                    <ArrowRight className="ml-2" />
                  </Link>
                </div>

                <div className="contact-option bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-lg mb-2">Is my child's data secure?</h4>
                  <p className="text-gray-600 mb-4">Understand our privacy-first approach and how we protect your family's digital footprint.</p>
                  <Link href="#" className="text-purple-600 font-medium flex items-center">
                    <span>Read privacy policy</span>
                    <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Helpful Resources</h3>

              <div className="space-y-4">
                <div className="contact-option bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Book className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Parenting Guides</h4>
                      <p className="text-gray-600">Age-appropriate digital safety guides for children 6-16 years old.</p>
                    </div>
                  </div>
                </div>

                <div className="contact-option bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      <Video className="text-pink-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Video Tutorials</h4>
                      <p className="text-gray-600">Step-by-step video guides for setting up and using FBI Mom features.</p>
                    </div>
                  </div>
                </div>

                <div className="contact-option bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Parent Community</h4>
                      <p className="text-gray-600">Connect with other parents facing similar digital parenting challenges.</p>
                    </div>
                  </div>
                </div>

                <div className="contact-option bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Calendar className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Webinar Schedule</h4>
                      <p className="text-gray-600">Join our free webinars on child online safety and digital parenting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </section>
  );
}