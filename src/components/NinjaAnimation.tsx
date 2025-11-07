export function NinjaAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="ninja-star ninja-star-1">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="ninja-star ninja-star-2">
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="ninja-star ninja-star-3">
        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z" fill="url(#gradient3)" />
          <defs>
            <linearGradient id="gradient3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="slash-effect slash-1"></div>
      <div className="slash-effect slash-2"></div>
      <div className="slash-effect slash-3"></div>

      <div className="ninja-trail trail-1"></div>
      <div className="ninja-trail trail-2"></div>
      <div className="ninja-trail trail-3"></div>

      <div className="speed-line speed-line-1"></div>
      <div className="speed-line speed-line-2"></div>
      <div className="speed-line speed-line-3"></div>
      <div className="speed-line speed-line-4"></div>
      <div className="speed-line speed-line-5"></div>

      <div className="ninja-silhouette">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="25" r="12" fill="url(#ninja-gradient)" opacity="0.8" />
          <path d="M40 37 L35 50 L30 65" stroke="url(#ninja-gradient)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <path d="M40 37 L45 50 L50 65" stroke="url(#ninja-gradient)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <path d="M40 40 L35 45 L25 48" stroke="url(#ninja-gradient)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <path d="M40 40 L45 45 L55 48" stroke="url(#ninja-gradient)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="45" y1="48" x2="65" y2="35" stroke="url(#ninja-gradient)" strokeWidth="2" opacity="0.8" />
          <defs>
            <linearGradient id="ninja-gradient" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
