import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Strips common markdown artifacts (headers, code blocks, bold, links, list asterisks)
 * so speech synthesis sounds natural and fluent instead of reading out raw punctuation.
 */
export function cleanMarkdownForSpeech(text: string): string {
  if (!text) return '';
  return text
    // Replace code blocks with descriptive text or omit raw backticks
    .replace(/```[\s\S]*?```/g, ' Code snippet omitted. ')
    // Replace inline code `xyz` with xyz
    .replace(/`([^`]+)`/g, '$1')
    // Replace markdown links [anchor](url) with anchor
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove bold/italics markers
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove markdown headers
    .replace(/^#+\s+/gm, '')
    // Remove blockquote arrows
    .replace(/^>\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Replace multiple spaces or newlines with a single pause
    .replace(/\n+/g, '. ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | number | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setSpeakingId(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = useCallback(
    (text: string, id: string | number) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        return;
      }

      // If already speaking this message, toggle to stop
      if (isSpeaking && speakingId === id) {
        stop();
        return;
      }

      // Cancel previous speech if any
      window.speechSynthesis.cancel();

      const cleanedText = cleanMarkdownForSpeech(text);
      if (!cleanedText) return;

      const utterance = new SpeechSynthesisUtterance(cleanedText);
      utteranceRef.current = utterance;

      // Select natural sounding voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice =
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('Google') ||
              v.name.includes('Natural') ||
              v.name.includes('Samantha') ||
              v.name.includes('Daniel') ||
              v.name.includes('Premium'))
        ) || voices.find((v) => v.lang.startsWith('en')) || voices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        setIsSpeaking(true);
        setSpeakingId(id);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setSpeakingId(null);
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis error:', e);
        setIsSpeaking(false);
        setSpeakingId(null);
      };

      window.speechSynthesis.speak(utterance);
    },
    [isSpeaking, speakingId, stop]
  );

  return {
    isSpeaking,
    speakingId,
    isSupported,
    speak,
    stop,
  };
}
