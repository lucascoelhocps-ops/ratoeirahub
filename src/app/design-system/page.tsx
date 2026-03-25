import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignSystem from "./DesignSystem";

export const metadata = {
  title: "Design System | Ratoeira Hub",
  description: "Documentação visual do Design System do Ratoeira Hub - Tokens semânticos, tipografia e componentes.",
};

export default function DesignSystemPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-surface-default text-text-primary">
      <Navbar />
      <DesignSystem />

      <Footer />
    </main>
  );
}
