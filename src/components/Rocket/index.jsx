import { useEffect } from 'react';
import { gsap } from 'gsap';
import './rocket.css'; // Import CSS cho tên lửa
import Image from '../../assets/image/Images';

const RocketAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animation cho tên lửa
    tl.to('.rocket', {
      duration: 3,
      x: '80vw', // Di chuyển tên lửa ra ngoài bên phải
      ease: 'power2.out',
    });
  }, []);

  return (
    <div>
      <div className="rocket-container mt-5">
        <div className="rocket">
          <img src={Image.rocket} alt="" />
          <div className="flame">
            <img src={Image.flame} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
