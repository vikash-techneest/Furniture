import React, { useRef, useState, useCallback } from "react";

/* ========== Icons ========== */
const EyeIcon = ({ clipId }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
    className="shrink-0 w-4 h-4" aria-hidden="true">
    <g clipPath={`url(#${clipId})`}>
      <path d="M12.652 6.265C12.1055 5.24389 11.2897 4.39196 10.2932 3.80169C9.29673 3.21141 8.15762 2.90533 6.99949 2.91667C5.84136 2.90533 4.70225 3.21141 3.70578 3.80169C2.7093 4.39196 1.89353 5.24389 1.34699 6.265C1.22936 6.49215 1.16797 6.74421 1.16797 7C1.16797 7.2558 1.22936 7.50786 1.34699 7.735C1.89353 8.75612 2.7093 9.60805 3.70578 10.1983C4.70225 10.7886 5.84136 11.0947 6.99949 11.0833C8.15762 11.0947 9.29673 10.7886 10.2932 10.1983C11.2897 9.60805 12.1055 8.75612 12.652 7.735C12.7696 7.50786 12.831 7.2558 12.831 7C12.831 6.74421 12.7696 6.49215 12.652 6.265ZM7.34366 8.715C6.97529 8.78905 6.59287 8.74256 6.25297 8.58242C5.91306 8.42229 5.63373 8.157 5.45627 7.82581C5.27882 7.49462 5.21267 7.11511 5.26762 6.74341C5.32256 6.37171 5.49568 6.02757 5.76137 5.76188C6.02705 5.4962 6.3712 5.32308 6.7429 5.26813C7.11459 5.21319 7.49411 5.27933 7.8253 5.45678C8.15649 5.63424 8.42177 5.91358 8.58191 6.25348C8.74205 6.59338 8.78853 6.9758 8.71449 7.34417C8.64652 7.68233 8.48014 7.99286 8.23624 8.23676C7.99235 8.48065 7.68181 8.64703 7.34366 8.715Z" fill="white" />
    </g>
    <defs>
      <clipPath id={clipId}><rect width="14" height="14" fill="white" /></clipPath>
    </defs>
  </svg>
);

const LikeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none"
    className="w-6 h-6" aria-label="Like" role="img">
    <rect width="40" height="40" rx="20" fill="black" fillOpacity="0.3" />
    <path d="M24.1997 10.6668C22.6413 10.7152 21.1516 11.3194 19.9997 12.3701C18.8478 11.3194 17.3581 10.7152 15.7997 10.6668C14.9667 10.6605 14.1408 10.8207 13.3705 11.138C12.6003 11.4553 11.9012 11.9233 11.3143 12.5145C10.7274 13.1058 10.2646 13.8083 9.95297 14.5809C9.64136 15.3535 9.48727 16.1805 9.49972 17.0135C9.49972 20.9451 12.5681 24.5151 17.8531 29.3335L18.4247 29.8585C18.8549 30.252 19.4167 30.4702 19.9997 30.4702C20.5827 30.4702 21.1446 30.252 21.5747 29.8585L22.1464 29.3451C27.4314 24.5035 30.4997 20.9335 30.4997 17.0135C30.5122 16.1805 30.3581 15.3535 30.0465 14.5809C29.7349 13.8083 29.272 13.1058 28.6851 12.5145C28.0983 11.9233 27.3992 11.4553 26.6289 11.138C25.8587 10.8207 25.0328 10.6605 24.1997 10.6668Z" fill="white" />
  </svg>
);

const PlayIcon = ({ playing }) => (
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-200 z-20"
    style={{ opacity: playing ? 0 : 1 }}
  >
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" fill="#000" fillOpacity=".4" rx="24" />
      <path fill="#fff"
        d="m31.15 22.36-10-7A2 2 0 0 0 20 15a1.88 1.88 0 0 0-.92.23A2 2 0 0 0 18 17v14a2 2 0 0 0 1.08 1.77c.282.154.599.233.92.23a2 2 0 0 0 1.15-.36l10-7a2 2 0 0 0 0-3.28Z" />
    </svg>
  </div>
);

/* ========== Data ========== */
// Mixkit & Coverr CDN links (Direct MP4, CORS block nahi karte)
const SAMPLE_VIDEOS = [
  "https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-large-sofa-and-a-coffee-table-41864-large.mp4", // Sofa/Living room
  "https://cdn.coverr.co/videos/coverr-a-modern-bedroom-with-a-large-bed-1575/1080p.mp4", // Bed
  "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-bedroom-with-a-bed-and-a-window-41871-large.mp4", // Bedroom
  "https://cdn.coverr.co/videos/coverr-a-modern-living-room-with-a-sofa-1576/1080p.mp4", // Living Room
  "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-with-a-dining-table-41868-large.mp4", // Dining Table
  "https://cdn.coverr.co/videos/coverr-a-dining-room-with-a-table-and-chairs-1577/1080p.mp4", // Dining room
  "https://assets.mixkit.co/videos/preview/mixkit-wooden-shelf-with-books-and-decor-41872-large.mp4", // Shelf
  "https://cdn.coverr.co/videos/coverr-a-modern-office-desk-with-a-chair-1578/1080p.mp4", // Desk/Study
  "https://assets.mixkit.co/videos/preview/mixkit-luxury-living-room-with-a-fireplace-41874-large.mp4", // Luxury living
  "https://cdn.coverr.co/videos/coverr-a-stylish-living-room-with-a-sofa-and-plants-1579/1080p.mp4", // Plants/Sofa
  "https://assets.mixkit.co/videos/preview/mixkit-cozy-bedroom-with-a-large-bed-and-plants-41867-large.mp4", // Bedroom
  "https://cdn.coverr.co/videos/coverr-a-bedroom-with-a-bed-and-a-window-1580/1080p.mp4", // Bedroom window
  "https://assets.mixkit.co/videos/preview/mixkit-elegant-dining-room-with-a-table-and-chairs-41869-large.mp4", // Elegant dining
  "https://cdn.coverr.co/videos/coverr-a-living-room-with-a-sofa-and-a-coffee-table-1581/1080p.mp4", // Sofa & table
  "https://assets.mixkit.co/videos/preview/mixkit-a-modern-living-room-with-a-sofa-and-a-table-41865-large.mp4", // Modern living
  "https://cdn.coverr.co/videos/coverr-a-modern-kitchen-with-a-dining-table-1582/1080p.mp4", // Kitchen/Dining
  "https://assets.mixkit.co/videos/preview/mixkit-stylish-living-room-with-a-sofa-and-plants-41875-large.mp4", // Stylish living
];

const HMAC = "eca0567f2a9f5aaa71bbb1494f8ddef2f5515ee6be2da1781689e4c7e03b1e6b";
const thumb = (uuid, w) =>
  `https://jiostream-eprod-thumb.akamaized.net/thumbnails/${uuid}_${w}.jpeg?hdnts=exp=1794388943~acl=/*~hmac=${HMAC}`;
const srcSet = (uuid) =>
  [480, 720, 960, 1080].map((w) => `${thumb(uuid, w)} ${w}w`).join(", ");

const slides = [
  { id: "cl-2",  title: "Larsson Study Table", views: "3.1M", likes: "539", uuid: "9671b156-aea6-4df0-9eff-b67fc2f87381" },
  { id: "cl-3",  title: "Hanoi Solid Wood Cane Hydraulic Storage Bed", views: "240.2K", likes: "471", uuid: "8cffdadd-52f4-4877-b424-7ea04afd3aba" },
  { id: "cl-4",  title: "Bennis Shoe Rack", views: "75.5K", likes: "194", uuid: "d0eeef9b-48cf-43c1-9f49-be39cbd0624c" },
  { id: "cl-5",  title: "Holmebrook Queen Size Upholstered Bed", views: "34.3K", likes: "109", uuid: "6b7cfde3-2816-4fef-a490-3f891b430ab1" },
  { id: "cl-6",  title: "Nina Dressing Table", views: "130.2K", likes: "72", uuid: "a989824e-cb81-40e4-bad8-5ee0defed6b7" },
  { id: "cl-7",  title: "Leeroy Three Seater Leather Recliner Sofa", views: "18.6K", likes: "48", uuid: "d2d23f61-ddd7-415e-8f61-727422196e78" },
  { id: "cl-8",  title: "Milan Queen Size Bed with Hydraulic Storage", views: "21.3K", likes: "89", uuid: "a39c262c-8d86-46e4-aa62-30714c3dc446" },
  { id: "cl-9",  title: "Diana 3 Seater Fabric Sofa In Olive Green Colour", views: "12.5K", likes: "25", uuid: "e11ed037-e374-4372-8a5a-36a06507d8f8" },
  { id: "cl-10", title: "Odette Lounge Chair", views: "12K", likes: "28", uuid: "f78cc5f4-363e-46c0-8023-d3fc465872d0" },
  { id: "cl-11", title: "Dune Solid Oak Wood Dining Table With 6 Dune Solid Wood Dining Chairs in White Boucle", views: "15.1K", likes: "55", uuid: "71f827b3-ca5e-41a7-abc2-3ddd946c9b23" },
  { id: "cl-12", title: "Taran Wooden Sofa", views: "9K", likes: "24", uuid: "8fb9d788-8af3-4195-aa37-f2f9dd9c7120" },
  { id: "cl-13", title: "Alba Square Cluster Black Marquina Marble & Solid Wood Coffee Table", views: "11.1K", likes: "43", uuid: "fb0c2004-4f25-4b76-80d6-5d97b1adc79d" },
  { id: "cl-14", title: "Reno Lounge Chair", views: "7K", likes: "22", uuid: "eb81f0df-74eb-4004-9625-848b00ed5864" },
  { id: "cl-15", title: "Juniper Lounge Chair", views: "8.3K", likes: "21", uuid: "589d07a0-219e-44bf-bfb1-46439aee4c92" },
  { id: "cl-16", title: "Astra Living Room Collection", views: "6.3K", likes: "25", uuid: "b71fd3b5-39aa-4fe6-88b7-f20e64480e6f" },
  { id: "cl-17", title: "Adria Jade Green Marble Dining Set", views: "6.3K", likes: "30", uuid: "56435252-68ce-4890-ab81-66fd65e073a9" },
  { id: "cl-18", title: "Terra Collection", views: "6.2K", likes: "78", uuid: "38c724cd-a6ac-4cb4-a26b-6c6d06841630" },
].map((s, i) => ({ ...s, video: SAMPLE_VIDEOS[i % SAMPLE_VIDEOS.length] }));

/* ========== Slide Component ========== */
const VideoSlide = ({ slide, index }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    
    setPlaying(true); // Icon hide on hover
    v.currentTime = 0;
    v.play().catch(() => setPlaying(false));
  }, []);

  const handleStop = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  }, []);

  const label = `Play ${slide.title.trim()} video`;

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      tabIndex={0}
      data-gslide={index}
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
      onFocus={handlePlay}
      onBlur={handleStop}
      onClick={handlePlay}
      className="group relative flex shrink-0 flex-col aspect-[9/16] w-[250px] mr-4 rounded-md overflow-hidden bg-slate-700 cursor-pointer transition-all duration-200 hover:saturate-110 focus:outline-none focus:ring-2 focus:ring-white/70 snap-start"
    >
      <img
        src={thumb(slide.uuid, 720)}
        srcSet={srcSet(slide.uuid)}
        sizes="250px"
        alt={label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover bg-black z-0"
      />

      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
        src={slide.video}
        className="absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-300"
        style={{ opacity: playing ? 1 : 0 }}
      />

      <div className="absolute inset-x-0 bottom-0 top-1/2 z-10 bg-gradient-to-b from-transparent to-black/60 group-hover:to-black/90 transition-colors" />

      <div className="absolute top-3 right-2 z-20">
        <div className="flex items-center justify-center gap-1 rounded-full bg-black/50 h-6 min-w-[2em] px-2 py-1">
          <EyeIcon clipId={slide.id} />
          <span className="text-white text-xs font-medium">{slide.views}</span>
        </div>
      </div>

      <PlayIcon playing={playing} />

      <div className="absolute left-3 right-4 bottom-3 z-20 flex flex-col gap-1">
        <div className="flex items-center">
          <div className="ml-auto flex items-center justify-center gap-1">
            <LikeIcon />
            <span className="text-white text-[10px] leading-4 font-medium">
              {slide.likes}
            </span>
          </div>
        </div>
        <p className="text-white text-sm font-medium leading-snug line-clamp-3">
          {slide.title}
        </p>
      </div>
    </div>
  );
};

/* ========== Main Carousel Component ========== */
export default function VideoCarousel() {
  const trackRef = useRef(null);
  const CARD_WIDTH = 250 + 16;

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * CARD_WIDTH * 3, behavior: "smooth" });
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Videos carousel"
      className="w-full relative"
    >
      <div
        ref={trackRef}
        className="flex overflow-x-auto overflow-y-hidden scroll-smooth py-2"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex">
          {slides.map((slide, i) => (
            <VideoSlide key={slide.id} slide={slide} index={i} />
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous videos"
        onClick={() => scroll(-1)}
        className="absolute inset-y-2 left-0 z-30 flex items-center justify-center w-12 bg-gradient-to-l from-transparent to-black/50 hover:to-black/80 transition-colors"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
          className="w-12 h-12 drop-shadow-lg" aria-hidden="true">
          <path d="M27.78 31.28a.75.75 0 0 0 0-1.06L21.31 23.75l6.47-6.47a.75.75 0 1 0-1.06-1.06l-7 7a.75.75 0 0 0 0 1.06l7 7a.75.75 0 0 0 1.06 0Z" fill="white" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next videos"
        onClick={() => scroll(1)}
        className="absolute inset-y-2 right-0 z-30 flex items-center justify-center w-12 bg-gradient-to-r from-transparent to-black/50 hover:to-black/80 transition-colors"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
          className="w-12 h-12 drop-shadow-lg" aria-hidden="true">
          <path d="M20.22 31.28a.75.75 0 0 1 0-1.06l6.47-6.47-6.47-6.47a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z" fill="white" />
        </svg>
      </button>
    </section>
  );
}