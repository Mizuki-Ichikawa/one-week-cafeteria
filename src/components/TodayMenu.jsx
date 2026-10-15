const TodayMenu = () => {
    return (
        <div className="bg-bg-cream p-3 border-b border-main border-border-tan">
            <h2 className="text-xl font-semibold text-text-warm-brown">本日の献立</h2>
            {/* 献立表部分 */}
            <div className="grid grid-cols-1 gap-2">
                <div className="inline-flex gap-1 mt-3 p-2 w-9/10 border border-border-tan rounded bg-bg-ivory">
                    <span className="text-text-warm-brown bg-bg-cream aspect-1.5/1 rounded-xl text-center">朝</span>
                    <span className="">なし</span>
                </div>

                <div className="inline-flex gap-1 mt-3 p-2 w-9/10 border border-border-tan rounded bg-bg-ivory">
                    <span className="text-text-warm-brown bg-bg-cream aspect-1.5/1 rounded-xl text-center">昼</span>
                    <span className="">なし</span>
                </div>

                <div className="inline-flex gap-1 mt-3 p-2 w-9/10 border border-border-tan rounded bg-bg-ivory">
                    <span className="text-text-warm-brown bg-bg-cream aspect-1.5/1 rounded-xl text-center">夜</span>
                    <span className="">なし</span>
                </div>

                <div className="flex w-9/10 justify-end">
                    <a 
                       className="text-text-warm-brown underline"
                    >
                        献立表を作成する
                    </a>
                    ＞
                </div>

                
            </div>
            
        </div>
    )
}
export default TodayMenu