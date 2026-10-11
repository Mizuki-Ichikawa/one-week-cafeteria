const JSXExample1 = () => {
    // 果物の配列
    const fruits = ['りんご', 'バナナ', 'オレンジ', 'ブドウ']

    // ユーザ情報の配列
    const users =[
        {id: 1, name: "市川瑞貴", age: 23},
        {id: 2, name: "佐藤花子", age: 30},
        {id: 3, name: "鈴木一郎", age: 28}
    ]
    
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">配列の表示例</h1>

            {/* 単純な配列の表示 */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">果物一覧</h2>

                <ul className="bg-white rounded-lg shadow-md p-4">
                    {fruits.map((fruit, index) => (
                        <li key={index} className="py-2 px-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                            🍎{fruit}
                        </li>
                    ))}
                </ul>
            </div>

            {/* オブジェクトの配列の表示 */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">ユーザ一覧</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    {user.name.charAt(0)}    
                                </div>
                                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                            </div>
                            <p className="text-gray-600">年齢: {user.age}歳</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default JSXExample1