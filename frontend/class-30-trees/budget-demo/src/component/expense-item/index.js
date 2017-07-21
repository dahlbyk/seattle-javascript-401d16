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
      <li onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
        {renderIf(!this.state.editing, 
          <div>
            <button onClick={() => this.props.expenseRemove(expense)}>
              delete 
            </button>
            <p> title: {expense.title} </p>
            <p> price: {expense.price} </p>
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
