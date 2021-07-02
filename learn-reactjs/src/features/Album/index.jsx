import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Top 100 Nhạc Hàn Quốc Hay Nhất',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg'
        },
        {
            id: 2,
            name: 'Top 100 Nhạc Trữ Tình Hay Nhất',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/5/2/5/1525280a10e7fb3e616962761f8900a6.jpg'
        },
        {
            id: 3,
            name: 'Top 100 Nhạc Rap Việt Nam Hay Nhất',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/5/d/4/f5d481d849c26f13b9f1b489b493c1ec.jpg'
        }
    ]

    return (
        <div>
            <h2>Danh sach list album</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;