import ContactForm from '@/components/public/contact/ContactForm';
import { AppSettings } from '@/seed';
import { ArrowRight, Book, Calendar, Check, Clock, Headset, Mail, MailCheck, MailIcon, MessageCircle, Paintbrush, Paperclip, Phone, SendIcon, User, Video } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section className="py-12 md:py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
                <Headset className="inline-block ml-2 w-5 h-5" /> We're Here to Help
              </div>

              <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight text-[#655B50]">
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

            {/* Right image */}
            <div className="lg:w-1/2 md:px-12">
              <div className=" overflow-hidden">
                <Image
                  src="/uploads/images/hero_section_contact.jpg" // your existing image
                  alt="Mother protecting child online"
                  width={420}
                  height={600}
                  className="object-cover rounded-3xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      {/* <section id="support" className="py-16 px-4">
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
      </section> */}

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#655B50]">Send Us a Message</h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Fill out the form below and our team will get back to you as soon as possible. For faster response, try our live chat.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                
                <ContactForm />
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
                      <p className="text-blue-700">Within 24 hours (business hours)</p>
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