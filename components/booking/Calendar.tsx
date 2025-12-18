"use client";

import React from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
  availableDates?: Date[];
  className?: string;
}

export function Calendar({
  selectedDate,
  onDateSelect,
  availableDates,
  className = "",
}: CalendarProps) {
  const today = new Date();

  // Disable past dates
  const disabledDays = [
    { before: today },
  ];

  return (
    <div className={`bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 ${className}`}>
      <style jsx global>{`
        .calendar-wrapper .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: #000;
          --rdp-background-color: #000;
          margin: 0;
        }

        .calendar-wrapper .rdp-months {
          justify-content: center;
        }

        .calendar-wrapper .rdp-month {
          width: 100%;
        }

        .calendar-wrapper .rdp-caption {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin-bottom: 1rem;
          position: relative;
        }

        .calendar-wrapper .rdp-caption_label {
          font-size: 18px;
          font-weight: 600;
          color: #000;
        }

        .calendar-wrapper .rdp-nav {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .calendar-wrapper .rdp-nav_button {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .calendar-wrapper .rdp-nav_button:hover {
          background-color: #f3f4f6;
        }

        .calendar-wrapper .rdp-nav_button svg {
          width: 20px;
          height: 20px;
        }

        .calendar-wrapper .rdp-table {
          width: 100%;
          max-width: 100%;
        }

        .calendar-wrapper .rdp-head_cell {
          color: #6b7280;
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
          padding: 0.5rem;
        }

        .calendar-wrapper .rdp-cell {
          padding: 2px;
        }

        .calendar-wrapper .rdp-day {
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #000;
          transition: all 0.2s;
          width: 100%;
          height: 100%;
        }

        .calendar-wrapper .rdp-day:hover:not(.rdp-day_selected):not(.rdp-day_disabled) {
          background-color: #f3f4f6;
        }

        .calendar-wrapper .rdp-day_selected {
          background-color: #000;
          color: white;
          font-weight: 600;
        }

        .calendar-wrapper .rdp-day_selected:hover {
          background-color: #1f2937;
        }

        .calendar-wrapper .rdp-day_disabled {
          color: #d1d5db;
          cursor: not-allowed;
        }

        .calendar-wrapper .rdp-day_disabled:hover {
          background-color: transparent;
        }

        .calendar-wrapper .rdp-day_today:not(.rdp-day_selected) {
          font-weight: 600;
          color: #000;
        }
      `}</style>
      <div className="calendar-wrapper">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
          disabled={disabledDays}
          showOutsideDays={false}
          modifiersClassNames={{
            selected: "rdp-day_selected",
            today: "rdp-day_today",
            disabled: "rdp-day_disabled",
          }}
        />
      </div>
    </div>
  );
}
