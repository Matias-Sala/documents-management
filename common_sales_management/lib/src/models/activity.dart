
class Activity {
  final int id;
  final String name;
  final String category;
  final String date;
  final String content;
  final bool completed;

  Activity({this.id, this.name, this.category, this.date, this.content, this.completed});

  static Activity fromJson(dynamic json) {
    return Activity(
      id: json['id'] as int,
      name: json['name'] as String,
      category: json['category'] as String,
      date: json['time'] as String,
      content: json['color'] as String,
      completed: json['completed'] as bool
    );
  }
}