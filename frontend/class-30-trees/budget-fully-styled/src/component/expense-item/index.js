import './_expense-item.scss'
import React from 'react'
import ExpenseForm from '../expense-form'

let renderIf = (t, c) => t ? c : undefined

class ExpenseItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
  }

  render(){
    let {expense} = this.props
    return (
      <li 
        className='expense-item'
        onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>

        {renderIf(!this.state.editing, 
          <div>
            <p> title: {expense.title} </p>
            <p> price: {expense.price} </p>
            <button onClick={() => this.props.expenseRemove(expense)}>
              delete 
            </button>
          </div>)}

        {renderIf(this.state.editing, 
          <ExpenseForm 
            expense={expense}
            submitTitle='update expense'
            handleSubmit={(data) => {
              data.id = expense.id  
              this.props.expenseUpdate(data)
            }} />)}
      </li>
    )
  }
}

export default ExpenseItem
