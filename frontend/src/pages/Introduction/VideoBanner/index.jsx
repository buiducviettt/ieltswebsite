import styles from '../../Introduction/aboutus.module.scss';
const VideoBanner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/2JzAHYg0zLY?autoplay=1&mute=1&controls=0&loop=1&playlist=2JzAHYg0zLY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBanner;
