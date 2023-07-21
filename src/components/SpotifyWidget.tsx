import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import MusicBars from "./musicBars/MusicBars";
import spotify from "../assets/spotify.png";

const endpoint = "http://localhost:3001/spotify/nowplaying";

interface SpotifyData {
  isPlaying: boolean;
  songUrl: string;
  albumImageUrl: string;
  title: string;
  artist: string;
}

export default function SpotifyWidget({ className }: { className?: string }) {
  const [data, setData] = useState<SpotifyData | undefined>();
  const [failedAttempts, setFailedAttempts] = useState<number>(0);

  const fetchData = () => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json: SpotifyData) => {
        setData(json)
        setFailedAttempts(0)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setFailedAttempts((prevAttempts) => prevAttempts + 1)
      })
  }

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      if (failedAttempts < 3) {
        fetchData()
      } else {
        clearInterval(interval)
      }
    }, 10000)

    return () => {
      clearInterval(interval);
    }
  }, []);

  if (failedAttempts >= 3 || !data || !data?.isPlaying) {
    // Don't render anything if data is undefined
    return null;
  }

  return (
    <div className={twMerge("flex w-full min-w-fit justify-between gap-4 overflow-hidden rounded-md bg-gray-50 dark:bg-primary-dark p-3 border border-primary-light border-opacity-30 dark:border-primary-dark dark:border-opacity-10", className)}>
      <div className="flex gap-4 max-[332px]:flex-col">
        <div className="min-h-[64px] min-w-[64px] rounded-md bg-gray-200 dark:bg-gray-600 min-[333px]:h-16 min-[333px]:w-16">
          {data?.isPlaying && (
            <a
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-md bg-white object-contain shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] hover:-translate-1 hover:scale-110 ease-in-out duration-300"
                src={data.albumImageUrl}
                alt=""
              />
            </a>
          )}
        </div>
        <div className="flex flex-col justify-between">
          {data?.isPlaying ? (
            <div className="">
              <div className="">
                <p className="break-keep text-sm font-medium text-gray-900 [overflow-wrap:anywhere] dark:text-white">
                  {data.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {data.artist}
                </p>
              </div>
              <a
                className="text-xs text-blue-500 dark:text-blue-400"
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </a>
            </div>
          ) : (
            <p className="text-sm font-medium text-secondary-light dark:text-secondary-dark">
              Not listening to any music.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-fit">
        <img
          className="h-7 min-h-[28px] w-7 min-w-[28px] rounded-md object-contain"
          src={spotify}
          alt="Spotify logo"
        />
        {data?.isPlaying && <MusicBars />}
      </div>
    </div>
  )
}
