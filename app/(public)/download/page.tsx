// import { AppSettings } from "@/seed";
import { ShieldCheck, Check } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    //const settings = await settingsService.getSettings();
    //const settings = AppSettings;

    return {
        title: `Download FBI Mom – Parental Control App for Android & iOS`,
        description:
            `Download FBI Mom, a trusted parental control app that helps parents protect children online. Monitor screen time, block harmful content, and keep kids safe on Android and iOS.`,
        openGraph: {
            title: "Download FBI Mom – Parental Control App",
            description:
                "Protect your children online with FBI Mom. A secure parental control app for Android and iOS.",
            type: "website",
        },
        alternates: {
            canonical: "/download",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}


export default function DownloadPage() {
    return (
        <main className="bg-gray-50">
            <section className="container mx-auto max-w-6xl px-4 py-20">
                {/* Header */}
                <header className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Download FBI Mom
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        A simple and powerful parental control app to keep your children
                        safe online — on every device.
                    </p>
                </header>

                {/* Platforms */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">
                        Choose your platform
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <DownloadCard
  platform="From Our Website"
  description="Download FBI Mom directly from our website and install it on your phone."
  requirements={[
    "Android phone or tablet",
    "Quick and guided installation",
    "Safe and verified download",
  ]}
  button={
    <Link
      href="/downloads/fbi-mom.apk"
      className="inline-flex items-center gap-4 rounded-xl bg-gray-900 px-6 py-4 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    >
      <span className="text-sm leading-tight">
        <span className="block text-xs opacity-80">Download from website</span>
        <span className="block text-lg font-semibold">
          Android App
        </span>
      </span>
    </Link>
  }
/>
                        <DownloadCard
                            platform="Android"
                            description="Monitor and protect your child’s Android device in minutes."
                            requirements={[
                                "Android 8.0 or higher",
                                "Free with optional in-app purchases",
                            ]}
                            button={
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-4 rounded-xl bg-gray-900 px-6 py-4 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    <span className="text-sm leading-tight">
                                        <span className="block text-xs opacity-80">Get it on</span>
                                        <span className="block text-lg font-semibold">
                                            Google Play
                                        </span>
                                    </span>
                                </Link>
                            }
                        />

                        <DownloadCard
                            platform="iOS"
                            description="Works seamlessly on iPhone and iPad with iOS support."
                            requirements={[
                                "iOS 14.0 or later",
                                "Compatible with iPhone & iPad",
                            ]}
                            button={
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-4 rounded-xl bg-gray-900 px-6 py-4 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    <span className="text-sm leading-tight">
                                        <span className="block text-xs opacity-80">
                                            Download on the
                                        </span>
                                        <span className="block text-lg font-semibold">
                                            App Store
                                        </span>
                                    </span>
                                </Link>
                            }
                        />
                    </div>
                </section>

                {/* Trust block */}
                <section className="mt-16 rounded-2xl bg-white p-8 shadow-sm flex items-start gap-4">
                    <ShieldCheck className="h-8 w-8 text-purple-600 mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            Safe, secure & private
                        </h4>
                        <p className="text-gray-600">
                            All downloads are verified and encrypted. Your family’s privacy
                            always comes first.
                        </p>
                    </div>
                </section>
            </section>
        </main>
    );
}


function DownloadCard({
    platform,
    description,
    requirements,
    button,
}: {
    platform: string;
    description: string;
    requirements: string[];
    button: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {platform}
            </h3>
            <p className="text-gray-600 mb-6">{description}</p>

            {button}

            <ul className="mt-6 space-y-3 text-gray-600">
                {requirements.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}