# 📐 GUÍA COMPLETA CSS GRID - RESUMEN DE ESTUDIO

## **1. SISTEMA DE MEDIDAS EN GRID**

### **Unidades Absolutas:**
- **`px`**: Píxeles fijos (ej: `100px`)
- **`em`**: Relativa al tamaño de fuente del elemento
- **`%`**: Porcentaje del contenedor (ej: `25%`)

### **Unidades Relativas:**
- **`fr` (fraction)**: Distribuye espacio disponible proporcionalmente
  ```css
  grid-template-columns: 1fr 2fr 1fr; /* 25% | 50% | 25% */
  ```

### **Unidades de Viewport:**
- **`vw`**: Porcentaje del ancho de viewport (ej: `70vw`)
- **`vh`**: Porcentaje del alto de viewport

### **Unidades de Contenido:**
- **`auto`**: Se adapta al contenido o espacio disponible
- **`min-content`**: Mínimo sin romper contenido
- **`max-content`**: Máximo sin ajustar líneas
- **`fit-content`**: Se ajusta al contenido sin exceder límite

---

## **2. GRID-TEMPLATE-COLUMNS**

### **Sintaxis básica:**
```css
grid-template-columns: auto auto auto;        /* 3 columnas automáticas */
grid-template-columns: 100px 20em 25%;        /* Diferentes medidas */
grid-template-columns: 1fr 2fr 1fr;           /* Con fracciones */
```

### **Con REPEAT():**
```css
/* repeat(cantidad, tamaño) */
grid-template-columns: repeat(4, 1fr);                      /* 4 columnas iguales */
grid-template-columns: repeat(4, minmax(200px, 1fr));      /* 4 columnas con límites */
```

### **Combinación compleja:**
```css
/* Del documento ENTREGABLE: */
grid-template-columns: repeat(2, min-content) auto 2fr minmax(max-content, 1fr);
/* = min-content | min-content | auto | 2fr | minmax(...) */
```

---

## **3. GRID-TEMPLATE-ROWS**
```css
grid-template-rows: auto auto;           /* 2 filas automáticas */
grid-template-rows: repeat(3, 100px);    /* 3 filas de 100px */
```

---

## **4. FUNCIÓN MINMAX()**
**Define tamaño mínimo y máximo de columnas/filas**

```css
/* Sintaxis: minmax(mínimo, máximo) */
minmax(200px, 1fr)           /* Min 200px, max 1 fracción */
minmax(max-content, 1fr)     /* Min = contenido, max = 1fr */
minmax(200px, 230px)         /* Rango entre 200-230px */
```

**Ejemplos del workspace:**
```css
grid-template-columns: repeat(4, minmax(200px, 1fr));
/* 4 columnas: mínimo 200px, máximo reparte espacio */
```

---

## **5. AUTO-FILL vs AUTO-FIT**
**Grid responsive automático**

### **AUTO-FILL:**
```css
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```
- Crea **todas las columnas posibles** (incluso vacías)
- Mantiene columnas vacías si hay espacio

### **AUTO-FIT:**
```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```
- Crea columnas **solo para contenido**
- Colapsa columnas vacías
- Expande items para llenar espacio

### **Diferencia clave:**
- `auto-fill`: Mantiene estructura con columnas vacías
- `auto-fit`: Colapsa vacías y expande items

---

## **6. GRID-AUTO-FLOW**
**Controla cómo se colocan automáticamente los items**

```css
grid-auto-flow: row;          /* Por filas (default) */
grid-auto-flow: column;       /* Por columnas */
grid-auto-flow: row dense;    /* Rellena huecos vacíos */
grid-auto-flow: column dense; /* Columnas + relleno */
```

**Ejemplo del workspace:**
```css
grid-auto-flow: row dense;  
/* Llena todos los espacios vacíos del grid */
```

---

## **7. POSICIONAMIENTO DE ITEMS**

### **Método 1: Por líneas**
```css
.item {
    grid-row-start: 2;        /* Comienza en fila 2 */
    grid-row-end: 4;          /* Termina antes de fila 4 */
    grid-column-start: 1;     /* Comienza en columna 1 */
    grid-column-end: 6;       /* Termina antes de columna 6 */
}
```

### **Método 2: Shorthand**
```css
.item {
    grid-row: 2 / 4;         /* De fila 2 a 4 */
    grid-column: 1 / 6;      /* De columna 1 a 6 */
}
```

### **Método 3: Con SPAN**
```css
.item {
    grid-row: 2 / span 2;      /* Desde fila 2, ocupa 2 filas */
    grid-column: 1 / span 5;   /* Desde col 1, ocupa 5 cols */
}
```

---

## **8. GRID TEMPLATE AREAS**
**Nombra áreas del grid para posicionamiento visual**

```css
.contenedor {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-template-areas: 
        "lateral cabecera cabecera cabecera"
        "lateral cuerpo cuerpo cuerpo"
        "pie pie - -";
    /* El guión (-) indica celda vacía */
}

.cabecera { grid-area: cabecera; }
.lateral  { grid-area: lateral; }
.cuerpo   { grid-area: cuerpo; }
.pie      { grid-area: pie; }
```

**Ventajas:**
- Visual e intuitivo
- Fácil reorganización de layout
- Código más legible

---

## **9. GAP (ESPACIADO)**

```css
gap: 20px;                    /* Mismo espacio en filas y columnas */
column-gap: 5px;              /* Solo entre columnas */
row-gap: 5px;                 /* Solo entre filas */
gap: 10px 20px;               /* 10px filas, 20px columnas */
```

---

## **10. ALINEACIÓN**

### **A nivel de contenedor (todos los items):**
```css
justify-items: start | end | center | stretch;   /* Horizontal */
align-items: start | end | center | stretch;     /* Vertical */
```

### **A nivel de item individual:**
```css
justify-self: start | end | center | stretch;    /* Horizontal */
align-self: start | end | center | stretch;      /* Vertical */
```

**Ejemplos del workspace:**
```css
.item {
    align-self: end;      /* Alinea al final verticalmente */
    align-self: center;   /* Centra verticalmente */
}
```

---

## **11. TAMAÑOS MÁXIMOS Y MÍNIMOS**

```css
max-width: fit-content;     /* Ancho máximo = contenido */
max-height: fit-content;    /* Alto máximo = contenido */
min-height: 600px;          /* Alto mínimo del grid */
```

---

## **12. SELECTORES AVANZADOS**

### **Seleccionar grids específicos:**
```css
.gc:first-of-type { }           /* Primer grid */
.gc:nth-of-type(2) { }          /* Segundo grid */
.gc:nth-child(4) { }            /* Cuarto hijo */
:nth-child(4 of .gc) { }        /* Cuarto elemento con clase .gc */
```

### **Seleccionar items dentro de grid:**
```css
.gc > div { }                   /* Todos los divs hijos directos */
.gc > div:nth-child(4) { }      /* Cuarto hijo del grid */
```

---

## **13. ESTRUCTURA BÁSICA GRID**

```css
.grid-container {
    display: grid;                              /* Activa Grid */
    grid-template-columns: repeat(3, 1fr);      /* 3 columnas iguales */
    grid-template-rows: auto auto;              /* 2 filas auto */
    gap: 20px;                                  /* Espacio entre items */
    min-height: 600px;                          /* Altura mínima */
}
```

---

## **14. EJEMPLOS PRÁCTICOS**

### **Grid básico 3 columnas:**
```css
.grid {
    display: grid;
    grid-template-columns: auto auto auto;
}
```

### **Grid responsive:**
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
```

### **Grid con áreas nombradas:**
```css
.layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar content content"
        "footer footer footer";
}
```

### **Grid mixto (del workspace):**
```css
.grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) 500px 20%;
    /* Columnas auto + columna fija 500px + columna 20% */
}
```

---

## **15. COMPARATIVA RÁPIDA**

| Concepto | Opción 1 | Opción 2 | Diferencia |
|----------|----------|----------|------------|
| **Medidas** | `fr` | `px` | Flexible vs Fijo |
| **Auto** | `auto-fill` | `auto-fit` | Mantiene vacías vs Colapsa |
| **Flow** | `row` | `column` | Horizontal vs Vertical |
| **Dense** | `dense` | sin dense | Rellena huecos vs Orden natural |
| **Contenido** | `min-content` | `max-content` | Mínimo vs Máximo |

---

## **💡 TIPS PARA EL EXAMEN:**

1. **Grid lines empiezan en 1**, no en 0
2. **`minmax()`** = control de límites
3. **`fr`** reparte espacio DISPONIBLE (no total)
4. **`auto-fit`** para responsive (colapsa vacías)
5. **`grid-template-areas`** = layout visual y fácil
6. **`dense`** rellena huecos automáticamente
7. **`gap`** no afecta bordes externos
8. **Orden de medida**: `grid-row: inicio / fin`
9. **`-`** en template-areas = celda vacía
10. **`repeat(4, 1fr)`** = 4 columnas iguales

---

## **🎯 ESQUEMA MENTAL:**

```
GRID CONTAINER
├── display: grid
├── COLUMNAS → grid-template-columns
├── FILAS → grid-template-rows
├── ESPACIADO → gap
├── FLOW → grid-auto-flow
├── ÁREAS → grid-template-areas
└── ALINEACIÓN → justify-items / align-items

GRID ITEMS
├── POSICIÓN → grid-row / grid-column
├── ÁREA → grid-area
└── ALINEACIÓN → justify-self / align-self
```

---

## **📚 EJERCICIOS DE PRÁCTICA**

### **Ejercicio 1: Grid básico**
Crea un grid de 3 columnas iguales con gap de 10px.

<details>
<summary>Solución</summary>

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```
</details>

### **Ejercicio 2: Grid responsive**
Crea un grid que tenga como mínimo 250px por columna y se adapte automáticamente.

<details>
<summary>Solución</summary>

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}
```
</details>

### **Ejercicio 3: Layout con áreas**
Crea un layout con header (4 columnas), sidebar (1 columna), content (3 columnas) y footer (4 columnas).

<details>
<summary>Solución</summary>

```css
.layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "header header header header"
        "sidebar content content content"
        "footer footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```
</details>

---

## **🔍 ERRORES COMUNES**

1. **Olvidar `display: grid`** - Sin esto, nada funciona
2. **Confundir grid lines** - Empiezan en 1, no en 0
3. **Usar `auto-fill` cuando necesitas `auto-fit`** - O viceversa
4. **No entender `fr`** - Reparte espacio disponible, no total
5. **Mezclar posicionamiento** - Usar líneas y áreas a la vez puede causar conflictos
6. **Olvidar que `gap` no afecta bordes externos** - Solo entre items

---

**Creado el 15 de diciembre de 2025**  
**Basado en los archivos del workspace: 04_Grid**
