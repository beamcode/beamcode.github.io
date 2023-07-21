import { useState, useEffect } from 'react';

export default function BurgerCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [svgPosition, setSvgPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateSvgPosition = () => {
      const delayFactor = 0.05; // Adjust the delay factor here (lower value for slower movement)
      const newX = svgPosition.x + (cursorPosition.x - svgPosition.x) * delayFactor;
      const newY = svgPosition.y + (cursorPosition.y - svgPosition.y) * delayFactor;
      setSvgPosition({ x: newX + 0.0, y: newY + 1.4 });
    };

    const animationId = requestAnimationFrame(updateSvgPosition);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [svgPosition]);

  return (
    <div style={{ zIndex: 50, position: 'fixed', left: svgPosition.x, top: svgPosition.y, filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3))' }} className='text-[40px]'>
      {/* <svg style={{ filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5))' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48">
        <path fill="#D99E82" d="M18 20.411c-9.371 0-16.967-.225-16.967 6.427C1.033 33.487 8.629 35 18 35c9.371 0 16.967-1.513 16.967-8.162 0-6.651-7.596-6.427-16.967-6.427z" />
        <path fill="#662113" d="M34.47 20.916S26.251 19.932 18 19.89c-8.251.042-16.47 1.026-16.47 1.026C.717 27.39 7.467 30.057 18 30.057s17.283-2.667 16.47-9.141z" />
        <path fill="#FFCC4D" d="M33.886 18.328l-31.855.646c-1.1 0-2.021 2.229-.854 2.812 8.708 2.708 15.708 5.448 15.708 5.448.962.532 1.287.534 2.25.003 0 0 9.666-3.868 15.875-5.493.881-.23-.025-3.416-1.124-3.416z" />
        <path fill="#77B255" d="M34.725 18.412c-1.9-1.751-1.79-.819-3.246-1.23-.553-.156-4.51-5.271-13.529-5.271h-.02c-9.019 0-12.976 5.115-13.529 5.271-1.456.411-1.346-.521-3.246 1.23-.872.804-1.108 1.222-.188 1.43 1.386.313 1.26 1.152 2.253 1.444 1.202.353 1.696-.292 3.634-.028 1.653.225 1.761 2.369 3.429 2.369s1.668-.8 3.335-.8 2.653 2.146 4.321 2.146 2.653-2.146 4.321-2.146c1.668 0 1.668.8 3.335.8 1.668 0 1.776-2.144 3.429-2.369 1.938-.263 2.433.381 3.634.028.993-.292.867-1.13 2.253-1.444.922-.207.687-.626-.186-1.43z" />
        <path fill="#DD2E44" d="M34.077 16.52c0 2.984-7.198 4.393-16.077 4.393S1.923 19.504 1.923 16.52c0-5.403.966-5.403 16.077-5.403s16.077.001 16.077 5.403z" />
        <path fill="#D99E82" d="M18 .524C8.629.524 1.033 4.915 1.033 11.566c0 6.125 7.596 6.375 16.967 6.375s16.967-.25 16.967-6.375C34.967 4.914 27.371.524 18 .524z" />
        <path d="M10.784 3.695c-.498-.319-1.159-.173-1.477.325-.318.498-.173 1.16.325 1.477.498.319 1.76.557 2.079.059.318-.498-.429-1.543-.927-1.861zm9.734-1.035c-.562.182-1.549 1.006-1.366 1.568.183.562 1.464.648 2.026.466s.869-.786.686-1.348c-.182-.561-.786-.869-1.346-.686zm10.909 7.035c-.452-.38-1.585.225-1.966.677-.38.453-.321 1.127.131 1.507.452.38 1.127.321 1.507-.131.381-.453.781-1.673.328-2.053zm-3.643-5c-.498-.318-1.159-.172-1.478.326-.318.498-.172 1.159.326 1.477.498.319 1.76.557 2.078.059.319-.499-.428-1.544-.926-1.862zm-15 7c-.498-.318-1.159-.172-1.478.326-.318.497-.172 1.159.326 1.476.498.319 1.76.558 2.078.059.319-.498-.428-1.543-.926-1.861zm3.046-4.808c-.336.486-.62 1.739-.133 2.075.486.336 1.557-.374 1.893-.86.336-.486.213-1.152-.273-1.488-.485-.336-1.152-.213-1.487.273zm7.954 4.808c-.498-.318-1.159-.172-1.478.326-.318.497-.172 1.16.326 1.476.498.319 1.76.558 2.078.059.319-.498-.428-1.543-.926-1.861zM4.948 7.808c-.394.441-.833 1.648-.392 2.042.439.394 1.591-.174 1.985-.615.395-.44.357-1.116-.083-1.511-.439-.394-1.116-.356-1.51.084z" fill="#FFE8B6" />
      </svg> */}
      🍔
    </div >
  )
}