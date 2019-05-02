import 'package:equatable/equatable.dart';

abstract class DocumentosSearchEvent extends Equatable {
  DocumentosSearchEvent([List props = const []]) : super(props);
}

class TextChanged extends DocumentosSearchEvent {
  final String text;

  TextChanged({this.text}) : super([text]);

  @override
  String toString() => 'TextChanged { text: $text }';
}