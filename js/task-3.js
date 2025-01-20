function getElementWidth(content, padding, border) {
    return (Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2);
}



// чи варто розглядати варіант знизу як можливий, чи чим коротший код, тим кращий?


// function getElementWidth(content, padding, border) {
//     const ElementTotalWidth = parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
//     return ElementTotalWidth;
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

