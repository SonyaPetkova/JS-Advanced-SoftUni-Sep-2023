function calculator() {
  let selector1, selector2, resultSelector;

  return {
    init: (s1, s2, rs) => {
      selector1 = document.querySelector(s1);
      selector2 = document.querySelector(s2);
      resultSelector = document.querySelector(rs);
    },
    add: () => {
      const result = Number(selector1.value) + Number(selector2.value);
      resultSelector.value = result;
    },
    subtract: () => {
      const result = Number(selector1.value) - Number(selector2.value);
      resultSelector.value = result;
    },
  };
}

const calculate = calculator();

calculate.init("#num1", "#num2", "#result");
