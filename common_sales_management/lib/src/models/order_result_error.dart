class OrderResultError {
  final String message;

  const OrderResultError({this.message});

  static OrderResultError fromJson(dynamic json) {
    return OrderResultError(
      message: json['message'] as String,
    );
  }
}