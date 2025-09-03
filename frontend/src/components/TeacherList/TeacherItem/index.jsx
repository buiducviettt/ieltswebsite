import styles from '../../TeacherList/teacher.module.scss';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const TeacherItem = ({ name, desc, images, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/teacher/${id}`);
  };
  return (
    <div className={styles.teacherItem} onClick={handleClick}>
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
