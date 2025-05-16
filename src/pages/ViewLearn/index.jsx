import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layout/Default Layout';
import './viewlearn.scss';
const ViewLearn = () => {
  const { productId } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const view = params.get('view');
  const [lessons, setLessons] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `https://680f31ad67c5abddd19432d4.mockapi.io/elearn/courses/${productId}`,
        );
        const data = await response.json();
        console.log(data.course);
        setLessons(data);
        // set mặc định cho chương đầu tiên và chapter đầu tiên
        const firstChapter = data.course?.[0];
        const firstVideo = firstChapter?.videos?.[0];
        if (firstChapter && firstVideo) {
          setSelectedChapter(firstChapter);
          setSelectedVideo(firstVideo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, [productId]);
  if (!lessons || !selectedChapter || !selectedVideo) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <DefaultLayout>
        <div className="viewlearn_page">
          <div className="container">
            {view === 'learn' && (
              <div className="view_learn">
                <div className="view_learn_wrapper">
                  <div className="video">
                    <iframe
                      src={selectedVideo?.youtubeLink}
                      frameBorder="0"
                      width={'100%'}
                      height={'700px'}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="lessons_info">
                    <div className="lesson_info_wrapper">
                      <div className="row">
                        <div className="col-md-8 lesson_details">
                          <div className="lesson_details_wrapper">
                            <div className="lesson_details_title">
                              <p>{selectedChapter.title}</p>
                              <h2>{selectedVideo?.title}</h2>
                              <p>{selectedVideo?.description}</p>
                            </div>
                            <div className="lesson_details_content">
                              <div className="details_content">
                                <p>{selectedVideo?.desc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 lesson_toc">
                          <h1>Hello</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};
export default ViewLearn;
