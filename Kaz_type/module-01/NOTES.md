# Notas ☕📝

Para trabajar con TypeScript es necesario tener instalado el compilador de **TypeScript** y en algunos casos el modulo de **typescript-language-server**.

#### **Instalación**:

1. typescript

```powershell
$ npm install typescript -g
```

2. typescript-language-server (solo en entornos diferentes a vscode y visual studio)

```powershell
$ npm install typescript-language-server -g
```

#### **Comprobación de la instalación**:

En un terminal/consola escribir el comando `tsc`. Si TypeScript esta instalado, vera la version y una lista de comandos del compilador.

#### **Opciones del compilador**

Las opciones del compilador permiten controlar como se genera el código Javascript a partir del código TypeScript de origen. Se pueden pasar las opciones por linea de comandos o mediante un archivo de tipo JSON denominado _tsconfig.json_.

Existen numerosas opciones del compilador. se puede acceder a una lista completa en la [documentación de las interfaces de la linea de comandos de tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html). Estas son algunas de las mas "comunes".

- `--noImplicitAny` : [**TYPE**: boolean: `true` si es strict; **Default**: `false` de otro modo].
- `--noEmitOnError` : [**TYPE**: boolean: `false`; **Default**: Deshabilita la emisión de archivos si se notifica algún error de comprobación de tipos]
- `--target` : [**TYPE**: `es3`, `es5`, `es6/es2015`, `es2016`, ..., `esnext`; **Default**: ES3]
- Opciones de directorio

Para controlar la compilación, puede usar las opciones del compilador con el comando `tsc`, incluidas las siguientes:

- La opción `--noImplicitAny` indica al compilador que genere errores en expresiones y declaraciones con un tipo `any` implícito. Por ejemplo:

```powershell
$ tsc utility_functions.ts --noImplicitAny
```

- La opción `--target` especifica la version de destino de ECMAScript para el archivo JavaScript. En este ejemplo se compila un archivo JavaScript compatible con ECMAScript 6:

```powershell
$ tsc utility_functions.ts --target "ES2015"
```

### Ejercicio: Configuración de un proyecto en TypeScript

- Crear un directorio de nombre **module-01** y dentro crear un archivo **module01.ts**

#### **Generación de un archivo tsconfig.json**

El compilador de TypeScript aplica el comportamiento predeterminado cuando se compila código fuente TypeScript. Aun asi, es posible modificar las opciones del compilador de TypeScript si se agrega un archivo _tsconfig.json_ a la raíz de la carpeta de proyecto TypeScript. Este archivo define la configuración del proyecto, como las opciones del compilador y los archivos que debe incluir.

Se puede usar la opción `init` del compilador para generar un archivo _tscofing.json_ con las opciones predeterminadas.

1. Abrir un terminal o linea de comandos y escribir:

```powershell
$ tsc --init
```

Observe que el nuevo archivo _tsconfig.json_ se a creado, de no ser asi actualice o refresque la vista de archivos.

2. en el archivo _tsconfig.json_ podrá ver todas las opciones que ofrece el compilador, muchas de las cuales están deshabilitadas y tiene una description de su uso.

3. Busque la opción de destino y cámbiela a `"ES2015"`.

4. Actualizar el archivo _tsconfig.json_ para que el compilador guarde todos los archivos JavaScript en una nueva carpeta.

- Crear una carpeta de nombre _build_ (Puede llamarla como quiera).
- En el archivo _tsconfig.json_, busque la opción `outDir`, quiete el comentario y establezca la ruta al directorio. en el caso de ser en la raíz puede escribir solo `build`

5. escriba el comando `tsc`. Este comando lee el archivo _tsconfig.json_ y restablece las opciones del proyecto.

#### Compilación de typeScript en JavaScript

en este caso vamos a crear una función hecha en Javascript dentro del archivo de TypeScript e identificar como en el caso de VSCode ya se tiene integrada la compatibilidad con TypeScript para realizar la comprobación de tipo.

> **Nota** 📘: al compilar un único archivo por linea de comandos usando `$ tsc module01.ts`, el compilador omite el archivo _tsconfig.json_.

Para compilar todos los archivos `.ts` de la carpeta use el comando `tsc` sin ningún nombre de archivo. Este comando compila todos los archivos `.ts` a javascript dentro de la carpeta `build`

Abra el archivo _module01.ts_ en una ventana dividida y en la otra division el archivo _module01.js_, fíjese que la única diferencia hasta el momento son las anotaciones de `TIPO`.

En la linea de comandos escriba lo siguiente:

```powershell
$ node ./build/module01.js
```
