import React, {Component} from "react";
import ReactDOM from "react-dom";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";
import './app.css'

export default class App extends Component{
    maxId = 100
    state = {
            todoData: [
                this.createTodoItem("Create header-app"),
                this.createTodoItem("Add form-app"),
                this.createTodoItem("Make awesome app"),
            ],
            term:'',
            filter:'all'
        }

    createTodoItem(label){
        return{
            label,
            important:false,
            done:false,
            id: this.maxId++
        }
    }
    
    detetedItem = (id) => {
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=> el.id === id)
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return{
                todoData:newArray
            }
        })
    }
    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem]
            return{
                todoData:newArr
            }
        })
    }

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el)=> el.id === id)
            
            const oldItem = arr[idx]
            const newItem = {...oldItem, [propName]: !oldItem[propName]}
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ]
            
    }

    onToggleImportant = (id) =>{
        this.setState(({todoData})=>{
            
            return{
                todoData:this.toggleProperty(todoData, id, 'important')
            }
        })
    }
    onToggleDone = (id) =>{
        this.setState(({todoData})=>{
            
            return{
                todoData:this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }
    onFilterChange = (filter) => {
        this.setState({filter})
    }


    search(todoData, term){
        if(term.length === 0){
            return todoData
        }
        return todoData.filter((todo)=>{
            return todo.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    filter(todoData, filter){
        switch(filter){
            case 'all':
                return todoData
            case 'active':
                return todoData.filter((item) => (!item.done))
            case 'done':
                return todoData.filter((item) => (item.done))
            default:
                return todoData
        }
    }



    
render(){
    const {todoData, term, filter}= this.state
    const visibleItems = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
        <div className="wrapper">
        <AppHeader todo={todoCount} done={doneCount} />
        <div>
        <SearchPanel onSearchChange={this.onSearchChange}/>
        <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList todos={visibleItems} onDeleted={this.detetedItem}  
        onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
        <ItemAddForm onAddItem={this.addItem}/>
    </div>     
    )
}
}

