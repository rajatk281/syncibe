import React from 'react'
import Image from 'next/image'

const icons = [
  { src: '/icons/netflix.svg',   alt: 'Netflix',    width: 90,  height: 40 },
  { src: '/icons/youtube.svg',   alt: 'YouTube',    width: 100, height: 40 },
  { src: '/icons/disney.svg',    alt: 'Disney+',    width: 90,  height: 40 },
  { src: '/icons/prime.png',     alt: 'Prime Video',width: 100, height: 40 },
  { src: '/icons/hbo.svg',       alt: 'HBO',        width: 80,  height: 40 },
  { src: '/icons/hulu.svg',      alt: 'Hulu',       width: 80,  height: 40 },
  { src: '/icons/jiocinema.svg', alt: 'JioCinema',  width: 100, height: 40 },
  { src: '/icons/sony.jpeg',     alt: 'Sony LIV',   width: 80,  height: 40 },
]
const musicIcons = [
  { src: '/MusicIcons/spotify.png',   alt: 'Spotify',    width: 90,  height: 40 },
  { src: '/MusicIcons/amazonmusic.png',   alt: 'Amazon Music',    width: 100, height: 40 },
  { src: '/MusicIcons/applemusic.svg',    alt: 'Apple Music',    width: 90,  height: 40 },
  { src: '/MusicIcons/gaana.svg',     alt: 'Gaana',width: 100, height: 40 },
  { src: '/MusicIcons/jiosaavn.svg',       alt: 'Jio Saavan',        width: 80,  height: 40 },
  { src: '/MusicIcons/spotify.png',   alt: 'Spotify',    width: 90,  height: 40 },
    { src: '/MusicIcons/amazonmusic.png',   alt: 'Amazon Music',    width: 100, height: 40 },
]

// Duplicate the list so the seamless loop works (50% shift trick)
const track = [...icons, ...icons]
const musicTrack = [...musicIcons, ...musicIcons]

const Platforms = () => {
  return (<>
    <section className="w-full py-5 ">
      <p className="text-center text-white/70 text-xl font-semibold uppercase tracking-widest mb-12">
        Watch and Listen together on your favourite platform
      </p>

      <div className="platforms-strip">
        <div className="platforms-track">
          {track.map((icon, i) => (
            <div
              key={i}
              className="flex w-44 h-24 items-center justify-center mx-8 shrink-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className="object-contain filter brightness-[1.1]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="w-full py-5">
      <div className=" platforms-strip ">
        <div className="marquee-reverseb platforms-track ">
          {musicTrack.map((musicIcons, i) => (
            <div
              key={i}
              className="flex w-44 h-24 items-center justify-center mx-8 shrink-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <Image
                src={musicIcons.src}
                alt={musicIcons.alt}
                width={musicIcons.width}
                height={musicIcons.height}
                className="object-contain filter brightness-[1.1]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Platforms