import React from 'react';
import styling from './ProductInfo.module.css';
import Price from './Price.jsx';

const ProductInfo = ({category, name, defaultPrice, salePrice}) => {
    // console.log('product info at stake');
    if (category !== undefined) {
        return (
            <div>
                {/* DoYouSeeMe */}
                {/* <h3>{props.category}</h3> */}
                <h3 className={styling.category}>{category.toUpperCase()}</h3>
                <h1 className={styling.name}>{name}</h1>
                <Price defaultPrice={defaultPrice} salePrice={salePrice} />
            </div>
        )
    }
    return (
        <div>Product Info Incoming</div>
    )
}

// class ProductInfo extends React.Component {
//     constructor({props}) {
//         super({props})
//         this.state = {
//             category: this.props.category,
//             expandedName: this.props.name,
//         }
//     }

//     // Stars: Create StarRating Component that makes a request to get all the ratings
//     // Reviews: Simple Hyperlink to Reviews Section

//     render() {
//         return (
//             <div>
//                 <h3>{this.state.category}</h3>
//                 {/* <h3 className="category" className={styling.category}>{(this.state.category).toUpperCase()}</h3>
//                 <h1 className="name" className={styling.name}>{this.state.expandedName}</h1> */}
//             </div>
//         )
//     }
// }

export default ProductInfo;