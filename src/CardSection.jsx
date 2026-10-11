import InfoCard from "./InfoCard"

const CardSection = () => {
    return (
        <section className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">カードセクション</h2>
            <div className="flex flex-wrap justify-center">
                <InfoCard titleName="競技プログラミング"/>
                <InfoCard titleName="一週間食堂"/>
                <InfoCard titleName="センチピード"/>
            </div>
        </section>
    )
}

export default CardSection