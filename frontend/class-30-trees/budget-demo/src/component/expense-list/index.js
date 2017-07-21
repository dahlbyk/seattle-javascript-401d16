import React from 'react'
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class ExpenseList extends React.Component {
  render(){
    return (
      <div className='expense-list'>
        <ul>
          {this.props.expenses.map((item, i) => 
            <ExpenseItem 
              key={i}
              expense={item}
              expenseRemove={this.props.expenseRemove}
              expenseUpdate={this.props.expenseUpdate}
              />
          )}
        </ul>
      </div>
    )
  }
}

export default ExpenseList
