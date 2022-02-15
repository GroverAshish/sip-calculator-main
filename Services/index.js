const sip_ctr = async (data) => {
  // Calculation of Total Return
  let months = data.period * 12
  let rate = (data.rate - data.inflationRate)/12
  let monInvest = data.monInvest
  let returnSip = 0
  let result = {}
  const graph = []

  for (let i = 1; i <= months; i++) {
    returnSip += monInvest * Math.pow(1 + rate / 100, i)
    let obj = {
        month: i,
        return: returnSip
    }
      graph.push(obj)
  }

  result.period = data.period
  result.rate = data.rate
  result.inflationRate = data.inflationRate
  result.moneyInvested = months*monInvest
  result.return = returnSip
  result.graph = graph
  

  return result  

}
module.exports = {
  sip_ctr
};
