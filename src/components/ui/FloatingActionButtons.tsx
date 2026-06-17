import { MessageSquare, Phone } from 'lucide-react';

export function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+18682388667"
        className="w-12 h-12 bg-brand-surface border border-white/10 text-brand-gold rounded-none flex items-center justify-center shadow-lg hover:bg-brand-gold hover:text-black transition-all"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href="https://wa.me/18682388667"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] text-white rounded-none flex items-center justify-center shadow-lg hover:brightness-110 transition-all"
        aria-label="WhatsApp us"
      >
        <MessageSquare className="w-5 h-5" />
      </a>
    </div>
  );
}
