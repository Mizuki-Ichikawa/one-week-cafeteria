const InfoCard = (props) => {
    const title = props.titleName;
    
    return (
        <div className="bg-white rounded-lg shadow-md p-6 m-4">
            <h3 className="text-lg font-semibold mb-2">{props.titleName}</h3>
            <p className="text-gray-600">
                これは{props.titleName}を表示するカードコンポーネントです。
            </p>
        </div>
    )
}

export default InfoCard