function add(x, y) {
    const total = x + y;
    return total;
  }

  function subtract(x, y) {
    return x - y;
  }

  function divide(x, y) {
    return x / y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function onSubmit(e) {
    e.preventDefault();
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);

    const calc = document.querySelector("select").value;
    switch (calc) {
      case "add":
        document.querySelector("p.output").innerHTML = add(x, y);
        break;
      case "subtract":
        document.querySelector("p.output").innerHTML = subtract(x, y);
        break;
      case "divide":
        document.querySelector("p.output").innerHTML = divide(x, y);
        break;
      case "multiply":
        document.querySelector("p.output").innerHTML = multiply(x, y);
        break;
      default:
        break;
    }
  }

  document.querySelector("button.reset").addEventListener("click", () => {
    document.querySelector(".output").textContent = "";
  });
