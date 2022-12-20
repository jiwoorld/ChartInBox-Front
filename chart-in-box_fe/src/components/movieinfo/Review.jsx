import React from 'react';

function Review() {
    const [like, setLike] = React.useState(0);

    const handleLike = () => {
        setLike(like + 1);
    };

    return (
        <button
            onClick={handleLike}
            style={{
                backgroundColor: 'transparent',
                border: 'none',
            }}
        >
            {like % 2 === 0 ? (
                <img
                    src="../../image/like_empty.png"
                    alt="좋아요"
                    width="18px"
                    height="18px"
                ></img>
            ) : (
                <img
                    src="../../image/good.png"
                    alt="좋아요"
                    width="18px"
                    height="18px"
                ></img>
            )}
        </button>
    );
}

export default Review;
