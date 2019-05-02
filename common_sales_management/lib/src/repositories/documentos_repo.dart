import 'package:common_sales_management/src/models/models.dart';
import 'package:common_sales_management/src/services/services.dart';

class DocumentosRepo {
  final documentosService = DocumentosApiService();
  
  Future <List<Factura>> searchFacturas(String term) => documentosService.searchFacturas(term);
  
}