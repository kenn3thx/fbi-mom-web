import { PublicFooter } from "@/components/public/layout/Footer";
import { PublicHeader } from "@/components/public/layout/Header";
import './styles.css';


/**
 * Public Routes Layout
 * Applies to all routes in the (public) group
 */
export default function PublicRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />
      <section className="min-h-screen">
        {children}
      </section>
      <PublicFooter />
    </>
  );
}