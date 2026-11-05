// レシピを置いていく

export const recipes = [
    {
        id: 1,
        title: "トマトと卵の炒め物",
        image: "/src/assets/images/main-dish-meat.png",
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

// テスト用データのベース
const baseRecipe = recipes[0];

// 指定した文字数のテスト文章を作る
const makeLongText = (text, length) =>
    text.repeat(Math.ceil(length / text.length)).slice(0, length);

recipes.push(
    // ① descriptionが長い：1,000文字
    {
        ...baseRecipe,
        id: 2,
        title: "【テスト】説明文が長いレシピ",
        description: makeLongText(
            "トマトの酸味と卵のまろやかさを楽しめる炒め物です。食材の特徴や調理のポイントについて詳しく説明しています。",
            1000
        ),
    },

    // ② 材料名が長い：1件だけ80文字
    {
        ...baseRecipe,
        id: 3,
        title: "【テスト】材料名が長いレシピ",
        ingredients: [
            {
                name: makeLongText(
                    "テスト用のとても長い名前が付いたトマト",
                    80
                ),
                quantity: 1,
                unit: "個",
            },
            ...baseRecipe.ingredients.slice(1),
        ],
    },

    // ③ 材料数が多い：30件
    {
        ...baseRecipe,
        id: 4,
        title: "【テスト】材料が30件あるレシピ",
        ingredients: Array.from({ length: 30 }, (_, index) => ({
            name: `テスト材料${index + 1}`,
            quantity: index + 1,
            unit: "g",
        })),
    },

    // ④ 画像が小さい：150×100pxのファイルを別途用意する
    {
        ...baseRecipe,
        id: 5,
        title: "【テスト】画像が小さいレシピ",
        image: "/src/assets/images/test-small-150x100.png",
    },

    // ⑤ 画像が大きい：3000×2000pxのファイルを別途用意する
    {
        ...baseRecipe,
        id: 6,
        title: "【テスト】画像が大きいレシピ",
        image: "/src/assets/images/test-large-3000x2000.png",
    },

    // ⑥ 工程数が多い：30工程
    {
        ...baseRecipe,
        id: 7,
        title: "【テスト】工程が30件あるレシピ",
        steps: Array.from(
            { length: 30 },
            (_, index) =>
                `テスト用の工程${index + 1}です。材料を確認し、次の作業へ進みます。`
        ),
    },

    // ⑦ 工程の説明が長い：1工程だけ1,000文字
    {
        ...baseRecipe,
        id: 8,
        title: "【テスト】工程の説明が長いレシピ",
        steps: [
            baseRecipe.steps[0],
            makeLongText(
                "これは長い工程説明の表示を確認するための文章です。説明文が枠内で折り返され、工程番号や次の工程と重ならず、最後まで読めるかを確認します。",
                1000
            ),
            ...baseRecipe.steps.slice(2),
        ],
    },
    // ⑧ レシピ名が長い：100文字
    {
        ...baseRecipe,
        id: 9,
        title: makeLongText(
            "【テスト】完熟トマトとふんわり卵を使った彩り豊かな炒め物",
            100
        ),
    }

);