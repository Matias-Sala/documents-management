// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'factura.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Factura _$FacturaFromJson(Map<String, dynamic> json) {
  return Factura(
      json['numero'] as int,
      json['descripcion'] as String,
      json['monto'] as num,
      DateTime.parse(json['fecha'] as String),
      json['documentoPath'] as String,
      json['estado'] as String,
      json['clienteId'] as String);
}

Map<String, dynamic> _$FacturaToJson(Factura instance) => <String, dynamic>{
      'numero': instance.numero,
      'descripcion': instance.descripcion,
      'monto': instance.monto,
      'fecha': instance.fecha.toIso8601String(),
      'documentoPath': instance.documentoPath,
      'estado': instance.estado,
      'clienteId': instance.clienteId
    };
