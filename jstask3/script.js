function Checker(x){
    
    
}

function CredCalc(){
    var x = document.getElementById('amount').value
    var y = document.getElementById('per').value
    var z = document.getElementById('month').value
    if(x!=0 && y!=0 && z!=0){
        x=Number(x)
        y=Number(y)
        z=Number(z)
        if (x>0 && x<=500000) {
            if(y>0 && y<=30){
                document.getElementById('mebl').innerText = (x*(1+(y/100))).toFixed(2)
                document.getElementById('aylq').innerText = ((x*(1+(y/100)))/z).toFixed(2)
            }
            else{
                alert('Duzgun mebleg daxil edin (max 30)')
            }
        }else{
            alert('Duzgun faiz deyeri daxil edin (max 500000)')
        }
        
    }else{
        alert('Inputlarin hamisini doldurun')
    }

}
