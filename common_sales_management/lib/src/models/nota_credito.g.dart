// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'nota_credito.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NotaCredito _$NotaCreditoFromJson(Map<String, dynamic> json) {
  return NotaCredito(
      json['tipo'] as String,
      json['numero'] as int,
      json['monto'] as num,
      DateTime.parse(json['fecha'] as String),
      json['descripcion'] as String);
}

Map<String, dynamic> _$NotaCreditoToJson(NotaCredito instance) =>
    <String, dynamic>{
      'tipo': instance.tipo,
      'numero': instance.numero,
      'monto': instance.monto,
      'fecha': instance.fecha.toIso8601String(),
      'descripcion': instance.descripcion
    };