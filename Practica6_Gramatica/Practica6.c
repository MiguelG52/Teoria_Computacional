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
void mensajeExito(){
    printf("La cadena pertenece a la gramatica\n");
}
void reglaProduccionA(int inicio, String expresion){
    printf("%c ", *(expresion+inicio));
    if (*(expresion+inicio) == '\0') mensajeExito();
    else if(*(expresion+inicio) == 'a') reglaProduccionE(inicio+1, expresion);
    else mensajeError();
}
void reglaProduccionB(int inicio, String expresion){
    printf("%c ", *(expresion+inicio));
    if (*(expresion+inicio) == '\0') mensajeExito();
    else if(*(expresion+inicio) == 'b') reglaProduccionE(inicio+1, expresion);
    else mensajeError();
}
void reglaProduccionE(int inicio, String expresion){
    printf("%c ", *(expresion+inicio));
    if(*(expresion+inicio) == '\0') mensajeExito();
    else if(*(expresion+inicio) == 'a') reglaProduccionB(inicio+1, expresion);
    else if(*(expresion+inicio) == 'b') reglaProduccionA(inicio+1, expresion);
    else if(*(expresion+inicio) == ' ') reglaProduccionE(inicio+1, expresion);
    else mensajeError();
}

int main(){
    //Limpiamos el buffer de entrada de datos
    fflush(stdin);
    //Reservados espacio de memoria para una cadena de maximo 100 caracteres
    String cad = malloc(100*sizeof(100));
    printf("***Evaluador de gramatica***\n");
    printf("Definida por las siguientes reglas de produccion:\n1.E -> aB | bA | E\n2.A -> aE\n3.B -> bE\n******\n\n");
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
    return 0;
}