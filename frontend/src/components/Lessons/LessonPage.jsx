// LessonPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { LucideEarth, CheckCircle } from "lucide-react";
import YouTube from "react-youtube"; // npm i react-youtube
import QuizComponent from "./QuizComponent";

const VIDEO_IDS = ["myZAvqqp9Jc", "7IwPFXzLH8c"]; // your video IDs

function VideoPlayer({ videoId, index, onComplete, isCompleted }) {
  const playerRef = useRef(null);
  const intervalRef = useRef(null);
  const lastCurrentRef = useRef(0);
  const doneRef = useRef(false);
  const durationRef = useRef(0);
  const watchedSecondsRef = useRef(0);

  const opts = {
    height: "315",
    width: "100%",
    playerVars: { rel: 0, modestbranding: 1 },
  };

  const trySetDuration = (player) => {
    try {
      const d = player.getDuration();
      if (d && d > 0) durationRef.current = d;
      else setTimeout(() => trySetDuration(player), 500);
    } catch (err) {
      // sometimes getDuration throws early -> retry
      setTimeout(() => trySetDuration(player), 500);
    }
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    trySetDuration(event.target);
  };

  // Called periodically while playing to accumulate watched seconds
  const sampleOnce = () => {
    const p = playerRef.current;
    if (!p || typeof p.getCurrentTime !== "function") return;
    const cur = p.getCurrentTime() || 0;
    const last = lastCurrentRef.current ?? cur;
    const delta = cur - last;

    // ignore tiny backward jumps / noise
    if (delta > 0.2) {
      watchedSecondsRef.current += delta;
      // mark complete when watched seconds >= 95% of duration
      if (
        !doneRef.current &&
        durationRef.current > 0 &&
        watchedSecondsRef.current >= durationRef.current * 0.95
      ) {
        doneRef.current = true;
        onComplete(index);
      }
    }

    lastCurrentRef.current = cur;
  };

  const onStateChange = (event) => {
    const state = event.data;
    // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
    if (state === 1) {
      // start sampling while playing
      try {
        lastCurrentRef.current = playerRef.current
          ? playerRef.current.getCurrentTime()
          : 0;
      } catch (err) {
        lastCurrentRef.current = 0;
      }
      if (!intervalRef.current) {
        intervalRef.current = setInterval(sampleOnce, 1000);
      }
    } else {
      // stop sampling when paused/buffering/ended
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // final safety-check on ended
      if (state === 0 && playerRef.current && !doneRef.current) {
        try {
          const cur = playerRef.current.getCurrentTime() || 0;
          const d = playerRef.current.getDuration() || durationRef.current;
          if (d > 0 && cur >= d * 0.95) {
            doneRef.current = true;
            onComplete(index);
          }
        } catch (err) { /* ignore */ }
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg p-2 bg-white">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />
      {isCompleted && (
        <div className="mt-2 flex items-center gap-2 text-green-700 text-sm font-medium">
          <CheckCircle size={16} /> Watched
        </div>
      )}
    </div>
  );
}

export default function LessonPage() {
  const [completed, setCompleted] = useState(Array(VIDEO_IDS.length).fill(false));
  const [watchedCount, setWatchedCount] = useState(0);

  const handleComplete = (index) => {
    setCompleted((prev) => {
      if (prev[index]) return prev; // idempotent
      const next = [...prev];
      next[index] = true;
      setWatchedCount((c) => c + 1);
      return next;
    });
  };

  const progress = Math.round((watchedCount / VIDEO_IDS.length) * 100);

  return (
    <div className="p-8">
      <div className="min-h-screen bg-green-50 py-10 px-6 md:px-20 rounded-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <LucideEarth size={36} className="text-green-700" />
          <h1 className="text-4xl font-bold text-green-800">Climate Change Basics</h1>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            Climate change is when the Earth's weather patterns change over a long time. It can make summers hotter, winters colder, and cause strong storms or floods.
          </p>
          <p>
            The main reason is humans putting too much carbon dioxide into the air by burning coal, oil, and gas. Carbon dioxide traps heat in the atmosphere.
          </p>
          <p>
            Effects include melting ice, rising sea levels, stronger storms, animals losing homes, and changes in rainfall.
          </p>
          <p>
            Kids can help by planting trees, saving energy, recycling, and using water wisely.
          </p>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {VIDEO_IDS.map((id, i) => (
            <VideoPlayer
              key={id}
              videoId={id}
              index={i}
              onComplete={handleComplete}
              isCompleted={completed[i]}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-700">{progress}% completed</p>
          <p className="text-xs text-gray-500">
            {watchedCount} of {VIDEO_IDS.length} videos completed
          </p>
        </div>

        {/* Quiz Unlock */}
        {progress === 100 ? (
          <div className="mt-10">
            <QuizComponent />
          </div>
        ) : (
          <p className="mt-10 text-gray-600 font-medium">✅ Watch all videos to unlock the quiz</p>
        )}
      </div>
    </div>
  );
}
