import 'package:json_annotation/json_annotation.dart';

part 'nota_credito.g.dart';

@JsonSerializable(nullable: false)
class NotaCredito {
  String tipo;
  int numero;
  num monto;
  DateTime fecha;
  String descripcion;

  NotaCredito(this.tipo, 
              this.numero, 
              this.monto, 
              this.fecha, 
              this.descripcion);

  factory NotaCredito.fromJson(Map<String, dynamic> json) => _$NotaCreditoFromJson(json);
  Map<String, dynamic> toJson() => _$NotaCreditoToJson(this);
}