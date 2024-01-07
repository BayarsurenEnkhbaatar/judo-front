import axios from 'axios';
import React, { useState } from 'react';
import { athlete_uri } from '../../../utils/url';

const Test = () => {
  const [data, setData] = useState({ img: '', name: '' });

  const handleUpload1 = async (e) => {
    const form = new FormData();
    form.append('image', e);
    setData({ ...data, img: form });
  };

  const click = async (e) => {
    try {
      const res = await axios.post(athlete_uri, data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input type="file" name='image' onChange={(e) => handleUpload1(e.target.files[0])} />
      <input
        type="text"
        placeholder="sasasa"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <button onClick={click}>sasa</button>
    </div>
  );
};

export default Test;