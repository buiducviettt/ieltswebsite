import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cloud = ({ className }) => {
  const cloudRef = useRef(null);

  useEffect(() => {
    // Hiệu ứng di chuyển ngang cho đám mây
    gsap.to(cloudRef.current, {
      x: 400, // Di chuyển đám mây sang phải (có thể điều chỉnh khoảng cách)
      duration: 5, // Thời gian di chuyển (điều chỉnh tốc độ)
      repeat: -1, // Lặp vô tận
      ease: 'linear', // Di chuyển đều
      yoyo: true, // Quay lại vị trí ban đầu sau khi di chuyển hết
    });
  }, []);
  return (
    <div className={className}>
      <svg
        ref={cloudRef}
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="600"
        viewBox="0 0 64 64"
        fill="#ffffff"
        opacity={0.2}
      >
        <path
          d="M50,32.8c-0.1,0-0.2,0-0.3,0c0.1-0.7,0.3-1.5,0.3-2.3c0-5.5-4.5-10-10-10c-3.4,0-6.5,1.7-8.3,4.4
          c-1.6-1.3-3.7-2.2-5.9-2.2c-5.5,0-10,4.5-10,10c0,1.2,0.2,2.4,0.7,3.5C11.8,36.8,8,41.1,8,46.4c0,5.5,4.5,10,10,10h32
          c5.5,0,10-4.5,10-10C60,37.3,55.5,32.8,50,32.8z"
        />
      </svg>
    </div>
  );
};

export default Cloud;
