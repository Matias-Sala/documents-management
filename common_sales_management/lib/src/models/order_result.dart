import 'package:common_sales_management/common_sales_managemnet.dart';

class OrderResult {
  final List<Order> orders;

  const OrderResult({this.orders});

  static OrderResult fromJson(Map<String, dynamic> json) {
    final orders = (json['orders'] as List<dynamic>)
        .map((dynamic order) =>
            Order.fromJson(order as Map<String, dynamic>))
        .toList();
    return OrderResult(orders: orders);
  }
}