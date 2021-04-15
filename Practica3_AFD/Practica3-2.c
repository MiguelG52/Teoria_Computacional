#include<stdio.h>
#include<stdlib.h>
#define string char * 
// Genera una salida del programa
void salida(){
    printf("\nLa expresion ingresada no pertenece al lenguaje");
    exit(0);
}
//Funcion delta, cambia el estado q, dependiendo cual sea la letra actual de la cadena y el estado q actual
int cambiaEstado(char letra, int estado){
    switch(estado){
        //Evalua si el estado actual es 0,1,2,3
        case 0:
            //si la letra actual de la cadena es 0 o 1 cambia de estado dependiendo como este definido el automata
            if(letra == '0') estado = 1;
            else if(letra  =='1') estado = 2;
            //si la funcion contiene una cadena que no pertenece al lenguaje, genera una salida del programa
            else salida();
        break;
        case 1:
            if(letra == '0') estado = 1;
            else if(letra == '1') estado = 3;
            else salida();
        break;
        case 2:
            if(letra == '0') estado = 1;
            else if(letra =='1') estado = 2;
            else salida();
        break;
        case 3:
            if(letra == '0') estado = 1;
            else if(letra == '1') estado = 4;
            else salida();
        break;
        case 4:
            if(letra == '0') estado = 1;
            else if(letra == '1') estado = 2;
            else salida();
        break;
    }
    //Regresa el estado q actual 
    return estado;
}

int main(void){
    char expresion[30];
    int estadoInicial = 0, estadoFinal = 4, i=0;
    printf("\n*******Automata 2*********");
    printf("\nIngrese la expresion a evaluar:");
     //lee cadena
    scanf("%[^\n]s", expresion);
    fflush(stdin);
    //recorre la cadena caracter por caracter mientras no sea el caracter nulo 
    while(expresion[i] != '\0'){
        //llama funcion cambio de estado
        estadoInicial = cambiaEstado(expresion[i],estadoInicial);
        i++;
    }
    //evalua si el estado actual es igual al estado final
    estadoFinal == estadoInicial ? printf("\nLa expresion %s es regular", expresion):printf("\nLa expresion %s no es regular", expresion);
    return 0;
}

