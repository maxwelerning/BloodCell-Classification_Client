export const computeScore = (predictions: number[]) => {
  const proportions = []
  const proportionsNames = ['EOSINOPHIL', 'LYMPHOCYTE', 'MONOCYTE', 'NEUTROPHIL']
  const sum = predictions.reduce((prev, next) => prev + next, 0)

  for(let i = 0; i < predictions.length; i++){
    let prop = (predictions[i] * 100)/sum
    proportions.push(prop)
  }

  return proportions.map((score, index) => ({
    name: proportionsNames[index],
    value: score
  }))

}