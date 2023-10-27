"use client"

const Classes = (props: any) => {
    const { params } = props;
    console.log(params)
    return (
        <div>
            <h1>Day:{params.classes[0]} </h1>
            <h1>class:{params.classes[1]} </h1>
        </div>
    );
}

export default Classes;