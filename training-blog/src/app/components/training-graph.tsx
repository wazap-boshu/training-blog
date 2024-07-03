import { FC } from "react";
import { Training } from "../models/training";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { regressionLIne } from "../utils/stats";

interface TrainingGraphProps {
  trainings: Training[],
}

export const TrainingGraph: FC<TrainingGraphProps> = (props) => {
  const { trainings } = props;

  const data = trainings.sort((a, b) => a.date.getTime() - b.date.getTime()).map(training => {
    return {
      date: training.date.getTime(),
      // 重量×回数÷40＋重量
      estimatedMax: training.weight * training.reps / 40 + training.weight,
    }
  })

  const { a, b } = regressionLIne(data.map(d => { return { x: d.date, y: d.estimatedMax } }))

  const regressionLineData = (() => {
    if (!data.length) return []
    return [
      { date: data[0].date, regressionY: a * data[0].date + b },
      { date: data[data.length - 1].date, regressionY: a * data[data.length - 1].date + b }
    ]
  })()

  return (
    <LineChart width={500} height={400} data={[...data, ...regressionLineData]}>
      <Line type="monotone" dataKey="estimatedMax" stroke="#8884d8" />
      <Line type="monotone" dataKey="regressionY" stroke= "#a08100" />
      <CartesianGrid stroke="#ccc" />
      <XAxis
        dataKey="date"
        domain={['dataMin', 'dataMax']}
        tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
        type="number"
      />      
      <YAxis dataKey="estimatedMax" />
    </LineChart>
  )
}