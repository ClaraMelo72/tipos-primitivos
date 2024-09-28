function greet (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let city = document.querySelector("#city").value;
    alert("Olá, " + name + ", você tem " + age + " anos e mora em " + city)
}

function calculate(event) {
    event.preventDefault();
    let num1 = parseFloat(document.querySelector("#num1").value);
    let operation = document.querySelector("#operation").value;
    let num2 = parseFloat(document.querySelector("#num2").value);
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero!";
            break;
        default:
            result = "Operação inválida";
    }

    alert("O resultado é: " + result);
}

function calculateArea(event) {
    event.preventDefault(); 

    
    const base = parseFloat(document.querySelector("#base").value);
    const height = parseFloat(document.querySelector("#height").value);
    
    
    const area = (base * height) / 2;

    
    alert("A área do triângulo é: " + area);
}

function calculateAverage(event) {
    event.preventDefault(); 

    
    const grade1 = parseFloat(document.querySelector("#grade1").value);
    const grade2 = parseFloat(document.querySelector("#grade2").value);
    const grade3 = parseFloat(document.querySelector("#grade3").value);

    
    const media = (grade1 + grade2 + grade3) / 3;

    var baseMessage = "A média é: " + media.toFixed(2) + "";
    alert(media >=7 ? baseMessage + " (Aprovado)" : baseMessage + " (Reprovado)");
}

function calculateFinalPrice(event) {
    event.preventDefault(); 

    
    const originalPrice = parseFloat(document.querySelector("#originalPrice").value);
    const discountPercentage = parseFloat(document.querySelector("#discountPercentage").value);

    
    const discountAmount = (originalPrice * discountPercentage) / 100;

    
    const finalPrice = originalPrice - discountAmount;

    
    alert("O preço final do produto de R$" + originalPrice.toFixed(2) + " com desconto de " + discountPercentage + "% é de R$" + finalPrice.toFixed(2))
}


function calculateTax(event) {
    event.preventDefault(); 

    const grossSalary = parseFloat(document.querySelector("#grossSalary").value);
    let taxAmount = 0;

    
    if (grossSalary <= 2500) {
        taxAmount = 0; 
    } else if (grossSalary <= 5000) {
        taxAmount = (grossSalary * 0.1); 
    } else {
        taxAmount = (grossSalary * 0.2); 
    }

    const netSalary = grossSalary - taxAmount;

    
    alert("O imposto de renda sobre um salário bruto de R$" + grossSalary.toFixed(2) + " é: R$" + taxAmount.toFixed(2)+
        ". O Salário líquido após imposto: R$ $" + netSalary.toFixed(2))
    
}


function convertCurrency(event) {
    event.preventDefault(); 

    const amount = parseFloat(document.querySelector("#amount").value);
    const exchangeRate = parseFloat(document.querySelector("#exchangeRate").value);
    const currencyTo = document.querySelector("#currencyTo").value;

    
    const convertedAmount = amount * exchangeRate;

    
    alert("O valor de R$" + amount.toFixed(2) + " convertido para $" + currencyTo + " é: $" + convertedAmount.toFixed(2));
}



function convertToFahrenheit(event) {
    event.preventDefault(); 

    const celsius = parseFloat(document.querySelector("#celsius").value);

    
    const fahrenheit = (celsius * 9 / 5) + 32;

    
    alert(celsius + "ºC é igual a " + fahrenheit + "ºF");
}


function calculateIMC(event) {
    event.preventDefault(); 

    
    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);

    
    const imc = peso / (altura * altura);

    
    alert("O IMC é: " + imc.toFixed(2));
}







