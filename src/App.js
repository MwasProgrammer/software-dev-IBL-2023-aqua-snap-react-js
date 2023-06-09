import React from 'react';
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg}  setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default App;
