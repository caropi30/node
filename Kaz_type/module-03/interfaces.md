# Interfaces en TypeScript

## Tipo Estructurales

1. **Sistema de tipos estructural**:
    * En TypeScript, un sistema de tipos estructural significa que la compatibilidad de tipos se basa en la estructura o forma de los datos. Si dos tipos tienen la misma estructura (es decir, los mismos miembros con los mismo tipos), se consideran compatibles, incluso si no están relacionados explícitamente
2. **Comparación con Sistema de Tipos Nominal**:
    * En contraste, un sistema de tipos nominal requiere que los tipos sean explícitamente declarados como compatibles. En estos sistemas, dos tipos no pueden ser asignados entre si a menos que haya una relación explicita entre ellos, como herencia o implementación de interfaces.
3. **Ejemplo de Trasferencia de Interfaces**:
    * En un sistema de tipos estructural como TypeScript, puedes tener dos interfaces diferentes con los mismos miembros, y TypeScript las considerara compatibles. Esto permite una mayor flexibilidad y reutilización de tipos.

## Ejemplo - lab.ts

* `Person` y `Employee` tiene los miembros `name` y `age`.
* Aunque `Employee` tiene un miembro adicional `salary`, sigue siendo compatible con `Person` por que `Person` no require ese miembro.
* Por lo tanto, se puede asignar un `Employee` a una variable de tipo `Person`.
