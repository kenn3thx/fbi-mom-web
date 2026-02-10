import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Construction",
  description: "This page is currently under construction. Please check back soon.",
};

export default function UnderConstructionPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 text-5xl">🚧</div>

        <h1 className="mb-3 text-3xl font-semibold text-[#655B50]">
          Under Construction
        </h1>

        <p className="mb-8 text-sm leading-relaxed text-[#655B50]">
          We’re currently working on this page.
          <br />
          Please check back again soon.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
          >
            Back to Home
          </a>

          <a
            href="mailto:support@fbimom.com"
            className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white transition"
          >
            Contact
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} FBIMOM
        </p>
      </div>
    </main>
  );
}
