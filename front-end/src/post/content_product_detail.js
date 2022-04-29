import React from 'react';

const ContentProductDetail = props => {
    return (
        <div>
            <h4 className="title">CHI TIẾT SẢN PHẨM</h4>
            <h4 className="title-child">
                {
                    props.title
                }
            </h4>
            <div className="text">
                {
                    props.content.map((item, index) => (
                        <p key={index} style={{ textAlign: 'justify' }}>
                            {item}
                        </p>
                    ))
                }
            </div>
        </div>
    );
}

export default ContentProductDetail;
