import {tagsList} from "../data/tags.js"

const TagList = () =>{
    // tagListに入っているnameフィールドを要素にして新たな配列で保存
    const tagsName = tagsList.map((tag) => (
        <div key={tag.id} 
             className="bg-card-background border border-sub shadow-sm rounded-xl aspect-2/1 text-center p-0.5"
        >
            {tag.name}
        </div>
    ))

    return (
        <div className="p-3">
            <h2 className="text-main text-xl font-semibold ">タグ一覧</h2>
            <div className="flex flex-wrap mt-3 gap-2 ">
                {tagsName}
            </div> 
        </div>
    )
}

export default TagList