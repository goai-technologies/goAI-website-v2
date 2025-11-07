import { X, Calendar, ExternalLink, Clock, Users, Video } from 'lucide-react';
import { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const bookingUrl = "https://outlook.office.com/book/HowLLMrediMakesYouVisibleinAILLMs@goai.solutions/";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBooking = () => {
    window.open(bookingUrl, '_blank', 'width=800,height=900,left=200,top=50,toolbar=no,location=no,status=no,menubar=no');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] animate-fade-in flex items-center justify-center p-4 pt-20">
      <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-md" onClick={onClose}></div>

      <div className="relative bg-slate-800 rounded-3xl border border-cyan-500/30 max-w-2xl w-full max-h-[calc(100vh-6rem)] overflow-y-auto shadow-2xl shadow-cyan-500/20 animate-scale-in my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white transition-colors bg-slate-900/80 backdrop-blur-sm rounded-full p-2 hover:bg-slate-800"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-1.5 mb-3">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-xs">BOOK A CALL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text from-cyan-400 to-blue-400">Let's Talk About Your Project</span>
            </h2>
            <p className="text-slate-300 text-base">
              Schedule a 30-minute discovery call. No sales pitch, just honest advice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-5">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 text-center">
              <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-1.5" />
              <p className="text-sm font-semibold text-white mb-0.5">30 Minutes</p>
              <p className="text-xs text-slate-400">Quick & Focused</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 text-center">
              <Video className="w-6 h-6 text-cyan-400 mx-auto mb-1.5" />
              <p className="text-sm font-semibold text-white mb-0.5">Video Call</p>
              <p className="text-xs text-slate-400">Microsoft Teams</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 text-center">
              <Users className="w-6 h-6 text-cyan-400 mx-auto mb-1.5" />
              <p className="text-sm font-semibold text-white mb-0.5">Expert Team</p>
              <p className="text-xs text-slate-400">Direct Access</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 mb-5">
            <h3 className="text-base font-semibold text-white mb-2">What We'll Cover:</h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>Your project goals and timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>Technical approach and best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>Team composition and delivery process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>Pricing and next steps</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3.5 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Open Calendar & Choose Your Time
            <ExternalLink className="w-5 h-5" />
          </button>

          <p className="text-xs text-slate-400 text-center mt-3">
            Opens in a new window • Instant confirmation via email
          </p>
        </div>
      </div>
    </div>
  );
}
