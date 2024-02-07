 function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){

        window.alert('falta o numero')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (c <= 10; c <=10; c ++ ){
            let item = document.createElement('option')
            item.text =` ${n} * ${c} = ${n*c}` 
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }

 }