// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'deposito.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Deposito _$DepositoFromJson(Map<String, dynamic> json) {
  return Deposito(json['number'] as int, json['amount'] as String,
      DateTime.parse(json['date'] as String), json['imagePath'] as String);
}

Map<String, dynamic> _$DepositoToJson(Deposito instance) => <String, dynamic>{
      'number': instance.number,
      'amount': instance.amount,
      'date': instance.date.toIso8601String(),
      'imagePath': instance.imagePath
    };
