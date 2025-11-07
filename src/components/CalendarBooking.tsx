import { useState } from 'react';
import { BookingModal } from './BookingModal';

interface CalendarBookingProps {
  buttonText?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function CalendarBooking({
  buttonText = "Book a Call",
  className = "",
  icon
}: CalendarBookingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className || "group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"}
      >
        {icon}
        {buttonText}
      </button>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
