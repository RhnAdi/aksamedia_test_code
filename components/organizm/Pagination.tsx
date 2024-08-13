export interface PaginationProps {
    count: number;
    active: number;
    onChangePage: (page: number) => void
}

export default function Pagination(props: PaginationProps) {
    return(
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <button 
                        onClick={() => {
                            if(props.active == 0){
                                return
                            }
                            props.onChangePage(props.active - 1)
                        }} 
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Previous
                    </button>
                </li>
                {
                    new Array(props.count).fill(0).map((_, i) => {
                        return(
                            <li>
                                <button
                                    onClick={() => {
                                        if(props.active == i+1 ){
                                            return
                                        }
                                        props.onChangePage(i+1)
                                    }}
                                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${props.active == i+1 ? "bg-blue-500 text-white" : ""}`}
                                >
                                    {i+1}
                                </button>
                            </li>
                        )
                    })
                }
                <li>
                    <button 
                        onClick={() => {
                            if(props.active == props.count){
                                return
                            }
                            props.onChangePage(props.active + 1)
                        }}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}