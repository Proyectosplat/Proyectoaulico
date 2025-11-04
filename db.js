// --- INICIO BASE DE DATOS EN MEMORIA ---
const DB = {
  EMPRESAS: [],
  SUCURSALES: [],
  CLIENTES: [],
  EMPLEADOS: [],
  USUARIO_SISTEMAS: [],
  CATEGORIA_PRODUCTOS: [],
  PRODUCTOS: [],
  MODIFICADORES: [],
  PRODUCTOS_MODIFICADORES: [],
  MESAS: [],
  VENTAS: [],
  PROVEEDORES: [],
  MATERIAS_PRIMAS: [],
  INVENTARIO_SUCURSALES: [],
  ORDEN_COMPRAS: [],
  DETALLE_ORDEN_COMPRA: [],
  RECETAS: [],
  MOVIMIENTO_INVENTARIOS: [],
  RESERVACIONES: [],
  DELIVERYS: [],
  TIPO_SERVICIOS: [],
  METODOS_PAGOS: [],
  PRECIO_MATERIAS_PRIMAS: [],
  CONFIGURACION_IMPUESTOS: [],
  ESTADO_PRODUCTOS: [],
  ESTADO_RESERVACIONES: [],
  Inventarios: [],
  Valores: []
};

// Ejemplo de inserción de datos mínimos para cada tabla
DB.EMPRESAS.push({
  id_empresa: 1,
  nombre_empresa: "Ejemplo S.A.",
  rfc: "RFC123456",
  direccion_fiscal: "Calle Falsa 123",
  telefono: "555-1234",
  email: "info@ejemplo.com",
  logo: "logo.png",
  fecha_creacion: new Date().toISOString(),
  activa: true
});

// ...agrega aquí el resto de los datos de ejemplo igual que antes...

// Puedes agregar funciones de acceso aquí si lo deseas
// function getClientes() { return DB.CLIENTES; }
// function addEmpleado(empleado) { DB.EMPLEADOS.push(empleado); }
