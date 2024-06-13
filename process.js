const { createApp } = Vue;

createApp({
    data() {
        return {
        valorDisplay: "0",
        operador: null,
        numeroAtual: null,
        numeroAnterior: null,
        resultadoCalculado: false,
        tamanhoLetra: 50 + "px",
        };
    },
    methods: {
        getNumero(numero) {
            this.ajusteTamanhoDisplay();
            // ajusteTamanhoDisplay();
            if (this.resultadoCalculado) {
                this.valorDisplay = numero.toString();
                this.resultadoCalculado = false;
            } else if (this.valorDisplay === "0") {
                this.valorDisplay = numero.toString();
            } else {
                this.valorDisplay += numero.toString();
            }
        },
        apagar() {
            this.valorDisplay = "0";
            this.operador = null;
            this.numeroAnterior = null;
            this.numeroAtual = null;
            this.resultadoCalculado = false;
            this.tamanhoLetra = 50 + "px"
        },
        decimal() {
            if (!this.valorDisplay.includes(".")) {
                this.valorDisplay += ".";
            }
        },
        operacoes(operacao) {
            // if(this.valorDisplay.content("op"))
            if (this.numeroAtual !== null) {
                const displayAtual = parseFloat(this.valorDisplay);
                if (this.operador !== null) {
                        switch (this.operador) {
                            case "+":
                                this.valorDisplay = ((this.numeroAtual + displayAtual ).toFixed(5)* 1).toString();
                                break;
                            case "-":
                                this.valorDisplay = ((this.numeroAtual - displayAtual ).toFixed(5)* 1).toString();                
                                break;
                            case "/":
                                this.valorDisplay = ((this.numeroAtual / displayAtual ).toFixed(5)* 1).toString();                
                                break;
                            case "*":
                                this.valorDisplay = ((this.numeroAtual * displayAtual ).toFixed(5)* 1).toString();
                                break;
                        }
                        this.numeroAnterior = this.numeroAtual;
                        this.numeroAtual = null;
                        this.operador = null;
                        if (this.valorDisplay === "Infinity") {
                            this.valorDisplay = "Impossivel";
                        }
                        if (this.valorDisplay === "NaN") {
                            this.valorDisplay = "Impossivel";
                        }
                        // if(this.valorDisplay.includes(".")){
                        // const numDecimal = parseFloat(this.valorDisplay);
                        // this.valorDisplay = (numDecimal.toFixed(2)).toString;
                } 
                else {
                    this.numeroAnterior = displayAtual;
                }
            }
            this.operador = operacao;
            this.numeroAtual = parseFloat(this.valorDisplay);
            if (this.operador !== "=") {
                this.valorDisplay = "0";
            } 
            else {
                this.resultadoCalculado = true;
            }
            this.ajusteTamanhoDisplay();
        },
        ajusteTamanhoDisplay(){
            if(this.valorDisplay.length >= 15){
                this.tamanhoLetra = 10 + "px"
            }
            else if(this.valorDisplay.length >= 10){
                this.tamanhoLetra = 20 + "px"
            }
            else if(this.valorDisplay.length >= 6){
                this.tamanhoLetra = 30 + "px";
            }
            else{
                this.tamanhoLetra = 50 + "px";
            }
            // else if(this.valorDisplay.length >= 0){
            //     this.tamanhoLetra = 50 + "px";
            // }
        },
    },
}).mount("#app");
