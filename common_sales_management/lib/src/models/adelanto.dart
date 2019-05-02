import 'package:json_annotation/json_annotation.dart';

part 'adelanto.g.dart';

@JsonSerializable(nullable: false)
class Adelanto {
  int number;
  String amount;
  DateTime date;

  Adelanto(this.number, this.amount, this.date);

  factory Adelanto.fromJson(Map<String, dynamic> json) => _$AdelantoFromJson(json);
  Map<String, dynamic> toJson() => _$AdelantoToJson(this);
}