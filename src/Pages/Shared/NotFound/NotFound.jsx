import notFoundImg from "../../../assets/404.jpg";
const NotFound = () => {
  return (
    <div className="w-3/4 md:w-80 lg:w-96 h-auto mx-auto">
      <img src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
