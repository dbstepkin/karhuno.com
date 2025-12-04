"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterTextProps = {
  messages?: string[];
  typingMs?: number; // per character while typing
  deletingMs?: number; // per character while deleting
  pauseAfterTypeMs?: number; // pause after full message
  className?: string;
};

const DEFAULT_MESSAGES = [
  "We find the signal, and give you the contact.",
  "Signals updated daily, contact data only when you need it.",
  "No scores. Just signals you can act on.",
  "Get notified when a company is hiring or launching a product.",
  "Track buyers who just interacted with a competitor.",
];

export default function TypewriterText({
  messages,
  typingMs = 100,
  deletingMs = 50,
  pauseAfterTypeMs = 1200,
  className = "",
}: TypewriterTextProps) {
  const messagesRef = useRef<string[]>(messages && messages.length ? messages : DEFAULT_MESSAGES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor toggle
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Typewriter logic
  useEffect(() => {
    const list = messagesRef.current;
    const currentMessage = list[currentIndex % list.length];

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentMessage.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        }, typingMs);
        return () => clearTimeout(timer);
      } else {
        // Full message typed, pause then start deleting
        const pauseTimer = setTimeout(() => setIsDeleting(true), pauseAfterTypeMs);
        return () => clearTimeout(pauseTimer);
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length - 1));
        }, deletingMs);
        return () => clearTimeout(timer);
      } else {
        // Move to next message and start typing
        setIsDeleting(false);
        setCurrentIndex((i) => (i + 1) % list.length);
      }
    }
  }, [displayText, isDeleting, currentIndex, typingMs, deletingMs, pauseAfterTypeMs]);

  return (
    <p className={`text-base sm:text-lg font-semibold bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent ${className}`}>
      {displayText}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block align-baseline w-[2px] h-[1em] bg-gradient-to-r from-[#a974ff] to-[#679eff]"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      />
    </p>
  );
}

