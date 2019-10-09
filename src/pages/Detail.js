import React from 'react';
import Header from './Header'
import './Detail.css'

const Detail = () => {
    return (
        <div className="detail">
            <Header />
            <div className='detailBody'>
              <p style={{fontWeight:"bolder",fontSize:40}}>1차 뒤풀이</p>
              <p style={{fontWeight:"bolder",fontSize:20}}>예금자 : 이동훈</p>
              <p style={{fontWeight:"bolder",fontSize:20}}>2019-10-07</p>
              <p style={{fontWeight:"bolder",fontSize:20}}>₩ 10,000</p>             
            </div>
            <div className='detailMoney'>
              입금하기
            </div>
        </div>
    );
};

export default Detail;