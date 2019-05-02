import 'package:common_sales_management/common_sales_managemnet.dart';

class Order {
  final int id;
  final String fecha;
  final String fechaEntrega;
  final String cliente;
  final String vendedor;
  final String estado;
  final List<OrderItem> items;

  const Order({this.id, this.fecha, this.fechaEntrega, this.cliente, this.estado, this.items, this.vendedor});

  static Order fromJson(dynamic json) {
    return Order(
      id: json['id'] as int,
      fecha: json['fecha'] as String,
      fechaEntrega: json['fechaEntrega'] as String,
      cliente: json['cliente'] as String,
      vendedor: json['vendedor'] as String,
      estado: json['estado'] as String,
      items: (json['items'] as List<dynamic>)
        .map((dynamic item) =>
            OrderItem.fromJson(item as Map<String, dynamic>))
        .toList()
    );
  }
}