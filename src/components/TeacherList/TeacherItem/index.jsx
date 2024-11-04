import styles from '../../TeacherList/teacher.module.scss';
// eslint-disable-next-line react/prop-types
const TeacherItem = ({ name, desc, images }) => {
  return (
    <div className={styles.teacherItem}>
      <div className={styles.teacherImg}>
        <img src={images} alt="" />
      </div>
      <div className={`${styles.content} mt-5`}>
        <h1 className={styles.title}>{name}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default TeacherItem;
