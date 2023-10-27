"use client"
const ProductPrice = (props: any) => {
    return (
        <div>
            <button className="button" onClick={() => alert(props.price)}>Click Price</button>
        </div>
    )
}

export default ProductPrice;