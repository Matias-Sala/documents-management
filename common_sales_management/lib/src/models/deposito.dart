import 'package:json_annotation/json_annotation.dart';

part 'deposito.g.dart';

@JsonSerializable(nullable: false)
class Deposito {
  int number;
  String amount;
  DateTime date;
  String imagePath;

  Deposito(this.number, this.amount, this.date, this.imagePath);

  factory Deposito.fromJson(Map<String, dynamic> json) => _$DepositoFromJson(json);
  Map<String, dynamic> toJson() => _$DepositoToJson(this);
}