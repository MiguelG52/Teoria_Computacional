#include<stdio.h>
#include<stdlib.h>
//Creamos una constante llamada String para evitar escribir la notacion de apuntadores
#define String char*

//Declaramos funciones para evitar warnings
void reglaProduccionA(int, String);
void reglaProduccionB(int, String);
void reglaProduccionE(int, String);

//Funcion que cuenta la longitud de una cadena
int len(String cadena){
    int len = 0;
    while(*cadena++) len++;
    return len;
}
//Imprime mensaje de error;
void mensajeError(){
    printf("La cadena ingresada no pertenece a la gramatica\n");
}
//Imprime mensaje de exito
void mensajeExito(){
    printf("La cadena pertenece a la gramatica\n");
}
//Regla de produccion A, recibe como parametro un inicio
//El cual indicara la posición donde se empezará a recorrer la cadena 
//que entra como parametro a la funcion
void reglaProduccionA(int inicio, String expresion){
    //El caso base se presenta si la posiciopon inicial de la cadena
    //e igual al caracter nulo, entonces significa que se ha estado
    //recorriendo la cadena sin problemas y ha llegado al final, por lo tanto imprime mensaje de exito
    if (*(expresion+inicio) == '\0') mensajeExito();
    //Si la cadena tiene un caracter'a', entonces se mandará a llamar la regla de producción E una posición, adelante de la actual
    else if(*(expresion+inicio) == 'a') reglaProduccionE(inicio+1, expresion);
    //En caso de que no sea un caracter perteneciente al lenguaje, esta rompera el bucle
    else mensajeError();
}
void reglaProduccionB(int inicio, String expresion){
    if (*(expresion+inicio) == '\0') mensajeExito();
    else if(*(expresion+inicio) == 'b') reglaProduccionE(inicio+1, expresion);
    else mensajeError();
}
void reglaProduccionE(int inicio, String expresion){
    if(*(expresion+inicio) == '\0') mensajeExito();
    else if(*(expresion+inicio) == 'a') reglaProduccionB(inicio+1, expresion);
    else if(*(expresion+inicio) == 'b') reglaProduccionA(inicio+1, expresion);
    else if(*(expresion+inicio) == ' ') reglaProduccionE(inicio+1, expresion);
    else mensajeError();
}

int main(){
    int opc = 1;
    printf("***Evaluador de gramatica***\n");
    printf("Definida por las siguientes reglas de produccion:\n1.E -> aB | bA | E\n2.A -> aE\n3.B -> bE\n");
    do{
        //Limpiamos el buffer de entrada de datos
        fflush(stdin);
        //Reservados espacio de memoria para una cadena de maximo 100 caracteres
        String cad = malloc(100*sizeof(char));
        printf("Ingrese la cadena a evaluar:");
        //Leemos cadena
        scanf("%[^\n]", cad);
        //Redimensionamos la memoria de la cadena por una de la longitud ingredada
        cad = realloc(cad, len(cad)+1);
        //Iniciamos la evaluacion con la regla de produccion 1
        reglaProduccionE(0,cad);
        //Liberamos la cadena de la memoria del sistema
        cad = NULL;
        free(cad);
        printf("\nDesea realizar otra operacion?\nPulse:\n0.No 1.Si\nIngrese opcion:");
        scanf("%d", &opc);
    }while(opc != 0);
    return 0;
}