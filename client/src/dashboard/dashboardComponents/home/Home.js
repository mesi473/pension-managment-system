import React from 'react'
import { Chart } from 'react-charts'
import { Line,Bar,Pie,Doughnut } from 'react-chartjs-2';
import {useSelector} from 'react-redux';



export default function Home() {
    const totalExpense=useSelector(state=>state.getIncomeAndExpense.total.expense);
    const totalIncome=useSelector(state=>state.getIncomeAndExpense.total.income);
    function TotalExpense(){
      let expense=0;
      for(let i=0;i<totalExpense.length;i++){
          expense=expense + parseFloat(totalExpense[i].amount);
      }
      return expense;
    }

    function TotalIncome(){
        let income=0;
        for(let i=0;i<totalIncome.length;i++){
            income=income + parseFloat(totalIncome[i].Standard)*150 + parseFloat(totalIncome[i].Family)*300 + parseFloat(totalIncome[i].Commen)*120;
        }
        return income;
    }
    function income(){
      const data=[]
      let  incomes=0
      for(let i=0;i<totalIncome.length;i++){
       incomes=parseFloat(totalIncome[i].Standard)*150 + parseFloat(totalIncome[i].Family)*300 + parseFloat(totalIncome[i].Commen)*120;
        data.push(incomes);
      }
      return data;
    }
    function expenses(){
      let expense=[];
      for(let i=0;i<totalExpense.length;i++){
          expense.push(parseFloat(totalExpense[i].amount))
      }
      return expense;
    }
    function incomeLength(){
        let j=[];
        let m=0
        for(let i=0;i<totalIncome.length;i++){
            m=m+2*i
            j.push(m)
        }
        return j
    }
    const lineGraphData = {
      labels: incomeLength(),
      datasets: [
          {
              label: `total Income = ${TotalIncome()}`,
              fill: false,
              lineTension: 0.5,
              backgroundColor1: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: income(),
              backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
          }
      ]
    }
    function expenseLength(){
        let j=[];
        let m=0
        for(let i=0;i<totalExpense.length;i++){
            m=m+2*i
            j.push(m)
        }
        return j
    }
    const lineExpenseGraphData = {
      labels: expenseLength(),
      datasets: [
          {
              label: `total Expense = ${TotalExpense()}`,
              fill: false,
              lineTension: 0.5,
              backgroundColor1: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: expenses(),
              backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
          }
      ]
    }
    function subIncome(){
        if(totalIncome.length>0){
          let income=0;
          let data=[]
          let data2=[];
          let temp=[]
          for(let i=0;i<totalIncome.length;i++){
              income=income + parseFloat(totalIncome[i].Standard)*150 + parseFloat(totalIncome[i].Family)*300 + parseFloat(totalIncome[i].Commen)*120;
              data.push(income)
          }
          let j=0
          for(let i=0;i<totalIncome.length;i++){
            temp.push(j)
            temp.push(data[i]);
            data2.push(temp);
            temp=[];
            j=5*i+50;
          }
          return data2;
        }else{
          return []
        }
    }
    function subExpense(){
      if(totalExpense.length===0){
        return []
      }else{
        let expense=[];
        let temp=[]
        let j=0
        for(let i=0;i<totalExpense.length;i++){
            temp.push(j)
            temp.push(parseFloat(totalExpense[i].amount));
            expense.push(temp);
            temp=[]
            j=5*i+50;
        }
        return expense;
      }
    }
    const data = React.useMemo(
        () => [
            {
                label: 'income',
                data: subIncome()
            },
            {
                label: 'expense',
                data: subExpense()
            }
        ],
        []
    )
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    return (
        
        <div className="home">
            <div className="graphs" style={{ width: '100%', height: '500px', background: "#fff" }}>
                <Chart data={data} axes={axes} />
            </div>
            <div>
              <h3>Total Income= {TotalIncome()}</h3>
              <h3>Total Expense= {TotalExpense()}</h3>
              <h3>profit ={TotalIncome()-TotalExpense()}</h3>
              {TotalIncome()-TotalExpense()<0? <p>negative profit indicate you loss</p>:<p>you company is profitable</p>}
            </div>
            <Line
                style={{background:"#fff"}}
                data={lineGraphData}
                options={{
                    title: {
                        display: true,
                        text: `income`,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
            <Line
                style={{background:"#fff"}}
                data={lineExpenseGraphData}
                options={{
                    title: {
                        display: true,
                        text: `expense`,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}
