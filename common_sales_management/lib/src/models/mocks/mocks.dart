import 'package:json_annotation/json_annotation.dart';
part 'mocks.g.dart';

@JsonLiteral('mock_recibo.json', asConst: true)
List<Map<String, dynamic>> get mockRecibo => _$mockReciboJsonLiteral;

@JsonLiteral('mock_factura.json', asConst: true)
List<Map<String, dynamic>> get mockFactura => _$mockFacturaJsonLiteral;