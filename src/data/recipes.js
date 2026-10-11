// レシピを置いていく

export const recipes = [
    {
        id: 1,
        title: "トマトと卵の炒め物",
        image: "src/assets/images/main-dish-meat.png",
        description: "トマトの酸味と卵のまろやかさを楽しめる、手軽な炒め物です。",
        cookingTime: 10,
        baseServings: 1,
        tagIds: [1, 2, 3],
        ingredients: [
            {
                name: "トマト",
                quantity: 1,
                unit: "個",
            },
            {
                name: "卵",
                quantity: 2,
                unit: "個",
            },
            {
                name: "サラダ油",
                quantity: 1,
                unit: "小さじ",
            },
            {
                name: "しょうゆ",
                quantity: 0.5,
                unit: "小さじ",
            },
            {
                name: "塩",
                unit: "少々",
            },
        ],
        steps: [
            "トマトを洗い、へたを取って一口大に切る。",
            "ボウルに卵を割り入れ、塩を加えて溶きほぐす。",
            "フライパンにサラダ油を入れて中火で熱し、卵を流し入れる。大きく混ぜて、半熟になったら一度取り出す。",
            "同じフライパンにトマトを入れ、軽くやわらかくなるまで炒める。",
            "卵を戻してしょうゆを加え、卵に十分火が通るまで炒め合わせて器に盛る。",
        ],
        nutrition: null,
    },
];