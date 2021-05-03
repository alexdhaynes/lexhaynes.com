
import Icon from '@components/Icon'


const ItemList = ({list}) => {
    return (
        <div className="space-y-4">
        {
            list.map((item, i) => (
                <div key={`ItemListItem-${i}`} className="bg-white rounded-xl flex items-center p-2">
                
                    <span className="relative overflow-hidden rounded-full w-12 h-12">
                    <Icon 
                        src={item.image} 
                        alt={item.label}
                    />
                    </span>

                    <span className="ml-3">
                        <p className="text-lg font-medium sans-serif">{item.label}</p>
                    </span>
                </div>
            ))
        }
        </div>
    )
}

const ListCard = ({title, list}) => {
    return (
        <div className="mb-10 mx-auto md:mb-0 w-3/4 md:w-full rounded-2xl bg-gray-100 p-5 pb-10 table">
            <h2 className="font-bold text-xl text-center mb-3">{title}</h2>
            <ItemList list={list} />
        </div>
    )
}

export {
    ListCard,
    ItemList
}