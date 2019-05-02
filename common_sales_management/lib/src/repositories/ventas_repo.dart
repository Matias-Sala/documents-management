import 'package:common_sales_management/src/models/models.dart';
import 'package:common_sales_management/src/services/services.dart';

class VentasRepo {
  final salesService = VentasApiService();
  
  Future <List<Recibo>> getReceips() => salesService.getReceiptList();
  
}