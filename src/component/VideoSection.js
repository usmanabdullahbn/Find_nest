import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsPaused(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="relative h-screen w-full">
      {/* Background Image or Video */}
      <div className="absolute inset-0 bg-cover bg-center">
        {isPlaying ? (
          <video
            ref={videoRef}
            autoPlay
            loop={!isPaused}
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.prod.website-files.com/66e14188b0980f46c8264498%2F66f13db856d98f4d4acd0cee_4770380-hd_1920_1080_30fps%20%281%29-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/66e14188b0980f46c8264498%2F66f13db856d98f4d4acd0cee_4770380-hd_1920_1080_30fps%20%281%29-transcode.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://cdn.prod.website-files.com/66e14188b0980f46c8264498%2F66f13db856d98f4d4acd0cee_4770380-hd_1920_1080_30fps%20%281%29-poster-00001.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-5xl md:text-7xl text-white font-bold leading-tight">
            Take the first{" "}
            <span className="inline-block bg-[#c4f135] px-4 py-2 text-black">
              STEP TOWARD
            </span>{" "}
            your new home!
          </h2>

          <div className="flex items-center gap-6 pt-8">
            <button className="px-6 py-3 text-lg bg-white hover:bg-gray-100 text-black rounded-md flex items-center justify-center">
              Let's talk
            </button>

            {!isPlaying ? (
              <button
                className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 text-black flex items-center justify-center"
                onClick={handlePlay}
              >
                <Play className="h-6 w-6" />
              </button>
            ) : (
              <button
                className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 text-black flex items-center justify-center"
                onClick={isPaused ? handlePlay : handlePause}
              >
                {isPaused ? <Play className="h-6 w-6" /> : <Pause className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
