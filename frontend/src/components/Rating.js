import React from "react";

export default function Rating(props) {
    const { rating, numReviews } = props;
    return (
        <div className="rating">
            {/* half star: fa fa-star-half-o No star: fa fa-star-o*/}
            <span>
                {/* if rating>=1 than(?) render 1 star. else if (:)rating >= 0.5 than half star. Else no star*/}
                <i className={rating >= 1 ? "fa fa-star" : rating >= 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
            </span>
            <span>
                <i className={rating >= 2 ? "fa fa-star" : rating >= 1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
            </span>
            <span>
                <i className={rating >= 3 ? "fa fa-star" : rating >= 2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
            </span>
            <span>
                <i className={rating >= 4 ? "fa fa-star" : rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
            </span>
            <span>
                <i className={rating >= 5 ? "fa fa-star" : rating >= 4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i>
            </span>
            <span>
                {numReviews + ' reviews'}
            </span>
        </div >
    )
}