
export const reducer = (state, action) => {
    switch (action.type) {
        case "SET":
            return {
                arr: action.payload
            }
        case "ADD":
            fetch(`http://localhost:7777/todos/`,{
                method: "POST",
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return {
                arr: [...state.arr, action.payload]
            }
        case "REMOVE":
            fetch(`http://localhost:7777/todos/${action.payload}`,{
                method: "DELETE",
            }).then(res => console.log(res))
            return {
                arr: state?.arr?.filter(item => item.id !== action.payload)
            }
        case "EDIT":
            fetch(`http://localhost:7777/todos/${action.payload.id}`,{
                method: "PATCH",
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let found = state.arr.findIndex((obj => obj.id == action.payload.id))
            state.arr[found].title = action.payload.title
            state.arr[found].completed = action.payload.completed
            state.arr[found].date = action.payload.date
            return {
                arr: state.arr
            }   
        default:
            break;
    }
}