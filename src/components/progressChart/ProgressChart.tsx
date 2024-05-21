
export const ProgressChart = (props: {threshold:number}) => {
    let color="Silver"
    let riskStatus=""
    //let color =  props.value===1 ? "red" : "green"
    if (props.threshold===1){
        color="#6633FF"
        riskStatus="Low Risk"
    }
    if (props.threshold===2){
        color="#CCFF00"
        riskStatus="Medium Risk"
    }
    if (props.threshold===3){
        color="#FFFF00"
        riskStatus="Watch"
    }
    if (props.threshold===4){
        color="#FF6600"
        riskStatus="Advisory"
    }
    if (props.threshold===5){
        color="#CC0000"
        riskStatus="Warning"
    }
    
  return (
    <div><progress color={color} value={props.threshold} max="5">{riskStatus}sdfsfs</progress></div>
  )
}
