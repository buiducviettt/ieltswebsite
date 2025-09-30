const CircleDecor = ({ size, color }) => {
  return (
    <div
      className="circle-size"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%', // thêm để thành hình tròn
      }}
    ></div>
  );
};

export default CircleDecor;
