import 'package:json_annotation/json_annotation.dart';

part 'cheque.g.dart';

@JsonSerializable(nullable: false)
class Cheque {
  int number;
  String amount;
  DateTime date;
  String imagePath;

  Cheque(this.number, this.amount, this.date, this.imagePath);

  factory Cheque.fromJson(Map<String, dynamic> json) => _$ChequeFromJson(json);
  Map<String, dynamic> toJson() => _$ChequeToJson(this);
}