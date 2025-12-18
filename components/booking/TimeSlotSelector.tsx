"use client";

import React from "react";

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface TimeSlotSelectorProps {
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
  morningSlots?: TimeSlot[];
  afternoonSlots?: TimeSlot[];
  className?: string;
}

const defaultMorningSlots: TimeSlot[] = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: true },
];

const defaultAfternoonSlots: TimeSlot[] = [];

export function TimeSlotSelector({
  selectedTime,
  onTimeSelect,
  morningSlots = defaultMorningSlots,
  afternoonSlots = defaultAfternoonSlots,
  className = "",
}: TimeSlotSelectorProps) {
  const hasAfternoonSlots = afternoonSlots.length > 0 && afternoonSlots.some(slot => slot.available);

  return (
    <div className={`bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 ${className}`}>
      {/* Morning Section */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-3">Morning</h3>
        <div className="flex flex-wrap gap-2">
          {morningSlots.map((slot) => (
            <button
              key={slot.time}
              onClick={() => slot.available && onTimeSelect(slot.time)}
              disabled={!slot.available}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  selectedTime === slot.time
                    ? "bg-[#000] text-white"
                    : slot.available
                    ? "bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300 hover:shadow-sm"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      {/* Afternoon Section */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-3">Afternoon</h3>
        {hasAfternoonSlots ? (
          <div className="flex flex-wrap gap-2">
            {afternoonSlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.available && onTimeSelect(slot.time)}
                disabled={!slot.available}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    selectedTime === slot.time
                      ? "bg-[#000] text-white"
                      : slot.available
                      ? "bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300 hover:shadow-sm"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500 italic">No availability</div>
        )}
      </div>
    </div>
  );
}
