

class OrderItem {
    final int id;
  final String producto;
  final int productoId;
  final int cantidad;
  final String unidad;
  final String precio;
  final String descuento;

  const OrderItem ({this.id, 
                    this.producto, 
                    this.productoId, 
                    this.unidad, 
                    this.cantidad, 
                    this.descuento, 
                    this.precio});

static OrderItem fromJson(dynamic json) {
    return OrderItem(
      id: json['id'] as int,
      productoId: json['productoId'] as int,
      producto: json['producto'] as String,
      cantidad: json['cantidad'] as int,
      unidad: json['vendedor'] as String,
      precio: json['precio'] as String,
      descuento: json['descuento'] as String
    );
  }                    
}
