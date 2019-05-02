import 'package:json_annotation/json_annotation.dart';

part 'factura.g.dart';

@JsonSerializable(nullable: false)
class Factura {
  int numero;
  String descripcion;
  num monto;
  DateTime fecha;
  String documentoPath;
  String estado;
  String clienteId;
  
  Factura(this.numero, 
          this.descripcion, 
          this.monto, 
          this.fecha, 
          this.documentoPath,
          this.estado,
          this.clienteId);

  factory Factura.fromJson(Map<String, dynamic> json) => _$FacturaFromJson(json);
  Map<String, dynamic> toJson() => _$FacturaToJson(this);
}