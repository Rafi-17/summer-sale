document.getElementById('k-card-1').addEventListener('click', function () {
    const str = getStringFromElement('k-card-1-name');
    const price = getNumberFromElement('k-card-1-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})
document.getElementById('k-card-2').addEventListener('click', function () {
    const str = getStringFromElement('k-card-2-name');
    const price = getNumberFromElement('k-card-2-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }

})
document.getElementById('k-card-3').addEventListener('click', function () {
    const str = getStringFromElement('k-card-3-name');
    const price = getNumberFromElement('k-card-3-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})

//grid 2
document.getElementById('s-card-1').addEventListener('click', function () {
    const str = getStringFromElement('s-card-1-name');
    const price = getNumberFromElement('s-card-1-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})
document.getElementById('s-card-2').addEventListener('click', function () {
    const str = getStringFromElement('s-card-2-name');
    const price = getNumberFromElement('s-card-2-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})
document.getElementById('s-card-3').addEventListener('click', function () {
    const str = getStringFromElement('s-card-3-name');
    const price = getNumberFromElement('s-card-3-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})

//grid 3
document.getElementById('f-card-1').addEventListener('click', function () {
    const str = getStringFromElement('f-card-1-name');
    const price = getNumberFromElement('f-card-1-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})
document.getElementById('f-card-2').addEventListener('click', function () {
    const str = getStringFromElement('f-card-2-name');
    const price = getNumberFromElement('f-card-2-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})
document.getElementById('f-card-3').addEventListener('click', function () {
    const str = getStringFromElement('f-card-3-name');
    const price = getNumberFromElement('f-card-3-price');
    addElement('list', str);
    const previousTotal = getNumberFromElement('total-amount');
    const newTotal = previousTotal + price;
    setText('total-amount', newTotal);
    const previousTotalPrice = getNumberFromElement('total-price');
    const newTotalPrice = previousTotalPrice + price;
    setText('total-price', newTotalPrice);
    if (newTotal >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
        document.getElementById('apply-btn').addEventListener('click', function () {
            const code = getValueFromInput('code');
            if (code === 'SELL200') {
                const discount = newTotal * 0.2;
                const newselltotal = newTotal - discount;
                setText('total-price', newselltotal.toFixed(2));
                setText('total-discount', discount.toFixed(2));
            }
        })
    }
})

document.getElementById('btn-home').addEventListener('click',function(){
    document.getElementById('list').innerText='';
    document.getElementById('total-price').innerText='0';
    document.getElementById('total-discount').innerText='0';
    document.getElementById('total-amount').innerText='0';
})



